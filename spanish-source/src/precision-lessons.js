// Further original instruction based on specific textbook rules, with separate learner-facing tasks.
const precisionLessons=[];
Object.assign(supplementObjectives,{
'past-regular':'先选择过去叙事视角，再构造规则 -ar/-er/-ir 简单过去时；能分清词尾相同而时间不同的形式。',
'past-irregular':'把简单过去时的不规则形式按词干、拼写和第三人称变化分类，解释差别而非背混合长表。',
'past-imperfect':'构造未完成过去时，并在习惯、背景、事件与相对时间中选择叙事视角。',
'state-adjectives':'在同一个形容词前比较 ser/estar 所表达的信息，区分身份属性、表现和状态。',
'spelling-sounds':'根据后接元音解释 c/qu、g/gu/gü 的拼写，识别 r/rr、b/v 和地区发音差异。'
});
function precision(...args){supplement(...args);precisionLessons.push(bookSupplementLessons.at(-1))}
precision('past-regular','简单过去时Ⅰ：规则词尾、重音与叙事顺序','A2','过去时间系统',['foundation-past','foundation-bridge-present-er-ir'],['ayer','comprar','comer','vivir'],[
['先选叙事视角，再背词尾',[
'简单过去时 pretérito perfecto simple，也常称 indefinido，把过去事件作为一个有边界的整体呈现。Ayer estudié dos horas 可以把两小时学习作为整体；并非只容纳短动作。时间词提供线索，叙述视角才解释为什么这样组织。',
'先用昨天的三个节点练：出门→买东西→回家。你在推进事件，而不是展开当时背景。若接着补“当时在下雨”，就可能转用未完成过去时。一个段落允许用不同形式承担不同任务。']],
['-ar：先拆原形，再对应六组人称',[
'hablar→habl-，再加 -é/-aste/-ó/-amos/-asteis/-aron：hablé, hablaste, habló, hablamos, hablasteis, hablaron。先练 yo 和 él/ella：hablé 与 habló 都必须写重音；tú 的 hablaste 则不凭感觉加重音。',
'做“我们买了”：comprar 去 -ar→compr-；nosotros 的过去词尾 -amos→compramos。这一格与现在时同形，不能只凭拼写就断定时间；Ayer compramos 与 Todos los días compramos 的时间需要上下文。']],
['-er 与 -ir：这两个类别在规则简单过去时用同套词尾',[
'-í/-iste/-ió/-imos/-isteis/-ieron，comí/comiste/comió/comimos/comisteis/comieron；viví/viviste/vivió/vivimos/vivisteis/vivieron。现在时 -er 与 -ir 在 nosotros 不同，但本课过去时两类这里都为 -imos。',
'先保持主语不变，只换动词类别：yo hablé/comí/viví；再保持动词不变，换成 ella habló/comió/vivió。把两个维度分开练，才能定位是类别错、人称错还是漏重音。']],
['词形同形、不同形，都要回句子判断',[
'vivimos 可以是我们现在住，也可以是我们过去住过；comemos 与 comimos 则已经不同。不要把“nosotros 过去时都和现在相同”当规律，也不能看见相同形式就说作者没变位。',
'限定题目要求“按简单过去时”时，要按该表生成；真实阅读则还看时间范围和叙事推进。estudié / estudiaba 的区别也不只是加哪个词尾，而是有没有把事件当整体或展开背景。']],
['从三个词形到一段可理解的叙事',[
'Ayer salí, compré pan y volví a casa：每个谓语都要与省略的 yo 对应。第一个动词表示过去，不会自动把后面的原形变成合法过去谓语；也不要求每个动词都来自同一规则组。',
'先按真实顺序列事件，再补必要的主语转换。原形、代词、地点关系仍按原结构检查。过去时是整句系统的一部分，不是在每个动词后随意加一段“过去词尾”。']]
],[['Ayer hablamos con Ana.','昨天我们和 Ana 交谈了。','hablamos 在此按 ayer 和叙事语境读为过去整体；词形也可能是现在时。'],['Comí en casa y después escribí una carta.','我在家吃饭，随后写了封信。','两个谓语都配 yo，-er/-ir 的规则过去时同取 -í。'],['Vivió allí diez años.','他/她在那里住过十年。','长时段也能从边界回看为整体，不是只按时长选择未完成。']],['Yo habló ayer','Yo hablé ayer','yo 的 -ar 过去词尾是 -é；habló 为第三人称单数。'],[
bridgeChoice('规则 -er 和 -ir 的简单过去时词尾：','本课使用同一套人称词尾',['本课使用同一套人称词尾','所有时态都一样','由宾语性别决定'],'当前讨论规则简单过去时，不能扩大到全部时态。'),
bridgeChoice('Ayer hablamos 中 hablamos：','可按语境表示过去',['可按语境表示过去','词形与现在相同，所以一定错误','只有 tú 才能用'],'-ar 的 nosotros 当前/过去同形，需看语境。'),
bridgeInput('hablar，简单过去时，yo：','hablé','habl- 加 -é；重音不可漏。'),
bridgeInput('comer，简单过去时，nosotros：','comimos','规则 -er 过去 nosotros 用 -imos，不是现在时 comemos。'),
bridgeChoice('“住了十年”能否用简单过去时？','能，若作为有边界的整体经历',['能，若作为有边界的整体经历','不能，十年太长','只能看动词有没有重音'],'时间长度不替代叙述视角。'),
bridgeOrder('按词块组句：昨天我和 Ana 交谈了。',['Ayer','hablé','con','Ana.'],'hablé 配 yo，con 引出交谈对象。')]);
precision('past-irregular','简单过去时Ⅱ：不规则分组与拼写变化','A2','过去时间系统',['foundation-topic-past-regular','foundation-topic-spelling-sounds'],['tener','hacer','decir','dormir'],[
['先把表拆成几种变化，不背混合名单',[
'ir/ser 共用 fui/fuiste/fue/fuimos/fuisteis/fueron，需要补语和语境区分。dar 的 di/diste/dio/dimos/disteis/dieron 与 ver 的 vi/viste/vio/vimos/visteis/vieron 常用形式也单列。fui、fue、vio、dio 不因表示过去而加书面重音。',
'再分出强词干变化、为保持读音的拼写变化，以及 -ir 第三人称变化。一个词可能同时涉及多个层面。先标“哪种改变”，比看到不认识的过去形式就重背整表更容易迁移。']],
['强词干配一套常见词尾，hacer 的 c/z 要看人称',[
'tener→tuv-，estar→estuv-，poder→pud-，poner→pus-，venir→vin-，saber→sup-，querer→quis-。常见词尾 -e/-iste/-o/-imos/-isteis/-ieron，第一与第三人称单数通常不写规则过去时那种重音：tuve、tuvo。',
'hacer 有 hice/hiciste/hizo/hicimos/hicisteis/hicieron。不是把词干统一记成 hiz- 就造出 hize；第三人称 hizo 的 z 与其他人称的 c 区别，是拼写和发音配合的结果。']],
['j 词干的复数尾少一个 i，不是漏字',[
'decir→dije/dijiste/dijo/dijimos/dijisteis/dijeron；traer→traje…trajeron；conducir→conduje…condujeron。词干已含 j 的这类第三人称复数常用 -eron，不写 dijieron 或 trajieron。',
'先认词干，再选该组词尾；不能把所有不规则词都改成 -eron。tuvieron、vinieron 仍有 i。把 dij- 与 tuv- 并排对照，能看清分组条件。']],
['-car/-gar/-zar/-guar 的 yo：用拼写维持词干音',[
'buscar→busqué，pagar→pagué，empezar→empecé，averiguar→averigüé。这些例子先聚焦 yo 规则过去 -é 前的拼写；不是因为表里出现 qu 就把其他所有人称也改成 busquaste。',
'gu 在 e/i 前通常让 u 不发音；如果要在 averigüé 保留 u 的发音，使用 ü。地区的 c/z/s 发音可能不同，学习拼写时仍按书面形式核对，不把某种口音当作所有地区唯一标准。']],
['-ir 第三人称与元音间的 y，范围各不相同',[
'pedir：pedí/pediste/pidió/pedimos/pedisteis/pidieron；dormir：dormí/dormiste/durmió/dormimos/dormisteis/durmieron。本组变化集中第三人称，不能照搬现在时 pienso 那样的分布。',
'leer 的 leyó/leyeron 与 oír 的 oyó/oyeron 还体现元音间的 y；其他人称如 leí、oí 仍要保留重音。先分组再查具体动词。某个字母变 y，并不等于所有 -ir 动词第三人称都加 y。']]
],[['Tuve tiempo, pero no fui.','我当时有时间，但没去。','tuve 为 tener 强词干，fui 在这里由去的语境理解为 ir。'],['Hice la tarea y Ana hizo la cena.','我做了作业，Ana 做了晚饭。','hice / hizo 的 c/z 随具体词形检查，不统一写成 hiz-。'],['Ellos dijeron que durmieron bien.','他们说睡得很好。','dijeron 为 j 词干组；durmieron 是 dormir 的第三人称变化。']],['hize / dijieron','hice / dijeron','hacer 和 j 词干分别检查，不能用同一机械公式。'],[
bridgeChoice('hacer 的 yo 简单过去时：','hice',['hice','hize','hicí'],'yo 用 hice；第三人称单数才是 hizo。'),
bridgeChoice('decir 的 ellos 简单过去时：','dijeron',['dijeron','dijieron','decieron'],'j 词干的该组第三人称复数取 -eron。'),
bridgeInput('buscar，简单过去时，yo：','busqué','-car 在此 yo 的 -é 前用 qu 保持 /k/。'),
bridgeInput('dormir，简单过去时，ella：','durmió','-ir 的该第三人称过去式 o→u；重音 ó 保留。'),
bridgeChoice('“我看见了”的常用简单过去形式：','vi',['vi','ví','viyó'],'ver 的 yo 为 vi；不因是过去就增加重音。'),
bridgeOrder('组句：他们说实话了。',['Ellos','dijeron','la','verdad.'],'dijeron 的 -eron 是 j 词干组的形式。')]);
precision('past-imperfect','过去未完成时：规则表、三个常用不规则与背景视角','A2','过去时间系统',['foundation-topic-past-regular','foundation-past'],['antes','vivir','ser','ir'],[
['未完成时不是在宣布动作后来没完成',[
'A las ocho estudiaba 把镜头放在当时，展开正在学习的背景，并未告诉你之后有没有学完。Ayer estudié dos horas 则从边界看整段学习。不要从中文“未完成”字面推断所有事件都没结尾。',
'叙事通常让背景、习惯、当时状态与推进事件配合工作。选择时态是在选视角，不是给动词贴固定标签“学习很长所以永远未完成”。']],
['规则 -ar 与 -er/-ir 分开练，再合并到句子',[
'hablar：hablaba/hablabas/hablaba/hablábamos/hablabais/hablaban。-er 与 -ir 同用 -ía/-ías/-ía/-íamos/-íais/-ían，如 comía、vivía。后两类的 í 要保留；hablábamos 的 á 同样属于书面词形。',
'第一、第三人称单数常同形：yo vivía / ella vivía，语境不清时保留主语。不能因为词尾看不出人称，就认为该词没有变位。']],
['三个常用不规则：ser、ir、ver',[
'ser：era/eras/era/éramos/erais/eran；ir：iba/ibas/iba/íbamos/ibais/iban；ver：veía/veías/veía/veíamos/veíais/veían。和 fui/estuve 等简单过去形式分别建立索引。',
'先只换主语练 era→éramos、iba→íbamos，再把身份或去处放回。ver 的 veía 不按常规简单删掉两个字母来处理，按这套高频范式学习更稳妥。另外要逐格核对：tú escribías 有 -s，yo/él escribía 没有；不能把单数同形扩大到 tú。']],
['习惯、背景与时间长短不是一一对应',[
'De niña iba a la biblioteca 说童年习惯；El año pasado fui a la biblioteca tres veces 汇总过去一年三次，仍可简单过去。重复不必然未完成，长时间也不必然未完成。',
'Vivía allí cuando conocí a Ana 展开当时生活背景；Viví allí diez años 把十年作为整体。两种说法可能描述同一人生阶段的不同侧面，解释不能只说一个永远对、另一个永远错。']],
['把背景和事件各自找出主语，再连接',[
'Mientras estudiábamos, sonó el teléfono：我们学习是背景，电话响推进画面。estudiábamos 配我们，sonó 配电话，两个动词不仅时态不同，主语也不同。',
'不是看见 mientras 就自动把全句都改成未完成。先画正在展开的背景，再标进入画面的事件，最后选择形式。若语境允许另一视角，应说明意思变化而不是只按关键词判分。']]
],[['Éramos estudiantes.','我们那时是学生。','ser 的 nosotros 未完成过去为 éramos。'],['Íbamos a la biblioteca los sábados.','我们以前每周六去图书馆。','ir 的 íbamos 描述过去习惯；并非只因有复数星期就固定时态。'],['Estudiábamos cuando sonó el teléfono.','我们学习时电话响了。','背景 estudiar 与事件 sonar 分别配自己的主语和视角。']],['未完成时=事情后来一定没完成','未完成时可把过去内部展开','语法名称不能替代叙事视角。'],[
bridgeChoice('estudiaba 能否表示后来完成了的学习背景？','能，形式本身不宣布后来没完成',['能，形式本身不宣布后来没完成','绝对不能','只能用于将来'],'背景视角不等于对现实结尾作否定。'),
bridgeChoice('把十年居住当完整已结束阶段：','Viví allí diez años.',['Viví allí diez años.','只有 Vivía 永远正确','Vivir allí yo diez años.'],'时段长短不替代整体或内部视角的选择。'),
bridgeInput('ser，未完成过去时，nosotros：','éramos','常用不规则 ser→éramos，保留重音。'),
bridgeInput('ir，未完成过去时，nosotros：','íbamos','ir→íbamos，不能造 iríamos 来作本题的未完成过去；iríamos 为条件式。'),
bridgeChoice('过去一段时期的习惯，按本题从内部回看：','Antes leía mucho.',['Antes leía mucho.','Antes leer yo mucho.','Antes leeré mucho.'],'本题指定过去习惯视角，leer 的未完成为 leía。'),
bridgeOrder('组句：我们学习时电话响了。',['Estudiábamos','cuando','sonó','el','teléfono.'],'前句背景配 nosotros，电话为 sonó 的单数主语。')]);
precision('state-adjectives','ser/estar＋形容词：同一词换动词，信息会怎样变？','A1','核心动词用法',['foundation-core','foundation-topic-agreement'],['listo','aburrido','bueno','verde'],[
['先分“把人或物归为哪类”与“怎样呈现其状态”',[
'Ana es simpática 说对人的一种描述；Ana está cansada 说她的状态。这是入门主线，但不能把 ser/estar 简化为永久与暂时。Soy joven 会变化，Está muerto 却可能持续。',
'讨论形容词时还要看词义、习惯搭配及语境；并非每个形容词都能自由配两个动词。先看有意义的对比例句，别为追求对称造不自然句子。']],
['listo 与 aburrido：换动词经常换的是具体意思',[
'Es lista 常说聪明；Está lista 常说准备好了。Es aburrida 常描述令人无聊；Está aburrida 常说她感到无聊。中文“是”字不能替你选择动词。',
'先问是在描述人的特点、给人的效果，还是这个人所处的状态。然后再让形容词与被描述者一致：男性可为 listo/aburrido，女性 lista/aburrida；与谈话者性别无关。']],
['bueno 与 verde：别把多义词变成一条唯一翻译',[
'Es bueno 可以评价好、善良、品质等；Está bueno 在食物语境常说好吃，也有其他地区或人物用法。Es verde 可说颜色，Está verde 在水果语境可说未熟；还可能有引申义。',
'本课把语境写清楚才能判断。不能将“estar bueno=好吃”贴到任何人物上，也不能宣布 verde 每次都是未熟。学的是搭配中的意思，不是换一条更长的中西词表。']],
['形容词的一致与动词的选择是两步',[
'Las alumnas están listas：先按准备好的意思选 estar，再按 alumnas 复数取 están，最后按阴性复数取 listas。不是先凭词尾看出 femenino，就推断必须 estar。',
'El agua está fría 中 agua 仍为阴性，fría 按它配合；el 是特定冠词条件。不同规则会在一句中同时出现，分别判断才不会用“一个例外”解释全部变化。']],
['用最小对比检验自己是否理解',[
'只换 ser/estar，先说明两句各在说什么，再换人物性数。比如 Ana es lista / Ana está lista，从聪明转为准备好；变复数 Las alumnas están listas 时，再检查形容词与动词。',
'实际表达有时两种选择都合语法但意思不同。本课受控题会给出聪明、准备好、感到无聊等意图，避免把另一种有意义的句子笼统判成绝对错误。']]
],[['Ana es lista. Ana está lista.','Ana 聪明。Ana 准备好了。','同一形容词在不同动词框架中呈现不同意思。'],['La película es aburrida. Ana está aburrida.','电影无聊。Ana 感到无聊。','前句描述效果，后句描述体验者状态。'],['La fruta está verde.','水果还没熟。','本例指定水果成熟状态；verde 也可有颜色等含义。']],['所有长期状态都必须 ser','先看信息、词义与搭配','时间长短不是万能选择条件。'],[
bridgeChoice('明确表示 Ana 已准备好：','Ana está lista.',['Ana está lista.','Ana es lista（欲表达此处准备好）.','Ana hay lista.'],'estar lista 在此为准备好；ser lista 通常说聪明。'),
bridgeChoice('谈“电影给人无聊的感觉”：','La película es aburrida.',['La película es aburrida.','La película tiene aburrida.','La película hay aburrida.'],'描述电影的性质或效果，用该 ser+形容词结构。'),
bridgeInput('明确准备状态：Las alumnas ___ listas.','están','estar 与复数主语配 están；形容词也配阴性复数。'),
bridgeInput('明确说 Ana 感到无聊：Ana está ___.（aburrido）','aburrida','形容词描述 Ana，为阴性单数；不是描述谈话者。'),
bridgeChoice('水果语境 La fruta está verde 常可指：','水果未熟',['水果未熟','任何场合都只能指绿颜色','所有 verde 都必须 estar'],'意义来自词与结构、具体语境。'),
bridgeOrder('组句：Ana 准备好了。',['Ana','está','lista.'],'根据准备状态选 estar，再做人称和性数一致。')]);
precision('spelling-sounds','拼读细则：c/qu、g/gu/gü、r/rr 与 b/v','A1','发音与书写',['foundation-sound'],['casa','queso','guitarra','vergüenza'],[
['先听声音，再看它在什么字母环境里出现',[
'西语拼写与发音联系紧密，但“完全一个字母一个固定音”会误导。c 与 g 的读法受后面元音影响，h 通常不发音，地区差异也真实存在。先把规则范围写清楚，才能用拼写辅助听辨。',
'设备朗读只是示范渠道，不替代真人听辨与发音反馈。文字讲解可以告诉你哪处需要观察，却不能证明点了播放就已掌握对应发音。']],
['c/qu/z：先看后面的元音',[
'c 在 a/o/u 前常表示 /k/，如 casa、cosa、cuna；e/i 前的 /k/ 常用 que/qui，u 通常不发音，如 queso、quince。不要把 que 读成一个额外带 u 的双元音。',
'c 在 e/i 前与 z 的发音存在地区差异：西班牙许多地区区分 /θ/ 与 s，许多其他地区合为 /s/。拼写仍需按词形记忆，不能把一种地区音直接当另一地区的错误。']],
['g/gu/gü：保留的是 g 的音，还是还要发 u',[
'g 在 a/o/u 前与在 e/i 前有不同读法；在 e/i 前保留常见硬 g 音用 gue/gui，u 通常不发音，如 guerra、guitarra。',
'如果这个 u 也要发音，写 güe/güi，如 vergüenza、pingüino。双点不是重音符号：ü 表示此处 u 发音；é/í 等重音与分音规则承担另一任务，不能混用。']],
['r/rr：位置和词形共同决定，不是所有 r 都长颤',[
'元音间 r 与 rr 可区分词义：pero / perro；词首 r 以及某些辅音后的 r 有较强颤音等位置规律，不能看到单写 r 就一律只读轻触。',
'先练稳定气流、舌尖位置和短长对比，再放回词中。不能把整个发音训练降成中文“得、日”替音，也不要因暂时发不出颤音就放弃学习其他词汇语法。']],
['b/v、ll/y 与 ñ：分清拼写区别和音系区别',[
'标准西语 b 与 v 通常不区分成英语 /b/ 与 /v/ 两个音位；实际实现随语音环境变化。发音相近不代表拼写可互换，所以 vivir 仍要按词形写 v。',
'll/y 存在 yeísmo 等地区现象，ñ 与 n 则不同。学习时选一个稳定参照，随后增加其他地区输入；地区差异与书面规范应分开判断。']]
],[['queso','奶酪','que 中 u 通常不发音，组合提供 /k/ 的常见拼写。'],['guitarra / pingüino','吉他 / 企鹅','gui 常不发 u，güi 的双点要求读出 u。'],['pero / perro','但是 / 狗','元音间 r 与 rr 的区别可能改变词义。']],['把所有 v 都读成英语 /v/','先按西语常见 b/v 系统学习','书写有区别，不等于标准西语必须复制英语音位。'],[
bridgeChoice('queso 中的 u 在常见标准读法里：','通常不发音',['通常不发音','必须单独重读','把 q 改读成 j'],'que 常用于 e 前的 /k/ 拼写，u 通常不发音。'),
bridgeChoice('pingüino 的双点主要告诉你：','这处 u 要发音',['这处 u 要发音','整词重音一定在 u','u 变成 ñ'],'分音符 ü 与重音符 á/é/í 等任务不同。'),
bridgeInput('写出“吉他”的常见西语词形：','guitarra','guitarra 使用 gui 组合，元音间 rr 表示相应颤音。'),
bridgeInput('写出“企鹅”，保留 u 上双点：','pingüino','güi 中的 ü 标示 u 发音，不能随意省略。'),
bridgeChoice('西语标准 b/v 是否必须像英语 b/v 那样对立？','通常不构成那样的两个音位对立',['通常不构成那样的两个音位对立','必须完全复制英语','书写也因此可任意互换'],'发音系统与拼写记忆需要分开。'),
bridgeOrder('按词块组成示范名词组：一只狗。',['un','perro'],'本组句帮助保留词形 perro；发音准确度仍需实际听辨反馈。')]);
