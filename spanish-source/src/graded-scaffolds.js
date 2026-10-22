// Unit-specific teaching notes and controlled practice; CEFR labels are intended targets, not certificates.
const gradedScaffolds={};
function us(id,prerequisites,glossary,parts){
 const u=units.find(u=>u.id===id),w=workshops[id];if(!u||parts.length!==3)throw Error('Bad unit scaffold '+id);
 const packet={unit:id,prerequisites,words:glossary.split('|').map(x=>{const [es,zh]=x.split(':');return{es,zh}}),steps:parts.map(([reason,prompt,answer],i)=>{
 const q={id:'micro-'+id+'-'+i,unit:id,level:u.level,cat:u.topic,kind:'input',hint:'按本小步要求，只填写目标形式；保留必要重音。',prompt,answer,explain:reason.replaceAll('｜',' ')+' '+w.rows[i][2]};u.questions.push(q);questionBank.push(q);byId.set(q.id,q);
 return{example:w.rows[i][0],translation:w.rows[i][1],originalNote:w.rows[i][2],paragraphs:reason.split('｜'),question:q};})};gradedScaffolds[id]=packet;
}
us('A1-1',['foundation-sound','foundation-bridge-people'],'hola:你好|llamarse:叫作|ser:是|vivir:居住|nombre:名字|amiga:女朋友；女性朋友',[
['先把 me llamo 当作介绍名字的常用结构，me 指与说话者相关的代词，llamo 才是动词。不要把 me 当成物主词 mi。｜换成“她叫”时两处都变：se llama；初学先练我和你，不要求把所有 se 的用法混在一起。','介绍自己的名字：Me ___ Elena.（llamarse）','llamo'],
['来源结构是 ser de+地点。Soy 已经表示第一人称，不必每句都写 yo；de 后接国名，不把英语 from 放进来。｜同一国家可以换不同主语：Soy de China / Ana es de China。变的是 ser，不是国家名称。','Ana ___ de China.（ser，现在时）','es'],
['居住用 vivir en+地点。先认原形 vivir，再找 yo，当前形式是 vivo。Madrid 是住处，不决定动词人称。｜问 ¿Dónde vives? 时疑问词带重音；回答 Vivo en Madrid，把地点补回即可，不必把问题逐词倒放。','我住这里：___ aquí.（vivir，现在时）','vivo']]);
us('A1-2',['foundation-gender','foundation-bridge-plural','foundation-topic-agreement'],'habitación:房间|mesa:桌子|libro:书|blanco:白色的|rojo:红色的|nuevo:新的',[
['先看存在句里要引入什么：一张桌子→una mesa。mesa 为阴性，描述它的 blanco 变 blanca，不由说话者性别决定。｜hay 是介绍存在的形式；本例先不加入位置变化，专门检查 una—mesa—blanca 三处一致。','Hay una mesa ___.（blanco）','blanca'],
['dos 说明有两本，libro 要变 libros；颜色形容词 rojo 跟这两本书配成 rojos。冠词不是每句都必须出现，数词可以限定名词。｜把数量换成一本时说 un libro rojo：先改数量和名词，再检查形容词，不要只删最后一个 s。','dos libros ___.（rojo）','rojos'],
['先前已经引入的书可继续称 los libros；描述这一组书用 son nuevos。son 来自主语复数，nuevos 来自书的阳性复数。｜如果改成 la mesa，动词 es 与形容词 nueva 都要重查；不是看到一个复数词就让整段所有动词复数。','Los libros ___ nuevos.（ser）','son']]);
us('A1-3',['foundation-core','foundation-bridge-people'],'estudiante:学生|escuela:学校|cerca:附近|clase:班级；课|contento:高兴的|casa:家',[
['Soy estudiante 回答身份问题。单独介绍职业或学生身份时常不用不定冠词，不能照英语每次加一个 un。｜比较 Estoy contenta：它在说状态。先问要提供哪种信息，比背“永久还是暂时”更可靠。','身份：Yo ___ estudiante.','soy'],
['学校是双方可识别的对象，句子在说明它的位置，所以用 estar。escuela 单数，当前形式 está，书面重音不能省。｜换成 las escuelas 时才用 están；cerca de mi casa 是位置补语，不负责决定主语的人称。','Mi escuela ___ cerca de casa.','está'],
['hay 把班里有学生这件事引入，doce estudiantes 不让它变复数。hay 与用 estar 定位已知学生的句子信息组织不同。｜先说 Hay doce estudiantes，再问 ¿Dónde están los estudiantes?，可以看到“引入存在”和“定位对象”的区别。','En la clase ___ doce estudiantes.','hay']]);
us('A1-4',['foundation-bridge-present-ar','foundation-bridge-present-er-ir'],'vivir:住|trabajar:工作|tienda:商店|estudiar:学习|noche:夜晚|hablar:交谈',[
['从 vivir 取掉 -ir 得 viv-；我对应 -o，所以 vivo。不是在完整 vivir 后再加 o，也不是因为 Valencia 是单数就决定动词。｜先保持住处不动，依次换 Yo vivo / Ella vive / Nosotros vivimos，观察只有人称变化的影响。','vivir，现在时，nosotros：','vivimos'],
['Mis amigos 是主语中心，复数对应 viven。mis 修饰朋友的归属，cerca 说明距离，这两项都不替代主语判断。｜改成 mi amiga 时，mis→mi、amigos→amiga、viven→vive；逐项检查比整句凭感觉改可靠。','Mi amiga ___ cerca.（vivir）','vive'],
['hablar 属 -ar，nosotros 用 -amos。todos los días 表每天，是频率信息；todo el día 才是一整天。｜现在时可表达习惯，不需要因为每天重复就改成进行结构。先写固定日程，再在真实对话中替换动作。','每天我们交谈：___ todos los días.（hablar）','hablamos']]);
us('A1-5',['foundation-gustar','foundation-topic-core-verbs'],'gustar:喜欢的结构|libro:书|viajar:旅行|año:年；岁|preparar:准备|examen:考试',[
['me 表体验者我，los libros 才控制 gusta/gustan。把书改成一本，动词要回 gusta；把体验者换成我们，改 nos，动词仍按书决定。｜喜欢一个活动常把原形整体当单数：Me gusta viajar。别把“我”直接套成 gusto。','Me ___ viajar.','gusta'],
['年龄用 tener+数词+años，tengo 配我。veintidós 的重音属于拼写，不是可以省略的装饰。｜身体感受还可说 tengo hambre，而 estoy cansada 是 estar+形容词。中文相似，不代表能混成 soy hambre。','她二十二岁：Ella ___ veintidós años.','tiene'],
['Voy a estudiar 是计划，Tengo que preparar 是义务。两个框架都让后一个动词保持原形，但原因是各自结构，不是所有第二个动词都不变。｜先说自己计划做什么，再说明必须准备什么；换成另一人时只在相应主句重新找主语。','Tengo que ___ un examen.（preparar）','preparar']]);
us('A1-6',['foundation-questions','foundation-topic-core-verbs'],'café:咖啡|euro:欧元|cuánto:多少|repetir:重复|despacio:慢慢地|entender:理解',[
['点餐 Un café, por favor 可以是自然省略请求，不能用它推断所有西语句子都可没有动词。先掌握礼貌请求的交际功能。｜完整说法可用 Quiero un café / ¿Me pone un café? 等，称呼、地区和服务情境会影响选择，不只背一条万能句。','请来杯咖啡：Un café, por ___.','favor'],
['询价 ¿Cuánto cuesta? 中 cuesta 常与被问商品相配；两杯分别询价等语境可能用 cuestan。回答 Son dos euros 则按价格金额组织。｜先分“问商品价格”与“回答金额”，不能因为 euros 复数就让问题中的每个动词都机械复数。','一个咖啡：¿Cuánto ___?（costar）','cuesta'],
['No entiendo 是现在理解困难，不等于对方说错。¿Puede repetirlo más despacio? 用 usted 形式 puede 加原形 repetir。｜lo 指刚才内容，可接在原形后；初学先会请求重复和放慢，再练更长解释，不强迫听不懂时只点头。','¿Puede ___ más despacio?（repetir）','repetir']]);
us('A1-7',['foundation-bridge-clock','foundation-topic-calendar'],'lunes:周一|empezar:开始|hora:时刻|veintiuno:二十一|día:天|estudiar:学习',[
['先分事件安排与当前报时：La clase empieza a las nueve y media。a las 标事件时间，media 是半点，不改成 medio。｜若课程在一点，时间补语换 a la una；empieza 是否单数仍由 la clase 决定，不由九点决定。','La clase empieza ___ las nueve. 只填介词。','a'],
['veintiuno 在阳性名词前常短尾 veintiún：veintiún libros。遇阴性名词则可有 veintiuna。｜数词的拼写与词前位置有关系，不能把背出的孤立 veintiuno 放进所有名词组；先确认后面是什么名词。','二十一本书：___ libros. 只填数词。','veintiún'],
['los lunes 常说每周一；el lunes 常定位语境中的某个周一。todos los días 是每天，和 todo el día 一整天不同。｜学习日程先用习惯现在时，再补时间表达；不因有星期名就把每句话都改成未来时。','每周一：___ lunes. 只填定冠词。','los']]);
us('A1-8',['foundation-topic-prepositions','foundation-topic-commands'],'banco:银行|museo:博物馆|farmacia:药店|detrás:后面|calle:街道|recto:直走地',[
['El banco está al lado del museo 定位已知银行，用 estar。al=a+el，del=de+el；不是把所有冠词都缩合。｜先从 banco 单数选 está，再处理位置短语，避免一口气记整串而不知道每个词的作用。','El banco ___ al lado del museo.','está'],
['detrás de 是位置关系整体。El museo está detrás del banco 中 del 不是新的方向词，而是 de+el。｜如果后接 la farmacia，则是 detrás de la farmacia，不造 dela；换参照物时关系词通常保留，冠词依新名词调整。','detrás ___ la farmacia. 只填介词。','de'],
['Sigue todo recto 是对 tú 的肯定指令，不是普通陈述。用 usted 时可换 siga；否定 tú 则需 no sigas。｜指路还要把转弯、路口和地标按顺序说清。语法形式与路径顺序都正确，对方才真正走得到。','对 usted：___ todo recto.（seguir）','siga']]);
us('A1-9',['foundation-questions','foundation-bridge-people'],'llamarse:叫作|vivir:住|chino:中文；中国的|amiga:女性朋友|no:不|pero:但是',[
['介绍自己可省 yo，但名字、住处、来源各用自己的结构。Me llamo Lin 与 Soy Lin 都能识别身份，学习时先稳定一个框架。｜不要把 me 当成 mi，也不要把介绍名字的 llamo 用作居住谓语；动词承担的意义要先分清。','自我介绍：Me ___ Lin.','llamo'],
['¿Cómo te llamas? 的 cómo 问名字的方式表达，重音保留；te 与 tú 对应，llamas 也配 tú。｜把问题改为礼貌称呼可用 ¿Cómo se llama?，两处都重查，不只换一个代词。','礼貌询名：¿Cómo se ___?','llama'],
['Ana no habla chino 中 no 在变位动词前；pero 引出后续对比。habla 配 Ana，不因后面跟我一起学就改成 hablamos。｜一段话有多个小句，每句重新找主语；中文省略多时，西语仍需让词尾与指代清楚。','Ana no ___ chino.（hablar）','habla']]);
us('A1-10',['foundation-sound','foundation-topic-question-order'],'país:国家|María:人名|hablar:说话|ayer:昨天|dónde:哪里|vivir:居住',[
['país 的 í 标明重读，并使相邻元音分成 pa-ís；不是一切元音相邻都拆开。先把读音、音节和书面符号对应。｜这个词的复数 países 保留重音；遇到新词不能按中文近似音猜重音，而要查真实词形。','国家，单数，保留正确重音：','país'],
['hablo 与 habló 的重读和语法信息都不同。这里先用听辨检验符号意识，后续再系统学过去时，不要求本课从零背完整过去表。｜句中若是 ayer María habló，不能把 ó 当作可省的键盘符号；省掉会得到另一形式。','ayer，María，hablar，简单过去：只填动词。','habló'],
['¿Dónde vive Ana? 的 dónde 问信息缺口，Ana 单数决定 vive。直接问句成对问号不能漏。｜La ciudad donde vive 中 donde 则回指地点，通常不带重音；看到相同字母要先辨功能，不是永久加或永久去重音。','直接问住处：¿___ vive Ana?','dónde']]);
us('A2-1',['foundation-past','foundation-topic-prepositions'],'ayer:昨天|ir:去|comprar:买|comer:吃|volver:返回|autobús:公交车',[
['Ayer fui al centro 把去市中心当作整体过去事件，fui 是 ir 的简单过去 yo 形式；它也与 ser 的过去形式同形，要靠补语理解。｜先画事件时间线，再选形式，不因同形就把所有 fui 都译成“我是”。方向用 a，al 是缩合。','Ayer ___ al centro.（ir, yo）','fui'],
['Compré un libro y comí con mi hermana 中两件事都从边界回看，且同一主语我分别控制 compré/comí。｜规则 -ar 的 yo 过去尾 -é，-er 的 yo -í；重音要写。不是句首已标过去，后面的动词就可留原形。','Ayer ___ con mi hermana.（comer, yo）','comí'],
['Volvimos juntos 把一组人的返回作为过去整体，volvimos 与我们配合。en autobús 是方式，不是目的地。｜先排列买书、吃饭、返回，再用 después 等词连接；不是连接词越多越好，而是让先后和指代清楚。','Ayer ___ en autobús.（volver, nosotros）','volvimos']]);
us('A2-2',['foundation-past','foundation-topic-relative-time-place'],'niñez:童年|vivir:居住|playa:海滩|verano:夏天|encontrar:找到|concha:贝壳',[
['De niña vivía cerca del mar 从童年内部展开生活背景，vivía 是 imperfecto。不能用“持续很久”作唯一解释，十年的生活也可从边界回看成 viví。｜先说明叙事视角，再学 -ía 的形式；de niña 描述童年阶段，不直接强迫整段每个动词同一时态。','De niña ___ cerca del mar.（vivir, yo，背景）','vivía'],
['Íbamos a la playa cada verano 说过去习惯，ir 的未完成过去为 iba/ibas/iba/íbamos/ibais/iban。｜每年夏天是频率线索，但若明确汇总一个有边界时期的三次出行，也可能用简单过去；不能看到重复就自动判未完成。','Cada verano ___ a la playa.（ir, nosotros，过去习惯）','íbamos'],
['Un día encontré una concha 把某次发现作为推进故事的事件。背景与事件用不同时态，是在清楚组织故事，并不矛盾。｜将“那时经常去海边”与“有一天找到贝壳”分别圈出，再用一个连接词接起来，避免只按动作长短选。','某次发现：Un día ___ una concha.（encontrar, yo）','encontré']]);
us('A2-3',['foundation-past','foundation-topic-nonfinite'],'semana:周|leer:阅读|artículo:文章|escribir:写|todavía:仍然|terminar:完成',[
['Esta semana he leído dos artículos 将事件联系到当前一周的框架，he 是 haber 的 yo 现在时，leído 是分词。｜leído 的 í 需保留；不能写 he leí 把两种动词形式混合。地区对现在完成和简单过去的分工并不完全相同。','He ___ dos artículos.（leer，分词）','leído'],
['He escrito un correo 中 escribir 的常用分词是 escrito，不规则分词单独记。haber 承担人称，分词不按宾语性数变。｜换成 varias cartas 仍是 he escrito，而不是 he escritas；后者把状态形容词一致误搬进复合时态。','He ___ una carta.（escribir，分词）','escrito'],
['Todavía no he terminado 表到当前参照尚未完成；ya he terminado 则表示已完成。no 放在整个助动词结构前。｜先决定要表达已完成还是尚未完成，再选 ya/todavía no，不把它们当随机装饰；其他时间框架和地区用法继续结合语境。','尚未完成：Todavía no ___ terminado.（haber, yo）','he']]);
us('A2-4',['foundation-bridge-direct','foundation-bridge-indirect','foundation-pronouns'],'necesitar:需要|libro:书|dar:给|tarde:下午|mensaje:消息|agradecer:感谢',[
['Ana necesita un libro，接着 Yo lo tengo 用 lo 替换那本书。先识别直接宾语 el libro 的阳性单数，再选 lo。｜不是 Ana 女性就用 la：代词这里代表书，不代表 Ana。每次替换都先恢复完整名词。','Yo ___ tengo.（代替 el libro）','lo'],
['Doy el libro a Ana 同时替换时，el libro→lo，a Ana→le；le 在 lo 前变 se，因此 Se lo doy。｜se 的形式不显示接收者是单数还是复数；需要语境澄清。不能把这处 se 自动理解成自己。','Doy el libro a Ana→___ lo doy.','se'],
['Ana me escribe para darme las gracias 中 me 指接收消息的人。darme 是原形后接代词，并非所有宾语代词都必须前置。｜先看是变位动词前还是允许后接的原形结构，再选位置；不能既前置又后接同一代词。','Ella ___ escribe.（给我，填代词）','me']]);
us('A2-5',['foundation-adjectives','foundation-topic-agreement'],'mochila:背包|barato:便宜的|caro:贵的|grande:大的|espacio:空间|elegir:选择',[
['La mochila azul es más barata que la roja 比较两个背包的价格：más…que 形成比较，barata 与 mochila 配阴性。｜不能把所有更都写 más mejor；mejor 已是特殊比较形式。本小步先保持比较对象一致，别把价格与容量交叉比较。','La azul es más barata ___ la roja.','que'],
['La roja tiene más espacio 比较的是名词数量，使用 más+名词，不是 muy espacio。grande 描述尺寸，mucho espacio 描述空间量。｜先确定需要形容词还是数量结构，再改性数；中文都说大，不表示两种表达能逐词替换。','Tiene ___ espacio que la azul.（更多）','más'],
['Elijo la roja porque necesito llevar muchos libros 用 porque 给原因。la roja 省略了 mochila，仍按这个阴性名词配合。｜先给选择，再说具体需要，能让比较服务于真实决策；不只堆三个比较级却没有说明为什么。','选择理由：La elijo ___ necesito espacio.（本题使用 porque）','porque']]);
us('A2-6',['foundation-topic-core-verbs','foundation-topic-commands'],'mes:月|viajar:旅行|museo:博物馆|reserva:预订|confirmar:确认|poder:能；可以',[
['Voy a viajar 由 voy 承担我和当前计划，viajar 保持原形。下个月的时间词不让后面的每个动词都必须变将来时。｜比较 Viajaré 可有陈述未来或预测等侧重；本题限定 ir a 框架，真实表达不只一种可能。','El mes que viene voy a ___.（viajar）','viajar'],
['Espero visitar museos 中希望者与参观者同为我，esperar 后用原形。若希望另一人来，可用 Espero que venga，另起有主语的小句。｜不能把 espero 后永远原形或永远虚拟式当作口诀，先辨后面结构与行为者。','同主语希望：Espero ___ museos.（visitar）','visitar'],
['¿Podría confirmar mi reserva? 用条件式 podría 缓和请求，confirmar 仍为原形。这里并非在问过去发生的确认。｜正式程度还来自清楚写出姓名、日期、预订号，而不只是加一个高级时态；不要让对方猜要确认哪项。','委婉请求：¿___ confirmar mi reserva?（poder, usted，条件式）','podría']]);
us('A2-7',['foundation-topic-prepositions','foundation-porpara'],'desde:从……起|hora:小时|minuto:分钟|ayuda:帮助|terminar:完成|gracias:谢谢',[
['Vivo aquí desde 2020 给出起点；desde hace dos años 给出距今延续时长。若情况仍持续，西语常用现在时。｜不要按英语完成时习惯强制所有持续表达加 haber；先判断起点还是时长，再决定完整句。','起点：Vivo aquí ___ 2020.','desde'],
['Estudié durante dos horas 说过程持续两小时；Terminé en diez minutos 说完成所花十分钟。两个时长不是同一个关系。｜先问“活动持续多久”还是“达到终点花多久”，再选常见介词；不是所有中文两小时都配同一个词。','完成花十分钟：Terminé ___ diez minutos.','en'],
['Gracias por ayudarme 用 por+原形给感谢原因；para estudiar 则常说目的。me 附着于 ayudar，表示帮我。｜先区别原因、目的与期限，再回具体搭配；不要看到中文为了就把所有 por/para 随机互换。','Gracias ___ ayudarme.','por']]);
us('A2-8',['foundation-bridge-reflexive','foundation-topic-nonfinite'],'levantarse:起床|leer:读|dejar:停止；留下|volver:再次；返回|seguir:继续|ahora:现在',[
['Me levanto a las siete 中我控制 me 与 levanto 两处。时间 a las siete 不改变主语人称，也不把 me 变成 mi。｜换成 ella 时应 se levanta；先练代词和动词配对，再加入具体时间，避免同时背太多变化。','Ella ___ levanta a las siete.','se'],
['Estoy leyendo 突出当前阅读过程：estar 变位，leer 的副动词是 leyendo。leyendo 不因为女性说话者变为 leyenda。｜普通现在时也可按语境表达当前动作，不能把英语现在进行时规则直接搬来规定所有场合。','Estoy ___.（leer，副动词）','leyendo'],
['Dejé de estudiar 表停止学习；Volví a estudiar 表再次学习；Seguí estudiando 表继续过程。后面的形式由各自框架要求。｜先写出 de+原形、a+原形、seguir+副动词这三个框架，再换一个活动，不要把所有动词串都变成原形。','Volví a ___ después.（estudiar）','estudiar']]);
us('A2-9',['foundation-questions','foundation-topic-question-order'],'problema:问题|nadie:没有人|nada:没有什么|alguno:某个；一些|ninguno:没有一个|poco:少量',[
['No hay ningún problema 是否定存在。ninguno 在阳性单数名词前常短尾为 ningún，重音也要调整。｜No hay problemas 与 No hay ningún problema 都可自然，受控题指定后接单数名词才要求这一短尾形式。','No hay ___ problema.（ninguno）','ningún'],
['Nadie vino 与 No vino nadie 都可表达没人来：否定词前置时通常不再加 no；后置时与 no 呼应。｜这不是数学上两个否定等于肯定。先稳定位置规则，再学复杂否定范围，避免把 No entiendo todo 误读成完全不懂。','___ vino.（没有人，句首）','nadie'],
['Algunas preguntas son difíciles 中 algunas 配 preguntas 阴性复数。Practico un poco 表练一点，与 pocas preguntas 限定名词数量是不同结构。｜先判词在修饰动作还是名词，再做性数变化；不能把中文一点一概写成 poco 后接任何词。','___ preguntas son difíciles.（alguno）','algunas']]);
us('A2-10',['foundation-topic-impersonal','foundation-topic-core-verbs'],'frío:冷；寒冷|estación:车站|gente:人群|sol:太阳；阳光|billete:票|necesitar:需要',[
['Ayer hacía frío 用 hacer 的无人称天气结构，hacía 为过去背景，不需要补英语 it 对应代词。｜天气可以铺叙事背景，也可以作为整体事件讲述，不只看 ayer 就让所有动词简单过去。先选择视角。','昨天的寒冷背景：Ayer ___ frío.（hacer）','hacía'],
['Había mucha gente 表车站存在很多人；存在义 haber 的规范主线不随后面数量变 habían。gente 本身通常为语法单数。｜助动词 haber 的 habían comido 是另一结构，不能把两者混成“habían 永远错误”或“复数都用 habían”。','En la estación ___ mucha gente.（过去背景的存在）','había'],
['Hace sol 与 Necesito comprar un billete 分别是天气和有明确主语的需要。necesito 配我，comprar 受结构约束为原形。｜一段话里允许并用不同结构；每句重新确认是否有可恢复主语，再选形式。','Necesito ___ un billete.（comprar）','comprar']]);
us('B1-1',['foundation-past','foundation-topic-relative-time-place'],'llegar:到达|salir:离开；出发|tren:火车|llover:下雨|paraguas:雨伞|finalmente:最后',[
['Cuando llegué a la estación 把我的到达设为过去参照，llegué 是推进事件的简单过去。llegar a 连接目的地，gue 维持相应发音。｜先定参照点，再处理更早事件；不是把句中先出现的动词自动理解成现实中先发生。','Cuando ___ a la estación…（llegar, yo，叙事事件）','llegué'],
['El tren ya había salido 表火车离开早于我的到达。había 是 haber 的未完成过去，salido 为分词，二者一起表达相对过去的已完成。｜不是事情很久就一定过去完成；必须有一个过去参照，才看得出“更早”。','到达时火车已走：El tren ya ___ salido.','había'],
['Llovía y no tenía paraguas 展开当时天气与个人背景。最后 Llamé a una amiga 又推进故事。｜用三个颜色分别标背景、到达、此前已发车，再选择时态。混合时态是信息组织，不是要求每段只能一种过去形式。','当时的背景：No ___ paraguas.（tener, yo）','tenía']]);
us('B1-2',['foundation-subjunctive','foundation-topic-object-clauses'],'aconsejar:建议|descansar:休息|organizar:安排|horario:时间表|esperar:希望|dormir:睡觉',[
['Le aconsejo que descanse：建议者是我，休息者是对方，que 从句有自己主语；影响他人行动的框架常用虚拟式。｜先恢复 a mi amiga，再选 le；不要把主句 aconsejo 的 yo 人称套给 descanse。','Le aconsejo que ___.（descansar, ella）','descanse'],
['Es importante que organice un horario 对她安排行为作评价；评价框架与从句主语分别影响语气、人称。｜不是因为安排一定不会发生才虚拟。实际已经做过的事也可置于情感评价从句，不能用真假开关解释全部语气。','Es importante que ella ___ un horario.（organizar）','organice'],
['Espero que duerma bien 中 dormir 在当前虚拟式有词干变化；希望对象是她，选 duerma。若我希望自己休息可说 Espero descansar。｜先辨同主语原形或换主语从句，再查词干变化，避免只背“espero 后虚拟式”遗漏结构条件。','Espero que ella ___ bien.（dormir）','duerma']]);
us('B1-3',['foundation-relative','foundation-subjunctive'],'buscar:寻找|piso:公寓|habitación:房间|metro:地铁|balcón:阳台|caro:昂贵的',[
['Busco un piso que tenga dos habitaciones 描述尚未确定的目标，关系从句用虚拟式把条件呈现为筛选标准。｜并不是没有冠词或出现 un 就自动虚拟；关键是先行词是否被作为已识别对象断言。先问“是在列要求，还是描述看过那一套”。','尚未确定目标：Busco un piso que ___ dos habitaciones.（tener）','tenga'],
['Quiero que esté cerca del metro 的主语是公寓，不是说话者；位置用 estar，且在意愿框架里取虚拟式 esté。｜这是两个决定：estar/ser 的意义选择与直陈/虚拟的语气选择。选对动词却用错语气，仍需分别定位原因。','意愿：Quiero que el piso ___ cerca del metro.','esté'],
['Vi uno que tiene balcón 可以把已看见的某套公寓作为对象陈述现有特征。tiene 与前面筛选条件 tenga 形成信息立场对比。｜同一段里先列未知目标、再描述实物并不矛盾。回答练习时读清“未确定要求”与“对已知对象作断言”的条件。','对已看见公寓断言：El piso que vi ___ balcón.（tener）','tiene']]);
us('B1-4',['foundation-topic-commands','foundation-topic-relative-time-place'],'rellenar:填写|comprobar:核对|dato:数据；信息|enviar:发送|cerrar:关闭|confirmación:确认',[
['Rellena el formulario 是对 tú 的肯定指令；若写给 usted，可用 rellene。先统一称呼，避免一段说明 tú 和 usted 无理由跳换。｜肯定 tú 的外形虽像现在时第三人称，却在对读者发指令，句法任务由语境决定。','对 usted：___ el formulario.（rellenar）','rellene'],
['Antes de enviarlo, comprueba los datos：antes de 后用原形；lo 替换表格并附着于 enviar。主句 comprueba 又是指令。｜先把时间附加结构和主指令分开，不能因为前面出现原形，就让后面所有动词也不变位。','Antes de ___ el formulario…（enviar，填原形）','enviar'],
['No cierres la página hasta que veas la confirmación 是否定指令加未来相关时间界限。cierres 与 veas 分别有自己的语气来源。｜一个由否定命令要求，一个由尚未发生时间从句组织；不要笼统说“整句有 no 所以全部虚拟”。','未来时间界限：hasta que ___ la confirmación.（ver, tú）','veas']]);
us('B1-5',['foundation-logic','foundation-topic-object-clauses'],'creer:认为|grupo:小组|útil:有用的|compartir:分享|sin embargo:然而|aunque:虽然；即使',[
['Creo que estudiar en grupo es útil 对主张作肯定判断；estudiar en grupo 是作为整体的活动，主句后的 es 不按 grupo 里几个人改复数。｜先把主张写清，再分理由。不是每句有 que 就虚拟，也不是高级表达必须更长。','肯定判断：Creo que estudiar en grupo ___ útil.','es'],
['porque 给理由，sin embargo 引出与前面预期相反的补充。小组有用并不排除需要独处，这种限制能使论证更准确。｜先说出两句信息的关系，再选连接词；如果换成 por eso，逻辑会变成结果，不能当同义美化词。','对前面预期作转折：___ embargo, necesito tiempo a solas.','sin'],
['Aunque el curso es caro, me ayuda 将价格贵作为事实背景让步；aunque sea caro 可以有另一种呈现立场。｜看当前说话者是否断言这个条件，以及条件是否作为已知背景；不是 aunque 后一律虚拟或一律直陈。','本题将价格贵明确作为事实陈述：Aunque el curso ___ caro, me ayuda.（ser）','es']]);
us('B1-6',['foundation-topic-conditions','foundation-subjunctive'],'terminar:完成|proyecto:项目|visitar:拜访|familia:家人|vacaciones:假期|organizar:安排',[
['Si termino el proyecto esta semana, visitaré a mi familia 表开放条件。即使事件在未来，si 从句通常用现在直陈式 termino。｜主句未来时 visitaré 表结果，两个小句不需使用相同形式；先区分条件和结果各在说什么。','开放条件：Si ___ el proyecto, visitaré a mi familia.（terminar, yo）','termino'],
['Si tuviera más vacaciones, viajaría a Chile 表更疏远的当前假设。tuviera 与 viajaría 是一套常见搭配，而不是把条件式放在两边。｜这里先识别假设距离，之后再查虚拟式未完成的 -ra/-se 变体；形式变体不改变本例基本关系。','当前假设：Si ___ más tiempo, viajaría.（tener, yo，-ra）','tuviera'],
['Ahora necesito organizar el tiempo 回到当前真实安排，用现在时加原形。假设句不会把整段后续所有事实都拖进虚拟式。｜先在纸上分“实际现状”和“假设愿景”两栏，再对每句选结构，能避免一段话时态机械连锁。','现实需要：Necesito ___ mi tiempo.（organizar）','organizar']]);
us('B1-7',['foundation-gustar','foundation-topic-prepositions'],'interesar:使感兴趣|doler:疼|pie:脚|regalo:礼物|para:给；为了|conmigo:和我',[
['Me interesan las lenguas 中语言是引起兴趣的主语，复数决定 interesan；me 只标体验者。｜换成 la historia 用 interesa；换体验者成我们用 nos，不直接让动词因为我们而复数。把这两种变化分开练。','Me ___ la historia.（interesar）','interesa'],
['Me duelen los pies 与 gustar 型分析相似：疼痛部位 los pies 复数配 duelen。不是 Yo duelo los pies。｜doler 有自己的词干变化，方法可迁移，具体形式仍要查。不要把所有体验句都变成同一个 gusta。','Me ___ los pies.（doler）','duelen'],
['Este regalo es para ti 与 ¿Quieres estudiar conmigo? 分别使用介词后的人称形式和 con 的特殊组合。ti 通常无重音。｜conmigo 不是把 mi 随便黏在 con 后；先记与我、与你的固定形式，再扩展与他、她、我们等。','¿Quieres estudiar ___?（和我，填一词）','conmigo']]);
us('B1-8',['foundation-relative','foundation-topic-relative-time-place'],'curso:课程|tarde:下午|amigo:朋友|trabajar:工作|escuela:学校|cerca:附近',[
['Busco un curso que tenga clases por la tarde 把尚未确定课程的上课安排作为要求，关系从句常用虚拟式。｜不要只看到先行词 un curso 就机械选；若正在陈述一门已识别的课程，可用直陈式说明其实际安排。','尚未确定要求：Busco un curso que ___ clases por la tarde.（tener）','tenga'],
['Mi amigo, que trabaja por la mañana, también quiere venir 中逗号表示补充信息，而非从多个朋友中筛选是哪一个。｜去掉逗号可以改变信息结构；不是仅为读得慢而加逗号。先确定“识别对象”还是“补充说明”，再处理标点。','补充事实：Mi amigo, que ___ por la mañana…（trabajar）','trabaja'],
['La escuela donde estudiamos está cerca 中 donde 回指地点，不用疑问重音。主句主语 escuela 单数配 está，从句 estudiamos 配我们。｜读长句时把从句先括起来，找到主句骨架 La escuela está cerca，再把补充信息放回去。','La escuela donde estudiamos ___ cerca.（estar）','está']]);
us('B1-9',['foundation-topic-prepositions','foundation-topic-nonfinite'],'llevar:持续；带|seguir:继续|repasar:复习|depender:取决于|horario:时间表|trabajo:工作',[
['Llevo dos años estudiando español 从当前回看已持续的学习，llevar 承担人称，estudiando 表持续活动。｜不要把两年当成宾语复数来变 estudian，也不要把 llevar 原形直接放到 yo 后。先记 llevar+时段+副动词框架。','Llevo dos años ___.（estudiar，副动词）','estudiando'],
['Tengo que repasar más 表义务，tener que 后接原形。Sigo leyendo 则是继续阅读过程，用副动词，两种结构不同。｜相同中文继续、需要，不决定西语后续形式；做搭配笔记时同时写上后接哪类动词形式。','Necesito ___ más.（repasar）','repasar'],
['Mi horario depende del trabajo 来自 depender de，del 为 de+el 缩合。介词是动词配价的一部分，不因为中文没有的就删去。｜把 el trabajo 换成 que 从句时仍需核对 de 是否保留；学搭配比只记一个中文“取决于”多一步。','Mi horario depende ___ trabajo.（de+el）','del']]);
us('B1-10',['foundation-topic-impersonal','foundation-bridge-reflexive'],'vender:出售|buscar:寻找|experiencia:经验|barrio:街区|vivir:生活|persona:人',[
['Se venden libros 的 libros 是被出售的受事主语，复数决定 venden。先做主动改写 Alguien vende libros，再看信息焦点如何变化。｜不能把所有 se 都译自己；这句没有书自己卖自己的意思。','Se ___ libros.（vender，被动 se）','venden'],
['Se busca a una persona con experiencia 采用不明确施事者的表达，人称 a 引出人物对象，不直接把它当被动主语。｜对比 Se buscan personas 的结构差异，先分析有没有人称 a 及句法角色，再处理单复数。','Se ___ a personas con experiencia.（buscar，非人称主线）','busca'],
['En este barrio se vive bien 泛指生活方式，没有指出某个确定主语；动词按非人称主线单数 vive。｜把三句分别恢复为出售物品、寻找人员、泛指生活，se 的作用便不相同。不要只用一张 se=自己的词义卡处理。','En este barrio se ___ bien.（vivir）','vive']]);
us('B2-1',['foundation-topic-object-clauses','foundation-past'],'decir:说|mañana:明天|siguiente:接下来的|pedir:请求|esperar:等候|martes:周二',[
['原话周一的 mañana 指周二；如果周二转述为明天，就会把承诺错推到周三。先标原说话时间、转述时间和事件时间三点。｜引用原话可保留其指示词，但转成间接引语时要从当前叙述位置重新定位，不是只改动词结尾。','周一说 mañana，周二转述为“次日”：al día ___.','siguiente'],
['Dijo que vendría 常把原来将来 vendré 调为过去视角的将来，即条件式。不是过去说过的每一句话都必须机械回移；持续有效的事实、当前立场可能保留不同形式。｜先说明本题采用过去叙述视角，再改人称、时态与时间词。','按过去视角：Dijo que ___.（venir，对应原话 vendré）','vendría'],
['Nos pidió que esperáramos 是请求内容，不等同于她说我们已经等。过去请求常接过去未完成虚拟式。｜从句主语我们决定 esperáramos；nos 是被请求者。先区分报告事实、转述疑问、转述请求，再选结构。','Nos pidió que ___.（esperar, nosotros，-ra）','esperáramos']]);
us('B2-2',['foundation-topic-conditions','foundation-past'],'solicitud:申请|tarde:迟；晚|fecha:日期|revisar:核对|entregar:提交|plazo:期限',[
['Envié la solicitud tarde 先把真实事件说清，是过去已发生事实。反事实分析需要这个基准，不能把假设写成历史记录。｜检查申请提交时间与期限，再讨论如果改变条件会怎样；语言形式与事实归属要分开。','真实过去：___ la solicitud tarde.（enviar, yo）','envié'],
['Si hubiera revisado la fecha 用过去完成虚拟式构造与既定过去不同的条件；hubiera 承担时态语气，revisado 保持分词。｜本题指定 -ra 形式；-se 变体在相应语境也可能成立，不用单一输入答案宣布其他规范变体错误。','指定 -ra：Si ___ revisado la fecha…（haber, yo）','hubiera'],
['Habría entregado todo a tiempo 表该假设下原本会完成的过去结果。条件句与结果句有各自结构，不能两边都随意用条件式。｜完成反事实后，再另写现实中今后怎么改进，避免让已经过去的事情像仍可直接改变。','结果：___ entregado todo a tiempo.（haber, yo，条件完成）','habría']]);
us('B2-3',['foundation-subjunctive','foundation-topic-relative-time-place'],'aunque:即使；虽然|llover:下雨|para:为了|poder:能够|reunión:会议|resumen:摘要',[
['Aunque mañana llueva, iremos 将下雨当作不影响决定的让步条件；不是简单因为不知道天气才虚拟。｜若把某个已知事实拿来让步也可用直陈式，但信息呈现不同。本题明确是未来可能障碍，不要求所有 aunque 句一刀切。','未来可能障碍：Aunque mañana ___, iremos.（llover）','llueva'],
['Para que todos puedan llegar 是给另一主体设置目的，从句主语 todos 复数，取 puedan。主句的行动者不控制从句的人称。｜同主体目的常用 para+原形；先比较“我早出发以便我到达”和“安排交通以便大家到达”。','Para que todos ___ llegar.（poder）','puedan'],
['Cuando termine la reunión, enviaremos un resumen 的会议结束尚未发生，时间从句用 termine，主句未来式说明之后发送。｜不能把条件结果规则直接复制成 cuando terminará，也不能把整句所有谓语都改虚拟。每个小句判断自己的功能。','未来相关：Cuando ___ la reunión…（terminar）','termine']]);
us('B2-4',['foundation-topic-object-clauses','foundation-topic-prepositions'],'solicitar:申请；请求|información:信息|agradecer:感谢|horario:课表|adjuntar:附上|atentamente:此致',[
['Le escribo para solicitar información 一开始明确对方和来意，para+原形连接同一个写信者的目的。le 可作礼貌接收者，不需要为了正式强行加长。｜随后具体说哪门课程、哪个日期，减少对方反复追问信息的成本。','Le escribo para ___ información.（solicitar）','solicitar'],
['Le agradecería que me enviara el horario：条件式 agradecería 缓和请求，后接过去未完成虚拟式 enviara。这里请求可以指当前或未来，不因形式像过去就译成已经寄过。｜明确“请寄课表”比堆礼貌套话更重要，语气与具体请求一起检查。','Le agradecería que me ___ el horario.（enviar, usted，-ra）','enviara'],
['Atentamente 等结尾要与关系和机构习惯配合；正式不等于所有词都用最生僻版本。附材料时可用 Adjunto el certificado。｜写完用读者角度检查：谁在写、为什么写、需要做什么、材料在哪里，语法正确还不够。','附上证书：___ el certificado.（adjuntar, yo）','adjunto']]);
us('B2-5',['foundation-logic','foundation-topic-prepositions'],'encuesta:调查|muestra:样本|estudiante:学生|preferir:偏好|resultado:结果|generalizar:推广',[
['Según una encuesta a cincuenta estudiantes 标出来源和被调查对象。a cincuenta estudiantes 不是说问卷本身有五十份就能代表全部人口。｜先圈来源、样本人数、抽样范围，再读结论；证据强度不能仅凭出现数字判断。','根据某调查：___ una encuesta…','según'],
['El 60 % prefiere estudiar por la mañana 报告偏好，不直接测出学习效果。prefiere 的单数在本例按百分比作为整体组织；带明确复数补语时一致还可有别的规范选择。｜别把语言选择题扩成所有百分比永远单数，更别把偏好改写成因果结论。','本题把百分比作整体：El 60 % ___ estudiar por la mañana.（preferir）','prefiere'],
['La muestra no permite generalizar 明确适用范围与限制。否定的是证据能否支撑广泛推论，不是宣布调查毫无价值。｜写谨慎结论时保留调查对象、测量内容与不确定性，可以用 en esta muestra 等范围语，而非只加一个 quizá 装饰。','La muestra no permite ___.（generalizar）','generalizar']]);
us('B2-6',['foundation-logic','foundation-topic-core-verbs'],'proponer:提议|empezar:开始|aclarar:澄清|horario:日程|acordar:商定|reunirse:会面',[
['Lin propone empezar a las nueve 把具体方案作为提议内容，proponer 后本例接原形。九点的时间点用 a las。｜方案不是事实命令；回应前先确认对方限制，避免把语言上的不同意当成人际敌意。','Lin propone ___ a las nueve.（empezar）','empezar'],
['Tras aclarar sus horarios 把先澄清安排作为后续达成协议的前提，tras 后可接原形活动。sus 的归属可能涉及双方，要靠上下文清楚。｜听到否定先复述理解并求证，避免给对方添一个并未表达的理由。语言修复与语法同样需要练习。','Tras ___ sus horarios…（aclarar）','aclarar'],
['Acuerdan reunirse a las diez 才是双方确认的共同方案。reunirse 为原形带代词，se 对应他们，不照抄成 reunirme。｜确认时间、行动人、材料与下一步，才能把协商落到可执行安排；礼貌表达不替代具体信息。','Acuerdan ___ a las diez.（reunirse，填完整原形）','reunirse']]);
us('B2-7',['foundation-passive','foundation-topic-impersonal','foundation-topic-nonfinite'],'carta:信|enviar:寄送|archivar:归档|olvidar:忘记|llave:钥匙|ayer:昨天',[
['Las cartas fueron enviadas ayer 把寄出的信放在主位，ser 被动叙述事件；fueron 配复数主语，enviadas 与 cartas 阴性复数一致。｜若主动句用 Han enviado las cartas，haber 后的 enviado 不随宾语变化。先识别助动结构。','Las cartas fueron ___.（enviar，分词一致）','enviadas'],
['Ahora están archivadas 描述现在归档的结果状态，不直接重演寄送动作。estar 与 ser 的选择关联事件和状态呈现，不只看永久暂时。｜先说现在看到的状态，再讨论是谁何时处理；不要把状态句和事件被动当任意同义替换。','现在信件归档：Están ___.（archivar）','archivadas'],
['Se me olvidaron las llaves 中 las llaves 是语法主语，复数决定 olvidaron；me 是受影响者。这个组织方式可弱化主动施事，但不自动取消责任。｜不能把所有 se+me 译成被我，也不能只因主语在后就用单数。先恢复句子角色。','Se me ___ las llaves.（olvidar，过去事件）','olvidaron']]);
us('B2-8',['foundation-relative','foundation-topic-object-clauses'],'autora:女作者|obra:作品|cuyo:其……的|anuncio:公告|confirmar:确认|hora:时间',[
['La autora cuyos libros leo 中 cuyos 与后面的 libros 配阳性复数，不与女作者的性配。先找拥有者与被拥有对象两层关系。｜不能在 cuyo 后再加定冠词 el/los，也不能把它当疑问词 qué 处理。恢复 Sus libros leo 有助看清指向。','La autora ___ libros leo…','cuyos'],
['No entiendo lo que dice el anuncio 中 lo que 概括公告说的内容，并非代替某个男性对象。dice 的主语是 el anuncio。｜读复杂句时先提取 No entiendo 这个主干，再问不理解什么，答案是整个后续内容，而不是单独一个 que。','No entiendo ___ que dice el anuncio. 只填第一词。','lo'],
['Lo que necesito es confirmar la hora 是焦点结构，把真正的需要放在 es 后。前半句作为整体组织，不是无意义地重复“我需要”。｜写作中用它突出一项关键行动即可，不必每句都套这个结构使文章臃肿。','Lo que necesito ___ confirmar la hora.','es']]);
us('B2-9',['foundation-bridge-people','foundation-topic-stem-patterns'],'vos:地区人称你|tú:你|entender:理解|formalidad:正式程度|variante:变体|preferencia:偏好',[
['Vos hablás 与 Tú hablas 体现不同人称系统，不是给一个正确词随便加重音。常见 voseo 的现在时形式有自己的范式，具体又随地区变化。｜先问伙伴的目标地区和称呼偏好，再决定主动使用哪一套，不能把一种口音当全部拉美。','按本课常见 voseo 示例：vos ___.（hablar）','hablás'],
['Ambos se entienden 中双方作为复数主语，se 在此可表达相互理解；不是每个 se 都指自己或被动。｜判断相互时可尝试解释成“彼此”，并核对动词语义和语境；单凭复数主语仍不足以自动判相互。','相互理解：Ambos se ___.（entender，现在时）','entienden'],
['Revisan el grado de formalidad 说明地区差异与语体差异要分开。某词在一地常见，不代表在正式公函中就一定合适或不合适。｜给机构写信时调整称呼、信息量与请求方式；与朋友聊天时再根据关系选表达，不把所有地方词统一抹掉。','咨询机构的委婉请求：Le agradecería que me ___ el horario.（enviar, usted，-ra）','enviara']]);
us('B2-10',['foundation-past','foundation-subjunctive','foundation-topic-conditions'],'viernes:周五|terminar:完成|alegrar:使高兴|venir:来|revisar:核对|error:错误',[
['Para el viernes habré terminado 从未来周五这个截止点回看完成，habré 是 haber 的未来时，terminado 是分词。｜不是单纯“周五将开始做”，也不是过去完成；先画未来参照点，再把完成放在它之前，形式才有依据。','Para el viernes ___ terminado.（haber, yo，将来完成）','habré'],
['Me alegra que hayas venido 可以评价对方真实已经到来的事实。haya/hayas+分词表示已完成关系，情感框架要求虚拟式。｜这直接说明虚拟式不等于不真实。hayas 配 tú；主句 me 不让从句改成第一人称。','Me alegra que ___ venido.（haber, tú，完成虚拟式）','hayas'],
['Si hubiera revisado antes, habría detectado el error 分出过去反事实条件与其结果。两个 haber 形式分别承担不同语气。｜把未来计划、已发生评价、过去遗憾放在三个独立参照框里，允许同段不同形式；别让一个时间副词统治整段。','结果句：___ detectado el error.（haber, yo，条件完成）','habría']]);
