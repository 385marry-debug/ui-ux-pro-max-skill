// Source-aligned grammar facts and newly authored examples; no textbook scans or passages.
const caminanteSourceParts=[];
function camiPart(chapter,rules,notes,examples,questions){caminanteSourceParts.push({id:'caminante-'+chapter,chapter,rules:rules.map(rule=>({rule})),notes,examples,questions})}
camiPart(1,[
 '名词先分语法性m./f.；-o通常m.、-a通常f.，例外如la moto/el sofá须连冠词记。',
 '教材列-e多为阳性但例外很多，如la torre/la nube/la nieve；-i常m.如el taxi/el safari。这些是入门倾向，不保证任意新词的性。',
 '物体的现实性质不能推断词的语法性；单数定冠词el/la与名词的性相应。',
 '句首首字母、专名按相应规范大写；普通名词通常小写，不能见到中文重要概念就大写。',
 '直接疑问、感叹须首尾成对¿…?/¡…!；问句只有一部分时按实际问句范围标。'
],['先查名词性→选el/la→再学习复数与形容词，三个步骤不要一起猜。','当作未知概念问“这是什么”可用中性esto；字典义项与具体指代先分清。'],[['El taxi está en la calle.','出租车在街上；taxi为m.，calle为f.，不是两件物体本身有男女。']],[rwInput('选择单数定冠词：___ nube（云，f.）.','la','nube为阴性；-e不能当阳性保证。'),rwInput('“出租车”这个名词常用m.还是f.？写缩写。','m.','taxi为阳性名词，连el taxi记。')]);
camiPart(2,[
 '规则复数元音尾常+s，辅音尾常+es；z→ces。特殊词尾与不变名词对照语法书第3章，不能把简表当全部。',
 '复数可能去重音alemán→alemanes，也可能补重音joven→jóvenes，按重读与书写规则核对。',
 '复数定冠词los/las与对象数、性配合；不可只改名词漏改冠词。',
 '指示形式este/esta/estos/estas，ese/esa/esos/esas，aquel/aquella/aquellos/aquellas按对象性数与相对位置选。',
 '混合男女群体通常用阳性复数；中性esto/eso/aquello指未命名概念、事件等，没有中性复数形式。',
 'de可表示来源、所属；普通de+el缩合del，de+él代词不缩合。'
],['距离依交际参照，不用固定米数划分；介绍身边人物通常este/esta。','encantado/encantada按说话人相应表达配合；don/doña常接名字，señor/señora常接姓。'],[['Estas son mis vecinas. Son de Lima.','这些是我的女邻居。她们来自利马。estas按人物阴性复数。']],[rwInput('joven（年轻人）的复数。','jóvenes','加-es后仍保持原来重读，需要重音符号。'),rwInput('通常缩合：de + el museo → ___ museo.','del','de与普通阳性单数冠词el形成del。')]);
camiPart(3,[
 '不定冠词un/una常引入或分类名词，与名词性配合；后续unos/unas及零冠词另学。',
 '主格代词yo/tú/él/ella/usted，nosotros/nosotras/vosotros/vosotras/ellos/ellas/ustedes按交际人物和数区分。',
 'usted/ustedes语义指受话人但配第三人称动词；美洲通常用ustedes承担复数受话人，不必限礼貌。',
 'ser现在时soy/eres/es/somos/sois/son，按句子主语配合，不按相邻名词随便变化。',
 '变位标示语气、时间及人物数；主语可由语境和变位恢复时常省代词，强调或消歧时保留。'
],['El/él、tu/tú、mi/mí的重音区别与功能分开记，不能在任何位置任选拼法。','描述来源可Soy de…，问¿De dónde eres?介词放疑问词前。'],[['Ustedes son estudiantes.','诸位是学生；ustedes配son，不配sois。']],[rwInput('用ser：Ustedes ___ estudiantes.','son','ustedes搭配第三人称复数son。'),rwChoice('“我是学生”语境已明时，Soy estudiante是否可以省yo？','可以',['可以','不可以，永远必须yo'],'西语变位及语境常能恢复主语。')]);
camiPart(4,[
 'estar现在时estoy/estás/está/estamos/estáis/están，特别核对重音。',
 'en可表位置，也可表示以某语言写/说，如un mensaje en español；de也能表话题，二者不能随意换。',
 '规则-ar现在时删-ar加o/as/a/amos/áis/an，-áis重音必须保留。',
 'hay存在句常引入尚未识别的对象；estar定位已识别对象，并按主语数变化。',
 'esta（指示词）与está（estar形式）区别由句中功能决定；省略名词的esta不是estar动词。'
],['位置可用está cerca/lejos、a dos kilómetros de…、a diez minutos andando等，距离量与时间量分别理解。','hay/estar常见冠词搭配是入门辨别线索，不能宣称任何语体下hay后绝无特定对象。'],[['La tienda está cerca. Hay una biblioteca al lado.','这家店很近。旁边有一家图书馆；先定位已识别店，再引入图书馆。']],[rwInput('这本书用西语写：un libro ___ español.','en','en标所用语言，不是所属。'),rwInput('Esta casa ___ cerca. 用estar。','está','第三人称单数está有重音。')]);
camiPart(5,[
 '报时一点用Es la una，其他小时常Son las…；按实际说出的小时配数，Es la una menos diez是12:50。',
 'y连接增加的分钟，media半小时、cuarto一刻；menos从下一个小时倒减，如Son las dos menos diez。',
 '具体发生时刻用a la una/a las…；¿Qué hora es?问钟点，¿A qué hora…?问发生时间。',
 'ir现在时voy/vas/va/vamos/vais/van；ir a+地点说去向，ir a+原形可计划或预测。',
 'a可表方向、时刻、位置距离及相关人物对象；普通a+el为al。',
 'querer/poder后接活动原形，愿望与能力分开；疑问qué/dónde/cuándo/cuánto/cómo及介词搭配分别练。'
],['不能按实际钟表小时机械定es/son：1:50说Son las dos menos diez；这是对教材过度简化的校正。','por la mañana一般时段，具体钟点后de la mañana；不以英语in/at逐词平移。'],[['La clase empieza a las dos menos cuarto.','课在1:45开始；说出的小时是两点，减一刻。']],[rwInput('用倒减法报1:50：___ las dos menos diez.','Son','谓语与说出的las dos配合，不能照钟面1点写Es。'),rwInput('去博物馆：Voy ___ museo.','al','a+el museo形成al museo。')]);
camiPart(6,[
 '形容词与所修饰名词配性数；-o/-a常变化，-e与部分辅音尾同形，但国籍及-or等不能全按辅音不变。',
 '复数形容词常按+s/+es并核对重音；先学名词性，再做整句一致。',
 'tener现在时tengo/tienes/tiene/tenemos/tenéis/tienen，不能统一改一个词干。',
 '规则-er现在时o/es/e/emos/éis/en，与-ir的nosotros/vosotros区别保留。',
 '前置物主mi(s)/tu(s)/su(s)/nuestro/a/os/as/vuestro/a/os/as按所属物配数或性数，不按拥有者人数选单复。',
 'muy/bastante/un poco可表达程度；un poco常与语境有偏差的性质相配，但不绝对禁止所有褒义形容词。'
],['定位短语encima/debajo/enfrente/al fondo/delante/detrás/al lado/a la derecha/a la izquierda/dentro/fuera接出参照物常de。','su可表示他、她、您及他们等拥有关系，需用语境或de Ana等消歧。'],[['Nuestras habitaciones son grandes.','我们的房间很大；nuestras配habitaciones阴性复数，与我们是男是女无关。']],[rwInput('我们的家（casa f.sg.）：___ casa.','nuestra','物主与所属物casa一致。'),rwInput('nosotros + beber现在时。','bebemos','-er本人人称词尾-emos。')]);
camiPart(7,[
 '指示限定词前置名词并配性数，本节通常不再在其前或其与名词间加冠词。',
 '独立指示与限定指示外形相同，中性esto/eso/aquello不能普通放在名词前作限定。',
 '重读物主mío/tuyo/suyo/nuestro/vuestro各有四种性数形，名词后置修饰、ser表语或省略名词的指代功能分别学。',
 '物主呼语如amiga mía不必冠词；su/suyo歧义须依人物语境处理。',
 '规则-ir现在时o/es/e/imos/ís/en；“词尾为-ir”本身不保证该词规则。',
 '及物用法有直接对象，不及物用法没有直接对象；同一动词能有两类用法，地点补语不等于直接对象。'
],['购物问单品价格¿Cuánto cuesta/vale?，按计量标价¿A cuánto está(n)…?，总价¿Cuánto es todo?。','重量常medio kilo/un cuarto de kilo/un kilo y medio；hacer la compra与ir de compras常见使用场景有差别。'],[['El trabajo empieza a las ocho. Empiezo el trabajo a las ocho.','第一句trabajo是主语；第二句是省略yo所做的直接对象。']],[rwInput('这些书是我的：Estos libros son ___.','míos','libros阳性复数，对应míos。'),rwInput('我们居住：nosotros + vivir现在时。','vivimos','-ir的nosotros为-imos。')]);
camiPart(8,[
 '现在时e→ie/o→ue族词干重读人称变化，nosotros/vosotros不双元音化；tener等混合型另记。',
 'ser+形容词描述分类特征，estar+形容词可呈现状态或相对变化；不等同永久/暂时。',
 '先辨主语、直接对象、间接对象，不把所有a+人都当间接对象，也不认为间接对象永远只能是人。',
 '直接对象代词me/te/lo/la/nos/os/los/las；普通变位前分写，相关原形后连写。',
 '前置话题对象常需代词复现；对比焦点等其他结构另辨，不写成所有前置情况无条件一样。',
 'gustar的喜欢内容是主语，体验者是间接对象：名词复数gustan、活动整体gusta；人物主语可Tú me gustas。',
 'parecer/quedar评价或穿着合适结构，动词与被评价物配数；形容词还配性数，bien/mal等副词不配。',
 'ir a+地点+a+原形可说去某地做事；ayudar a alguien a+原形/en+事项按搭配选。'
],['人a mí/me是体验者，los libros是主语，因此Me gustan los libros；不要按汉语“我喜欢”认me为主语。','tener que明确承担者，hay que非人称必要；具体礼貌程度取决于语境，不能一概说后一种永远更柔和。'],[['Me quedan grandes estos zapatos.','这双鞋我穿大了；quedan与zapatos配复数，grandes修饰鞋，不是修饰我。']],[rwInput('Me ___ grandes estos zapatos. 用quedar现在时。','quedan','zapatos是复数主语。'),rwInput('我喜欢你：Tú me ___. 用gustar现在时。','gustas','主语tú是第二人称，不是永远只有gusta/gustan。')]);
camiPart(9,[
 'e→i族在相应现在时重读人称变化，nosotros/vosotros保留e；decir另有yo digo。',
 '代词式原形常标-se，入句代词按me/te/se/nos/os/se及语义主体变化，动词仍按对应范式变位。',
 '代词式不全是字面“自己做自己”；dedicarse等须结合词义与配价解释。原形保留时也不是任意继续-se。',
 '间接对象代词me/te/le/nos/os/les，le/les不按对象性别变；前置话题的间接对象常代词复现。',
 '现在时可当前情况、跨说话时刻阶段的习惯或明确未来；不只有当前正在发生一种意义。',
 'antes de/después de接名词或原形；hasta标持续终点，no…hasta可表达直到某时才发生。',
 '上午下午晚上泛指时段常por，具体钟点后de；los+姓氏可指某一家，按具体语境学习。'
],['Quiero levantarme中原形未变位但代词对应我；必须同时核对动词范式与代词人物。','原形后连写或相关短语变位动词前分写：Quiero darte/Te quiero dar，不写Quiero te dar。'],[['Antes de salir, me ducho.','出门之前我洗澡；antes de后salir是原形，me按我配。']],[rwInput('我想起床：Quiero levantar___. 写附加代词。','me','原形的执行者是我，使用me。'),rwInput('给两位朋友：___ doy un regalo. 写间接对象代词。','les','两位朋友对应les，未接lo/la等时不因中文“给”改成se。')]);
camiPart(10,[
 '双对象代词间接在前、直接在后；le/les在lo/la/los/las前变se，并不因此丢失原来人物信息。',
 '相关短语两代词作为整体前置或后附，不拆开放在两个位置；附加后按整词标重音。',
 '自身身体部位常用反身/相关人物代词+定冠词：Me lavo las manos；这不是所有物主表达绝对禁止。',
 '肯定命令tú规则与现在直陈第三人称单数同形；usted/ustedes用对应现在虚拟形。',
 '八个特殊tú命令di/haz/ve/pon/sal/sé/ten/ven及尊称形分别学习，不能从tú随意换尾。',
 '肯定命令后附宾语和相关代词并连写；否定命令另学前置。',
 'de除来源、所属还可表话题和性质分类；专名所属de Ana不强加冠词，材料de lana等按具体名词组辨。',
 'saber+原形说技能，saber内容说知道；conocer人物/地方/领域说认识熟悉，人物对象a另核对。',
 'ir/irse、llevar/llevarse、dormir/dormirse有方向/离开、带去/带走、睡眠/入睡差别；irse也可带目的地。',
 'acabar de+原形可刚刚做完；quedar(se)按位置与留下的意义分开。'
],['问路¿Cómo llego a…?，指路gira/sigue/cruza等要按受话人改命令形式；方向本身不自动等于南北。','se既可能双宾语替代le，也可能词汇代词式，不能一律解释成自己。'],[['Voy a dárselo a Ana.','我要把它给安娜；se对应a Ana，lo对应给出的东西，整词dárselo写重音。']],[rwInput('voy a dar + me + lo 连成附加形式，写最后一个词。','dármelo','间接me在前直接lo在后，dármelo按整词重音写。'),rwInput('“我刚到”：Acabo ___ llegar.','de','acabar de+原形是本节结构。')]);
camiPart(11,[
 'nosotros肯定请求用相应现在虚拟形；vosotros基本肯定命令把原形-r换-d。',
 'nosotros+nos通常删词尾s，vosotros+os通常删d；levántate不套这两条，irse等特殊形另学。',
 '现在虚拟词干e/i/o变化与直陈分布不全同：pidamos/sintamos/durmamos；-car/-gar/-zar等保音拼写也核对。',
 '一般疑问可动词前置或主语前置；带疑问词的常规本节模式疑问成分在前，动词后接所需主语。',
 '名词组内性数向核心名词/代词一致；动词人称数向实际主语一致，混合角色与地区受话形式另辨。',
 'Los estudiantes estudiamos可把说话者包括在学生群体，形式第三人称名词组不意味着只能estudian。',
 'con表组成、拥有特征与伴随；con+mí/ti使用conmigo/contigo，反身consigo另查语法书。',
 'ser capaz de+原形说能力/敢于，capaz para+领域的本节搭配分清；dejar/permitir人物+原形表达让、允许。',
 'recomendar可原形建议，也可que+虚拟明确命题；traer带向参照中心，llevar带离或向另一目的地。'
],['Dejar el trabajo可能辞去工作，dejar el libro放下书；相同动词用法不只靠一个中文译义。','餐厅para mí…指点给自己的食物；de primero/de segundo/de postre区分顺序，普通原形建议不要乱加que。'],[['Sentémonos aquí. No nos sentemos allí.','我们坐这里吧；不要坐那里。肯定附nos删s、整词重音；否定分写不删s。']],[rwInput('levantemos + nos 肯定命令连写。','levantémonos','nosotros词尾s在附nos前删去，整词加所需重音。'),rwInput('“跟我”：用con与我组成一个词。','conmigo','不写con mí。')]);
camiPart(12,[
 '否定命令采用对应现在虚拟式，不是在肯定tú/vosotros命令前直接加no。',
 '宾语/相关代词在否定词后、变位动词前分写，两个对象仍间接在前、直接在后。',
 '现在虚拟特殊yo词干、双元音/闭元音族、保音拼写及ser/ir/ver等全范式分别练。',
 '内容从句陈述内容常que，间接特殊疑问直接用qué/dónde等，间接是非疑问si无重音。',
 'tener ganas de+原形说想做；valer la pena可名词或原形，注意主语是值得的事情而不是按体验者变位。',
 'invitar a alguien a+活动/原形；请喝某物的a有地区差别，不只按“正式才有a”的二分判断。',
 'quedar con+人物/a+时刻/en+地点分别提供约会角色；quedar cerca/lejos说位置。',
 'ocurrírsele a alguien以点子/主意为主语，代词依se+体验者排列；dar igual、venir bien/mal等按相应事件主语理解。'
],['No sé si viene不是si条件；No quiero que venga与Creo que viene也不只靠que决定语气。','提议¿Qué tal si…?、Me gustaría…与拒绝No me apetece…按人物与语体分别用。'],[['No se lo digas.','你别把那件事告诉他/她；no后se lo前置，digas为tú否定命令。']],[rwInput('你别说：No ___. 用decir。','digas','tú否定命令用现在虚拟式digas。'),rwInput('“不知道是否来”：No sé ___ viene.','si','间接是非疑问si不写重音，不是sí肯定。')]);
camiPart(13,[
 '开放条件si从句可先后放置；本节现在/未来条件用直陈现在，结果按请求/陈述等任务选择。',
 'hay存在非人称与省略yo的tengo不同；不能把未写主语代词的每句都叫无人称。',
 'se非人称普通用第三人称单数；其及物/不及物条件与有受事主语的se被动分开。',
 'tener que+原形明确必要承担者，hay que+原形不标人物；不同时间仍可tenía que/había que等。',
 'hacer falta按所需物主语配数，原形活动通常单数；体验者me/te/le/nos/os/les另占角色。',
 'faltar+时间量+para目标：Faltan dos días；faltar a+活动是缺席，不是同一补语结构。',
 'importar按重要的事物主语配数，体验者可间接对象；不能看到me就将动词改yo。',
 'lo que quieras等未限定选择及祝愿等虚拟式另建专题；不要把所有que后都当一种从句。'
],['电子邮件称谓常冒号结束，正文第一词大写；完整问候句用其本身标点。正式称谓、落款与人物称呼一致。','教材把间接对象常用人作入门情境；实际西语也可非人物间接对象。'],[['Nos hacen falta dos sillas.','我们需要两把椅子；sillas是复数主语，nos是需要它们的人。']],[rwInput('Nos ___ falta dos sillas. 用hacer现在时。','hacen','主语dos sillas复数，hacen；不是按nos写hacemos。'),rwInput('离明天的活动还剩一小时：___ una hora. 用faltar现在时。','falta','una hora是单数主语。')]);
camiPart(14,[
 '关系从句修饰先行名词/代词，que连接并在从句任成分，不像英语某些宾语关系词可任意省略。',
 'que在本节无性数变化，但从句动词仍与其实际主语配合；先辨que是主语还是对象。',
 '感叹可Qué+形容词/副词、Qué+形容词+名词、Qué+名词+más+形容词及带tener/estar的完整句。',
 'hace+时间+que+现在时可说持续到现在；否定可说多久没有某事，hace+时间+过去事件另表多久前。',
 'Gracias por+名词/原形给感谢原因；agradecer的人物与被感谢事情可分别用间接/直接对象代词。',
 'Que+现在虚拟式可祝愿，按受祝愿者选tengas/tenga/tengáis/tengan等，不是只有背固定一句。',
 'dejar de+原形表示停止；与dejar a alguien+原形让某人做事区分。'
],['关系que不重读，感叹/疑问qué有重音；同一字母序列需按功能读写。','¡Qué contenta estoy!按说话者配阴性；¡Qué bien!的bien副词不配性数。'],[['Hace tres meses que estudio aquí.','我在这里学了三个月了；hace表示流逝的时长，不按三个月改hacen。']],[rwInput('持续至今：___ tres meses que estudio aquí. 用hacer。','Hace','表示时间流逝的hacer在此非人称单数。'),rwInput('停止说话：dejar ___ hablar.','de','dejar de+原形表示停止该活动。')]);
camiPart(15,[
 'se被动用及物结构，受事作主语，动词第三人称随其单复数配合。',
 'se非人称无此受事主语，通常第三人称单数；Se buscan profesores与Se busca a los profesores的句法分析不同。',
 '相关情态短语中按受事主语变助动词：Se pueden comprar entradas；se可按允许结构附原形。',
 'donde可连接地点先行词，作从句地点成分；有合适地点名词先行词时可en el/la/los/las que替换，冠词配先行名词。',
 '关系词连接、回指并在从句中任成分；不能把que内容连词也一概说成同样回指。',
 'tener cuidado con+人物/事物说明小心对象；al+原形可说明何时。',
 'variar有及物改变对象、变换de+方面、随según+条件变化等搭配；varío/varías/varía/variamos/variáis/varían核对重音。',
 'de todo可泛指各类东西；祝福desear人物+名词与esperar que+虚拟式分别组织。'
],['Feliz Navidad但Felices fiestas；祝福词与后名词性数关系逐项理解。','reunirse的reúno/reúnes/reúne/reunimos/reunís/reúnen与variar一样提醒重音，不能只记一个词干。'],[['Se venden libros. Se respeta a los vecinos.','售书；人们尊重邻居。前者libros为受事主语配复数，后者a los vecinos为人物对象，动词单数。']],[rwInput('Se ___ comprar dos entradas. 用poder现在时，se被动。','pueden','dos entradas作复数受事主语，情态动词也复数。'),rwInput('城市la ciudad对应donde替换：en ___ que.','la','介词en后冠词与ciudad阴性单数一致。')]);
camiPart(16,[
 '简单过去规则-ar为é/aste/ó/amos/asteis/aron，-er/-ir为í/iste/ió/imos/isteis/ieron。',
 'ir/ser为fui族同形；ver为vi族，dar为di族；vi/vio/di/dio不加不需要的重音。',
 'estuv-/tuv-/quis-/hic-/vin-/sup-/pud-/pus-等不规则词干配特殊过去词尾，hacer第三人称hizo。',
 '简单过去可叙过去整体事件、事件链和生平；动作时长不决定时态，背景未完成时另比。',
 '第三人称复数可表达未明确施事，未知、不愿说或不相关均可能；并非出现llaman就必无人称。',
 'aprender a+原形学习技能；ir por+对象可去拿/取，部分地区也用ir a por。',
 'cuánto作副词强调量不变，接名词按cuánto/cuánta/cuántos/cuántas配合；qué+副词强调性质方式。'
],['刚写出完整过去形只是构形训练；再用给定时间和事件顺序完成叙事，不能凭“了”造过去时。','过去时tú不能类推加-s，hablaste不是hablastes。'],[['Ayer aprendí a nadar.','昨天我学会了游泳；aprender a+原形，叙述完整过去事件。']],[rwInput('ver简单过去yo。','vi','常用简单过去形vi，无重音符号。'),rwInput('学弹钢琴：aprender ___ tocar el piano.','a','技能原形由a连接。')]);
camiPart(17,[
 '过去不规则再加hub-/anduv-/dij-/traj-/-duj-族；j词干第三人称复数-eron，不写-ieron。',
 '规则过去yo保音：-car→qué、-gar→gué、-zar→cé、-guar→güé，其他人称不全一起改。',
 '相关-ir词第三人称e→i/o→u，元音相邻词第三人称i→y等分别辨人称，不能全范式统一改。',
 '星期和月份普通小写；日期常日de月de年，年按完整数读。',
 '问日期可¿Qué fecha es?/¿A cuántos estamos?等；普通完整日期作时间状语常el，月份/年份常en，证书等有a+日期格式。',
 'a. C./d. C.等用于前后纪年，识别缩写空格与句点。',
 '分词-ar→ado，-er/-ir→ido；abierto/cubierto/escrito/vuelto/dicho/puesto/roto/visto/muerto/hecho等另记，leído/traído/creído有重音。',
 '分词修饰名词、作伴随主语的补语或独立结构时按对应名词性数一致；完成haber后的分词不按此改。',
 'ser el primero/último…en+原形配人物性数；dirigirse a/hacia目标，consistir en构成，tener lugar表示举行/发生。',
 'al+原形表时间关系；despedirse de人物表示告别；¡Viva/Vivan…!按被祝颂主语数变化，别说虚拟式永远不能第三人称祝愿。'
],['表中的haber全人称形式并不意味着存在句可hubieron problemas；存在用途本课用hubo。','分词独立结构分词有自己的名词关联：Terminada la reunión…；不强迫与主句人物一致。'],[['Terminadas las clases, volvimos a casa.','课结束后我们回家了；terminadas配las clases，不是按我们变。']],[rwInput('terminar分词配阴性复数clases：___ las clases, salimos.','Terminadas','独立结构分词配自己的名词las clases。'),rwInput('averiguar简单过去yo。','averigüé','在-e前为保留u发音用ü，词尾é有重音。')]);
camiPart(18,[
 'cuando时间从句可前置/后置，连接时间状况；习惯和过去直陈、将来前瞻虚拟按专题继续辨。',
 '未完成时-ar为aba族，-er/-ir为ía族；ser/ir/ver为era/iba/veía族，完整人称与重音分别记。',
 '未完成时描述过去习惯、性质、当时情况、过程内部及今昔对照，不等于实际永未完成。',
 '副动词-ar→ando，-er/-ir→iendo；yendo/leyendo/oyendo/trayendo及friendo/riendo等特殊形另记。',
 '相关e→i/o→u副动词如diciendo/viniendo/sintiendo/durmiendo/muriendo/pudiendo，不能把现在时nosotros不变直接搬来。',
 '副动词后可附代词连写并核对重音；相关进行短语可代词前置于变位动词，如lo está leyendo/está leyéndolo。',
 'estar随时态变化+副动词展开活动过程；也有ir/llevar等搭配表示渐进/持续，补语选择单独辨。',
 'volver a+原形表再次；uno/una de los/las más+名词/形容词结构表示最……之一，内部性数关系分开。',
 'enseñar可教内容、教人物或出示对象；pasar可及物度过、不及物经过/发生，不能给整个词永久贴一个及物标签。',
 'quedar表示剩下时，剩余物作主语配数，相关人物作间接对象：Nos quedan tres días。'
],['原教材未完成表tú+escribir一格应为escribías，不能照漏写-s的表格复制。','llevar/ir+副动词、pasar+时间+副动词也要认识；学习现在进行不是把所有状态动词都加副动词。'],[['Nos quedan dos ejercicios.','我们还剩两道题；ejercicios主语复数，所以quedan，nos不是主语。']],[rwInput('escribir未完成时tú。','escribías','tú词尾-ías，不能漏s。'),rwInput('Nos ___ dos ejercicios. 用quedar现在时。','quedan','剩下的两道题是复数主语。')]);
function camiAdd(chapter,rules,notes=[]){const p=caminanteSourceParts.find(p=>p.chapter===chapter);p.rules.push(...rules.map(rule=>({rule})));p.notes.push(...notes)}
camiAdd(1,['语音与书写先区分a/e/o开元音、i/u闭元音；音节以元音为核心，两个开元音通常分节。','普通两元音之间单辅音并入后节，ch/ll等字母组合不按两个独立辅音随意拆；重读与书面重音符号不是同一概念。']);
camiAdd(2,['重音位置能区别词义和变位，如termino/terminó；不能把重音符号当可随手省掉的装饰。']);
camiAdd(5,['连读把词界的元音、辅音接续，但不改变书面词界；同元音可融合，异元音须保持可识别，节奏和语速依自然语流。','-mente副词可保留形容词的重读特性并有-mente重读；正字法仅保留原形容词本来有的重音符号。']);
camiAdd(6,['双元音、三元音按相应元音组合及重读条件识别；开元音两侧为非重读闭元音可三元音，重读闭元音可能分读。','二重/三重元音本节作同音节处理，重读闭元音与开元音相接如púa/tío/continúo则分音节。']);
camiAdd(10,['quedar可位置、状态/结果，quedarse突出留下/停留；quedarse con+物可收下、买下或据为己有，按情境选择。'],['Quedó sin terminar在本例说明没完成的结果，不因quedar后接sin就改成正在进行。']);
camiAdd(12,['quedar a+距离+de+地点给距离；quedar con+人物是约会，不是同一con结构的固定中文译义。']);
camiAdd(18,['pasar+时间+副动词可表示花该段时间进行活动；ir+副动词可渐进，llevar+时长+副动词可持续至参照点。'],['Pasé la tarde leyendo说明下午所做活动；Llevo dos horas estudiando强调已经持续两小时。']);

camiAdd(13,[],['Hace falta estudiar表示“需要学习”，一个活动整体配单数hace；Hacen falta dos mesas表示“需要两张桌子”，复数物品主语配hacen。先找所需物/事，再判断体验者。']);
