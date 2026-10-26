// Independent linguistic review of three existing lessons. Keep all prior IDs and sections.
const pronounReviewRows=[
 {suffix:'bridge-direct',section:'rule-1',title:'人物也能是直接宾语：先分角色，再按主线选形式',paragraphs:[
 '第三人称直接宾语的基础主线是lo/la/los/las；第一、第二人称还包括me（我）、te（你）、nos（我们）、os（vosotros你们）。Ana me ve（Ana看见我）中me是直接宾语，Ana me da un libro（Ana给我一本书）中同样的me却是间接宾语。不能只看代词外形判角色。',
 '人称a不会自动把对象变成间接宾语：Veo a Ana（我看见Ana）→La veo。这里Ana是被看见的直接对象。a常见于具体、可识别的人物直接对象；不是只要中文说人就一律添a，例如存在结构Hay tres alumnos（有三个学生）。未确定对象等条件还要按具体结构分析。',
 '若用重读人称形式强调直接对象，标准中通常同时使用对应非重读代词：La veo a ella（我看见的是她）。a ella用于明确或对比，不应把这一句判成多写了la。普通名词对象后置的La compro la revista不能因此直接当作中性的同一结构；停顿、话题和地区规则要另分。',
 'leísmo是部分地区以le等形式替代直接宾语lo等的用法。常见规范认可范围包括指男性单数人物的le：看见Juan可说Lo veo，也有Le veo。不能推广为看见所有女性或所有物品一律用le。本节基础题明确采用lo/la主线；礼貌称呼等进一步变体不在此一概判错。'],columns:['对象与角色','本课替换','完整例句'],rows:[['我，直接宾语','me','Ana me ve. Ana看见我。'],['你，直接宾语','te','Ana te ve. Ana看见你。'],['Ana，直接宾语，lo/la主线','la','La veo. 我看见她。'],['我们，直接宾语','nos','Ana nos ve. Ana看见我们。'],['vosotros，直接宾语','os','Ana os ve. Ana看见你们。'],['那些女学生，直接宾语','las','Las veo. 我看见她们。']],example:rwExample('Te presento a Ana. → Te la presento.','我把Ana介绍给你。→我把她介绍给你。','被介绍的Ana是直接宾语，采用本课主线la。','接收介绍的你是间接宾语te。','两个人物仍按间接te在前、直接la在后，不按人或物排序。'),questions:[
 rwInput('按lo/la主线：Veo a Ana. → ___ veo. 只填代词。','la','Ana是人物直接宾语；人称a不让她变成间接宾语。'),
 rwChoice('Ana me ve（Ana看见我）中，me是什么角色？','直接宾语',['直接宾语','间接宾语','主语'],'被看见的是我；me的功能来自ver在本句的结构。'),
 rwInput('Ana看见我们：Ana ___ ve. 只填宾语代词。','nos','我们作直接宾语用nos，不按Ana是女性改成las。'),
 rwInput('强调“我看见的是她”：___ veo a ella. 按lo/la主线填非重读代词。','la','重读人物对象a ella与相应非重读代词la同现。'),
 rwChoice('La veo a ella为什么不属于简单的错误重复？','a ella强调或明确对象，la与它配合',['a ella强调或明确对象，la与它配合','所有名词宾语都必须重复两次','la在这里是她的冠词'],'la是宾语代词；重读人称对象的复指与普通名词后置不能混为一谈。'),
 rwChoice('按本节的存在义haber结构，表达“有三个学生”，选哪一句？','Hay tres alumnos.',['Hay tres alumnos.','Hay a tres alumnos.'],'存在结构Hay tres alumnos中的人物名词不因指人而自动加a；这里不是ver a Ana那种人称a结构。'),
 rwChoice('关于指男性单数人物Juan的Lo veo与部分地区的Le veo，本节怎样处理？','基础练lo/la主线，同时说明认可的leísmo范围',['基础练lo/la主线，同时说明认可的leísmo范围','所有地区的Le veo一律错','所有直接宾语必须用le'],'地区规范有具体条件；本题不把有限认可扩展成所有对象都用le。'),
 rwInput('按lo/la主线：Veo a las alumnas（我看见那些女学生）→___ veo.','las','直接对象是女性复数人物，主线代词las；不按看见者的性别选。') ]},
 {suffix:'bridge-indirect',section:'rule-1',title:'间接对象不等于“一个人”：le/les与复指分开检查',paragraphs:[
 'dar的礼物例子方便入门，但间接对象不全是有生命的接收者。Le doy importancia al problema（我重视这个问题）中，le对应al problema（这个问题）；问题是事物，仍可承担间接对象角色。因此不能把直接与间接宾语简化成“物”和“人”。',
 'me、te、nos、os也能作间接宾语：Ana me da un libro（Ana给我一本书）；Te doy un libro（我给你一本书）。第三人称为le/les，通常不区分男性或女性。Le doy libros a Ana与Le doy libros a Luis都用le；只有相应间接对象从一个变为多个，才用les。',
 '间接对象的数不要受直接对象或最近的名词影响：Les doy un libro a mis amigos（我给朋友们一本书）用les，即使书只有一本。初学按这个标准一致关系练；不能照抄口语中有时出现的不一致le当作本课答案。',
 '完整接收者与非重读代词可以同现：Le doy un libro a Ana。若接收者以重读人称形式表达，则需要对应代词：Le doy un libro a ella；若普通名词接收者作为话题前置，也通常用代词复指：A Ana le doy un libro。不要把“不用重复”当成一条覆盖所有宾语的规则。',
 'le/les变se有明确触发条件：后面紧接第三人称直接宾语代词lo/la/los/las。Le doy el libro→Se lo doy。只有le、没有这种组合时，Le doy un libro仍保留le；第一、第二人称间接代词me/te/nos/os也不照搬le→se，例如Te lo doy。'],columns:['本句间接对象','选择','与物品数量是否有关'],rows:[['a Ana，一人','le','Le doy libros a Ana，书很多仍是le。'],['a mis amigos，多人','les','Les doy un libro，书一本仍是les。'],['a mí，我','me','Ana me da libros。'],['a ti，你','te','Te doy libros。'],['al problema，一个问题','le','Le doy importancia al problema。']],example:rwExample('Les doy un libro a mis amigas. → Se lo doy a mis amigas.','我给女朋友们一本书。→我把它给她们。','mis amigas是复数间接对象，未组合前为les。','el/un libro在本例中换成lo。','les在lo前变se；书一本控制lo，朋友多人不会把lo改los。'),questions:[
 rwInput('给多位女朋友一本书：___ doy un libro a mis amigas. 只填间接代词。','les','mis amigas复数决定les；女性身份不把间接代词改成las。'),
 rwInput('给Ana一人很多书：___ doy muchos libros a Ana.','le','Ana一个人决定le，不按libros复数取les。'),
 rwInput('Ana给我一本书：Ana ___ da un libro.','me','我在这里是接收者，用间接宾语代词me。'),
 rwInput('我给你一本书：___ doy un libro. 你采用tú称呼，只填间接代词。','te','第二人称单数的非重读间接代词te。'),
 rwChoice('Le doy importancia al problema中，le能对应什么？','al problema，这个问题',['al problema，这个问题','只能对应一个未说出的人','importancia这个直接对象'],'间接对象可以是事物；本句le对应al problema。'),
 rwInput('强调“我给她一本书”：___ doy un libro a ella.','le','重读间接对象a ella与对应非重读代词le同现。'),
 rwInput('话题前置“至于Ana，我给她一本书”：A Ana ___ doy un libro.','le','名词间接对象作前置话题时通常要复指le。'),
 rwChoice('Le doy un libro中只有le，没有lo/la/los/las紧接，应怎样？','保留le',['保留le','见到le就改se','按libro的阳性改lo替代接收者'],'le→se是有条件的组合变化，不是每次出现间接对象都变。') ]},
 {suffix:'pronouns',section:'rule-2',title:'组合按句法角色排序，不按“人”和“物”排序',paragraphs:[
 '本节限于常见的一组间接宾语代词加第三人称直接宾语代词：先间接，再直接。例如me lo（给我它）、te la（给你她或它）、nos los（给我们他们或它们）。直接对象可以是人，所以“人先物后”只能勉强描述某个送物例子，不能当规则。',
 '本例明确要表达“我把Ana介绍给你”：Te presento a Ana里，a Ana是被介绍的直接对象，用la；te是介绍的接收者，作间接对象。两者组合是Te la presento，两个对象都是人，照样按间接te在前、直接la在后。孤立的介绍句可能需要语境说明介绍方向；这里先给出中文方向，不让你猜。',
 '只把le/les在lo/la/los/las前变se：Le doy el libro→Se lo doy；Les doy el libro→Se lo doy。me、te、nos、os保留：Te doy el libro→Te lo doy，不改Se lo doy，否则可能把“给你”误换成“给他/她/他们”等其他对象。',
 'Se lo doy里的lo保留被替换直接对象的性数；se则不显示原先le还是les。Se lo doy a mis amigas中朋友虽多人，lo仍可指单数el libro。不写Se los doy来单靠los表达“给她们”，因为那会把直接对象改成阳性复数。',
 '后置时整个组合连在原形或肯定命令后：Quiero dártelo（我想把它给你），Dámelo（把它给我，tú）。否定命令前置：No me lo des。先选正确动词，再按间接—直接顺序放代词，最后重新检查书面重音。'],columns:['原结构','组合结果','检查点'],rows:[['Me das el libro.','Me lo das.','me不改se；lo指书。'],['Te doy la carta.','Te la doy.','te不改se；la指信。'],['Le doy el libro.','Se lo doy.','le在lo前变se。'],['Les doy el libro.','Se lo doy.','les也变se；lo仍单数。'],['Te presento a Ana.','Te la presento.','双方都是人；仍间接在前。']],example:rwExample('Te doy el libro. → Te lo doy.','我给你那本书。→我把它给你。','先分接收者你te和直接对象书lo。','按间接te、直接lo组合。','te不是le/les，不触发改se；普通变位动词前分写Te lo doy。'),questions:[
 rwInput('按lo/la主线：Te presento a Ana（我把Ana介绍给你）→Te ___ presento.','la','Ana是女性单数直接对象用la；te是间接对象，两个角色都可以是人。'),
 rwInput('Te doy el libro→___ lo doy. 只填第一处。','te','te不属于le/les；给你的意思必须保留。'),
 rwInput('Me das el libro→Me ___ das.','lo','el libro是阳性单数直接对象；me不因出现lo而变se。'),
 rwInput('Les doy el libro a mis amigas→Se ___ doy a mis amigas.','lo','lo指一本书；mis amigas是复数间接对象，不控制lo的数。'),
 rwInput('Les doy las llaves→Se ___ doy. 已知llaves是f.复数。','las','las按直接对象las llaves选；les在las前变se。'),
 rwChoice('Te la presento中的组合顺序按什么决定？','间接宾语在前，直接宾语在后',['间接宾语在前，直接宾语在后','人先物后，所以两个人不能组合','女性代词永远在最后'],'顺序依据句法角色；本句te与la所指都是人。'),
 rwInput('否定tú命令“别把它给我”：No ___ lo des.','me','否定命令前置；间接me在直接lo前。'),
 rwInput('肯定tú命令“把它给我”，把da+me+lo连写并补必要重音。','dámelo','合并为dámelo，重读保持在dá；这次后接后需要á。') ]}
];
for(const row of pronounReviewRows){
 const f=foundationLessons.find(f=>f.id==='foundation-'+row.suffix),l=f.genderLesson,g=grammarGuide.find(g=>g.id===f.id),s=l.sections.find(s=>s.key===row.section);
 if(!s)throw Error('Missing pronoun review section '+row.suffix);
 s.paragraphs.push(...row.paragraphs);s.columns=row.columns;s.rows=row.rows;
 const key='review-roles';const questions=row.questions.map((q,i)=>({...q,id:'pronoun-review-'+row.suffix+'-'+i,level:l.level,cat:l.title,guide:l.id,genderLesson:l.id,genderGroup:key,genderSection:row.section}));
 l.groups.push({key,section:row.section,title:row.title,goal:'先分角色，再分别检查形式、人数与组合条件。必要词义随题提供。',questions});
 l.examples.push(row.example);if(l.walkthroughs!==l.examples)l.walkthroughs.push(row.example);
 f.anatomy=l.examples.map(e=>[e.word,e.zh,e.steps.join(' ')]);f.deep.examples=f.anatomy;f.paragraphs=l.sections.flatMap(s=>s.paragraphs);f.questions=l.groups.flatMap(g=>g.questions);f.deep.sections=l.sections.map(s=>[s.title,[...s.paragraphs,...(s.rows||[]).map(r=>r.join('：'))]]);
 g.questions=f.questions;g.lesson.steps.push(...row.paragraphs);g.lesson.comparisons.push([row.example.word,row.example.zh+' '+row.example.steps.join(' ')]);
 for(const q of questions){questionBank.push(q);byId.set(q.id,q)}
}
