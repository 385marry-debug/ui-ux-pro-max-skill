import {chromium} from '/workspace/ui-ux-pro-max-skill/cli/node_modules/@playwright/test/index.mjs';
import assert from 'node:assert/strict';
import {writeFile} from 'node:fs/promises';
const base=process.env.SITE_URL||'http://127.0.0.1:4193',browser=await chromium.launch({executablePath:'/usr/bin/chromium'}),p=await browser.newPage({viewport:{width:1360,height:1000}}),errors=[];
p.on('pageerror',e=>errors.push(e.message));
await p.goto(base+'/?view=guide&id=foundation-bridge-plural');await p.evaluate(()=>{localStorage.clear();sessionStorage.clear()});await p.reload();
const lessons=await p.evaluate(()=>grammarRewriteLessons.map(l=>({id:l.id,sections:l.sections.length,questions:l.groups.flatMap(g=>g.questions).map(q=>q.id)})));
let solved=0,items=0;
for(const l of lessons){
 await p.goto(base+'/?view=guide&id='+l.id);const card=p.locator('#card-'+l.id);
 assert.equal(await card.locator('.independent-gender-lesson').count(),1);
 assert.equal(await card.locator('.gender-section').count(),l.sections);
 assert.match(await card.textContent(),/不必先读文章/);
 assert.doesNotMatch(await card.textContent(),/先判断名词本身，后续再学冠词与一致/,'gender-only instruction leaked to '+l.id);
 await card.locator('[data-gender-walk="2"]').click();assert.equal(await card.locator('[data-gender-walk="2"]').getAttribute('aria-pressed'),'true');
 await card.locator('[data-foundation-practice]').click();
 for(let i=0;i<l.questions.length;i++){
  const q=await p.evaluate(()=>quiz.list[quiz.index]);assert.equal(q.guide,l.id);assert.ok(l.questions.includes(q.id));
  if(q.kind==='classify'){for(let j=0;j<q.items.length;j++)await p.locator('#classify-'+j).selectOption(q.items[j].answer);items+=q.items.length;await p.locator('#classify-submit').click();assert.equal(await p.locator('.classify-reason.incorrect').count(),0)}
  else if(q.options)await p.locator('[data-answer="'+q.options.indexOf(q.answer)+'"]').click();
  else{await p.locator('#answer').fill(q.answer);await p.locator('#answer-form .btn').click()}
  assert.equal(await p.evaluate(()=>quiz.answers.at(-1).right),true,q.id);assert.match(await p.locator('#quiz-feedback').textContent(),new RegExp(q.explain.slice(0,4).replace(/[.*+?^${}()|[\]\\]/g,'\\$&')));solved++;
  await p.locator('#next-q').click();
 }
 assert.match(await p.locator('.result-number').textContent(),/100/);await p.locator('[data-gender-return]').click();assert.equal(await p.evaluate(()=>guideId),l.id);
}
// A wrong typed form must yield the actual rule, persist on reload, then return to its precise subsection.
await p.goto(base+'/?view=guide&id=foundation-bridge-plural');await p.locator('#card-foundation-bridge-plural [data-gender-group=consonants]').first().click();
await p.locator('#answer').fill('papels');await p.locator('#answer-form .btn').click();assert.equal(await p.evaluate(()=>quiz.answers.at(-1).right),false);assert.match(await p.locator('#quiz-feedback').textContent(),/papeles|加-es/);const attempts=await p.evaluate(()=>data.attempts);await p.reload();assert.equal(await p.evaluate(()=>data.attempts),attempts);assert.match(await p.locator('#quiz-feedback').textContent(),/papeles|加-es/);await p.locator('[data-gender-return]').first().click();assert.ok(await p.locator('#gender-foundation-bridge-plural-section-consonants').isVisible());
// Contrast a wrong choice and a partially wrong classification, not just successful answers.
await p.goto(base+'/?view=guide&id=foundation-core');await p.locator('#card-foundation-core [data-gender-group=state]').first().click();const state=await p.evaluate(()=>quiz.list[quiz.index]);await p.locator('[data-answer="'+state.options.indexOf('es')+'"]').click();assert.equal(await p.evaluate(()=>quiz.answers.at(-1).right),false);assert.match(await p.locator('#quiz-feedback').textContent(),/准备好/);
await p.goto(base+'/?view=guide&id=foundation-bridge-articles');await p.locator('#card-foundation-bridge-articles [data-gender-group=defined]').first().click();const attemptsBeforeBlank=await p.evaluate(()=>data.attempts);await p.locator('#classify-submit').click();assert.equal(await p.evaluate(()=>data.attempts),attemptsBeforeBlank);const q=await p.evaluate(()=>quiz.list[quiz.index]);for(let i=0;i<q.items.length;i++)await p.locator('#classify-'+i).selectOption(i===0?'la':q.items[i].answer);await p.locator('#classify-submit').click();assert.equal(await p.locator('.classify-reason.incorrect').count(),1);assert.equal(await p.locator('.classify-reason.correct').count(),3);await p.reload();assert.equal(await p.locator('#classify-0').inputValue(),'la');assert.equal(await p.locator('#classify-submit').isDisabled(),true);
// Search full authored explanations and questions, and verify that retired exercises aren't newly recommended.
for(const [term,id]of [['重读-á','foundation-bridge-plural'],['不定冠词','foundation-bridge-articles'],['interesanta','foundation-adjectives'],['词干里的i','foundation-bridge-present-ar'],['vivemos','foundation-bridge-present-er-ir'],['活动举办地点','foundation-core']]){
 await p.goto(base+'/?view=search&q='+encodeURIComponent(term));await p.locator('[data-site-scope=知识点]').click();assert.ok(await p.locator('[data-site-result="'+id+'"]').count(),term);
}
await p.goto(base+'/?view=grammar');await p.locator('#question-search').fill('camión');await p.locator('#question-search-form button').first().click();assert.ok(await p.locator('.question-card').count());assert.ok(await p.evaluate(()=>grammarPool().every(q=>!q.supersededBy)));
for(const [alias,target]of [['gp-A1-6','foundation-bridge-plural'],['sg-book-4-a','foundation-adjectives'],['sg-book-5-b','foundation-bridge-articles']]){await p.goto(base+'/?view=guide&id='+alias);await p.locator('#card-'+alias+' [data-open-guide="'+target+'"]').click();assert.equal(await p.evaluate(()=>guideId),target)}
for(const [chapter,id]of [[3,'foundation-bridge-plural'],[4,'foundation-adjectives'],[5,'foundation-bridge-articles']]){await p.goto(base+'/?view=book&tab=guide&chapter='+chapter);assert.ok(await p.locator('[data-gender-lesson="'+id+'"]').count());}
const compatibility=await p.evaluate(()=>{data.guideNotes['foundation-bridge-present-ar']='estudiar只去ar，保留i';const backup=validate(JSON.parse(JSON.stringify(data)));const old=defaults();old.cards['foundation-core-q0']={due:Date.now(),stage:1,wrong:1,right:0,lastCorrect:false};const restored=validate(old);return {newNote:backup.guideNotes['foundation-bridge-present-ar'],newCards:Object.keys(backup.cards).filter(id=>id.startsWith('rewrite-')).length,oldRecord:!!restored.cards['foundation-core-q0'],archivedNotIndexed:!siteIndex.some(i=>i.type==='练习'&&i.id==='foundation-core-q0'),oldAnswer:byId.get('foundation-core-q0').answer}});assert.equal(compatibility.newCards,117);assert.ok(compatibility.oldRecord&&compatibility.archivedNotIndexed);assert.match(compatibility.newNote,/保留i/);
await p.setViewportSize({width:390,height:844});for(const l of lessons){await p.goto(base+'/?view=guide&id='+l.id);assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),l.id);}
await p.goto(base+'/?view=guide&id=foundation-bridge-present-er-ir');await p.screenshot({path:new URL('../grammar-rewrite-mobile.png',import.meta.url).pathname,fullPage:true});
assert.deepEqual(errors,[]);const report={passed:true,lessons:lessons.length,questionsSolved:solved,classificationItems:items,compatibility,checks:['六专题单独打开、完整规则和切换示范','全部117题实际作答；填空、选择与分类均核对反馈','错误答案、空分类不计分、逐项解释、刷新不重复计分、返回准确规则','六专题全文检索、题目检索、旧题不再新推荐','知识点别名、语法书第3—5章入口、旧新备份记录','六专题390px手机无横向溢出、无页面脚本错误'],errors};await writeFile(new URL('../grammar-rewrite-validation.json',import.meta.url),JSON.stringify(report,null,2));await browser.close();console.log(JSON.stringify(report,null,2));
