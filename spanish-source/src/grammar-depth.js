// Original beginner lessons. Not transcribed from an inaccessible uploaded textbook.
const grammarDepth={};
function depth(id,goal,sections,examples,checks){const f=foundationLessons.find(f=>f.id==='foundation-'+id);f.deep={goal,sections,examples};for(const [i,c]of checks.entries()){const [prompt,answer,options,explain]=c;const q={id:f.id+'-depth-'+i,level:f.level,cat:f.domain,guide:f.id,kind:'choice',prompt,answer,options,explain};f.questions.push(q);questionBank.push(q);byId.set(q.id,q)}const g=grammarGuide.find(g=>g.id===f.id);g.questions=f.questions;g.lesson={why:goal,steps:sections.flatMap(s=>s[1]),comparisons:examples.map(e=>[e[0],e[1]+' '+e[2]]),errors:[[f.mistake[0]+' → '+f.mistake[1],f.mistake[2]]],transfer:'合上讲解，完成本课练习；能解释选择依据后，再用自己的信息换词造句。'};}
depth('gender','学完能查出名词的性，选对冠词，并让冠词、名词、形容词在性和数上保持一致。',[
['先分清：语法性、自然性别、单复数是三件事',[
'中文“书”和“桌子”不分语法性，西语却把 libro 归为阳性，把 mesa 归为阴性。这是词汇信息，不是从物品外形、用途或中文意思推出来的。词典 m. 是 masculino，f. 是 femenino。学习单位应是 el libro（书，m.）、la mesa（桌子，f.），而不只是 libro、mesa。',
'“性”与“数”独立：libro 与 libros 都是阳性，mesa 与 mesas 都是阴性；变复数不会改变性。人物的自然性别也不总决定名词的语法性：persona 固定阴性，Una persona muy amable 可以指一位男性。先确定名词本身的分类，再检查修饰它的词。']],
['词尾能提供线索，但不能替代查词',[
'很多 -o 词为阳性，很多 -a 词为阴性；-ción、-sión 常见阴性，许多希腊语来源的 -ma 词为阳性。但每条都不是无例外的生成公式。把 la mano、la foto、la moto、el día、el mapa、el problema 单独连冠词记，比先猜错再纠正有效。',
'表示人物时要分类型：amigo/amiga 是词尾变化；profesor/profesora 是添加 -a；actor/actriz 有词干变化；el/la estudiante、el/la artista 保持词形，由冠词等显示。不能把所有辅音结尾都加 -a，也不能把所有 -ista 都判成阴性。']],
['一致到底与谁保持？用箭头找中心名词',[
'Una casa blanca 中 casa 是中心名词：casa 阴性单数 → una 阴性单数 → blanca 阴性单数。说话者是男性还是女性不影响 casa blanca。变成复数：unas casas blancas，三个位置分别检查，不能只把 blanca 改成 blancas。',
'不是每个形容词都有 -o/-a 两套：una casa grande、unas casas grandes。grande 在这里只按数变化；azul → azules 同理。所谓“一致”是使用这个词实际存在的形式，不是机械制造 granda 或 azula。']],
['为什么 el agua 仍然配 fría？',[
'agua、águila、aula 等阴性名词以重读 /a/ 开头，紧接单数定冠词时使用 el：el agua fría、el águila blanca。这主要涉及冠词形式，不是把名词改成阳性。复数回到 las aguas、las águilas；指示词用 esta agua，形容词仍阴性。',
'条件要看“重读音”和“是否紧接”：la amiga 的首音节不重读，所以用 la；la fría agua 中插入形容词，也不套紧接名词的 el 形式。先把高频 el agua fría 学稳，再扩展到不定冠词等细节。']],
['冠词不是中文的“一个/这个”逐字替换：先看听者能否识别',[
'Hay un libro en la mesa. El libro es rojo：第一次把一本书引入谈话，用 un；第二次双方都知道是哪本，用 el。定冠词 el/la/los/las 和不定冠词 un/una/unos/unas 各自还要与名词保持性数一致。选哪一类，与选哪一种性数形式，是两步决定。',
'泛指一类事物时西语常有定冠词：Me gusta el café（我喜欢咖啡）；不是一定指眼前某杯咖啡。描述职业常说 Soy estudiante；不特指数量、只谈喝水这一活动时可说 Bebo agua。不能从中文有没有“这个/一个”，推出西语必须有或没有冠词。']],
['缩合和“零冠词”：先掌握有限范围，再逐项扩展',[
'a + el → al，de + el → del：Voy al mercado，Vengo del trabajo；a + la 仍是 a la，不写 ala。这里的 el 是冠词，带重音的 él 是人称代词：Hablo de él 不能缩合成 del。',
'初学先分清：要引入一个可数对象 → un libro；定位双方能识别的对象 → el libro；描述某些身份 → Soy profesora；不以数量为焦点地说喝水 → Bebo agua。每类都有后续语义、修饰语和固定搭配细节，不能把零冠词说成“不可数名词一律不能加冠词”。']],
['同形名词有不同的性，先看词义再选冠词',[
'el capital 是资金，la capital 是首都；el orden 是秩序或顺序，la orden 是命令。这类 m. / f. 不是“随便选”。el/la artista 则主要是同一人物称谓根据所指人物配合，词典常标 m. y f.。本站把这两类分别提示，避免把多义词和通性人物名词混成一类。',
'自查顺序：①这是名词用法吗？②当前词义对应什么性？③是单数还是复数？④冠词是否有特殊条件？⑤形容词是否一起检查？例如“这些冷水”：中心 agua，阴性；用 estas aguas frías，而不是 estos aguas fríos。']]
],[['La mano está fría.','手是冷的。','mano 虽以 -o 结尾，但词典标 f.；la 与 fría 都依据 mano。'],['El agua está fría.','水是冷的。','agua 标 f.；el 是特定语音条件下的单数冠词形式；fría 揭示一致仍为阴性。'],['Las casas son grandes.','这些房子很大。','casa → casas；la → las；grande → grandes，不能造 grandas。']],
[['“一本新书”的三个词都正确的是：','un libro nuevo',['un libro nuevo','una libro nueva','un libro nueva'],'先找 libro：m.，单数。冠词选 un，形容词 nuevo 同为阳性单数；不是根据说话者性别变化。'],['把 una casa blanca 变为复数：','unas casas blancas',['unas casas blancas','una casas blanca','unos casas blancos'],'casa 阴性不变；数量变复数，una→unas、casa→casas、blanca→blancas。'],['为什么说 el agua fría？','agua 是阴性，el 是特殊条件下的冠词形式',['agua 是阴性，el 是特殊条件下的冠词形式','agua 变为阳性但形容词忘了变','所有 a 开头的词都用 el'],'需要阴性名词、重读 /a/ 开头、紧接单数冠词等条件；fría 保持阴性。'],['“首都”这一义项应是：','la capital',['la capital','el capital','两种都可任意互换'],'la capital 是首都；el capital 是资金，冠词变化会改变这里的词义。'],['男学生可以称为：','el estudiante',['el estudiante','el estudianto','la estudiante 必定男性'],'estudiante 是同形人物名词，不造 estudianto；此处用 el 显示男性指称。']]);
depth('verb','能独立从原形构造规则现在时，解释主语与词尾的关系，并识别哪些动词不能套规则表。',[
['“变位”就是让动词说明是谁，以及怎样看待时间和事件',[
'中文“我住、你住、她住”的“住”不变化；西语 vivo、vives、vive 的词尾会改变。词典用 vivir 收录，是原形 infinitivo；句子说“我住在马德里”，要用 Vivo en Madrid。先别一次背二十张表，本课只建立直陈式现在时 presente de indicativo 的规则。',
'主语是控制这次变位的成分，不一定是离动词最近的名词。Ana compra dos libros 中主语是 Ana，故 compra；dos libros 是买的东西，不让动词变成 compran。Ana y Luis compran dos libros 的主语换成两个人，才用 compran。']],
['把六组人称对好，尤其是“您”和“你们”',[
'按顺序记 yo；tú；él/ella/usted；nosotros/nosotras；vosotros/vosotras；ellos/ellas/ustedes。usted 意思是礼貌的“您”，但语法上用第三人称单数；ustedes 用第三人称复数。不能因为中文都是“你”就把 usted 与 tú 配同一形式。',
'西班牙许多地区非正式“你们”用 vosotros；拉美日常通常用 ustedes。地域用法也有 vos 等系统，本课先掌握上面六组，变位页可切换人称参照。省略主语时词尾仍存在：Hablo español 不等于原形 Hablar español。']],
['规则表真正要怎样用：先去结尾，再加人称词尾',[
'原形最后两字母通常是 -ar、-er、-ir。hablar 去 -ar 得 habl-；comer 去 -er 得 com-；vivir 去 -ir 得 viv-。再按顺序加词尾：-ar → o/as/a/amos/áis/an；-er → o/es/e/emos/éis/en；-ir → o/es/e/imos/ís/en。',
'做“我们吃”：原形 comer → 属 -er → 词干 com- → nosotros 对应 -emos → comemos。做“你们住”（vosotros）：vivir → viv- → -ís → vivís。不是把原形再加词尾，所以不写 comeremos 来表示本课的“我们吃”；comeremos 是将来时。']],
['一张完整表看出共性，也看出不能混的地方',[
'hablar：hablo, hablas, habla, hablamos, habláis, hablan；comer：como, comes, come, comemos, coméis, comen；vivir：vivo, vives, vive, vivimos, vivís, viven。-er 与 -ir 的 yo、tú、第三人称形式相似，差别集中在 nosotros/vosotros。',
'词尾重音也是拼写的一部分：habláis、coméis、vivís 不能漏重音。不要见单词像英语就按英语发音。先慢读完整表，再随机由人称找形式，最后放进短句；只会按顺序背表，不等于能够在说话时调用。']],
['先识别“不规则的哪一部分”，不要把规则扔掉',[
'pensar → pienso/piensas/piensa/pensamos/pensáis/piensan：这里 e→ie 主要在重读词干的人称出现，nosotros/vosotros 保留 pens-。tener 还有 yo 特殊 tengo，同时有 tienes/tiene/tenemos/tenéis/tienen。不是看到 e 就让所有动词、所有人称都变 ie。',
'ser、ir 等变化更大，使用专门范式。一个动词现在时不规则，也不代表其他时态完全随机。查变位页时同时看构成和用法，记录“哪个时态、哪个人称、哪一段变化”，不要只收集孤立形式。']],
['一句话里有两个动词，哪些需要变位？',[
'Quiero estudiar español：quiero 承担“我、现在”的信息；querer + 原形这个结构要求后面的 estudiar 保持原形。Puedo hablar、Voy a comer 同理，要记完整框架，不是规定“第二个动词永远原形”。',
'Quiero que Ana estudie 中 que 引出新小句，Ana 有自己的谓语 estudie；这里还涉及虚拟式，后续学习。初学自查：①圈主语；②找承担谓语的动词；③查类别和人称；④检查是否有另一个小句或要求原形的结构。']]
],[['Nosotros comemos arroz.','我们吃米饭。','comer 去 -er，加 nosotros 的 -emos；arroz 是宾语，不控制词尾。'],['Usted vive aquí.','您住这里。','礼貌称呼 usted 用第三人称单数 vive，不是 tú 的 vives。'],['Quiero aprender español.','我想学西语。','querer 在这里用 quiero；aprender 是 querer 后的原形。']],
[['用 nosotros，说 hablar 的规则现在时：','hablamos',['hablamos','hablan','hablaremos'],'habl- 加 -amos。hablan 对应 ellos/ellas/ustedes；hablaremos 是将来时。'],['“您吃”在本课现在时是：','usted come',['usted come','usted comes','usted comer'],'usted 虽用于称呼对方，语法形式仍与 él/ella 同组。'],['Ana compra dos libros 为什么不是 compran？','主语 Ana 是单数',['主语 Ana 是单数','libros 的复数不明显','comprar 没有复数形式'],'先找谁在买；宾语数量不决定本句的主语—动词一致。'],['nosotros 对应 pensar 的现在时：','pensamos',['pensamos','piensamos','pensáis'],'pensar 的词干变化不机械覆盖全部人称；此处保留 pens-。'],['“我能说西语”：','Puedo hablar español.',['Puedo hablar español.','Puedo hablo español.','Poder hablo español.'],'poder + 原形：第一个动词配 yo，第二个按结构保持 hablar。']]);
depth('core','根据要表达的信息选择 ser、estar 或 hay，并能解释为什么另外两个不适合当前句子。',[
['先看三句不同的问题，中文的“是、有、在”只能当提示',[
'¿Quién es Ana? → Ana es profesora：回答身份。¿Dónde está Ana? → Ana está en casa：定位已经知道的人。¿Qué hay en casa? → Hay una profesora：引入那里存在的人。先问“我在分类、定位，还是介绍存在”，再选结构。',
'ser 常用于身份、类别、来源、时间等；estar 常用于位置及许多状态；存在义 hay 用于说明某处有什么。不是看到中文“是”永远选 ser，也不是看到“在”就只剩 estar，活动举办地点就是一个重要边界。']],
['ser 的主线：身份、属性归类以及活动的发生信息',[
'Soy estudiante；Ana es de Chile；Son las dos；La reunión es el lunes。这些分别谈身份、来源、时间和活动安排。无修饰、用 ser 说明职业时通常不加不定冠词：Soy profesora；若有评价限定，可说 Es una profesora excelente，不能背成职业名词永远不加冠词。',
'La reunión es en la biblioteca 说会议在哪里举行，用 ser；La biblioteca está en el centro 定位图书馆这栋已知建筑，用 estar。同样都出现地点，要看被定位的是活动，还是人或物。']],
['estar 的主线：定位对象，或把对象放进某种状态',[
'El libro está en la mesa：双方知道哪本书，现在说明位置。Estoy cansada：说明我的状态，cansada 与被描述的人配合。说话者为男性可用 cansado，estar 本身则按人称变成 estoy。',
'“永久/暂时”只能做初步联想，不能做判断法。Está muerto 也用 estar，并不因为很短暂；Es joven 也不保证终生年轻。某些形容词换动词会换意义：Ana es lista（聪明）；Ana está lista（准备好了）。必须连同搭配和意思学习。']],
['hay 的主线：先把一个人或物引入谈话',[
'En la mesa hay un libro：先介绍桌上存在一本书。接着 El libro está abierto：现在这本书已可识别，用 estar 描述状态。初学常见 hay + un/una、数词、数量词或裸复数；定位特定对象则用 estar。这里是高频信息结构，不是禁止 hay 后出现任何带限定语的名词。',
'存在义 hay 不随后面名词的复数变化：Hay una silla / Hay dos sillas。此时不能因为两把椅子就写 han，也不要用复数 están 替代存在句。进到过去时再学 había、hubo 等，同样区分“存在”与助动词 haber。']],
['给你一个可以逐步执行的检查法',[
'想说“房间里有两把椅子”：先引入未知物品 → 存在 → hay；dos sillas 是所存在的东西 → Hay dos sillas en la habitación。想说“那两把椅子在房间里”：已识别对象 → 定位 → estar；主语 las dos sillas 复数 → están。',
'最后查形式：soy/eres/es/somos/sois/son；estoy/estás/está/estamos/estáis/están。es 与 está 不可只按中文“是”猜。esta（这，阴性）与 está（estar 的形式）重音和功能都不同。']]
],[['Hay dos libros en la mesa.','桌上有两本书。','第一次引入两本书，用存在义 hay；不随 libros 改复数。'],['Los libros están en la mesa.','那些书在桌上。','主语是已识别的复数 libros；定位它们，用 están。'],['La fiesta es en casa de Ana.','聚会在 Ana 家举行。','主语是活动，说明举办地点，用 ser。']],
[['第一次介绍厨房里有一个冰箱：','Hay una nevera en la cocina.',['Hay una nevera en la cocina.','Es una nevera en la cocina.','Están una nevera en la cocina.'],'先引入存在物品 → hay；una nevera 为单数，但即使 dos neveras 也用 hay。'],['问已知那本书在哪里：','¿Dónde está el libro?',['¿Dónde está el libro?','¿Dónde hay el libro?','¿Dónde es el libro?'],'对象已可识别，询问位置 → estar；el libro 单数 → está。'],['“她准备好了”应是：','Ella está lista.',['Ella está lista.','Ella es lista.','Ella hay lista.'],'estar lista 表准备好了；ser lista 常表聪明，表达内容不同。'],['“会议在学校举行”：','La reunión es en la escuela.',['La reunión es en la escuela.','La reunión hay en la escuela.','La reunión están en la escuela.'],'活动举办地点用 ser；不能把所有地点信息都机械归给 estar。'],['职业身份的常见说法：','Soy estudiante.',['Soy estudiante.','Estoy estudiante.','Hay estudiante yo.'],'ser 说明身份；这里无修饰的职业/身份表述通常不用不定冠词。']]);
depth('gustar','找到“喜欢的东西”这个主语，独立选择 gusta/gustan 与 me/te/le 等体验者代词。',[
['把中文的表达习惯先放一边，看看西语真正怎样组织',[
'中文“我喜欢咖啡”把“我”放在最前面；西语 Me gusta el café 可以先理解为“咖啡让我觉得喜欢”。不是要求你一直这样翻译，而是帮助找到结构：el café 是主语，gusta 是动词，me 是体验者“对我而言”。',
'因此 gusta/gustan 跟被喜欢的东西配合，而 me/te/le 表示谁有这个感受。体验者是几个人，不直接决定 gusta 的单复数：Nos gusta el café（我们喜欢咖啡），仍然 gusta，因为主语是 el café。']],
['一次只改变一个成分，亲眼看出谁控制哪一处',[
'Me gusta el libro → Me gustan los libros：对象从一本变成多本，gusta→gustan，me 不变。Me gusta el libro → A Ana le gusta el libro：体验者从我换成 Ana，me→le，gusta 不变。不要同时替换所有词后再猜哪处出了错。',
'体验者代词：a mí → me；a ti → te；a él/ella/usted → le；a nosotros → nos；a vosotros → os；a ellos/ellas/ustedes → les。le/les 不区分人物性别，用 A Ana、A Luis 等帮助明确对象。']],
['a mí、a Ana 和 me、le 为什么会一起出现？',[
'A mí me gusta el café 中 a mí 强调或对比“对我来说”；它不能替代 me，所以不写 A mí gusta el café。A Ana le gusta el café 先点明 Ana，再用 le 保留这个结构中的非重读代词。初学按完整句型掌握最稳。',
'比较口语回应：Me gusta el café. —A mí también（我也喜欢）；No me gusta el café. —A mí tampoco（我也不喜欢）。否定句 no 放在非重读代词前：No me gusta，不是 Me no gusta。']],
['喜欢一个活动，为什么通常用 gusta？',[
'Me gusta leer：leer 这个原形活动作为整体当主语，用单数 gusta；不能看 leer 里有很多书就用 gustan。Me gusta leer novelas 中 novelas 是 leer 的宾语，主语仍是“读小说”这个活动。',
'多个并列对象的一致有进一步细节，抽象活动还可能按整体理解。本课先掌握单一名词、单一复数名词和一个原形活动，不用一条“看到 y 就一定复数”的口号覆盖所有情况。']],
['遇到 doler、interesar 等，先迁移分析方法再查具体范式',[
'Me duele la cabeza / Me duelen los pies：疼痛部位控制动词数。Me interesa la historia / Me interesan estos libros：感兴趣的内容控制一致。它们不是 gustar 的同义词，也不是每个词都加 -an；需要使用自己的变位。',
'Tengo hambre 则是另一套：yo 是主语，tener 跟 yo 变 tengo，hambre 为名词。Estoy cansada 又是 estar + 形容词。中文看起来都是“我感觉……”，西语要分别学结构，不能造 Soy hambre 或 Yo gusto los libros 来逐字拼。']]
],[['Nos gusta esta canción.','我们喜欢这首歌。','nos 表我们；esta canción 单数控制 gusta。'],['A Ana le gustan estos libros.','Ana 喜欢这些书。','A Ana 明确体验者，le 对应她；主语 libros 复数控制 gustan。'],['No me gusta madrugar.','我不喜欢早起。','no 在 me 前；madrugar 是一个原形活动，按单数使用 gusta。']],
[['“我们喜欢这本书”：','Nos gusta este libro.',['Nos gusta este libro.','Nos gustan este libro.','Nos gustamos este libro.'],'体验者虽为我们，主语 este libro 仍单数；nos 与 gusta 各有自己的控制来源。'],['“Ana 喜欢这些歌”：','A Ana le gustan estas canciones.',['A Ana le gustan estas canciones.','A Ana la gusta estas canciones.','A Ana le gusta estas canciones.'],'体验者 Ana 用 le；复数主语 canciones 控制 gustan。'],['“我不喜欢早起”：','No me gusta madrugar.',['No me gusta madrugar.','Me no gusta madrugar.','No me gustan madrugar.'],'no 在非重读代词前；原形活动 madrugar 作为整体用 gusta。'],['Me gusta leer novelas 中 gusta 跟谁配？','leer novelas 这个活动整体',['leer novelas 这个活动整体','复数 novelas','me 的字母数量'],'novelas 是 leer 的宾语；整个原形活动是 gusta 的主语，不按 novelas 单独改 gustan。'],['“我的脚疼”：','Me duelen los pies.',['Me duelen los pies.','Me duele los pies.','Yo duelen los pies.'],'doler 与复数主语 los pies 一致，第三人称复数 duelen。']]);
depth('pronouns','恢复完整句，区分给什么与给谁，完成单代词替换、双代词组合及前后置。',[
['“宾语”这个名字难懂，就先用两个问题找角色',[
'Ana da el libro a Luis：谁给？Ana，是主语；给出什么？el libro，是直接宾语 complemento directo；给谁？a Luis，是本句的间接宾语 complemento indirecto。不要从中文词序猜，也不要看到介词 a 就宣布后面一定是间接宾语。',
'Veo a Ana（我看见 Ana）中 Ana 是看见的对象，属于直接宾语，人称 a 是标记人的用法，并不把 Ana 改成接收者。初学先用 dar 这种角色清晰的句子学替换，再扩大到其他动词。']],
['直接宾语代词：先知道被替换的到底是什么',[
'第三人称常用 lo（阳性单数）、la（阴性单数）、los（阳性复数）、las（阴性复数）。Compro el libro → Lo compro；Compro las flores → Las compro。替换的是 el libro/las flores 整个成分，不能通常再把同一宾语原样接后面而不说明强调或重复式结构。',
'me/te/nos/os 也可作第一、二人称直接宾语：Ana me ve。一个代词的功能必须看动词结构，不能把 me 永远叫“自己”或永远叫间接宾语。地区中存在受规范认可的部分 leísmo 等变体，本课先建立 lo/la 主线，不将所有地区口语统一判错。']],
['间接宾语先找接收者，再学两个代词同时出现',[
'Doy el libro a Ana → Le doy el libro：le 替换给谁；Doy los libros a mis amigos → Les doy los libros：les 指复数接收者。le/les 看接收者的数，不看书的数；不分 Ana 是女性还是 Luis 是男性。',
'两个都替换，按“人先物后”：le + lo 本来会相邻，西语要改成 se lo：Se lo doy。les + los 也改 se los。这个 se 不再显示接收者单复数，也不是“给自己”；可以补 a Ana / a mis amigos 消除歧义。']],
['代词放前还是放后，先看动词是什么形式',[
'普通变位谓语前置：Lo compro；Se lo doy。否定 no 在代词前：No se lo doy。原形可后接：Quiero comprarlo；允许代词上移的这类结构也常说 Lo quiero comprar，但不把两种位置拆成 Lo quiero comprarlo 重复标同一宾语。',
'肯定命令后接：Dáselo（给她/他吧）；否定命令前置：No se lo des。后接时是一个书写词，可能需要重音符号，如 dar + se + lo → dárselo。先选正确的动词形式，再按位置规则组合，不能靠把空格删掉完成全部变化。']],
['按一个完整实例走完四步',[
'题目：“不要把那些花给 Ana”，代词化。①完整结构：No des las flores a Ana。②las flores 是阴性复数直接宾语 → las；a Ana 是单数间接宾语 → le。③le + las 变 se las。④否定命令代词前置 → No se las des。',
'检查不是只看选对 las：se 与 las 次序、le→se、no 的位置、des 的否定命令形式都要对。错题反馈要定位是哪一步，而不是笼统说“代词错了”。主动说话前能恢复完整名词，有助于听者确认代词指代谁。']]
],[['Doy la carta a Ana. → Se la doy.','我把那封信给 Ana。→ 我给她。','la carta → la；a Ana → le；le 在 la 前变 se。'],['Quiero comprarlo. / Lo quiero comprar.','我想买它。','本例结构允许两种位置；选其一，不在两处重复 lo。'],['No se las des.','别把它们给她/他等。','阴性复数物品用 las；否定命令前置 se las，接收者由上下文明确。']],
[['Doy las llaves a Ana，双代词化：','Se las doy.',['Se las doy.','Le las doy.','Se lo doy.'],'las llaves 阴性复数 → las；a Ana → le；le 在 las 前变 se，所以 se las。'],['Veo a Ana 中 a Ana 是：','直接宾语',['直接宾语','因为有 a 所以一定是间接宾语','控制 veo 的主语'],'动词 ver 的看见对象是 Ana；人称 a 不等于间接宾语标志。'],['No des las flores a Ana，代词化：','No se las des.',['No se las des.','No déselas.','No las se des.'],'否定命令前置代词，人先物后，le+las→se las；不是肯定命令的后接方式。'],['Se lo doy 中 se 能告诉接收者有几人吗？','不能，可能来自 le 或 les',['不能，可能来自 le 或 les','一定一个人','一定多人'],'le 与 les 在 lo/la/los/las 前都变 se；靠上下文或补 a… 消除歧义。'],['“我想买它”的本课正确表达：','Lo quiero comprar.',['Lo quiero comprar.','Lo quiero comprarlo.','Quiero lo comprar.'],'本结构可代词上移；也可 Quiero comprarlo，但不重复同一代词。']]);
depth('past','不靠“动作长短”猜过去时，能区别整体事件、展开背景和更早已完成的事件。',[
['“发生在过去”还不够：我要从哪个角度讲？',[
'Ayer estudié dos horas 把昨天的两小时学习作为一个有边界的整体叙述，使用简单过去 pretérito perfecto simple，也常叫 indefinido。A las ocho estudiaba 把镜头放在八点，展开那时正在学习的背景，使用未完成过去 imperfecto。两句都可以是真的，只是视角不同。',
'未完成不等于后来没有完成；简单过去不等于动作短。Viví allí diez años 可以把十年当完整阶段；Cuando vivía allí… 则进入那段生活背景。时间长度本身无法决定选择。先判断是在推进叙事，还是交代背景、习惯或当时状态。']],
['把一个画面分成背景和进入画面的事件',[
'Estudiaba cuando sonó el teléfono：学习是展开的背景，电话响是进入画面的事件。先画“当时在学”的背景，再标“电话响”的节点，比背“长动作配短动作”更能迁移。短时间的背景、长时间的整体事件同样存在。',
'Ayer hacía frío y llovía. Salí de casa a las ocho：天气铺背景，出门推进叙事。ayer 把叙述放到昨天，但并不强迫句内每个动词都用简单过去；看见某个时间副词直接选答案，是把上下文信息漏掉了。']],
['过去习惯和有边界的重复，不是看到“多次”就一样',[
'De niña iba al parque los domingos：从过去内部回看习惯，通常用未完成。El año pasado fui al parque tres veces：把去年三次作为有边界的总数汇报，用简单过去。重复次数不直接等于未完成，关键看是否在总览一个已界定的阶段。',
'常见未完成词尾：hablar → hablaba/hablabas/hablaba/hablábamos/hablabais/hablaban；comer/vivir → comía/vivía 等。ser、ir、ver 要单独学 era、iba、veía 系列。简单过去有另一套词尾与不规则词干，先分清用途，再去变位页练相应形式。']],
['现在完成与过去完成：先找参照点',[
'He comido：he 是 haber 的现在时，comido 是分词；在许多西班牙用法中可把过去事件连接到当前时间框架，如 Hoy he comido temprano。许多拉美地区相同生活场景更常用简单过去；不是一种地区用法天然更正确。',
'Cuando llegué, Ana ya había comido：参照点是我的到达；Ana 吃完发生得更早，所以 había + 分词，过去完成 pluscuamperfecto。这里不是因为事件“很久以前”，而是相对于过去参照已经完成。']],
['助动词变位，分词在复合时态里不随宾语配合',[
'He comprado dos casas / Hemos comprado una casa：haber 随主语人称变，comprado 保持不变。不写 He compradas dos casas。对比 Las casas están compradas 中分词描述房子的状态，才涉及与 casas 一致；两套结构不能混为一谈。',
'做叙事题的顺序：①找叙述参照；②划分背景、推进事件、更早完成；③看说话者把时段怎样呈现；④选时态；⑤最后按主语变位。真实语境有时允许多个视角，优质解释应该说明各自含义，而不把所有选择题都说成自然语言只有一种可能。']]
],[['Estudiaba cuando sonó el teléfono.','我在学习时，电话响了。','estudiaba 展开背景；sonó 把响起作为叙事事件。'],['Viví allí diez años.','我在那里住过十年。','从阶段边界回看完整经历；长达十年也能用简单过去。'],['Cuando llegué, Ana ya había salido.','我到时，Ana 已出门了。','先出门，后到达；había salido 标明相对于过去参照更早完成。']],
[['将十年居住作为已结束的完整阶段叙述：','Viví allí diez años.',['Viví allí diez años.','Vivía 必定是唯一可能','Vivir allí diez años yo.'],'本题明确选择“有边界的整体”视角，故 viví；不能把十年很长当作只能用未完成的证据。'],['“我到时她已经吃完”，吃完早于到达：','Cuando llegué, ya había comido.',['Cuando llegué, ya había comido.','Cuando llegué, ya había comió.','Cuando llegué, ya habrá comer.'],'过去参照 llegué 之前完成：haber 未完成 había + 分词 comido。'],['哪句适合“展开学习背景，电话响起进入画面”？','Estudiaba cuando sonó el teléfono.',['Estudiaba cuando sonó el teléfono.','Estudiaré cuando sonaba el teléfono.','Estudio ayer sonará teléfono.'],'背景用 imperfecto estudiaba；进入画面的过去事件用 sonó。'],['“我买了两栋房子”的复合时态形式：','He comprado dos casas.',['He comprado dos casas.','He compradas dos casas.','Han comprada dos casas yo.'],'haber+分词中 comprado 不随宾语 casas 做阴性复数变化。'],['ayer 是否让句内所有动词必须用简单过去？','不是，昨天的背景也可用未完成过去',['不是，昨天的背景也可用未完成过去','是，任何语境都必须','不是，因为 ayer 是将来时间'],'时间定位与叙述视角分开：Ayer hacía frío y salí temprano 可以同时有背景与事件。']]);
