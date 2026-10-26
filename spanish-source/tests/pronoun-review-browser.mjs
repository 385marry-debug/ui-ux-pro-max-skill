import{chromium}from'/workspace/ui-ux-pro-max-skill/cli/node_modules/@playwright/test/index.mjs';import assert from'node:assert/strict';import{writeFile}from'node:fs/promises';
const b=await chromium.launch({executablePath:'/usr/bin/chromium'}),p=await b.newPage({viewport:{width:390,height:844}}),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto('http://127.0.0.1:4193/',{waitUntil:'domcontentloaded'});await p.evaluate(()=>{localStorage.clear();sessionStorage.clear()});await p.reload({waitUntil:'domcontentloaded'});
const fixed={
 'bridge-direct':['la','直接宾语','nos','la','a ella强调或明确对象，la与它配合','Hay tres alumnos.','基础练lo/la主线，同时说明认可的leísmo范围','las'],
 'bridge-indirect':['les','le','me','te','al problema，这个问题','le','le','保留le'],
 pronouns:['la','te','lo','lo','las','间接宾语在前，直接宾语在后','me','dámelo']};
await p.evaluate(()=>{data.guideNotes['foundation-pronouns']='先分角色，不按人和物排序。';data.cards['foundation-pronouns-q0']={stage:2,due:1900000000000,right:3,wrong:1,lastCorrect:true};persist();});const legacy=await p.evaluate(()=>JSON.stringify(data.cards['foundation-pronouns-q0']));
let answers=0;
for(const [suffix,gold]of Object.entries(fixed)){
 await p.evaluate(suffix=>{guideId='foundation-'+suffix;systemTutor=true;systemStep=systemLesson(guideId).sections.findIndex(s=>s.key===pronounReviewRows.find(r=>r.suffix===suffix).section);go('guide')},suffix);
 const text=await p.locator('[data-system-tutor]').innerText();
 if(suffix==='bridge-direct'){assert.match(text,/La veo a ella/);assert.match(text,/Hay tres alumnos/);assert.match(text,/leísmo/)}
 if(suffix==='bridge-indirect'){assert.match(text,/al problema/);assert.match(text,/A Ana le doy/)}
 if(suffix==='pronouns'){assert.match(text,/Te la presento/);assert.match(text,/me、te、nos、os保留/)}
 assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),true,suffix);
 await p.locator('[data-gender-group="review-roles"]').click();
 for(const correct of gold){const choice=p.locator('[data-answer]');if(await choice.count()){await choice.filter({hasText:correct}).click()}else{await p.locator('#answer').fill(correct);await p.locator('#answer-form .btn').click()}assert.equal(await p.evaluate(()=>quiz.answers.at(-1).right),true);assert.ok((await p.locator('#quiz-feedback').innerText()).length>35);await p.locator('#next-q').click();answers++;}
 assert.match(await p.locator('.result-number').innerText(),/100/);await p.locator('[data-gender-return]').last().click();assert.equal(await p.evaluate(()=>guideId),'foundation-'+suffix);assert.equal(await p.evaluate(()=>systemLesson(guideId).sections[systemStep].key),suffix==='pronouns'?'rule-2':'rule-1');
}
// A realistic overgeneralization must be wrong, explained and routed to exactly the reviewed rule.
await p.evaluate(()=>startQuiz([byId.get('pronoun-review-pronouns-1')],{type:'guide',guide:'foundation-pronouns',genderSection:'rule-2',label:'te不改se'}));await p.locator('#answer').fill('se');await p.locator('#answer-form .btn').click();assert.equal(await p.evaluate(()=>quiz.answers.at(-1).right),false);assert.match(await p.locator('#quiz-feedback').innerText(),/te不属于le\/les/);await p.locator('.practice-correction [data-gender-return]').click();assert.equal(await p.evaluate(()=>systemLesson(guideId).sections[systemStep].key),'rule-2');
await p.evaluate(()=>rememberCurrent());await p.reload({waitUntil:'domcontentloaded'});assert.equal(await p.evaluate(()=>systemLesson(guideId).sections[systemStep].key),'rule-2');assert.equal(await p.evaluate(()=>data.guideNotes['foundation-pronouns']),'先分角色，不按人和物排序。');assert.deepEqual(await p.evaluate(()=>data.cards['foundation-pronouns-q0']),JSON.parse(legacy));
// Newly authored explanations and exercises are searchable through the actual search page.
await p.evaluate(()=>{siteScope='知识点';siteQuery='al problema';go('search')});assert.ok(await p.locator('[data-site-result="foundation-bridge-indirect"]').count());await p.locator('[data-site-result="foundation-bridge-indirect"]').click();assert.equal(await p.evaluate(()=>guideId),'foundation-bridge-indirect');
await p.evaluate(()=>{siteScope='练习';siteQuery='Te presento a Ana';go('search')});assert.ok(await p.locator('[data-site-result="pronoun-review-pronouns-0"]').count());await p.locator('[data-site-result="pronoun-review-pronouns-0"]').click();assert.equal(await p.evaluate(()=>quiz.list[0].id),'pronoun-review-pronouns-0');
// All-at-once reference mode also uses the same reviewed data.
await p.evaluate(()=>{systemTutor=false;applyPublicRoute(new URLSearchParams('view=guide&id=foundation-pronouns'))});assert.match(await p.locator('#card-foundation-pronouns [data-gender-lesson="foundation-pronouns"]').innerText(),/Te la presento/);await p.locator('#card-foundation-pronouns [data-gender-lesson="foundation-pronouns"] .gender-section').filter({hasText:'组合按句法角色排序'}).screenshot({path:'/workspace/spanish-audit/pronoun-review-mobile.png'});
assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),true);// A search result must remain visible even if reference mode was left filtering only saved entries.
await p.evaluate(()=>{systemTutor=false;guideScope='收藏';siteScope='知识点';siteQuery='al problema';go('search')});await p.locator('[data-site-result="foundation-bridge-indirect"]').click();assert.equal(await p.evaluate(()=>guideScope),'全部');assert.equal(await p.locator('#card-foundation-bridge-indirect [data-gender-lesson="foundation-bridge-indirect"]').count(),1);
assert.deepEqual(errors,[]);
await writeFile(new URL('../pronoun-review-browser-validation.json',import.meta.url),JSON.stringify({passed:true,actualAnswers:answers,lessons:3,checks:['三课规则和表格实际显示，390px无整页横向溢出','24个独立标准答案通过真实选择/输入界面提交','错误te→se被拒绝并显示解析，可返回准确小规则','刷新保留小步、旧笔记和旧题记录','新讲解和新题可以分别通过知识点和练习搜索打开','小步课程与整篇语法查阅共享相同修订','无页面脚本异常'],scope:'仅三个宾语代词专题及24道新增题；不代表全书、全站或所有方言规则验收。'},null,2));await b.close();console.log('Pronoun review browser checks passed: '+answers+' answers');
