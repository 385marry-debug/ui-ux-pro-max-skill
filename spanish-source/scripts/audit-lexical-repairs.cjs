const fs=require('fs'),vm=require('vm'),path=require('path'),assert=require('node:assert/strict'),root=path.resolve(__dirname,'..');const parts=fs.readFileSync(root+'/build.py','utf8').match(/parts = \[(.*?)\]/s)[1].match(/'([^']+)'/g).map(s=>s.slice(1,-1)),c={};vm.createContext(c);vm.runInContext(parts.slice(0,parts.indexOf('app.js')).map(n=>fs.readFileSync(root+'/src/'+n,'utf8')).join('\n')+';this.d={courseBlueprints,units,systemGrammarOrder,foundationLessons,allDetailedGrammarLessons,learningPath,contextNotebook,contextWordOccurrences,byId,questionBank,vocab};',c);const d=c.d;

// Independent sentence fixtures: identity must follow meaning in the actual passage.
const has=(source,chapter,form,lemma)=>d.contextNotebook.some(w=>w.source===source&&w.chapters.includes(chapter)&&w.forms?.includes(form)&&w.lemma===lemma);
assert.ok(has('course','A1-1','Estudio','estudiar'),'Estudio español: first-person verb, not a noun');
assert.ok(has('course','A1-4','estudio','estudiar'));
assert.ok(has('reading','sr-01','ve','ver'),'Lina ve a Diego: sees, not go');
assert.ok(has('reading','sr-16','ve','ver'));
assert.ok(has('course','A2-2','comida','comida'),'preparaba la comida: feminine noun, not comer');
assert.ok(has('reading','sr-11','comida','comida'));
for(const [form,lemma]of [['Ana','ano'],['Lucía','lucir'],['Lina','lino'],['María','maría']])assert.ok(!d.contextNotebook.some(w=>w.forms?.includes(form)&&w.lemma===lemma),'Person names must not become '+lemma);
for(const [head,good,bad]of [['enorme','巨大','肉眼'],['alguno','一些','个人'],['cárcel','监狱','钳子'],['personaje','角色','任务']]){const w=d.vocab.find(w=>w.word===head);assert.ok(w.meaning.includes(good));assert.ok(!w.meaning.includes(bad))}
console.log('14 independent contextual lexical checks passed');
