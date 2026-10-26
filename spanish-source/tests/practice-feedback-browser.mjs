import {chromium} from '/workspace/ui-ux-pro-max-skill/cli/node_modules/@playwright/test/index.mjs';
import assert from 'node:assert/strict';
import {writeFile} from 'node:fs/promises';
const browser=await chromium.launch({executablePath:'/usr/bin/chromium'});
const p=await browser.newPage({viewport:{width:390,height:844}}),errors=[];
p.on('pageerror',e=>errors.push(e.message));
await p.goto('http://127.0.0.1:4193/',{waitUntil:'domcontentloaded'});
await p.evaluate(()=>{localStorage.clear();sessionStorage.clear()});await p.reload({waitUntil:'domcontentloaded'});
const fixtures=[['rewrite-bridge-plural-stress-0','jovenes','jóvenes','书面重音'],['rewrite-bridge-articles-contractions-2','el','él','书面重音']];
for(const [id,answer,correct,hint] of fixtures){
 await p.evaluate(id=>startQuiz([byId.get(id)],{type:'guide',guide:byId.get(id).guide,label:'订正回归'}),id);
 await p.locator('#answer').fill(answer);await p.locator('#answer-form .btn').click();
 assert.match(await p.locator('.practice-correction').innerText(),new RegExp(hint));
 const before=await p.evaluate(()=>JSON.stringify({attempts:data.attempts,correct:data.correct,cards:data.cards,history:data.history,quality:data.quality,unit:data.unitProgress}));
 await p.locator('#correction-answer').fill(correct);await p.locator('#correction-form [type=submit]').click();
 assert.match(await p.locator('#correction-status').innerText(),/符合本题接受/);
 assert.equal(await p.evaluate(()=>JSON.stringify({attempts:data.attempts,correct:data.correct,cards:data.cards,history:data.history,quality:data.quality,unit:data.unitProgress})),before);
 await p.evaluate(()=>restoreQuizFeedback());assert.equal(await p.locator('.practice-correction').count(),1);
 assert.equal(await p.evaluate(()=>data.attempts),JSON.parse(before).attempts);
}
// Independent character contrasts: acute normalization must never erase ñ or ü.
const spelling=await p.evaluate(()=>({enye:answerSpellingHint('ano',['año']),umlaut:answerSpellingHint('pinguino',['pingüino']),mixed:answerSpellingHint('camion',['camión']),different:answerSpellingHint('ano',['añó']),valid:answerSpellingHint('ÉL.',['él'])}));
assert.match(spelling.enye,/独立的字母/);assert.match(spelling.umlaut,/u要发音/);assert.match(spelling.mixed,/书面重音/);assert.match(spelling.different,/不能仅凭/);assert.equal(spelling.valid,'');
// User input is plain text and long answers do not break the phone layout.
await p.evaluate(()=>startQuiz([byId.get('rewrite-bridge-plural-stress-0')],{type:'guide',guide:'foundation-bridge-plural',label:'安全显示'}));
await p.locator('#answer').fill('<img src=x onerror="window.feedbackInjected=1">'+'x'.repeat(220));await p.locator('#answer-form .btn').click();
assert.equal(await p.locator('.submitted-answer img').count(),0);assert.equal(await p.evaluate(()=>window.feedbackInjected),undefined);
assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),true);
await p.locator('#correction-answer').fill('jovenes');await p.locator('#correction-answer').evaluate(el=>el.setSelectionRange(1,2));await p.locator('[data-correction-char="ó"]').click();assert.equal(await p.locator('#correction-answer').inputValue(),'jóvenes');
await p.locator('#correction-form [type=submit]').click();assert.match(await p.locator('#correction-status').innerText(),/符合本题接受/);
// Refresh restores the original scored answer, the diagnosis, and exactly one panel.
const attempts=await p.evaluate(()=>{rememberCurrent();return data.attempts});await p.reload({waitUntil:'domcontentloaded'});assert.equal(await p.locator('.practice-correction').count(),1);assert.equal(await p.evaluate(()=>data.attempts),attempts);
await p.locator('[data-gender-return]').last().click();assert.equal(await p.evaluate(()=>page),'guide');await p.locator('#route-back').click();await p.waitForFunction(()=>page==='quiz');assert.equal(await p.locator('.practice-correction').count(),1);
// A mixed round offers only the wrong item, and records a genuine new attempt.
const qualityBefore=await p.evaluate(()=>JSON.stringify(data.quality));
await p.evaluate(()=>startQuiz([byId.get('rewrite-bridge-plural-vowels-0'),byId.get('rewrite-bridge-plural-stress-0')],{type:'guide',guide:'foundation-bridge-plural',label:'混合练习'}));
await p.locator('#answer').fill('libros');await p.locator('#answer-form .btn').click();assert.equal(await p.locator('.practice-correction').count(),0);await p.locator('#next-q').click();
await p.locator('#answer').fill('jovenes');await p.locator('#answer-form .btn').click();await p.locator('#next-q').click();
assert.equal(await p.locator('#retry-wrong-only').count(),1);await p.locator('#retry-wrong-only').click();assert.deepEqual(await p.evaluate(()=>quiz.list.map(q=>q.id)),['rewrite-bridge-plural-stress-0']);
assert.deepEqual(await p.evaluate(()=>({type:quiz.meta.type,unit:quiz.meta.unit||null,pathUnit:!!quiz.meta.pathUnit,qualityTransfer:!!quiz.meta.qualityTransfer,guide:quiz.meta.guide||null,readingId:quiz.meta.readingId||null})),{type:'review',unit:null,pathUnit:false,qualityTransfer:false,guide:null,readingId:null});
const count=await p.evaluate(()=>data.attempts);await p.locator('#answer').fill('jóvenes');await p.locator('#answer-form .btn').click();assert.equal(await p.evaluate(()=>data.attempts),count+1);await p.locator('#next-q').click();assert.equal(await p.locator('#retry-wrong-only').count(),0);
assert.equal(await p.evaluate(()=>JSON.stringify(data.quality)),qualityBefore);
// Other accepted answers are valid for both original submission and the scaffold.
await p.evaluate(()=>{const q=questionBank.find(q=>q.kind==='input'&&q.acceptedAnswers?.length&&q.acceptedAnswers.some(a=>normalized(a)!==normalized(q.answer)));window.acceptedFixture={id:q.id,alternative:q.acceptedAnswers.find(a=>normalized(a)!==normalized(q.answer))};startQuiz([q],{type:'review',label:'可接受答案'});});
await p.locator('#answer').fill('zzzz');await p.locator('#answer-form .btn').click();await p.locator('#correction-answer').fill(await p.evaluate(()=>acceptedFixture.alternative));await p.locator('#correction-form [type=submit]').click();assert.match(await p.locator('#correction-status').innerText(),/符合本题接受/);
await p.locator('.practice-correction').screenshot({path:'/workspace/spanish-audit/practice-correction-mobile.png'});
// A failed transfer round followed by a perfect subset retry cannot become a full transfer pass.
await p.evaluate(()=>{const id=Object.keys(qualityRetests)[0];startQuiz(qualityRetests[id],{type:'grammar',unit:id,qualityTransfer:true,label:'复测隔离检查'});while(quiz.index<quiz.list.length){answerQuiz(quiz.index===0?'zzzz':quiz.list[quiz.index].answer);quiz.index++}quizPage();});
const transferEvidence=await p.evaluate(()=>JSON.stringify({quality:data.quality,unit:data.unitProgress,reading:data.readingProfile}));
await p.locator('#retry-wrong-only').click();assert.equal(await p.evaluate(()=>quiz.list.length),1);
await p.evaluate(()=>{answerQuiz(quiz.list[0].answer);quiz.index++;quizPage();});
assert.equal(await p.evaluate(()=>JSON.stringify({quality:data.quality,unit:data.unitProgress,reading:data.readingProfile})),transferEvidence);
// Choice feedback does not insert a text correction form; classification keeps its own item-by-item feedback.
await p.evaluate(()=>{const q=questionBank.find(q=>q.genderLesson&&Array.isArray(q.options)&&q.options.some(a=>a!==q.answer));startQuiz([q],{type:'review',label:'选择题反馈'});answerQuiz(q.options.find(a=>a!==q.answer));});
assert.equal(await p.locator('.practice-correction').count(),1);assert.equal(await p.locator('#correction-form').count(),0);
await p.evaluate(()=>{const q=questionBank.find(q=>q.kind==='classify'&&q.genderLesson);startQuiz([q],{type:'review',label:'分类题反馈'});});
for(const select of await p.locator('[data-classify-index]').all())await select.selectOption({index:1});await p.locator('#classify-submit').click();assert.equal(await p.locator('.practice-correction').count(),0);assert.ok(await p.locator('.classify-reason').count()>0);
assert.deepEqual(errors,[]);
await writeFile(new URL('../practice-feedback-browser-validation.json',import.meta.url),JSON.stringify({passed:true,checks:['accent, ñ and ü diagnosed separately','unscored correction changes no score, cards, dates, history or course evidence','accepted variants and NFC retain existing scoring','safe long-answer rendering at 390px','character insertion replaces selection','refresh and back preserve original answer without recounting','rule return link','wrong-only retest uses actual failed IDs and normal new attempts without replacing full-course or transfer results','no page errors'],scope:'练习订正交互与判分隔离，不代表所有教材内容已完成审校。'},null,2));
await browser.close();console.log('Practice feedback browser checks passed');
