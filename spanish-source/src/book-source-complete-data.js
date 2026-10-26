// Independently authored records from the first full chapter-by-chapter grammar-rule reading.
const grammarBookSourceParts=[];
const bkRule=(rule,detail,es,zh)=>({rule,detail,es,zh});
function bookPart(id,pages,rules,examples,questions,table=null){grammarBookSourceParts.push({id,pdfPages:pages,printedPages:pages.map(n=>n+2),rules,examples,questions,table,sourceState:'正文规则已逐项阅读并独立改写；习题为新编，不等于逐题复制原练习'});}
bookPart('book-1-a',[12],[
 bkRule('名词有语法性；先认m.阳性、f.阴性，再看与它关联的形式。','语法性是词在当前义项下的信息，不由物品或说话者的生理性别决定。冠词、指示词、形容词等的相应形式要与所指名词配合；先学名词本身，后续再做一致。','libro · m. / casa · f.','书为阳性；房子为阴性。'),
 bkRule('事物名词-o常阳性，-a常阴性，但只是一般线索。','先用词尾帮助记忆，再检查已学例外；不要为了制造另一种性别随意把mesa写成meso。','vaso · m.; mesa · f.','杯子为阳性；桌子为阴性。')],['先认词义和词性标记，再用一般词尾线索。','遇到明确例外时，具体词条信息优先。'],[rwInput('已知mesa（桌子）词典标f.，填写其语法性标记。','f.','f.就是阴性，不能因说话者性别而改。'),rwChoice('把mesa改成meso来“制造阳性桌子”可行吗？','不可这样造词',['不可这样造词','任何名词都可自由换-o/-a','只要男性说话就必须改'],'判断词本身的性与另一个词是否存在要分开。')]);
bookPart('book-1-b',[12,13],[
 bkRule('-a阳性例外及部分-ma词，要与具体词一起记。','书中列clima、día、idioma、mapa、planeta、programa、sofá，以及esquema、poema、problema、sistema、tema为m.。不能扩大成所有-ma都阳性，crema为f.。','el idioma / la crema','语言为阳性；奶油/乳霜为阴性。'),
 bkRule('-o阴性例外包括mano，以及常见缩略词。','本节列foto、mano、moto、radio为f.；foto与moto分别联系fotografía、motocicleta记忆。radio在此指广播/收音机相关阴性用法，其他义项另查。','la mano / la foto / la radio','手；照片；广播/收音机。'),
 bkRule('-aje及很多-or名词通常阳性，-ción/-sión/-dad/-tad通常阴性。','看完整词尾；flor为阴性，不能只凭-or归阳性，也不把-ción扩大成所有-ón。','el paisaje; la flor; la traducción; la amistad','风景；花；翻译；友谊。'),
 bkRule('其他词尾不能都从外形确定性别；查当前义项词条。','本书列café、champú、esquí、jersey、pie、sobre、tabú、taxi及árbol、lápiz、metal、móvil、país、papel、paraguas、salón、sillón、sol等m.例词；clase、carne、fiebre、frente、gente、llave、muerte、nave、noche、nube、parte、suerte、tarde、cárcel、cicatriz、col、crisis、hipótesis、imagen、nariz、sal、sed、síntesis、tesis等f.例词须据词条记。不要把冠词el本身当成绝对阳性证明，el hambre的hambre仍为f.。','el champú / la sal; el hambre · f.','洗发水；盐；饥饿（名词阴性，冠词有特殊条件）。')],['Caminante的-e、-i倾向和本书的查词方法并列保留；一般倾向不盖过例外。','书中el hambre若落入阳性示例栏，网站仍按其规范阴性处理，不从冠词反推名词性。'],[rwInput('在本节所用“广播/收音机”义项中，radio的性别标记是什么？','f.','本节明确采用la radio的阴性用法。'),rwInput('crema（奶油/乳霜）属于-ma阳性通则吗？填写本词m.或f.。','f.','crema为阴性，不能把所有-ma都归阳性。'),rwChoice('el hambre中名词hambre的性是？','阴性',['阴性','看到el一定阳性','没有语法性'],'开头重读a音的阴性名词冠词特殊，名词仍f.。')]);
bookPart('book-2-a',[15],[
 bkRule('有对应形式的人或动物名词，常见-o换-a、辅音后加-a。','先确认本词允许该对应，不把同一构造强加给所有称谓。doctor/doctora、león/leona属于这里给出的具体对应。','amigo/amiga; doctor/doctora; león/leona','男/女朋友；男/女医生；雄/雌狮。'),
 bkRule('部分-e人物词有-a对应，另一些同形，必须逐词分。','jefe/jefa、nene/nena、presidente/presidenta是本页的对应；paciente、teniente、vidente在本节常用同形人物用法，不机械改成-a。','jefe/jefa; el/la paciente','男/女上司；男/女患者。')],['先确定人物词是哪一类，再生成存在的对应形式。'],[rwInput('按本节对应，doctor的女性形式。','doctora','本词在辅音后加-a。'),rwInput('按本节对应，león的雌性形式。','leona','本节给出的对应为leona。'),rwChoice('本节paciente指女性时词形怎样？','可保持paciente',['可保持paciente','必须造pacienta','必须变成复数'],'本节采用常见同形用法，其他表达另核具体规范。')]);
bookPart('book-2-b',[16],[
 bkRule('有些男女称谓使用不同词，不能从一个词尾推导。','本节明确hombre/mujer、padre/madre、marido/mujer等对应，亲属关系也要按具体词义理解。','padre/madre; hombre/mujer','父亲/母亲；男人/女人。'),
 bkRule('特殊阴性形式要单记。','actor/actriz、emperador/emperatriz、alcalde/alcaldesa都是本节实际对应，不用一般加-a代替。','actor/actriz; alcalde/alcaldesa','男/女演员；男/女市长。'),
 bkRule('同形人物名词由上下文和关联形式显示性别用法。','-ante、-ista常见同形，如cantante、estudiante、artista；cónyuge、mártir、testigo也有本节所说的同形用法。不要因-artista末尾-a就判只能指女性。','el testigo / la testigo','男证人/女证人。')],['区别不同词、特殊词尾和同形三类，再检查相应冠词和描述形式。'],[rwInput('emperador的本节女性对应形式。','emperatriz','特殊对应emperador/emperatriz。'),rwInput('alcalde的本节女性对应形式。','alcaldesa','特殊对应alcalde/alcaldesa。'),rwChoice('testigo指女性时，本节哪项成立？','可保持testigo这一词形',['可保持testigo这一词形','只能造testiga','所有-a结尾都只能指女性'],'本节testigo属同形人物用法。')]);
bookPart('book-2-c',[17],[
 bkRule('动物可用不同词或特殊词形区分雌雄。','caballo/yegua、toro/vaca是不同词；gallo/gallina、tigre/tigresa是须单记的对应；另有gato/gata等普通形式。','gallo/gallina; caballo/yegua','公鸡/母鸡；雄马/雌马。'),
 bkRule('常用物种名称可有固定语法性，不据具体动物雌雄改词。','本页阳性例词包括buitre、calamar、caracol、cocodrilo、dinosaurio、mejillón、pulpo；阴性例词包括almeja、cigüeña、codorniz、gamba、hormiga、jirafa、mosca、tortuga。这描述本节物种名用法，不宣称各词不存在任何其他雌雄专称。','el pulpo / la tortuga','章鱼为m.；乌龟的本节物种名为f.。'),
 bkRule('需要说明真实雌雄时，可给这些物种名补macho或hembra。','jirafa macho中jirafa仍为f.；cocodrilo hembra中cocodrilo仍为m.。看不清一只动物雌雄，不妨碍查到其物种名称的语法性。','jirafa macho; cocodrilo hembra','雄性长颈鹿；雌性鳄鱼。')],['分别回答词条性别与动物生物性别，不把两者合成一题猜。'],[rwInput('gallo对应的母鸡名称。','gallina','本节特殊对应gallo/gallina。'),rwInput('按本节固定物种名，tortuga为m.还是f.？','f.','本节物种名tortuga为阴性。'),rwInput('雌性鳄鱼：cocodrilo ___. 填说明生物性别的词。','hembra','hembra说明雌性，名词本身仍阳性。')]);
bookPart('book-3-a',[18],[
 bkRule('常见元音结尾加-s，辅音结尾按相应模式加-es。','mapa→mapas、café→cafés；pared→paredes、reloj→relojes。-z接-es时写-ces，如pez→peces。书面重音随复数的实际音节和重读重新检查。','país/países; pez/peces','国家/多个国家；鱼/多条鱼。'),
 bkRule('重读-í、-ú的部分名词可有-s或-es两种复数。','本书israelí与tabú给出israelís/israelíes、tabús/tabúes。不能把另一个规范变体当成唯一错误选项；具体词仍查规范用法。','tabús / tabúes','tabú的两种本节规范复数形式。'),
 bkRule('末尾为非重读元音加-s的这一类，单复数词形可相同。','abrebotellas、abrelatas、cumpleaños、jueves、lavavajillas、microondas、paraguas、sacacorchos及crisis、tesis等，数由限定词或语境显示。不是所有-s结尾都不变。','un paraguas / dos paraguas','一个/两个雨伞。'),
 bkRule('-y结尾要区分本书给出的西语词与外来词习惯。','rey→reyes、ley→leyes；jersey→jerséis。外来词具体规范和变体逐词查，不用一条英语复数算法替代。','rey/reyes; jersey/jerséis','国王/多位国王；毛衣/多件毛衣。')],['先识别类型，再检查字母、重音和规范变体。'],[rwInput('rey（国王）的复数。','reyes','本节西语-y词加-es为reyes。'),rwInput('按本节所列规范，把jersey变复数。','jerséis','本节示范jersey→jerséis。'),rwInput('tabú的复数，任选本节一个规范形式。','tabús','本节允许tabús或tabúes。',['tabúes'])]);
bookPart('book-3-b',[19,20],[
 bkRule('物质名词单数可泛指物质或不定量，复数可表种类或计量份数。','vino可指酒这一物质，vinos可按语境指不同品种或几杯。agua、arroz、carne、luz、madera、música、pan、papel、pescado、plástico、té等也须结合具体义项理解，不宣布某词永远不可数。','varios vinos; dos cafés','几种酒或几杯酒；两杯咖啡。'),
 bkRule('集合意义不等于语法复数。','familia、gente、público在本节形式为单数，通常按单数一致；不要仅凭“包括很多人”就把动词改成复数。','La gente espera.','人们在等。gente为语法单数。'),
 bkRule('常见成套、成双物品常用复数表达，但不能一概说没有单数形式。','gafas、tijeras、zapatos、pantalones、pinzas、prismáticos等在本节常见复数用法。un zapato可以说一只鞋；使用场景、所指数目与词条习惯要分开。','Las gafas son nuevas.','这副眼镜是新的，按gafas复数一致。')],['先问当前义项是物质量、种类、份数、集合还是常见成套物品。'],[rwChoice('gente（人们）在本节属于哪一种语法数？','单数',['单数','复数','由现实中有几个人自动决定'],'集合可以包括很多人，但gente这个名词在本节为单数。'),rwChoice('本节tres vinos在餐饮语境可以指什么？','三杯酒',['三杯酒','所有场合都是三个酒分子','说明vino永远没有单数'],'复数可按份数理解，也可在其他语境表示种类。'),rwChoice('gafas（眼镜）在本节常用词形属于哪一种数？','复数',['复数','单数','没有数的区别'],'一副眼镜虽是一个物品，gafas这个常用词形为语法复数。')]);
bookPart('book-4-a',[21,22],[
 bkRule('-o形容词常以-a作阴性；本节-or及重读元音+n的某些形容词加-a。','guapo/guapa、trabajador/trabajadora、catalán/catalana、holgazán/holgazana、llorón/llorona。先看本词实际类别，不把所有辅音词都套成同形。','hablador/habladora; llorón/llorona','爱说话的；爱哭的：本节男女形式。'),
 bkRule('mayor、menor、mejor、peor、superior、inferior等本节不分性。','虽有-or词尾，但不能因此制造mejora或superiora来充当相同形容词的阴性；其他词义中同形字串另查。','una opción mejor / un resultado mejor','更好的选择/结果，mejor不因性改变。'),
 bkRule('另有-a/-e/-í/-ú/-ista及部分辅音结尾的同形形容词。','belga、hipócrita、lila、malva、persa；amable、fuerte、verde；cursi、iraní、marroquí、hindú；pacifista、optimista、pesimista；azul、joven、familiar、cortés、gris、feliz等，须按本词形式记。','un chico joven / una chica joven','男孩/女孩都用joven，不造jovena。'),
 bkRule('表示国籍或来源的辅音结尾形容词，常有加-a的阴性。','español/española、alemán/alemana、francés/francesa、inglés/inglesa、japonés/japonesa、portugués/portuguesa、andaluz/andaluza。重音也按新形式检查。','francés/francesa; andaluz/andaluza','法国的；安达卢西亚的：本节性别形式。')],['先区分变化类、同形类、比较词例外和国籍来源类。'],[rwInput('llorón的本节阴性形式。','llorona','本节重读元音+n类，阴性加-a并核对重音。'),rwInput('una opción ___，用mejor（更好的）合适形式。','mejor','本节mejor不分性，不造mejora。'),rwInput('andaluz的阴性形式。','andaluza','本节来源形容词加-a。')]);
bookPart('book-4-b',[22],[
 bkRule('形容词也要按描述对象变数，通常遵循相应名词复数规则。','元音后-s、相应辅音后-es，-z→-ces，并检查重音：importante→importantes、azul→azules、feliz→felices、joven→jóvenes。','personas felices','快乐的人们：feliz的复数是felices。'),
 bkRule('性别同形不等于复数也不变。','interesante、joven在本节不分性，但仍有interesantes、jóvenes的数区别。不能把“同形”理解成该词所有语法格都永远不动。','revistas interesantes','有趣的杂志，形容词仍要复数。')],['先选性别形式，再按当前形式生成复数。'],[rwInput('feliz（快乐的）的复数。','felices','-z接-es时写-ces。'),rwInput('azul（蓝色的）的复数。','azules','本词辅音结尾加-es。'),rwInput('joven（年轻的）的复数，保留必要重音。','jóvenes','加-es后需ó维持本词重读。')]);
bookPart('book-4-c',[23],[
 bkRule('形容词与它实际描述的名词或所指对象保持性数配合。','形式可以帮助恢复省略的名词，但仍要读上下文。不能按说话者性别、最近一个名词或中文句首机械配合。','El vestido amarillo / la chaqueta amarilla','黄色连衣裙/黄色外套。'),
 bkRule('本节同时指阳性、阴性名词或传统混合人物群体时，常用阳性复数。','指一件jersey和一件chaqueta的共同性质可用caros；全女性组则用对应阴性复数。这里说明传统语法的常见一致，不决定个体自称或其他包容表达。','El libro y la revista son nuevos.','书和杂志是新的，共同描述用nuevos。')],['先恢复所有被共同描述的对象，再决定共同形容词形式。'],[rwInput('书和杂志都是新的：El libro y la revista son ___. 用nuevo。','nuevos','本题共同描述阳性与阴性对象，采用常见阳性复数。'),rwInput('两本杂志是新的：Las revistas son ___. 用nuevo。','nuevas','全部所指revistas为f.复数。'),rwChoice('形容词形式主要看哪一项？','它描述的名词或所指对象',['它描述的名词或所指对象','说话者性别永远决定','离它最近的字母'],'先找实际描述对象。')]);
bookPart('book-4-d',[24],[
 bkRule('后置形容词常用于区分同类对象。','mesa redonda与mesa cuadrada可帮助选圆桌还是方桌。颜色、形状、状态和许多类别性形容词，在普通中性表达中通常后置。','una puerta abierta; un coche rojo','开着的门；红色汽车。'),
 bkRule('分类来源等表达也要按该搭配的常见位置学习。','如residencia universitaria、vuelos internacionales、novio sueco。诗意或特殊强调可有其他位置，不把日常常见顺序扩大为任何语体都绝对禁止前置。','vuelos internacionales','国际航班：类别修饰在后。')],['先看本题要区分类别还是突出某种性质，再选常见中性语序。'],[rwChoice('本节普通中性“红色汽车”常怎样说？','un coche rojo',['un coche rojo','un rojo coche作为所有场合的固定语序','una coche roja'],'颜色修饰在本节中性表达中通常后置，coche为m.。'),rwInput('填“开着的”形式：una puerta ___. 用abierto，puerta为f.单数。','abierta','状态描述常后置，且配puerta阴性。'),rwChoice('后置形容词的本节主要作用之一是什么？','帮助区分同类对象',['帮助区分同类对象','证明所有前置都不合法','让名词不再有性别'],'本节强调区分功能，不宣布所有语体只有一个顺序。')]);
bookPart('book-4-e',[24,25],[
 bkRule('前置形容词可突出某种性质，而不一定用来区分同类对象。','un largo paseo可突出散步漫长；el pasillo largo可在几条走廊中辨别长的那条。前后位置会影响语义或叙述重点。','una pequeña duda / la caja pequeña','一点疑问/那只小箱子，表达重点不同。'),
 bkRule('位置还与语体和形容词类别有关。','相对性质形容词的一些前置带书面叙述色彩；颜色、形状、状态的前置可带诗意。不能因前置就认定一律更高级或可以无条件换位。','ojos azules / los azules ojos','通常描述/诗意叙述，语体不同。'),
 bkRule('表示顺序的许多形容词常前置，楼层和章节可后置，人名后的序号按相应结构。','primera visita、siguiente reunión；segunda planta/planta segunda；capítulo primero；Isabel II按人名后的序号读法学习。','el próximo viaje; el capítulo segundo','下次旅行；第二章。')],['先确定区分、突出或顺序功能，再核对语体和固定结构。'],[rwChoice('una pequeña duda常有什么表达特点？','可突出疑问不大或委婉表达',['可突出疑问不大或委婉表达','只能指一个物理尺寸小的疑问物体','证明所有形容词都必须前置'],'位置和搭配共同影响表达。'),rwInput('下一次会议：la ___ reunión. 用siguiente。','siguiente','本节顺序性质常前置。'),rwChoice('楼层“第二层”在本节可以怎样表达？','segunda planta或planta segunda',['segunda planta或planta segunda','只有永远不变的segundo planta','任何名词前都不准用序数'],'楼层是本节明确列出的可前后两种结构。')]);
bookPart('book-4-f',[26],[
 bkRule('grande在本节单数名词前可用gran，阳性阴性都可。','un gran cambio、una gran idea；后置保留grande。位置还可能改变大与很棒等解释，不能在任何场景当完全同义。','una casa grande / una gran casa','尺寸大的房子/很棒的房子等，依语境。'),
 bkRule('bueno、malo、primero、tercero在本节阳性单数名词前分别用buen、mal、primer、tercer。','阴性形式buena、mala、primera、tercera不按这个条件截短；不是把所有位置的bueno都变buen。','un mal día; el tercer piso; la tercera planta','糟糕的一天；第三楼层，两种性别结构。'),
 bkRule('这些单数短尾条件不能直接搬到复数。','grandes casas、buenos amigos、malos días、primeros capítulos、terceras visitas按本节正常性数形式表达。','los buenos amigos','那些好朋友，不写buen amigos。')],['先看名词性数，再看形容词是否在名词前，最后查该词的短尾条件。'],[rwInput('糟糕的一天：un ___ día. 用malo。','mal','阳性单数名词前，本词采用mal。'),rwInput('第三层：la ___ planta. 用tercero。','tercera','阴性形式tercera，不用tercer。'),rwInput('那些好朋友：los ___ amigos. 用bueno。','buenos','复数按本词正常形式buenos，不套单数buen。')]);
// These parts retain their existing independently authored detailed explanations; the following
// source-aligned rules and notes explicitly complete the reviewed conditions and exceptions.
function bookChecked(id,pages,rules,notes=[],questions=[],table=null){bookPart(id,pages,rules.map(rule=>({rule})),notes,questions,table);grammarBookSourceParts.at(-1).retainExistingExplanation=true;}
bookChecked('book-5-a',[28],[
 '定冠词el/la/los/las与不定形式un/una/unos/unas按所指名词的性数选；省略阳性单数名词时un常恢复uno。',
 'a+普通冠词el→al，de+普通冠词el→del；人称代词él不缩合；El属于专名/标题时按其身份处理，不机械合并。',
 '开头重读a/ha音的阴性单数名词，定冠词紧邻时用el；常用不定形式un，una形式的规范使用不能一概判错。',
 '这些名词仍为阴性：形容词、指示词、复数冠词及中间有修饰语时按具体阴性结构配合。'
],['Voy a El Cairo；una noticia de El País：El属于名称时不按普通冠词无条件缩合。','el agua fría、esta agua、las aguas、la misma agua分别检查，不用el推断名词变阳性。arte等词有性别用法变化，按当前义项核对，不把例词表当绝对单一词性。'],[rwInput('按本节名称结构：Voy a ___ Cairo. 填名称中的首词。','El','名称El Cairo中的El不在此与a缩合。'),rwInput('un libro省略名词，表示“我有一个”：Tengo ___.','uno','阳性单数独立形式为uno。')],{columns:['类别','m.单数','f.单数','m.复数','f.复数'],rows:[['不定','un','una','unos','unas'],['定','el','la','los','las']]});
bookChecked('book-5-b',[29,30],[
 '不定冠词常引入听者不能特别识别的类别成员、未指定对象或初次提及对象。',
 '定冠词常指可识别对象：唯一性、共同知识、现场或前文均可提供识别依据。',
 'un hermano与el hermano表达的识别状态不同，不只数出现次数，也不能凭一句el断言现实世界永远只有一个。'
],['Necesito un móvil没有指定哪一部；Tengo el móvil roto可在语境中指自己的可识别设备。','对比una carta与la carta时，先说清听者是否知道是哪封，不把两句当任何场景都完全同义。']);
bookChecked('book-5-c',[31],[
 '零冠词可表达类别、功能、属性、材料或不指定个体，而非一定漏写。',
 '可数复数宾语或不可数单数表示不定数量时常用零冠词：Vendo libros；Compro café。',
 '有冠词时可谈个体或份数：un teléfono引入一部，el teléfono指可识别那部；不能把所有单数名词都套成可零冠词。'
],['Tenemos teléfono可以说具有电话通讯条件，un teléfono与el teléfono进一步组织个体及识别信息。','en bicicleta、clases de guitarra、un objeto de papel、llevar traje等按其功能或类别框架理解；同名词换成具体个体后冠词可能变化。']);
bookChecked('book-5-d',[32],[
 '谈整个类别时，常用定冠词：可数名词可用类别单数或概括性复数，物质名词常用单数。',
 '谈任一代表性类别成员时，也可用un/una；常用成套复数的词可用unos/unas表示一个相应实例。',
 '本节普通泛指主语通常要有相应限定：Los delfines…；Un niño…；El café…，不照英语或中文随意删冠词。',
 '泛指类别主语与不定量动作宾语分开：Me gusta el café对比Bebo café。'
],['Un médico debe escuchar指任一医生的代表性要求；Los médicos…可以概括整个群体。','不要把泛指简化成“全部零冠词”或“只能定冠词”一个口诀。']);
bookChecked('book-5-e',[34],[
 '名词可恢复时，uno/una/unos/unas可与修饰语独立指回；un独立时恢复uno。',
 '普通复数名词的unos/unas通常还需要识别性修饰，不能照单数uno规则在任何场景独立裸用；本节成套复数物品可见独立unos/unas。',
 '省略名词的el/la/los/las通常与形容词、de短语或que从句等识别成分共同出现。'
],['uno rojo、unos que guardé、una con flores分别给省略对象增加信息。','gafas、tijeras、prismáticos等的独立unas/unos按本节成套复数习惯理解；el negro、la de madera、las que viste中的性数都来自省略名词。'],[rwInput('一本蓝色的，名词已知：Quiero ___ azul. 填阳性单数独立不定形式。','uno','独立形式用uno，不是un。'),rwInput('那张木桌，省略mesa：Prefiero ___ de madera. 填定冠词。','la','省略的mesa为f.单数，la后保留de识别短语。')]);
bookChecked('book-6-a',[35],[
 '阳性、阴性指示形式按所指名词的性数配合，三组完整形式分别为este/esta/estos/estas、ese/esa/esos/esas、aquel/aquella/aquellos/aquellas。',
 '三组帮助识别说话者空间、相对接近但不同的空间、较远空间；听者所处空间常用ese系列。',
 '空间参照随谁在说话而改变，不是按固定米数机械选择。'
],['更换说话者后，同一支笔可能从este变ese；先找说话者、听者、对象三者关系。'],[],{refRepair:'demonstrative-table'});
bookChecked('book-6-b',[37],[
 'este系列可指包含说话时刻的当前时期，也可指与当前较近的过去或未来。',
 'ese系列常承接已识别的那一天/那一段时期，可以指过去，也可以指未来。',
 'aquel系列常用于较远过去的回忆；所指时间还受叙述视角影响，不用固定天数划线。'
],['este verano trabajé/trabajaré都可能，过去或未来不由este单独决定。','esa semana可承接已说的将来假期，也可承接谈过的过去一周。']);
bookChecked('book-6-c',[37],[
 '所指名词可恢复时，阳性阴性指示形式可以独立指回，仍按对象性数。',
 '本书可见éste、ésa、aquéllos等旧版区别重音写法；当前基础主线通常不因作代词就自动标重音。',
 'esto/eso/aquello不加这类区别重音；疑问词重音是另一类规则。'
],['Este libro es mío与Este es mío中的este不因此成为两个不同的词。','现行对可能歧义的作者选择需单独核对；初学主线可不加这类区别重音并改写消歧，不能把书中旧习惯教成任何时候都必须。']);
bookChecked('book-6-d',[38],[
 'esto/eso/aquello为独立中性指代，本节没有复数，也不直接限定一个后接名词。',
 '不知道名称、名称无关紧要、概括一堆东西或一件事/一段话/一种情境时，可用中性形式。',
 'esto可概括多个物品，不等于存在中性复数estos；estos属于阳性复数系列。',
 '本节询问人物身份时用相应阳性/阴性形式，如¿Quién es ese?，不以eso普通指人。'
],['Eso no basta可承接前面所说的行为；Esto es para ti可递出不必命名的礼物。','¿Qué es aquello?与¿Quién es aquel?先分事物/情境和人物任务。'],[rwChoice('本节Esto指一堆待收拾物品，是否必须改成所谓中性复数estos？','不需要，esto可概括整堆',['不需要，esto可概括整堆','必须，因为任何多物体都用estos','必须，esto只能指一件具体物体'],'中性不作本节复数变化。')]);
bookChecked('book-7-a',[41],[
 'mi/tu/su只按被关联名词的数变化，nuestro/vuestro还按该名词性数变化。',
 'su/sus可关联他、她、您、他们、她们、你们等；sus不证明拥有者多人。',
 '前置物主限定词通常不与冠词或前置指示词重复叠加；需按不同结构分别表达。'
],['nuestra casa按casa为f.单数，不按“我们”组内性别。','有歧义时可用de Ana、de usted等完整归属表达。'],[],{refRepair:'possessive-front-table'});
bookChecked('book-7-b',[43],[
 '后置长物主形式mío/tuyo/suyo/nuestro/vuestro各系列按所关联对象性数配合。',
 '这些后置形式可与不定、指示、数量等限定成分共同构成名词组。',
 '具体关系可表示所有、亲属、作品作者等，不能只理解为物品产权。'
],['muchos libros míos、esa casa tuya、otros amigos suyos均先找被关联名词。','有拥有者歧义的suyo可以用de+人名等澄清。'],[],{refRepair:'possessive-tonic-table'});
bookChecked('book-7-c',[44],[
 'un amigo mío把对象作为与我有关的集合中的一员引入；mi amigo把对象当作语境可识别。',
 'tres amigos míos与mis tres amigos的集合范围可能不同：三个成员对比已限定的那三位。',
 '前置物主词承担限定作用，后置物主形式不承担相同限定作用，所以与冠词或指示词的组合条件不同。'
],['mi amigo不表示现实中永远只有一个朋友；唯一性也可由当前对话范围提供。','una novela suya可能是其多部作品之一；su novela可能指已谈的那部。']);
bookChecked('book-7-d',[45],[
 '名词可恢复时，通常用el/la/los/las+长物主形式指“我的那个”等。',
 '冠词和长形式都配省略的对象，不配拥有者的性别。',
 'el mío作指称名词组，与ser后Es mío的所属表语不同，不能一概强加冠词。'
],['Tu casa…la mía…；mi coche…el tuyo…，分别恢复casa和coche。']);
bookChecked('book-7-e',[46],[
 '所属可由ser+长物主形式或ser+de+拥有者表达，形式仍按被关联对象配合。',
 'es/son看被问物的单复数；quién/quiénes则看所问拥有者是一个还是多个，不能混为同一检查。',
 'Es mío与Es el mío分别偏所属关系和识别“我的那个”，按具体问题选。'
],['¿De quiénes es esta casa?可问这所房子属于哪几位：quiénes复数，casa单数，所以仍es。','¿De quién son estos libros?可问这些书属于哪一个人：libros复数，所以son。'],[rwInput('问这一所房子属于哪几个人：¿De quiénes ___ esta casa? 用ser现在时。','es','动词看casa单数，不跟拥有者quiénes的复数走。'),rwInput('这些书是谁的：¿De quién ___ estos libros? 用ser现在时。','son','动词配libros复数。')]);
bookChecked('book-7-f',[47],[
 '归属可从人物与结构识别时，身体部位、衣物及随身物常用定冠词。',
 '疼痛、清洗、穿戴和身体状态各有自己的动词与角色框架，不把它们都套成同一个主语结构。',
 '对比、澄清或特别强调归属时，物主形式也可能出现；本节常见表达不是全语境禁令。'
],['Me duelen los pies按pies复数用duelen；Me lavo las manos中manos是被洗对象。','Tiene el pelo mojado、Lleva la camisa manchada按所在结构理解人物与物品关系。']);
bookChecked('book-8-a',[48],[
 'alguno系列表示集合中某个/某些，ninguno系列表示没有任何，todos/todas表示全部集合。',
 '阳性单数名词前alguno/ninguno常缩合algún/ningún；独立使用时恢复alguno/ninguno。',
 '性数配被选择名词；本节否定个体常用单数，ningunos/ningunas可用于某些常用成套复数名词等结构。',
 '选自已给集合时，可用alguno/ninguno+de+该集合名词组；todos与限定词和名词共同确定范围。'
],['algunas de las preguntas、ninguno de esos libros：de连接被选的集合。','todos los días是每天；todo el día是一整天，不把二者的数当可随意互换。'],[rwInput('从这些书中一本也没有：ninguno ___ esos libros.','de','de连接被选择的集合。'),rwInput('没有任何问题：No hay ___ problema. 用ninguno的适当形式。','ningún','阳性单数名词前缩合ningún。')]);
bookChecked('book-8-b',[50],[
 'alguien/nadie不指定具体类型地指人；algo/nada/todo可不指定名词类型地指事物或内容。',
 '它们在这些独立代词用法中不按名词性数自由生成alguiena、nadas等；与algún libro这类限定名词结构分开。',
 '本节不指明具体人物性别或概括内容时，相关形容词采用默认阳性单数。',
 '所指人物作本节特定类型直接对象常有a；作主语时不能仅因指人就随意加a。'
],['algo rojo、todo claro：即使实际可能涉及多件东西，也不把这些本节中性概括硬改成复数。','alguien despierto采用本节未明确性别的默认表达；另有明确人物指向或性别语境时需按具体规范分析。'],[rwInput('某种红色的东西：algo ___. 用rojo的本节默认形式。','rojo','本节algo相关形容词用阳性单数。'),rwInput('我没看见任何人：No veo ___ nadie. 填本节人称介词。','a','本例否定人物直接对象用a nadie。')]);
bookChecked('book-8-c',[51],[
 '本节后置nadie/nada/ninguno等否定成分通常需前面的no或其他相应否定形式呼应。',
 '否定成分已前置时通常不再加no：Nadie viene；Nada funciona；Nunca voy。',
 'ni、tampoco、nunca、jamás及ningún构成的前置否定短语也可承担否定，不是只认no。',
 'no位于本节前置宾语代词之前；多个否定词呼应不按数学负负得正理解。'
],['Tampoco he visto nada；Nunca he oído nada；En ningún momento dije nada，先找前面的否定成分。','No todos…与Nadie…范围不同，完整句法之外还要分析否定的是整个集合还是全部程度。']);
bookChecked('book-8-d',[52],[
 'otro系列指同类中不同或额外的对象，按所指名词配性数，名词可恢复时可独立使用。',
 '可与本节定冠词、物主或指示等结合，但普通结构不加un/una/unos/unas：otro café，不是un otro café。',
 '数词在本节otros/otras之后：otros dos libros，不把两个词按中文顺序随意倒置。',
 'otro与el otro的识别状态不同：再一个/另一个对比双方已识别的另外那个。'
],['ese otro、sus otros hijos、la otra posibilidad分别按其限定结构理解；不能从不加un推出不准加任何限定词。'],[rwInput('另外两本书：___ dos libros. 用otro适当形式。','otros','先otros，再数词dos，配libros的m.复数。')]);
const bkNumberNames=['cero','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once','doce','trece','catorce','quince','dieciséis','diecisiete','dieciocho','diecinueve','veinte','veintiuno','veintidós','veintitrés','veinticuatro','veinticinco','veintiséis','veintisiete','veintiocho','veintinueve'];
bookChecked('book-9-a',[54],[
 '基数词表达数量，可随已知名词独立使用；0—15各词形须按完整表记。',
 'uno/una按所指数目为一的名词配性；阳性单数名词前uno缩合un，独立时可为uno。'
],['一件物品用un libro或una mesa；回答数量时可说uno、una，先恢复所指对象。'],[rwInput('14的常用西语数词。','catorce','查本节0—15表，14为catorce。'),rwInput('一张桌子：___ mesa. 填数目一的适当形式。','una','mesa为f.，用una。')],{columns:['数字','词形'],rows:bkNumberNames.slice(0,16).map((n,i)=>[String(i),n])});
bookChecked('book-9-b',[55],[
 '16—29通常连写为一个词，dieciséis、veintidós、veintitrés、veintiséis等重音必须核对。',
 '31—99的非整十数，本节常写十位+y+个位；整十只写相应十位词。',
 '结尾uno的复合数仍按当前名词有uno/un/una等对应：veintiún libros、treinta y una casas。'
],['十位依次treinta、cuarenta、cincuenta、sesenta、setenta、ochenta、noventa；不要把所有数词每一组都用y。'],[rwInput('22的常用西语写法，保留重音。','veintidós','22为veintidós。'),rwInput('31张桌子：treinta y ___ mesas.','una','复合数末尾的一仍按mesas阴性用una。')],{columns:['数字','词形'],rows:bkNumberNames.slice(16).map((n,i)=>[String(i+16),n]).concat([['30','treinta'],['40','cuarenta'],['50','cincuenta'],['60','sesenta'],['70','setenta'],['80','ochenta'],['90','noventa']])});
bookChecked('book-9-c',[56],[
 '本节精确100用cien；其后的101等通常用ciento；百分比等还有ciento结构。',
 '表示不定的大量数百可用cientos de，不把cien与cientos当作同一种数字单复数随意互换。',
 '200—900的百位词有相应阴性形式，与所数名词或所关联量词配合。',
 '百位与十位不加本节的y，y通常连接十位和个位。'
],['ciento dos、cuatrocientas cincuenta casas、quinientos ochenta y tres euros分别检查结构。','cien mil、cien millones等精确百倍表达另据后面数词单位判断，不从“100后有字就一定ciento”误推。'],[rwInput('103的常见写法。','ciento tres','超过精确100，本节用ciento tres。'),rwInput('五百个对象为casas（f.复数）：___ casas.','quinientas','百位词按casas用阴性形式。')],{columns:['数值','阳性/阴性形式'],rows:[['100','cien / ciento依结构'],['200','doscientos / doscientas'],['300','trescientos / trescientas'],['400','cuatrocientos / cuatrocientas'],['500','quinientos / quinientas'],['600','seiscientos / seiscientas'],['700','setecientos / setecientas'],['800','ochocientos / ochocientas'],['900','novecientos / novecientas']]});
bookChecked('book-9-d',[57],[
 '表示具体千位数量时mil本身不加复数-s；1000常直接mil，不机械先添un。',
 '表示数量不定的数千可用miles de。',
 '千位相关的百数形式仍根据实际计数名词配合，不因mil没有性变化就把整组固定阳性。'
],['mil personas、dos mil euros、doscientas mil personas对照千单位和百数一致。'],[rwInput('两千：dos ___.','mil','具体数量的mil不变成miles。'),rwInput('不定数量“数千人”：___ de personas.','miles','不定的大量数千可用miles de。')]);
bookChecked('book-9-e',[57],[
 'millón是阳性名词，一百万用un millón，超过一个百万用millones。',
 '修饰millón/millones的百位词配其阳性，而后面的千位或百位还要按实际计数对象分析。',
 'millón/millones紧接所数名词时通常用de；中间还有下级数字时不能不看结构一律插de。',
 '本节西语billón为百万的百万，即10¹²；10⁹通常为mil millones。'
],['doscientos millones de personas中的doscientos配millones，不能仅因personas就改doscientas millones。','un millón cien mil personas中millón后还有下一级数字，不按紧接名词的例式机械插de。'],[rwInput('两百万个人：dos millones ___ personas.','de','millones紧接名词，本节用de。'),rwInput('西语本节10⁹的常用表达。','mil millones','本节billón指10¹²，不把英语billion直接当西语billón。')]);
bookChecked('book-9-f',[58],[
 '大数按百万组、千组、余数组分段读；只在相应十位和个位间用本节的y。',
 '百万组的百数配millones为阳性，千位与末段百数按相应计数名词配合。',
 '完整读数要同时查拼写、词尾uno缩合、百数性别和各级单位，不只将每个数字逐字串起。'
],['200 340 000 personas：doscientos millones trescientas cuarenta mil personas。','附加常用小数表达可见dos coma cinco等；分隔符和读法有地区/场景差异，不能把一种格式规定成所有西语地区唯一方式。'],[rwInput('指定标准写法，250欧元：doscientos ___ euros. 填50。','cincuenta','百位与十位间不另加y。')]);
bookChecked('book-10-a',[59],[
 '序数词表达排列顺序，不是数量；常用1—10各有相应性别形式。',
 'primero、tercero在本节阳性单数名词前短尾为primer、tercer，阴性primera、tercera不因此截短。',
 '日常口语中较大顺序经常用基数替代，但不是超过10就禁止正式序数词。'
],['primer libro、tercer día、primera clase；piso quince等按具体习惯学习。'],[],{columns:['顺序','阳性/阴性'],rows:[['1','primero / primera'],['2','segundo / segunda'],['3','tercero / tercera'],['4','cuarto / cuarta'],['5','quinto / quinta'],['6','sexto / sexta'],['7','séptimo / séptima'],['8','octavo / octava'],['9','noveno / novena'],['10','décimo / décima']]});
bookChecked('book-10-b',[60],[
 '序数词按所修饰或省略名词的性数配合，常与冠词、物主等限定成分同用。',
 '伴随名词时常前置；楼层章节等结构可后置，名词可恢复时可省略。'
],['mi primera visita；las primeras preguntas；la segunda可恢复前面谈过的casa等对象。']);
bookChecked('book-10-c',[60,61],[
 '序数可安排空间、时间或篇章顺序；叙述步骤的primero、segundo、tercero等可按步骤连接理解。',
 '本节日历日期通常用基数，不将每天都按英语式序数处理；每月一号的primero/uno习惯另看地区表达。',
 '王名教皇名的数字读法、楼层、章节等按各自惯例，不统一成所有编号都同一方法。'
],['el tres de enero不是把第三写成el tercero de enero的日常日期算法。']);
bookChecked('book-10-d',[61],[
 '正式的届次、周年、排名等场景仍可用大于10的序数词。',
 '复合序数的连写、分写及性别配合要按实际规范形式核对，不把一个词形随意拆成不一致的两部分。'
],['书中décimo tercero等分写形式与常见连写decimotercero等须按整体规范理解；不能将一个规范变体当作所有场景唯一答案。'],[],{columns:['顺序','代表性形式'],rows:[['11','undécimo / undécima；另有decimoprimero系列'],['12','duodécimo / duodécima；另有decimosegundo系列'],['20','vigésimo / vigésima'],['30','trigésimo / trigésima'],['40','cuadragésimo / cuadragésima'],['50','quincuagésimo / quincuagésima'],['60','sexagésimo / sexagésima'],['70','septuagésimo / septuagésima'],['80','octogésimo / octogésima'],['90','nonagésimo / nonagésima']]});
bookChecked('book-11-a',[62,63],[
 '修饰名词的demasiado/mucho/poco/ninguno等按各自性数规则配合；bastante在本节只按数变，不按性变。',
 '不可数本节用量可从nada de、poco、bastante、mucho到demasiado理解；可数个体否定用ningún/ninguna等。',
 '名词明确时可省略，但数量词形式仍对应所指数和本词类别。'
],['muchas galletas、bastantes galletas、nada de agua、ningún vaso分别按名词和量词类别判断。','bastante在语境中可说足够或相当数量，不是可在所有句子机械译成同一个程度。'],[rwInput('足够的椅子：___ sillas. 用bastante的适当形式。','bastantes','本节bastante按复数变bastantes，不造bastantas。')]);
bookChecked('book-11-b',[63],[
 '不可数名词前poco/poca强调少或不足，un poco de强调仍有一点；都可说小量但视角不同。',
 'poco按名词配性数；un poco de作为本节量结构不因此改成una poca de。'
],['Queda poca leche强调牛奶不多；Queda un poco de leche可强调还有一点可用。不要把un poco限制成只能修饰所谓负面事物。'],[rwInput('还有一点牛奶：Queda ___ leche. 按题意填本节三个词的少量结构。','un poco de','本题突出仍有一点，采用un poco de。')]);
bookChecked('book-11-c',[64],[
 '程度词修饰本节形容词、副词或动词时，通常不按主体性别和数配形。',
 '普通性质形容词/副词前常用muy，动词程度常用mucho；比较级mucho mejor等另按比较结构学。',
 '修饰动词的这些程度词常在动词后；否定程度本节可用no…nada等框架。'
],['Ellas trabajan mucho；Son muy amables；Están bastante cerca；No trabajan nada。','名词前muchas preguntas与动词后preguntan mucho是不同角色，不能因为主语复数就把后者改muchos。']);
bookChecked('book-12-a',[66],[
 '先识别主语与动词，再看是否有直接对象和间接接收/受影响对象。',
 '本节直接宾语可指人或物，特定类型的人物直接对象常由a引出；不能将所有人称a都判成间接宾语。',
 '间接宾语也可指事物，不仅是人物接收者；完整间接对象的a与代词角色分别检查。'
],['Le quito una mancha a la camisa：camisa为受影响的间接对象，mancha是被去除的直接对象。','有些动词可不明确说直接对象，是否有宾语必须按当前义项与语境判断。'],[rwChoice('Le quito una mancha a la camisa中，被去除的直接对象是？','una mancha',['una mancha','a la camisa一定是主语','le是动词'],'先还原去掉什么与影响哪件衣物。')]);
bookChecked('book-12-b',[68],[
 '本节反身结构中，主语与直接对象或间接对象指向同一人物/事物。',
 'se lava与se lava las manos的角色分析不同：后者的直接对象是身体部位，代词连接到主语本人。'
],['不能把所有代词式动词都解释成字面反身；其他词条和后续相互/评价结构分别学习。']);
bookChecked('book-12-c',[68],[
 '本节gustar、doler、encantar、molestar、preocupar等结构中，产生感受或反应的事物常作主语。',
 '体验者常由间接宾语表达，动词不因中文译文把我放在开头就自动变第一人称。'
],['A Ana le gustan las plantas：plantas是复数主语，Ana为体验者。','同一动词在其他义项或构式须另分析，不能把该角色表扩成一切用法。']);
bookChecked('book-13-a',[69],[
 '主语代词的基本人称/数及部分性别形式按完整表学习，动词与相应组配合。',
 'tú/vosotros等与usted/ustedes的称呼差别要结合地区与关系；拉美普遍以ustedes作你们，另有vos地区系统。',
 'usted、ustedes在本节变位中分别与第三人称单数、复数组配合。'
],['书中的西班牙本土正式/非正式表不能无条件套给所有西语地区。'],[],{refRepair:'subject-paradigm'});
bookChecked('book-13-b',[70],[
 '西语主语可在变位和语境足够明确时省略，不是每句都必须先写yo。',
 '对比、强调、消歧时可明确写主语，省略不再合适或会丢失对比信息。',
 'usted/ustedes明说时也可强调正式称呼，不一定每次都在对比不同人物。'
],['省掉的是主语代词而非动词的人称；Yo lo hice可突出是我做的而非别人。']);
bookChecked('book-14-a',[71],[
 '常见介词后第一、二人称单数用mí、ti，与主格yo、tú不同；其余相应形式按表。',
 'mí带区别重音，ti不加该重音；él仍保留其代词重音，不参与de+冠词el缩合。',
 'entre、表示甚至的hasta、según等本节特殊结构使用yo/tú等主格形式，不照常见mí/ti硬套。'
],['entre tú y yo；hasta yo lo entiendo；según tú，分别核对介词或用法。'],[rwInput('按本节结构：entre tú y ___. 填我。','yo','entre的本节组合用主格yo。'),rwInput('按照你的看法：según ___. 填你，保留必要重音。','tú','本节según用tú。')],{columns:['人物','常见介词后形式'],rows:[['我','mí'],['你（tú）','ti'],['他/她/您','él / ella / usted'],['我们','nosotros / nosotras'],['你们（vosotros组）','vosotros / vosotras'],['他们/她们/ustedes','ellos / ellas / ustedes']]});
bookChecked('book-14-b',[72],[
 'con与本节我、你结合使用conmigo、contigo，不写con mí或con ti来代替这些普通结构。',
 'con él/ella/usted/nosotros等按相应形式分写，不从conmigo推广造其他拼合词。'
],['conmigo/contigo没有本节普通书面重音；与sin ti、para mí等其他介词结构分开记。']);
bookChecked('book-15-a',[73],[
 '第一、二人称对象me/te/nos/os可分别作直接或间接宾语；形式相同不等于句中角色相同。',
 '选择取决于被指代者为我/你/我们/你们及动词框架，不按主体性别另造词形。'
],['Ana me ve中的me为被看见者；Ana me da un libro中的me为接收者。'],[],{columns:['对象','直接/间接形式'],rows:[['我','me'],['你（tú）','te'],['我们','nos'],['你们（vosotros组）','os']]});
bookChecked('book-15-b',[74],[
 '第三人称和usted/ustedes所指对象在本节分直接lo/la/los/las与间接le/les。',
 '直接对象形式按所指性数，间接le/les在本节不分性，只分数；两类均可能涉及人或事物。',
 '本节主线用于已识别对象或相应间接对象复现，地区leísmo等另作条件化说明。'
],['Le cambian el aceite al coche：间接对象可为车；Los he visto：直接对象也可为人物。','按本节lo/la主线做题时明确条件，不把所有地区对人物的le用法一概定错。'],[],{columns:['所指对象','直接','间接'],rows:[['第三人称/usted，m.单数','lo','le'],['第三人称/usted，f.单数','la','le'],['第三人称/ustedes，m.复数','los','les'],['第三人称/ustedes，f.复数','las','les']]});
bookChecked('book-15-c',[76],[
 'lo既可指阳性单数名词对象，也可中性概括未知名物、整件事、话语或内容小句。',
 'lo还可指回ser、estar、parecer后的相应表语内容，不按该人物性别改成la。',
 '先恢复lo指向的实际成分，再判断是阳性对象还是中性内容/表语，不见lo就假定它指一个男人。'
],['No entiendo por qué se fue→No lo entiendo；Ella es simpática y él también lo es：lo指回形容词性质。'],[rwInput('她很友好，他也是：Ella es simpática y él también ___ es. 填表语回指形式。','lo','本节lo可指回ser的性质表语，不按说话者或人物性别选la。')]);
bookChecked('book-16-a',[77],[
 '本节普通变位动词前置对象代词；否定时no在代词之前。',
 'haber复合时态中对象代词在助动词前，不插进haber与分词之间。',
 '肯定命令的后接属于例外结构，不能将前置规则无条件套给它。'
],['Te he visto、No te he visto；不能按普通主线写He te visto。']);
bookChecked('book-16-b',[78],[
 '同时有本节间接与直接宾语代词时，通常间接在前、直接在后，再接相应变位动词。',
 'me/te/nos/os与lo/la/los/las成组组合，两个所指对象分别检查，不因一个是复数就让另一个跟着变。'
],['Me la prestas：我为接收者me，阴性单数物品为la。']);
bookChecked('book-16-c',[78],[
 'le或les在lo/la/los/las前面时变为se，间接在前的次序不变。',
 '该se不能单独显示接收者的数或性；需由上下文或a+人物短语澄清。'
],['Se las doy中的las说直接对象阴性复数；se可能由le或les变化，不表示接收者一定多人。']);
bookChecked('book-16-d',[79],[
 '肯定命令、原形、副动词后接相关对象代词时连成一词。',
 '附接通常保持原动词的重读，按新音节结构决定是否补书面重音，不是所有附接都统一加同一符号。',
 '本节vosotros肯定命令后接os常去末尾-d；具体特殊词与其他人称脱落另按命令式细则查。'
],['déjasela / dejársela / dejándosela对比动词形式；poneos按本节去-d，不能只做字符拼接。']);
bookChecked('book-16-e',[80],[
 '本节相关动词迂说结构中，代词组可放变位动词前，或附在非人称形式后。',
 '前置分写、后接连写，并按新词形核对重音；不是任何两个动词都允许同样移动。',
 '双代词通常整组安排，不任意将同一组合拆在两端。'
],['Te lo tengo que decir / Tengo que decírtelo；Te lo estoy diciendo / Estoy diciéndotelo。','后续迂说章节按具体构式说明限制，不把位置规律当无条件万能规则。']);
bookChecked('book-16-f',[81],[
 '本节反身/身体结构与直接对象同时代词化时，相关反身形式在直接宾语代词前。',
 '本节gustar/doler等评价结构中的喜欢对象或刺激物是主语，不用直接宾语lo/la把同一主语再代词化。',
 '相同动词在别的义项或lo作表语回指时须另分析，不能把这里的无直接对象扩大到所有同字动词。'
],['Se lava las manos→Se las lava；Me gustan los libros→Me gustan，不把书这个主语硬换成me los gustan。'],[rwInput('她洗手：Se lava las manos，替换手这个直接对象：Se ___ lava.','las','las manos为f.复数，反身se在直接las之前。')]);
bookChecked('book-17-a',[82],[
 '本节普通直接宾语代词通常指已识别对象；完整直接对象常规后置时不机械再加重复代词。',
 '本节间接对象代词可以回指前文，也可与随后明确的接收者/受影响者a短语同现。',
 '前置话题、尾置补充、地区性直接对象复现等条件另分，不能从普通主线禁止所有重复。'
],['Le entregué un paquete a Ana可先用le后澄清Ana；La he encontrado可回指前文的阴性对象。','Lo he comprado, el libro等有尾置说明时的停顿和信息组织，不当成普通无条件重复的同一练习。']);
bookChecked('book-17-b',[83],[
 '重读人称对象a mí/a ti/a él等用于对比、强调或澄清时，本节通常与相应非重读对象代词复现。',
 '介词后形式帮助澄清lo/la/le/les/se的所指，不取代其普通句中位置。',
 '宾语重读人称短语与主语代词分开；本节不只用孤立a mí来替代完整结构中的me。'
],['Me miró a mí, no a ti；Se lo di a ella：分别指明对比对象或接收者。'],[rwInput('明确强调看见我：___ vio a mí. 填本节非重读对象形式。','me','重读a mí与非重读me在本节复现。')]);
bookChecked('book-18-a',[85],[
 '本节反身关系中，主语与直接或间接对象指向同一实体。',
 '代词me/te/se/nos/os/se与动词的人称数要共同检查；不是看到se就所有人称保持se。',
 '不属于字面反身的其他代词式词条或构式另看，不把所有-se词只译成自己。'
],['me acuesto、te acuestas、nos acostamos同时检查代词与动词词干词尾。'],[],{columns:['人物','本节示范'],rows:[['yo','me acuesto'],['tú','te acuestas'],['él/ella/usted','se acuesta'],['nosotros/as','nos acostamos'],['vosotros/as','os acostáis'],['ellos/ellas/ustedes','se acuestan']]});
bookChecked('book-18-b',[86],[
 '本节可表达动作在自己身上、身体部位或自己穿戴/相关物上发生，角色结构不同。',
 '明确所属的身体部位、衣物常用定冠词；不要从中文物主结构逐字复制。',
 '身体/物品直接对象另行代词化时，相关人物代词与直接对象代词都须保留相应位置。'
],['Me seco / Me seco el pelo / Me seco los zapatos先分身体整体、部位、穿戴物。','Se afeitó el bigote→Se lo afeitó；me lo puedo tocar按两种对象角色分析。']);
bookChecked('book-18-c',[87],[
 '复数人物与相关代词式形式可表达相互动作，即甲对乙、乙对甲。',
 '同样的nos/os/se复数形式也可能是分别对自己，单看代词不能永远区分反身和相互。',
 '需要消歧时补el uno al otro、mutuamente、a sí mismos等并核对相应语境与配合。'
],['Nos escribimos可指我们互相通信；上下文明确后再译，不把任何nos都解释为互相。']);
bookChecked('book-18-d',[88],[
 '本节刺激物/喜欢内容作主语，体验者作间接对象；普通名词主语依单复数配动词。',
 '原形活动作整体主语常用单数；多个活动或活动与名词组合的概念统一性、顺序和语境也影响实际一致。',
 '书中给出的入门模式：活动开头的组合常单数；靠近动词的复数名词在相应组合中可引复数，不能扩大成所有并列主语只有一种写法。',
 'dar+感受名词、parecer/resultar+评价、caer+bien/mal等也是本节角色模式，但各词搭配和意义分别学。'
],['Me gusta viajar y leer；Me gustan las novelas y viajar：按书中本节明确语序练，再查其他并列和语体条件。','Me dan miedo las tormentas；Me parece bien salir；Ana me cae bien分别明确刺激物与体验者。'],[rwInput('本节指定语序：Me ___ las novelas y viajar. 用gustar现在时，复数名词紧接动词。','gustan','按本节给出的组合主线，las novelas在此引复数gustan。')]);
bookChecked('book-19-a',[92],[
 '动词词目通常用非人称原形，按-ar/-er/-ir三类原形结尾分类。',
 '代词式词条可在原形后标-se，进入句子后仍按人物和结构安排相应代词。'
],['学习原形既是查词入口，也是识别变位类型，不证明该词全部形式规则。']);
bookChecked('book-19-b',[93],[
 '变位先限定语气、时态和人称，再从原形识别词干与词尾。',
 '规则词按对应时态人称换尾；不规则还要识别词干、特殊人称或拼写变化范围。',
 '同一个词在一个时态规则，不推出其他时态也规则；现在时某人称变化也不扩大到全范式。'
],['querer的quie-、jugar的jue-、pedir的pid-按具体时态和人称确认。']);
bookChecked('book-19-c',[94],[
 '动词与实际主语的人称数配合；多个主语含说话者时可为第一人称复数。',
 '许多人称标志可帮助识别形式，如-mos、-n，但不能取代具体时态表。',
 'tú常见-s、vosotros常见-is等有简单过去与命令形式等例外，不能用来任意造词。'
],['Lola y yo sabemos；tú简单过去hablaste不按其他时态习惯加成hablastes。']);
bookChecked('book-20-a',[95],[
 '原形可命名一个动作或过程，是词典中的基本形式，不直接标出本节六组人称。',
 '三类常见结尾为-ar/-er/-ir；代词式原形还要识别-se与动作主体关系。'
],['hablar、comer、salir分别属于原形类别，不与hablando、comido等混用。']);
bookChecked('book-20-b',[95],[
 '原形可承担名词性任务，如主语、某些动词的内容补语、介词后的活动表达。',
 '本节gustar等把活动作主语时，原形表示所喜欢或引起感受的过程。',
 '这些位置通常不把原形照英语-ing替换成副动词。'
],['Descansar ayuda；Prefiero leer；sin hablar；Me gusta nadar分别看句中功能。']);
bookChecked('book-20-c',[96],[
 '原形虽不按六人称变位，仍有语义主体；主体由句子框架和上下文确定，不保证永远等于主句主语。',
 '原形必要时可明确写出主体以消歧；也能带直接、间接、地点时间补语及内容从句。',
 '指令、告示等独立原形的理解按相应场景，不把它当普通现在时陈述。'
],['Nos obligaron a salir中salir由我们执行；Antes de llegar ella…明示到达者是她。','Decirle eso a Ana mañana：原形同样能带多个补语。'],[rwChoice('Nos obligaron a salir中，执行salir的是谁？','nos所指的我们',['nos所指的我们','只能是主句省略的他们','原形永远没有主体'],'原形主体须按框架判断，本例是我们被要求出去。')]);
bookChecked('book-20-d',[97],[
 '规则副动词常-ar→-ando、-er/-ir→-iendo；元音相邻和特殊词形按具体范式核对。',
 '本节常用-ir词干e/o变化及其相应派生词要按实际词学习，不对所有外形相似词任意换元音。'
],['caer→cayendo、ir→yendo、decir→diciendo、reír→riendo、dormir→durmiendo；完整常用表可对照下表。'],[],{refRepair:'gerund-irregular-table'});
bookChecked('book-20-e',[98,99],[
 'estar+副动词在相应时态中展开动作过程，既能说尚在进行，也能以完成等框架回看已结束的过程。',
 '副动词也可表示方式、手段、伴随或路线提示，不只等于一个固定“正在”。',
 '本节名词性活动主语、相应动词补语和普通介词后活动常用原形，不以副动词替代；特殊构式另查。'
],['He estado trabajando可回看一段已结束工作过程；Aprendo practicando说通过练习学习。','Entrando a la derecha等路线表达按具体上下文理解；antes de comer不写antes de comiendo。']);
bookChecked('book-20-f',[99],[
 '规则分词常-ar→-ado、-er/-ir→-ido；特殊形式及本节列举的派生词按实际范式记。',
 '常用特殊形包括hecho、satisfecho、dicho、visto、resuelto、roto、vuelto、puesto、escrito、muerto、abierto、cubierto。',
 'freír有frito/freído，imprimir有impreso/imprimido；不同句法用途和词条规范需另辨，不排斥本节允许的规范变体。'
],['deshecho、contradicho、previsto、devuelto、descubierto、reabierto按实际构词关系记；不只因拼写像另一个词就硬套。'],[rwInput('resolver（解决）的过去分词基本形式。','resuelto','本节特殊形式resolver→resuelto。'),rwInput('satisfacer（使满意）的过去分词基本形式。','satisfecho','本节特殊形式satisfecho。')],{refRepair:'participle-forms-complete'});
bookChecked('book-20-g',[100],[
 '分词作本节形容词性修饰、estar状态表语或tener+结果状态时，按对应名词性数配合。',
 'tener+对象+分词的本节状态结构不能当成haber完成时；它有对象的相应一致。'
],['archivos protegidos；Están protegidos；Los tengo protegidos分别核对档案这个对象。','Tengo terminadas las tareas与He terminado las tareas的分词一致要求不同。'],[rwInput('状态：Tengo ___ las tareas（f.复数任务）. 用terminado。','terminadas','tener结果状态结构中分词与对象tareas一致。')]);
bookChecked('book-20-h',[101],[
 'haber按人称/时态等变化，后接分词构成本节完成类复合形式。',
 'haber完成结构里的分词不随主语或宾语性数变化。',
 '本节基础语序对象代词放助动词前，不插在haber与分词之间；其他语体的副词位置须另据具体规范，不把入门概括当所有插入都绝对禁止。'
],['Nosotras hemos salido；A Ana la he llamado：salido、llamado均不按人物阴性改。','he comido、había comido、habré comido先区分助动词的时间参照。']);
bookChecked('book-21-a',[102],['规则现在时按-ar/-er/-ir换尾，分别为o/as/a/amos/áis/an，o/es/e/emos/éis/en，o/es/e/imos/ís/en。','规则范式yo、tú、第三人称重音在词干，nosotros/vosotros在词尾；写出重音符号不能省略。']);
bookChecked('book-21-b',[103],['本节词干e→ie、o→ue、jugar的u→ue出现在词干重读人称。','nosotros/vosotros本节不按重读人称双元音化；必须先确认词属于这一变化族。'],['entiendo/entendemos；puedo/podemos；juego/jugamos，不从单个词推广到所有含e/o/u的动词。']);
bookChecked('book-21-c',[103,104],['pedir/repetir类现在时词干e→i，同样在本节词干重读人称出现。','pedimos/repetimos保留e；-ir词还须区分e→ie族与e→i族及具体特殊词，不只按拼写猜。']);
bookChecked('book-21-d',[104,105],['hacer/poner/salir/valer/traer/caer等本节yo分别hago/pongo/salgo/valgo/traigo/caigo。','ver/dar/saber/caber的yo为veo/doy/sé/quepo；parecer/conocer/conducir等列举族有-zco。','相应派生词通常保留本节关系，如deshago、supongo、atraigo、desaparezco；不是所有-cer都机械造-zco。']);
bookChecked('book-21-e',[105],['tener、venir、decir、oír、estar的yo特殊与其他变化须一起学全六人称。','tener/venir在相应人称有ie；decir有e→i；oír有y与重音位置，estar有estoy及estás/está/estáis/están。'],['oigo/oyes/oye/oímos/oís/oyen；decimos而不是dicimos。']);
bookChecked('book-21-f',[106],['ir为voy/vas/va/vamos/vais/van；ser为soy/eres/es/somos/sois/son。','haber助动词为he/has/ha/hemos/habéis/han；存在句非人称hay另行区分。','助动词haber后可接分词组成现在完成；hay不是把普通主语变复数后的han。']);
bookChecked('book-21-g',[106,107],['现在时可陈述当前性质、规律和眼下状态，不只表示这一秒动作进行。','本书以说话者作为当前信息来陈述为主线；未来形式也能表达对现在的推测，不能一律按时间名称理解。'],['Está en casa陈述位置；Estará en casa在合适语境可推测位置。']);
bookChecked('book-21-h',[107],['时间语境明确时，现在时可陈述已经安排、日程或当作确定的未来事项。','现在时也可按顺序给路线和操作说明；未来预测可用将来时，两者表达立场可能不同。'],['Mañana salgo temprano；Primero abres la aplicación y después pulsas Guardar。']);
bookChecked('book-21-i',[108],['现在时可表达习惯、一般性质、定义及一般判断。','同一现在时形式的时间须结合语境判断，可以是眼下、将来或一般性，不靠形式名称独断。']);
bookChecked('book-22-a',[109],['haber现在时六人称加过去分词：he/has/ha/hemos/habéis/han+分词。','分词不与人物或对象配性数；对象代词在本节基础语序置于haber前。']);
bookChecked('book-22-b',[110,111],['现在完成时可将已发生事件作为当前状况的来源或当前相关经验来谈。','也可把完成事件置于说话者仍作为当前的时间范围，如本周、今年、迄今。','siempre/nunca/alguna vez/últimamente等帮助定位但不是自动选时态开关；地区分工也须考虑。'],['He perdido la tarjeta在本例解释当前没有卡；同样事实在别的参照和地区可选简单过去。']);
bookChecked('book-22-c',[112],['明确将来参照点时，现在完成时也可将该点之前的完成当作确定结果来表达。','这种用法不能把所有现在完成时都译为过去；须先定位截止点及语境。','将来完成时也可表达未来前完成，两者的表达立场、语域与地区自然度需结合实际材料。'],['Para las seis ya he terminado在相应明确安排语境说“到六点我就做完了”。'],[rwChoice('明确讨论明天截止点：Para mañana ya he terminado。这里的完成可以相对哪个时间？','明天的参照点',['明天的参照点','只能是去年','任何情况下只能是说话前'],'本节专讲明确未来参照下的用法，不只按形式名称翻译。')]);
bookChecked('book-23-a',[113,114],['规则简单过去-ar为é/aste/ó/amos/asteis/aron；-er/-ir为í/iste/ió/imos/isteis/ieron。','tú规则过去形式没有词尾-s；-ar/-ir部分nosotros形式与现在时同形，按语境识别。','相应元音词干第三人称有y如leyó/leyeron、oyó/oyeron、construyó/construyeron；具体词形及重音单独核实。']);
bookChecked('book-23-b',[114,115],['强变化过去词干包括sup-/pud-/pus-/hub-/cup-/tuv-/estuv-/anduv-/quis-/vin-/hic-/dij-/traj-和-ducir→-duj-。','相应特殊词尾e/iste/o/imos/isteis/ieron；词干末j的复数第三人称用-eron。','hizo的z与hice/hicieron区分；yo与第三人称单数不照规则词尾加重音符号。','对应派生词仍查本族，如contener/intervenir/deshacer/contradecir；不靠外形相似任意类推。']);
bookChecked('book-23-c',[115],['本节相关-ir动词第三人称单复数词干e→i或o→u，其他人称不照此改变。','pidió/pidieron、durmió/durmieron；sentir/mentir/preferir等本节也须识别此变化。','oír第三人称oyó/oyeron属于本节前述y形，不当作所有含o的词都改u。']);
bookChecked('book-23-d',[115,116],['dar为di/diste/dio/dimos/disteis/dieron。','ir与ser同为fui/fuiste/fue/fuimos/fuisteis/fueron；按补语与意义区分，不靠拼写区分。']);
bookChecked('book-23-e',[116],['简单过去时可将已完成事件安放在其发生的过去框架，并作为整体叙述。','相对现在完成的当前联系框架、相对未完成时的内部背景视角，要分别比较。','事件持续很久也能整体叙述；动作长短、中文“了”都不是可靠单一判据。']);
bookChecked('book-24-a',[117,118],['本节对比同一类完成事实的两种参照：现在完成连接当前框架；简单过去置于其过去发生框架。','hoy/esta semana与ayer/el año pasado常提示不同参照，但须按实际说话时间、叙述选择和地区惯例理解。','不是只要时间距现在近就必须现在完成，也不是中文有“了”就简单过去。']);
bookChecked('book-24-b',[118,119],['siempre/nunca/alguna vez等可指迄今，也可限于已经结束的往日范围。','同一时间副词须先补全隐含参照：一生迄今，还是某个过去阶段；不能脱离语境强判。'],['Nunca he vivido allí与Nunca viví allí在相应参照、地区语境各有用途。']);
bookChecked('book-24-c',[120],['刚刚发生也可按当前联系或事件本身分别使用现在完成或简单过去。','ya/hace un momento/具体今天时刻不自动排斥其中一个形式；地区偏好进一步影响选择。'],['Ya ha llegado / Ya llegó在合适地区与情境均可自然，不能把其中一种一律判错。']);
bookChecked('book-25-a',[121],['未完成时可把当前描述的视角移到过去内部，展示那时的状况。','“未完成”描述的是叙述观察方式，不证明现实中动作永远没结束。']);
bookChecked('book-25-b',[122],['规则-ar为aba/abas/aba/ábamos/abais/aban；-er/-ir为ía/ías/ía/íamos/íais/ían。','yo与él/ella/usted同形，靠主语和上下文消歧；并非yo与tú同形。'],['OCR或旧排版不能替代范式核验：hablaba属于yo或第三人称单数，hablabas才是tú。']);
bookChecked('book-25-c',[123],['本节特殊范式：ir为iba/ibas/iba/íbamos/ibais/iban，ser为era/eras/era/éramos/erais/eran。','ver为veía/veías/veía/veíamos/veíais/veían，完整保留ve-与重音。']);
bookChecked('book-25-d',[123,124],['回忆过去人物、物体的样子、性质、能力等可用未完成时来描绘。','不要把状态动词固定成永远只能未完成时；整体有界经历另见本书第26章。']);
bookChecked('book-25-e',[124],['从过去阶段内部描述当时反复习惯，可用未完成时。','antes/cada semana/a veces等常配合这种描述，但习惯若作为有界总经历叙述也能用其他过去时。']);
bookChecked('book-25-f',[125],['指定过去某一时刻，可用未完成时说明当时状态、环境或正在发生的事。','estar未完成时+副动词突出过程，但过去背景不必每个动词都写成进行结构。'],['A las ocho estaba leyendo；tenía frío、llovía、era tarde分别直接交代背景。']);
bookChecked('book-26-a',[126,127],['未完成时从过去过程内部观察；简单过去把事件作为已经完成的整体。','cuando cruzaba与cuando crucé可改变第二件事发生在过街中还是过街后；不是可随意互换的装饰。']);
bookChecked('book-26-b',[127,128],['短过程和长过程都可整体或内部观察，动作长短不决定时态。','本节把持续总时长作为整个已结束过程来叙述时使用简单过去；反复习惯内部的时长表达另辨。'],['Trabajé allí diez años是十年整体；Cuando vivía allí, trabajaba ocho horas al día是习惯内部每天时长。']);
bookChecked('book-26-c',[128,129],['描述人物物体过去性质常用era等；把活动、旅行、聚会当完整经历评价常用fue等。','同一性质若明确概括完整持续阶段，也能用简单过去；不要把ser/estar/tener固定只配某时态。'],['La casa era pequeña；El viaje fue tranquilo；Tuve el pelo largo dos años。']);
bookChecked('book-26-d',[130],['过去阶段内部的习惯用未完成时；在完整过去范围内计数的事件则可简单过去。','两次每天的习惯与一生只发生两次的事件不同，不能看到次数就统一选时态。']);
bookChecked('book-26-e',[130,131],['叙事可用未完成时停留在当时场景，用简单过去引入完成事件、推进情节。','同一段交替使用是视角组织，先辨正在观察的背景与发生的变化，再逐句选形式。']);
bookChecked('book-26-f',[131,132],['未完成时与现在完成时同样能区分内部背景和完整事件。','现在完成联系当前框架，不会让其从句所有背景也强制改成完成时。'],['Cuando has llamado, estaba leyendo；Hoy he trabajado tres horas再按说话地区与叙述语境理解。']);
bookChecked('book-26-g',[132,133],['完整故事可放在当前相关框架，用现在完成组织事件；也可放入过去框架，用简单过去组织。','两种组织下都可保留未完成时背景，须同时决定参照框架与过程观察方式这两个维度。']);
bookChecked('book-27-a',[134],['过去完成由había/habías/había/habíamos/habíais/habían+分词构成。','haber与人物配合，分词在完成结构不与对象、主语配性数。']);
bookChecked('book-27-b',[135,136],['过去完成把事情放在另一个明确过去参照点之前。','过去参照点可由上下文提供，不一定本句写出cuando；若无可恢复参照，不因事情很早就自动过去完成。','顺序推进的主线过去事件与回看更早事件要分开。']);
bookChecked('book-28-a',[137],['简单将来既可预测将来，也可推测眼下情况。','本书对比现在时作确定陈述与将来时作预测/推测；实际语用还包括承诺、意愿等，不能把将来时一律判为不确信。']);
bookChecked('book-28-b',[137,138],['规则三类原形直接加é/ás/á/emos/éis/án，不删-ar/-er/-ir。','词尾与haber现在时可作记忆联系，但不是把haber完整单词接上。']);
bookChecked('book-28-c',[138,139],['不规则词干为dir-/har-/querr-/habr-/podr-/sabr-/cabr-/tendr-/pondr-/vendr-/saldr-/valdr-。','特殊在词干，人称词尾仍用é/ás/á/emos/éis/án。','相应派生如desharé/reharé/mantendré/supondré按实际词条继承，别给任意外形近似词套用。']);
bookChecked('book-28-d',[139,140],['将来时可预测、承诺、询问将来情况，也可提出未来威胁或保证，语境决定语用。','与现在时未来日程、ir a计划等比较，勿只按中文“会/要”机械选。']);
bookChecked('book-28-e',[140,141],['将来时可对当前未知位置、年龄、状况、习惯等作推测。','同一个será/estará是否指眼下或以后，先看情境和时间词。'],['No responde; estará ocupado现在可能正忙，不一定说未来会忙。']);
bookChecked('book-29-a',[142],['将来完成为habré/habrás/habrá/habremos/habréis/habrán+分词。','助动词承担人称和将来形式，分词仍用不变基本形。']);
bookChecked('book-29-b',[142,143],['将来完成可对当前之前发生的事作推测，与现在完成的陈述角度比较。','不能把habrá salido一律译为未来出去，要先判断是否在推测已经离开的原因。']);
bookChecked('book-29-c',[143],['明确未来参照点时，将来完成表达该点之前的完成。','Mañana terminaré着眼明天完成事件；Para mañana habré terminado着眼到参照点已完成。','本书另与现在完成未来用法比较，实际自然度及立场要放回地区、语域与情境。']);
bookChecked('book-30-a',[144],['条件式规则三类原形加ía/ías/ía/íamos/íais/ían。','将来时特殊词干也用于条件式：diría/haría/querría/tendría等；yo与第三人称单数同形。']);
bookChecked('book-30-b',[145,146],['条件式可对过去当时的时间、情况作推测。','对当前推测的será与对过去推测的sería须区分，并非sería总指未来假设。']);
bookChecked('book-30-c',[146],['条件式可提出现在/将来假设条件下的结果或建议，不必每次显式写si从句。','本节也借假设距离表达委婉请求与建议；podría不只有单一礼貌意义。','本课普通非现实条件框架si+tuviera…+结果tendría，不能机械把两边都改条件式。']);
bookChecked('book-31-a',[147],['条件完成为habría/habrías/habría/habríamos/habríais/habrían+分词。','仍须核对人物与助动词，分词不变；区分简单条件与相对先完成。']);
bookChecked('book-31-b',[147,148],['条件完成可推测过去参照点之前发生的事。','过去现场推测sería、过去之前推测habría sido、当前之前推测habrá sido，参照层次不同。']);
bookChecked('book-31-c',[148],['条件完成可讨论与已发生现实不同的过去假设及结果。','本节si+hubiera/hubiese+分词配habría+分词，先明确当时实际情况与反事实设想。','不要把这种反事实解读推广成所有habría+分词都必定反事实；前节推测也有同形。']);
bookChecked('book-32-a',[149],['规则现在虚拟式-ar用e/es/e/emos/éis/en，-er/-ir用a/as/a/amos/áis/an。','一般词干重音分布与现在直陈相应模式相同；现在虚拟式可按语境对应现在和未来。','语气选择先看句式与表达任务，时间名称不能替代语气条件。']);
bookChecked('book-32-b',[150],['现在直陈e→i的本节-ir族，现在虚拟式各人称都有i，如pida/pidamos。','sentir/mentir/preferir族nosotros/vosotros用i而非ie：sintamos/mintáis/prefiramos。','dormir/morir族nosotros/vosotros用u：durmamos/muráis；其他词干重读人称有ue。','-ar/-er双元音族nosotros/vosotros不照-ir族随意改元音。']);
bookChecked('book-32-c',[151],['许多yo词干特殊动词以该词干构成现在虚拟式全范式，如haga/ponga/salga/diga/tenga/venga。','conozca/parezca/conduzca保留-zc-；oiga/traiga/caiga保留相应词干，注意具体词形。','本法有下一节完全特殊词等例外，不把“去yo的o”当无条件万能公式。']);
bookChecked('book-32-d',[151,152],['ser/estar/ver/ir/haber/saber的基本虚拟词形为sea/esté/vea/vaya/haya/sepa，须展开全人称。','estar为esté/estés/esté/estemos/estéis/estén；haber个人与存在句的haya按功能区分。']);
bookChecked('book-32-e',[152,153],['从简单过去ellos形式删-ron，分别接-ra/-ras/-ra/-ramos/-rais/-ran或-se/-ses/-se/-semos/-seis/-sen。','nosotros形式保留相应词干重音并写所需重音符号，如habláramos/hablásemos/fuéramos/fuésemos。','此法适用于本节规则、不规则过去词干；时间可为过去或现在/未来假设，不只等于过去。','-ra/-se在本节普通虚拟用途可替换；并不宣布它们在所有历史、文体和固定用法无条件等同。']);
bookChecked('book-32-f',[154],['现在完成虚拟式为haya/hayas/haya/hayamos/hayáis/hayan+分词。','须先满足虚拟式环境，再表相对于现在或明确将来参照的先完成。']);
bookChecked('book-32-g',[154],['过去完成虚拟式用hubiera/hubiese两套haber未完成虚拟范式+分词。','表达过去参照以前或相应反事实过去；不能只凭中文“已经”就决定语气。']);
bookChecked('book-33-a',[155,156],['本书以“陈述信息/不把从句当作陈述”解释直陈与虚拟，不等于“真实/不真实”。','虚拟式可呈现愿望、拒绝、可能性、评价等从属内容；已知事实也可能虚拟。','独立祝愿、命令等固定用法另学；不要把本书入门“依赖框架”概括误写成任何独立外观都禁止虚拟。']);
bookChecked('book-33-b',[156,157,158,159],['querer/desear/pedir/recomendar/permitir等愿望、目标、要求框架中的que从句常用虚拟式。','本节同主体常用原形，不同主体用que+虚拟；Es necesario等可用原形泛指，用que从句明确人物。','实际动词框架各有搭配，如permitir/pedir可有对象+原形；不能把同异主体口诀覆盖所有动词。','para que目的从句用虚拟；Que+现在虚拟式可作祝愿和提醒。'],['Quiero estudiar / Quiero que estudies；¡Que descanses!；Trabaja para que sus hijos puedan estudiar。']);
bookChecked('book-33-c',[160,161,162],['creo/supongo/me parece que等以自己的判断呈现信息时，常接直陈；不必百分之百确定才可直陈。','no creo/dudo/es posible/no es cierto等本节拒绝或质疑信息的框架通常虚拟。','疑问、否定、引述、反问及说话者立场可改变具体选择，不能只扫描no字或把所有“可能”固定一种语气。']);
bookChecked('book-33-d',[163],['decir/repetir/insistir等报告内容与要求行动的意义不同，补语语气随功能变。','Dice que vienes报告你来；Dice que vengas转达让你来的要求。'],[],[rwChoice('转达指令“她叫我等”：Dice que yo ___.（esperar）','espere',['espere','espero'],'此处decir传达要求，que从句用虚拟式。')]);
bookChecked('book-33-e',[163,164,165,166],['me alegra/me molesta/es estupendo/es lógico等评价框架的que从句常用虚拟，即使事实已知。','表达评价与把消息作为陈述不同；Me parece que有判断内容，Me parece bien que评价内容，不能只看parecer。','本节人物对应时可原形，如Me alegro de verte；不同人物que从句，如Me alegro de que estés aquí。','无人称评价可原形泛指或que从句明确人物；先辨角色再选，不要先造句后随便删que。']);
bookChecked('book-33-f',[166,167,168],['关系从句若将对象作为已经识别的特定对象来介绍，常直陈；若只规定未识别对象的要求/任意选择，常虚拟。','不只“已存在/不存在”：对象可实际存在但说话者尚未选定；说话者识别立场才是本节要点。','方式和地点也可对比como dices/como digas、donde está/donde esté，先确认已知方案还是留待选择。']);
bookChecked('book-33-g',[169],['cuando/hasta que/en cuanto/mientras/siempre que等本节时间从句，叙过去或习惯常直陈，前瞻尚待发生常虚拟。','疑问cuándo问时间属于疑问句，不套时间连接词的未来虚拟规则：¿Cuándo vendrá?。','siempre que条件义等特殊连接功能另按相应结构，不能只凭外形决定。']);
bookChecked('book-33-h',[170],['先决定从句需何种语气，再判断同时/后时/先时关系。','本节现在或未来→现在虚拟；相对当前/将来先完成→现在完成虚拟。','过去状况/过去事件/相关假设→未完成虚拟；过去参照以前→过去完成虚拟。','主句时间、从句独立时间事实及语体影响实际时态衔接，本节对应表不是机械逐词替换器。']);
bookChecked('book-34-a',[171],['命令式可直接请求行动，具体能是指令、恳求、命令、建议、邀请或许可。','礼貌程度还取决于称呼、语调、情境与por favor，不能把所有命令式都译成粗鲁命令。']);
bookChecked('book-34-b',[171,172],['规则tú肯定命令与现在直陈第三人称单数同形。','八个高频特殊基本形ve/sal/ven/haz/pon/di/ten/sé分别对应ir/salir/venir/hacer/poner/decir/tener/ser。','对应派生形式如propón/mantén/sostén/entretén/supón/deshaz，注意重音，否定命令另用虚拟式。']);
bookChecked('book-34-c',[172],['vosotros肯定基本形把原形-r换-d：hablad/comed/vivid；带代词时另处理词尾与重音。','本书记录口语以原形代替vosotros命令；正式规范教学主线仍练-d形，不将口语记录当所有场合可替换。','加os通常删-d：sentaos/comeos/vestíos；irse的idos及现代规范允许iros须单独辨，不类推其他动词一概-r+os。']);
bookChecked('book-34-d',[173],['usted/ustedes肯定请求采用现在虚拟式第三人称单数/复数。','代词肯定后接并连写，按整词重音规则补符号，如dígame/diríjanse。']);
bookChecked('book-34-e',[173,174],['本节各受话人否定命令用现在虚拟形式，不在肯定tú/vosotros形前简单加no。','除no，也可由nunca/jamás/tampoco等负向意义引出；先确认语义是否是禁止或否定请求。']);
bookChecked('book-34-f',[174],['肯定命令代词附在动词后合成一词，否定命令代词在变位动词前分写。','多个代词维持对象顺序，le/les+lo/la/los/las变se，按整词核对重音与特殊尾音。'],['Dímelo / No me lo digas；Dáselo / No se lo des。']);
bookChecked('book-35-a',[175],['ser可定义、分类、识别，表达身份、来源、职业、材料、颜色、形状、关系、日期时间等。','年龄普通表达用tener，不用ser照中文或英语硬套。','性质与状态的选择不等于永久/暂时；活动发生地点可用ser，与人物物体位置estar另辨。']);
bookChecked('book-35-b',[176,177],['estar用于人物物体位置及所处状态，固定地理位置也可estar。','分词作状态表语与对应名词性数配合，区分被动过程ser+分词等其他结构。','同一形容词与ser/estar有时都可用但解释不同，先辨分类特征还是当前评价/状态，不靠长短口诀。']);
bookChecked('book-36-a',[178,179],['助动词haber按人物变位；非人称存在haber用单数形式，直陈现在特殊为hay。','存在句常用hay/ha habido/hubo/había/habrá/habrá habido；复数对象不引起haber复数。'],['Hubo problemas而不是本课规范存在句hubieron problemas；Han salido三人已离开则是助动词另一结构。']);
bookChecked('book-36-b',[179,180],['存在haber常介绍或询问听者尚未识别的事物。','可接无冠词复数/物质名词、不定限定词、数词、量词及不定代词等；先辨存在信息。']);
bookChecked('book-36-c',[180,181,182],['estar定位已经识别的人物物体，按其主语数配合；存在haber维持非人称单数。','hay una farmacia引入，la farmacia está…随后定位；同物体可先后用两种结构。','入门常见限定词搭配帮助判断，不是任何有定形式都绝不能在任何语体存在句出现的普遍禁令。']);
bookChecked('book-37-a',[183,184],['ir a+原形可表达依据眼前迹象的预测，也可说决定、计划和意图。','iba a把这些视角置于过去；后续可能实现也可能未实现，不可单凭iba a断言最终没做。']);
bookChecked('book-37-b',[185],['tener que+原形明确哪一个人物有必要/义务；haber que+原形非人称表达必要。','两者均能进入过去、完成等形式：tenía que/ha tenido que、había que/ha habido que。','no tener que表示没有该义务，通常不等于禁止；no hay que也须辨具体语用。']);
bookChecked('book-37-c',[186,187],['estar+副动词展开活动过程，可与直接描述习惯、一般性质的简单形式对比。','状态或性质通常不机械改成进行结构：tiene hambre/parece cansado/está sentada。','同词不同义有差别：veo电视看得见是能力/状态，estoy viendo la tele是当前观看活动。','并非现在进行的任何动作都强制副动词，也不把本节状态概括扩大成所有语境永远禁止某动词副动词。']);
bookChecked('book-37-d',[188],['estar本身可用简单过去、现在完成、过去完成，形成对一段已结束活动过程的回顾。','Estuvo escribiendo不保证作品写完；Escribió una novela本节把成品事件当整体。','进行结构与完成框架可共存；过程持续区间结束和目标完成是两个不同判断。']);
bookChecked('book-38-a',[190,191],['de可表来源、材料/内容、亲属/所属、类型和其他定位参照；a可表去向及关联。','a可用于方向/时刻、部分方式搭配、人物直接对象及间接对象等，不只是“去”。','普通el与a/de形成al/del；代词él及El专名一体等情况另辨。','住在某地通常vivir en；动词和名词搭配还需按具体结构学习，不能按一个中文介词平移。']);
bookChecked('book-38-b',[191,192],['desde标空间/时间的起点界限，hasta标终点界限；de…a…和desde…hasta…可表达完整区间。','仅给起点或终点可用desde/hasta；a也能单独标目的地/时刻，de能标来源，不能将本节区间限制误解为a/de从不单用。','hasta另有“甚至”焦点义，如Hasta su abuelo cantó。','a las seis指定六点，hasta las seis表示持续到六点，desde las seis表示从六点起。']);
bookChecked('book-38-c',[193,194],['en可标处于地点、表面、集合、时间范围、抽象领域或交通方式，不只等于内部。','en三小时可说耗时或将到达的间隔；方向目的地常a，位置常en，按动词搭配具体判断。','交通常en coche/en avión，步行a pie/骑马a caballo是常见不同搭配。','entre界定多个界点之间，也可表多人共同参与，不只允许恰好两个对象。']);
bookChecked('book-38-d',[195,196,197],['para可表目的、接受者/适用对象、去向及截止时限。','por可表经过/通道、模糊地点时间、原因、分配、媒介/信息来源、交换及代行。','por la mañana/por teléfono/por veinte euros按具体义分别学；para mañana不等于明天早上。','持续时长可直接用时间量：Estuve dos meses，不强制para；并非所有地区的por+时长都不规范。'],['Lo hice por Ana可说因她/替她；Lo hice para Ana可说做给她，具体原因与接受者须分清。']);
bookChecked('book-38-e',[197,198],['con表达伴随、组成、工具和方式；sin否定相应有伴随/成分等关系。','肯定方式可副动词，否定未做某事常用sin+原形：salió sin hablar。','不写sin+hablando；副动词前no在其他否定语境的存在，不等于可任意替代本节sin+原形。']);
bookChecked('book-38-f',[198],['contra表示抵触、对抗、碰撞所向等；hacia表示朝向，并不保证已经到达。','hacia+时间也可表示大约那个时刻，别与带重音的hacía（hacer过去时）混淆。']);
bookChecked('book-39-a',[199,200],['encima/debajo/delante/detrás/enfrente/al lado/cerca/lejos/a la derecha/a la izquierda/alrededor等定位参照须分别辨。','明确接出参照物时通常加de：encima de la mesa；参照已知可省去整个de补语：Está encima。','左右取决于采用物体自身还是观察者视角，先说明视角再判断。']);
bookChecked('book-39-b',[200,201],['delante/detrás可按物体前后或观察者视线定位；enfrente突出正对、相面对位置。','A delante de B不能一概推出B enfrente de A，需看方向及空间关系。']);
bookChecked('book-39-c',[201,202],['al principio/al final/en el centro/en medio/al otro lado/al fondo/dentro/fuera/antes/después按不同位置关系使用。','接出参照物常de，参照已明可独立；普通de+el为del。','antes/después也可按路线先后定位，不只用来讲时间。']);
bookChecked('book-40-a',[204],['是非问句不必加入类似英语do的助动词，常可用陈述句相同成分。','书面问句有¿…?；口语疑问语调依句型、地区和语用变化，升调是本节入门模式而非所有问句唯一曲线。','选择问句用o；句尾¿no?/¿verdad?可请求确认。']);
bookChecked('book-40-b',[205],['dónde/cuándo/cómo分别问地点、时间、方式；疑问用法写重音。','qué tal可问整体评价或近况，不是所有询问方法的cómo都能换qué tal。','上下文清楚可省重复内容，如¿Cuándo?/¿Qué tal la película?；具体疑问成分及对象代词安排按实际句式。']);
bookChecked('book-40-c',[206],['副词cuánto问动词涉及程度、价钱、时长等时不按主语性数变化。','修饰名词则cuánto/cuánta/cuántos/cuántas按名词性数配合，可数复数与不可数单数分别练。','名词可由上下文省略，性数仍随所指，如¿Cuántas necesitas?问entradas。']);
bookChecked('book-40-d',[207],['por qué分写并给qué重音，问原因；porque连写无重音引原因解释。','¿Por qué no…?可问不做的原因，也可建议做该事，按情境理解。','名词el porqué和介词+关系que等其他组合另查，不能把所有por que机械改同一种。']);
bookChecked('book-40-e',[208,209],['qué可开放询问事物或接名词明确类别；cuál/cuáles可在已经识别的集合中选择。','cuál有单复数但没有性别变化；qué自身不变。','本书西班牙入门主线用qué+名词；部分美洲规范有cuál+名词，不能宣称全西语绝对禁止。']);
bookChecked('book-40-f',[209,210],['quién/quiénes询问人物，qué+人物类别名词指定所问类别，cuál/cuáles可从已知人物集合选择。','quién的数与所问对象、句法结构有关，不是只看回答中人名多少机械替换。']);
bookChecked('book-40-g',[211],['qué es常问定义/分类；cuál es+明确类别可问该类别中是哪一个。','人物身份可quién es；同对象可问身份或类别，问题不同答案也不同。'],['¿Qué es Lima?问它是哪类事物；¿Cuál es la capital del Perú?问首都是哪座城。']);
bookChecked('book-40-h',[212],['疑问成分若受介词支配，介词置其前：de dónde/con quién/desde cuándo/para qué/por dónde等。','方向可adónde/a dónde，相关语境也可dónde，保持目标动词的搭配。','por qué问原因，para qué问用途/目标；与疑问qué本身的拼写和重音分别核对。']);
bookChecked('book-40-i',[213],['间接疑问可置于no sé/quiero saber/pregunta等之后；疑问词仍写重音，不因无问号丢掉。','间接是非疑问用si，无重音：No sé si viene；sí有重音常为肯定或代词。','间接疑问句若整体是陈述不用强加问号；时态、语气按实际信息关系判断。']);
bookChecked('book-40-j',[214,215],['感叹书面用¡…!；qué/cuánto/cómo在感叹功能仍有重音。','qué可接形容词、副词或名词强调特征；cuánto接动词作副词不变，接名词按性数配合。','qué poco接动词poco不变，接名词按poco/poca/pocos/pocas配合；cómo可强调方式与惊异程度。','评价好坏由语境决定，¡Cómo canta!不自动只表示唱得好。']);
bookChecked('book-41-a',[216,217],['不等比较用más/menos+名词/形容词/副词+que，或动词+相应más/menos+que。','可在比较级前加un poco/bastante/mucho/muchísimo强调差量，不用muy直接修饰más。','第二项上下文明白可省；无介词的比较人物代词常yo/tú等，有介词则保留相应支配：más de mí que de ti。']);
bookChecked('book-41-b',[217,218,219,220],['tan+形容词/副词+como；tanto+动词相关数量比较，tanto/tanta/tantos/tantas+名词+como。','igual que可比方式或量；igual de+形容词/副词+que；el mismo/la misma/los mismos/las mismas+名词+que说相同事物/类别/相应数量。','lo mismo可指同样的东西或数量；tanto比较只比较数量，不能代替所有相同方式。','本节省略比较第二项时，否定no…tanto可自然恢复；肯定tanto独用常转为强调如此多，不能总保持本节省略的等量解读。']);
bookChecked('book-41-c',[220,221],['相对最高级从集合中突出某成员：el/la/los/las+（名词）+más/menos+形容词。','集合可de+名词或que+相应从句表达；上下文明白可不重复集合。','与单纯muy/-ísimo绝对高程度区分，后者不一定在一个集合里排名第一。']);
bookChecked('book-41-d',[221,222],['-ísimo类通常元音尾去元音加尾、辅音尾直接加；-ble常变-bilísimo。','形容词最高级与名词性数配合；副词如tardísimo不随人物变性数，-mente形式可lentísimamente。','拼写保音包括poco→poquísimo、cerca→cerquísimo；fuerte有fortísimo/fuertísimo，其他特殊词须查实际形式。','prec ioso等本身含强烈评价的词，教材入门不再机械造-ísimo；不要把教学简化当所有真实语域派生绝不出现。'.replace('prec ioso','precioso')]);
bookChecked('book-41-e',[223],['bueno/bien的普通比较用mejor，malo/mal用peor；作形容词有mejores/peores，作副词不配数。','年龄比较常mayor/menor，物理大小普通可más grande/más pequeño，意义和结构要分清。','特殊比较形式可用于相对最高级；不要加成普通más mejor/más peor。']);
bookChecked('book-42-a',[224,225],['y添加，o选择，ni连接否定项；多项可在最后连接，也可重复连词加强组织。','y在/i/音前通常改e，o在/o/音前通常改u，按发音判断，不只看字母。','hielo等以半辅音起音的词通常保留y；重读疑问句首¿Y…?等例外另辨；数字之间o现代不加重音。','前置ni可构成Ni llama ni escribe，后置否定项则如No llama ni escribe，按否定一致安排。']);
bookChecked('book-42-b',[226,227],['pero增加对比或限制，不一定纠正前句事实；sino在否定后用另项取代被否定项。','sino引带变位动词的分句常用sino que；单纯名词等替换用sino。','不是所有前句含no都改sino：No tengo coche, pero tengo bicicleta是补充对比。']);
bookChecked('book-42-c',[228,229],['porque常在所解释内容之后给原因；como原因框架通常前置，先给理解后句的依据。','es que可解释、辩护或说明缘由，口语交际功能与单纯因果连接分别辨。','问原因por qué与原因porque拼写不同；porque前置等其他信息结构不被本节入门常序排除。']);
bookChecked('book-42-d',[229,230,231,232],['关系que修饰人物/事物，donde修饰地点，句中不再无理由重复先行对象。','内容从句que可承担动词内容或句子主语，与关系que功能不同；原形补语本节不直接加que。','como/donde/cuando可连接方式/地点/时间关系；直陈虚拟选择还须查第33章，不从连接词本身机械定。']);
bookChecked('book-42-e',[233,234,235],['cuando可连接同时或先后事实；en cuanto突出紧随，desde que/hasta que标起止界限。','mientras连接同时持续；siempre que可表示每次发生，也有条件义，须看语境。','时间关系前瞻常虚拟、过去/习惯常直陈；antes de que本节用虚拟，即使是过去。','antes de/después de后接原形；明确有限从句则de que+相应语气。después de que叙已发生可直陈或按语境虚拟，未发生前瞻虚拟。']);
bookChecked('book-42-f',[236,237,238],['开放现在/未来条件普通用si+直陈现在，结果可现在/将来/命令等，按要说的意思选择。','本节普通si条件不用简单将来或现在虚拟；间接疑问si等其他功能不受此口诀覆盖。','现在/未来假设可si+未完成虚拟，结果常条件式；结果也可能请求或其他形式，不强制双边条件式。','已过去反事实可si+过去完成虚拟，过去结果常条件完成；若结果是现在/未来，可简单条件式，形成混合时间关系。']);
bookChecked('book-43-a',[240],['现代西语字母表27字母；ch/ll是字母组合，不再作为独立排序字母，旧书排法须注明年代。','ch/ll/rr等按组合读，qu在que/qui的u通常不发音；h在本节普通本族词中不发音。','字母名称作名词通常阴性，ñ是独立字母不是任意装饰。']);
bookChecked('book-43-b',[241,242],['g在ga/go/gu及相应环境与ge/gi发音不同；gue/gui的u通常不读，güe/güi用分音符号说明u发音。','c在ca/co/cu与ce/ci不同；ce/ci可依地区为/s/或/θ/，二者不按优劣排序。','r词首及本节n/l等特定辅音后是强颤音，元音间单r与rr区分；其他位置实际变体依地区。','y词首/元音间等作辅音，词尾及独立连词y常元音性质，按词及地区辨。']);
bookChecked('book-43-c',[242,243,244],['相同音可有不同拼写，如/k/相关c/qu/k、/x/相关g/j，词汇拼写仍须学习。','b/v在标准西语通常不构成不同音位，不能强教v按英语咬唇音区分词义。','多数地区ll/y合流，保留区别的地区也存在；ce/ci与z的地区差别同样要认识。']);
bookChecked('book-43-d',[244],['ñ表示与n不同的音，漏波浪符可能改变词义，如año/ano。','输入、搜索与拼写练习须保留ñ，不能把规范拼写写成n后仍当完全正确。']);
bookChecked('book-44-a',[245,246,247],['区分音节、词汇重读与书面重音符号；不是每个有重音的词都写重音符号。','普通末音节重读词以元音/n/s结尾标重音；普通倒数第二重读词以其他辅音结尾标重音；倒数第三及更前重读通常标。','辅音组结尾及-y按具体拼写细则辨，不能只抓末尾s就忽略前接辅音。单音节通常不标，区别重音另学。','原形/副动词/肯定命令后接代词后，按形成的整词重音规则判断，如ponlo/pónselo。','-mente副词保留原形容词本来有的重音符号，如fácilmente；不是一概按整词长短新增符号。']);
bookChecked('book-44-b',[247],['a/e/o为开元音、i/u为闭元音；两开元音常分音节，开闭/闭开及不同闭元音组合的正字法分类另辨。','重读闭元音与相邻开元音分读，闭元音上标重音，如día/país/oído；中间h不阻止这条规则，如búho。','双元音需标重音时，开闭组合标开元音，两闭组合通常标第二个，如cuídate。','现代规范guion等按正字法单音节不标；口语分音节与正字法双元音分类不总一致，勿照旧书重音练习机械判。']);
bookChecked('book-44-c',[248],['区别重音配对包括de/dé、el/él、mi/mí、se/sé、te/té、si/sí、tu/tú；mas/más等按功能另辨。','疑问/感叹qué/cómo/cuándo/quién等直接或间接用法有重音，关系/连接用法通常无。','现代solo和指示词通常不标重音；有实际歧义且说话者判断需要时相应副词/代词形式可选择标，非旧书一律区分法。','中性esto/eso/aquello不标重音；sé既可saber现在yo，也可ser肯定tú命令。']);

// Keep the first noun lessons independent from articles, adjective endings and verb conjugation drills.
const sourceBasicPractice={'book-1-a':[2],'book-1-b':[2],'book-2-a':[0,2],'book-2-b':[1,2],'book-2-c':[0,2],'book-3-a':[0,1],'book-3-b':[2]};
for(const [id,indices] of Object.entries(sourceBasicPractice)){const p=grammarBookSourceParts.find(p=>p.id===id);p.practiceIndices=indices;p.separateBasics=true;p.why=id.startsWith('book-1-')||id.startsWith('book-2-')?'先判断名词的语法性或实际存在的对应形式。完成本小节后，再打开冠词、形容词等相关课程。':'先判断名词本身的单复数、词形及当前义项。动词变位与形容词一致在后续专题分开学习。';}

const sourceBasicTitles={'book-1-a':'名词的语法性：先认m.与f.','book-1-b':'名词的性：词尾线索与例外','book-2-a':'人物名词：一般性别对应形式','book-2-b':'人物名词：同形、特殊形式与异根','book-2-c':'动物名词：特殊形式与固定语法性','book-3-a':'名词复数：词尾、拼写与重音','book-3-b':'名词的数：集合、成套物品与物质量'};
for(const p of grammarBookSourceParts)if(sourceBasicTitles[p.id])p.title=sourceBasicTitles[p.id];
