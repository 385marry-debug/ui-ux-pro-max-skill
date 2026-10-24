const syncUsageAdditions={
2:[['称谓与人称','Don/Doña通常接名字，señor/señora常接姓氏；tú是人称代词，tu是前置物主词。todo与todos还要看是否指物、人物或修饰名词，不能只按中文所有一个译法处理。']],
3:[['外貌描述的中心词','ser alto/a说身高，tener el pelo corto说头发；形容词与自己描述的名词配合。欢迎语按对方配合，初次认识的encantado/a常按说话者配合。']],
4:[['esta、está与指示形式','esta可限定阴性名词或独立指回对象，está是estar形式；现代书写不因este/esta独立使用就一律加重音。先判断语法功能。']],
5:[['序数和问句','primero/tercero在阳性单数名词前常为primer/tercer，如el tercer piso。qué、cuándo、cuánto、cómo、dónde等分别标不同信息缺口，介词如de不能因提问而丢失。']],
6:[['solo与程度边界','vive sola与solo vive aquí修饰范围不同；程度词要看意义和结构。不要把un poco只能用于贬义的教学倾向写成无例外禁令。']],
7:[['计量词的性数','medio kilo、media hora、un cuarto de kilo、una docena de huevos各自有结构。数字后仍需分清按件、重量或体积报价。']],
8:[['偏好与许可的主语','Prefiero esta falda a esa与Me gusta esta falda主语组织不同。¿Puedo probarme…?先选许可框架，再处理原形和代词。']],
9:[['身体部位的冠词','Me lavo las manos中代词有助说明归属，身体部位常用定冠词；不能因此宣布任何物主形式在所有身体部位语境都非法。']],
10:[['指路与手机通话','Sigue、gira、cruza常作tú指令；usted用相应形式。电话中¿Dígame?可作开场，之后应说明身份、来意和是否方便。']],
11:[['喜好不等于质量断言','me encanta、no me gusta mucho、no me gusta nada表达程度不同；个人不喜欢一道菜不自动证明所有人都不喜欢或做法有错。']],
12:[['me viene bien / no se me ocurre nada','安排合适可说me viene bien；想到一个主意可说se me ocurre una idea，idea是主语。No se me ocurre nada中nada和no形成否定呼应，不把me当主语。']],
13:[['邮件示范','写给朋友可用Hola, Irene:…Un abrazo；写给机构可用Estimada señora…Atentamente。称谓、正文与结尾应保持关系和目的的一致；主题也要具体。']],
14:[['感谢的原因与间隔','Gracias por venir/por el regalo说明感谢原因。Hace mucho que no nos vemos与¡Cuánto tiempo sin verte!都可用于重逢，但不是逐词同构。']],
15:[['最高级与祝愿','guapo→guapísimo、rico→riquísimo、amable→amabilísimo体现不同构词条件，不能所有词都随意加同一后缀。Te deseo＋名词与Que tengas…祝愿从句是两种框架。']],
16:[['caer bien与活动体验','Ana me cae bien常说对她有好印象；Me gusta Ana在某些语境可带吸引/喜欢意味，不能机械等同。Me lo pasé bien描述活动体验，lo为表达的一部分。']],
17:[['婚姻事件与状态','casarse con说结婚事件，estar casado/a con说状态；tuvo、hizo、vinieron、dijeron分别按简单过去范式核对，不复制一种不规则词干到全部动词。']],
18:[['事实、评价与进行','biografía里先区分日期等事实和作者评价；estar＋副动词凸显过程，haber＋分词表达完成关系，不把leyendo/leído互换。']]
};
const syncPracticeModels={
1:['Hola, soy Lina. Soy de China. ¿Qué es esto? Gracias.','你好，我是Lina，来自中国。这是什么？谢谢。'],
2:['Esta es Irene, mi amiga. Ella es estudiante. Mucho gusto.','这是我的朋友Irene，她是学生。很高兴认识你。'],
3:['Bienvenida. ¿Quieres tomar algo? Soy de Valencia y vivo en Madrid.','欢迎。想喝点什么？我来自瓦伦西亚，住马德里。'],
4:['Perdona, ¿hay una papelería por aquí? ¿Está lejos?','打扰一下，这附近有文具店吗？远吗？'],
5:['La clase es a las nueve. ¿Qué tal si nos vemos a las seis?','课在九点。我们六点见怎么样？'],
6:['Mi piso tiene dos habitaciones. La mesa está delante de la ventana.','我的公寓有两个房间，桌子在窗前。'],
7:['Quiero medio kilo de manzanas. ¿A cuánto están? ¿Cuánto es todo?','我要半公斤苹果。什么价？一共多少？'],
8:['Prefiero esta falda a esa. ¿Puedo probarme esta chaqueta?','我更喜欢这条裙子而不是那条。我能试这件外套吗？'],
9:['Me levanto a las siete y me acuesto a las once. Por la tarde estudio.','我七点起床，十一点睡觉。下午学习。'],
10:['Sigue todo recto y gira a la izquierda. Dígame, ¿quién llama?','一直走再左转。请讲，是哪位？'],
11:['De primero, ensalada. Para beber, agua. No quiero postre, gracias.','第一道沙拉，饮品水。不需要甜点，谢谢。'],
12:['Creo que es una buena idea, pero el sábado me viene mal. ¿Podemos ir el domingo?','我觉得主意不错，但周六不方便。周日去可以吗？'],
13:['Asunto: Fiesta del sábado. Hola, Irene: El sábado nos reunimos a las seis en mi casa. ¿Puedes venir? Confírmame si te viene bien. Un abrazo, Lina.','主题：周六聚会。你好Irene，周六六点在我家聚会，你能来吗？请确认时间是否合适。抱抱，Lina。'],
14:['¡Cuánto tiempo sin verte! Gracias por el regalo. Me gusta mucho.','好久不见！谢谢礼物，我很喜欢。'],
15:['¡Felices fiestas! Te deseo un buen año. Para la ensalada, se lavan los tomates y después se cortan.','节日快乐，祝你新年顺利。做沙拉先洗番茄，再切开。'],
16:['Esta foto es del año pasado. Fui con mis primos y me lo pasé muy bien.','照片是去年的。我和表亲们一起去，玩得很开心。'],
17:['Nos casamos el sábado. La ceremonia es civil. ¡Felicidades a los novios!','我们周六结婚，办民事仪式。祝贺新人！'],
18:['Picasso nació en Málaga en 1881. De niña, mi abuela vivía cerca de un río.','毕加索1881年出生于马拉加。我祖母小时候住在河边。']
};
const textbookSyncChapters=syncPageInventory.chapters.map(source=>{
 const reading=syncReadings.find(r=>r.chapter===source.chapter),warmup=syncWarmups[source.chapter];
 const grammarRows=textbookCoverage.filter(r=>r.chapter===source.chapter),grammarQuestions=[...new Set(grammarRows.map(r=>r.questions[0]))].slice(0,3).map(id=>byId.get(id));
 const questionIds=[...new Set([...reading.questions,...warmup.questions,...grammarQuestions].map(q=>q.id))];
 return{...source,id:'sync-'+source.chapter,title:reading.title,level:reading.level,readingId:reading.id,warmupId:warmup.id,grammarRows,wordFacts:syncWordFacts.filter(w=>w.chapters.includes(source.chapter)),usage:[...reading.usage,...(syncUsageAdditions[source.chapter]||[])],practiceModel:syncPracticeModels[source.chapter],questionIds};
});
// Resolve annotated word forms to a real global entry; inflected forms may point to their dictionary lemma.
const syncWordById=new Map(vocab.map(w=>[lexicalHeadword(w.word),w]));
const syncKinds={'m.':'名词','f.':'名词','adj.':'形容词','adv.':'副词','pron.':'代词','conj.':'连词','prep.':'介词','intr.':'动词（不及物用法）','tr.':'动词（及物用法）','art.':'冠词','p. p.':'过去分词','interj.':'感叹词','prop.':'专有名词','trat.':'称谓'};
for(const f of syncWordFacts){
 const closed=/art\.|prep\.|pron\.|conj\.|adv\./.test(f.abbr);let w=syncWordById.get(f.head)||(!closed?syncWordById.get(f.lemma):null);
 if(!w){const kind=Object.entries(syncKinds).filter(([tag])=>f.abbr.includes(tag)).map(([,label])=>label).filter((v,i,a)=>a.indexOf(v)===i).join('／')||'词与表达';
  w={id:'syncword-'+f.head,word:f.head,headword:f.head,kind,meaning:f.meaning,level:f.chapters[0]<=9?'A1':'A2',theme:'教材配套词汇',example:'',translation:'',sourceType:'sync-word',source:'教材词形与词性等事实；本课语境义与站内词条关联',contextual:false};
  if(kind.includes('名词')&&!kind.includes('专有')&&/m\.|f\./.test(f.abbr)){w.gender=/m\. y f\./.test(f.abbr)?'m. y f.':f.abbr.includes('f.')?'f.':'m.';if(f.abbr.includes('pl.'))w.gender+=' pl.';w.genderSource='配套词汇核对';w.genderNote='用于本课所标名词义；同形其他词性或义项另查。'}
  vocab.push(w);syncWordById.set(f.head,w);
  const q={id:'vq-'+w.id,wordId:w.id,level:w.level,cat:'词义辨认',kind:'choice',prompt:f.head+' 在本课词义中是？',answer:w.meaning,options:[w.meaning,'乘飞机的登机口','星期三的下午'],explain:f.head+'：'+w.meaning+'；词性 '+w.kind+(w.gender?'，名词性别 '+w.gender:'')};questionBank.push(q);byId.set(q.id,q);
 }
 f.wordId=w.id;w.syncChapters=[...new Set([...(w.syncChapters||[]),...f.chapters])];
 if(['nuez','cava'].includes(f.head)){w.gender=f.head==='nuez'?'f.':'m.';w.genderSource='本课义核对';w.genderNote=f.head==='cava'?'本课的起泡酒义为m.；cava表示酒窖等时另有阴性用法。':'nuez的常见名词用法为阴性。'}
}
// Every authored reading glossary item also resolves to a searchable vocabulary entry.
for(const r of syncReadings)for(const g of r.glosses){const head=g.head.toLocaleLowerCase('es');if(syncWordById.has(head))continue;const kind=g.abbr.includes('prop.')?'专有名词':g.abbr.includes('adj.')?'形容词':g.abbr.includes('adv.')?'副词':g.abbr.includes('prep.')?'介词':g.abbr.includes('interj.')?'感叹词':/tr\.|intr\.|v\.|ger\./.test(g.abbr)?'动词':'名词';const w={id:'readingword-'+head,word:g.head,headword:head,kind,meaning:g.meaning,level:r.level,theme:'原创精读词汇',example:'',translation:'',sourceType:'reading-word'};if(kind==='名词')w.gender=g.abbr;vocab.push(w);syncWordById.set(head,w);const q={id:'vq-'+w.id,wordId:w.id,level:w.level,cat:'词义辨认',kind:'choice',prompt:g.head+' 在配套精读语境中是什么意思？',answer:g.meaning,options:[g.meaning,'从建筑的后门离开','两个星期以后的早晨'],explain:g.head+'：'+g.meaning+'；'+g.abbr};questionBank.push(q);byId.set(q.id,q)}
// Use varied, real lexical distractors, avoiding a repeated stock pair for newly added entries.
for(const q of questionBank.filter(q=>q.id.startsWith('vq-syncword-')||q.id.startsWith('vq-readingword-'))){const w=vocab.find(w=>w.id===q.wordId),pool=vocab.filter(v=>v.id!==w.id&&v.kind===w.kind&&v.meaning!==q.answer&&!v.meaning.includes(q.answer)&&!q.answer.includes(v.meaning));const seed=[...q.id].reduce((s,c)=>s+c.charCodeAt(0),0),chosen=[];for(let i=0;i<pool.length&&chosen.length<2;i++){const meaning=pool[(seed+i*17)%pool.length].meaning;if(!chosen.includes(meaning))chosen.push(meaning)}if(chosen.length===2)q.options=[chosen[0],q.answer,chosen[1]]}
for(const r of syncReadings){r.audio='assets/audio/read-'+r.id+'.mp3';r.script=r.paragraphs.map(p=>p.es).join(' ');for(const q of r.questions)q.passage=r.script;r.wordCount=(r.script.match(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/g)||[]).length;
 const matching=syncWordFacts.filter(f=>r.chapter&&f.chapters.includes(r.chapter));r.wordRefs=matching.map(f=>f.wordId);
 const audio={id:'listen-reading-'+r.id,title:r.title+' · 阅读听辨',level:r.level,sourceType:'reading',script:r.script,translation:r.paragraphs.map(p=>p.zh).join('\n'),turns:[],focus:r.usage.map(x=>x.join('：')).join(' '),audio:r.audio,questions:r.questions.slice(0,2).map((q,i)=>({...q,id:'listen-reading-'+r.id+'-q'+i,listenId:'listen-reading-'+r.id,readingId:undefined,passage:undefined}))};
 listeningLessons.push(audio);for(const q of audio.questions){questionBank.push(q);byId.set(q.id,q)}
}
for(const warm of Object.values(syncWarmups)){const l={id:'listen-'+warm.id,title:warm.title+' · 入门听辨',level:warm.chapter<=9?'A1':'A2',sourceType:'textbook',script:warm.script,translation:warm.notes.join('\n'),turns:[],focus:warm.notes.join(' '),audio:warm.audio,questions:warm.questions.filter(q=>q.options).map((q,i)=>({...q,id:'listen-'+warm.id+'-q'+i,listenId:'listen-'+warm.id}))};listeningLessons.push(l);for(const q of l.questions){questionBank.push(q);byId.set(q.id,q)}}
const textbookSyncReviews=Array.from({length:6},(_,i)=>({id:'sync-review-'+(i+1),title:'第'+(i+1)+'单元综合练习',chapters:[i*3+1,i*3+2,i*3+3],questionIds:textbookSyncChapters.filter(c=>Math.ceil(c.chapter/3)===i+1).flatMap(c=>c.questionIds).filter((id,k,a)=>a.indexOf(id)===k)}));
