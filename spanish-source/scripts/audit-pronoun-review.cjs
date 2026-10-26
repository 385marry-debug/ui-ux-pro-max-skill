const fs=require('fs'),vm=require('vm'),path=require('path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),parts=fs.readFileSync(root+'/build.py','utf8').match(/parts = \[(.*?)\]/s)[1].match(/'([^']+)'/g).map(s=>s.slice(1,-1)),c={};vm.createContext(c);
vm.runInContext(parts.slice(0,parts.indexOf('app.js')).map(n=>fs.readFileSync(root+'/src/'+n,'utf8')).join('\n')+';this.d={pronounReviewRows,remainingGrammarLessons,foundationLessons,grammarGuide,byId,questionBank,allDetailedGrammarLessons};',c);const d=c.d;
const expected={
 'bridge-direct':['la','直接宾语','nos','la','a ella强调或明确对象，la与它配合','Hay tres alumnos.','基础练lo/la主线，同时说明认可的leísmo范围','las'],
 'bridge-indirect':['les','le','me','te','al problema，这个问题','le','le','保留le'],
 pronouns:['la','te','lo','lo','las','间接宾语在前，直接宾语在后','me','dámelo']
};
let checked=0;for(const [suffix,answers]of Object.entries(expected))for(let i=0;i<answers.length;i++){
 const q=d.byId.get('pronoun-review-'+suffix+'-'+i);assert.equal(q?.answer,answers[i],q?.id);assert.ok(q.explain);assert.ok(q.explain.length>15);if(q.options){assert.ok(q.options.includes(q.answer));assert.equal(new Set(q.options).size,q.options.length)}checked++;
}
for(const row of d.pronounReviewRows){const id='foundation-'+row.suffix,l=d.remainingGrammarLessons.find(l=>l.id===id),f=d.foundationLessons.find(f=>f.id===id),g=d.grammarGuide.find(g=>g.id===id),s=l.sections.find(s=>s.key===row.section);assert.ok(s.paragraphs.includes(row.paragraphs[0]));assert.ok(s.rows.every(r=>r.length===s.columns.length));assert.equal(l.groups.filter(g=>g.key==='review-roles').length,1);assert.equal(l.examples.filter(e=>e.word===row.example.word).length,1);assert.equal(l.walkthroughs.filter(e=>e.word===row.example.word).length,1);assert.ok(g.lesson.steps.includes(row.paragraphs[0]));assert.equal(f.questions.length,g.questions.length);assert.ok(row.questions.length===8);for(const q of l.groups.find(g=>g.key==='review-roles').questions){assert.ok(f.questions.includes(q));assert.equal(q.genderSection,row.section)}assert.ok(l.ruleSummary.length>=5);}
assert.equal(d.allDetailedGrammarLessons.length,48);assert.equal(new Set(d.questionBank.map(q=>q.id)).size,d.questionBank.length);
for(const name of ['grammar-depth.js','textbook-bridges.js','foundation-lessons.js'])assert.ok(!fs.readFileSync(root+'/src/'+name,'utf8').includes('人先物后'));
// Old IDs survive; corrections change a misleading rationale rather than rewriting saved answer histories.
for(const id of ['foundation-pronouns-q0','continued-pronouns-starting-0','continued-bridge-direct-starting-0','continued-bridge-indirect-starting-0'])assert.ok(d.byId.has(id),id);
const report={passed:true,date:'2026-10-26',scope:'仅审校并补强现有三个宾语代词专题；未声称两本教材已经逐页完整验收。',lessons:3,newQuestions:24,independentAnswerFixtures:checked,totalQuestionPositions:d.questionBank.length,changes:['把三个旧来源层的“人先物后”改成句法角色顺序','直接对象可以指人；me/te/nos/os也可作直接对象','人称a、重读对象复指与有界的leísmo说明','间接对象可以指事物，le/les数量与直接对象分开','le/les变se的条件，me/te/nos/os不变','单数直接对象不因复数接收者而改复数','同步规则摘要、细讲、表格、逐步示例与24题；48专题和已有章节/题目ID保留'],limits:['这是独立语法审校，未在本轮重新逐页核对上传的两本书','leísmo及各地代词重复体系仅解释基础主线和部分边界，不作全面方言描写','客观题通过不等于口语交际或整体语言等级认证']};fs.writeFileSync(root+'/pronoun-review-content-validation.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
