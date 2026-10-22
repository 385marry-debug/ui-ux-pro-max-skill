"""Original graded dialogues, translations, teacher commentary and comprehension checks."""
from pathlib import Path
import json
root=Path(__file__).resolve().parents[1];dialogs=[]
def dl(unit,title,level,lines,checks,focus):
 turns=[dict(zip(['es','zh','note'],line.split('|'))) for line in lines.strip().splitlines()]
 questions=[]
 for line in checks.strip().splitlines():
  prompt,answer,w1,w2,evidence,explain=line.split('|');questions.append(dict(prompt=prompt,answer=answer,options=[answer,w1,w2],evidence=int(evidence),explain=explain))
 dialogs.append(dict(id='DL-'+unit,unit=unit,title=title,level=level,turns=turns,questions=questions,focus=focus))
dl('A1-1','第一次见面：名字、来源、住处','A1','''Hola, soy Ana. ¿Cómo te llamas?|你好，我是 Ana。你叫什么名字？|soy 是 ser 的第一人称；cómo 是带重音的疑问词。
Me llamo Lin. Soy de China.|我叫 Lin。我来自中国。|me llamo 作为介绍名字的整体记；de 引出来源，不是现在住处。
Mucho gusto. ¿Vives en Madrid?|很高兴认识你。你住马德里吗？|vives 已说明 tú；疑问句不需要英语式 do。
No, vivo en Sevilla. Estudio español aquí.|不，我住塞维利亚。我在这里学西语。|vivo 与 estudio 都对应 yo；省略主语不省略变位。
Yo también estudio español. ¿Hablamos despacio?|我也学西语。我们慢慢说好吗？|también=也；hablamos 对应 nosotros，问句可提出共同建议。
Sí, por favor. No entiendo todo todavía.|好的，谢谢。我还不是全部都听懂。|no 在变位动词前；no…todo 不是“什么都不懂”。''','''Lin 来自哪里？|中国|墨西哥|西班牙|1|Soy de China 陈述来源，不能用 Sevilla 这个住处替代。
Lin 现在住哪里？|塞维利亚|马德里|北京|3|No 否定 Madrid，后面 vivo en Sevilla 给出修正。
他们建议怎样交流？|慢慢说|只写英语|不再交流|4|¿Hablamos despacio? 是提议，despacio 表示慢慢地。''','先分清“是谁、来自哪里、住在哪里”三个意图，再选 soy、soy de、vivo en。听力先抓名字与地名，第二遍分辨 No 后的纠正信息。初学可以完整使用 No entiendo todo todavía，而不是要求自己一次听懂每个词。')
dl('A1-2','一起整理书桌','A1','''Mira, hay una mesa blanca junto a la ventana.|看，窗边有一张白色桌子。|hay 引入尚未指定的物品；una 与 blanca 都配阴性 mesa。
Encima hay dos libros rojos y un cuaderno azul.|上面有两本红书和一本蓝色笔记本。|dos libros 需要复数形容词 rojos；azul 不分阴阳性。
¿Los libros son nuevos?|这些书是新的吗？|第二次提到已识别的书用 los；son 对应复数。
Sí, pero el cuaderno es viejo. Es de mi hermano.|是的，但笔记本是旧的，是我哥哥／弟弟的。|mi 不随拥有者性别变化；de 引出所属者。
¿Ponemos las sillas pequeñas aquí?|把小椅子放这儿好吗？|las/sillas/pequeñas 三处都配阴性复数。
Sí. Ahora la habitación está ordenada.|好，现在房间整理好了。|estar 描述此时结果状态；ordenada 与 habitación 一致。''','''桌子是什么颜色？|白色|红色|蓝色|0|blanca 描述 mesa；rojos 描述 libros，不要串联对象。
什么东西是旧的？|笔记本|书|椅子|3|pero 后纠正的是 cuaderno，不是 libros。
笔记本属于谁？|说话者的兄弟|老师|Ana 的姐姐|3|Es de mi hermano 表所属，hermano 未明确年长或年幼。''','把每个描述拆成“限定词＋名词＋形容词”。阴阳性不是说话者性别；要找形容词真正描述的对象。先比较 una mesa blanca 与 dos libros rojos，再做性数转换，转换时同时检查所有相关成分。')
dl('A1-3','学校、班级和今天的状态','A1','''Soy estudiante y mi amiga es profesora.|我是学生，我的朋友是老师。|ser 介绍身份，职业作简单身份说明常不加冠词。
Nuestra escuela está cerca del parque.|我们学校在公园附近。|已知学校的位置用 estar；de+el 缩合为 del。
En mi clase hay doce estudiantes.|我班里有十二个学生。|hay 引出存在，不随 doce estudiantes 改成复数形式。
Hoy estoy cansada, pero estoy contenta.|今天我很累，但也很高兴。|状态形容词配说话者的这里的阴性表达。
¿La reunión es en la escuela?|会议在学校举行吗？|活动举行地点常用 ser，不要把所有位置都套 estar。
Sí, es a las cinco. La profesora ya está allí.|是的，五点开始。老师已经在那里了。|活动时间用 ser；人的所在位置用 estar。''','''班里有多少学生？|十二个|两个|二十个|2|doce 是十二，不是 dos 或 veinte。
会议几点开始？|五点|十二点|三点|5|a las cinco 指五点，doce 是学生人数。
老师在哪里？|已经在学校|在公园散步|在家休息|5|allí 回指会议所在的学校，ya 表示已经。''','不要背“永久用 ser、暂时用 estar”这个失真的总规则。逐句问：身份是什么？已知人／物在哪里？某处有什么？活动何时何地举行？同一个地点词 escuela 可以出现在三种不同结构里。')
dl('A1-4','一天的学习安排','A1','''Trabajo por la mañana y estudio por la tarde.|我上午工作，下午学习。|trabajo/estudio 都是 yo 的现在时，表达习惯。
Mi hermana trabaja en una biblioteca.|我姐姐／妹妹在图书馆工作。|第三人称要用 trabaja；biblioteca 是图书馆。
Nosotros comemos a las dos y vivimos cerca.|我们两点吃饭，住在附近。|-er 的 nosotros 是 -emos；-ir 的 nosotros 是 -imos。
¿Estudiáis español todos los días?|你们每天学西语吗？|estudiáis 是 vosotros 的形式；拉美通常改用 ustedes estudian。
Sí, pero los domingos descansamos.|是的，但周日我们休息。|los domingos 表每周日的习惯，不是某个唯一周日。
Yo practico diez minutos antes de dormir.|我睡前练十分钟。|antes de 后接原形 dormir，不能再变成 duermo。''','''说话者下午做什么？|学习|工作|游泳|0|por la tarde 与 estudio 相连。
姐姐／妹妹在哪里工作？|图书馆|医院|餐厅|1|biblioteca 不要与 librería（书店）混淆。
睡前练多久？|十分钟|两小时|三十分钟|5|diez minutos 是十分钟；a las dos 是吃饭时间。''','先认出一个句子里哪些动词真的需要匹配主语，哪些动词在介词后保留原形。把 hablo/hablas/habla 与 comemos/vivimos 分开练，再换成自己每天会做的事。')
dl('A1-5','在咖啡馆表达喜好','A1','''A mí me gusta el café, pero no me gusta el té.|我喜欢咖啡，但不喜欢茶。|gustar 与被喜欢的东西一致；a mí 用来明确或强调体验者。
A mi amiga le gustan los zumos naturales.|我朋友喜欢鲜榨果汁。|los zumos 为复数，因此 gustan；le 指朋友。
¿Te gusta leer aquí?|你喜欢在这里读书吗？|leer 这个原形活动通常作为单数整体，配 gusta。
Sí, y también me gusta hablar con mis amigos.|喜欢，我也喜欢和朋友聊天。|hablar con 表示与谁交谈；不把 hablar 变成 hablo。
Hoy tenemos hambre. Pedimos dos bocadillos.|今天我们饿了，点两个三明治。|tener hambre 是固定结构，不是 ser hambre。
Para mí, uno sin queso, por favor.|我的那份请不要奶酪。|sin queso 给出具体限制；点餐时可用省略表达。''','''朋友喜欢什么？|鲜榨果汁|茶|热巧克力|1|le gustan 后面的 los zumos naturales 是被喜欢的东西。
为什么用 gusta leer？|读书这个活动作整体|主语一定是我|所有句子都用 gusta|2|判断的是被喜欢的事物/活动，不是中文的“我”。
说话者的三明治不要什么？|奶酪|面包|番茄|5|sin queso 表示不含奶酪，不能忽略 sin。''','把 gusta 看成“使某人喜欢”的体验结构，比从中文“我喜欢”逐字排列更稳。先找被喜欢的对象是单数、复数还是活动，再决定 gusta/gustan，最后选择 me/te/le/nos。')
dl('A1-6','没听懂时怎样继续交流','A1','''Perdona, no entiendo la última palabra.|不好意思，最后一个词我没听懂。|no entiendo 否定理解；última 指最后的，不是所有词。
¿Puedes repetirla más despacio, por favor?|能慢一点再说一遍吗？|puedes 后接原形 repetir；la 回指 palabra。
Claro. La palabra es biblioteca.|当然，那个词是 biblioteca。|es 用来识别或说明词语，不是位置。
¿Significa un lugar para leer libros?|它是指一个读书的地方吗？|para+原形说明用途；libros 为复数。
Sí. No es una librería: allí compras libros.|是的，它不是书店；书店里可以买书。|no es X 用来排除误解；compras 配 tú。
Gracias. Ahora lo entiendo. ¿Cómo se escribe?|谢谢，我现在明白了，怎么拼写？|lo 回指这个意思；cómo se escribe 是常用确认表达。''','''说话者没有听懂什么？|最后一个词|整个对话|电话号码|0|la última palabra 范围很具体。
需要对方怎样重复？|慢一点|更大声而且更快|只写中文|1|más despacio 是慢一点。
biblioteca 与 librería 的区别是什么？|图书馆与书店|二者都只指书店|二者都指医院|4|对话明确用 compras libros 区分购买场所。''','初学者应先会“求重复—确认含义—确认拼写”，而非一听不懂就退出。puedes+原形 是可替换句框，repetirlo/repetirla 的代词要根据回指对象，不是随意选一个。')
dl('A1-7','确认预约时间','A1','''Buenos días, tengo una cita con la doctora Ruiz.|早上好，我和 Ruiz 医生有个预约。|tener una cita 是约定/预约；doctora 这里是医生。
¿A qué hora es su cita?|您预约的是几点？|a qué hora 问时刻；su 是礼貌称呼中的所属形式。
A las nueve y media. Ahora son las nueve y cuarto.|九点半。现在是九点一刻。|y media 加半小时，y cuarto 加十五分钟。
Está bien. La doctora llega a las nueve y veinte.|好的，医生九点二十分到。|llega 是现在时，也可在清楚日程语境中谈近期安排。
¿Puedo esperar aquí?|我可以在这里等吗？|puedo 后接 esperar 原形。
Sí. Le llamamos en quince minutos.|可以，十五分钟后叫您。|en quince minutos 指从现在起过十五分钟，不是十五点。''','''预约是几点？|九点半|九点一刻|九点二十分|2|同一句有两个时刻，要区分预约与当前时间。
现在几点？|九点一刻|九点半|十点|2|Ahora 明确引出当前时刻。
还需等多久？|十五分钟|五十分钟|一天|5|quince 与 cincuenta 的声音和长度不同。''','听时间先标注“现在、预约、到达”各对应哪个时刻，不要把一段话里的所有数字混在一起。先会一刻、半点和整点，再练 menos cuarto 这样的倒数表达。')
dl('A1-8','问路到车站','A1','''Disculpe, ¿dónde está la estación de tren?|打扰一下，火车站在哪里？|问已知场所的位置用 dónde está。
Siga recto y gire a la derecha en el banco.|一直走，到银行右转。|siga/gire 是对 usted 的指示；en el banco 标记转弯参照。
¿Está lejos? Voy a pie.|远吗？我走路去。|lejos 表远，a pie 是步行，不能逐字说 en pie 表交通方式。
No, está a diez minutos. Hay una farmacia enfrente.|不远，十分钟就到；对面有家药店。|estar a+时间可说明路程；hay 引入地标。
Entonces, recto y después a la derecha, ¿verdad?|也就是说，直走，然后右转，对吗？|复述路线检查理解，después 提供顺序。
Exacto. La entrada está al lado de la farmacia.|没错，入口就在药店旁边。|al lado de+la 不缩合，de+el 才缩合为 del。''','''在哪里右转？|银行处|药店后面|公园里|1|en el banco 是转弯参照。
怎么去？|步行|坐飞机|骑马|2|Voy a pie 表步行。
入口在哪里？|药店旁边|银行里面|车站楼顶|5|al lado de 表紧邻，不是 dentro de。''','路线表达分三层：运动指令、先后顺序、地标位置。先读懂示范，不必一开始自己背完整命令式。实际交流中用 Entonces…¿verdad? 复述，能及时发现左右方向听反。')
dl('A1-9','买东西与否定','A1','''Buenos días, busco una camiseta azul.|早上好，我想找一件蓝色T恤。|busco 是 buscar 的 yo 现在时。
Tenemos esta, pero no tenemos la talla pequeña.|有这款，但没有小码。|no 放在 tenemos 前，不能放到宾语后才表示否定。
¿Tiene una mediana? No quiero una grande.|有中码吗？我不想要大码。|tiene 可对应礼貌 usted；una mediana 省略了 camiseta。
Sí, cuesta quince euros. ¿La quiere probar?|有，十五欧元，要试试吗？|la 回指阴性 camiseta；querer 后接原形 probar。
Sí, gracias. Hoy no compro zapatos.|要，谢谢，今天我不买鞋。|no compro 否定当前购买意图，不是过去发生。
El probador está al fondo, a la izquierda.|试衣间在里面左侧。|al fondo 表里面/尽头，要与位置词一起理解。''','''店里没有什么尺码？|小码|中码|大码|1|la talla pequeña 在 no tenemos 的否定范围内。
T恤多少钱？|十五欧元|五十欧元|五欧元|3|quince=15，不是 cincuenta=50。
说话者今天不买什么？|鞋|T恤|所有东西|4|zapatos 是鞋，不能把否定扩大到所有购物。''','否定要看它修饰哪一个谓语和哪一项内容。No tenemos la talla pequeña 不是整家店没衣服；No quiero una grande 也不是不要任何T恤。学会对话中的排除信息，比只抓到名词更重要。')
dl('A1-10','电话号码与拼写','A1','''Mi apellido es García, con tilde en la í.|我姓 García，í 上有重音符号。|姓氏的拼写与重音需要确认，不按中文姓名习惯猜。
¿Y su número de teléfono?|您的电话号码呢？|su 这里是礼貌称呼中的“您的”。
Es el seis, tres, cinco, cero, ocho, uno, dos, cuatro, nueve.|六、三、五、零、八、一、二、四、九。|电话号码逐个数字听，不要把连续数字当作一个数词。
Perdone, ¿el cuarto número es cero u ocho?|不好意思，第四个是零还是八？|cuarto=第四；o 在 ocho 前常写 u 避免连续 o 音。
Es cero. El quinto es ocho.|是零，第五个是八。|el cuarto/el quinto 在这里省略 número。
Gracias. Le envío la confirmación por mensaje.|谢谢，我给您发消息确认。|le 指收件者，la confirmación 是直接宾语。''','''姓氏是什么？|García|García 无重音|García 重音写在 a|0|说话者特意指出 tilde en la í。
第四个数字是什么？|0|8|4|4|纠正信息是 Es cero。
怎么发送确认？|消息|邮寄包裹|当面通知|5|por mensaje 说明渠道。''','听数字时把位置和数值分开记录：“第四个”不是数字四。重音符号属于拼写，不应因为中文没有这一符号就忽略；姓名和地址应主动复核。')
dl('A2-1','昨天的行程：把事件按顺序说清','A2','''Ayer salí de casa a las ocho y tomé el autobús.|昨天八点出门，然后乘公交。|salí/tomé 把动作作为有边界的整体推进叙事。
Llegué al centro a las nueve, pero la oficina abrió a las diez.|九点到市中心，但办公室十点才开。|llegué 与 abrió 对应不同主语、人称、词类。
Entonces desayuné en un café y compré el periódico.|于是我在咖啡馆吃早餐，买了报纸。|entonces 说明应对；desayuné/compré 都是 yo。
Después volví a la oficina y entregué los documentos.|之后回办公室交了材料。|volver 的简单过去时 volví 没有现在时 vuelvo 的 ue。
¿Terminaste todo por la mañana?|上午都办完了吗？|terminaste 是 tú 的 -ar 简单过去时。
Sí, terminé a las once y regresé a casa.|是，十一点办完回家。|重音区别 terminé（我办完了）与 termine（虚拟式）。''','''办公室几点开门？|十点|九点|八点|1|abrió 的主语是 la oficina，不能把 llegada 时间代替开门时间。
等候时做了什么？|吃早餐并买报纸|回家睡觉|在办公室学习|2|两个事件由 y 连接。
几点办完？|十一点|十点|九点|5|terminé a las once 给出结果时间。''','画出八点出门、九点到、十点开门、十一点办完四个节点，再把动词放到节点上。要背的不是所有中文“了”，而是叙事如何一步步向前推进。')
dl('A2-2','小时候的生活与一次变化','A2','''Cuando era niña, vivía en un pueblo y caminaba a la escuela.|小时候住在村里，走路上学。|era/vivía/caminaba 描述过去阶段的背景与习惯。
Mi abuela preparaba la comida mientras nosotros jugábamos.|奶奶做饭时，我们在玩。|mientras 把两个展开中的过去活动并列。
Un verano nos mudamos a la ciudad y cambié de escuela.|一个夏天搬到城市，我转了学。|nos mudamos/cambié 把变化视作事件节点。
Al principio estaba nerviosa, pero pronto hice amigos.|起初紧张，但很快交到了朋友。|estaba 描述状态，hice 推进事情的发展。''','''小时候如何上学？|步行|坐飞机|乘地铁|0|caminaba a la escuela 是过去的常规方式。
什么时候搬家？|一个夏天|昨天晚上|每个星期|2|Un verano 是一个叙事节点，不是每个夏天。
刚搬去时心情怎样？|紧张|生气|冷漠|3|al principio 指最初阶段，nerviosa 表紧张。''','先把“当时生活是什么样”与“后来发生了什么变化”分两栏。不要把有时间长度的内容都塞进未完成时，也不要认为每个动作都必须用简单过去时。')
dl('A2-3','已经做完和还没做完','A2','''Esta semana he leído dos artículos y he escrito un resumen.|这周读了两篇文章，写了摘要。|he 后用 leído/escrito；escrito 是不规则分词。
¿Has enviado el resumen a la profesora?|把摘要发给老师了吗？|has 对应 tú，enviado 不随 resumen 变人称。
Todavía no. Lo he terminado, pero no lo he revisado.|还没有，写完了但还没检查。|terminar/revisar 是不同动作，否定范围不能混淆。
Yo ya lo he revisado. Si quieres, lo vemos juntos.|我已经检查完我的了，愿意的话我们一起看你的。|ya 与 todavía no 对照；lo 的所指随语境变化。''','''这周读了几篇文章？|两篇|一篇|三篇|0|dos artículos 是数量线索。
摘要发出了吗？|还没有|已经发出|昨天发出|2|Todavía no 回答是否发送，不是否写完。
还有哪一步没做？|检查|写完摘要|阅读文章|2|no lo he revisado 表检查未完成。''','先听动作清单，再给每项标记完成/未完成。He terminado 并不蕴含 He enviado；完成时的语法形式不能代替对整句信息的理解。不同地区也可能用简单过去时讲这些经历。')
dl('A2-4','代词如何接住对话里的物品','A2','''¿Tienes el libro de Ana? Ella lo necesita hoy.|有 Ana 的书吗？她今天需要。|lo 回指 el libro，不是 Ana。
Sí, lo tengo aquí. Se lo llevo esta tarde.|有，在这里，下午给她带去。|le+lo 变 se lo；se 这里不是自己。
¿Puedes dárselo antes de las cinco?|能五点前给她吗？|原形 dar 可后接两个代词形成 dárselo，需重音。
Claro. También le enviaré un mensaje para avisarla.|可以，我还会发消息通知她。|le 是消息的接收者；un mensaje 才是直接宾语。''','''lo 在第一句指什么？|书|Ana|今天|0|先找代词前出现的可回指名词。
什么时候带书？|今天下午|明天早上|上周|1|esta tarde 表今天下午。
se lo 中 se 为什么出现？|le 在 lo 前改为 se|表示书自己移动|表示复数书|1|双代词组合的形式规则不等于反身意义。''','每次看到代词先写出它代替谁/什么，再看次序。对比 Le doy el libro 与 Se lo doy，替换后人和物都还在，只是用短代词接住。')
dl('A2-5','比较两套住房','A2','''Este piso es más pequeño que el otro, pero es más luminoso.|这套比另一套小，但更明亮。|más…que 用来比较，不是 más…como。
El otro está más lejos del trabajo y cuesta cien euros más.|另一套离工作地更远，还贵一百欧元。|más lejos 说距离；cien euros más 说价格差。
La cocina de este es tan grande como la del otro.|这套厨房和另一套一样大。|tan…como 表同等程度；la del otro 省略 cocina。
Entonces prefiero este: es menos caro y tardo menos en llegar.|那我选这套，更便宜，上班也更快。|menos caro 不等于贵；tardar en+原形表花时间做。''','''哪套更明亮？|正在看的这套|另一套|两套都没有窗|0|este 与 más luminoso 相连。
另一套贵多少？|一百欧元|十欧元|一千欧元|1|cien 与 mil 的量级不同。
两个厨房大小怎样？|一样大|这套更小|另一套没有厨房|2|tan grande como 是同等比较。''','比较时先确认双方是谁，再确认维度：面积、光线、距离、价格。不要因为出现 más 就一律译为更好，也不要把 menos caro 误译成更贵。')
dl('A2-6','委婉请求与计划','A2','''¿Podrías ayudarme a reservar una habitación?|能帮我订个房间吗？|podrías 是条件式，语气比直接命令缓和。
Claro. ¿Para qué fechas la necesitas?|当然，哪几天需要？|para qué fechas 问日期；la 回指 habitación。
Del doce al quince de mayo. Me gustaría una habitación tranquila.|五月十二到十五日，想要安静的房间。|del/al 为缩合；me gustaría 是常用委婉意愿。
Llamaré al hotel esta tarde y preguntaré si queda alguna.|下午给酒店打电话，问还有没有。|llamaré/preguntaré 表计划；si 这里是“是否”，不等于假设条件。''','''入住日期是哪段？|五月十二到十五日|五月十五到十二日|十二月五日|2|日期与月份分开听，注意 del…al… 的范围。
想要什么房间？|安静的|最大的|带泳池的|2|tranquila 描述期望，不是酒店已确认的事实。
何时联系酒店？|今天下午|下个月|昨天|3|esta tarde 说明计划时间。''','先学会完整的请求句框 ¿Podrías…? 和 Me gustaría…，再拆出助动词、原形与宾语。礼貌不只由一个时态决定，por favor、称呼和语调也参与表达。')
dl('A2-7','起点、时长与变化','A2','''Vivo aquí desde dos mil veinte y estudio español desde hace seis meses.|从2020年住这里，学西语已经六个月。|desde+起点；desde hace+到现在的时长。
¿Y cuándo empezaste a trabajar en esta empresa?|什么时候开始在这家公司工作？|cuándo 问起始事件，用 empezaste。
Hace dos años. Antes trabajaba en otra ciudad.|两年前，之前在另一座城市工作。|hace+时长可定位过去；trabajaba 展开过去背景。
Entonces ya conoces bien el barrio, ¿no?|那你应该已经很熟悉这片街区了吧？|conocer 地方不等于 saber 做某事。''','''西语学了多久？|六个月|六年|从六岁起|0|desde hace seis meses 表持续到现在的时长。
何时入职？|两年前|2020年一定入职|上个月|2|居住起点与入职起点是不同事件。
之前在哪里工作？|另一座城市|本公司同一办公室|没有工作|2|otra ciudad 指不同的城市。''','先给时间信息贴标签：日历起点、经过多久、多久以前。Vivo desde 2020、estudio desde hace seis meses、empecé hace dos años 各回答不同的问题。')
dl('A2-8','此刻在做什么','A2','''¿Puedes hablar ahora? Estoy esperando el autobús.|现在能说话吗？我在等公交。|estar+副动词展开此刻过程。
Un momento, estoy leyendo un correo importante.|等一下，我在读重要邮件。|leer 的副动词是 leyendo，不是 leiendo。
Vale. Mis compañeros están preparando la reunión.|好的，同事们在准备会议。|están 随 compañeros 复数变化，preparando 不变人称。
Ya he terminado. Te llamo en cinco minutos.|我已读完，五分钟后给你打电话。|从进行状态转到完成；te llamo 在清楚安排语境指稍后行动。''','''第一个人正在等什么？|公交|火车|朋友的信|0|esperando el autobús 是当前动作。
同事们在做什么？|准备会议|等公交|读同一封信|2|主语发生了变化，别把两个活动混淆。
何时打电话？|五分钟后|五点|五天后|3|en cinco minutos 是从现在起的间隔。''','进行结构的变位发生在 estar；副动词不按主语改成 -ando 的其他人称。还要学会什么时候不用进行结构：日常习惯 Trabajo aquí 常比 Estoy trabajando aquí 更合适，意义取决于语境。')
dl('A2-9','没有、任何、某个','A2','''¿Hay alguna farmacia abierta cerca de aquí?|附近有开着的药店吗？|alguna 与阴性单数 farmacia 一致。
No hay ninguna en esta calle, pero hay una en la plaza.|这条街没有，但广场有一家。|ninguna 的否定范围只在 esta calle。
No tengo ningún problema en caminar hasta allí.|我走过去没问题。|ninguno 在阳性单数名词前缩为 ningún。
Entonces sigue recto. No necesitas tomar ningún autobús.|那直走即可，不需要坐任何公交。|no…ningún 是正常的否定呼应，不是两个否定等于肯定。''','''这条街有营业药店吗？|没有|有两家|有一家|1|不能忽略地点范围。
哪里有药店？|广场|这条街|车站里面|1|pero 后提供替代地点。
需要坐公交吗？|不需要|必须坐|只能坐公交|3|No necesitas…ningún 明确否定必要性。''','先找否定词与它限定的对象，再找地点和范围。西语 no…nada、no…nadie、no…ninguno 是常见否定呼应，不能套英语教材里“双重否定错误”的简化说法。')
dl('A2-10','叙述一个地方过去有什么','A2','''Antes había un mercado aquí, pero ahora hay una biblioteca.|以前这里有市场，现在有图书馆。|存在义 haber 用 había/hay，不随后面名词变化。
¿Había muchas tiendas en el mercado?|市场里原来有很多店吗？|即使 tiendas 复数，标准存在结构仍用 había。
Sí, y siempre había mucha gente los sábados.|有，周六总是很多人。|gente 为集合单数；los sábados 是习惯。
El año pasado hubo una reforma y cambió todo el edificio.|去年改造了一次，整栋楼都变了。|hubo 把发生的改造当整体事件；había 展开旧背景。''','''现在这里是什么？|图书馆|原来的市场|医院|0|ahora hay 与 antes había 对照。
以前周六怎样？|人多|始终关门|没有商店|2|siempre 与 los sábados 构成过去常态。
何时改造？|去年|每周六|2020年确定如此|3|El año pasado 是事件时间。''','先区分辅助动词 haber 与存在义 haber，再决定是否需要人称一致。Había tiendas 与 Ellas habían comprado 的 haber 做的是两种工作。')
dl('B1-1','错过电话：过去之前发生的事','B1','''Cuando llegué a casa, mi hermana ya había salido y no pude hablar con ella.|回到家时姐姐／妹妹已出门，没能说上话。|había salido 早于 llegué；pude/ no pude 把结果作为整体。
¿No habíais quedado en hablar a las ocho?|不是约好八点说话吗？|habíais quedado 早于这次回家；vosotros 的助动词为 habíais。
Sí, pero ella había recibido una llamada urgente y tuvo que irse.|约了，但她早前接到急电，只好走。|haber 分词不与 llamada 一致；tuvo que+原形表过去必要。
Después me escribió y acordamos hablar al día siguiente.|后来她写信，我们约好第二天再聊。|al día siguiente 以叙事中的那天为参照，不一定是今天的明天。''','''回家和出门哪个先发生？|她先出门|回家先发生|完全同时|0|ya había salido 把出门放在过去参照点之前。
为何离开？|收到急电|忘了名字|不喜欢聊天|2|llamada urgente 是原因信息。
最后约到何时？|第二天|当天八点已聊完|一年前|3|al día siguiente 随叙事参照移动。''','画两层时间线：叙事前发生的事放上层，回家、发现、写信等叙事节点放下层。过去完成时解决相对时间，不是只给所有更久远的动作贴标签。')
dl('B1-2','愿望、建议与主语变化','B1','''Espero que el viaje salga bien y que llegues antes de la reunión.|希望旅途顺利，也希望你会前到。|espero que 引出愿望；salga/llegues 为现在虚拟式。
Yo quiero llegar temprano, pero necesito que me envíes la dirección.|我想早点到，但需要你发地址。|同主语 quiero+原形；换主语 necesito que+变位。
Te la envío ahora. Es importante que lleves el documento original.|现在发给你，带原件很重要。|te la 顺序为人后物；es importante que 表评价。
Perfecto. Si hay algún retraso, te aviso.|好，若有延误就通知你。|现实可能条件 si+直陈式，不因前面出现虚拟式而全句乱换。''','''需要对方发什么？|地址|旅行照片|酒店账单|1|la dirección 是直接宾语。
需要带什么？|文件原件|只带复印件|不带文件|2|original 限定所需文件种类。
quiero llegar 为什么不写 quiero que yo llegue？|此意图的主语相同，通常用原形|虚拟式永远不能有 yo|llegar 没有变位|1|不要把便利规则扩大为绝对禁令。''','先在每个小句旁写主语：我希望／旅行顺利；我想／我到；我需要／你发送。主语与触发结构比“句子看起来不确定”更可靠。')
dl('B1-3','找房：确定对象和目标条件','B1','''Busco un piso que tenga balcón y que esté cerca del metro.|我找有阳台、靠近地铁的房子。|尚未确定的目标特征常用虚拟式 tenga/esté。
Conozco un piso que tiene dos balcones, pero está bastante lejos.|我知道一套有两个阳台，但挺远。|对已识别对象作断言，用 tiene/está。
Prefiero uno que no cueste más de ochocientos euros.|想要不超过八百欧元的。|uno 省略 piso；cueste 表期望筛选条件。
Entonces te avisaré cuando encuentre algo que encaje.|那找到合适的会通知你。|尚未发生的 cuando 用 encuentre，主句可用将来式。''','''第一个人已找到特定住房吗？|还在寻找符合条件的|已签合同|已经搬入|0|Busco un piso que… 描述目标，不断言目标已存在并确定。
已知那套有几个阳台？|两个|一个|没有|1|tiene dos balcones 是关于已知房子的断言。
预算上限多少？|八百欧元|八十欧元|八千欧元|2|no…más de 标记上限。''','比较的不是“客观真实/绝对虚假”，而是说话者怎样呈现先行对象：已识别并断言，或尚待寻找与筛选。对同一名词换语气会改变听者的理解。')
dl('B1-4','指导别人操作','B1','''Abre el archivo y guarda una copia antes de cambiar nada.|打开文件，改任何东西前先保存副本。|abre/guarda 是肯定 tú 指令。
¿Puedo borrar esta carpeta? Ya no la necesito.|能删文件夹吗？已经不需要了。|la 回指 carpeta；ya no 表不再。
No la borres todavía. Comprueba primero si contiene documentos compartidos.|先别删，先看里面有没有共享文件。|否定命令 borres，代词 la 放在前面；comprueba 为肯定指令。
De acuerdo. Cuando termine, te la enseño para que la revises.|好，做完给你看，方便你检查。|cuando termine 为未发生；para que revises 表目的且主语变化。''','''修改前先做什么？|保存副本|删除原件|关闭电脑|0|antes de cambiar nada 前要 guarda una copia。
现在能直接删文件夹吗？|先不要|必须立即删除|已经删掉|2|todavía 提示暂缓，不是永久禁止。
为什么给对方看？|请对方检查|让对方付费|更改名字|3|para que la revises 表目的。''','给指令分“肯定”和“否定”两条路线：Abre/No abras，Guárdalo/No lo guardes。动词形式和代词位置要一起核对，不能只添加 no。')
dl('B1-5','表达保留意见','B1','''Creo que la propuesta es útil, aunque necesita algunos cambios.|我觉得方案有用，但要作一些调整。|creo que 常以直陈式呈现判断；aunque 引出让步。
No creo que sea suficiente reducir el precio; también importa la calidad.|不觉得降价就够，质量也重要。|no creo que 的常见表达使用虚拟式 sea。
Entiendo tu punto. Sin embargo, los datos muestran que el coste ha subido.|懂你的意思，不过数据表明成本上升了。|sin embargo 转折；mostrar que 在这里作证据断言。
Entonces revisemos ambas cosas antes de tomar una decisión.|那决定前两方面都检查一下吧。|revisemos 是 nosotros 的共同建议，不是过去时。''','''第一个人怎样评价方案？|有用但需调整|完全无用|无需任何变化|0|aunque 后的保留不能忽略。
第二个人认为只降价够吗？|不够|足够|没有提价格|1|No creo que sea suficiente 是否定充分性。
最后建议是什么？|同时检查价格和质量|直接否决所有方案|只看个人喜好|3|ambas cosas 回接两方面信息。''','分清“我判断X”和“我不认可X”的信息立场，练 Creo que es 与 No creo que sea；再加入承认对方观点和证据，不把辩论变成简单对错选择。')
dl('B1-6','如果有条件，会怎样','B1','''Si tuviera más tiempo, haría un curso intensivo este verano.|有更多时间的话，今年夏天会读强化课。|tuviera 提假设条件，haría 给结果。
Yo iría contigo si no trabajara los fines de semana.|如果周末不用工作，我会和你去。|条件从句也能放在结果之后；no trabajara 是假设限制。
¿Y si estudiáramos juntos una hora cada martes?|如果每周二一起学一小时呢？|¿Y si…? 可提出协商方案；estudiáramos 注意重音。
Eso sí sería posible. Aunque no tengamos todo el verano, podemos avanzar.|这倒可行，虽不能用整个夏天，也能进步。|可行性与反事实/未确定安排要结合完整语境，不逐词机械贴标签。''','''最初的限制是什么？|时间不足|没有教材|不认识老师|0|Si tuviera más tiempo 指时间条件。
谁周末要工作？|第二个说话者|第一个必然工作|没人工作|1|Yo iría contigo 的 yo 对应当前第二个说话者。
最后提出的学习安排是什么？|每周二一小时|每天八小时|整个暑假不上班|2|cada martes 和 una hora 给频次与时长。''','把条件和结果标成不同颜色，再互换语序。重点是维持 si+tuviera/trabajara 与 haría/iría 的配合；不要因为中文都能译“会”就两边都用条件式。')
dl('B1-7','在诊所描述症状','B1','''Desde ayer me duele la garganta y me duelen los oídos.|昨天起嗓子痛，耳朵也痛。|doler 与疼痛部位一致：garganta 单数、oídos 复数。
¿Tiene fiebre? ¿Ha tomado algún medicamento?|发烧吗？吃过药吗？|tener fiebre 是固定搭配；完成时问相关既往情况。
No tengo fiebre. He tomado agua, pero todavía no he tomado nada para el dolor.|没发烧，喝了水，还没吃止痛药。|no…nada 为否定呼应；不能把 agua 当药。
Entiendo. Vamos a revisar los síntomas antes de decidir qué hacer.|明白，先检查症状再决定怎么办。|ir a+原形表示接下来安排；这里是语言材料，不提供用药建议。''','''哪些部位痛？|嗓子和耳朵|脚和膝盖|头和手|0|先找 doler 的主语，不能只听见 me 就忽略部位。
发烧了吗？|没有|有高烧|没有说明|2|No tengo fiebre 明确否定。
为什么耳朵用 duelen？|los oídos 为复数|说话者有两个人|过去时规则|0|doler 这类结构按疼痛部位变位。''','把“我”当感受者 me，把疼痛部位当语法上的主语来核对动词。就医还要表达起始时间、持续性和已采取的行为；不要用课堂对话代替专业判断。')
dl('B1-8','用关系词避免重复','B1','''Esta es la ciudad donde viví cuando era estudiante.|这是我学生时代住过的城市。|donde 引出地点关系从句，不带疑问重音。
¿Es el lugar del que me hablaste ayer?|就是你昨天讲的地方吗？|hablar de 要保留介词，de+el que→del que。
Sí. La profesora con la que estudié todavía trabaja allí.|是的，当时教我的老师仍在那里工作。|con la que 保留“与谁一起学”的 con。
Me gustaría conocerla y visitar la escuela que aparece en tus fotos.|想认识她，也去照片中的学校看看。|conocerla 中 la 指老师；que 后限定学校。''','''donde 指向什么？|城市这个地点|老师这个人|昨天这个时刻|0|关系词必须回接合适的先行词。
老师现在还在那里工作吗？|还在|已经退休|未提及|2|todavía trabaja 明确持续。
为什么 del que 中有 de？|hablar de 的结构要求|所有关系词都要 de|因为 ciudad 为阴性|1|介词来自从句里的动词搭配，不是任意添加。''','恢复为两句短句：Viví en esta ciudad；Me hablaste de ese lugar；Estudié con esa profesora。再合成从句，介词的来源就更清楚，不必死背“复杂关系词表”。')
dl('B1-9','持续多久、重复多久','B1','''Llevo dos años estudiando español, pero empecé a hablarlo con frecuencia hace seis meses.|学了两年西语，但六个月前才开始经常说。|llevar+时段+副动词描述持续；empezar a+原形为起点。
Yo sigo teniendo dificultades con los pasados, aunque ya los entiendo mejor.|过去时仍有困难，但理解比以前好。|seguir+副动词表继续；teniendo 非人称变化位置。
He vuelto a escuchar la misma entrevista y ahora reconozco más expresiones.|又听了同一访谈，能认出更多表达。|volver a+原形表再次，不是一定回到某地。
Entonces no dejes de practicar: compara lo que puedes hacer ahora con lo de antes.|那就继续练，比较现在与以前能做什么。|dejar de+原形表停止，否定后是“别停止”。''','''西语总共学了多久？|两年|六个月|两周|0|口语使用时长与总体学习时长不同。
volver a escuchar 表什么？|再次听|必须回家听|已经不再听|2|volver a+原形构成重复意义。
建议比较什么？|现在和以前能做的事|只比较打卡数|只看单词总数|3|能力证据是实际任务表现。''','把 llevar/seguir/volver a/dejar de 看成对动作阶段的描述：持续、继续、再次、停止。先给整个结构找意义，再决定后面的非限定形式。')
dl('B1-10','se 的不同角色','B1','''En esta librería se venden libros usados y se reparan mapas antiguos.|这家书店卖旧书，也修旧地图。|被动 se 结构中 libros/mapas 是复数主语，配 venden/reparan。
¿Se puede pagar con tarjeta o solo se acepta efectivo?|能刷卡还是只收现金？|poder+原形整体，se acepta efectivo 的主语为单数 efectivo。
Se puede pagar con tarjeta. También se atiende a estudiantes por la tarde.|可以刷卡，下午也接待学生。|se atiende a estudiantes 为非人称结构，不能见复数就一律改动词。
Perfecto. Mi hermano se lava las manos antes de tocar los libros viejos.|好，兄弟碰旧书前先洗手。|se lava 是另一个自复用法，与前面被动/非人称不同。''','''卖什么书？|旧书|只卖新书|只卖地图|0|usados 修饰 libros。
能刷卡吗？|能|不能|未回答|2|回答首句明确肯定。
se atiende a estudiantes 为什么不是本例的被动复数？|带人称 a 的非人称结构|estudiantes 是单数|所有 se 后永远单数|2|先判断结构，不能套一条“见复数就变复数”的总规则。''','先判断 se 做什么工作，再做一致：自复、被动、非人称、或双代词里的 le→se。一个短词承载多种结构，不能统称“自己”。')
dl('B2-1','转述改变的是参照','B2','''Ayer Elena me dijo: «Mañana enviaré el informe desde aquí». Hoy seguimos en la misma oficina.|昨天 Elena 说“明天从这里发报告”，今天仍在同一办公室。|引号内 mañana/here 依说话当时的参照。
Entonces puedes contar que ayer dijo que enviaría el informe hoy desde aquí.|那可说她昨天说今天会从这里发报告。|enviaría 从过去看将来；hoy 对应昨天的 mañana；here 地点未变可保留。
¿Siempre hay que cambiar todos los tiempos y todos los adverbios?|必须把所有时态与副词都改变吗？|siempre/todos 是需要警惕的绝对范围。
No. Hay que reconstruir quién habla, cuándo y dónde, y si la información sigue vigente.|不，要重建谁、何时、何地在说，以及信息是否仍有效。|参照与信息立场决定转述形式，不是机械替换表。''','''原话中的 mañana 是现在的哪天？|今天|昨天|一周后|0|原话发生在昨天，因此原话的明天是今天。
为什么 aquí 可以不变？|地点没有改变|aquí 永远不能变|因为是将来式|0|对话明确仍在同一办公室。
转述需要核对什么？|说话者、时间、地点与有效性|只替换动词|只去掉引号|3|要把人称与时空参照一起重建。''','先写原话时间轴，再写转述时间轴。Mañana→hoy 与 aquí 是否变化是两个独立判断；不要拿“所有现在时必变过去”替代语境分析。')
dl('B2-2','过去的遗憾和现在的影响','B2','''Si hubiera salido diez minutos antes, habría alcanzado el tren de las ocho.|要是早十分钟出门，就赶上八点的车了。|过去反事实条件与结果：hubiera salido / habría alcanzado。
Pero el tren se retrasó, así que, aunque llegaste tarde a la estación, pudiste subir.|可是车晚点了，所以虽然到站晚，还是上车了。|后句提供新事实，可能推翻听者最初推断。
Tienes razón. Lo que perdí fue la conexión de las nueve, no el primer tren.|没错，错过的是九点的接续车，不是第一班。|lo que…fue 聚焦结构，纠正事件对象。
Entonces habría sido mejor comprobar todo el itinerario, no solo la salida inicial.|那本该查整个行程，而不只是首班发车。|habría sido mejor 对过去方案作评价。''','''实际是否上了第一班车？|上了|没有|没说清|1|不能只依据第一句假设就忽略随后明确的事实修正。
真正错过什么？|九点的接续车|八点第一班车|所有交通|2|no el primer tren 排除了误解。
教训是什么？|核查完整行程|永远不坐火车|只看第一班时间|3|todo el itinerario 的范围大于 salida inicial。''','反事实句常诱导听者推断现实，但理解整段时还要接受后文的纠正。先弄清实际发生什么，再分析形式，不能反过来让语法标签替你编事实。')
dl('B2-3','尚未发生的时间与让步','B2','''Cuando llegue el último documento, podremos cerrar el expediente; hasta entonces debemos esperar.|最后一份文件到后才能结案，此前得等。|未发生的 cuando 从句用 llegue，主句 podremos 表结果。
Aunque el plazo termine mañana, no podemos afirmar que todo esté listo sin revisarlo.|即便期限明天到，也不能没检查就宣称都准备好。|让步与否定断言中的语气需要各自判断。
En cuanto lo recibamos, comprobaré si falta alguna firma.|一收到就检查是否缺签名。|en cuanto+虚拟式；si 这里表示是否，不是反事实条件。
De acuerdo. Si falta algo, avisaremos al equipo antes de enviarlo.|好，若缺东西，发送前通知团队。|现实可能条件使用 falta，不因整段有虚拟式就全改。''','''什么时候能结案？|最后文件收到并满足流程之后|仅因明天到期|现在立即|0|llegue el último documento 是必要的时间条件。
收到后先检查什么？|是否缺签名|是否可以涨价|是否更换公司|2|falta alguna firma 是核查对象。
Si falta algo 属于哪种？|现实可能条件|过去反事实|“是否”宾语从句|3|同一个 si 在上下文可承担不同功能。''','对每个连接词分别画括号：cuando（时间）、aunque（让步）、si（是否/条件）。一个句子中可能同时有直陈式与虚拟式，不能按全文统一换语气。')
dl('B2-4','正式邮件如何提出可执行请求','B2','''Estimada señora López: Le escribo para solicitar información sobre los requisitos de inscripción.|尊敬的 López 女士，来信咨询报名要求。|正式称呼、来意与主题先交代，不先写含糊情绪。
Le agradecería que me indicara si es necesario presentar una copia compulsada del título.|如能告知是否需提交学历的认证副本，不胜感激。|agradecería que+过去未完成虚拟式是正式委婉请求。
Asimismo, ¿podría confirmar el plazo y el medio de pago admitido?|也请确认期限与可用付款方式。|asimismo 加并列事项；podría+原形提出具体请求。
Quedo a la espera de su respuesta. Muchas gracias por su atención. Atentamente, Lin.|期待回复，感谢关注，此致，Lin。|结束语与前面正式语体协调；不是越长越礼貌。''','''来信咨询什么？|报名要求|旅游投诉|招聘薪资|0|requisitos de inscripción 是主题。
对学历副本的要求已确认了吗？|尚在询问|已经确认不需要|已经提交完|1|si es necesario 表是否，不能误当已断言必要。
还询问哪两件事？|期限和付款方式|课程颜色和天气|老师年龄和地址|2|plazo 与 medio de pago 分别是时间和渠道。''','正式表达应做到对象清楚、事项可答、语体一致。先写简洁的来意，再把每个请求对应成对方可明确回答的问题，而非堆砌“高级”连接词。')
dl('B2-5','数据、偏好与因果','B2','''La encuesta incluyó a cincuenta alumnos de una sola escuela; treinta prefirieron estudiar por la mañana.|调查同校五十人，三十人更喜欢上午学。|样本范围与数量先于结论；prefirieron 是偏好。
El titular dice que estudiar temprano mejora el rendimiento de todo el mundo, pero no midieron resultados.|标题说早学提高所有人成绩，可调查没测结果。|todo el mundo 扩大人群；mejora 把相关偏好改造成因果。
Sería más preciso decir que, en esta muestra, un sesenta por ciento declaró esa preferencia.|更准确应说在该样本中六成自述偏好如此。|限定样本、百分比、信息来源和测量内容。
Además, harían falta otras medidas antes de recomendar el mismo horario a todos.|而且要向所有人推荐同一作息前，还需其他指标。|harían falta 是谨慎评估需要，不是已完成证据。''','''调查测了什么？|偏好|实际成绩提升|所有人的睡眠|0|prefirieron/declaró 提示自述偏好。
三十人占五十人的多少？|60%|30%|50%|2|计算依据为30/50，不是把人数当百分比。
标题有什么问题？|扩大人群并把偏好当因果|只是缺少重音|准确反映所有证据|1|结论超过测量范围。''','把数字读懂后，还要问“数据量了什么、谁被调查、结论扩大到谁”。高级阅读不是只认识 más/muestra，而是能用语言区分观察、解释和证明。')
dl('B2-6','协商中先确认再反驳','B2','''Si he entendido bien, propones reunirnos a las nueve porque después tienes otra cita.|若理解没错，你提议九点开会，因为之后另有安排。|先复述对方理由，避免反驳一个并非对方主张的观点。
Exacto, aunque podría cambiar esa cita si fuera imprescindible.|对，不过必要时可改另一个约。|aunque 补充余地；si fuera 给假设条件。
Yo no llegaría antes de las nueve y media. ¿Te parece que enviemos los documentos antes y hablemos a las diez?|我九点半前到不了，先发材料十点聊行吗？|明确自己的限制，再提出具体替代方案。
Me parece bien. Dejemos por escrito la hora para que nadie se confunda.|可以，写清时间免得误会。|dejemos 为共同建议；para que 表目的。''','''第一个人的原建议是几点？|九点|九点半|十点|0|原建议与最后方案是不同信息。
第二个人的到达限制是什么？|九点半前到不了|必须八点走|整天不在|2|no llegaría antes de 限定最早时间。
最终怎么安排？|先发材料，十点谈|仍九点，不发材料|直接取消|3|Me parece bien 接受前一句的整体方案。''','协商的完整链条是复述—确认—说明限制—提出可行替代—记录共识。每一步给别人修正的机会，比只学一句“我不同意”更能维持交流。')
dl('B2-7','事件被动与结果状态','B2','''Las cartas fueron enviadas el lunes por la oficina central, según el registro.|记录显示信件由总部周一发出。|ser+分词为事件被动；enviadas 随阴性复数 cartas 一致。
Sin embargo, dos sobres están abiertos y todavía no sabemos quién los abrió.|不过两个信封开着，还不知道谁打开。|estar+分词描述结果状态；abiertos 随阳性复数 sobres。
Se han revisado los números de seguimiento, pero no se ha localizado el paquete.|查了跟踪号码，但尚未找到包裹。|被动 se 一致与 haber+分词不变并存，ha/han 要看主语。
Entonces conviene describir lo comprobado sin atribuir responsabilidades que aún no están claras.|所以应描述已核实情况，别给尚未明确的责任下结论。|conviene+原形给审慎建议。''','''信何时发出？|周一|昨天必然如此|尚未发出|0|el lunes 给明确发送时间。
现在已知什么？|两个信封开着|已知谁打开|包裹已找到|1|状态已知，但施事者未知。
为什么 enviadas 是阴性复数？|与 cartas 一致|与 oficina 一致|haber 后都用阴性|0|这是 ser 被动，不是 haber 后的固定分词结构。''','用三组对照避免混淆：Han enviado cartas（haber+分词不变）；Las cartas fueron enviadas（事件被动一致）；Las cartas están abiertas（结果状态一致）。')
dl('B2-8','复杂关系结构仍要找清先行词','B2','''La investigadora cuyos artículos leímos dará una conferencia en el centro donde trabajas.|我们读过其文章的研究者，会在你工作的中心讲座。|cuyos 与 articles 阳性复数一致，不与女研究者一致。
¿Es la autora con la que hablaste después del congreso?|就是你会后聊过的作者吗？|con la que 保留 hablar con 的介词。
Sí. El proyecto sobre el cual escribió acaba de recibir financiación.|是，她写过的那个项目刚获资助。|sobre el cual 的性数跟 proyecto；acabar de+原形表刚发生。
Me interesa conocer los datos en los que se basa su conclusión.|想了解她结论依据的数据。|basarse en 保留 en；los que 回接 datos。''','''cuyos 跟谁保持一致？|artículos|investigadora|conferencia|0|拥有关系中的 cuyo 与被拥有名词一致。
项目刚发生什么？|获资助|被关闭|结束会议|2|acaba de recibir financiación 给近时事件。
最后想了解什么？|结论依据的数据|作者的年龄|场馆颜色|3|en los que 与 basarse en 连接证据来源。''','复杂关系词不是为了把句子拉长。先恢复简单句：leímos sus artículos；hablaste con ella；se basa en esos datos，再确定先行词、介词与一致。')
dl('B2-9','识别地区人称，避免混搭','B2','''En Buenos Aires, mi amiga suele decir «vos tenés» y «vení» cuando me invita.|在布宜诺斯艾利斯，朋友常说 vos tenés、vení。|这里展示一种常见 voseo，不宣称所有 vos 地区都这样。
En Madrid, otro amigo dice «tú tienes» y usa «vosotros tenéis» al hablar con varias personas.|马德里的朋友说 tú tienes，对多人说 vosotros tenéis。|单复数与地区称呼一起观察，不把 usted 与 vosotros 混为一格。
Yo aprendí «ustedes tienen» para varias personas, pero entiendo las otras formas.|我学的是多人用 ustedes tienen，也能听懂其他形式。|理解多种形式不要求自己每句话随意混用。
Lo importante es escuchar el contexto y mantener una variedad coherente al hablar.|要听语境，自己输出保持一种协调形式。|地区差异通常不是高低优劣关系。''','''示例中的 vos tenés 来自哪种语境？|布宜诺斯艾利斯朋友的习惯|所有国家统一规则|只用于古代|0|案例有明确地域与个人范围。
ustedes 对应哪个形式？|tienen|tenéis|tenés|2|ustedes 使用第三人称复数形式。
输出建议是什么？|先稳定一种，逐渐识别其他|每个词随机换地区|把其他变体都判错|3|coherente 指协调一致，不是排斥差异。''','把人称意义、所用代词、动词形式分别记：tú/tienes，vos/tenés（本示例），vosotros/tenéis，ustedes/tienen。新数据库六人称表未覆盖全部 voseo，应明确范围而非假装全收。')
dl('B2-10','截止点之前完成，或对过去作推测','B2','''Para el viernes habremos terminado el borrador, pero la revisión completa llevará otra semana.|周五前草稿会完成，完整审阅还要一周。|将来完成时相对截止点；完成草稿不等于完成全项目。
¿Crees que Marta ya lo habrá leído? No ha respondido al mensaje.|觉得 Marta 已经读过了吗？她还没回消息。|habrá leído 此处为对过去的推测，不是确定事实。
Puede que lo haya visto, aunque quizá no haya tenido tiempo de revisarlo.|可能看过，但也许没时间仔细审。|虚拟式完成形式与可能性、已完成关系结合。
Entonces no demos por hecho que está aprobado; confirmémoslo antes de enviarlo.|那别当作已批准，发出前先确认。|否定/肯定共同建议的代词位置不同：no demos…/confirmémoslo。''','''周五前承诺完成什么？|草稿|完整审阅|全部批准|0|borrador 与 revisión completa 是不同阶段。
Marta 已经读过是事实吗？|只是推测|已经得到确认|她明确说没有|1|问题句与后文 puede que 维持不确定性。
发出前应做什么？|确认批准情况|假定沉默就是批准|忽略审阅|3|no demos por hecho 禁止把未核实当既成事实。''','时间形式也可以编码推测。先判断该句是在给截止承诺，还是推测已发生事件，再看完成关系。最后把“看过、审阅、批准”三个不同动作分开理解。')
(root/'content/rich-dialogues.json').write_text(json.dumps(dialogs,ensure_ascii=False,indent=2))
(root/'src/rich-dialogues.js').write_text('const richDialogues='+json.dumps(dialogs,ensure_ascii=False).replace('<',r'\u003c')+';\n')
print('Authored dialogues',len(dialogs),'turns',sum(len(x['turns']) for x in dialogs),'checks',sum(len(x['questions']) for x in dialogs))
