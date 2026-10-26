// CEFR has six main levels. Professional domains are applications, not invented C3/C4 grades.
const professionalTracks=syncReadings.filter(r=>r.professional===true);
for(const r of [...qualityAdvancedLessons,...professionalTracks]){
  r.ruleLessons=advancedRuleLessons[r.id]||r.ruleLessons;
  if(!r.ruleLessons||r.ruleLessons.length!==3)throw Error('Missing independent rule explanations '+r.id);
  r.usage=r.ruleLessons.map(s=>[s.title,s.explanation.join(' ')]);
  for(const [i,s]of r.ruleLessons.entries()){
    if(s.practice){const q={...s.practice,id:'advanced-point-'+r.id+'-'+i,level:r.level,cat:'高级规则分练'};if(q.options){const n=(i+r.id.length)%q.options.length;q.options=q.options.slice(n).concat(q.options.slice(0,n))}questionBank.push(q);byId.set(q.id,q);s.practiceId=q.id}
    else s.practiceId=r.questions[s.practiceIndex].id;
  }
}
for(const r of professionalTracks)grammarGuide.push({id:r.id,title:'领域训练 · '+r.title,level:r.level,domain:'领域应用',summary:r.goal,rules:r.rules,explanation:r.ruleLessons.flatMap(s=>s.explanation).join(' '),examples:r.hard.map(h=>[h[0],h[1]]),questions:r.questions,question:r.questions[0]});
const restoreBeforeLevelRoute=restoreLearningExtensions;
restoreLearningExtensions=function(d,x){d=restoreBeforeLevelRoute(d,x);d.quality.abilityChecks={};const s=x.quality;for(const level of levelMapReference.levels)for(const mode of levelMapReference.modes){if(s?.abilityChecks?.[level.id]?.[mode.id]===true)(d.quality.abilityChecks[level.id]??={})[mode.id]=true}for(const r of professionalTracks)if(typeof s?.advancedNotes?.[r.id]==='string')d.quality.advancedNotes[r.id]=s.advancedNotes[r.id].slice(0,15000);return d};
