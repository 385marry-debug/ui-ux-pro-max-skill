const syncWarmups={};
function sw(chapter,title,notes,examples,script,checks){const id='sync-warm-'+chapter;syncWarmups[chapter]={id,chapter,title,notes,examples,script,audio:'assets/audio/'+id+'.mp3',questions:checks.map((q,i)=>({...q,id:id+'-q'+i,level:chapter<=9?'A1':'A2',cat:'语音与情境听辨',syncChapter:chapter}))};for(const q of syncWarmups[chapter].questions){questionBank.push(q);byId.set(q.id,q)}}
sw(1,'字母、五元音与第一步分音节',[
'先分字母名与词中声音：现代字母表有27个字母，ch、ll是字母组合。五元音a/e/i/o/u先读清楚，h通常不发音，ñ与n不同。',
'a/e/o常称强元音，i/u常称弱元音；相邻元音是否同一音节要看组合和重读。先练ca-sa、me-sa、a-mi-go，再学重读í/ú形成分音等情况。',
'm、n、l、ll放回词中练，ll/y存在地区差异。录下自己的读音并对比示范；文字和合成语音可辅助识别，但不能自动证明你的发音已准确。'
],[['a/e/i/o/u','五个清晰元音'],['casa / mesa','ca-sa / me-sa'],['amigo','a-mi-go'],['niño','ñ不是普通n']],'Hola. Casa. Mesa. Amigo. Niño. ¿Qué es esto? Es una casa.',[
 srChoice('现代西语字母表里 ch、ll 通常如何处理？','字母组合，不是另外两个独立字母',['字母组合，不是另外两个独立字母','因此共有29个现代字母','与ñ完全相同'],'区分现代字母表与历史教材教学排列。'),srInput('按示范补出“房子”：ca-___.','sa','casa分ca-sa；此题检查分音节，不自动评价发音。')]);
sw(2,'p/t/c/h 与默认重读',[
'p、t的常见西语读法不照搬英语强送气；c在a/o/u前常为/k/，e/i前随地区可为/θ/或/s/。h通常无独立发音。',
'常见起点：以元音、n或s结尾通常重读倒数第二音节，其他辅音结尾通常重读末音节。辅音组合等还需看更细规则，不能只看最后一个字母。',
'casa、papel、café帮助对比默认重读与书面重音；先标重读音节，再核对是否需要符号。不能看到某个词是动词就随意加重音。'
],[['pato / tapa','p/t放进词中练'],['casa / cine','后接元音影响c'],['hola','h通常不发音'],['casa / papel / café','重读规则与例外标记']],'Pato. Tapa. Casa. Cine. Hola. Papel. Café.',[
 srChoice('hola 中 h 的常见情况是：','通常不发音',['通常不发音','必须读英语h','等于ñ'],'初学先掌握常见静音h。'),srInput('“咖啡”保留正确重音：','café','末音节重读，用é。')]);
sw(3,'清浊、闭塞与摩擦：ch/s/b/v/d/g',[
'清浊先观察声带是否参与，闭塞与摩擦则涉及气流通道怎样形成。p/b、t/d、k/g可帮助观察区别，但实际音值随语音环境变化，不是每处都同一个音。',
'b与v通常不形成英语那样的两个音位对立，拼写仍不能互换。d、g在不同位置可有闭塞或较松的实现，先听词首与词中对比。',
'gue/gui中u通常不发音；güe/güi的ü要求读出u。ch常可对照chico识别，s也需放进连续语流练，不能只背字母名。'
],[['p/b','声带参与的对比'],['t/d','发音方式随环境变化'],['guerra / pingüino','gu与gü的u不同'],['chico / casa','ch与s等不混同']],'Chico. Casa. Bebo agua. Un gato. Guerra. Pingüino.',[
 srChoice('güi 的双点主要标明：','u在这里要发音',['u在这里要发音','必须把整词重读在u','改成英语w'],'ü不是书面重音符。'),srInput('企鹅，保留双点：','pingüino','güi中的ü不可漏。')]);
sw(4,'c/qu、g/gu、r/rr 与下降双元音',[
'e/i前表示/k/的常见拼写是que/qui；相应硬g音常用gue/gui。不要把que、gue中的u都读成额外元音。',
'元音间r与rr可区分词义，如pero/perro；词首r及n、l等后有不同位置规律。n在连续发音中可受后接辅音影响，发音配合不等于把拼写全部改掉。',
'ai/ay、ei/ey、oi/oy、au、eu等组合可形成双元音。词内c遇到其他辅音时需看音节和具体发音环境，别只凭中文替音。'
],[['queso / quince','que/qui'],['guerra / guiso','gue/gui'],['pero / perro','元音间r/rr'],['aire / rey / causa','双元音示例']],'Queso. Quince. Guerra. Guiso. Pero. Perro. Aire. Rey. Causa.',[
 srChoice('pero 与 perro 的区别：','可能区分词义',['可能区分词义','只是任意多写一个r','与重读无关所以无须学'],'元音间r/rr需听辨和保留拼写。'),srInput('“奶酪”的常见词形：','queso','que在这里提供/k/的拼写。')]);
sw(5,'j/f/y/ñ、上升双元音、连读与-mente',[
'j、f、y、ñ分别放进jamón、foto、yo、niño等词里练。y/ll的实现有地区变化，ñ与n的区别不能省略。',
'ia/ie/io、ua/ue/uo、iu/ui可在相应条件下形成双元音；重读弱元音有时打破组合。先对比tierra、ciudad与país，不宣布所有相邻元音一律同音节。',
'连续语流中词末辅音与后词元音常连读，如los amigos，但书写仍分词。-mente副词可保留原形容词的重音特点和原有书面重音，如rápida→rápidamente。'
],[['jamón / foto','j与f'],['niño / yo','ñ与y'],['tierra / ciudad / país','组合与分音'],['rápidamente','保留原形容词重音符']],'Jamón. Foto. Niño. Yo. Tierra. Ciudad. País. Los amigos. Rápidamente.',[
 srChoice('los amigos 连读时，书写应：','仍按两个词书写',['仍按两个词书写','合成losamigos','删除所有元音'],'连读不是拼写合词。'),srInput('rápida加-mente，写完整副词：','rápidamente','保留rápida中的á。')]);
sw(6,'k/w/x/z、三元音与音节边界',[
'k、w多见于外来词；x的读法要看具体词，如taxi常有/ks/，México的常见读法则不照这一项机械处理。z/c的地区差异与书写规范分开。',
'弱—强—弱元音可在条件成立时构成三元音，如buey、limpiáis；重读弱元音等情况会改变分音。y在词尾可承担相应元音功能。',
'划音节要看可作音节起始的辅音组合，连读又是词与词之间的语流现象。先分清两个层面，再把句子自然连接，别为追求快把必要声音全部吞掉。'
],[['taxi / México','x按具体词核对'],['buey','三元音示例'],['limpiáis','lim-piáis'],['país','重读í形成分音']],'Taxi. México. Buey. Limpiáis. País. Uruguay.',[
 srChoice('x 是否在所有词中永远同一种读法？','不是，要看具体词',['不是，要看具体词','是，永远照taxi','与词形无关'],'taxi与México用于说明范围。'),srInput('把“国家”写出正确重音：','país','重读í使相邻元音分音。')]);
sw(7,'pl/pr、bl/br、tl/tr、dr 与重读词',[
'pl/pr、bl/br、tr、dr等常与后面的元音组成紧密的起始组合，练时避免在两个辅音间加入中文式额外元音。',
'tl等组合的音节划分存在地区差异，不能只用一套切分宣布其他规范读法都错。用具体词、目标地区和词典发音核对。',
'冠词、部分介词和非重读代词常依附邻近重读词形成语流，轻读不等于删除。el/él、tu/tú还承担不同语法功能。'
],[['plato / pronto','pl/pr'],['blanco / brazo','bl/br'],['trabajo / drama','tr/dr'],['el libro / él habla','功能与重读区别']],'Plato. Pronto. Blanco. Brazo. Trabajo. Drama. El libro. Él habla.',[
 srChoice('辅音连缀练习时，应避免：','凭中文习惯插入额外元音',['凭中文习惯插入额外元音','听整词','核对地区差异'],'把组合放进真实词中练。'),srInput('“他的”不是本题；填写重读人称代词“他”：','él','él带区别重音，与冠词el分开。')]);
sw(8,'cl/cr、gl/gr、fl/fr 与句子语调',[
'cl/cr、gl/gr、fl/fr等组合可用clase、crema、globo、grande、flor、fruta成组练。先慢读清楚，再放进句中。',
'陈述、是非问句、特殊问句与感叹可能呈现不同语调，但地区、语境和态度会改变曲线；不能把所有问句都规定成同一上扬。',
'标点帮助预期功能：¿…?与¡…!成对。先根据交际意图判断是询问、说明还是感叹，再观察语调，不只看最后声音高低。'
],[['clase / crema','cl/cr'],['globo / grande','gl/gr'],['flor / fruta','fl/fr'],['¿Vienes? / ¡Qué bien!','意图与语调']],'Clase. Crema. Globo. Grande. Flor. Fruta. ¿Vienes? ¡Qué bien!',[
 srChoice('所有西语问句都必须同样上扬吗？','不是，受句型地区和语境影响',['不是，受句型地区和语境影响','是，永远相同','只看字数'],'语调不能只背一个升降口号。'),srInput('直接问句开头的倒问号：只填符号。','¿','西语直接问句常用成对问号。')]);
sw(9,'按意义分语调群',[
'语调群是连续语流中的意义和语调单位，停顿应帮助理解。不能把教材某个常见音节长度当成所有句子的强制上限。',
'先找从句、并列项与信息边界；如Si tienes tiempo | podemos hablar mañana。一般不要无理由把冠词和名词、代词和动词拆散。',
'连贯不等于越快越好。先读懂谁做什么、条件是什么，再标停顿和重读；录音重听时检查是否把听者需要的关系表达清楚。'
],[['Si tienes tiempo | podemos hablar.','条件与结果'],['El libro de Ana | está aquí.','完整主语组'],['No me lo digas.','代词组合不随意拆开'],['Primero…, después…','步骤边界']],'Si tienes tiempo, podemos hablar mañana. El libro de Ana está aquí. No me lo digas.',[
 srChoice('划语调群主要应考虑：','意义与句法关系',['意义与句法关系','每句必须完全相同字数','随意每两个词停顿'],'分组为了帮助理解，不为机械凑长度。'),srInput('完整条件连接词：___ tienes tiempo, podemos hablar.','si','si引条件，此处不加sí的重音。')]);
sw(10,'从话语推断场所', ['听关键词时同时看行动目的：买一公斤苹果、点饮品、请翻书页、问路可能对应不同场所。','不是听到一个词就立刻排除所有其他语境；把请求、回应和实际任务合起来判断。','本段为原创合成语音，练习与教材相同的情境推断目标。'],[['un kilo de manzanas','水果店情境'],['Abra el libro','课堂情境'],['¿Cómo voy a…?','问路情境']],'Buenos días. Quiero medio kilo de manzanas. Claro. ¿Quiere también peras? No, gracias. ¿Cuánto es todo?',[
 srChoice('这段对话最可能在哪里？','水果店',['水果店','图书馆借书台','婚礼仪式'],'买半公斤苹果并问是否要梨。'),srInput('medio ___ de manzanas.（公斤）','kilo','数量与计价语境帮助判断场所。')]);
sw(11,'把tú请求换成usted', ['先确认是在对谁说话，再选相应肯定命令式，不把礼貌称呼usted配成tú。','形式变化外还要看关系、语气和具体请求；用了usted不保证内容就自动得体。','先练pasa/pase、compra/compre、mira/mire，再处理代词位置。'],[['tú: pasa','usted: pase'],['tú: compra','usted: compre'],['tú: mira','usted: mire']],'Pasa, por favor. Pase, por favor. Compra el billete. Compre el billete. Mira el horario. Mire el horario.',[
 srChoice('usted 的肯定命令“请进”常用：','Pase, por favor.',['Pase, por favor.','Pasas, por favor.','Paso tú.'],'对应人称形式不同。'),srInput('usted肯定指令：___ el horario.（mirar）','mire','mirar的usted命令式为mire。')]);
sw(12,'听订单，把菜、饮品和甜点分栏', ['先画三栏：第一/第二道、饮品、甜点，再听说话者分别要什么。','否定和改口很关键：no quiero postre不等于没听到postre就自动选甜点。','听后用自己的话复述订单，核对是否有漏项；这比只抓某个菜名更接近实际点餐。'],[['de primero','第一道'],['para beber','饮品'],['sin postre','不要甜点']],'De primero quiero una ensalada. De segundo, pescado. Para beber, agua. No quiero postre, pero sí un café al final.',[
 srChoice('这位顾客要什么饮品？','水',['水','果汁','啤酒'],'录音明确para beber, agua。'),srInput('De ___ quiero una ensalada.（第一道）','primero','点餐顺序表达de primero。')]);
sw(13,'改习惯时区分肯定与否定指令', ['先明确要对方做什么或停止什么，再选肯定/否定。否定tú通常不是在肯定形式前简单加no。','代词在肯定命令后接、否定前置，重音也要检查。','用具体动作表达建议，不把语言练习理解为有权命令任何陌生人。'],[['abre / no abras','开/别开'],['levántate / no te levantes','起身/别起身'],['haz / no hagas','做/别做'],['di / no digas','说/别说']],'Abre la ventana. No abras la puerta. Levántate temprano. No te acuestes tan tarde. Haz la tarea. No tires los papeles. Dime la verdad. No me digas eso.',[
 srChoice('“别开门”（tú）正确形式：','No abras la puerta.',['No abras la puerta.','No abre la puerta.','No abrir tú.'],'否定tú用abras。'),srInput('否定：No me ___ eso.（decir,tú）','digas','代词前置，动词取否定命令所需形式。')]);
sw(14,'建议、义务与许可不要混同', ['tienes que提出义务，puedes提出能力、许可或可选办法。选择哪种还受双方关系和问题性质影响。','先复述对方的问题，再给与之相关的建议；不要只看到抱怨就机械套必须。','下面五种情况用于辨认语言意图，不是替代专业意见。'],[['No entiendo una palabra','Puedes consultarla.'],['Quiero confirmar la hora','Puedes escribir un mensaje.'],['Tenemos una fecha límite','Tenemos que organizarnos.'],['No sé dónde está','Puedes preguntar.'],['Debo enviar el formulario','Tengo que revisarlo.']],'No entiendo esta palabra. Puedes consultarla. No recuerdo la hora. Puedes preguntar. Tenemos una fecha límite. Tenemos que organizarnos. Voy a enviar el formulario. Tengo que revisar los datos.',[
 srChoice('puedes 在本段建议中主要表示：','一种可行办法',['一种可行办法','已发生过去事实','强制所有人同意'],'语境为提供可选做法。'),srInput('义务：Tenemos ___ organizarnos.','que','tener que＋原形。')]);
sw(15,'跟着食谱听步骤', ['先听食材与动作，再辨认动作顺序；剥、切、混合不是同一个步骤。','se被动形式的动词与被处理主语配数，se cortan los tomates中的复数有依据。','原书的图句配对目标在这里用步骤表和原创短音频练习，解释后再尝试复述。'],[['lavar','清洗'],['cortar','切'],['mezclar','混合'],['añadir','加入']],'Primero se lavan los tomates. Después se cortan. Se añade un poco de sal. Finalmente se mezcla todo y se sirve la ensalada.',[
 srChoice('先做的事是：','洗番茄',['洗番茄','立即上桌','先加所有盐'],'录音以Primero se lavan开始。'),srInput('Se ___ los tomates.（lavar）','lavan','被动主语为tomates复数。')]);
sw(16,'听节庆简介，提取日期与地点', ['先建立信息格：节日名、城市、日期、活动。不要把出现的所有数字都当价格或年份。','San Fermín与Pamplona有关，传统庆祝通常在7月6日至14日；具体年份节目仍需查当年安排。','本段原创简介也包括音乐、游行等活动，不把整座城市或节庆缩成单一活动。'],[['Pamplona','城市'],['del 6 al 14 de julio','日期范围'],['música y desfiles','活动示例']],'Las fiestas de San Fermín se celebran en Pamplona. Tradicionalmente tienen lugar del seis al catorce de julio. Hay música, desfiles y muchas actividades. El programa concreto cambia según el año.',[
 srChoice('简介提到哪个城市？','Pamplona',['Pamplona','Madrid','Málaga'],'录音直接给出城市。'),srInput('7月：只写月份名。','julio','julio通常小写；日期范围与具体节目分开。')]);
sw(17,'用原创节奏短文抓过去时', ['教材歌曲活动训练过去式听辨；这里提供独立撰写的节奏短文，不将原歌曲歌词或录音当作本站素材。','先圈hablé、comí、fui等动词，再按原形和人称分类，不只抄听到的最后一个音节。','重复听后把三件事按时间顺序复述；不要把所有过去形式都套同一种词尾。'],[['hablar→hablé','规则-ar'],['comer→comí','规则-er'],['ir→fui','常见不规则']],'Ayer hablé con una amiga. Después comí en casa. Por la tarde fui al parque. Vi a mis vecinos y volví temprano. Hoy cuento lo que pasó.',[
 srChoice('fui 在本段的原形是：','ir',['ir','hablar','comer'],'fui al parque的去向支持ir。'),srInput('hablar，简单过去，yo：','hablé','规则-ar的yo过去词尾-é。')]);
sw(18,'听两则留言，区分人物与近况', ['先分别记下每条留言的说话者、住处、工作或学习变化；不要把第一条信息填到第二个人身上。','人称代词与动词词尾、时间词共同帮助追踪谁说了什么。','听后先概括事实，再表达自己的推断；caer bien表示相处印象，不能一律理解为浪漫喜欢。'],[['mensaje uno','新住处与学习'],['mensaje dos','工作与见面安排'],['caer bien','对人的好印象']],'Mensaje uno. Hola, soy Elena. Ahora vivo cerca de la universidad y estudio por la mañana. Mis compañeros me caen bien. Mensaje dos. Hola, soy Mario. Trabajo en una librería. Esta semana puedo verte el domingo por la tarde.',[
 srChoice('第二条留言的人在哪里工作？','书店',['书店','机场','医院'],'第二条说Trabajo en una librería。'),srInput('第二条留言说周日：el ___.','domingo','先区分两条留言中的信息归属。')]);
