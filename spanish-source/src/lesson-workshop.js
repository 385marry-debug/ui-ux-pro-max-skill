const workshops={};
function workshop(id,question,rows,task){workshops[id]={question,rows,task}}
workshop('A1-1','第一次见面时，怎样让别人知道你的名字、来源和住处？',[
['Me llamo Lucía.','我叫露西亚。','me llamo 来自 llamarse，是介绍名字的常用整体。me 不是“我的”；不能换成 mi llamo。'],['Soy de México.','我来自墨西哥。','soy 是 ser 对应 yo 的形式。de 引出来源，地名本身通常不需要冠词。'],['Vivo en Madrid.','我住在马德里。','vivo 来自 vivir，yo 常可省略；en 用来连接住的地点。']], '先用三个句框填入自己的真实信息；合上句框后重新介绍，再把一个同学的信息改成第三人称。');
workshop('A1-2','桌上出现几件新物品，怎样先引入它们，再描述它们？',[
['Hay una mesa blanca.','有一张白色桌子。','mesa 是阴性单数；una、blanca 与它一致。hay 引出此前未指定的物品。'],['Dos libros rojos.','两本红色的书。','数量超过一，libro→libros；rojo→rojos。这里不是根据说话者性别变化。'],['Los libros son nuevos.','这些书是新的。','提到已经识别的书，用 los。son 对应复数主语；nuevos 也为复数。']], '先描述一张桌子和一本书，再把两者都改成复数；每次说明你改了哪些词，为什么。');
workshop('A1-3','“我是学生”“学校在附近”“班里有学生”中的“是/在/有”怎样区分？',[
['Soy estudiante.','我是学生。','ser 说明身份，不是用永久性作判断。单独介绍职业或身份时常不用 un/una。'],['Mi escuela está cerca.','我的学校在附近。','学校是已知对象，这句在定位，使用 estar；主语 escuela 单数，形式是 está。'],['Hay doce estudiantes.','有十二名学生。','这句引入存在的人，用 hay，不把它按 doce estudiantes 变为复数动词。']], '为同一个房间说三句话：介绍用途、定位已知物品、引入新物品。不能只给出“永久/暂时”的解释。');
workshop('A1-4','从“居住”这个词，怎样变成“我住/她住/我们住”的完整句子？',[
['Vivo en Valencia.','我住在瓦伦西亚。','vivir 去掉 -ir 后，yo 加 -o。vivo 已提供人称信息，因此可不说 yo。'],['Mis amigos viven cerca.','我的朋友们住在附近。','主语是 amigos 复数，对应 ellos 的 viven，不是因为距离近才改变形式。'],['Hablamos todos los días.','我们每天交谈。','hablar 的 nosotros 形式是 hablamos；todos los días 表每天，不是一整天。']], '拿 hablar/comer/vivir 各写一个 yo 句，再改成 ella 和 nosotros，共九句，最后不看表复述。');
workshop('A1-5','怎样同时表达喜欢、年龄和明天的打算？',[
['Me gustan los libros.','我喜欢书。','可以先理解为“书令我喜欢”。los libros 为复数，决定 gustan；me 标记体验者。'],['Tengo veintidós años.','我二十二岁。','年龄使用 tener años，不按中文“我是”写 soy。veintidós 的重音要保留。'],['Voy a estudiar porque tengo que preparar un examen.','我打算学习，因为我必须准备考试。','voy a + 原形是计划；tengo que + 原形是义务。两个 estudiar/preparar 都保留原形。']], '写一个喜欢的活动和两样喜欢的东西，再写明天的一项计划与义务，注意 gusta/gustan 的依据。');
workshop('A1-6','在咖啡馆没听清价格，怎样把对话继续下去？',[
['Un café, por favor.','请来一杯咖啡。','简短点单加 por favor 是常用表达，具体说法会因地区与场景变化。'],['¿Cuánto cuesta?','多少钱？','cuánto 询问价格/数量，cuesta 来自 costar。问号两端都要写。'],['No entiendo. ¿Puedes repetir más despacio?','我没听懂。你能再慢一点说吗？','先明确沟通困难，再请求具体行动。no 在 entiendo 前，puedes 后接重复的原形 repetir。']], '完成“问候→点单→询价→没听懂→请重复→感谢”的六轮对话，替换饮品和价格再练一遍。');
workshop('A1-7','怎样把星期、时刻、数量连成一份能执行的日程？',[
['La clase empieza el lunes.','课星期一开始。','特定一个星期一常用 el lunes；los lunes 通常指每逢周一。星期词通常小写。'],['A las nueve y media.','在九点半。','在几点使用 a la/las，九点为复数 las；y media 加半小时。'],['Tengo veintiún libros.','我有二十一本书。','veintiuno 在阳性名词 libros 前常缩合为 veintiún，而不只是把数字词典形式照抄。']], '先写周一的课表，再写每周的重复安排；向同伴询问两个时刻与一种商品的数量。');
workshop('A1-8','别人看不到你面前的地图，怎样用位置帮助他找路？',[
['El banco está al lado del museo.','银行在博物馆旁边。','已知地点用 estar 定位；al lado de + el museo 缩合成 al lado del museo。'],['La farmacia está detrás del banco.','药店在银行后面。','detrás de 是完整位置短语。不能省掉 de，也不要把参照物和目标物交换。'],['Sigue por esta calle.','沿着这条街走。','这是 tú 的肯定指令；por 表示经过的路径，不是到达的终点。']], '画三个地点，让另一个人只根据你的西语指示画位置；如果画错，先检查参照物是否说清。');
workshop('A1-9','怎样把自我介绍变成有问有答，而不只是背一段话？',[
['¿Cuál es tu nombre?','你的名字是什么？','cuál 可用于确定名称等信息；tu 是物主限定词，不带 tú 的重音。'],['Mi amiga Ana no habla chino.','我的朋友安娜不说中文。','no 放在变位动词 habla 前；Ana 是第三人称单数，不能使用 hablo。'],['Estudia conmigo.','她和我一起学习。','estudia 的主语可由上文知道；con + mí 使用融合形式 conmigo。']], '设计五个介绍问题并自己回答；再换成替同学介绍，检查人称、否定与物主词。');
workshop('A1-10','为什么同样的字母，少了一个重音符号就可能换成另一个意思？',[
['Mi país está lejos.','我的国家很远。','país 中 í 的重读使 a 与 í 分开读；写成 pais 会丢失必要的重音信息。'],['María habla español.','玛丽亚说西语。','habla 重读倒数第二音节，是第三人称单数现在时。h 通常不发音。'],['Ayer habló con Ana.','昨天她和安娜说了话。','habló 最后音节重读，是简单过去时形式。即使尚未系统学过去时，也能先观察拼写与读音对应。']], '对比朗读 hablo/habló、tu/tú、pais/país，指出哪些是正确词形、重音在哪里以及意义有什么不同。');
workshop('A2-1','昨天的事件怎样排成一条时间线？',[
['Ayer fui al centro.','昨天我去了市中心。','fui 是 ir 的简单过去时；原形 ir 不按规则生成 iré 来表达过去。a + el 缩合 al。'],['Compré un libro.','我买了一本书。','把购买作为昨天完成的一次事件，yo 使用 compré。注意与现在时 compro 区分。'],['Después volvimos a casa.','之后我们回家了。','después 提供先后关系；主语改为我们，动词也改为 volvimos。']], '按“先/然后/最后”写五个已完成事件，至少一个不规则过去时，再用提问检查时间和参与者。');
workshop('A2-2','怎样让听者知道哪些是童年背景，哪些是某一次的事件？',[
['Cuando era niña, vivía cerca del mar.','小时候我住在海边。','era/vivía 将过去身份和居住情况作为背景呈现，没有单独叙述开始或结束事件。'],['Cada verano iba a la playa.','每年夏天我都去海滩。','反复的过去习惯使用 iba。不是因为去的过程长才选它。'],['Un día encontré una concha.','有一天我找到一个贝壳。','un día 转到某一次完成事件，encontré 推进故事。']], '写一段三句背景与两句事件的回忆；用不同颜色标出未完成时和简单过去时。');
workshop('A2-3','经历怎样与现在联系，助动词和分词分别做什么？',[
['Esta semana he leído dos artículos.','这周我读了两篇文章。','he 对应 yo，leído 为分词，当前周提供与现在关联的框架；其他地区可使用不同过去表达。'],['He escrito un correo.','我写了一封邮件。','escribir 的分词是 escrito，而不是规则想象出来的 escribido。'],['Todavía no he terminado.','我还没完成。','todavía no 说明到当前参照点仍未完成。no 在助动词前。']], '用 ya 与 todavía no 各写两句，给出明确的参照范围，并说明你选择的地区主线。');
workshop('A2-4','同一个人物，为什么一会儿用 la，一会儿用 le？',[
['Ana necesita un libro. Yo lo tengo.','安娜需要一本书。我有它。','lo 指 libro，不指 Ana；先在原句标出被代替的对象。'],['Se lo doy esta tarde.','我今天下午把它给她。','间接对象 le 与直接对象 lo 同时出现时，le→se；se 在这里不是自己。'],['Ella me escribe un mensaje.','她给我写消息。','me 是消息接收者；un mensaje 是被写出的内容。']], '先写给某人某物的完整句，再只换物、只换人、同时替换。每一次都口头说明代词对应。');
workshop('A2-5','怎样从两个商品的差别，推导出自己的选择？',[
['La azul es más barata que la roja.','蓝色的比红色的便宜。','mochila 在上文已知可省；barata 与其阴性一致，比较双方用 que 连接。'],['La roja tiene más espacio.','红色的空间更大。','más 在这里修饰名词 espacio；不是形容词比较句。'],['La elijo porque necesito llevar muchos libros.','我选它，因为需要带很多书。','la 指红色背包；porque 给出选择原因。词形和论证关系都要清楚。']], '比较两件真实商品，写出两项可核实差异和选择理由，不只列形容词。');
workshop('A2-6','计划和礼貌请求怎样连成一条可回复的信息？',[
['El próximo mes viajaré a Bogotá.','下个月我会去波哥大。','将来时 viajaré 标记 yo；a 表目的地。也可按语境用 ir a 计划结构。'],['Me gustaría visitar un museo.','我想参观一座博物馆。','gustaría 的条件式可缓和愿望；visitar 保持原形。'],['¿Podrían confirmar mi reserva?','诸位能确认我的预订吗？','条件式 podrían 与 ustedes 对应，是一种委婉请求，不是询问过去发生了什么。']], '写一条酒店消息，含日期、预订信息、一个具体请求和感谢，让酒店可以直接答复。');
workshop('A2-7','起点、持续时长与完成耗时，为什么不能都用一个介词？',[
['Vivo aquí desde 2020.','我从2020年起住在这里。','2020 是起点，使用 desde；如果说持续两年，可用 desde hace dos años。'],['Estudié durante dos horas.','我学习了两个小时。','durante 提供持续时长，把这次学习作为已结束活动。'],['Terminé en diez minutos.','我十分钟就完成了。','en 标记完成所需时间，与“持续十分钟仍在做”不完全一样。']], '为一个学习项目写开始日期、至今时长、昨天练习时长与一道题的完成耗时。');
workshop('A2-8','一天里有作息、正在做的事和重新开始的事，怎样分别说？',[
['Me levanto a las siete.','我七点起床。','代词与变位配合：me levanto；如果改我们，是 nos levantamos。'],['Ahora estoy leyendo.','我现在正在阅读。','estar 变位，leer 变副动词 leyendo；不能用 estoy leído 表正在读。'],['Volví a practicar.','我又开始练习了。','volver a + 原形表示再次做，a 是结构的一部分。']], '分别写日常习惯、当前过程和重新开始的活动，再把主语换成别人。');
workshop('A2-9','没有、一些和每一天，怎样精确表达数量与范围？',[
['No tengo ningún problema.','我没有任何问题。','ninguno 在阳性单数名词 problema 前缩合为 ningún；后置否定词与 no 呼应。'],['Hay algunas preguntas difíciles.','有一些难题。','algunas 与 preguntas 阴性复数一致，difíciles 也为复数。'],['Todos los días practico un poco.','我每天练一点。','todos los días 表频率，un poco 表练习量，两者功能不同。']], '说明你有哪些困难、没有哪些问题、每天如何安排；用数量词区别部分与全部。');
workshop('A2-10','天气、过去存在和当前需求，怎样放进出行消息？',[
['Ayer hacía frío.','昨天天气冷。','hacer 用非人称第三人称单数；未完成时将天气作为背景。'],['Había muchas personas.','当时有很多人。','存在意义的 había 不因 personas 复数而变成 habían。'],['Necesito comprar un billete.','我需要买一张票。','necesito 按 yo 变位，comprar 作为后续活动保持原形。']], '写一条出行近况，包含天气背景、车站人数、发生的事件和现在需要别人帮什么。');
workshop('B1-1','错过火车时，怎样让背景、主要事件和更早事件各有位置？',[
['Cuando llegué, el tren ya había salido.','我到达时，火车已经开走了。','llegué 给出过去参照点；había salido 把开车放到这个参照点之前。'],['Llovía y no tenía paraguas.','当时下着雨，我没有伞。','两种情况作为故事背景，不在这里叙述开始和结束。'],['Al final tomamos un autobús.','最后我们坐了大巴。','完成事件给出故事的解决方案；主语从我变为我们。']], '重写同一故事两版：只列事件；加入背景和更早事件。比较哪版更易理解。');
workshop('B1-2','建议、希望与事实陈述，为什么可能谈同一事却用不同语气？',[
['Le recomiendo que descanse.','我建议他/她休息。','主句试图影响另一主体行动，因此 que 后使用虚拟式 descanse。'],['Espero que esté tranquila.','我希望她心情平静。','希望属于此处的语气环境；tranquila 与被描述者一致。'],['Que pueda dormir bien.','希望她能睡好。','poder 在此使用虚拟式 pueda，后接原形 dormir。']], '把同一内容分别写成事实、建议与希望，并解释不是只因“真假”而换语气。');
workshop('B1-3','寻找未定的房子与介绍看过的房子，语气为何不同？',[
['Busco un piso que tenga dos habitaciones.','我想找一套有两个房间的公寓。','从句描述尚未确定对象的目标特征，用虚拟式 tenga。'],['Ayer vi uno que tiene balcón.','昨天我看过一套有阳台的。','这里介绍具体见过的对象，tiene 呈现其特征。'],['Que esté cerca del metro.','希望靠近地铁。','对未定房子的期望位置同样使用虚拟式 esté。']], '写一段寻房条件，再给出看过的一处房源，对比所用语气。');
workshop('B1-4','指令怎样让别人真的完成，而不是只看懂动词表？',[
['Escribe tu nombre y revisa los datos.','写下名字并核对资料。','两个 tú 肯定命令按步骤排列，让执行者知道先做什么。'],['Pulsa «Enviar».','点击“发送”。','pulsa 为 tú 肯定形式；操作名要明确，不能只说“那个”。'],['No cierres la página.','不要关闭页面。','否定 tú 命令使用 cierres，不是给 cierra 前面直接加 no。']], '写四步操作说明，找一个人照做；若卡住，判断是语法、指代还是信息缺失。');
workshop('B1-5','怎样提出观点，同时承认限制而不自相矛盾？',[
['Creo que aprender en grupo ayuda.','我认为小组学习有帮助。','肯定判断常用直陈式 ayuda；后面需要具体理由支撑。'],['Sin embargo, necesito tiempo a solas.','不过，我也需要独处学习的时间。','转折不是否认前句所有内容，而是加入限制或另一面。'],['Aunque el curso es caro, me resulta útil.','虽然课程贵，但对我有用。','es 把贵作为事实呈现；让步说明这不改变后面的评价。']], '写一段五句观点：主张、原因、例子、限制、结论；检查连接词是否符合真实关系。');
workshop('B1-6','现实安排与假设愿望，怎样在同一段里区别？',[
['Si termino esta semana, visitaré a mi familia.','如果本周完成，我会去看家人。','现实条件用现在时 termino，结果可以将来时；不是 si terminaré。'],['Si tuviera más vacaciones, viajaría.','如果假期多一些，我会旅行。','这里拉开假设距离，条件用 tuviera，结果用 viajaría。'],['Por ahora necesito organizar mi tiempo.','目前我需要安排好时间。','回到现实限制，明确假设愿望不等于已确定计划。']], '写两个可执行条件计划和一个假设愿望，各标注实现条件。');
workshop('B1-7','如何说明兴趣、身体感受与收受对象，避免把所有代词当主语？',[
['Me interesan los idiomas.','我对语言感兴趣。','interesan 与 idiomas 复数呼应；me 是体验者。'],['Me duelen los pies.','我双脚疼。','脚是复数，动词用 duelen；不是跟着 me 变第一人称。'],['Este libro es para ti.','这本书给你。','介词 para 后用 ti，不是主语代词 tú，也不带重音。']], '解释三种代词各自的角色，再把句子换成人名与完整名词。');
workshop('B1-8','已知信息、补充信息与未确定目标，怎样让读者区分？',[
['Busco un curso que tenga clases por la tarde.','我想找一个下午上课的课程。','尚未确定目标，tenga 表目标特征。'],['Mi amiga, que trabaja por la mañana, quiere venir.','我的朋友上午工作，她也想来。','逗号把工作时间作为对已知朋友的补充说明。'],['La escuela donde estudiamos está cerca.','我们学习的学校很近。','donde 指向地点先行词 escuela。']], '写一则找课程的信息，再补充朋友限制，检查关系词、语气与逗号。');
workshop('B1-9','怎样描述学习进展、义务和客观限制？',[
['Llevo dos años estudiando español.','我学西语已经两年了。','llevar + 时段 + 副动词描述持续到当前的过程。'],['Tengo que repasar más.','我必须多复习。','义务由 tener que 表达，后接原形。'],['Mi horario depende del trabajo.','我的时间表取决于工作。','depender 固定搭配 de；de + el trabajo 缩合 del trabajo。']], '用持续过程、当前义务和限制条件三层说明你的学习计划。');
workshop('B1-10','为什么公告里同样有 se，动词有时单数有时复数？',[
['Se venden libros.','这里卖书。','被动 se 中 libros 是复数主语，动词也复数。'],['Se busca a una persona con experiencia.','招聘一名有经验的人。','特定人物的 a 结构可作非人称分析，动词单数。'],['Se vive bien aquí.','在这里生活得不错。','非人称表达没有某个名词主语让它变化。']], '写三条公告，逐条说明 se 的功能、有没有主语以及为什么用该数。');
workshop('B2-1','如何转述一条消息，同时不改变原话的时间和责任归属？',[
['El lunes dijo: «Vendré mañana».','星期一她说：“我明天会来。”','mañana 以原说话周一为参照，对应周二。'],['Dijo que vendría al día siguiente.','她说次日会来。','转到过去叙述视角，vendré 常变 vendría，时间词也相应调整。'],['Nos pidió que esperáramos.','她请我们等候。','请求不是单纯陈述消息；过去请求常用 que + 过去虚拟式。']], '把消息、是非问题和请求分别转述，写清谁对谁说、何时说。');
workshop('B2-2','怎样对过去失误作出反事实分析，而不是假装过去还能改变？',[
['Envié la solicitud tarde.','我晚交了申请。','先明确真实发生的事件，为反事实设定基准。'],['Si hubiera revisado la fecha…','如果我当时检查了日期……','过去条件与实际情况不同，使用过去完成虚拟式。'],['Habría entregado todo a tiempo.','我本来就会准时交齐材料。','条件完成时呈现该假设下的过去结果。']], '把一个低风险失误拆成真实事实、不同条件、可能结果和今后可执行的改进。');
workshop('B2-3','活动安排中，可能障碍、目的和未来节点怎样各用合适结构？',[
['Aunque mañana llueva, iremos.','即使明天下雨，我们也会去。','让步把可能下雨呈现为不影响决定；不简单等于不知道。'],['Para que todos puedan llegar.','为了让大家能到达。','目的涉及另一主体，常用 para que + 虚拟式。'],['Cuando termine la reunión, enviaremos un resumen.','会议结束后，我们将发送总结。','尚未发生的时间从句使用 termine，主句仍可将来时。']], '写一次活动安排，分别标注障碍、目的和未来节点，解释语气选择。');
workshop('B2-4','一封正式邮件怎样让收件人容易回应？',[
['Le escribo para solicitar información.','我写信是想咨询信息。','第一句说明来意；para + 原形表同一主体写信的目的。'],['Le agradecería que me enviara el horario.','如能给我发送课表，将不胜感激。','条件式缓和请求，后接过去未完成虚拟式，具体请求也明确。'],['Atentamente, Lin.','此致，Lin。','结尾需符合关系和机构习惯；不是越复杂越正式。']], '写完后请另一个人只回答：你是谁、要什么、对方需做什么、材料是否齐全。');
workshop('B2-5','怎样从调查报道中识别证据能支持什么、不能支持什么？',[
['Según una encuesta a cincuenta estudiantes…','据一项针对五十名学生的调查……','标明来源与样本，读者才能判断结论适用范围。'],['El 60 % prefiere estudiar por la mañana.','60%更喜欢早上学习。','调查是偏好信息，不自动测出了学习效果。'],['La muestra no permite generalizar.','样本不允许作普遍推广。','小范围样本与测量内容都限制了结论，不是有百分比就能代表所有人。']], '为原结论写一个更谨慎版本，明确人群、测量内容和仍缺少的证据。');
workshop('B2-6','分歧怎样转成双方都理解的可执行方案？',[
['Lin propone empezar a las nueve.','Lin 提议九点开始。','提出具体时间，而不是仅说“早点”。'],['Tras aclarar sus horarios…','澄清各自日程后……','先核实限制，避免把时间冲突当作态度问题。'],['Acuerdan reunirse a las diez.','他们同意十点见面。','给出共同方案，并明确后续文件何时发。']], '写一段两人协商，包含提议、澄清、对限制的解释、替代方案与最终确认。');
workshop('B2-7','同一件办公室事件，怎样分别描述谁做、发生过程与结果？',[
['Las cartas fueron enviadas ayer.','信昨天寄出了。','ser + 分词被动聚焦寄出事件；enviadas 与 cartas 一致。'],['Ahora están archivadas.','现在它们已经归档。','estar + 分词突出结果状态。'],['Se me olvidaron las llaves.','我忘了带钥匙。','me 是受影响者，动词与 las llaves 复数一致。']], '为一件事写主动、事件被动、结果状态和受影响者表达，比较关注点。');
workshop('B2-8','复杂信息如何依然让读者跟得上？',[
['La autora cuyos libros leo…','我读其作品的那位女作者……','cuyos 与后面的 libros 一致，而不是与 autora 的性一致。'],['No entiendo lo que dice el anuncio.','我不明白公告说的内容。','lo que 概括“所说的事情”，不指某个男性对象。'],['Lo que necesito es confirmar la hora.','我需要的是确认时间。','强调结构把真正需要的信息放在焦点位置。']], '介绍一位人物与其作品，再用 lo que 说明读者真正需要确认的事项。');
workshop('B2-9','怎样比较地区表达而不把不同用法判成低级错误？',[
['Vos hablás. / Tú hablas.','两种地区人称主线中的“你说”。','voseo 不是拼写错；但具体变位随地区，不能用一套表概括所有。'],['Ambos se entienden.','两个人互相理解。','复数的 se 在这里可有相互意义，需要结合主体和语境。'],['Revisan el grado de formalidad.','他们检查正式程度。','地区差异与正式/口语是不同维度，应分开判断。']], '给一位地区不同的伙伴介绍你的用法，礼貌询问对方偏好，再写一封机构消息。');
workshop('B2-10','怎样同时组织未来截止点、已发生评价和过去遗憾？',[
['Para el viernes habré terminado.','到周五我会已经完成。','未来截止点之前完成，用将来完成时。'],['Me alegra que hayas venido.','你能来我很高兴。','评价可以涉及真实已发生事实，完成虚拟式不意味着没有来。'],['Si hubiera revisado antes, habría detectado el error.','如果早些检查，我本来能发现错误。','过去条件与过去结果分用过去完成虚拟式、条件完成式。']], '为一个项目写三段：未来计划、对已发生合作的评价、过去反思，标出每段参照点。');
