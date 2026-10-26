// Sentence-reviewed corrections override a factual token index; ambiguous forms retain both attested senses.
const contextSenseAliases=new Map(),contextSenseExpectations=[];
function senseNorm(s){return s.normalize('NFC').toLocaleLowerCase('es').replace(/[^a-záéíóúüñ0-9]+/g,' ').trim().replace(/\s+/g,' ')}
function sourcePassageText(source,chapter){if(source==='course'){const u=units.find(u=>u.id===chapter),d=richDialogues.find(d=>d.id===u?.richDialogue);return u?[u.text,...(d?.turns||[]).map(t=>t.es)].join(' '):''}return syncReadings.find(r=>r.id===chapter)?.script||''}
const contextSenseApplied=[];
for(const rule of contextSenseReviews){
  const matches=contextNotebook.filter(w=>w.source===rule.source&&w.chapters.includes(rule.chapter)&&w.lemma===rule.fromLemma&&w.forms?.some(f=>senseNorm(f)===senseNorm(rule.form)));
  if(!matches.length)throw Error('Reviewed form has no source occurrence: '+rule.source+' '+rule.chapter+' '+rule.form);
  const text=senseNorm(sourcePassageText(rule.source,rule.chapter));for(const example of rule.contexts)if(!text.includes(senseNorm(example.es)))throw Error('Review example is not in the current passage: '+example.es);
  for(const old of matches){
    const oldEntryId=old.entryId,matchingForms=old.forms.filter(f=>senseNorm(f)===senseNorm(rule.form)),newForms=rule.replacementForm?[rule.replacementForm]:matchingForms;
    let target=contextNotebook.find(w=>w.source===rule.source&&w.chapters.includes(rule.chapter)&&w.lemma===rule.target.lemma&&w.id!==old.id);
    if(rule.fromLemma===rule.target.lemma&&!rule.replacementForm)target=old;
    const remaining=old.forms.filter(f=>senseNorm(f)!==senseNorm(rule.form));
    if(!target){if(!rule.keepOriginal&&!remaining.length)target=old;else{target={id:'reviewed-sense-'+rule.source+'-'+rule.chapter+'-'+encodeURIComponent(rule.target.lemma),source:rule.source,chapters:[rule.chapter],pages:[],forms:[],sourceTitle:old.sourceTitle,occurrences:old.occurrences.filter(o=>o.chapter===rule.chapter).map(o=>({...o,pages:[...(o.pages||[])]}))};contextNotebook.push(target)}}
    if(target!==old&&!rule.keepOriginal){old.forms=remaining;if(!remaining.length){contextSenseAliases.set(old.id,target.id);contextNotebook.splice(contextNotebook.indexOf(old),1)}}
    Object.assign(target,rule.target,{entryId:findContextWord(rule.target.lemma)?.id||'',meaningOrigin:'context-reviewed',contextRepairNote:'本篇词形归属已核对修正；请结合以下原句重新核对词义与自评。'});
    target.forms=[...new Set([...(target===old&&!rule.keepOriginal?remaining:target.forms||[]),...newForms])];
    target.reviewedExamples??=[];for(const ex of rule.contexts)if(!target.reviewedExamples.some(e=>e.es===ex.es))target.reviewedExamples.push({...ex});
    if(!rule.keepOriginal)for(const form of matchingForms)contextSenseExpectations.push({source:rule.source,chapter:rule.chapter,oldEntryId,oldLemma:rule.fromLemma,form,targetId:target.id,targetForm:rule.replacementForm||form});
    contextSenseApplied.push({source:rule.source,chapter:rule.chapter,form:rule.form,targetId:target.id,lemma:target.lemma,keptOtherSense:rule.keepOriginal});
  }
}
// The lexical dataset is fixed at build time. Index by source/chapter/form once, rather than scanning the whole notebook for every token.
const contextSenseFormIndex=new Map();for(const w of contextNotebook)for(const chapter of w.chapters)for(const form of new Set((w.forms||[]).map(senseNorm))){const key=JSON.stringify([w.source,chapter,form]);if(!contextSenseFormIndex.has(key))contextSenseFormIndex.set(key,[]);contextSenseFormIndex.get(key).push(w)}
function reviewedContextCandidates(source,chapter,form,sentence){const pool=contextSenseFormIndex.get(JSON.stringify([source,chapter,senseNorm(form)]))||[],text=senseNorm(sentence),matched=pool.filter(w=>text&&w.reviewedExamples?.some(e=>text.includes(senseNorm(e.es))||senseNorm(e.es).includes(text)));return matched.length?matched:pool}
const restoreBeforeSenseReview=restoreLearningExtensions;
restoreLearningExtensions=function(d,x){d=restoreBeforeSenseReview(d,x);const source=x.learningWorkspace;if(source&&typeof source==='object'){for(const[oldId,id]of contextSenseAliases){let target=id;for(let n=0;n<20&&contextSenseAliases.has(target);n++)target=contextSenseAliases.get(target);if(source.savedContexts?.[oldId]===true)d.learningWorkspace.savedContexts[target]=true;const card=source.contextCards?.[oldId];if(!d.learningWorkspace.contextCards[target]&&card&&['learning','known'].includes(card.status)&&Number.isFinite(card.due)&&card.due>=0)d.learningWorkspace.contextCards[target]={status:card.status,due:card.due}}}return d};

// Immutable audio filename prevents an old cached recording from contradicting the revised text.
syncReadings.find(r=>r.id==='sr-14').audio='assets/audio/read-sr-14-sense-reviewed.mp3';
