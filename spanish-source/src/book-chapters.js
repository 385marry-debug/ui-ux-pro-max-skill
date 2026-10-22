const bookChapters=[];
function bc(number,title,es,start,level,domain,points,examples,pitfall,checks){const id='book-'+number;const questions=checks.map(([prompt,answer,options,explain],i)=>({id:id+'-q'+i,level,cat:domain,prompt,answer,options,explain,speak:examples[0][0],bookChapter:number,kind:'choice'}));const entry={id,number,title,es,start,level,domain,points,examples,pitfall,questions};bookChapters.push(entry);for(const q of questions){questionBank.push(q);byId.set(q.id,q)}}
bc(1,'事物名词的语法性','Sustantivo. Género de las cosas',14,'A1','名词与限定词',[
'先区分语法性与现实性别：mesa 没有生物性别，但在语法中是阴性。词典中的 m./f. 是判断依据，应把冠词连同名词记住。',
'词尾提供倾向而非绝对结论。-o/-a 是起点；-aje 常为阳性，-ción/-sión/-dad/-tad 常为阴性，仍须核实例外及具体义项。-or 也有 flor 等反例。',
'遇到新词按“查语法性→选冠词→检查形容词”处理，不凭中文含义猜，也不因词尾不符合预期就把整个句子改错。'],[['El garaje está cerrado.','车库关着。garaje 为阳性。'],['La mano está limpia.','手是干净的。mano 仍为阴性。']],'词尾规则只能帮助预判，不能替代词典；el problema 与 la mano 是重要反例。',[
['车库：_____ garaje','el',['el','la','las'],'garaje 通常为阳性单数，使用 el。'],['La mano está _____.','limpia',['limpia','limpio','limpios'],'mano 是阴性单数，limpia 与之保持一致。']]);
bc(2,'人与动物的性别形式','Sustantivo. Género de personas y animales',17,'A1','名词与限定词',[
'先分四类：词尾变化如 panadero/panadera；特殊词尾如 actor/actriz；不同词如 caballo/yegua；同一词形配不同冠词如 el/la artista。不应把所有词都套 -o→-a。',
'有些动物名有固定语法性：la jirafa 可指雄性长颈鹿。要说明生物性别，可用 macho/hembra，但原名词的冠词和相关形容词仍按语法性处理。',
'完成分类后，把词放进完整人物或动物描述中，再检查冠词、形容词和代词的呼应。职业称谓的实际规范与地区用法可能继续发展，应核实。'],[['La actriz es conocida.','这位女演员很有名。'],['La jirafa macho es alta.','这只雄性长颈鹿很高；alta 仍与阴性 jirafa 一致。']],'macho 不会把 la jirafa 变成 el jirafa；同形人物名词与固定语法性的动物名不是同一回事。',[
['说明雄性长颈鹿：','la jirafa macho',['la jirafa macho','el jirafa macho','el jirafo'],'jirafa 保持阴性，macho 只说明实际性别。'],['actor 的常用女性形式是：','actriz',['actriz','actora siempre','actrice'],'actor/actriz 属需要单独学习的特殊变化。']]);
bc(3,'名词的数与复数细则','Sustantivo. Número',20,'A1','名词与限定词',[
'先找单数词尾和重音：一般元音后加 -s、许多辅音后加 -es，z 常变 c。复数可能引起书面重音调整，不能只在单数末尾机械添字母。',
'部分重读 í/ú 结尾词有 -s/-es 两种复数，如 tabús/tabúes。非重读元音+s 结尾的许多词单复数同形，如 el/los paraguas、la/las crisis。',
'-y 结尾需考虑词源及规范用法：rey→reyes，jersey→jerséis。还要区分语法单数的集合词 la gente 与常见复数的 las gafas。'],[['Los paraguas están aquí.','雨伞在这里。paraguas 词形未变，但冠词与动词为复数。'],['La gente está esperando.','人们在等候。gente 为语法单数。']],'人数多不等于名词语法复数；不变词形也不等于句子其他成分不变。',[
['rey 的复数是：','reyes',['reyes','reys','reyces'],'本族词 rey 的常用复数为 reyes。'],['La gente _____ esperando.','está',['está','están','estamos'],'集合名词 gente 在此按语法单数一致。']]);
bc(4,'形容词的一致与位置','Adjetivo',23,'A1','形容词与程度',[
'先定位被修饰的名词，再决定形容词性数。-o 形容词常按性变化，-e 等很多形式不按性变化，但仍有单复数。',
'后置常用于分类或区分：una camisa azul。前置可体现评价或改变意义；un viejo amigo 与 un amigo viejo 不能只当作同一种词序。',
'某些前置形容词缩合：un buen libro、una gran idea。学会普通一致后，再用对比例句观察意义和位置。'],[['Un viejo amigo me llamó.','一位相识已久的朋友给我打电话。'],['Mi amigo es viejo.','我的朋友年纪大。']],'不是所有形容词前置都更高级；位置改变可能改变意思。',[
['una _____ idea（grande，名词前）','gran',['gran','grana','grande siempre'],'grande 在此单数名词前常缩合为 gran。'],['相识多年的朋友常表达为：','un viejo amigo',['un viejo amigo','un amigo viejos','una viejo amiga'],'此处 viejo 前置强调相识时间。']]);
bc(5,'冠词：引入、识别与零冠词','Artículos: un, el, Ø',30,'A1','名词与限定词',[
'选择冠词先问听者能否识别对象。引入一个未指定对象常用 un/una，已经识别或可由情境定位时常用 el/la。第一次提到也可能是已知对象。',
'零冠词有自己的结构与意义，如 Soy profesora、Necesito agua。不能按中文有没有“一个”决定，也不能把所有名词强行加冠词。',
'泛指类别和已知类别常用定冠词；冠词还可与省略的名词配合，如 el de la izquierda。需要依上下文还原指代。'],[['Hay una carta. La carta es para ti.','有一封信。这封信给你。'],['Busco trabajo.','我在找工作；不是指定的某份工作。']],'“首次出现用 un，再次出现用 el”只是常见叙事模式，不是全部用法。',[
['仅介绍职业：','Soy profesora.',['Soy profesora.','Soy una la profesora.','Estoy profesora.'],'仅说明职业身份常不用不定冠词。'],['Hay un libro. _____ libro es rojo.','El',['El','Una','Unos'],'第二句定位刚引入的那本书，使用 el。']]);
bc(6,'指示词与空间、时间、话语','Demostrativos',37,'A1','名词与限定词',[
'este/ese/aquel 系列与名词性数一致，可帮助定位说话者、听者及更远处的对象；实际选择也受话语距离与情境影响。',
'esto/eso/aquello 是中性形式，可指未命名的东西或一段话，不直接限定具体名词：esto，但 este libro。',
'指示词也能指时间：este mes、aquel verano。旧教材中的指示词重音写法需与现行规范核对，本站基础主线使用通常不加重音的形式。'],[['Este libro es mío. ¿Qué es eso?','这本书是我的。那是什么？'],['Aquel verano viajamos mucho.','那年夏天我们经常旅行。']],'不要写 esto libro；也不要把指示词只理解为物理距离。',[
['“这些房子”：','estas casas',['estas casas','esto casas','este casas'],'与阴性复数 casas 一致。'],['指未命名事物时可说：','¿Qué es eso?',['¿Qué es eso?','¿Qué es ese cosa?','¿Qué es estas?'],'中性 eso 不需要后接具体名词。']]);
bc(7,'物主词与身体、衣物表达','Posesivos',43,'A1','名词与限定词',[
'mi/tu/su 等在名词前，随被拥有物的数变化；nuestro 等还随被拥有物的性变化。拥有者的性别不决定物主词形式。',
'mío/tuyo/suyo 等可后置或代替已知名词：un amigo mío、la mía。后置的“我的一个朋友”与 mi amigo 在识别范围上不同。',
'身体和衣物在拥有关系明确时常用定冠词，配合反身或受影响者代词：Me lavo las manos。不能把英语式所有格机械套用到所有情况。'],[['Me lavo las manos.','我洗手。me 已指明与我相关，常用 las manos。'],['Es una amiga mía.','她是我的一位女性朋友。']],'su 的拥有者可能不明确；需要时用 de Ana 等澄清。',[
['普通自我洗手表达：','Me lavo las manos.',['Me lavo las manos.','Me lavo mis manos siempre obligatorio.','Yo lavo se manos.'],'拥有关系明确的身体部位常使用定冠词。'],['这些书是我的：Estos libros son _____.','míos',['míos','mía','mi'],'míos 与阳性复数 libros 一致。']]);
bc(8,'不定词、未知对象与否定','Indefinidos',50,'A2','副词与否定',[
'algún/alguna 等限定名词；alguien、algo、nadie、nada 等可独立作代词。人、物及有无明示名词需要分开判断。',
'后置 nadie/nada 等通常与前置 no 呼应；前置则一般不再加 no：Nadie vino / No vino nadie。',
'otro 常直接限定名词：otro libro，不按英语 another 机械加 un。todo、cada、alguno 的范围不同，要比较具体语境。'],[['No veo a nadie. Nadie me ve.','我看不到任何人。没有人看到我。'],['Quiero otro libro.','我想要另一本书。']],'否定呼应不是“负负得正”，不要删除必要的 no。',[
['“我什么都不知道”：','No sé nada.',['No sé nada.','Sé nada.','No sé alguien.'],'后置 nada 通常需要前置 no。'],['“另一本书”的普通表达：','otro libro',['otro libro','un otro libro siempre','otra libro'],'otro 直接限定阳性单数 libro。']]);
bc(9,'基数词与大数读法','Numerales cardinales',56,'A1','数量与时间',[
'数字需要分组学习：个位与十几、十位组合、百位、千、百万。dieciséis、veintidós 等有特定拼写和重音。',
'uno 在名词前有 un/una 及复合形式的对应；百位词在适用环境与名词保持性：doscientas personas。cien 与 ciento 的用法不同。',
'mil 通常不因数目而加 s 表具体千位；millón 是名词，un millón de personas。读数字还要留意地区对小数和分隔符的习惯。'],[['Doscientas personas y veintiún libros.','两百人和二十一本书。'],['Un millón de habitantes.','一百万居民。']],'不能把所有数字当作完全不变的形容词，也不要把 cien 用于所有一百开头的数。',[
['_____ personas（二百）','doscientas',['doscientas','doscientos','dosciento'],'数词百位形式在此与阴性 personas 一致。'],['一百零三：','ciento tres',['ciento tres','cien tres','cientos tres'],'一百后接其他数词时通常使用 ciento。']]);
bc(10,'序数词与缩合','Numerales ordinales',61,'A2','数量与时间',[
'序数表示顺序而非数量：primero、segundo、tercero 等，要与被修饰的名词保持性数一致。',
'primero/tercero 在阳性单数名词前常缩合为 primer/tercer：el primer día；阴性形式仍是 primera/tercera。',
'较大顺序常用基数替代，具体取决于日期、章节、楼层等语境与使用习惯，不应强迫一切编号都用复杂序数词。'],[['El primer día y la primera clase.','第一天和第一节课。'],['Vivo en el tercer piso.','我住在三楼。']],'primer 不是阴阳性通用的不变形式：la primera vez。',[
['el _____ día（第一）','primer',['primer','primero','primera'],'primero 在阳性单数名词前缩合为 primer。'],['la _____ vez（第三）','tercera',['tercera','tercer','tercero'],'阴性单数 vez 使用 tercera。']]);
bc(11,'数量、程度与 poco/un poco','Cuantificadores',64,'A2','形容词与程度',[
'先判断修饰对象：名词、形容词、副词还是动词。muchas preguntas、muy interesante、trabaja mucho 是不同结构。',
'可数性取决于名词义项与语境：agua 可按物质量谈，un café 可指一份饮品。un poco de agua 表有少量，poca agua 常强调量不足。',
'demasiado、bastante 等作名词限定词时与相关规则一致；作副词时通常不按主语性数变化。不要把所有程度表达统一套一种词尾。'],[['Hay un poco de agua, pero queda poca leche.','有一点水，但剩下的牛奶很少。'],['Ellas trabajan mucho.','她们工作很多；mucho 是副词。']],'un poco de 不是任何名词前都能随意使用的数量前缀。',[
['Tengo _____ preguntas.','muchas',['muchas','muy','mucho'],'限定阴性复数名词 preguntas，使用 muchas。'],['表达“有一点水”：','Hay un poco de agua.',['Hay un poco de agua.','Hay muy agua.','Hay unos agua.'],'un poco de 可表达不可数义下的少量。']]);
bc(12,'代词与句子角色','Pronombres personales. Introducción',68,'A2','人称与句法',[
'先分析句子角色，而不是先背中文“我你他”。Ana da un libro a Luis 中 Ana 是主语，un libro 是直接对象，a Luis 是接收者。',
'同一个人物可以在不同句子里承担不同角色，因此对应代词不同。人称代词还有主语、介词后形式及非重读宾语形式。',
'反身、相互与体验结构进一步改变角色组织。每次用代词前，先写完整句并画出它替代谁。'],[['Ella me da un libro.','她给我一本书：ella 是主语，me 是接收者。'],['Me gustan los idiomas.','我喜欢语言：不要把 me 当成要求 gusto 的主语。']],'代词表里的同一人称，不表示各种形式可互换。',[
['Yo da un libro a Ana 中应把 da 改为：','doy',['doy','das','dan'],'主语 yo 需要第一人称 doy。'],['Doy un libro a Ana 中，接收者是：','Ana',['Ana','un libro','yo siempre'],'a Ana 表明接收者。']]);
bc(13,'主语代词的出现与省略','Pronombres sujeto',71,'A1','人称与句法',[
'主语代词与动词保持人称和数的一致。usted/ustedes 是对听者的称呼，却使用第三人称变位。',
'动词和语境能说明主语时通常可以省略。明确说出主语常用于对比、强调或澄清，而不是每句必须写 yo。',
'第三人称单数等形式可能有多个解释；在信息不清楚时补出人名比坚持省略更有效。'],[['Trabajo aquí. Ella trabaja allí.','我在这工作。她在那工作。'],['Yo prefiero té; él prefiere café.','我更喜欢茶，他更喜欢咖啡；代词突出对比。']],'省略的是可推知的主语，不是把动词变回原形。',[
['Usted _____ aquí.（vivir）','vive',['vive','vives','vivo'],'usted 配第三人称单数 vive。'],['“我住这里”可省主语为：','Vivo aquí.',['Vivo aquí.','Vivir aquí.','Vive yo.'],'变位 vivo 已提供第一人称信息。']]);
bc(14,'介词后的人称代词','Pronombres con preposición',73,'A2','代词与宾语',[
'介词后常用 mí、ti、él、ella、nosotros 等形式，而不是把主语和非重读宾语形式随意代入。',
'con + mí/ti 有 conmigo/contigo 等融合形式；entre tú y yo 等结构是需单独掌握的例子。',
'区分 mí/mi、tú/tu 的功能与重音；ti 不加重音。选择形式后，再确认介词表达的关系是否正确。'],[['Este regalo es para ti.','这份礼物给你。'],['¿Quieres venir conmigo?','你想和我一起来吗？']],'con mí 不是普通规范主线中的标准表达，应使用 conmigo。',[
['“和我一起”：','conmigo',['conmigo','con yo','con me'],'con 与 mí 在此使用融合形式 conmigo。'],['para 后表示“你”用：','ti',['ti','tú','te'],'介词后形式为 ti。']]);
bc(15,'直接与间接宾语代词','Pronombres complemento',75,'A2','代词与宾语',[
'直接宾语常用 lo/la/los/las 替代；间接宾语用 le/les 等。me/te/nos/os 也可承担不同宾语角色。先理解动词结构再选形式。',
'lo 还有中性用法，可概括一段内容或性质，不一定只指阳性单数实体。Es fácil, pero no lo parece 中需要按结构理解。',
'地区中存在 leísmo 等，部分指男性单数人物的用法受规范接受。本站基础练习先稳定常用对应，再认识变体。'],[['Veo la carta. La veo.','我看到信。我看到它。'],['Le doy una carta a Ana.','我给安娜一封信。']],'看到人物并不自动用 le；要先判断是直接还是间接宾语。',[
['Veo las cartas. → _____ veo.','Las',['Las','Les siempre','Lo'],'阴性复数直接宾语用 las。'],['A Ana _____ envío un mensaje.','le',['le','la','lo'],'Ana 是消息接收者，使用间接宾语 le。']]);
bc(16,'代词顺序、组合与位置','Posición y combinación de pronombres',79,'A2','代词与宾语',[
'两个宾语代词组合时常先间接后直接：me lo。第三人称 le/les 在 lo/la/los/las 前变为 se。',
'一般在变位动词前；可接原形、副动词和肯定命令之后。连写后常需要重音符号；否定命令仍前置。',
'某些动词链允许两种位置，如 Te lo voy a dar / Voy a dártelo；不要把这一移动规律推广到所有从句与动词链。'],[['Se lo doy.','我把它给他/她/您；se 替代 le/les。'],['Dímelo. No me lo digas.','告诉我。别告诉我。']],'代词不能随意插在 quiero 与 ver 中间；le lo 的组合需调整。',[
['Le doy el libro. → _____ lo doy.','Se',['Se','Le','La'],'le 在 lo 前变成 se。'],['否定指令“别买它”：','No lo compres.',['No lo compres.','No cómpralo.','Lo no compras.'],'否定命令代词前置。']]);
bc(17,'代词复现与强调','Presencia y reduplicación de pronombres',84,'B1','代词与宾语',[
'句中出现完整名词并不总意味着代词多余。间接宾语常与 le/les 同现以明确或强调，如 Le di el libro a Marta。',
'宾语前置等环境常需要代词复现：A Marta la vi ayer。完整重读代词 a mí/a ti 等与非重读形式的组合也有自身规则。',
'复现不是任意重复；应先判断直接/间接宾语、位置和语境。初学时用规范样例比较，不把“删重复词”当作通用改错法。'],[['A Marta la vi ayer.','玛尔塔，我昨天见过她。'],['Me llamó a mí, no a ti.','他/她打给的是我，不是你。']],'a mí 的出现并不让 me 自动多余。',[
['A Marta _____ vi ayer.','la',['la','le siempre','se'],'前置的此处直接宾语常用 la 复现。'],['强调“给我打电话”：_____ llamó a mí.','Me',['Me','Yo','Mi'],'非重读宾语形式 me 与 a mí 可组合强调。']]);
bc(18,'反身、相互与体验结构','Construcciones reflexivas y valorativas',87,'A2','日常动词结构',[
'me lavo 可表示自己洗；me lavo las manos 中 manos 是被洗的部位，me 表与主语相关的受影响者。身体部位常用定冠词。',
'复数主语的 nos/se 可表达相互，但也可能是反身或代词式动词的一部分，需要上下文。Nos conocemos 通常表示我们相识。',
'gustar、dar miedo、parecer bien 等体验或评价结构有不同语法主语与体验者。不能照搬中文“我喜欢”把 me 当主语。'],[['Me lavo los dientes.','我刷牙。'],['Nos conocemos y nos ayudamos.','我们相识并互相帮助。']],'同一个 se 可以承担多种功能，不要统一译作自己。',[
['Me _____ los pies.（doler）','duelen',['duelen','duele','duelo'],'los pies 为复数，决定 duelen。'],['Nos ayudamos 在明确相互语境中意为：','我们互相帮助',['我们互相帮助','我帮助他们','只有自己一个人'],'复数代词可在语境中表达相互。']]);
bc(19,'原形、变位与主谓一致','Conjugación. Elementos básicos',94,'A1','动词现在时',[
'动词原形是词典形式，如 hablar。完整句中的主要动词通常需要按人称、数、时间和语气变位，不能把原形直接当陈述句谓语。',
'确定主语后分出词干和结尾。规则动词按类别变词尾，不规则需要识别变化族，而不是每个动词各背一张孤立表。',
'主语可省但一致关系不省。先用短句验证，再加入更多宾语和时间信息，避免一次负担过重。'],[['Yo estudio. Ana estudia.','我学习。安娜学习。'],['Nosotros vivimos aquí.','我们住这里。']],'词典里查到 hablar，不等于所有人称都使用 hablar。',[
['Yo _____ español.（estudiar）','estudio',['estudio','estudia','estudiar'],'yo 对应 estudio。'],['Nosotros _____ aquí.（vivir）','vivimos',['vivimos','vivemos','viven'],'-ir 规则动词 nosotros 用 -imos。']]);
bc(20,'原形、副动词与分词','Formas no personales',97,'A2','非限定形式',[
'原形可作活动名、介词补语或动词结构组成：Leer ayuda、antes de salir。不同主体时可能需要变位从句。',
'副动词用于进行、伴随等结构：Estoy leyendo、Entró sonriendo。不能把所有后发生的独立事件都堆成副动词。',
'分词可进入 haber 复合时态、ser 被动或形容词/结果结构。haber 后分词不随主语一致；形容词、被动等环境则需检查一致。'],[['Ellas han escrito. Las cartas están escritas.','她们写过了。信已经写好了。'],['Antes de salir, reviso la puerta.','出门前我检查门。']],'leído 与 leyendo 不可互换；不是看见“正在”以外的中文就随意选分词。',[
['Estoy _____.（leer）','leyendo',['leyendo','leído','leer'],'进行结构用副动词 leyendo。'],['Ellas han _____ la carta.','escrito',['escrito','escritas','escribiendo'],'haber 后分词在此不按 ellas 变阴性复数。']]);
bc(21,'现在时形式族与用法','Presente de indicativo',104,'A1','动词现在时',[
'先掌握规则 -ar/-er/-ir，再分词干元音变化、第一人称不规则、多重变化和完全不规则，按家族归纳并保留例外。',
'quiero/queremos、pido/pedimos 等有不同人称分布；tener、venir、decir 等不只是统一改一个词尾。',
'现在时可描述当前、习惯、普遍判断或已安排的未来：Mañana salgo temprano。含义由形式与时间语境共同决定。'],[['Hoy trabajo aquí. Mañana viajo.','我今天在这里工作。明天出行。'],['Quiero aprender y queremos practicar.','我想学习，我们想练习。']],'现在时并不只表示说话这一秒正在做。',[
['Nosotros _____ aprender.（querer）','queremos',['queremos','quieremos','quieren'],'querer 在此 nosotros 不按 quiero 的词干变化。'],['Mañana viajo 的现在时可以表示：','已安排的未来行程',['已安排的未来行程','只能是过去','一定是句子错误'],'时间词与语境可让现在时描述未来安排。']]);
bc(22,'现在完成时与参照框架','Pretérito perfecto de indicativo',111,'A2','过去时间系统',[
'用 haber 现在时与分词构成：he hablado、hemos visto。先把助动词的人称和不规则分词写对，再讨论语义选择。',
'该形式常将先前事件放在与现在有关的框架中。书中也讨论未来参照的特殊用法，应结合上下文，不机械按中文“已经”套用。',
'不同地区对现在完成时与简单过去时的分工不同；以目标地区材料为主线，认识其他规范用法。'],[['Esta semana he leído dos cuentos.','本周我读了两个故事。'],['Ya hemos terminado.','我们已经完成了。']],'看到 hoy 不代表所有地区都只能用现在完成时。',[
['Nosotros _____ terminado.','hemos',['hemos','han','habéis'],'助动词与 nosotros 一致。'],['hacer 的过去分词是：','hecho',['hecho','hacido','hiciendo'],'hecho 是常见不规则分词。']]);
bc(23,'简单过去时与不规则族','Pretérito indefinido',115,'A2','过去时间系统',[
'把事件作为过去有边界的整体叙述时，常使用简单过去时。边界由叙述视角决定，不等于所有短动作才用它。',
'规则 -ar 与 -er/-ir 的词尾不同；tuve、dije、puse 等词干不规则，以及 pidió、durmió 等第三人称变化要分别整理。',
'ir 与 ser 的该时态形式相同，需靠上下文理解。练习应同时检查形式与故事先后关系，不能只按时间副词猜。'],[['Ayer fui al mercado y compré fruta.','昨天我去了市场并买了水果。'],['Ella pidió ayuda.','她请求了帮助。']],'hacer 的第三人称简单过去时是 hizo，不是 hico。',[
['Ayer ella _____ ayuda.（pedir）','pidió',['pidió','pedió','pide'],'pedir 第三人称简单过去时有 e→i 变化。'],['Ayer él _____ la tarea.（hacer）','hizo',['hizo','hico','hacó'],'不规则词干及拼写形成 hizo。']]);
bc(24,'现在完成时与简单过去时对比','¿Perfecto o indefinido?',119,'A2','过去时间系统',[
'先确定事件属于当前相关框架还是叙述上已结束的框架，再考虑地区分工。不要仅看一句中文含不含“了”。',
'este año、el año pasado 等可帮助定位，但 nunca、ya、hoy 等并不能脱离语境决定唯一形式。',
'对同一事实换表达可能改变叙述连接，而不是事实真伪。比较真实段落，比孤立找“关键词”更能建立选择能力。'],[['Este mes he leído mucho. El mes pasado leí poco.','这个月我读得多。上个月我读得少。'],['Ya terminé. / Ya he terminado.','两种表达在不同地区和情境中可自然使用。']],'不应把一种地区习惯判为所有西语使用者必须遵循的唯一规则。',[
['这两个时态的选择还受什么影响？','时间视角与地区习惯',['时间视角与地区习惯','只由动词长短决定','只由主语性别决定'],'时态选择与参照框架和地区分布有关。'],['明确完成于去年：El año pasado _____ a Chile.（ir，yo）','fui',['fui','voy','iré'],'这里叙述已结束时间段中的完成事件。']]);
bc(25,'过去未完成时：背景与习惯','Pretérito imperfecto',123,'A2','过去时间系统',[
'未完成时常从过去场景内部观察情况，描述性质、持续背景、习惯或某时正在进行的状态；并非简单表示“没有做完”。',
'-ar 为 hablaba，-er/-ir 为 comía/vivía；ser、ir、ver 的高频形式为 era、iba、veía。',
'叙事中可以用未完成时布景，再用其他过去时推进事件。同一动作很长或很短都不自动决定时态。'],[['De niño iba al parque cada tarde.','小时候我每天下午去公园。'],['A las ocho dormía.','八点时我在睡觉。']],'很长的一段经历也可被作为整体用简单过去时叙述。',[
['De niña, _____ cerca del mar.（vivir，yo，背景）','vivía',['vivía','vivo','viviré'],'描述过去背景使用 vivía。'],['ir 的未完成时 yo 形式：','iba',['iba','fui','iría'],'iba 是高频不规则形式。']]);
bc(26,'三个过去时如何组织故事','¿Imperfecto, indefinido o perfecto?',128,'A2','过去时间系统',[
'把故事分成背景、完成事件、与现在的连接。时态选择呈现不同观察方式，不是把每个动词固定分成某一类。',
'未完成时可以显示一个过程内部；简单过去时把过程作为整体。Estudié diez años 也可概括十年的有边界经历。',
'先画事件顺序，再看叙述从哪个时间点观察。不要以“长动作/短动作”的口诀替代实际理解。'],[['Leía cuando sonó el teléfono.','电话响时，我在阅读。'],['Estudié allí durante tres años.','我在那里学了三年；把三年作为整体叙述。']],'未完成时不一定说事件现实中未结束；这里只是没有把终点作为焦点。',[
['背景阅读、电话作为事件：_____ cuando sonó el teléfono.','Leía',['Leía','Leeré','Leo mañana'],'阅读作为背景使用未完成时。'],['“长达十年”一定要用未完成时吗？','不，仍需看叙述视角',['不，仍需看叙述视角','是，时长决定一切','只有将来时可用'],'时长不等于观察视角。']]);
bc(27,'过去的过去','Pluscuamperfecto de indicativo',136,'B1','过去时间系统',[
'había + 分词将事件放在另一个过去参照点之前。先找“到那时”这个参照点，而不是把所有中文“已经”都译成过去完成。',
'助动词按人称变化，分词在 haber 后不随主语性数变化。可通过 ya、todavía no 等突出相对完成情况。',
'在故事中，把主要事件与更早原因连接起来：到站时车已开，或当时发现此前忘了某事。'],[['Cuando llegué, el tren ya había salido.','我到时火车已经出发。'],['No sabía que habías llamado.','我当时不知道你已经打过电话。']],'判断的是相对过去，不是单纯把动作时间说得更遥远。',[
['Cuando llegué, ella ya _____ salido.','había',['había','ha','habrá'],'相对过去到达点之前完成。'],['Ellas habían _____ la carta.','escrito',['escrito','escritas','escribiendo'],'haber 后分词不随 ellas 变化。']]);
bc(28,'将来时：未来与现在推测','Futuro',139,'A2','未来与假设',[
'常用原形加 é/ás/á/emos/éis/án；dir-/tendr-/querr- 等不规则词干要分类记。',
'将来时可预测未来，也可在适当情境推测现在：Estará en casa。不能只按名称理解为将来发生。',
'区分计划、安排、预测与猜测；现在时、ir a 结构和简单将来时的语用并不完全相同。'],[['Mañana tendré tiempo.','明天我会有时间。'],['No contesta; estará ocupado.','他没接，大概正忙。']],'tendré 不来自直接给 tener 原形加词尾。',[
['tener 的 yo 将来时：','tendré',['tendré','teneré','tenré'],'不规则词干 tendr-。'],['No está aquí; estará en casa 可表达：','对现在位置的推测',['对现在位置的推测','一定描述明年','不可能的错误句'],'将来时可有对现在的推测用法。']]);
bc(29,'将来完成时','Futuro perfecto',144,'B2','复合时态与时间关系',[
'habrá/habré 等 + 分词可表示未来参照点前完成的情况；也可按语境推测现在之前的情况。',
'先确定参照点：Para el viernes habré terminado，不只是“我将要做”。',
'与条件完成和过去完成比较，画清参照时间和说话者是否在预测、推测或假设。'],[['Para mañana habré terminado el informe.','到明天我就会完成报告。'],['Habrá dormido poco.','他/她可能没睡多少；对先前情况作推测。']],'形式名为将来完成，不代表每次都在陈述未来事件。',[
['Para mañana yo _____ terminado.','habré',['habré','había','haya'],'未来截止点前完成使用此处的 habré terminado。'],['Habrá dormido poco 在适当语境可表达：','对先前睡眠的推测',['对先前睡眠的推测','一律是命令','永远只指后天'],'用法需要结合语境与参照点。']]);
bc(30,'条件式：假设、推测与委婉','Condicional',146,'B1','未来与假设',[
'简单条件式词尾通常为 ía/ías/ía/íamos/íais/ían，与将来时共享多种不规则词干。',
'可以呈现假设情形下的结果，也可从过去视角推测或表示将来，并可在请求中增加委婉距离。',
'不要把所有中文“会”都写成条件式，也不要把它只当礼貌用法；先说明所依赖的条件和时间参照。'],[['Con más tiempo, viajaría.','若有更多时间，我会旅行。'],['¿Podría enviarme el horario?','您能给我发课表吗？']],'si tendría 不是本课普通假设条件句的规范主线，应比较 si tuviera…viajaría。',[
['poder 的 yo/usted 条件式：','podría',['podría','podería','podrá'],'不规则词干 podr- 加条件式词尾。'],['Si tuviera tiempo, _____.（viajar，yo）','viajaría',['viajaría','viajé','viajo ayer'],'假设条件的结果使用条件式。']]);
bc(31,'条件完成式与过去假设','Condicional compuesto',149,'B2','复合时态与时间关系',[
'habría + 分词可将结果放在未实现的过去假设中，也可用于过去参照下更早情况的推测等。',
'与 simple conditional 区别时间关系：viajaría 是假设出行，habría viajado 通常把出行视为在相应参照前已完成。',
'配合条件从句时，普通过去反事实是 Si hubiera…habría…；实际语言中还存在其他规范结果形式，需结合上下文。'],[['Con una invitación, habría asistido.','若有邀请，我本来会出席。'],['Si lo hubiera sabido, habría llamado.','如果当时知道，我本来会打电话。']],'不要把 habría 与 habré 混同为“会”的两个任意写法。',[
['Si hubiera sabido, _____ llamado.','habría',['habría','habré','he'],'过去假设结果用条件完成式。'],['条件完成式的基本构成：','habría 等 + 分词',['habría 等 + 分词','habría 等 + 副动词','ser + 原形'],'haber 条件式与分词构成条件完成式。']]);
bc(32,'虚拟式形式系统','Formas de subjuntivo',151,'B1','虚拟式与语气',[
'先分时间形式，再学变化族：现在虚拟式、过去未完成虚拟式、现在完成虚拟式、过去完成虚拟式。它们不是四个可任意替换的希望表达。',
'规则词尾与词干变化、不规则词干要结合；过去未完成形式常可从简单过去第三人称复数推导，并有 -ra/-se 两套。',
'复合形式用 haya/hubiera 等 + 分词，分词在 haber 后不变。先做到按提示写对，再用下一章学习语境选择。'],[['Espero que vengas. Me alegra que hayas venido.','希望你来。你来了我很高兴。'],['Quería que vinieras.','我当时希望你来。']],'会背形式不等于会判断虚拟式；要把形态与使用分别检查。',[
['tener 的过去未完成虚拟式之一：','tuviera',['tuviera','tendría','tenía'],'tuvieron 去 -ron 后形成 tuviera 等。'],['Me alegra que tú _____ venido.','hayas',['hayas','has','habías'],'评价已发生情况时此处使用现在完成虚拟式。']]);
bc(33,'直陈式与虚拟式的选择','¿Indicativo o subjuntivo?',157,'B1','虚拟式与语气',[
'先辨认话语任务：是在断言信息，还是表达愿望、影响、评价、怀疑、目的或未定对象特征？不能用“真实/虚假”取代分析。',
'同一事实可在不同结构下用不同语气：Sé que está aquí / Me alegra que esté aquí。虚拟式完全可能涉及已知事实。',
'还需检查主体、连接结构和相对时间。同主体愿望常接原形，不同主体常 que+虚拟式；时间从句和关系从句要按各自结构判断。'],[['Quiero estudiar. Quiero que estudies.','我想学习。我希望你学习。'],['Sé que viene. Dudo que venga.','我知道他/她会来。我怀疑他/她是否会来。']],'que 不是虚拟式开关；同样不能把“确定就直陈”当万能口诀。',[
['Espero que tú _____.（venir）','vengas',['vengas','vienes','venir'],'表达对他人行动的希望，使用虚拟式。'],['Me alegra que esté aquí 一定表示不真实吗？','不是，可能是在评价事实',['不是，可能是在评价事实','是，虚拟式都是假的','是，说明没有来'],'语气涉及信息如何呈现。']]);
bc(34,"命令与指令","Imperativo",173,"A2","命令与指令",["肯定 tú 常与直陈式第三人称单数同形，但要单记 di、haz、ve、pon、sal、sé、ten、ven。usted/ustedes 使用相应虚拟式形式。", "否定命令用 no+虚拟式，不能在肯定命令前简单加 no。vosotros 肯定常以 -d 结尾，否定用虚拟式。", "肯定命令的宾语代词后接成一词；否定时前置。连写后应重新判断重音符号。礼貌也取决于语调、关系和表达方式。"],[["Dímelo. No me lo digas.", "告诉我这件事。别告诉我这件事。"], ["Abra la puerta, por favor.", "请您开门。"]],"No dime 是错误的；应为 No me digas。",[["不要说（tú）：No lo ____.", "digas", ["digas", "di", "dices"], "否定 tú 命令用虚拟式 digas。"], ["把它给我（tú）：", "Dámelo.", ["Dámelo.", "Me lo da.", "No me lo des."], "肯定命令代词后接；dámelo 保留重音。"]]);
bc(35,"ser 与 estar","Ser y estar",177,"A1","核心动词用法",["ser 用于身份、类别、来源以及一些性质描述；estar 用于位置和状态。不能以“永久/临时”概括所有用法。", "同一形容词搭配不同动词可能改变意义：ser aburrido 表示无聊乏味，estar aburrido 表示感到无聊。", "活动的举行地点用 ser：La clase es en el aula 2。人物和物体的位置一般用 estar；描述结果时要观察分词和一致关系。"],[["La clase es en el aula dos.", "课在二号教室上。"], ["Ana está aburrida, pero no es aburrida.", "Ana 感到无聊，但她并不是个无趣的人。"]],"永久位置也可用 estar；活动地点却常用 ser。",[["El museo ____ en el centro.", "está", ["está", "es", "hay"], "定位已知建筑物用 estar。"], ["La reunión ____ en mi casa.", "es", ["es", "está", "hay"], "说明活动举行地点用 ser。"]]);
bc(36,"存在与定位","Haber y estar",180,"A1","核心动词用法",["hay 引入某处存在什么，常接不定名词或数量；estar 定位已识别对象，常接定冠词或专名。", "无人称 haber 的存在用法保持单数：había muchas personas；不要按后面的复数对象配成 habían。", "先看问句是“有什么”还是“在哪里”，再选动词。过去存在需依时间语境选择 había、hubo 等。"],[["Hay una farmacia. La farmacia está cerca.", "有一家药店。这家药店很近。"], ["Había muchas personas.", "当时有很多人。"]],"hay 不是所有“有”的翻译；表示拥有通常用 tener。",[["En la mesa ____ tres libros.", "hay", ["hay", "están la", "son"], "首次引入三本书，用存在结构。"], ["标准存在用法：昨天有很多人", "Había mucha gente.", ["Había mucha gente.", "Habían mucha gente.", "Tenía mucha gente."], "haber 作无人称存在动词保持单数。"]]);
bc(37,"动词迂说与整体动作","Perífrasis verbales",185,"A2","日常动词结构",["把 tener que+原形、ir a+原形等作为整体理解，再把第一个动词按人称和时态变化。介词或连接词是结构的一部分。", "estar+副动词突出进行过程；并非所有现在动作都必须用进行式。动作开始、持续、结束还可由其他迂说表达。", "过去进行也可用 estuve+副动词概括一个有边界的进行时段；estaba+副动词则常呈现背景。先确定叙事视角。"],[["Tengo que estudiar. Voy a empezar ahora.", "我必须学习。我准备现在开始。"], ["Estuve leyendo toda la tarde.", "我整个下午都在阅读。"]],"Tengo estudiar 漏掉 que；副动词不随主语变阴阳性。",[["我必须走：Tengo ____ salir.", "que", ["que", "a", "de siempre"], "tener que+原形表示义务。"], ["我们正在学习：Estamos ____.", "estudiando", ["estudiando", "estudiar", "estudiamos"], "estar 后用副动词。"]]);
bc(38,"基础介词的意义对比","Preposiciones I",192,"A1","介词与结构",["把介词与所连接的意义一起学习：a 指向、en 位置、de 来源或所属；从起点到终点可用 desde…hasta…。", "por/para 的选择需考虑原因、路径、交换与目的、接收者、期限等关系，不能与单个中文词一一对应。", "还要记录动词的固定搭配和缩合 al、del。conmigo/contigo 是特殊形式；人称直接宾语 a 是另一种结构。"],[["Trabajo para aprender. Camino por el parque.", "我为学习而工作。我穿过公园走。"], ["Voy del banco al museo.", "我从银行去博物馆。"]],"por/para 要看关系；a+el→al，de+el→del，但人称代词 él 不缩合。",[["我去公园：Voy ____ parque.", "al", ["al", "a el", "en el"], "a 与冠词 el 缩合。"], ["为你：Este regalo es ____ ti.", "para", ["para", "entre", "desde"], "接收者用 para。"]]);
bc(39,"方位与时间介词短语","Preposiciones II",201,"A1","介词与位置",["先确定参照物，再选择 delante de、detrás de、encima de、debajo de 等位置关系。许多短语不可省略 de。", "al principio de / al final de 指某过程的开端/末尾；antes de / después de 表示先后，后接动作时可用原形。", "参照物改变，关系也改变。把描述画成小图检查位置，避免将 frente a、enfrente de、delante de 一律机械翻译。"],[["El gato está debajo de la mesa.", "猫在桌子下面。"], ["Después de comer, estudio.", "吃饭后我学习。"]],"debajo de la mesa 有 de；不要写 debajo la mesa。",[["椅子在桌前：delante ____ la mesa", "de", ["de", "a", "por"], "delante de 是整体位置短语。"], ["吃饭之前：antes de ____", "comer", ["comer", "como", "comiendo"], "介词后用原形表示动作。"]]);
bc(40,"疑问、间接疑问与感叹","Preguntar y exclamar",206,"A1","人称与句法",["直接疑问两端写 ¿?；qué、quién、cómo、cuándo、cuánto、dónde 在疑问意义下保留重音。", "间接疑问不加问号也保留疑问词重音：No sé dónde vive。要按所问信息选择 quién、cuál、qué 等，不能只看中文“什么”。", "感叹常用 qué+名词或形容词，或 cómo+动词。cuánto 可因所修饰名词变化，需检查性数。"],[["No sé dónde vive.", "我不知道他/她住哪里。"], ["¡Qué casa tan bonita!", "多漂亮的房子啊！"]],"间接疑问中的 dónde 仍有重音，不能因没有问号就写 donde。",[["No sé ____ está.（不知道在哪里）", "dónde", ["dónde", "donde", "cuanto"], "间接疑问的疑问副词保留重音。"], ["问身份：¿____ es esa persona?", "Quién", ["Quién", "Dónde", "Cuánto"], "询问人是谁用 quién。"]]);
bc(41,"比较级与最高级","Comparar",218,"A2","形容词与程度",["不等比较常为 más/menos+形容词或副词+que。数量比较也能比较名词，但需判断表达的是对象还是数值界限。", "相等比较中 tan+形容词/副词+como；tanto/a/os/as+名词+como，tanto 随名词一致。el mismo 也有一致变化。", "mejor、peor、mayor、menor 常为特殊比较形式。相对最高级常用 el/la más…de；-ísimo 表示很高程度，并非一定与某组对象比较。"],[["Ana es tan alta como Eva.", "Ana 和 Eva 一样高。"], ["Tengo tantos libros como tú.", "我的书和你的一样多。"]],"tan libros 不对；名词前需要相应 tanto 形式。",[["一样高：____ alto como tú", "tan", ["tan", "tanto", "tantos"], "形容词前用 tan。"], ["和你一样多的书：____ libros como tú", "tantos", ["tantos", "tan", "tanta"], "libros 阳性复数，用 tantos。"]]);
bc(42,"连接、原因、关系与条件","Unir frases",226,"B1","篇章与逻辑",["先标出两句之间是并列、选择、否定追加、转折、纠正、原因、时间还是条件，再选择连接词。ni…ni 否定并列；sino 通常纠正前面否定的内容。", "porque 常回答原因；como 放在前面常引入已知原因。关系从句用 que 等连接先行词，选择语气时还要看对象是否已确定。", "时间和条件结构要检查语气：cuando llegue 表示未来未发生时点；si tengo tiempo 表示开放的现实条件。不要因都指未来就一律用虚拟式。"],[["No es té, sino café.", "不是茶，而是咖啡。"], ["Si tengo tiempo, iré cuando termine.", "如果有时间，我会在结束后去。"]],"pero 是转折，sino 是否定后的纠正；现实条件 si 后通常用直陈式现在时。",[["No quiero té, ____ café.", "sino", ["sino", "pero siempre", "porque"], "否定后纠正所要的东西，用 sino。"], ["现实条件：Si ____ tiempo, iré.", "tengo", ["tengo", "tenga", "tendré"], "开放的现实条件 si 后用直陈式现在时。"]]);
bc(43,"字母与声音","Letras y sonidos",242,"A1","发音与书写",["按音素和拼写关系学习：c 在 e/i 前的读音与 a/o/u 前不同，g、gu、gü 也需看相邻元音。地区中存在 /s/ 与 /θ/ 等差异。", "h 通常不发音；ñ 是独立字母；r/rr 的区别涉及位置与振动。先听辨，再模仿，并放回词和句子。", "二合元音、三合元音和元音分立影响音节划分。拼读正确还要结合重音、节奏和语调；本站浏览器朗读仅是辅助，声音因设备而异。"],[["guitarra / pingüino", "guitarra 的 u 不发音；pingüino 的 ü 发音。"], ["pero / perro", "但 / 狗；注意两词的 r 发音区别。"]],"字母名与实际语音不同；听不清时不能只背字母表。",[["哪个词中 ü 要读出？", "pingüino", ["pingüino", "guitarra", "queso"], "分音符提示 gu 后的 u 发音。"], ["西语 h 通常如何发音？", "不发音", ["不发音", "都读英语 h", "都读 j"], "普通西语词中的 h 通常不发音。"]]);
bc(44,"重音与书面重音符号","Acentuación",247,"A1","发音与书写",["先分音节并找实际重音，再判断是否需要重音符号。元音、n、s 结尾的常规词通常重读倒数第二音节，其他辅音结尾通常重读末音节。", "实际重音不符合通常规则时，常需写重音符号；倒数第三音节重读的词通常带重音。元音分立和特定词尾情形需另查。", "区别重音还用于 tú/tu、él/el、sí/si 等；疑问词在间接疑问中也可带重音。复数、代词后接等改变词形后，应重新检查。"],[["Hablo español. Ayer habló Ana.", "我说西语。昨天 Ana 说了话；hablo/habló 意义和人称时态不同。"], ["Tú tienes tu libro.", "你有你的书；tú 是代词，tu 是物主限定词。"]],"重音符号不是装饰，也不是所有重读音节都要标出。",[["“你”作主语应写：", "tú", ["tú", "tu", "tù"], "人称代词 tú 有区别重音。"], ["“他昨天说了”：Ayer ____", "habló", ["habló", "hablo", "háblo"], "简单过去时第三人称 habló 重读末音节。"]]);
