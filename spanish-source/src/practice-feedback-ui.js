// Local correction is a scaffold, never another scored attempt or evidence of mastery.
function answerSpellingHint(answer, candidates){
 const a=normalized(String(answer));
 const acute=s=>s.replace(/[áéíóú]/g,c=>({á:'a',é:'e',í:'i',ó:'o',ú:'u'}[c]));
 const enye=s=>s.replace(/ñ/g,'n');
 const diaeresis=s=>s.replace(/ü/g,'u');
 const list=candidates.map(s=>normalized(String(s)));
 if(list.includes(a))return '';
 if(list.some(s=>acute(s)===acute(a)))return '主要差别在元音的书面重音（á、é、í、ó、ú）。重音会影响读音，有时还区分词义或语法形式，例如hablo（我说）和habló（他／她说了）。按本题解析核对，不能统一删去。';
 if(list.some(s=>enye(s)===enye(a)))return '主要差别是n和ñ。ñ是独立的字母，不是可省略的重音，例如año（年）与ano（肛门）是不同的词。请按目标词保留ñ。';
 if(list.some(s=>diaeresis(s)===diaeresis(a)))return '主要差别是u和ü。在güe、güi中，两点提示u要发音，例如pingüino（企鹅）；普通gue、gui中的u通常不发音。请核对目标词，不要随意添加或删除两点。';
 return '先对照题目要求和下方解析，再逐项检查词形、人称、性数或词义。本站不能仅凭这次答案可靠判断你具体误解了哪条规则。';
}
function practiceRuleLink(q){
 const id=[q.genderLesson,q.guide,quiz?.meta.guide].find(id=>grammarGuide.some(g=>g.id===id));
 if(!id)return '';
 return q.genderSection?`<button type="button" class="link" data-gender-return="${esc(id)}" data-gender-section="${esc(q.genderSection)}">回看本题对应的小规则 →</button>`:`<button type="button" class="link" data-open-guide="${esc(id)}">回看本题知识点 →</button>`;
}
function installPracticeCorrection(){
 const q=quiz?.list[quiz.index],box=$('#quiz-feedback');
 const saved=q&&quiz.answers.find(a=>a.id===q.id);
 if(!saved||saved.right||!box||q.kind==='classify'||box.querySelector('.practice-correction'))return;
 const candidates=[q.answer,...(q.acceptedAnswers||[])];
 const input=!q.options&&q.kind!=='order';
 const details=input?answerSpellingHint(saved.answer,candidates):'对照自己的选择与解析，先说出选择依据，再尝试订正。看到答案后改对属于练习，不等于独立答对。';
 box.insertAdjacentHTML('beforeend',`<section class="practice-correction hintbox" aria-label="对照与订正"><h3>看清差别，再改一遍</h3><p>你刚才的作答：<span class="submitted-answer" lang="es">${esc(saved.answer)}</span></p><p>${esc(details)}</p>${practiceRuleLink(q)}${input?`<form id="correction-form"><label for="correction-answer">参考解析后，重新填写本题答案</label><input class="input" id="correction-answer" autocomplete="off" autocapitalize="off" spellcheck="false" required maxlength="2000"><div class="accents" aria-label="订正用西语字符">${['á','é','í','ó','ú','ñ','ü'].map(c=>`<button type="button" data-correction-char="${c}" aria-label="输入 ${c}">${c}</button>`).join('')}</div><button class="btn outline" type="submit">检查订正（不计分）</button><p id="correction-status" role="status" aria-live="polite"></p></form>`:''}<p class="small">原始作答与错题记录保留；本次订正不改变分数、复习日期或课程完成状态。之后请不看解析再独立复测。</p></section>`);
 if(input)$('#correction-form').onsubmit=e=>{e.preventDefault();const answer=$('#correction-answer').value;if(!answer.trim())return;const ok=candidates.some(c=>normalized(answer)===normalized(c));$('#correction-status').textContent=ok?'✓ 本次订正符合本题接受的答案。原始错题记录仍保留，稍后再独立练习。':'还未符合本题接受的答案。'+answerSpellingHint(answer,candidates);};
}
const answerBeforePracticeFeedback=answerQuiz;
answerQuiz=function(a){answerBeforePracticeFeedback(a);installPracticeCorrection();};
const restoreBeforePracticeFeedback=restoreQuizFeedback;
restoreQuizFeedback=function(){restoreBeforePracticeFeedback();installPracticeCorrection();};
const summaryBeforePracticeFeedback=quizSummary;
quizSummary=function(){summaryBeforePracticeFeedback();const wrong=quiz?.answers.filter(a=>!a.right).map(a=>quiz.list.find(q=>q.id===a.id)).filter(Boolean)||[];if(!wrong.length)return;$('#app .practice')?.insertAdjacentHTML('beforeend',`<section class="practice-wrong-retry hintbox"><h3>集中重练本轮错题</h3><p>本轮 ${wrong.length} 道错题可以单独练。重新作答会正常记录一次练习，并更新复习时间；只练错题的成绩不会替代完整课程小测、阅读测验或延后复测成绩。</p><button class="btn outline" id="retry-wrong-only">只重练这 ${wrong.length} 道错题 →</button></section>`);$('#retry-wrong-only').onclick=()=>startQuiz(shuffle(wrong),{type:'review',correctionReview:true,label:quiz.meta.label+' · 本轮错题重练'});};
document.addEventListener('click',e=>{const b=e.target.closest('[data-correction-char]');if(!b)return;const input=$('#correction-answer');if(!input)return;input.setRangeText(b.dataset.correctionChar,input.selectionStart,input.selectionEnd,'end');input.focus();input.dispatchEvent(new Event('input',{bubbles:true}));});
