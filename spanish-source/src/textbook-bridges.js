// Original bridge courses informed by reviewing Caminante's progressive teaching structure.
// This file contains no copied textbook exercises, dialogues, scans, or answer keys.
const bridgeLessons=[];
const bridgeChoice=(prompt,answer,options,explain)=>({prompt,answer,options,explain,kind:'choice'});
const bridgeInput=(prompt,answer,explain)=>({prompt,answer,explain,kind:'input',hint:'只填写题目要求的词形；重音符号参与判断。'});
const bridgeOrder=(prompt,tokens,explain)=>({prompt,answer:tokens.join(' '),tokens,explain,kind:'order'});
function bridge(id,title,goal,prerequisites,words,sections,examples,mistake,questions,dialogue){
 const domain={'plural':'名词与限定词','articles':'名词与限定词','people':'人称与句法','present-ar':'动词现在时','present-er-ir':'动词现在时','clock':'介词与时间','reflexive':'喜好与日常结构','direct':'代词与宾语','indirect':'代词与宾语'}[id];
 const initial=questions.slice(0,3).map(q=>[q.prompt,q.answer,q.options,q.explain]);
 fd('bridge-'+id,domain,title,'A1',sections.slice(0,4).map(s=>s[1].join(' ')),examples.slice(0,3),mistake,initial);
 depth('bridge-'+id,goal,sections,examples,questions.slice(3).map(q=>[q.prompt,q.answer,q.options,q.explain]));
 const f=foundationLessons.at(-1);questions.forEach((q,i)=>Object.assign(f.questions[i],q));f.bridge={prerequisites,words,dialogue};bridgeLessons.push(f);
}
bridge('plural','小步课：一个变多个，哪些地方要跟着变？','能把常见名词变成复数，解释 -s/-es、z→c 和重音变化。',['foundation-gender','foundation-sound'],[
['la ventana','f.','窗户'],['el papel','m.','纸；一张纸'],['la luz','f.','灯光；灯'],['el joven','m.','年轻男子'],['la clase','f.','课；班级'],['el paraguas','m.','雨伞']],[
['先把性与数分开，不要一次改变两件事',[
'la ventana 是一扇窗，las ventanas 是多扇窗：变的是数，阴性没有变。数 número 在这里就是“一个还是多个”这一语法区别，不是“第几个”。先圈出名词，再用单数或复数标签记录它。',
'本课先不处理整个句子的动词。练 la ventana→las ventanas，等名词组稳定后，再把 es→son 等主语—动词一致加进来。这种拆开练是为了让你知道每次到底在检查什么。']],
['常见词尾：读完单数，再决定加什么',[
'常见非重读元音结尾加 -s：ventana→ventanas，clase→clases。常见辅音结尾加 -es：papel→papeles，reloj→relojes。不能直接把英语复数经验套过来，说 papels 或 relojs。',
'先记这两条高频模式，但它们不能覆盖所有外来词、重读元音词尾和特殊词。重读 -á/-é/-ó 的常见词如 sofá→sofás、café→cafés；重读 -í/-ú 等另有变体规则，需要继续查词，不能概括成“任何元音都永远只加 s”。']],
['z 为什么变成 c？先保持词音，再符合拼写',[
'luz→luces、voz→voces：词尾 z 在接 -es 时按拼写改为 c。这里不是名词性别变化，也不是加 -s 后再随便改字母。把这种变化单独建一组，遇到 luz 就想起 luces。',
'请慢做一遍：识别末字母 z → 加复数 -es 的同时 z 改 c → luces。再检查冠词 la→las。原来的阴性仍在，所以不是 los luces。']],
['重音符号是在维护重读规则，不是装饰',[
'joven→jóvenes：单数重读 jo；增加音节后，为保持原来的重读位置，复数需写 ó。camión→camiones：原来带重音的 ó 在复数中已符合一般重读规则，因此去掉书面重音。',
'不要记成“变复数全部加重音”或“全部删重音”。先读单数的重读位置，再分复数音节，最后看是否需要符号。paraguas 常规单复数词形不变：el paraguas / los paraguas，数量由冠词或语境显示。']],
['回到名词组：每个需要一致的位置分别检查',[
'la ventana abierta→las ventanas abiertas：先确定 ventana 阴性，再确定多个，最后依次改 la、ventana、abierta。把三处涂上同一种颜色，就能看出不是只在最后一个词后加 s。',
'迁移到生活：看一扇窗说 una ventana，看到两扇说 dos ventanas；如果说这些窗是开着的，再用 Las ventanas están abiertas。本课先保证名词组正确，完整句中的 estar 可回位置与状态课复习。']]
],[['las luces','那些灯','luz 的 z→c，加 -es；la 随复数改 las。'],['los jóvenes','那些年轻男子/年轻人','joven→jóvenes，保留原来的重读位置；混合人群用法另看语境。'],['los paraguas','那些雨伞','本词单复数同形，冠词 el→los。']],['las luzs','las luces','z→c 后接 -es，且冠词用复数。'],[
 bridgeChoice('“多个”改变的是哪一项？','数',['数','一定改变阴阳性','一定改变词义'],'ventana 与 ventanas 都是阴性；单复数是独立维度。'),
 bridgeChoice('一个 el paraguas 变成多个：','los paraguas',['los paraguas','los paraguases','las paraguasas'],'paraguas 常规单复数同形；用冠词显示复数。'),
 bridgeInput('把 la luz 变为复数，只填名词。','luces','luz 的词尾 z 在接 -es 时改 c；完整名词组为 las luces。'),
 bridgeInput('把 joven 变为复数，保留重读位置。','jóvenes','jo-ven→jó-ve-nes；复数需要 ó 标明重读。'),
 bridgeChoice('“这些打开的窗户”的正确名词组：','las ventanas abiertas',['las ventanas abiertas','los ventanas abiertos','la ventanas abierta'],'中心 ventana 阴性，变复数后三处一致。'),
 bridgeOrder('按词块组成“这些灯是白色的”。',['Las','luces','son','blancas'],'luces 阴性复数；冠词 las、形容词 blancas、动词 son 分别呼应。')
],[['A','¿Cuántas ventanas hay?','有几扇窗？'],['B','Hay dos ventanas.','有两扇窗。'],['A','¿Están abiertas?','它们开着吗？'],['B','Sí, las ventanas están abiertas.','是的，窗户开着。']]);
bridge('articles','小步课：el/la 和 un/una 到底怎么选？','分开判断“听者能否识别”与“名词的性数”，再理解泛指和部分零冠词。',['foundation-gender','foundation-bridge-plural'],[
['el cuaderno','m.','笔记本'],['la mochila','f.','背包'],['el agua','f.','水'],['la profesora','f.','女教师'],['el té','m.','茶'],['la biblioteca','f.','图书馆']],[
['一次做两个决定：先选信息类型，再选形式',[
'想介绍自己有一个背包，可以说 Tengo una mochila。想说“那个背包在这里”，用 La mochila está aquí。una/la 的区别涉及对象在谈话中如何被识别；两者都用阴性单数，是因为 mochila 的语法性和数量。',
'定冠词四格 el/la/los/las，不定冠词四格 un/una/unos/unas。先只练单数“一个新对象→una mochila；那个可识别的对象→la mochila”，再扩到复数。不是让你同时猜八种形式。']],
['已知并不只等于“前一句出现过”',[
'Cierra la puerta（关上门）可能是第一次提门，但双方在同一房间，能知道是哪扇门，因此可用 la。所谓已知，是语境里能识别，并不要求机械地检查上一句有没有这个词。',
'同样，Voy a una biblioteca 表达去某一家尚未具体识别的图书馆；Voy a la biblioteca 则通常把那家图书馆当成语境可识别。两句都可能正确，表达的信息不同。练习必须给出足够语境，不能只凭孤立句宣布唯一答案。']],
['从一个对象，扩展到一类东西',[
'Me gusta el té 往往是在说喜欢茶这种饮品，并非特指桌上某杯。这里定冠词还可用于类别泛指。中文“喜欢茶”没有“这个”，也不能因此删掉西语 el。',
'Bebo té 则常把茶作为不特指数量的饮品，使用零冠词。Bebo un té 可是在点一杯茶；El té está frío 指语境里可识别的茶。冠词变化会改变表达视角，不是三句可在任何场景中随意互换。']],
['职业、el agua 与 al/del 分开记，不要混成一条规则',[
'Soy profesora 常见于没有额外修饰的职业身份。Es una profesora muy paciente 带评价修饰时，可以用不定冠词。不要把第一句概括为“职业前永远不加冠词”。',
'agua 是 f.，常用 el agua fría；el 不意味着水变成阳性。a+el→al，de+el→del：Voy al museo；但 a la biblioteca 不缩合。人称 él 带重音，Hablo de él 不能写成 Hablo del 来替代。']],
['做题要说出选择依据，再回场景用一次',[
'先明确语境：第一次告诉朋友“我买了一个笔记本” → 一个新对象 → un cuaderno。随后指着它说“笔记本在背包里” → 可识别对象 → El cuaderno está en la mochila。背包若也已可识别，才能这样用 la。',
'现在只换名词：一本书→un libro，一本杂志→una revista；第二次提它们用 el libro/la revista。先换名词并检查性数，再加入位置，避免一次同时改动太多结构。']]
],[['Tengo un cuaderno. El cuaderno es azul.','我有一个笔记本。这个笔记本是蓝色的。','先引入，再作为可识别对象继续谈。'],['Me gusta el té. Bebo té.','我喜欢茶。我喝茶。','喜欢一类饮品与不特指数量地饮用，常见冠词结构不同。'],['Voy a la biblioteca. / Voy al museo.','我去图书馆。/我去博物馆。','a+la 不缩合；a+el 缩合成 al。']],['Soy una profesora 是所有场合唯一形式','Soy profesora 是常见无修饰身份表达','冠词选择与修饰和信息组织有关，不靠中文逐词匹配。'],[
 bridgeChoice('首次引入一个尚未具体识别的背包：Tengo ___ mochila.','una',['una','el','los'],'mochila 阴性单数；本题明确是引入一个新对象。'),
 bridgeChoice('第二次谈刚才的 cuaderno：___ cuaderno es azul.','El',['El','La','Una'],'已可识别且 cuaderno 为阳性单数，用 el。'),
 bridgeInput('去语境中那家博物馆：Voy ___ museo. 只填介词和冠词的缩合。','al','a+el→al；不是两个分开的词，也不是 a la。'),
 bridgeInput('谈论那位男性：Hablo de ___. 只填重读人称代词“他”。','él','人称代词 él 带重音；de él 不发生 de+el 冠词缩合。'),
 bridgeChoice('一般地说喜欢茶这种饮品，常见说法是：','Me gusta el té.',['Me gusta el té.','Me gusta la té.','Me gustan el té.'],'té 名词为 m.，类别泛指常用 el；主语单数配 gusta。'),
 bridgeOrder('按词块组成“那个笔记本在背包里”。',['El','cuaderno','está','en','la','mochila'],'两个对象在本题语境中都可识别；el cuaderno，la mochila；定位用 está。')
],[['A','Tengo una mochila nueva.','我有一个新背包。'],['B','¿Dónde está la mochila?','背包在哪里？'],['A','Está en la silla.','在椅子上。'],['B','La mochila es muy bonita.','这个背包真漂亮。']]);
bridge('people','小步课：先找主语，再选 yo/tú/usted','找到控制动词的人称组，分清语法形式与礼貌称呼。',['foundation-sentence'],[
['yo','pron.','我'],['tú','pron.','你'],['usted','pron.','您'],['nosotros','pron.','我们（阳性或混合组）'],['ustedes','pron.','诸位；你们'],['ser','v.','是']],[
['先用名字说清楚“谈谁”，再换代词',[
'Ana es médica：这句话谈 Ana。把 Ana 换成 ella，就得到 Ella es médica。Ana y Lucía son médicas 的主语是两个人，可换 ellas。名字旁边有多少词不重要，要看指的是一个人，还是一组人。',
'El hermano de Ana 是 Ana 的哥哥/弟弟：这个名词组虽有 Ana，但中心是 hermano，一位男性。不能因为 Ana 离动词近就用 ella。阅读时先括起整个主语，再找中心，最后确定人称和数。']],
['六组形式并不等于六种中文称呼',[
'六组顺序：yo；tú；él/ella/usted；nosotros/nosotras；vosotros/vosotras；ellos/ellas/ustedes。usted 在交际上称呼对方，变位上与第三人称单数同组。ustedes 与第三人称复数同组。',
'初学做两个小动作：先判断指谁，再映射到变位表。不要从“usted 也在跟你说话”推出它应该配 tú 的词尾。Usted es… 与 Tú eres… 都在称呼对方，但形式不同。']],
['说我们、你们、他们时，检查组内构成与地区',[
'全女性一组常用 nosotras、vosotras、ellas；阳性或混合群体按传统语法常用 nosotros、vosotros、ellos。具体交际中还会出现其他包容表达，本课先建立常见书面形式的识别能力。',
'西班牙许多地区使用 vosotros 作非正式“你们”；拉美普遍用 ustedes，也有 vos 等地区系统。网站提供地区人称参照，不能把别人地区中正常的 ustedes 当错词。']],
['先配一组 ser，把人称放进完整短句',[
'ser 的现在时是 soy/eres/es/somos/sois/son，依次对应六组。先只读 Yo soy estudiante、Tú eres estudiante、Usted es estudiante；再练 Nosotras somos estudiantes、Vosotras sois estudiantes、Ustedes son estudiantes。用同一个身份词，专门观察人称改变。',
'这里还可看到数的一致：一个学生 estudiante，多个学生 estudiantes。主语换成我们，不只把 soy 改成 somos，还要考虑后面的身份名词复数。不是所有表语都机械变复数，但本例是指一组学生，可以逐项对齐。']],
['西语可以不写代词，但必须保留正确动词',[
'Soy estudiante 通常可识别主语是 yo；Somos estudiantes 可识别为我们。省略的是主语代词，不是把动词变回原形。不能把 Soy estudiante 简化成 Ser estudiante 来当同样的完整陈述。',
'对比或强调时保留代词：Yo soy estudiante; ella es profesora。él/ella/usted 共用 es，若无语境可能需要保留主语说明指谁。规则是“可按语境省略”，不是“每句话必须删代词”。']]
],[['Tú eres estudiante. Usted es estudiante.','你是学生。您是学生。','tú→eres，usted→es；礼貌称呼不改变对应的人称组。'],['Ana y Lucía son médicas.','Ana 和 Lucía 是医生。','两位女性→ellas→son；médicas 与人物组配合。'],['Somos estudiantes.','我们是学生。','somos 已带“我们”的语法人称信息，可不写 nosotros/nosotras。']],['Usted eres estudiante','Usted es estudiante','usted 选第三人称单数，不选 tú 的形式。'],[
 bridgeChoice('usted 对应变位表哪一组？','él/ella 同组',['él/ella 同组','tú 同组','nosotros 同组'],'意义是礼貌称呼对方，语法形式用第三人称单数。'),
 bridgeChoice('Ana y Lucía 这一全女性组可替换成：','ellas',['ellas','ella','nosotros'],'两位被谈论的女性→第三人称复数 ellas。'),
 bridgeInput('Usted ___ estudiante. 只填 ser 的现在时。','es','usted 与 él/ella 同组，ser 现在时用 es。'),
 bridgeInput('我：___ estudiante. 只填 ser，不写主语。','soy','yo 的 ser 现在时为 soy；可省略 yo，但动词保留人称。'),
 bridgeChoice('El hermano de Ana 的中心指称是：','一位男性亲属',['一位男性亲属','Ana 本人','至少两个人'],'de Ana 修饰 hermano；控制动词的是整个单数名词组的中心 hermano。'),
 bridgeOrder('按词块组成“您是教师”。',['Usted','es','profesor'],'usted 用 es，不用 eres；本题词块指定男性职业形式 profesor。')
],[['A','Hola, soy Mei.','你好，我是 Mei。'],['B','Yo soy Laura. ¿Eres estudiante?','我是 Laura。你是学生吗？'],['A','Sí. ¿Usted es profesora?','是的。您是教师吗？'],['B','Sí, soy profesora.','是的，我是教师。']]);
bridge('present-ar','小步课：只练 -ar，现在时一步一步造出来','从 -ar 原形构造六组现在时，在句中找到控制词尾的主语。',['foundation-bridge-people'],[
['hablar','v.','说；说话'],['estudiar','v.','学习'],['trabajar','v.','工作'],['comprar','v.','买'],['el español','m.','西班牙语'],['la tienda','f.','商店']],[
['今天只学一个小系统：规则 -ar 直陈式现在时',[
'hablar、estudiar、trabajar 是词典里的原形。本课说的是现在或惯常的事：Estudio español（我学西语），Ana trabaja aquí（Ana 在这里工作）。先不混过去时、将来时和虚拟式。',
'不是所有 -ar 动词都规则，但高频规则动词能让你练清楚“词干+词尾”这个构造。遇到 pensar 等词干变化动词，先查它的组别，不能让本课规则承担全部情况。']],
['把原形切开，只去最后的 -ar',[
'hablar→habl-，estudiar→estudi-，trabajar→trabaj-。estudiar 去掉的只有 ar，不要把前面的 i 也删掉。这个剩下的部分叫词干，本课中保持稳定。',
'然后按六组加 -o、-as、-a、-amos、-áis、-an。不要在完整 hablar 后继续加 o。每次书写可先保留加号：habl+o，检查后再连写成 hablo。']],
['先学 yo/tú/第三人称，再接复数三组',[
'yo hablo；tú hablas；él/ella/usted habla。这三格先配短句练熟：Hablo español；¿Hablas español?；Ella habla español。换主语时，句子其他部分先保持不变。',
'再补 nosotros hablamos；vosotros habláis；ellos/ellas/ustedes hablan。-áis 中重音要写。我们 hablan 是把 nosotros 与第三人称复数混了；你们 habláis 与诸位 hablan 则要结合地区人称选择。']],
['把例词迁移到新词，再检查是否只是宾语变了',[
'做“我们学习”：estudiar→estudi-→nosotros 的 -amos→estudiamos。做“她工作”：trabajar→trabaj-→第三人称单数 -a→trabaja。不是每个新动词都从整张表重新背起。',
'Ana compra un libro / Ana compra dos libros 中 compra 不变，因为变的是买的数量。Ana y Mei compran dos libros 才换成 compran，因为主语换成两个人。先找主语这一步不能省。']],
['最后再接否定和提问，不另加英语式助动词',[
'No hablo francés：no 放在变位动词前。¿Trabajas aquí? 可以用变位动词直接构成问句，不加 do。中文对照可以帮助理解，但西语词尾和问号仍要自己检查。',
'练习时先只写词形，再拼短句，最后用自己的信息替换。输入题会检查重音；造句题限定词块是为了检验词序，不表示现实表达只有这唯一一句。']]
],[['estudiar→estudi- + -amos→estudiamos','我们学习','先分 -ar 类，再选 nosotros。'],['Ana compra dos libros.','Ana 买两本书。','主语 Ana 单数；dos libros 不控制 compra。'],['¿Trabajas aquí?','你在这里工作吗？','tú→trabajas；问句不另加 do。']],['Nosotros estudian español','Nosotros estudiamos español','nosotros 的规则 -ar 词尾是 -amos。'],[
 bridgeChoice('estudiar 去掉 -ar 后的词干是：','estudi-',['estudi-','estud-','estudiar-'],'只删除末尾 ar，前面的 i 属于词干。'),
 bridgeChoice('“您工作”的现在时是：','usted trabaja',['usted trabaja','usted trabajas','usted trabajar'],'usted 与第三人称单数同组，trabaj+a。'),
 bridgeInput('hablar，现在时，nosotros：只填词形。','hablamos','habl- 加 nosotros 的 -amos。'),
 bridgeInput('estudiar，现在时，vosotros：只填词形。','estudiáis','estudi- 加 -áis；重音符号是词形的一部分。'),
 bridgeChoice('改正 Yo comprar dos libros：','Yo compro dos libros.',['Yo compro dos libros.','Yo compran dos libros.','Yo compra dos libros.'],'谓语要配 yo：compr+o；宾语复数不让动词用 compran。'),
 bridgeOrder('按词块组成“我们不在这里工作”。',['Nosotros','no','trabajamos','aquí'],'主语 nosotros 配 trabajamos；no 放在变位动词前。')
],[['A','¿Estudias español?','你学西语吗？'],['B','Sí, estudio español.','是的，我学西语。'],['A','¿Trabajas aquí?','你在这里工作吗？'],['B','No, trabajo en una tienda.','不，我在一家商店工作。']]);
bridge('present-er-ir','小步课：-er 与 -ir，哪里一样、哪里不同？','在已会 -ar 的基础上构造规则 -er/-ir，现在时不混入将来时词尾。',['foundation-bridge-present-ar'],[
['comer','v.','吃'],['beber','v.','喝'],['vivir','v.','住；生活'],['escribir','v.','写'],['el arroz','m.','米饭；大米'],['la carta','f.','信；菜单等，按语境']],[
['先看原形的最后两字母，不凭中文意思分组',[
'comer、beber 是 -er；vivir、escribir 是 -ir。去掉最后两个字母，得到 com-、beb-、viv-、escrib-。本课练规则现在时，不能因为某个动词也表示“吃喝”就认为词尾相同。',
'与 -ar 课共用的方法是“找类别→去原形词尾→选人称词尾”。新知识只是另外两类词尾，不必把所有内容从零再学。']],
['先练相同的四格，建立可以迁移的部分',[
'-er：como/comes/come/comemos/coméis/comen；-ir：vivo/vives/vive/vivimos/vivís/viven。两类在 yo 都加 -o，tú 都加 -es，第三人称单数 -e，第三人称复数 -en。',
'因此“你喝”是 beb+es→bebes，“她写”是 escrib+e→escribe。这里不要沿用 -ar 的 -as/-a，造成 beba 来表达本课陈述式的“她喝”；beba 是另一语气的形式。']],
['差别集中练：我们和你们',[
'-er 的 nosotros/vosotros 是 -emos/-éis：comemos/coméis；-ir 是 -imos/-ís：vivimos/vivís。先并排读这四格，再遮住右侧自己填，能比整表来回背更快发现混淆点。',
'我们写 escribimos，不是 escribemos；我们喝 bebemos，不是 bebimos。后者 bebimos 可是简单过去的合法形式，但不能在本课现在时情境里拿来替代。合法词形也可能用错时间。']],
['重音和原形保留是两类不同错误',[
'vosotros coméis / vivís 的重音要写。写成 vosotros comer 不是漏重音，而是还没把原形变成句中的谓语；写成 comeremos 来回答本课“我们吃”，则是误用了将来时。',
'检查时说清错误类别：词干是否保留对？类别有没有混？人称有没有配对？是不是换成别的时态？不要把所有错误都归为“没背熟”。']],
['在相同场景里替换动词，观察一致',[
'Nosotras vivimos aquí y escribimos cartas：两个动作同一个主语，两个谓语都配 nosotras。Hoy Ana come arroz 中 Ana 单数配 come。中文没有变位，所以更要显式标主语。',
'接下来再学 querer、poder 等不规则规律；本课不把全部 -er/-ir 都声称规则。学会规则是识别例外的起点，变位页可以反查每个动词的具体形式。']]
],[['beber→beb- + -emos→bebemos','我们喝','-er 的 nosotros 词尾是 -emos。'],['escribir→escrib- + -imos→escribimos','我们写','-ir 的 nosotros 词尾是 -imos。'],['Ustedes viven aquí.','诸位住这里。','ustedes 用第三人称复数 viv+en。']],['Nosotros vivemos aquí','Nosotros vivimos aquí','vivir 属 -ir，本课 nosotros 用 -imos。'],[
 bridgeChoice('comer 与 vivir 的 tú 词尾都为：','-es',['-es','-as','-ís'],'两类 tú 的规则现在时都是 -es；nosotros/vosotros 的差异另练。'),
 bridgeChoice('escribir 的 nosotros 现在时：','escribimos',['escribimos','escribemos','escriben'],'-ir 类 nosotros 用 -imos。'),
 bridgeInput('beber，现在时，nosotros：只填词形。','bebemos','beb- 加 -emos；bebimos 是另一时态，不能替代本题现在时。'),
 bridgeInput('comer，现在时，vosotros：只填词形。','coméis','com- 加 -éis，保留书面重音。'),
 bridgeChoice('现在习惯：Ana ___ arroz todos los días.','come',['come','comer','comes'],'主语 Ana 第三人称单数，规则 -er 词尾 -e；原形不能直接承担该谓语。'),
 bridgeOrder('按词块组成“诸位住这里”。',['Ustedes','viven','aquí'],'ustedes 与第三人称复数同组；vivir→viven。')
],[['A','¿Dónde vives?','你住哪里？'],['B','Vivo cerca de aquí.','我住在这附近。'],['A','¿Comes en casa?','你在家吃饭吗？'],['B','Sí, comemos en casa.','是的，我们在家吃饭。']]);
bridge('clock','小步课：现在几点，与几点上课是两种回答','读懂钟点，用 es/son 报时，用 a la/a las 说明事件时间。',['foundation-bridge-people'],[
['la hora','f.','小时；时刻'],['el minuto','m.','分钟'],['la mañana','f.','早晨；上午'],['la tarde','f.','下午；傍晚'],['la noche','f.','夜晚'],['la clase','f.','课']],[
['先补数字，再区分两个问题',[
'本课要能读 uno 到 doce，并认识 quince（十五）、treinta（三十）、cuarto（一刻）、media（半）。暂时不要一次背完整日期、年份和所有数词；先解决钟面十二小时范围。词库可搜索对应数词复习。',
'¿Qué hora es? 问现在几点；¿A qué hora es la clase? 问课程在几点。前者是给钟表读数，后者是把一个事件放到时间点。中文都带“几点”，西语回答结构却不同。']],
['一点用 es la，其余常见小时用 son las',[
'Es la una（1:00）；Son las dos（2:00）；Son las ocho（8:00）。la/las 与这里省略的阴性名词 hora/horas 有关。小时一用 una，不说 Es el uno。',
'1:10 仍是 Es la una y diez；不是因为加了十分钟，就把 es 改为 son。先确定报的是哪一个小时，再决定 es la / son las。']],
['读分钟：先用 y 稳定，再引入 menos',[
'8:15 → Son las ocho y cuarto；8:30 → Son las ocho y media。y 后是当前小时过了多少分钟。media 是这里固定的半点表达，不写 medio。',
'8:45 既可说 Son las ocho y cuarenta y cinco，也常说 Son las nueve menos cuarto：离九点差一刻。menos 读法先选下一个小时，再减去剩余分钟。不是把 ocho 后直接加 menos cuarto；那会变成 7:45。']],
['说上课、出发的时间，用 a la / a las',[
'La clase es a la una（课在一点）；La clase es a las ocho（课在八点）。这里动词 es 的单数由主语 la clase 决定，不是由八点决定。因此不能照报时 Son las ocho 把整句写成 La clase son a las ocho。',
'对比 Es la una（现在一点）与 La clase es a la una（课在一点）。a 在后句标事件的时间点，不能随意删掉。加 de la mañana/tarde/noche 可以澄清一天中的时段，具体划分依生活习惯而异。']],
['走完一个完整判断，再开口回答',[
'问 ¿A qué hora es la clase?，信息牌写 18:30。①问事件时间，不是当前报时；②用 a las；③六点半→seis y media；④按需补 de la tarde→La clase es a las seis y media de la tarde。',
'本课受控输入题会指定 y 或 menos 读法，避免把另一种正确表达误判。真实交际可以有不同读法，先保证听者能清楚知道时刻。']]
],[['Es la una y veinte.','现在一点二十。','小时一→es la；二十分钟不改变这一报时选择。'],['Son las nueve menos cuarto.','现在八点四十五。','选下一个整点九，再减一刻。'],['La clase es a las ocho.','课在八点。','主语 clase 单数配 es；事件时间点用 a las。']],['La clase son las ocho','La clase es a las ocho','区别主语一致与事件时间介词 a。'],[
 bridgeChoice('问“现在几点”的句子是：','¿Qué hora es?',['¿Qué hora es?','¿A qué hora es la clase?','¿Cuántos años tienes?'],'本题问当前钟点，不问课程安排，也不是年龄。'),
 bridgeChoice('1:30 的报时：','Es la una y media.',['Es la una y media.','Son las una y medio.','Es el uno y media.'],'小时一用 es la una；半点常说 y media。'),
 bridgeInput('9:15：Son las nueve y ___. 只填“一刻”。','cuarto','un cuarto 是四分之一；这里 y cuarto 表一刻。'),
 bridgeInput('10:45 指定用 menos：Son las ___ menos cuarto. 只填小时数词。','once','差一刻到十一点，即十点四十五；先选择下一个小时 once。'),
 bridgeChoice('“课程在两点”的正确说法：','La clase es a las dos.',['La clase es a las dos.','La clase son las dos.','La clase es las dos.'],'es 配单数主语 clase；a las dos 表事件时间点，两个决定互不替代。'),
 bridgeOrder('按词块组成“课程在一点”。',['La','clase','es','a','la','una'],'事件时间用 a la una；la clase 控制 es。')
],[['A','¿Qué hora es?','现在几点？'],['B','Son las ocho y media.','八点半。'],['A','¿A qué hora es la clase?','几点上课？'],['B','La clase es a las nueve.','课在九点。']]);
bridge('reflexive','小步课：levantarse 为什么多一个 se？','把代词式动词拆为“代词随人称变化+动词自身变位”，并学会日常身体部位表达。',['foundation-bridge-present-ar','foundation-bridge-present-er-ir'],[
['levantarse','v. prnl.','起床；起身'],['lavarse','v. prnl.','洗自己的身体部位等'],['ducharse','v. prnl.','淋浴'],['la mano','f.','手'],['el pelo','m.','头发'],['temprano','adv.','早']],[
['先看一组对比：谁洗谁？',[
'Ana lava la taza：Ana 洗杯子。Ana se lava las manos：Ana 洗自己的手。第二句 se 与主语联系，表示动作涉及自身；它不是一个可以随意丢掉的装饰。词典以 lavarse 帮你标出这种带代词用法。',
'但“带 se 的动词”不等于全部都是字面自己做自己。levantarse（起床）、irse（离开）、quejarse（抱怨）有各自词汇和结构要求。先稳定本课的日常用法，再在进阶课区分反身、代词式、相互等关系。']],
['同一主语控制两处：代词与变位动词',[
'levantar + se 的原形入口是 levantarse。说我起床：先选 yo 对应 me，再把 levantar 变 levanto→Me levanto。不是 Yo se levanto，也不是 Me levantarse。',
'六组是 me levanto；te levantas；se levanta；nos levantamos；os levantáis；se levantan。se 本身可对应单数或复数，真正的数量区别还要看动词和语境。']],
['先练常规前置，再学原形后接',[
'常规变位句 Me levanto temprano；否定 No me levanto temprano，no 在代词前。不能把 no 放到 me 后面，也不把 se 永久保留给所有人称。',
'Voy a levantarme / Me voy a levantar 在这个结构中都可用：原形后接代词时，levantar 保持原形；上移时放到 voy 前。选择一处，不说 Me voy a levantarme 来重复同一个代词。']],
['洗手为什么常说 las manos，而非每次 mis manos？',[
'Me lavo las manos 中 me 已帮助表明身体部位归属，西语常用定冠词 las。要描述手的数量和性：mano 是 f.，复数 manos→las manos。不能因结尾 -o 就说 los manos。',
'这不意味着身体部位前永远禁用物主词，强调、对比或其他结构另有用法。初学先记 Me lavo las manos、Me lavo el pelo 两个自然句型，再理解它们共同的组织方式。']],
['换主语时不要漏掉一处',[
'Me levanto a las siete→Ana se levanta a las siete：me→se，levanto→levanta。Nos lavamos las manos 中 nos 与 lavamos 同指我们；las manos 的复数不负责把 lavamos 变复数。',
'先做分解填空，再做纠错，再用一个时间词组成日程。acostarse、vestirse 等还含词干变化，不在本课规则 -ar 范式中硬套；变位页可查它们的完整形式。']]
],[['Yo→me + levanto→Me levanto.','我起床。','主语决定代词 me，也决定动词 -o。'],['No me lavo el pelo.','我不洗头。','no 在 me 前；身体部位常用定冠词。'],['Voy a levantarme.','我要起床。','原形 levantar 后接与 yo 对应的 me。']],['Yo se levanto','Yo me levanto','代词和动词两处都必须与主语对应。'],[
 bridgeChoice('“我起床”需要的代词是：','me',['me','se','te'],'levantarse 的 yo 用法为 me levanto，不能照抄原形末尾 se。'),
 bridgeChoice('“我们洗手”的正确句子：','Nos lavamos las manos.',['Nos lavamos las manos.','Se lavamos los manos.','Nos lavar las manos.'],'nos 和 lavamos 配我们；mano 为 f.，复数用 las manos。'),
 bridgeInput('tú，levantarse：___ levantas. 只填代词。','te','tú 对应 te；动词 levantas 已正确配人称。'),
 bridgeInput('nosotros，levantarse：Nos ___. 只填现在时动词。','levantamos','levantar 属 -ar，nosotros 词尾 -amos；nos 已在句中。'),
 bridgeChoice('原形后接代词的正确表达：','Voy a levantarme.',['Voy a levantarme.','Voy me a levantar.','Me voy a levantarme.'],'在此结构可后接 me，也可上移 Me voy a levantar；不重复。'),
 bridgeOrder('按词块组成“我不早起”。',['No','me','levanto','temprano'],'否定 no 在代词 me 前；levanto 配 yo。')
],[['A','¿A qué hora te levantas?','你几点起床？'],['B','Me levanto a las siete.','我七点起床。'],['A','¿Te duchas por la mañana?','你早晨淋浴吗？'],['B','Sí, me ducho por la mañana.','是的，我早晨淋浴。']]);
bridge('direct','小步课：先只换“看见什么、买什么”，学 lo/la/los/las','辨认直接宾语，用第三人称宾格代词替换名词组，不提前混入双代词。',['foundation-sentence','foundation-bridge-plural','foundation-bridge-present-er-ir'],[
['ver','v.','看见'],['comprar','v.','买'],['leer','v.','读'],['el periódico','m.','报纸'],['la revista','f.','杂志'],['la llave','f.','钥匙']],[
['先恢复完整名词，不要从四个短词开始死背',[
'Ana compra la revista：谁买？Ana。买什么？la revista。这一动作直接涉及的对象是直接宾语，本课先用“买什么、读什么、看见谁”这些清楚的问题定位它。',
'这个办法是入门辅助，不是对所有动词的万能语义定义。重点是恢复具体结构，再选代词。今天只替换直接宾语；间接宾语和 se lo 留到后面，避免尚未认清角色就记组合表。']],
['四个第三人称代词，由被替换名词决定',[
'el periódico→lo；la revista→la；los periódicos→los；las revistas→las。Ana compra la revista→Ana la compra。说话者是男性还是女性不影响 la，因为被替换的是阴性单数 revista。',
'这些代词与冠词 lo/la/los/las 中某些形式同形，功能不同：la revista 中 la 限定名词；La compro 中 la 自己替代整个名词组。不能因为拼写相同，就认为每个 la 后都必须有名词。']],
['先记变位动词前置，再加原形后接',[
'Lo leo（我读它）；No lo leo（我不读它）。普通变位动词前用代词，与动词分写。否定 no 放在代词前，不说 Lo no leo。',
'Voy a leerlo 允许把 lo 接在原形后；本结构也可 Lo voy a leer。不要把词拆成 Voy lo a leer，也不在两处重复 lo。其他动词组合能否上移，要按结构继续学，不能扩展成所有双动词都允许。']],
['人的前面有 a，不代表一定是间接宾语',[
'Veo a Laura：Laura 是 ver 的看见对象，仍是直接宾语；按本课 lo/la 主线，替换为 La veo。a Laura 的 a 是人称 a，用来标某些人物直接宾语。',
'西语地区中有受规范认可的部分 leísmo 等现象，本站先教清楚的 lo/la 主线；本课题目会说明采用这一主线，避免把地区变体都粗暴判成无语法。']],
['完整走一遍：换什么、什么性数、放哪里',[
'No compro las llaves：①买什么？las llaves；②钥匙阴性复数→las；③普通变位动词前置；④no 在代词前→No las compro。没有必要把 llaves 再接一次。',
'宾语前置等结构可能需要复指，如 Estas revistas las leo aquí，进阶再解释。不要把正常完整句替换的“不重复名词”扩大为“西语任何时候都不能复指”。']]
],[['Compro la revista.→La compro.','我买那本杂志。→我买它。','la 替换阴性单数直接宾语 la revista。'],['Leo los periódicos.→Los leo.','我读那些报纸。→我读它们。','复数阳性名词组→los，代词在 leo 前。'],['Veo a Laura.→La veo.','我看见 Laura。→我看见她。','人物直接宾语可带 a；不能据此认作接收者。']],['La no compro','No la compro','no 在非重读宾语代词前。'],[
 bridgeChoice('Ana compra la revista 中直接宾语是：','la revista',['la revista','Ana','compra'],'买什么？la revista。Ana 是主语，compra 是谓语动词。'),
 bridgeChoice('las revistas 替换成哪个第三人称直接宾语代词？','las',['las','les','lo'],'直接宾语看被替换名词的性数：阴性复数→las。'),
 bridgeInput('Leo el periódico.→___ leo. 只填代词。','lo','el periódico 阳性单数→lo；在变位动词 leo 前。'),
 bridgeInput('按本站 lo/la 主线：Veo a Laura.→___ veo.','la','Laura 是 ver 的直接对象，人称 a 不让它变成间接宾语。'),
 bridgeChoice('否定“我不买那些钥匙”：','No las compro.',['No las compro.','Las no compro.','No les compro（替换物品本身）.'],'las 替换 llaves；no 在 las 前。本题不涉及另一个接收者。'),
 bridgeOrder('按词块组成“我要读它”（原形后接）。',['Voy','a','leerlo'],'leer 原形后接 lo；也可 Lo voy a leer，但不混用两套位置。')
],[['A','¿Compras esta revista?','你买这本杂志吗？'],['B','Sí, la compro.','是的，我买。'],['A','¿Y estos periódicos?','那这些报纸呢？'],['B','No, no los compro.','不，我不买。']]);
bridge('indirect','小步课：再换“给谁”，学 le/les 后才组合','用接收者决定 le/les，和 lo/la 区分，再进入 se lo 双代词。',['foundation-bridge-direct'],[
['dar','v.','给'],['escribir','v.','写'],['enviar','v.','发送'],['el mensaje','m.','信息；消息'],['la vecina','f.','女邻居'],['el regalo','m.','礼物']],[
['同一句里先问两件事：给什么，给谁',[
'Doy una carta a Laura：给什么？una carta，是直接宾语；给谁？a Laura，是间接宾语。先用完整名词回答两个问题，直到不再把“有人”自动当成间接宾语。',
'同一个人名在不同动词结构中可有不同角色：Veo a Laura 中 Laura 是看见对象；Doy una carta a Laura 中她是接收者。角色来自结构，不来自人名或介词的外形。']],
['le/les 看接收者的数，不看礼物的性数',[
'Le doy un regalo a Laura：一个接收者→le。Les doy un regalo a mis vecinos：多个接收者→les。即使只送一件礼物，接收者复数仍用 les；即使送多件礼物，一个接收者仍用 le。',
'le/les 不像 lo/la 那样区分阳性阴性：给 Laura 和给 Pablo 都可以 le。第一、第二人称间接宾语也用 me/te/nos/os，同形代词的角色需要回完整句判断。']],
['完整接收者有时与代词同现，不是错写两遍',[
'Le doy un regalo a Laura 是常见表达，a Laura 澄清 le 指谁。A Laura le doy un regalo 把接收者提前，通常需要 le 复指。不能套用“用了代词就永远不许再写 a Laura”。',
'原形结构可说 Quiero darle un regalo / Le quiero dar un regalo。否定 No le doy el regalo 中 no 仍在代词前。本课先单独替换接收者，保持物品名词不动。']],
['最后再把物品也替换：le/les 在 lo 系前变 se',[
'Le doy la carta→Se la doy。la 指信；le 在 la 前改成 se。本课先前已分别学会 la 与 le，现在才把两者组合。顺序是间接宾语在前，直接宾语在后。',
'Les doy los regalos→Se los doy：se 不再透露接收者是一个还是多个，语境或补 a mis vecinos 才能说明。这里 se 不是“自己”，而是 le/les 的形式变化；后续双代词详解还会处理命令式位置等边界。']],
['用一次完整对话检验，而不是只背 se lo',[
'问“你给 Laura 发什么？”答 Le envío un mensaje：le 表给她，mensaje 是发送内容。如果接着问“那条消息呢？”就可以 Se lo envío：lo 替换 el mensaje，le→se。',
'每次都能还原物品与接收者，才算读懂。如果只看到 se 就翻成自己，或者按接收者性别选 la，都要回到角色辨认步骤重练。']]
],[['Le doy dos regalos a Laura.','我给 Laura 两件礼物。','一个接收者→le；礼物复数不决定 les。'],['Les doy un regalo a mis vecinos.','我给邻居们一件礼物。','多个接收者→les；礼物单数不决定 le。'],['Le envío el mensaje.→Se lo envío.','我给她/他发那条消息。→我发给她/他。','el mensaje→lo；le 在 lo 前→se。']],['Le lo envío','Se lo envío','le/les 在 lo/la/los/las 前改 se；人先物后。'],[
 bridgeChoice('Doy un regalo a Laura 中间接宾语是：','a Laura',['a Laura','un regalo','省略的 yo'],'Laura 是接收者，regalo 是给出的物品，yo 是主语。'),
 bridgeChoice('给一个人送很多件礼物，应选：','le',['le','les','由礼物数量决定 le/les'],'le/les 看接收者的数，不由礼物数量决定。'),
 bridgeInput('给多位邻居：___ doy un regalo a mis vecinos. 只填间接宾语代词。','les','接收者 mis vecinos 为复数，故 les；un regalo 单数不改变这一选择。'),
 bridgeInput('Le envío el mensaje. 双代词化：___ lo envío. 只填第一处。','se','le 在 lo 前必须变 se；不能 le lo。'),
 bridgeChoice('Se los doy 中 los 指复数礼物时，se 能否显示接收者几人？','不能，需语境明确',['不能，需语境明确','一定多人，因为 los 是复数','一定是自己'],'los 的复数对应物品；se 可能来自 le 或 les。'),
 bridgeOrder('按词块组成“我不把它寄给她/他”。',['No','se','lo','envío'],'否定 no 在代词组合前；间接 se 在直接 lo 前。')
],[['A','¿Qué le envías a Laura?','你给 Laura 发什么？'],['B','Le envío un mensaje.','我给她发一条消息。'],['A','¿Se lo envías ahora?','你现在发给她吗？'],['B','Sí, se lo envío ahora.','是的，我现在发给她。']]);
const beginnerRoute=['foundation-sound','foundation-sentence','foundation-gender','foundation-bridge-plural','foundation-bridge-articles','foundation-bridge-people','foundation-bridge-present-ar','foundation-bridge-present-er-ir','foundation-core','foundation-adjectives','foundation-bridge-clock','foundation-bridge-reflexive','foundation-gustar','foundation-bridge-direct','foundation-bridge-indirect','foundation-pronouns','foundation-past'];
// The textbook's early spelling work exposed a missing searchable capitalization lesson.
depth('sound','先读清五个元音、找到重读，再正确书写大小写、重音和成对标点；不要求先掌握例词涉及的所有动词时态。',[
['从字母名走到词中的声音，先把五个元音读稳定',[
'西语字母表有27个字母，包括 ñ；ch、ll 是双字母组合，不是现代字母表里独立增加的两项。字母名用于拼名字，整词发音则要按照字母在词中的声音，不能把字母名一串连起来读。',
'a/e/i/o/u 通常保持较稳定的元音，不按英语元音规则滑动；h 通常不发音。先慢读 casa、mesa、vino、luna，听清元音，再逐步提高速度。语音按钮依赖设备西语语音，不能代替对发音动作的观察和真人反馈。']],
['先分音节，再判断重读，避免把符号当装饰',[
'常见起点是：元音、n、s 结尾一般重读倒数第二音节，其他辅音结尾一般重读最后音节；不符合常规时往往要标书面重音。ca-sa、ha-blar 分别示范两类。辅音组合词尾等更细的条件需要后续补充，起步规则不应冒充无例外算法。',
'a/e/o 常称强元音，i/u 常称弱元音。元音相邻时可能形成双元音，也可能分音；重读 í/ú 与相邻强元音常形成分音，如 pa-ís。先对照听辨，不能看到两个元音就一律切开或一律合并。']],
['重音既可能告诉你怎样读，也可能区分功能',[
'habla 与 habló 中重读位置不同，形式表达也不同；这里先作为听音与拼写示范，不要求你已经学会过去时。país 的 í 也是拼写的一部分，不能在打字时随意省去。',
'tú（人称代词“你”）与 tu（物主词“你的”）、él（他）与 el（定冠词）还用重音区分功能。不是所有短代词都加重音：ti 通常不写 tí。输入题若要求指定词形，会把缺少必要重音视为需要纠正。']],
['大小写：名字大写，不照搬英语的语言和国籍习惯',[
'句子第一个词的首字母大写；人名、地名等专有名称按规则大写，如 Ana、Madrid。普通名词、语言名和一般国籍形容词通常小写：Estudio español；una estudiante china。句首 Español 可能因处在句首而大写，不能据此推出语言名通常大写。',
'星期和月份通常小写：lunes、octubre。专名内部、机构全称和特殊称谓还有更细的规则，本课先处理初学最常误用的几类。“大写规则”不是只背一串特殊名单，而是先判断句首、专名还是普通词。']],
['问号与感叹号：标出整个疑问或感叹片段',[
'直接问句常用成对的 ¿…?，感叹常用 ¡…!：¿Cómo estás?，¡Qué bien!。开头倒置符号帮助读者从一开始调整语调。标准书写不要只留结尾问号；句末已经有 ? 或 !，通常不再追加句号。',
'¿Dónde vives? 中疑问词 dónde 带重音；Vivo donde trabaja Ana 中 donde 为关系用法，通常不带。不是看到 dónde 的字形就永久保留重音，要看它在本句是不是询问或感叹功能。先把最常见直接问句拼写正确，再扩展间接疑问等结构。']]
],[['Estudio español.','我学西语。','句首 Estudio 大写，语言名 español 在此通常小写。'],['La clase es el lunes.','课在星期一。','句首 La 大写，星期 lunes 通常小写。'],['¿Cómo estás?','你好吗？','直接问句使用成对问号；cómo 与 estás 各自保留必要重音。']],
[
bridgeChoice('把“我学西语”按常规大小写写出来：','Estudio español.',['Estudio español.','Estudio Español.','estudio Español.'],'句首首字母大写；语言名在这里通常小写，不照搬英语 Spanish 的大写习惯。'),
bridgeInput('“周一”不在句首，填写该词的常规西语形式。','lunes','星期名通常小写。注意：本站输入规范化不区分大小写，大小写辨认请用上一题的选择题检查。'),
bridgeChoice('哪句使用了规范的成对问号？','¿Cómo estás?',['¿Cómo estás?','Cómo estás?','?Cómo estás¿'],'开头用倒问号，结尾用正问号；疑问词和动词重音也要保留。')
].map(q=>[q.prompt,q.answer,q.options,q.explain]));
for(const q of foundationLessons.find(f=>f.id==='foundation-sound').questions)if(!q.options)q.kind='input';
