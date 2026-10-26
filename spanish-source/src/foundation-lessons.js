const foundationLessons=[];
function fd(id,domain,title,level,paragraphs,anatomy,mistake,checks){const lesson={id:'foundation-'+id,domain,title,level,paragraphs,anatomy,mistake};lesson.questions=checks.map(([prompt,answer,options,explain],i)=>({id:lesson.id+'-q'+i,level,cat:domain,guide:lesson.id,prompt,answer,options,explain,kind:'choice'}));foundationLessons.push(lesson);const g={id:lesson.id,title,level,domain,rule:paragraphs[0],example:anatomy.map(x=>x[0]).join(' '),translation:anatomy.map(x=>x[1]).join(''),pitfall:mistake.join(' → '),question:lesson.questions[0],questions:lesson.questions,foundation:id};grammarGuide.push(g);for(const q of lesson.questions){questionBank.push(q);byId.set(q.id,q)}}
fd('sentence','人称与句法','零基础：一句话先找谁、做什么、涉及什么','A1',[
'先不用背“主谓宾”三个术语。读 Ana compra un libro：这句话在谈 Ana；她做的事是 compra（买）；买的东西是 un libro。对应后才命名：Ana 是主语，compra 是谓语核心，un libro 是直接宾语。',
'换成 Yo compro un libro 时，compra→compro，说明动词与主语人称呼应；换成 Ana compra dos libros 时，动词仍是 compra，因为变的是宾语数量，不是主语。先找到真正控制动词的成分。',
'西语可以省主语：Compro un libro 仍看得出是我。不是每句话都要把 yo、tú 写出来；对比、强调或有歧义时保留。usted 意义上是您，语法形式却与 él/ella 一组。',
'一句话可有多个小句，每个小句都要重新找自己的主语与变位动词。Quiero que Ana venga 中 quiero 配我，venga 配 Ana；不能用主句主语决定全部动词。'],[['Ana','Ana','谁在买：单数第三人称。'],['compra','买','comprar 的第三人称单数现在时。'],['un libro','一本书','动作涉及的物品，数量不控制 compra。']],['Yo compra dos libros','Yo compro dos libros','主语 yo 要 compro；不是根据 dos libros 选复数。'],[['Ana compra dos libros 的主语是什么？','Ana',['Ana','dos libros','compra'],'动作执行者是 Ana；dos libros 是所购物品。'],['把 Ana 换成 yo，买一本书应是：','Yo compro un libro.',['Yo compro un libro.','Yo compra un libro.','Yo comprar un libro.'],'yo 对应 compro；原形不能承担此处谓语。'],['usted 配哪种动词形式？','第三人称单数',['第三人称单数','第二人称复数','永远不变位'],'礼貌称呼的语法人称与 tú 不同。']]);
fd('sound','发音与书写','零基础：字母、音节与重音分三步','A1',[
'西语五个元音 a/e/i/o/u 通常保持清楚、稳定的单元音。h 通常不发音，ñ 与 n 不同。字母名与词中声音是两件事，不能把整词读成一串字母名，也不要用英语元音习惯直接替代。',
'先分音节，再找重读。ca-sa、ha-blar；一般以元音、n、s 结尾重读倒数第二音节，其他辅音结尾重读末音节。这是起点，弱强元音、分音与部分词尾规则还要继续学。',
'书面重音明确标出重读或区别同形词。hablo（我说）与 habló（他/她/您说了）形式、读音和语法都不同。país 的 í 形成分音；tú 与 tu 区分人称代词和物主词，ti 则不用区别重音。',
'c/z/s、ll/y、r/rr 等声音存在地区差异。先固定一个学习参照，练清晰度和重音，再增加其他地区输入；口音差异并不自动等于错误。'],[['ha-blo','我说','重读 ha，不写重音，h 通常不发音。'],['ha-bló','他/她说了','重读 bló，书面 ó 帮助同时识别词形。'],['pa-ís','国家','í 重读打破通常元音组合，分为两音节。']],['pais','país','重音符号是拼写的一部分，不能随意省去。'],[['哪个表示“他/她说了”？','habló',['habló','hablo','hablar'],'简单过去第三人称单数为 habló，重音在末音节。'],['“你的书”中的“你的”是：','tu',['tu','tú','tí'],'物主词 tu 不带重音；人称 tú 带重音。'],['h 在 hola 中通常怎样？','不发音',['不发音','读英语 h','读 ñ'],'常规拼读中 hola 的 h 不发音。']]);
fd('gender','名词与限定词','零基础：名词、冠词、阴阳性怎样一起记','A1',[
'名词给人、物或概念命名；语法性是西语名词的分类，不是在说桌子真的有女性性别。把 la mesa、el libro 连冠词一起记，遇到新词查 m./f. 比凭中文猜可靠。',
'-o 常为阳性、-a 常为阴性，但这是倾向，不是机器算法：la mano、el problema、el día。人的称谓有 amigo/amiga、el/la estudiante、actor/actriz 等不同类型，不能全部套 o→a。',
'el/la/los/las 常用于可识别对象，un/una/unos/unas 常引入一个或一些对象。Hay un libro. El libro es rojo：第一次把书引入，第二次谈双方已知道的那本。泛指和零冠词需要后续单独学习。',
'复数时要检查冠词、名词、形容词，不能只给最后一个词加 s。agua 是阴性，单数可用 el agua，但形容词仍 fría，复数 las aguas frías；不能据 el 推出该词变成阳性。'],[['Hay','有','引入存在，后面可接单数或复数。'],['una mesa','一张桌子','mesa 阴性单数，使用 una。'],['blanca','白色的','描述 mesa，因此也用阴性单数。']],['el mano blanco','la mano blanca','mano 虽以 -o 结尾，仍为阴性。'],[['正确的是：','la mano',['la mano','el mano','los mano'],'mano 是阴性例外，应连冠词记。'],['一本新书变成一些新书：','unos libros nuevos',['unos libros nuevos','unas libros nuevos','un libros nuevo'],'三处都改成阳性复数。'],['el agua 后“冷的”是：','fría',['fría','frío','fríos'],'agua 语法性仍为阴性。']]);
fd('adjectives','形容词与程度','零基础：形容词究竟跟谁变化','A1',[
'形容词描述名词。La casa es bonita 中 bonita 描述 casa，不描述说这句话的人。即使说话者是男性，casa 也仍配 bonita；先找被描述的对象。',
'许多 -o 形容词有 bonito/bonita/bonitos/bonitas；许多 -e 或辅音结尾的形容词不因阴性改 -a，但数仍可能变：grande/grandes、azul/azules。不能造 una casa granda。',
'比较更多/更少用 más/menos…que，相同程度用 tan…como。bueno→mejor、malo→peor 有特殊比较形式。比较的对象和范围要明确，más 不一定表达更好。',
'muy 常修饰形容词或副词：muy cansada、muy bien；mucho 可修饰动作量，muchos/muchas 可限定名词。Trabajo mucho 不等于 Trabajo muy，muchas personas 也不能写成 muy personas。'],[['Las casas','这些房子','阴性复数的名词组。'],['son','是','配复数主语，不由形容词决定。'],['muy bonitas','很漂亮','muy 不变；bonitas 与 casas 一致。']],['una casa granda','una casa grande','grande 不因阴性变成 granda。'],[['“比那本便宜”应是：','más barato que ese',['más barato que ese','más barato como ese','tan barato que ese'],'más 比较级搭配 que。'],['“工作很多”是：','Trabajo mucho.',['Trabajo mucho.','Trabajo muy.','Trabajo muchas.'],'mucho 在这里修饰动作量。'],['las casas 很大：','son grandes',['son grandes','es granda','son granda'],'复数 grande→grandes，不造 granda。']]);
fd('core','核心动词用法','零基础：ser、estar、hay 不能只背“永久/暂时”','A1',[
'先问自己到底要传达哪种信息：身份/来源常用 ser；已知人或物的位置及许多状态常用 estar；某处存在什么常用 hay。这比永久/暂时二分更可靠。',
'Soy estudiante 说身份，Estoy cansada 说此刻状态，但 Soy joven、Está muerto 等表明时间长短并不是万能判断。活动发生地点常用 ser：La reunión es en la escuela。',
'En la mesa hay un libro 引入一本书；El libro está en la mesa 定位已经识别的书。同样是“桌上有书”，信息组织不同，不能机械互换。hay 不随 libros 变成复数。',
'先记高频人称：soy/eres/es/somos/sois/son；estoy/estás/está/estamos/estáis/están。重音属于形式；esta（这个阴性）与 está（在/处于）不是同一个词。'],[['El libro','那本书','已经可识别的对象。'],['está','在','estar 的第三人称单数，定位对象。'],['en la mesa','桌子上','en 引入位置；并非所有 en 都译“里面”。']],['La reunión está en la escuela（欲表达举办地点）','La reunión es en la escuela','会议作为活动的举办地点通常用 ser。'],[['引入“房间里有两把椅子”：','Hay dos sillas en la habitación.',['Hay dos sillas en la habitación.','Son dos sillas en la habitación.','Hayes dos sillas.'],'hay 为存在义，不造 hayes。'],['“我是学生”应是：','Soy estudiante.',['Soy estudiante.','Estoy estudiante.','Hay estudiante yo.'],'身份用 ser。'],['“书在哪里”应选：','¿Dónde está el libro?',['¿Dónde está el libro?','¿Dónde es el libro?','¿Dónde hay el libro?'],'定位特定的书用 estar。']]);
fd('verb','动词现在时','零基础：从原形到句子里的动词','A1',[
'原形 hablar/comer/vivir 是词典入口。要组成“我说、你吃、她住”，动词要匹配主语，分别选 hablo、comes、vive。不能因为中文不变词尾就省略这一步。',
'规则现在时先分三类：habl-ar、com-er、viv-ir。去词尾后按六个人称加新词尾。habl+o、com+es、viv+e，每次只做两个决定：哪一类、哪一个人称。',
'不是所有动词都规则。pensar→pienso 属词干变化；tener→tengo 还有 yo 特殊；ir→voy 变化更大。一个时态不规则不等于每个时态都必须重新背一整套。',
'两个动词相连时不一定都变位：Quiero estudiar、Puedo hablar、Voy a comer。第一个承担人称，后面的形式由结构决定；要把整套结构记下来。'],[['Yo','我','第一人称单数，可以按语境省略。'],['quiero','想要','querer 的 yo 形式，承担本句人称。'],['estudiar español','学西语','querer+原形，不写 quiero estudio。']],['Yo quiero estudio','Yo quiero estudiar','第二个动词受 querer+原形结构控制。'],[['“我们住”是：','vivimos',['vivimos','viven','vivo'],'vivir 的 nosotros 词尾为 -imos。'],['Puedo 后接“说”应是：','hablar',['hablar','hablo','hablas'],'poder+原形。'],['tú 对应 comer：','comes',['comes','comen','como'],'第二人称单数为 comes。']]);
fd('questions','提问与否定','零基础：问什么、否定什么，要定位清楚','A1',[
'疑问词负责指定缺的信息：qué 什么、quién 谁、dónde 哪里、cuándo 何时、cómo 怎样、cuánto 多少。直接问句常有 ¿…?，疑问词按功能带重音。',
'一般问句不需要英语式 do。¿Vives aquí? 可直接用陈述结构加问句语调；疑问词问句再把信息缺口放出来：¿Dónde vives?。主语是否前置取决于具体结构，不背绝对倒装口号。',
'一般否定把 no 放在变位动词前；有前置代词则放在代词前：No lo sé、No me gusta。No entiendo todo 是否定“全部懂”，与 No entiendo nada（什么都不懂）范围不同。',
'no…nada/nadie/ninguno 是常见否定呼应。Nadie vino 中 nadie 在动词前时通常不再加 no；No vino nadie 中否定词后置则保留 no。先掌握句型，再理解位置差别。'],[['¿Dónde','哪里','询问位置，不是问身份或价格。'],['vives','你住','动词本身指向 tú。'],['?','问句结束','与开头 ¿ 对应。']],['Yo no entiendo todo=我完全不懂','Yo no entiendo todo=我不是全部都懂','范围不同，不要把部分否定误读成全部否定。'],[['“你住哪里？”','¿Dónde vives?',['¿Dónde vives?','¿Qué vives?','¿Cuánto vives?'],'dónde 问地点。'],['“没人来”可说：','No vino nadie.',['No vino nadie.','Vino no nadie.','No nadie vino.'],'动词前 no 与后置 nadie 呼应。'],['“我不知道这件事”：','No lo sé.',['No lo sé.','Lo sé no.','Sé no lo.'],'no 在前置代词 lo 前。']]);
fd('gustar','喜好与日常结构','零基础：me gusta 与 tengo hambre 是两套结构','A1',[
'Me gusta el café 中 me 表“对我而言”，el café 是引起喜爱的事物。换成 los libros，要改 gustan；换成 a Ana，用 le。不要把 me 当成决定 gusta/gustan 的主语。',
'活动常作为单数整体：Me gusta leer。a mí 可强调或澄清体验者，但不能替代 me：A mí me gusta…。实际多主语协调还有细节，初学先稳定单一对象结构。',
'身体感受有多套表达：tener hambre/sed/frío、estar cansado/a、me duele la cabeza。中文都像“我…”，但西语结构不同，不要把 hambre 当形容词放到 soy 后。',
'学词时连同结构和一致一起记：tener 是动词、hambre 是名词；cansado 是形容词，与被描述的人配；doler 则与疼痛部位配。'],[['Me','对我而言','体验者代词；不按“我”选 gusto。'],['gustan','使……喜欢','与后面的复数对象一致。'],['los libros','这些书','决定 gustan 的复数。']],['Me gusto los libros','Me gustan los libros','此处不是 gusto，复数对象要求 gustan。'],[['“我喜欢读书”：','Me gusta leer.',['Me gusta leer.','Me gustan leer.','Yo gusta leo.'],'原形活动作为整体。'],['“我饿了”：','Tengo hambre.',['Tengo hambre.','Soy hambre.','Estoy hambre.'],'tener+名词的固定结构。'],['“脚疼”：','Me duelen los pies.',['Me duelen los pies.','Me duele los pies.','Yo duelen pies.'],'los pies 复数配 duelen。']]);
fd('pronouns','代词与宾语','从完整名词到 lo/la/le，再到 se lo','A2',[
'先恢复完整句：Doy el libro a Ana。我给出什么？el libro，是直接宾语；给谁？a Ana，是接收者。在这个结构里书可换 lo，Ana 可换 le：Le doy el libro；Lo doy a Ana。',
'两者同时换时，本来的 le lo 改成 se lo：Se lo doy。se 在这里只是 le/les 在 lo/la/los/las 前的形式变化，不自动表示自己。上下文仍要帮助确认接收者是谁。',
'一般变位动词前：Se lo doy；原形可后接：Voy a dárselo，也常能 Voy a dárselo/Se lo voy a dar；肯定命令后接：Dáselo；否定命令前置：No se lo des。重音随组合检查。',
'名词前有人称 a 不保证它就是间接宾语：Veo a Ana 中 Ana 是直接宾语。代词选择还存在地区规范变体，本站先教清晰的 lo/la 直接宾语与 le 间接宾语主线，不把所有口语变体一律判错。'],[['Se','给她/他/您等','本句由 le 在 lo 前变来，需语境确定对象。'],['lo','那本书','阳性单数直接宾语。'],['doy','我给','dar 的 yo 形式。']],['Le lo doy','Se lo doy','双代词组合中 le/les 在 lo 系前改成 se。'],[['“给 Ana 那本书”双代词化：','Se lo doy.',['Se lo doy.','Le lo doy.','Lo le doy.'],'间接宾语在前、直接宾语在后，le→se。'],['肯定 tú 命令“把它给她”：','Dáselo.',['Dáselo.','Se lo da tú.','No se lo da.'],'肯定命令后接代词并检查重音。'],['Veo a Ana 中 a Ana 是：','直接宾语',['直接宾语','一定是间接宾语','主语'],'人称 a 与间接宾语不能混为一谈。']]);
fd('past','过去时间系统','过去时先看参照和视角，再看词尾','A2',[
'时间关系与叙事视角要分开。Llegué（我到了）把事件作为整体；Cuando llegué, Ana estudiaba 中 estudiaba 展开到达时的背景。不能用“长动作/短动作”替代所有区别。',
'过去习惯与背景常用未完成：De niña vivía allí；有边界的整体经历可用简单过去：Viví allí diez años。即使十年很长，也可以从终点回看成完整整体。',
'完成时把事件连接到参照：He comido 与当前框架相关；Había comido 早于一个过去参照。助动词承担人称/时间，分词不随宾语变。现在完成与简单过去的地区分工要逐步认识。',
'阅读时先圈时间表达，不能只凭一个 ayer/hoy 做唯一判定。再找主事件、背景和更早事件，最后选形式。一个句子里混用几个过去时可能正是清楚叙事所需。'],[['Cuando llegué','我到的时候','把到达设为过去参照节点。'],['Ana ya había salido','Ana 已经出去了','出门早于到达，使用过去完成。']],['Ayer=所有动词必须简单过去','Ayer, mientras estudiaba, sonó el teléfono','同一昨天里有展开背景与推进事件。'],[['把十年学习视作完整经历，应选：','Estudié diez años.',['Estudié diez años.','Estudiaba 永远唯一','He estudiar diez años.'],'长时段也可作为有边界整体。'],['到达之前已出门：','ya había salido',['ya había salido','ya había salió','ya saliré'],'过去之前完成，用 había+分词。'],['电话响时我在学习：','Estudiaba cuando sonó el teléfono.',['Estudiaba cuando sonó el teléfono.','Estudiaré cuando sonaba.','Siempre solo un tiempo.'],'背景与事件使用不同视角。']]);
fd('prepositions','介词与时间','介词不是中文词对词：先分空间、时间、结构','A2',[
'en/a/de/con/por/para 的选择由意义和结构共同决定。Vivo en Madrid 是住处；Voy a Madrid 是方向；Soy de Madrid 是来源。中文都有地点名，但介词不同。',
'时间先区分起点、时长与过去定位：desde 2020（自2020年）、desde hace dos años（至今两年）、hace dos años（两年前）。不是把所有“从”都换成 desde hace。',
'动词搭配需要连介词记：depender de、pensar en、insistir en、acordarse de。把名词换从句时结构可能保留：Me di cuenta de eso→de que faltaba algo。',
'缩合只针对 a/de 与定冠词 el：al/del；与人称 él 不缩合，与 la 不缩合。Voy a la escuela 与 Voy al colegio 都可能对，先识别冠词。'],[['Vivo','我住','动词先说明在谈居住。'],['en Madrid','在马德里','住处，区别 ir a 的方向。'],['desde 2020','从2020年至今','年份是起点，不是时长。']],['desde hace 2020','desde 2020','desde hace 后接时长，不能在本义下接起始年份。'],[['“从2020年住这里”：','Vivo aquí desde 2020.',['Vivo aquí desde 2020.','Vivo aquí desde hace 2020.','Vivo aquí hace en 2020.'],'明确起始年份。'],['a+el banco 缩合：','al banco',['al banco','a él banco','ael banco'],'定冠词 el 与 a 缩合。'],['“我意识到缺东西”主线：','Me di cuenta de que faltaba algo.',['Me di cuenta de que faltaba algo.','Creo de que falta algo.','Me cuenta de algo fui.'],'darse cuenta de 保留搭配介词。']]);
fd('porpara','介词与结构','por 与 para：别背成一张万能中文表','A2',[
'para 常引出目的、接收对象、期限或用途：Estudio para aprender；Este regalo es para Ana；Es para mañana。三个功能有联系，但不应都逐字译为“为了”。',
'por 可表达原因、经过、渠道、交换等：Gracias por ayudarme；Voy por el parque；Te lo envío por correo；Lo compré por diez euros。同一个词要放到结构里解释。',
'目的若是同一个行为者常用 para+原形：Estudio para trabajar aquí；主语变化常用 para que+虚拟式：Te lo explico para que entiendas。por qué 问原因，para qué 问用途/目的。',
'不是每个介词都能靠一般意义猜出。先记核心对比，再记具体搭配；遇到两者都可用时，说明两句各表达什么，而不是宣布其中之一在任何场合都错。'],[['Te lo explico','我给你解释','主句说话者是我。'],['para que','为使／以便','引出另一行为者的目的。'],['entiendas','你理解','现在虚拟式，主语 tú。']],['para que tú entiendes（本目的结构）','para que tú entiendas','主语变化的目的从句通常用虚拟式。'],[['“送给 Ana 的礼物”：','un regalo para Ana',['un regalo para Ana','un regalo por siempre Ana','un regalo de para Ana'],'para 标记接收对象。'],['“谢谢帮助我”：','Gracias por ayudarme.',['Gracias por ayudarme.','Gracias para ayúdame.','Gracias a que ayudar yo.'],'gracias por+原形表达感谢原因。'],['问某工具的用途：','¿Para qué sirve?',['¿Para qué sirve?','¿Por dónde sirve?','¿Quién sirve objeto?'],'para qué 问用途。']]);
fd('subjunctive','虚拟式与语气','虚拟式先读懂“谁以什么立场说什么”','B1',[
'语气不是事件真实性的开关。Me alegra que hayas venido：你确实来了，我对已发生事实表达高兴，仍用虚拟式。必须看主句结构、说话者立场和从句如何被呈现。',
'先学高频框架：Quiero que vengas（希望/影响）、Es importante que estudies（评价）、No creo que sea fácil（否定认知常见用法）。相同主语的意图通常用 Quiero estudiar，不要强行加 que yo。',
'再看时间参照：Espero que venga 现在/将来相关；Esperaba que viniera 过去视角；Me alegra que haya venido 强调已完成。虚拟式的时间关系仍要判断。',
'连接词和关系从句不只背触发词表：Busco un piso que tenga… 描述未确定目标；Conozco un piso que tiene… 对已知对象作断言。cuando 后也要分已发生习惯与尚未发生。'],[['Quiero','我希望','主句表达意愿，不是对来这一事实作报告。'],['que','从句连接','后面有自己的主语/变位。'],['vengas','你来','venir 的 tú 现在虚拟式。']],['虚拟式=一定不真实','Me alegra que hayas venido 可以评价已发生事实','语法结构和信息立场比真假二分更可靠。'],[['“我想学习”：','Quiero estudiar.',['Quiero estudiar.','Quiero que estudio.','Quiero estudié.'],'同主语意图通常接原形。'],['“希望你来”：','Espero que vengas.',['Espero que vengas.','Espero que vienes.','Espero vienes que.'],'意愿框架中选虚拟式。'],['真实发生的事能用虚拟式吗？','能，例如情感评价',['能，例如情感评价','绝对不能','只有未来才有虚拟式'],'不是现实/不现实二分法。']]);
fd('relative','关系从句','把两个短句接起来，再理解关系词','B1',[
'关系从句描述前面的对象，这个对象叫先行词。Tengo un libro. El libro es rojo→Tengo un libro que es rojo。先把重复的书找出来，再用 que 接住，不是一开始背一串复杂术语。',
'地点可用 donde：Esta es la ciudad donde vivo。与直接问句 ¿Dónde vives? 不同，关系词 donde 通常不带疑问重音；是否带重音由功能而非长相决定。',
'介词来自从句内部的结构：hablar con alguien→la profesora con la que hablé；basarse en algo→los datos en los que se basa。不能为了“关系从句”就把原搭配介词删掉。',
'cuyo 表拥有关系，配的是后面的被拥有名词：la autora cuyos libros leo。作者可以是女性，但 libros 阳性复数，所以用 cuyos。此类结构用于较正式语体，口语还可换更简短句子。'],[['la autora','那位女作者','先行词，拥有者。'],['cuyos libros','她的那些书','cuyos 与 libros 一致。'],['leo','我读','从句自己的变位动词，对应 yo。']],['la autora cuyas libros','la autora cuyos libros','一致的对象是 libros，不是 autora。'],[['“我住的城市”：','la ciudad donde vivo',['la ciudad donde vivo','la ciudad dónde vivo siempre pregunta','la ciudad quien vivo'],'地点关系词 donde。'],['con 来自哪里？la persona con la que hablé','hablar con alguien 的结构',['hablar con alguien 的结构','所有关系词都要 con','中文必须有和'],'恢复简单句可看清介词来源。'],['la autora _____ libros leo','cuyos',['cuyos','cuyas','cuyo'],'libros 阳性复数。']]);
fd('passive','被动与 se','先区分动作、结果与未指明执行者','B2',[
'主动句 Los empleados enviaron las cartas 强调执行者；Las cartas fueron enviadas por los empleados 把信件放在主位，ser+分词叙述事件。分词与信件一致，所以 enviadas。',
'结果状态 Las cartas están abiertas 说现在处于打开状态，不直接给出动作过程或执行者。ser 被动与 estar 状态不能简单互换。haber 复合时态又是第三种：Han enviado cartas，enviado 不随 cartas 变。',
'被动 se：Se venden libros，libros 复数主语配 venden；非人称 se：Se atiende a los clientes，不把带人称 a 的 clients 当成被动主语机械改复数。',
'同一个 se 还有自复、相互、双代词变体及其他结构。遇到 se 先问它组织了什么句子，再问一致和译法，不能统一翻译成“自己”。'],[['Las cartas','那些信','阴性复数主语。'],['fueron enviadas','被寄出了','ser 的过去时＋与主语一致的分词。'],['el lunes','周一','事件发生时间。']],['Han enviadas cartas','Han enviado cartas','haber+分词中的 enviado 不与宾语一致。'],[['被动 se：卖书','Se venden libros.',['Se venden libros.','Se vende libros（本站标准主线）','Se libros venden a.'],'被动主语 libros 复数。'],['信处于打开状态：','Las cartas están abiertas.',['Las cartas están abiertas.','Las cartas han abiertas.','Las cartas están abierto.'],'结果状态用 estar，分词作状态描述一致。'],['被动事件中 enviadas 跟谁一致？','las cartas',['las cartas','por la oficina','haber'],'与被动主语一致。']]);
fd('logic','篇章与逻辑','连接词连接的是哪一种关系','B1',[
'porque 给原因，por eso 给由此产生的结果，pero/sin embargo 引出转折，aunque 表让步。先确定前后信息的逻辑，再选词，不是看到“高级词”就替换所有 pero。',
'Llueve, por eso no salgo：先给下雨这个原因，再说不出门结果。No salgo porque llueve：先给决定，再给原因。两句顺序不同，但因果方向一样。',
'Aunque llueve, salgo：尽管下雨仍出门，正常预期被突破。aunque 的语气还与是否作事实断言等有关；不是“aunque 后永远虚拟式”。',
'写一段话时先一句一功能：主张—理由—例子—限制—回应。重复连接词不等于组织清楚，省略的对象与代词指向也要让读者找得到。'],[['Llueve','下雨','原因信息。'],['por eso','所以','把后句标为结果。'],['no salgo','我不出门','结果，不是下雨的原因。']],['Llueve porque no salgo（欲说明因雨不出门）','Llueve, por eso no salgo','连接词会改变因果方向，不只是装饰。'],[['“虽然下雨还是出去”：','Aunque llueve, salgo.',['Aunque llueve, salgo.','Llueve porque salgo.','Para que llueve salgo.'],'让步表达突破通常预期。'],['por eso 通常引出什么？','由前面导致的结果',['由前面导致的结果','前面事件的施事','时间起点'],'先分关系再选词。'],['aunque 后是否永远虚拟式？','不是，要看事实呈现与语境',['不是，要看事实呈现与语境','是，任何时候如此','从不虚拟式'],'连接词本身不足以决定所有语气。']]);
