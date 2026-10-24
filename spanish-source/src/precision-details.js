// A checklist row records an authored subrule, not proof that the book's entire chapter is reviewed.
const precisionDetails=[];
function ruleDetail(suffix,key,title,paragraphs,columns,rows,checks,reference){
 const f=foundationLessons.find(f=>f.id==='foundation-'+suffix),g=grammarGuide.find(g=>g.id===f.id);if(!f?.deep)throw Error('Detail needs an authored lesson: '+suffix);
 const detail={key,guide:f.id,title,paragraphs,columns,rows,reference,questions:checks.map((raw,i)=>({...raw,id:'detail-'+key+'-'+i,level:f.level,cat:f.domain,guide:f.id}))};
 for(const q of detail.questions){f.questions.push(q);questionBank.push(q);byId.set(q.id,q)}
 (f.precisionDetails??=[]).push(detail);g.questions=f.questions;g.lesson.steps.push(...paragraphs,JSON.stringify(rows));precisionDetails.push(detail);
}
ruleDetail('bridge-plural','plural-boundaries','复数细则：-s/-x 不总变化，-í/-ú 不只有一种结果',[
'先读出单数重音，再看结尾。el mes→los meses、el país→los países 在本例中变化；el lunes→los lunes、el análisis→los análisis 的常见单复数同形。不能记成“只要末尾 s 就不变”，也不能一律再加 -es。',
'重读 -í/-ú 有些名词存在两个规范复数，如 tabú→tabúes/tabús；具体词还涉及常用度与固定形式，不能扩大成任何元音都任意换。查到多个规范形式时，应结合题目范围接受，不能把另一种合法形式当错。'
],['单数示例','复数示例','判断重点'],[['el mes','los meses','重读单音节 s 结尾，本词加 -es。'],['el análisis','los análisis','本词常见单复数同形；靠冠词等区分。'],['el tabú','los tabúes / los tabús','本题所教两种复数都接受。']],[
 {...bridgeInput('把 tabú 变复数，只填名词。','tabúes','本题 tabúes 与 tabús 均为可接受形式；两者重音都不能随意省去。'),acceptedAnswers:['tabús']},
 bridgeChoice('análisis 的常规复数名词组：','los análisis',['los análisis','los análisises','las análisisas'],'本词常见单复数同形；冠词显示复数。')
],{chapter:2,pdfPages:[39,40],scope:'从名词复数基础继续补充词尾与重读的边界，不表示原页已穷尽所有变体。'});
ruleDetail('gender','gender-categories','人物名词：通性、固定语法性与按词义分性',[
'el/la estudiante 通过冠词等配合指称人物，词形可以保持；la persona、la víctima 的语法性则固定阴性，即使指男性。不能把“人物是男性”一律转换成 el，也不能把所有阴性人物称谓都机械换 -o。',
'el capital（资金）与 la capital（首都）体现词义相关的性别区别；el/la artista 则是另一类人物用法。词库 m. y f. 与 m. / f. 的提示帮助区分，但具体仍以义项和例句为准。'
],['例子','语法信息','示范'],[['el/la estudiante','同形人物用法','la estudiante nueva / el estudiante nuevo'],['la persona','固定阴性','una persona amable，可指男性。'],['el capital / la capital','不同义项','资金 / 首都，不是任意换冠词。']],[
 bridgeChoice('persona 指一位男性时，常规名词组仍可为：','una persona amable',['una persona amable','un persona amable','un persono amable'],'persona 语法性固定阴性；自然性别与语法性分开。'),
 bridgeChoice('el capital 与 la capital 在本课所教用法中：','可因词义不同而区分性别',['可因词义不同而区分性别','永远表示同一个意思','都只是同一艺术家的性别'],'资金与首都属于不同义项，不能任意互换。')
],{chapter:1,pdfPages:[27,28],scope:'对名词性别概念的教学扩展，帮助解释例外分类。'});
ruleDetail('topic-possessives','possessive-reference','su/sus 的歧义与“一位我的朋友”',[
'sus libros 表几本被拥有的书，并不能告诉你拥有者是一个还是多个，也不能判断性别。要澄清可说 los libros de Ana、de ustedes 等；su 在 tú 语境不能自动当作“你的”，那一人称常用 tu/tus。',
'un amigo mío 常说我的一位朋友，mío 在名词后配 amigo；la casa es nuestra 中 nuestra 作表语。el mío 省去语境可恢复的名词；不应从这一形式推断前置 mi libro 也要写成 el mi libro。'
],['表达','看什么','不要推断'],[['sus libros','libros 为复数','不能据 sus 推出拥有者一定多人。'],['un amigo mío','amigo 阳性单数','mío 不按拥有者性别选。'],['la casa es nuestra','casa 阴性单数','即使拥有者为男性组也用 nuestra。']],[
 bridgeChoice('sus libros 中 sus 能确定拥有者有几人吗？','不能，只能据此看出被拥有名词的复数',['不能，只能据此看出被拥有名词的复数','能，一定多人','能，一定女性'],'su/sus 的单复数通常跟被拥有对象；拥有者依语境澄清。'),
 bridgeInput('我（女性）的一位男性朋友：un amigo ___.','mío','mío 配被拥有的 amigo 阳性单数，不配拥有者性别。')
],{chapter:7,pdfPages:[156,157],scope:'重读物主词位置、与名词一致及指称歧义。'});
ruleDetail('topic-commands','command-boundaries','命令式细则：pensemos、durmamos 与代词脱落',[
'pensar 的 nosotros 肯定建议是 pensemos；dormir 则是 durmamos。-ir 动词在虚拟式相关形式中的词干变化，不能全部照搬现在直陈式 nosotros 不变的印象。先确定语气，再选该动词的人称形式。',
'levantemos+nos→levantémonos，nosotros 的末尾 -s 在 nos 前脱落；levantad+os→levantaos，肯定 vosotros 的 -d 在该组合通常脱落。irse 的 idos/iros 等有另需核对的特例。规则要带条件，不要记成所有后接代词都删同一个字母。'
],['来源','目标形式','分步'],[['pensar / dormir','pensemos / durmamos','分别看虚拟式相关词干，不按一条现在时口号生成。'],['levantemos + nos','levantémonos','去末尾 s，连写，再按重音规则标注。'],['levantad + os','levantaos','本词组合去 d，不误推到所有动词与代词。']],[
 bridgeInput('nosotros，肯定建议“睡吧”：___ bien.（dormir）','durmamos','dormir 的该形式用 durmamos，不是 dormamos 或 duermamos。'),
 bridgeInput('把 levantemos 与 nos 组合成肯定形式，只填一个词。','levantémonos','去掉动词末尾 s 后接 nos，并保留正确重音。')
],{chapter:11,pdfPages:[259,260,261],scope:'nosotros/vosotros 的词干与后接代词组合。'});
ruleDetail('topic-calendar','calendar-register','日期细则：estar a、正式落款、月份年份与年代缩写',[
'¿A cuántos estamos? 可问今天几号，回答 Estamos a 24 de octubre；¿Qué fecha es hoy? 可用 Hoy es 24 de octubre。这里是两套完整表达，不能把 es 与 estamos 任意替换而不处理介词。',
'普通叙事可说 Llegó el 24 de octubre；只说月份或年份常用 en octubre、en 2026。正式证书等可遇 a 24 de octubre de 2026 的格式，属于语体约定，不应据此给所有日期都加 a。a. C. / d. C. 是常见年代缩写；年份按普通数字读，不照搬英语分段读法。'
],['范围/语体','示范','含义或读法'],[['星期','lunes, martes, miércoles, jueves, viernes, sábado, domingo','周一至周日；通常小写。'],['月份（前半）','enero, febrero, marzo, abril, mayo, junio','一至六月；通常小写。'],['月份（后半）','julio, agosto, septiembre, octubre, noviembre, diciembre','七至十二月；通常小写。'],['年份','2026: dos mil veintiséis','作为一个数字读，不拆成英语式两组。'],['问日子','Estamos a 24 de octubre.','estar a 与对应问法配合。'],['正式日期格式','a 24 de octubre de 2026','在特定公文/落款中辨认，非所有状语的万能格式。'],['年代','a. C. / d. C.','公元前 / 公元；先具备阅读识别能力。']],[
 bridgeInput('按 estar 日期表达：Estamos ___ 24 de octubre.','a','该完整日期框架为 estar a；不是一般住在某处的 en。'),
 bridgeChoice('只说“在2026年”这一时间状语，常用：','en 2026',['en 2026','a la 2026','los 2026'],'单说年份常用 en；完整日期 el 24 de octubre 与特定公文 a… 是另两类。')
],{chapter:17,pdfPages:[424,425,426],scope:'日期六部分中的星期、月份、读法、问法、状语与年代表达。'});
ruleDetail('topic-nonfinite','participle-agreement','同一分词三种结构：haber、estar、ser',[
'He escrito las cartas 是复合时态，escrito 不随宾语 cartas 改写；Las cartas están escritas 描述写好的状态；Las cartas fueron escritas 以事件被动组织写信过程。看到同一个分词，要先识别它所在的结构。',
'estar/ser 后与主语做形容词式一致，并不意味着 haber 后也一致；副动词 escribiendo 又不是分词，不写成 escribiendas。先从整句恢复主语、助动结构和信息任务，再处理词尾。'
],['结构','示例','一致'],[['haber + 分词','He escrito las cartas.','分词不按宾语性数变化。'],['estar + 状态分词','Las cartas están escritas.','描述主语状态，配阴性复数。'],['ser + 被动分词','Las cartas fueron escritas.','事件被动，分词配被动主语。']],[
 bridgeInput('He ___ las cartas.（escribir，完成结构）','escrito','haber+分词中 escrito 不随宾语改成 escritas。'),
 bridgeInput('Las cartas fueron ___.（escribir，事件被动）','escritas','ser 被动的分词与阴性复数主语 cartas 一致。')
],{chapter:17,pdfPages:[427,428],scope:'分词构成与形容词式用法，并对比已学完成结构。'});
ruleDetail('topic-question-order','questions-with-prepositions','有介词的疑问：de dónde、con quién 与信息范围',[
'¿De dónde eres? 问来源，de 来自 ser de；¿Con quién hablas? 问交谈对象，con 来自 hablar con alguien。不能为了把疑问词放句首，就把原来需要的介词删掉。',
'¿Quién viene? 中 quién 是未知主语；¿A quién ves? 中问的是人物直接宾语。提问对象的角色来自完整句，不是看到 quién 就统一叫主语，也不是带 a 就统一叫间接宾语。'
],['完整结构','提问','问题角色'],[['ser de un lugar','¿De dónde eres?','来源。'],['hablar con alguien','¿Con quién hablas?','交谈对象的介词补语。'],['ver a Ana','¿A quién ves?','人物直接宾语，非因有 a 就成为间接宾语。']],[
 bridgeInput('按 hablar con alguien 提问：¿___ quién hablas?','con','保留动词框架 hablar con 的 con。'),
 bridgeChoice('¿A quién ves? 中被询问的人是：','直接宾语',['直接宾语','一定是主语','因为 a 所以必是间接宾语'],'ver 的人物对象是直接宾语，人称 a 不改变这一角色。')
],{chapter:11,pdfPages:[263,264],scope:'疑问词序需同时保留句子角色与介词关系。'});
ruleDetail('topic-object-clauses','clause-roles','从句细则：que 不作主语，是否疑问不必加 que',[
'Creo que Ana viene 中 que 负责连接内容，不自动充当从句主语；Ana 才与 viene 配合。主句 creo 的第一人称也不让从句随之变为 vengo。把两个小句各自的主语与谓语画出来，能发现人称错误。',
'No sé si viene 表不知道是否来，si 引出间接是非疑问；No sé dónde vive 则引出位置疑问，dónde 带重音。不需要为了“后面有从句”就给它们都加 que。先判断是在陈述内容、询问是否还是询问具体信息。'
],['意图','示范','连接方式'],[['报告所信内容','Creo que Ana viene.','que + 完整内容从句。'],['不知道是否','No sé si viene.','si 引出间接是非疑问。'],['不知道哪里','No sé dónde vive.','疑问词引出缺口，保留疑问重音。']],[
 bridgeInput('不知道是否来：No sé ___ viene.','si','si 为是否的间接疑问，不是条件；此处不额外加 que。'),
 bridgeChoice('Creo que Ana viene 中从句主语是：','Ana',['Ana','que','主句省略的 yo'],'从句各自找主语，que 是连接成分。')
],{chapter:12,pdfPages:[292,293],scope:'宾语内容、主从句人称与疑问信息的教学辨析。'});
