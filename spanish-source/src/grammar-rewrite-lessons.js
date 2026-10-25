// Independently authored teaching: separate a rule, its limits, worked reasoning and targeted practice.
// The user's textbooks inform topic order and exercise design; no scans or full original exercises are published.
const grammarRewriteLessons=[];
const rwSection=(key,title,paragraphs,columns,rows)=>({key,title,paragraphs,...(rows?{columns,rows}:{})});
const rwExample=(word,zh,...steps)=>({word,zh,steps});
const rwGroup=(key,section,title,goal,...questions)=>({key,section,title,goal,questions});
const rwChoice=genderChoice,rwInput=genderInput,rwSort=genderSort;
function rewriteGrammar(suffix,title,goal,sections,examples,groups,mistake,related,domain,source){
 installGenderLesson(suffix,title,goal,sections,examples,groups,examples.slice(0,3),mistake,related,{registry:grammarRewriteLessons,prefix:'rewrite',domain,source,
 intro:'可直接查阅本知识点，不必先读文章。先看本节说明的前置知识；每一步练习只使用已经解释的规则，词义和必要条件随题提供。',
 relatedNote:'这些关联专题可独立查阅。需要先认识的术语已在本节解释；综合应用放在分项规则之后。'});
}
rewriteGrammar('bridge-plural','名词的数：从一个到多个，逐条学复数规则','先只改变名词的数，掌握常见-s、-es、z→c、重音变化和同形词；冠词、形容词及动词不在第一轮混考。',[
 rwSection('meaning','“数”是什么？先别和阴阳性混在一起',[
 '这里的“数”不是数数技巧，而是名词所表达的单数、复数区别。libro（书）是单数形式，libros是复数形式；词尾变化告诉我们正在用哪一种语法形式。',
 '名词的“性”与“数”是两个问题。mesa（桌子）和mesas都为f.，由一张桌子变成多张不会变成阳性。你不必先背所有性别，才能学习复数的构造。',
 '本课给出单数和中文义，只要求生成名词本身的复数。先不同时选择冠词或改变句子动词。最后再介绍怎样把本课知识用到已经给出形式的名词组。'],['单数','复数','改变与保留'],[['libro · m.（书）','libros','单数→复数；仍是m.'],['mesa · f.（桌子）','mesas','单数→复数；仍是f.']]),
 rwSection('vowels','第一种：常见元音结尾，加-s',[
 '先读完单数，再观察末尾。常见非重读元音结尾的名词加-s：casa→casas（房子），libro→libros（书），clase→clases（课；班级），taxi→taxis（出租车）。原来的词尾保留，不是把-o换成-s。',
 '以重读-á、-é、-ó结尾的常用词也加-s：sofá→sofás（沙发），café→cafés（咖啡，此处按杯或份谈），dominó→dominós（多米诺骨牌游戏等，此处按多个实例谈）。这些形式原有的书面重音仍保留。',
 '重读-í、-ú不能硬套成只有一个答案；有的词可用-s或-es，如bisturí→bisturís/bisturíes（手术刀），具体使用要查词条。本节不把有多个规范形式的词做成唯一答案题。'],['观察点','示范','操作'],[['普通元音','libro → libros','保留libro，加s'],['普通-e','clase → clases','保留clase，加s'],['重读-é','café → cafés','加s，保留é']]),
 rwSection('consonants','第二种：本组常见辅音结尾，加-es；遇z先改c',[
 'papel（纸；此处一张纸）→papeles，reloj（钟表）→relojes。末尾是本组所学的-l、-j，加-es。不能把英语里常用的-s直接搬来，写成papels或relojs。',
 'luz（灯；光）→luces，voz（声音）→voces。末尾-z接复数-es时，z改c，写成-ces。可以分两步记：luz→luc-→luces；不是luzes，也不是luzs。',
 '“所有辅音都无条件加-es”并不准确：下节的lunes、crisis等有同形用法，一些外来词另有惯例。先把本节列出的-l、-j、-z例词练清，再扩展特殊类型。'],['类型','单数→复数','不要写'],[['本课-l、-j例词','papel→papeles；reloj→relojes','papels；relojs'],['-z接-es','luz→luces；voz→voces','luzes；vozs']]),
 rwSection('stress','第三步：重读位置与重音符号分开检查',[
 '重读是读得突出的音节；书面重音是á、é、í、ó、ú上的符号，两者不等同。先记住单数怎样读，再看复数是否需要符号；不是一变复数就统一加上或去掉。',
 'joven（年轻人）重读jo；复数jóvenes仍重读jó，分成jó-ve-nes，倒数第三音节重读需标明。lápiz（铅笔）→lápices也是倒数第三音节重读，所以保留á；同时-z改-ces。',
 'camión（卡车）→camiones：重读仍在mio这个位置，复数ca-mio-nes是以-s结尾、倒数第二音节重读，已符合一般读法，所以不再写ó。这不是把重读挪到了ca。不熟悉重读规则时，可以先按这些给出的规范形式练，并打开“发音与重音”专题。'],['单数','复数','怎样检查'],[['joven','jóvenes','增加音节后用ó标倒数第三音节重读'],['camión','camiones','复数符合一般读法，去掉书面重音'],['lápiz','lápices','z→c；á仍需要保留']]),
 rwSection('unchanged','有些名词单复数同形，不要再造一个词尾',[
 'lunes（星期一）、crisis（危机）、paraguas（雨伞）的常用单复数词形相同。一个雨伞是paraguas，多个仍写paraguas；不能只因它最后有-s，就说它绝不可能是单数。',
 '这类词可由数量词、冠词或上下文显示数：un paraguas（一个雨伞）/dos paraguas（两个雨伞）；el lunes（那个星期一）/los lunes（每逢星期一或那些星期一，依语境）。这里给出表达帮助看区别，不要求你先推导冠词。',
 '也不能概括成所有-s结尾都不变。autobús（公共汽车）末尾重读，复数autobuses；这里需加-es并按重读规则去掉ú。同形与不同形要看具体类型和词条。'],['词','一个与多个','本词处理'],[['paraguas（雨伞）','un paraguas / dos paraguas','名词同形'],['crisis（危机）','una crisis / dos crisis','名词同形'],['autobús（公共汽车）','un autobús / dos autobuses','名词有变化']]),
 rwSection('method','最后才做两步检查：先名词，再看它周围的词',[
 '拿到单数词，先确认词义，再判断属于普通元音、已学辅音、-z、重音变化还是已学同形类型。写完复数后，再检查字母和重音。不要一口气猜整句。',
 '如果任务是改变整个名词组，才需要额外考虑一致。例如已给el→los、la→las这两组对应：el libro→los libros，la mesa→las mesas。名词的性保留，冠词的数改变。',
 '再进一步的las mesas blancas（那些白色桌子）还涉及形容词blanco的形式，属于“一致关系”专题。本课第一轮只练名词，绝不会用没教过的形容词变化来判断你会不会复数。'] )
],[rwExample('clase → clases','课；班级：单数→复数','末尾-e属于本课普通元音类型。','保留clase，再加s。','得到clases，不改成clas或claseses。'),rwExample('lápiz → lápices','铅笔：单数→复数','识别-z结尾。','z改c并加-es。','复数lá-pi-ces仍需á，写lápices。'),rwExample('paraguas → paraguas','雨伞：词形不变','确认这是本课列出的同形词。','名词不再添-es。','用数量或上下文区分一个和多个。')],[
 rwGroup('meaning','meaning','先分清性与数','这里只判断概念。',rwChoice('mesa→mesas（桌子）改变的主要语法信息是什么？','单数变复数',['单数变复数','阴性变阳性','桌子变椅子'],'变化的是数；mesa和mesas都为f.。'),rwChoice('这课要求“只填名词复数”，要同时猜冠词和动词吗？','不用，先完成名词本身的变化',['不用，先完成名词本身的变化','必须先写完整句','必须把名词改成阳性'],'先把一个学习目标练清，再组合应用。')),
 rwGroup('vowels','vowels','元音结尾单独练','只填复数名词。',rwInput('libro（书）→复数：','libros','普通-o结尾，保留原词并加-s。'),rwInput('clase（课；班级）→复数：','clases','普通-e结尾，加-s，不删-e。'),rwInput('café（咖啡，此处指几杯）→复数：','cafés','重读-é结尾的本词加-s，保留é。')),
 rwGroup('consonants','consonants','辅音与-z分开看','只填本节已教词的复数。',rwInput('papel（此处一张纸）→复数：','papeles','本词-l结尾加-es，不是papels。'),rwInput('reloj（钟表）→复数：','relojes','本词-j结尾加-es。'),rwInput('luz（此处灯）→复数：','luces','先把末尾z改c，再接-es。'),rwInput('voz（声音）→复数：','voces','z接-es时改c，写voces。')),
 rwGroup('stress','stress','单独检查重音','题中词均已给出规范变化。',rwInput('joven（年轻人）→复数，写上必要重音：','jóvenes','jó-ve-nes倒数第三音节重读，需ó。'),rwInput('camión（卡车）→复数：','camiones','ca-mio-nes符合以-s结尾的通常重读，不再写ó。'),rwInput('lápiz（铅笔）→复数：','lápices','-z改-ces；lá-pi-ces仍需á。')),
 rwGroup('unchanged','unchanged','同形不等于没有复数','不要把所有-s词同等处理。',rwInput('dos ___（两个雨伞），填paraguas的适当形式：','paraguas','本词单复数同形，dos已表数量。'),rwInput('dos ___（两次危机），填crisis的适当形式：','crisis','本词常用单复数同形。'),rwInput('autobús（公共汽车）→复数：','autobuses','末尾重读的本词并不同形；加-es，按重读规则去ú。'),rwSort('选择本课这些词的复数处理方式。',['加-s','加-es','z→c并加-es','词形不变'],[['casa','房子','加-s','普通-a结尾。'],['papel','此处一张纸','加-es','本节的-l词。'],['luz','灯','z→c并加-es','写luces。'],['paraguas','雨伞','词形不变','本课列出的同形词。']],'先确定类型，再写具体形式；重音另查。')),
 rwGroup('method','method','最后才组合一项已给出的冠词变化','本组已提供冠词对应，不考其他规则。',rwInput('已知el→los：el libro→los ___。只填名词。','libros','先把libro加-s；题中已经提供冠词los。'),rwChoice('把la mesa变为复数，题中已知la→las，应写什么？','las mesas',['las mesas','los mesas','las meso'],'mesa仍为阴性；只将数量相关形式改为复数。'))
],['所有辅音结尾都机械加-es','先认类型，再检查重音与同形词','规则有范围；不要让冠词或形容词题替代名词复数练习。'],['foundation-sound','foundation-bridge-articles','foundation-adjectives'],'名词与限定词','参考《西班牙语公共课·上册》第2课“名词的数”与语法书第3章的规则—例外—练习结构；中文说明、例句分析和习题独立编写。');

rewriteGrammar('bridge-articles','冠词：先会选形式，再理解为什么用el、un或不加','分清性数形式与信息用途；逐步理解定冠词、不定冠词、常见零冠词、重读a例外及al/del。',[
 rwSection('defined','先弄清冠词是什么，再读el/la/los/las',[
 '冠词是放在名词前面、帮助听者理解你在指什么的一类小词。el libro中的el是冠词，libro（书）是名词。这里不是名词自身换了性，而是冠词选择了与名词配合的形式。',
 '定冠词的常见四种形式是el、la、los、las：通常分别配阳性单数、阴性单数、阳性复数、阴性复数。本节先给出词的性数，只练形式，不同时考你是否记得词义或名词性别。',
 '“定”在入门时可以理解为听者能够从语境识别你指的对象。先学会四种形式，后面再单独讨论什么时候对象可识别。el通常不写重音；“他”的人称代词él是另一个词。'],['名词条件','定冠词','已给性数的例子'],[['m. 单数','el','el libro（那本书）'],['f. 单数','la','la mesa（那张桌子）'],['m. 复数','los','los libros（那些书）'],['f. 复数','las','las mesas（那些桌子）']]),
 rwSection('indefinite','再学un/una/unos/unas：另一个形式表',[
 '不定冠词常用于引入一个尚未具体识别的对象：un libro（一本书）、una mesa（一张桌子）。阳性单数用un，阴性单数用una；不要把所有中文“一个”都译成同一个词。',
 '对应的复数为unos、unas，常表示一些、不确定数量：unos libros（一些书）、unas mesas（一些桌子）。它们不是表示精确的一个，也不能代替所有场合的数字。',
 '先把“用定冠词还是不定冠词”和“选哪种性数形式”分成两个决定。题目明确要求不定冠词时，先按这张表选形式；真实表达时还要看下一节的信息条件。'],['条件','不定冠词','例子'],[['m. 单数','un','un libro（一本书）'],['f. 单数','una','una mesa（一张桌子）'],['m. 复数','unos','unos libros（一些书）'],['f. 复数','unas','unas mesas（一些桌子）']]),
 rwSection('information','为什么这里是un，那里是el？看听者能否识别',[
 '假设朋友不知道你买了什么。你第一次引入一本未指定的书，可以说Compré un libro（我买了一本书）。接着谈刚才这本书：El libro es interesante（这本书有趣）。这里先引入，再指回，冠词也随表达目的变化。',
 '“第一次提到必用un，第二次必用el”不是完整规则。两人站在只有一扇门的房间里，第一次说Cierra la puerta（关上门）也可用la，因为现场已经能识别是哪扇门。',
 '反过来，提过书以后还可以说Quiero otro libro（我想要另一本书）：不是继续指同一本。不能数名词出现次数来选冠词。做唯一答案题时必须给出场景；孤立的Voy a ___ biblioteca往往不能排除la和una两种不同意思。'],['场景','表达','为什么'],[['引入未指定的一本书','un libro','听者尚未据语境识别具体对象'],['指回刚才那本书','el libro','对象已经可识别'],['眼前双方明白的那扇门','la puerta','现场也能提供识别依据']]),
 rwSection('zero','有时不加冠词：先学三个明确结构',[
 '“零冠词”就是在相应位置不使用冠词，不是漏写。无修饰地介绍职业身份常说Soy profesora（我是女教师）。这里职业词前通常没有un/una；本题若问这个常见结构，就直接填profesora。',
 '谈一种物质或活动，不特指某一份时也常不加：Bebo agua（我喝水），Busco trabajo（我找工作）。可数性与词义有关；un café可以指一杯咖啡，不能把物质名词永远判成不能带不定冠词。',
 '类别泛指又常有定冠词：Me gusta el té（我喜欢茶这种饮品）。中文都没“那个”，西语也不因此统一删冠词。这些先按完整结构学习，不把规则扩大为“泛指都不加”或“职业永远不加”。Es una profesora muy paciente（她是一位很耐心的女教师）带评价修饰，可以用una。'],['结构','例句与译义','本例选择'],[['无修饰职业身份','Soy profesora. 我是女教师。','通常不加冠词'],['不特指份量的物质','Bebo agua. 我喝水。','零冠词'],['喜欢茶这一类饮品','Me gusta el té. 我喜欢茶。','类别泛指定冠词']]),
 rwSection('stressed-a','一个局部例外：el agua，水依然是阴性',[
 '先确认agua（水）为f.。它的开头a是重读音节；这类阴性名词在单数、定冠词紧邻名词时使用el：el agua。这里el的形式特殊，不能据此把agua改判成阳性。',
 '有不发音h时也可能如此：el hambre（饥饿）、el águila（鹰）。关键是开头的a音重读，不是“任何a开头都用el”：la amiga（那位女性朋友）开头a不重读，仍用la。',
 '复数恢复las：las aguas；中间插入词时也看结构，如la misma agua（同样的水）。如果已会形容词，比较el agua fría（水是凉的）中的fría仍按agua阴性配合。本节只考冠词及agua的性，不要求你先生成fría。',
 '这类名词前还常用un agua，而una agua也有规范使用；本节不把un/una agua做成排除另一个形式的唯一答案题。先把定冠词规则的条件学清。'],['给定结构','常见定冠词','关键条件'],[['___ agua（f.，开头重读）','el agua','单数且紧邻'],['___ amiga（f.，开头a不重读）','la amiga','不满足重读条件'],['___ aguas（f.，复数）','las aguas','复数不采用单数例外']]),
 rwSection('contractions','最后独立学两个缩合：a+el→al，de+el→del',[
 '介词a、de后面紧接定冠词el时，常规缩合为al、del。去语境已知的博物馆：Voy al museo（a+el）；博物馆的门：la puerta del museo（de+el）。',
 '缩合只发生在这些对应上：a la mesa不变al mesa，de los libros不变del libros。先看后面究竟是el、la、los还是las，不要看见a或de就一律缩合。',
 '人称代词él（他）带重音，不是冠词：Hablo de él（我谈论他），不缩合成del。初学先分冠词el和代词él，再操作缩合。标题或专名中El的一些特殊书写用法另看进阶专题。'],['相接的词','结果','说明'],[['a + el museo','al museo','去那家博物馆'],['de + el museo','del museo','那家博物馆的'],['a + la biblioteca','a la biblioteca','阴性la不缩合'],['de + él','de él','代词él不参与该缩合']])
],[rwExample('una mesa / la mesa','一张未指定的桌子 / 那张可识别的桌子','先决定是否引入新对象或指向可识别对象。','mesa已知为f.单数。','不定形式选una，定形式选la。'),rwExample('el agua','水：名词仍为f.','确认agua的词典性别是f.。','它开头a重读，且单数定冠词紧邻。','使用el这个特殊形式，不把词性别改掉。'),rwExample('de él / del museo','谈他 / 那家博物馆的','él是人称代词，而el museo中el为冠词。','de+代词él不缩合。','de+冠词el则缩合成del。')],[
 rwGroup('defined','defined','只练定冠词四种形式','性数已给出，暂不考语境用途。',rwSort('每项已经要求用定冠词，按给定性数分类。',['el','la','los','las'],[['libro','书，m.单数','el','阳性单数。'],['mesa','桌子，f.单数','la','阴性单数。'],['libros','书，m.复数','los','阳性复数。'],['mesas','桌子，f.复数','las','阴性复数。']],'形式选择由本题已给出的性数控制。'),rwInput('明确用定冠词：___ mesa（桌子，f.单数）。','la','题中已限定定冠词，阴性单数选la。'),rwInput('明确用定冠词：___ libros（书，m.复数）。','los','阳性复数选los。')),
 rwGroup('indefinite','indefinite','再单练不定冠词','不将两套表混为一张。',rwInput('要求不定冠词：___ libro（书，m.单数）。','un','阳性单数不定冠词是un。'),rwInput('要求不定冠词：___ mesa（桌子，f.单数）。','una','阴性单数不定冠词是una。'),rwInput('要求不定冠词，表示一些：___ mesas（桌子，f.复数）。','unas','阴性复数用unas，不是una。')),
 rwGroup('information','information','给足场景再选冠词','本组不靠出现次数猜答案。',rwChoice('朋友尚不知道你买了什么；你要引入一本未指定的书。选合适的开头：Compré ___ libro.','un',['un','la','las'],'引入未指定的一本书用un；libro为m.单数。'),rwChoice('紧接着明确指回刚才买的那本书：___ libro es interesante.','El',['El','Una','Las'],'本题明确指回同一本可识别的书，用El。'),rwChoice('双方站在只有一扇门的房间，第一次说“关上门”能用la puerta吗？','能，现场让听者识别对象',['能，现场让听者识别对象','不能，第一次提名词只能用una','不能，门没有冠词'],'可识别不只来自前文，还可来自情景。')),
 rwGroup('zero','zero','按明确结构辨认零冠词','不把这里的模式夸大成所有用法。',rwChoice('无额外修饰，常见的职业身份自我介绍是：','Soy profesora.',['Soy profesora.','Soy la una profesora.','Estoy profesora.'],'无修饰职业身份常不加不定冠词，使用ser。'),rwChoice('“Bebo agua（我喝水）”这里没有冠词，属于？','一种正常的零冠词结构',['一种正常的零冠词结构','一定漏了el','说明agua没有性别'],'不特指某份量的物质用法可以零冠词，名词仍有性。'),rwChoice('笼统表达“我喜欢茶这种饮品”，本节所教结构是：','Me gusta el té.',['Me gusta el té.','Me gusta la té.','Me gusta el la té.'],'本例类别泛指可用el；té为m.。')),
 rwGroup('stressed-a','stressed-a','把重读a例外的条件分清','本组只判断冠词与名词的性。',rwInput('agua为f.，开头a重读：单数定冠词紧邻，___ agua。','el','特殊条件下使用el；agua仍是f.。'),rwInput('amiga为f.，开头a不重读：___ amiga。要求定冠词。','la','不能把所有a开头词都套el agua。'),rwInput('aguas为f.复数：___ aguas。要求定冠词。','las','复数用las，不用单数例外el。'),rwChoice('el agua中的agua是什么性？','仍是f.',['仍是f.','因为el变成m.','没有性'],'冠词的特殊形式不改变名词的语法性。')),
 rwGroup('contractions','contractions','缩合单独练','题中明确冠词或代词。',rwInput('已知a+el museo：Voy ___ museo. 只填缩合词。','al','介词a紧接定冠词el，缩合al。'),rwInput('已知de+el museo：la puerta ___ museo. 只填缩合词。','del','de+定冠词el→del。'),rwInput('谈论他：Hablo de ___. 填“他”的代词。','él','重读人称代词él，不是冠词el，不与de缩合。'),rwChoice('a+la biblioteca（图书馆）的常规结果是什么？','a la biblioteca',['a la biblioteca','al biblioteca','a el biblioteca'],'la不参与a+el的缩合。'))
],['首次提到必用un，出现过必用el','先判断听者能否识别，再按性数选形式','形式表、信息用途、零冠词和局部例外分开检查。'],['foundation-gender','foundation-bridge-plural','foundation-adjectives'],'名词与限定词','参考《西班牙语公共课·上册》第1—3课冠词板块及第2、5课缩合，结合语法书第5章的信息用途；全部中文细讲与配套题独立编写。');

rewriteGrammar('adjectives','形容词：先找到描述谁，再学性、数与一致','能辨认名词和形容词，按名词的性数使用已教词形；分清四形、同形、特殊词尾与句子动词的一致。',[
 rwSection('meaning','先认出哪个词在描述哪个对象',[
 '名词给对象命名，形容词说这个对象“怎么样”。casa blanca中casa是“房子”，blanca是“白色的”；libro nuevo中libro是“书”，nuevo是“新的”。先找到被描述的对象，再考虑形容词形式。',
 '形容词的性数通常与它描述的名词一致。casa为f.单数，白色用blanca；libro为m.单数，新的用nuevo。控制形式的是被描述的名词，不是说话者的性别。',
 '本课先给出名词的m./f.和单复数，不把判断名词性别当成隐藏考点。不熟m./f.可以打开名词性别专题；这里先看下列已配好的示范。'],['名词','描述它的形容词','名词组与译义'],[['casa · f.单数','blanca','casa blanca（白色房子）'],['libro · m.单数','nuevo','libro nuevo（新书）']]),
 rwSection('four','第一类：-o/-a及其复数，四格分开看',[
 '以本课的blanco（白色的）、nuevo（新的）、alto（高的）为例，阳性单数用-o，阴性单数用-a；复数分别加-s。不是每次遇到女性说话者都改-a，而是看所描述的对象。',
 '把四格展开：blanco、blanca、blancos、blancas。libros为m.复数，所以用blancos；casas为f.复数，所以用blancas。先定性，再定数，可以避免只改其中一项。',
 '例如一位女性介绍libro nuevo，新书仍用nuevo；一位男性介绍casa nueva，房子仍用nueva。这里先练名词组，完整句的动词到后面再加。'],['对象条件','blanco','nuevo'],[['m.单数','blanco','nuevo'],['f.单数','blanca','nueva'],['m.复数','blancos','nuevos'],['f.复数','blancas','nuevas']]),
 rwSection('same','第二类：有些形容词不分性，但仍要变数',[
 'grande（大的）、interesante（有趣的）、inteligente（聪明的）的这些常见用法，不因名词为阴性就改成granda、interesanta或inteligenta。libro interesante与revista interesante（有趣的杂志）都保留interesante。',
 '“不分性”不等于“所有形式都不变”：libros interesantes、revistas interesantes都要复数-s。grande→grandes，inteligente→inteligentes也是同样的单复数区别。',
 'joven（年轻的）在本课中也是同一单数形容词可配阳性或阴性：chico joven / chica joven；复数是jóvenes，需要-es与重音。它与名词joven（年轻人）可有相同词形，但在句中承担的作用不同。'],['形容词','阳性/阴性单数','阳性/阴性复数'],[['interesante（有趣的）','interesante','interesantes'],['grande（大的）','grande','grandes'],['joven（年轻的）','joven','jóvenes']]),
 rwSection('special','别把“辅音结尾”误学成永远不分性',[
 '有些辅音结尾形容词也有阴性形式。表示国籍的español（西班牙的）→española，francés（法国的）→francesa；trabajador（勤奋的）→trabajadora。这些都说明“辅音结尾一律不改性”太宽。',
 '看具体词的词形表：español/española/españoles/españolas；francés/francesa/franceses/francesas。francés单数阳性有é，其余这里列的形式没有该重音，不能把法语国籍词的符号机械复制到所有格。',
 '本课只要求这些明确列出的形式，不让你凭最后一个辅音创造所有形容词。joven不因此变成jovena；词典给出的形式和本词的类别优先。'],['已教词','阴性单数','两种复数'],[['español（西班牙的）','española','españoles / españolas'],['francés（法国的）','francesa','franceses / francesas'],['trabajador（勤奋的）','trabajadora','trabajadores / trabajadoras']]),
 rwSection('sentence','形容词离开名词，也仍看它描述谁',[
 'la casa blanca是“那座白房子”的名词组；La casa es blanca是“那座房子是白色的”的句子。后句blanca隔着es仍描述casa，不是只跟离自己最近的词。这里已给es（是，单数）这个形式。',
 '复数Las casas son blancas中，casas控制las、blancas的性数；整个主语为复数，所以动词用son。动词不会因为名词阴性就改成一个所谓“阴性动词”。性数一致与动词人称、数一致是两套检查。',
 '复杂一点的El color de las casas es blanco（那些房子的颜色是白色的），整个主语的中心是color（颜色，m.单数）。不要被旁边的casas带跑，错用son或blancas。本节先给出句子组成，先圈中心再作答。'],['给定对象','完整示范','检查'],[['casa · f.单数','La casa es blanca.','blanca配casa；es为单数'],['casas · f.复数','Las casas son blancas.','blancas配casas；son为复数'],['color · m.单数','El color de las casas es blanco.','中心color，不是casas']]),
 rwSection('position','位置、短尾另分一类，别和性数混成一条',[
 '入门描述常见名词后形容词：un libro interesante（一本有趣的书）。但不能说所有形容词永远只能在名词后；位置可能带来语义或表达重点的变化。',
 '一些词在特定位置有短尾：bueno→buen，常见于阳性单数名词前，如un buen libro（一本好书）；grande在单数名词前常用gran，如una gran idea（一个好主意）。这是位置相关的形式，不是又出现了一种名词性别。',
 '别把buen用到所有地方。un libro bueno或El libro es bueno中没有该名词前短尾条件；la casa grande（大房子）与una gran casa（很棒的房子等，依语境）也不保证意义完全相同。先会本节给出的对应，进阶再查位置语义专题。'],['本节指定结构','所需形式','对照'],[['阳性单数名词前：un ___ libro','buen','名词后libro bueno'],['指定表语：El libro es ___','bueno','不是所有位置都用buen'],['指定常见表达：una ___ idea','gran','不写grana']])
],[rwExample('casas blancas','白色的房子们','先找到被描述的中心casas。','题中已给f.复数。','blanco依次配性和数，选blancas。'),rwExample('revistas interesantes','有趣的杂志们','revistas为f.复数。','interesante不分性，不造interesanta。','它仍须复数，写interesantes。'),rwExample('El color de las casas es blanco.','那些房子的颜色是白色的。','找中心color，为m.单数。','de las casas只是补充“哪些房子的”。','动词es，描述颜色用blanco。')],[
 rwGroup('meaning','meaning','先找被描述的对象','暂不要求生成词形。',rwChoice('casa blanca（白色房子）中，blanca描述哪个词？','casa',['casa','说话者','所有西语名词'],'形容词描述房子，先找对象再配形式。'),rwChoice('一位女性说libro nuevo（新书），nuevo要因说话者是女性改nueva吗？','不用，它描述libro',['不用，它描述libro','必须改，因为女性说话','必须改成复数'],'libro为m.单数，控制这个形容词的形式。')),
 rwGroup('four','four','四格逐项填','本组名词性数已给出。',rwInput('libro（m.单数）___；填nuevo（新的）合适形式。','nuevo','m.单数，保留nuevo。'),rwInput('casa（f.单数）___；填nuevo合适形式。','nueva','先配阴性，-o→-a；仍单数。'),rwInput('libros（m.复数）___；填blanco（白色的）。','blancos','阳性复数，blanco加-s。'),rwInput('casas（f.复数）___；填blanco。','blancas','阴性用blanca，再加-s。')),
 rwGroup('same','same','不分性与不变数分清','只用本节明确列出的词形。',rwInput('revista（杂志，f.单数）___；填interesante（有趣的）。','interesante','本词不因阴性改-a。'),rwInput('revistas（f.复数）___；填interesante。','interesantes','不分性但变数，需-s。'),rwInput('chicas（女孩们，f.复数）___；填joven（年轻的）。','jóvenes','本词复数加-es且需ó，不造jovenas。')),
 rwGroup('special','special','辅音结尾并非同一类型','按已给词形，不生成未教形式。',rwInput('chica（女孩，f.单数）___；填español（西班牙的）。','española','国籍形容词的本词阴性加-a。'),rwInput('chica（f.单数）___；填francés（法国的）。','francesa','本词阴性为francesa，不保留é。'),rwInput('chicas（f.复数）___；填trabajador（勤奋的）。','trabajadoras','本词阴性trabajadora，复数加-s。')),
 rwGroup('sentence','sentence','最后才放回已给完整句','将形容词与动词分开检查。',rwInput('La casa（f.单数）es ___；用blanco（白色的）。','blanca','隔着es，形容词仍描述casa。'),rwInput('Las casas（f.复数）son ___；用blanco。','blancas','按casas的f.复数，不跟son猜性别。'),rwChoice('El color de las casas ___ blanco. 主语中心已标明为color（m.单数）。','es',['es','son','somos'],'中心是单数color，casas只是de补充语中的名词。')),
 rwGroup('position','position','短尾有具体位置条件','只考已教的三个结构。',rwInput('填bueno在本结构的形式：un ___ libro（一本好书）。','buen','阳性单数名词前采用buen。'),rwInput('填bueno在本结构的形式：El libro es ___.','bueno','此处是表语，不满足名词前短尾条件。'),rwInput('填grande在本节给出的常见表达形式：una ___ idea（一个好主意）。','gran','本节指定名词前常用gran，不是阴性加-a。'))
],['辅音结尾的形容词一律没有阴性形式','joven同形，但español等有阴性形式','先查具体词形类别，再按被描述名词配性数；位置变化另看。'],['foundation-gender','foundation-bridge-plural','foundation-core'],'形容词与程度','参考《西班牙语公共课·上册》第6课形容词板块及语法书第4章的形式、位置和短尾专题；补明确规则边界，中文讲解与习题独立编写。');

rewriteGrammar('bridge-present-ar','规则-ar现在时：先找谁，再一步步造出动词','理解原形、词干与变位；读懂六个人称组，用明确规则动词构造现在时，并检查主语而非邻近名词。',[
 rwSection('meaning','原形是什么？为什么句中要换一个形式？',[
 'hablar（说话）、estudiar（学习）、trabajar（工作）是词典列出的原形。动词表示动作、状态等；原形像词的名称，放进“我说、你说、她说”这类完整陈述时，通常要选相应形式。',
 'Hablo español（我说西语）、Hablas español（你说西语）：hablo和hablas属于同一动词hablar，但结尾显示主语人称。这种按时态、语气、人称和数等使用不同形式的变化，叫变位。',
 '今天只学直陈式现在时中的规则-ar动词。它常说现在情况、习惯或日常活动，如Estudio español（我学西语）。不是任何时间都用这张表，也不是所有-ar动词都规则。先把这个小系统学会。'],['词典原形','句中示范','本例意思'],[['hablar','Hablo español.','我说西语。'],['estudiar','Estudias español.','你学西语。']]),
 rwSection('subjects','先确定谁做动作：六个变位组',[
 'yo是我，tú是你，él/ella是他/她，usted是您。虽然usted在交际上指对方，它的动词形式却与él/ella同组，不能因为中文是“您”就配tú形式。',
 'nosotros/nosotras是我们；vosotros/vosotras是西班牙许多地区非正式的你们；ellos/ellas是他们/她们；ustedes是你们或诸位，配第三人称复数。拉美普遍以ustedes表示你们，本课提供两组让你识别，不把正常地区形式判错。',
 'Ana这个人名通常当第三人称单数；Ana y Luis表示他们两人，通常配第三人称复数。先找到做动作的主语，再把它映射到表里的组。不是看离空格最近的名词是谁。'],['组','常见主语','中文提示'],[['1','yo','我'],['2','tú','你'],['3','él / ella / usted；Ana','他 / 她 / 您；一个被谈论的人'],['4','nosotros / nosotras','我们'],['5','vosotros / vosotras','你们（本表的西班牙常用组）'],['6','ellos / ellas / ustedes；Ana y Luis','他们 / 她们 / 你们；多个人']]),
 rwSection('build','构造只做两件事：去-ar，再按组加词尾',[
 '把hablar最后的-ar去掉，剩habl-，这部分叫词干。再按主语加-o、-as、-a、-amos、-áis、-an。yo：habl+o→hablo；tú：habl+as→hablas。加的是词干后面，不能在完整hablar后面继续加-o。',
 '第三组él/ella/usted都用habla；nosotros用hablamos；vosotros用habláis，注意á；ellos/ellas/ustedes都用hablan。每次先定组，再选词尾，不能让“多个”直接决定一律用-an。',
 '所谓规则，是本课所列动词在这个时态按这套构造。规则并不是删掉词干里的字母；estudiar去掉-ar后是estudi-，前面的i必须保留。'],['主语组','词尾','hablar的形式'],[['yo','-o','hablo'],['tú','-as','hablas'],['él/ella/usted','-a','habla'],['nosotros/as','-amos','hablamos'],['vosotros/as','-áis','habláis'],['ellos/ellas/ustedes','-an','hablan']]),
 rwSection('transfer','换动词时重新切词干，不改人称规则',[
 'estudiar→estudi-：yo estudio，tú estudias，ella estudia，nosotros estudiamos，vosotros estudiáis，ustedes estudian。要保留词干里的i，不能写成estudo。',
 'trabajar→trabaj-：trabajo/trabajas/trabaja/trabajamos/trabajáis/trabajan。comprar（买）→compr-：compro/compras/compra/compramos/compráis/compran。先用同一主语换动词，观察相同词尾怎样接到不同词干。',
 '例如“我们学习”和“我们工作”分别为estudiamos、trabajamos。词干表达动作，-amos告诉你这个时态的我们组；两部分各有作用，不是把整个词当成六个无关生词硬背。'],['原形','去-ar后','我们组示范'],[['estudiar（学习）','estudi-','estudiamos'],['trabajar（工作）','trabaj-','trabajamos'],['comprar（买）','compr-','compramos']]),
 rwSection('sentences','放进句子：先找主语，再看是否需要写出它',[
 'Yo trabajo aquí（我在这里工作）也常可说Trabajo aquí。动词trabajo已经提示我，语境清楚时可省略yo；省略主语不等于把动词退回原形trabajar。',
 'Ana compra libros（Ana买书）中，主语是Ana，libros是买的东西。即使书是复数，动词仍按Ana用compra。Ana y Luis compran libros才是两个人做动作，用compran。',
 '否定通常在变位动词前加no：No trabajo aquí（我不在这里工作）。问句需两端问号：¿Trabajas aquí?（你在这里工作吗？）。问句和否定并不会把本课这些形式自动变回原形。'],['句子','主语','判断'],[['Ana compra libros.','Ana，第三人称单数','compra，不被libros带成复数'],['Ana y Luis compran libros.','两人，第三人称复数','compran'],['No trabajo aquí.','省略yo','trabajo仍为我组']]),
 rwSection('limits','什么时候必须停下来查，而不是继续硬套？',[
 'hablar、estudiar、trabajar、comprar在本课现在时按规则练。pensar（想）也以-ar结尾，却有词干变化，如pienso；estar也有estoy等特殊形式。只认-ar还不够证明它规则。',
 '所以拿到未学动词，先查它在当前时态是否规则；本课题目只用明确说明的规则词，不让你在没教过时靠猜不规则词来过关。词干变化和不规则形式可以从相关专题继续学。',
 '自检顺序：时间与语气是否是本课范围→谁做动作→原形是否规则→只去最后-ar→加对应词尾→检查重音。能解释每一步，才比单独记住某道题答案更能迁移。'])
],[rwExample('usted + hablar → habla','您说话','usted虽然指对方，变位与él/ella同组。','hablar去-ar，剩habl-。','第三人称单数加-a，得到habla。'),rwExample('nosotras + estudiar → estudiamos','我们学习（全女性）','nosotras与nosotros共用动词形式。','只去最后-ar，保留estudi-。','加-amos，得到estudiamos。'),rwExample('Ana compra libros.','Ana买书。','找做动作的人Ana。','书是复数宾语，不控制本句动词。','Ana配compra，不是compran。')],[
 rwGroup('meaning','meaning','先弄清原形和变位','暂不背整张表。',rwChoice('词典原形hablar在“我说西语”中，本课使用哪个形式？','hablo',['hablo','hablaro','hablar'],'habl-加我组-o，不在完整原形后加-o。'),rwChoice('hablo与hablas之间的本课区别是什么？','对应的主语人称不同',['对应的主语人称不同','说的是两个无关动作','一个一定是过去时'],'两者都属于hablar现在时，但分别配yo、tú。')),
 rwGroup('subjects','subjects','先练主语映射','不生成新动词，只选人称组。',rwChoice('usted（您）使用本表哪一组词尾？','él/ella同组',['él/ella同组','tú同组','nosotros同组'],'礼貌称呼对方，却使用第三人称单数变位。'),rwChoice('Ana y Luis两个人做动作，对应哪一组？','ellos同组',['ellos同组','ella同组','yo同组'],'两位被谈论的人，第三人称复数。')),
 rwGroup('build','build','六个人称各练一次','只用规则动词hablar。',rwInput('hablar（说话），现在时yo：','hablo','habl-加-o。'),rwInput('hablar，现在时tú：','hablas','habl-加-as。'),rwInput('hablar，现在时usted：','habla','与él/ella同组，habl-加-a。'),rwInput('hablar，现在时nosotros：','hablamos','我们组加-amos。'),rwInput('hablar，现在时vosotros：','habláis','本组加-áis，á要保留。'),rwInput('hablar，现在时ustedes：','hablan','与ellos/ellas同组，加-an。')),
 rwGroup('transfer','transfer','换动作，不换已确定的人称','词义随题给出，均为本课规则词。',rwInput('estudiar（学习）去掉最后-ar，只写词干，不加连字符：','estudi','只去ar，前面的i属于词干。'),rwInput('estudiar（学习），现在时yo：','estudio','estudi-加-o，保留i。'),rwInput('trabajar（工作），现在时nosotras：','trabajamos','trabaj-加-amos；全女性组不改变动词词尾。'),rwInput('comprar（买），现在时ellas：','compran','compr-加第三人称复数-an。')),
 rwGroup('sentences','sentences','有了句子，仍先找谁做动作','题目只填动词。',rwInput('Ana ___ libros（书）. 用comprar（买）现在时；主语Ana。','compra','Ana为第三人称单数，复数宾语libros不控制动词。'),rwInput('Ana y Luis ___ libros. 用comprar现在时。','compran','两位主语配第三人称复数-an。'),rwInput('我不在这里工作：No ___ aquí. 用trabajar现在时，不写主语。','trabajo','省略yo仍保留我组变位trabajo。')),
 rwGroup('limits','limits','检验规则边界','不要求推导未教的不规则。',rwChoice('一个新动词以-ar结尾，就能断定它现在时完全规则吗？','不能，还要核对该词在该时态的形式',['不能，还要核对该词在该时态的形式','能，所有-ar都像hablar','能，不必看时态'],'pensar、estar等说明-ar只是原形类别，不等于完全规则。'))
],['所有-ar结尾都永远按hablar变化','先限定时态与具体动词，再看人称','只去最后-ar；宾语的复数不控制主语动词。'],['foundation-bridge-people','foundation-bridge-present-er-ir','foundation-topic-stem-patterns'],'动词现在时','参考《西班牙语公共课·上册》第3课变位概念、第4课规则-ar表和语法书的按人称操练方式；中文说明、迁移示范与新题独立编写。');

rewriteGrammar('bridge-present-er-ir','规则-er/-ir现在时：两张表逐格学，别混词尾','从原形辨认-er与-ir，分别构造comer、vivir现在时；比较我们/你们组，练主语控制并辨认规则边界。',[
 rwSection('start','先确认今天学的是什么，不靠前一课也能查',[
 'comer（吃）、beber（喝）是-er原形；vivir（居住）、abrir（打开）是-ir原形。原形是词典给的形式，放进本课的现在时陈述时，要按谁做动作使用对应变位。',
 '规则构造由词干加词尾组成：comer只去-er，剩com-；vivir只去-ir，剩viv-。这课只讲所列规则动词的直陈式现在时，不混过去时，也不把tener、ir等不规则动词硬套进来。',
 '六组依次是yo（我）、tú（你）、él/ella/usted（他/她/您）、nosotros/as（我们）、vosotros/as（你们，西班牙常用组）、ellos/ellas/ustedes（他们/她们/你们）。usted配第三组，ustedes配第六组。如果不熟主语，可以直接打开相关专题。'],['原形','词干','本例类别'],[['comer（吃）','com-','-er'],['beber（喝）','beb-','-er'],['vivir（居住）','viv-','-ir'],['abrir（打开）','abr-','-ir']]),
 rwSection('er','先只学-er：comer与beber',[
 '规则-er现在时词尾为-o、-es、-e、-emos、-éis、-en。comer去-er后com-依次接这些词尾：como、comes、come、comemos、coméis、comen。不要在完整comer后加-o，也不要误用-ar的-as、-amos。',
 '第三组的come可配él、ella或usted，具体指谁靠主语或语境；它不是只属于“他”。vosotros的coméis需写é，不能把重音当成可有可无。',
 '换到beber只换词干：bebo、bebes、bebe、bebemos、bebéis、beben。先用同一人称对比comemos/bebemos，再换人称，能够看出词尾规则，而不是背十二个无关联词。'],['主语','-er词尾','comer / beber'],[['yo','-o','como / bebo'],['tú','-es','comes / bebes'],['él/ella/usted','-e','come / bebe'],['nosotros/as','-emos','comemos / bebemos'],['vosotros/as','-éis','coméis / bebéis'],['ellos/ellas/ustedes','-en','comen / beben']]),
 rwSection('ir','再单学-ir：vivir与abrir',[
 '规则-ir现在时词尾为-o、-es、-e、-imos、-ís、-en。vivir去-ir后剩viv-，得到vivo、vives、vive、vivimos、vivís、viven。',
 '这张表与-er有四组相同方向，但我们和vosotros两组不同：不是vivemos、vivéis，而是vivimos、vivís。先辨认原形结尾，再选整张表。',
 'abrir在本课现在时按规则：abro、abres、abre、abrimos、abrís、abren。这里的现在时规则不代表所有其他时态或非人称形式都规则；例如它的过去分词abierto属于另一个知识点，本课不考。'],['主语','-ir词尾','vivir / abrir'],[['yo','-o','vivo / abro'],['tú','-es','vives / abres'],['él/ella/usted','-e','vive / abre'],['nosotros/as','-imos','vivimos / abrimos'],['vosotros/as','-ís','vivís / abrís'],['ellos/ellas/ustedes','-en','viven / abren']]),
 rwSection('compare','两张表对照：相同格与不同格分开记',[
 '把同一主语放在一起比：yo como / vivo，tú comes / vives，ella come / vive，ellas comen / viven。这四组词尾在本课两类规则动词中相同，词干仍各自不同。',
 '我们组：comemos与vivimos，对应-emos/-imos；vosotros组：coméis与vivís，对应-éis/-ís。这两对是最值得分项练的地方。不能因为大部分相同就宣布-er/-ir整张表完全相同。',
 '同样，不要把本课-ir的-imos搬给-er：nosotros bebemos，不是bebimos来表达本题现在时。bebimos在别的时态有用法，但本题限定现在时，选错不是拼写问题，而是时态、类别选错。'],['相同主语','-er例子','-ir例子'],[['我们','comemos','vivimos'],['vosotros','coméis','vivís'],['他们/她们/ustedes','comen','viven']]),
 rwSection('sentences','放回句子：对象变多不等于主语变多',[
 'Ana come manzanas（Ana吃苹果）中，主语Ana是一人，所以用come；manzanas是吃的东西，虽然复数，不把动词带成comen。Ana y Luis comen manzanas才是复数主语。',
 'Usted vive aquí（您住这里）与Ustedes viven aquí（你们住这里）先看主语，再配第三人称单数或复数。不要只看中文都在对对方说话，就一律配tú。',
 'Vivo aquí（我住这里）可以省略yo；No vivo aquí（我不住这里）在动词前加no。省略与否定都不要求把vivo改回vivir。题中提供完整框架后，你只需专心检查动词。']),
 rwSection('limits','遇到未教词，确认规则在这个时态是否适用',[
 'comer、beber、vivir、abrir是本课现在时的规则示例。tener以-er结尾却有tengo、tienes等形式；pedir以-ir结尾却有pido等词干变化；ir本身也不能机械去-ir后加词尾。',
 '看一个词是否规则，要限定时态和具体人称。比如abrir现在时规则，并不能由此推出过去分词必定规则。网站的变位表和不规则专题可以用于继续查证。',
 '检查步骤：读原形→辨-er还是-ir→找主语组→去两个字母→加本表词尾→检查é/í等必要重音。本节只用已教动词练，不拿陌生不规则形式当入门陷阱。'])
],[rwExample('nosotros + comer → comemos','我们吃','原形comer，选择-er表。','去-er，词干com-。','我们组加-emos，得到comemos。'),rwExample('vosotros + vivir → vivís','你们居住（本表vosotros组）','原形vivir，选择-ir表。','去-ir，词干viv-。','加-ís并保留í，得到vivís。'),rwExample('Ustedes abren la puerta.','你们打开门。','ustedes配第三人称复数。','abrir现在时在本课按规则。','abr-加-en，写abren；不取vosotros的abrís。')],[
 rwGroup('start','start','原形类别与词干先练','只去最后两个字母。',rwInput('comer（吃）去-er，只写词干，不加连字符：','com','comer去掉er，保留com。'),rwInput('vivir（居住）去-ir，只写词干，不加连字符：','viv','vivir去掉ir，保留viv。')),
 rwGroup('er','er','-er六格完整练','题中均限定直陈式现在时。',rwInput('comer，现在时yo：','como','com-加-o。'),rwInput('comer，现在时tú：','comes','com-加-es。'),rwInput('comer，现在时usted：','come','usted第三人称单数组，加-e。'),rwInput('comer，现在时nosotras：','comemos','-er我们组为-emos。'),rwInput('comer，现在时vosotros：','coméis','加-éis，保留é。'),rwInput('comer，现在时ellas：','comen','第三人称复数加-en。')),
 rwGroup('ir','ir','-ir六格另练','不要把我们/你们组搬错。',rwInput('vivir，现在时yo：','vivo','viv-加-o。'),rwInput('vivir，现在时tú：','vives','viv-加-es。'),rwInput('vivir，现在时ella：','vive','viv-加-e。'),rwInput('vivir，现在时nosotros：','vivimos','-ir我们组为-imos。'),rwInput('vivir，现在时vosotras：','vivís','-ir本组为-ís，保留í。'),rwInput('vivir，现在时ustedes：','viven','ustedes与ellos/ellas同组，加-en。')),
 rwGroup('compare','compare','我们/你们的易混词尾','再换一个本课规则词。',rwInput('beber（喝），现在时nosotros：','bebemos','-er我们组为-emos；本题不是过去时bebimos。'),rwInput('abrir（打开），现在时nosotras：','abrimos','-ir我们组为-imos。'),rwInput('beber（喝），现在时vosotras：','bebéis','-er本组为-éis。'),rwInput('abrir（打开），现在时vosotros：','abrís','-ir本组为-ís。')),
 rwGroup('sentences','sentences','主语控制动词','只填现在时动词，其他词已给。',rwInput('Ana ___ manzanas（苹果）. 用comer（吃）。','come','Ana单数；复数宾语manzanas不控制动词。'),rwInput('Ustedes ___ aquí（这里）. 用vivir（居住）。','viven','ustedes第三人称复数组，加-en。')),
 rwGroup('limits','limits','最后确认规则有边界','不推导未教的不规则形式。',rwChoice('abrir在本课现在时规则，是否足以证明它其他所有形式都规则？','不足，要按具体时态和形式查证',['不足，要按具体时态和形式查证','足以，任何形式都同一算法','说明它不是动词'],'规则性须限定范围；其分词abierto等另学。'))
],['-er与-ir现在时六组词尾全相同','我们和vosotros两组必须分开','先辨原形类别，再按主语选整张表；本课规则不扩展到所有时态。'],['foundation-bridge-people','foundation-bridge-present-ar','foundation-topic-stem-patterns'],'动词现在时','参考《西班牙语公共课·上册》第6课-er及后续-ir规则表，结合语法书的分类、对比和句内变位训练；中文讲解与全部配套题独立编写。');

rewriteGrammar('core','ser、estar、hay：先分别学会，再比较','先学三种结构各自怎样说、形式怎样选；最后才区分身份、位置、状态和存在，不把永久/暂时当万能规则。',[
 rwSection('start','先知道在学三套表达，不是三个同义词随便换',[
 '中文“是、在、有”不能直接与西语一一对应。这里分三小步：ser常说身份或属性；estar常给已识别人或物定位、描述状态；hay常引入某处存在什么。它们先各自学会，再做对比题。',
 'ser、estar是词典里的原形；句中常出现soy、es、estoy、está等变位。hay是haber在本课“存在”用法中的现在时形式。看见词形不同，要先知道它来自哪个表达系统。',
 '六个人称组：yo我，tú你，él/ella/usted他/她/您，nosotros/as我们，vosotros/as你们（西班牙常用组），ellos/ellas/ustedes他们/她们/你们。usted配第三人称单数，ustedes配第三人称复数。后面表格会列全。']),
 rwSection('ser','第一步只学ser：说明身份、来源等信息',[
 'Soy estudiante（我是学生）是在说身份；Ana es profesora（Ana是女教师）也用ser。这里给定estudiante可指男性或女性学生；职业名词无额外修饰时常不加不定冠词，不用先造一个“soy un/una”模板套一切。',
 'Soy de China（我来自中国）、Ana es de Madrid（Ana来自马德里）用ser+de说来源。先记完整框架，不把de也理解成动词的一部分。说“我”时soy，说Ana这个第三人称单数时es。',
 'ser现在时六组是soy/eres/es/somos/sois/son。它是不规则动词，不能去掉-er后套普通-er词尾。省略yo说Soy estudiante仍使用变位，不退回Ser estudiante来作同样完整陈述。'],['主语','ser现在时','本组提示'],[['yo','soy','我'],['tú','eres','你'],['él/ella/usted','es','他/她/您'],['nosotros/as','somos','我们'],['vosotros/as','sois','本表你们组'],['ellos/ellas/ustedes','son','他们/她们/你们']]),
 rwSection('estar-location','第二步只学estar定位：已知的人或物在哪里？',[
 '你已经知道是哪本书，现在问它在哪：¿Dónde está el libro?（那本书在哪里？）。回答El libro está en la mesa（那本书在桌子上）。这里el libro是要定位的对象，en la mesa给出位置。',
 'estar按对象的主语人称、数变化：Estoy aquí（我在这里），Ana está aquí（Ana在这里），Los libros están aquí（那些书在这里）。不是因为书在桌上暂时、建筑位置长期，就换一套选择依据。',
 'estar六组为estoy/estás/está/estamos/estáis/están，注意重音。está是动词形式，esta常见于esta mesa（这张桌子）这种指示词结构，两者不是随便带不带重音都一样。en常引入位置，但不总只能译成“里面”。'],['主语','estar现在时','示范'],[['yo','estoy','Estoy aquí. 我在这里。'],['tú','estás','Estás aquí. 你在这里。'],['él/ella/usted','está','Ana está aquí.'],['nosotros/as','estamos','Estamos aquí.'],['vosotros/as','estáis','Estáis aquí.'],['ellos/ellas/ustedes','están','Los libros están aquí.']]),
 rwSection('estar-state','estar还说状态：先学明确搭配，不靠中文直译',[
 'Ana está cansada（Ana累了）、Luis está enfermo（Luis病了）都是estar+状态描述。先把动词和形容词两个决定分开：本节题目已经给出cansada、enfermo等形式，只要求你选动词，不暗中考阴阳性变化。',
 '某些同一形容词换动词会换意思：Ana es lista常说Ana聪明，Ana está lista常说Ana准备好了。不能看到lista就机械固定选某一个；语境必须告诉你要表达什么。',
 '“ser=永久，estar=暂时”会误导：Soy joven（我年轻）不是永远年轻；Está muerto（他死了）也不是只因状态短暂才用estar。先看属性、状态、具体搭配与信息目的，时间长短不能独自决定。'],['本节明确意思','表达','先检查什么'],[['Ana感到累','Ana está cansada.','状态表达用estar'],['Ana聪明','Ana es lista.','本例说聪明'],['Ana准备好了','Ana está lista.','本例说准备状态']]),
 rwSection('hay','第三步只学hay：介绍某处有什么',[
 '进入一个房间，要介绍里面有什么：Hay una mesa（有一张桌子），Hay dos sillas（有两把椅子）。这里是在引入存在对象，不是给已识别的那张桌子定位。可以先说地点：En la habitación hay dos sillas（房间里有两把椅子）。',
 '在本课存在义现在时中，一张、两把或很多都用hay：Hay un libro / Hay dos libros。不要因为后面复数就造出hayes，也不要换成han来作本课存在句。haber的复合时态助动词用法属于别的专题。',
 'hay后常引入不定对象，如un libro、dos libros，或物质量名词agua（水）。本节采用这些入门主线，不宣布所有高级语境的定指表达都绝对不可能。否定是在前面加no：No hay agua（没有水）。'],['要引入的内容','完整句','本课形式'],[['一本书','Hay un libro.','hay'],['两本书','Hay dos libros.','仍hay'],['没有水','No hay agua.','no+hay']]),
 rwSection('contrast','都学过以后，再用同一场景区分三种问题',[
 '场景一：你想知道房间里有什么→Hay una mesa（有一张桌子）。接着要找刚才那张桌子在哪里→La mesa está junto a la ventana（桌子在窗边）。对象相同，但介绍存在和定位已知对象是不同任务。',
 '场景二：问Ana做什么身份→Ana es profesora；问Ana现在在哪→Ana está aquí。中文都在介绍Ana，也不等于西语只能用一个“是”。选完动词系统，还要按Ana单数选es或está。',
 '活动发生地点要另看：La reunión es en la escuela（会议在学校举行）。这里说会议这种活动的举办地点，常用ser，不能把“句中出现地点”概括成任何对象都必须estar。练习会明确是物品位置还是活动举办地点。'],['问题','本节答案','理由'],[['房间里有什么？','Hay una mesa.','引入存在'],['那张桌子在哪？','La mesa está aquí.','定位已识别对象'],['会议在哪里举行？','La reunión es en la escuela.','活动举办地点常用ser']]),
 rwSection('method','做题时分两次决定，避免把词义和变位混在一起',[
 '第一次决定表达系统：本题是在说身份/来源、对象位置/状态，还是某处存在？活动举办地点与形容词搭配也要核对。不要先看到中文某个字就直接填答案。',
 '第二次决定形式：ser或estar按主语选人称、数；本课存在hay不按后面名词数量变形。最后检查está/están等书面重音。选错系统与选错形式是不同问题，解析会指出是哪一步。',
 '先做ser组，再做estar定位组，再做状态组和hay组；各组稳定后才做场景对比。你可以直接跳到不懂的那组规则，不要求反复阅读文章或重做其他模块。'])
],[rwExample('Usted es estudiante.','您是学生。','本例说身份，选择ser系统。','usted配第三人称单数。','ser该组形式es。'),rwExample('Los libros están aquí.','那些书在这里。','定位已识别的书，选择estar。','主语los libros是第三人称复数。','用están，保留á。'),rwExample('Hay dos libros.','有两本书。','本例引入存在对象。','存在义现在时用hay。','后面dos libros复数，不改变hay。')],[
 rwGroup('start','start','先辨认三套表达的用途','暂不混考形式。',rwSort('将本课明确说明的任务分到表达系统。',['ser','estar','hay'],[['学生身份','要说“我是学生”','ser','身份主线。'],['已知物品定位','要找那本已经知道的书','estar','给已识别对象定位。'],['房内存在','介绍房间里有两把椅子','hay','引入存在对象。'],['来源','要说来自中国','ser','本课ser+de来源框架。']],'活动举办地点等边界在后面单独讲。')),
 rwGroup('ser','ser','只练身份/来源的ser六格','词义和身份形式已给，不考新形容词。',rwInput('Yo ___ estudiante（学生）. 用ser现在时。','soy','身份用ser；yo配soy。'),rwInput('Tú ___ estudiante. 用ser现在时。','eres','tú配ser的eres。'),rwInput('Usted ___ estudiante. 用ser现在时。','es','usted与él/ella同组，不用eres。'),rwInput('Nosotras ___ de China（来自中国）. 用ser现在时。','somos','我们组somos；nosotras不改变动词为另一个性别形式。'),rwInput('Vosotros ___ de China. 用ser现在时。','sois','本组ser形式为sois。'),rwInput('Ustedes ___ de China. 用ser现在时。','son','ustedes配第三人称复数son。')),
 rwGroup('location','estar-location','只练已识别对象的位置','题中已经指定定位，检查estar形式。',rwInput('Yo ___ aquí（这里）. 用estar现在时。','estoy','我组estoy。'),rwInput('Tú ___ aquí. 用estar现在时。','estás','你组estás，写á。'),rwInput('El libro（那本书，单数）___ aquí. 用estar现在时。','está','定位对象为第三人称单数，写está。'),rwInput('Nosotros ___ aquí. 用estar现在时。','estamos','我们组estamos，不加本表不存在的重音。'),rwInput('Vosotras ___ aquí. 用estar现在时。','estáis','本组estáis。'),rwInput('Los libros（那些书，复数）___ aquí. 用estar现在时。','están','第三人称复数están。')),
 rwGroup('state','estar-state','状态与搭配单独辨认','形容词已给，不考它的词尾。',rwChoice('明确表达“Ana准备好了”：Ana ___ lista.','está',['está','es','hay'],'本例estar lista为准备好；ser lista常表示聪明。'),rwChoice('明确表达“Ana聪明”：Ana ___ lista.','es',['es','está','hay'],'本例ser lista说聪明，不是准备状态。'),rwChoice('“ser必永久、estar必短暂”这条是否可靠？','不可靠，必须看用途和具体搭配',['不可靠，必须看用途和具体搭配','可靠，任何句子都能套','可靠，所有状态都很短暂'],'Soy joven与Está muerto说明持续时间不能充当万能条件。')),
 rwGroup('existence','hay','只练存在义hay','不要因对象的数量改变hay。',rwInput('介绍某处有一本书：___ un libro. 填存在义现在时。','hay','本课存在用法为hay；句首大小写不影响本系统判断。'),rwInput('介绍某处有两本书：___ dos libros. 填存在义现在时。','hay','后面复数，hay不变成hayes或han。'),rwInput('没有水：No ___ agua. 填存在义现在时。','hay','否定no放在hay前，水的数量不控制hay。')),
 rwGroup('contrast','contrast','最后做信息明确的场景对比','区分表达系统后，再看主语形式。',rwChoice('找已经知道的那张桌子：La mesa ___ aquí（这里）.','está',['está','hay','son'],'定位已识别的mesa，用estar；单数está。'),rwChoice('明确说“会议在学校举行”：La reunión ___ en la escuela.','es',['es','está','hay'],'本题说活动举办地点，入门主线用ser的es。'),rwChoice('首次介绍房间中存在的物品：En la habitación ___ dos sillas（两把椅子）.','hay',['hay','están','son'],'本题引入存在对象，用hay；不是定位已识别的椅子。'))
],['只用永久/暂时选择ser或estar','先看信息任务与具体搭配，再选形式','存在hay、对象定位estar、身份ser分别练；活动举办地点等边界明讲。'],['foundation-bridge-people','foundation-adjectives','foundation-topic-state-adjectives'],'核心动词用法','参考《西班牙语公共课·上册》第3—4课ser/estar分表讲解、存在与位置框架，结合语法书ser/estar/hay的情境对比；全部中文展开、示范与题目独立编写。');

// Canonical lessons retain stable guide IDs. Other entries and embedded teaching use the same revised explanation.
const grammarRewriteAliases={'gp-A1-7':'foundation-bridge-articles','gp-A1-8':'foundation-bridge-articles','gp-A1-9':'foundation-bridge-articles','gp-A1-12':'foundation-adjectives','gp-A1-19':'foundation-bridge-present-ar','gp-A1-20':'foundation-bridge-present-er-ir','gp-A1-23':'foundation-core','gp-A1-24':'foundation-core','gp-A1-25':'foundation-core','foundation-topic-agreement':'foundation-adjectives','gp-A1-6':'foundation-bridge-plural','sg-book-3-a':'foundation-bridge-plural','sg-book-4-a':'foundation-adjectives','sg-book-4-b':'foundation-adjectives','sg-book-4-c':'foundation-adjectives','sg-book-5-a':'foundation-bridge-articles','sg-book-5-b':'foundation-bridge-articles'};
for(const [id,target]of Object.entries(grammarRewriteAliases)){
 const g=grammarGuide.find(g=>g.id===id),f=foundationLessons.find(f=>f.id===id),l=grammarRewriteLessons.find(l=>l.id===target);
 if(g){for(const q of g.questions||[g.question])if(q)q.supersededBy=target;g.genderCanonical=target;g.question=grammarGuide.find(g=>g.id===target).question;g.questions=grammarGuide.find(g=>g.id===target).questions}
 if(f){f.genderLesson=l;f.deep=foundationLessons.find(f=>f.id===target).deep;f.questions=grammarGuide.find(g=>g.id===target).questions}
}
for(const row of textbookCoverage){const g=grammarGuide.find(g=>g.id===row.guide),canonical=g?.genderCanonical||g?.id;if(grammarRewriteLessons.some(l=>l.id===canonical))row.questions=grammarGuide.find(g=>g.id===canonical).questions.map(q=>q.id)}
