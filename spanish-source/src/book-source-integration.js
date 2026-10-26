// Install source lessons before search and progress restoration. Old question IDs remain valid.
const bookSourceLessons=[];
function installBookSource(part,g,base,source){
 if(!g||!part.rules.length)throw Error('Invalid source lesson '+part.id);
 if(part.title)g.title=part.title;
 const oldQuestionIds=(g.questions||[]).map(q=>q.id);
 const reused=(base.questions||[]).flatMap((raw,i)=>{const q=byId.get('sg-'+part.id+'-q'+i);if(!q||q.answer!==raw.answer||q.prompt!==raw.prompt)throw Error('Original practice mismatch '+part.id+' '+i);if(part.practiceIndices&&!part.practiceIndices.includes(i)){q.supersededBy=g.id;return []}q.reusedPractice=true;q.sourcePart=part.id;q.guide=g.id;delete q.supersededBy;return [q]});
 const added=(part.questions||[]).map((q,i)=>({...q,id:'source-'+part.id+'-new-'+i,level:g.level,cat:g.domain,guide:g.id,sourcePart:part.id,speak:base.examples?.[0]?.[0]||g.example}));
 for(const q of added){if(byId.has(q.id))throw Error('Duplicate source question '+q.id);questionBank.push(q);byId.set(q.id,q)}
 const questions=[...reused,...added];
 const table=part.table?.refRepair?textbookRuleRepairs.find(r=>r.id===part.table.refRepair):part.table;
 if(part.table?.refRepair&&!table)throw Error('Missing source table '+part.table.refRepair);
 const tables=[];if(base.table?.length)tables.push({columns:base.table[0],rows:base.table.slice(1)});if(table?.rows?.length)tables.push({columns:table.columns,rows:table.rows});
 const notes=part.notes||part.examples||[];
 const examples=[...(part.separateBasics?[]:base.examples||[]),...part.rules.filter(r=>r.es).map(r=>[r.es,r.zh||''])];
 const lesson={id:g.id,sourcePart:part.id,title:g.title,level:g.level,chapter:part.chapter||+part.id.split('-')[1],source,rules:part.rules,notes,why:part.why||base.why||g.rule,steps:part.separateBasics?[]:base.steps||[],examples,errors:part.separateBasics?[]:base.errors||[],task:part.separateBasics?'从本节例词中选三个，写出名词形式、中文义和本节讨论的性或数，并说明判断依据。':base.task||'',questions,tables,related:[...new Set([g.genderCanonical,...(part.related||[])].filter(id=>id&&id!==g.id))],previousQuestionIds:oldQuestionIds};
 bookSourceLessons.push(lesson);g.sourceLesson=lesson;g.questions=questions;g.question=questions[0];g.rule=part.rules.map(r=>r.rule).join(' ');g.lesson={why:lesson.why,steps:part.rules.flatMap(r=>[r.rule,r.detail||'']).filter(Boolean).concat(lesson.steps,notes),comparisons:examples,errors:lesson.errors,transfer:lesson.task};
 return lesson;
}
for(const part of grammarBookSourceParts){
 const base=subsectionLessons.find(l=>l.subsection===part.id),g=grammarGuide.find(g=>g.subsection===part.id);if(!base)throw Error('Missing source subsection '+part.id);
 installBookSource(part,g,base,{book:'Gramática básica del estudiante de español',pdfPages:part.pdfPages,printedPages:part.printedPages,state:'正文规则首轮已核对；原书练习未逐题复刻或验收'});
}
for(const part of caminanteSourceParts){
 const entries=textbookCoverage.filter(r=>r.chapter===part.chapter),inventory=syncPageInventory.chapters.find(c=>c.chapter===part.chapter);
 part.related=[...new Set(entries.map(r=>r.guide))];
 const g={id:'source-caminante-'+part.chapter,title:'教材第'+part.chapter+'课：规则、补充句型与易错点',level:part.chapter<=10?'A1':'A2',domain:'教材逐课语法',rule:part.rules[0].rule,example:part.examples[0][0],translation:part.examples[0][1],pitfall:part.notes.join(' '),questions:[]};grammarGuide.push(g);
 installBookSource(part,g,{why:'本课按教材顺序串起独立语法点。先看规则，再按需要打开下方单项详解；不要求先读课文。',steps:[],examples:part.examples,errors:[],task:'从本课选一个规则，用自己的信息写两句，并指出主语、发生变化的词及理由。',questions:[]},{book:'西班牙语公共课·上册（Caminante）',pdfPages:inventory.parts.filter(p=>[2,3,4].includes(p.part)).flatMap(p=>Array.from({length:p.end-p.start+1},(_,i)=>p.start+i)),printedPages:inventory.parts.filter(p=>[2,3,4].includes(p.part)).flatMap(p=>Array.from({length:p.end-p.start+1},(_,i)=>p.start+i-1)),state:'语法资源及语言生活中已明确讲解的句型首轮对照；不宣称教材所有词汇、原题、音频已验收'});
}
const sourceRuleLedger={version:1,date:'2026-10-26',scope:'正文教学规则的首轮对照与独立改写，目录小节数不等于规则总数；原题、录音、所有附录形式不据此宣称逐项全验收。',books:[{name:'Gramática básica del estudiante de español',chapters:44,subsections:194},{name:'西班牙语公共课·上册',chapters:18,primaryTopicLinks:textbookCoverage.length}],entries:bookSourceLessons.map(l=>({id:l.id,sourcePart:l.sourcePart,title:l.title,chapter:l.chapter,source:l.source,rules:l.rules.map((r,i)=>({key:'source-'+l.sourcePart+'-rule-'+i,rule:r.rule,detail:r.detail||''})),questions:l.questions.map(q=>q.id),reusedPractice:l.questions.filter(q=>q.reusedPractice).length,tables:l.tables.map(t=>({columns:t.columns,rows:t.rows.length})),related:l.related}))};
bookAudit.meta.sourceRulePass=grammarBookSourceParts.length;
for(const row of bookAudit.rows){const l=bookSourceLessons.find(l=>l.sourcePart===row.id);row.rulePass={reviewed:true,pdfPages:l.source.pdfPages,rules:l.rules.map(r=>r.rule),questions:l.questions.map(q=>q.id)};row.reviewDepth=l.source.state;row.gap='本小节已补正文规则首轮核对、条件与例外说明、可检索讲解及'+l.questions.length+'道网站练习。原书全套习题、所有边栏与附录变位逐格二次校对仍单独验收。';row.questionCoverage='本节'+l.questions.length+'道网站练习，含'+l.questions.filter(q=>!q.reusedPractice).length+'道本轮新编补缺题；其余沿用已有自编题，均可作答、查解析和复习。'}

const sourceAppendixModels=['hablar','comer','vivir','andar','caber','caer','conducir','confiar','conocer','construir','creer','dar','decir','dormir','entender','estar','freír','haber','hacer','ir','jugar','morir','mover','oír','pedir','pensar','poder','poner','prohibir','querer','saber','salir','sentir','ser','tener','traer','venir','ver','volar','volver'];
for(const v of sourceAppendixModels)if(!Object.hasOwn(conjugationData,v))throw Error('Missing appendix model '+v);
sourceRuleLedger.appendix={pdfPages:[250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271],models:sourceAppendixModels,state:'40个模型已对应现有变位库；不据存在性检查宣称印刷附录全部格逐项复核'};
