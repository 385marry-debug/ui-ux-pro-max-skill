const fs=require('fs'),vm=require('vm'),path=require('path'),assert=require('node:assert/strict'),root=path.resolve(__dirname,'..');
const parts=fs.readFileSync(root+'/build.py','utf8').match(/parts = \[(.*?)\]/s)[1].match(/'([^']+)'/g).map(x=>x.slice(1,-1)),c={};vm.createContext(c);vm.runInContext(parts.slice(0,parts.indexOf('app.js')).map(n=>fs.readFileSync(root+'/src/'+n,'utf8')).join('\n')+';this.d={contextSenseReviews,contextSenseAliases,contextSenseApplied,contextNotebook,reviewedContextCandidates,syncReadings,questionBank,restoreLearningExtensions};',c);const d=c.d;
const gold=[
['course','A1-6','compras','allí compras libros','comprar','v.'],
['course','B1-5','ayuda','aprender en grupo ayuda porque podemos compartir dudas','ayudar','v.'],
['reading','sr-01','pregunta','Diego pregunta','preguntar','v.'],
['reading','sr-07','pregunta','Lina pregunta','preguntar','v.'],
['reading','sr-07','pregunta','Irene hace una pregunta sobre la cantidad de arroz','pregunta','n. f.'],
['reading','sr-14','Pregunta','Pregunta si puede abrirlo ahora','preguntar','v.'],
['reading','sr-14','preguntas','Lina evita preguntas demasiado personales','pregunta','n. f.'],
['reading','sr-10','pasa','le pasa el teléfono','pasar','v.'],
['reading','sr-16','pasa','Qué rápido pasa el tiempo','pasar','v.'],
['reading','sr-18','firma','quién firma el texto','firmar','v.'],
['reading','sr-19','muestra','Primero muestra el número de reserva','mostrar','v.'],
['reading','sr-22','Muestra','Muestra algo más limitado','mostrar','v.'],
['reading','quality-domain-mediation','pregunta','Una vecina pregunta si debe ir el sábado','preguntar','v.'],
['reading','quality-domain-mediation','pregunta','con una pregunta breve','pregunta','n. f.'],
['reading','quality-B2-01','muestra','mencionaría la muestra y la fecha','muestra','n. f.'],
['course','A2-7','ayuda','Gracias por tu ayuda','ayuda','n. f.'],
['reading','sr-07','compras','Irene va de compras','compra','n. f.'],

['course','A1-4','Trabajo','Trabajo en una tienda.','trabajar','v.'],
['reading','sr-02','trabajo','Yo trabajo en una empresa.','trabajar','v.'],
['reading','easy-sr-06','Trabajo','Trabajo por la tarde.','trabajar','v.'],
['reading','sr-14','trabajo','Sara responde que tiene mucho trabajo.','trabajo','n. m.'],
['reading','sr-14','trabajo','Hace dos años que trabajo aquí','trabajar','v.'],
['reading','sr-15','cuenta','Irene cuenta que en su familia comen uvas durante las campanadas.','contar','v.'],
['reading','sr-17','cuenta','Clara cuenta que se casó hace diez años.','contar','v.'],
['reading','sr-19','cuenta','Nora cuenta la experiencia','contar','v.'],
['course','B2-3','falta','Si falta algo, avisaremos al equipo','faltar','v.'],
['reading','sr-20','falta','pero sí falta una referencia clara','faltar','v.'],
['reading','sr-21','falta','qué información falta','faltar','v.'],
['reading','sr-21','falta','harían falta otras medidas','falta','n. f.'],
['reading','sr-18','falta','También hacen falta contextos','falta','n. f.'],
['course','A2-1','fui','Ayer fui al centro.','ir','v.'],
['reading','sr-16','fue','Pablo fue con sus primos y tocó varias canciones.','ir','v.'],
['reading','sr-17','fue','Su boda fue civil','ser','v.'],
['reading','sr-17','cena','con el de una cena anterior','cena','n. f.'],
['reading','sr-09','trabajo','depende de su trabajo y sus responsabilidades','trabajo','n. m.']
];for(const[source,ch,form,sentence,lemma,pos]of gold){const candidates=d.reviewedContextCandidates(source,ch,form,sentence);assert.ok(candidates.length>0,source+' '+ch+' '+form);assert.ok(candidates.every(w=>w.lemma===lemma&&w.pos.startsWith(pos)),sentence+' '+candidates.map(w=>w.lemma))}
const unknown=d.reviewedContextCandidates('reading','sr-14','trabajo','Un contexto sin pistas suficientes');assert.ok(unknown.some(w=>w.lemma==='trabajo')&&unknown.some(w=>w.lemma==='trabajar'),'unknown context must not force one sense');
assert.equal(d.contextSenseReviews.length,49);assert.ok(d.contextSenseAliases.size>0);for(const[id,target]of d.contextSenseAliases){assert.ok(!d.contextNotebook.some(w=>w.id===id));assert.ok(d.contextNotebook.some(w=>w.id===target))}
const [oldId,newId]=[...d.contextSenseAliases][0],saved=d.restoreLearningExtensions({},{learningWorkspace:{savedContexts:{[oldId]:true},contextCards:{[oldId]:{status:'known',due:123}}}});assert.equal(saved.learningWorkspace.savedContexts[newId],true);assert.equal(saved.learningWorkspace.contextCards[newId].status,'known');
const r=d.syncReadings.find(r=>r.id==='sr-14');assert.ok(r.script.includes('Sara responde que tiene mucho trabajo.'));assert.ok(!r.script.includes('lleva mucho trabajo'));assert.ok(r.questions.every(q=>q.passage===r.script));assert.equal(r.audio,'assets/audio/read-sr-14-sense-reviewed.mp3');assert.ok(fs.statSync(root+'/'+r.audio).size>1000);assert.equal(new Set(d.contextNotebook.map(w=>w.id)).size,d.contextNotebook.length);assert.equal(new Set(d.questionBank.map(q=>q.id)).size,d.questionBank.length);
const report={passed:true,scope:'49组明确语境的同形词核对与阅读查词、旧收藏恢复的专项检查，不是全词典逐义审校。',counts:{reviewRules:49,independentSentenceFixtures:gold.length,mergedLegacyWordIds:d.contextSenseAliases.size,reviewedNotebookEntries:d.contextNotebook.filter(w=>w.reviewedExamples?.length).length},fixed:['trabajo按句区分名词与trabajar动词，不整篇强行替换','cuenta在讲述语境中关联contar，cena在una cena anterior中为名词','pregunta、ayuda、muestra、firma、compras与pasa逐句区分，保留各自正确名词用法','falta区分faltar动词与hacer falta中的名词','fui/fue按故事分别关联ir或ser，保留合理其他词条','tiene mucho trabajo同步更新原文、题目引文、词本与不可变音频地址','合并词条恢复旧收藏与自评；无法确认的同形词保留候选'],remaining:['这里只对明确列出的句子作语境核对；其他自动词典补充义仍需逐条复核','听说与写作的长期能力评估仍不足，规则检查不等于教师核阅','C1/C2仍为专项覆盖，不能称完整课程或全站无遗漏']};fs.writeFileSync(root+'/context-sense-content-validation.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
