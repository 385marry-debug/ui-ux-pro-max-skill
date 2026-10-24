// Contextual glosses, authored for the reading passages rather than guessed from isolated dictionary senses.
const readingGlosses={};
const readingGlossRows=[
'aeropuerto|m.|机场;mochila|f.|背包;plaza|f.|广场;fuente|f.|喷泉;edificio|m.|建筑物;museo|m.|博物馆;gracias|interj.|谢谢;despacio|adv.|慢慢地',
'vecino|m./f.|邻居;presentar|tr.|介绍;silla|f.|椅子;estudiante|m. y f.|学生;empresa|f.|公司;apellido|m.|姓;tarde|f.|下午;señora|f.|女士',
'bienvenido|adj.|受欢迎的（bienvenida随阴性名词变化）;tomar|tr.|喝、吃（本篇）；也可指拿取;agua|f.|水（单数重读a前用el agua）;pelo|m.|头发;alto|adj.|高的;sociable|adj.|合群的、善交际的;origen|m.|出身、来源;Valencia|n. prop.|瓦伦西亚',
'oficina|f.|办公室;facultad|f.|大学的院系;pasillo|m.|走廊;derecha|f.|右侧（a la derecha）;papelería|f.|文具店;cafetería|f.|咖啡馆;lejos|adv.|远;andando|ger.|步行（andar的副动词）',
'horario|m.|时间表、营业时间;empleada|f.|女雇员;terminar|tr./intr.|完成、结束;querer|tr.|想要;poder|v.|能、可以;película|f.|电影;encontrarse|v. prnl.|碰面、处于某状态;tienda|f.|商店',
'piso|m.|公寓（本篇）；也可指楼层;habitación|f.|房间;salón|m.|客厅;ventana|f.|窗;encima|adv.|在上面（encima de）;debajo|adv.|在下面（debajo de）;armario|m.|衣柜、柜子;estantería|f.|书架、置物架',
'compra|f.|购买、买来的东西;chaqueta|f.|夹克、外套;manzana|f.|苹果;kilo|m.|千克;docena|f.|一打，十二个;huevo|m.|鸡蛋;botella|f.|瓶、瓶子;cantidad|f.|数量',
'falda|f.|裙子;seda|f.|丝绸;algodón|m.|棉;preferir|tr.|更喜欢;gafas|f. pl.|眼镜;probador|m.|试衣间;manga|f.|衣袖;talla|f.|衣服尺码',
'levantarse|v. prnl.|起床、站起来;lavarse|v. prnl.|洗自己的身体;despertar|tr./intr.|叫醒、醒来（despertarse：醒来）;acostarse|v. prnl.|上床睡觉;desayuno|m.|早餐;deporte|m.|体育运动;parque|m.|公园;responsabilidad|f.|责任',
'exposición|f.|展览（本篇）；也可指陈述;cruzar|tr.|穿过;seguir|tr./intr.|沿着走、继续;girar|intr.|转弯;pendiente|adj.|待处理的、待确认的;llamada|f.|电话、呼叫;entrada|f.|门票（本篇）；也可指入口;fecha|f.|日期',
'menú|m.|菜单、套餐;incluir|tr.|包括;bebida|f.|饮料;postre|m.|甜点;ensalada|f.|沙拉;pescado|m.|作为食物的鱼;salsa|f.|酱汁;ración|f.|一份食物',
'opinión|f.|意见;parecer|intr.|看起来、使人觉得;historia|f.|故事（本篇）；也可指历史;acuerdo|m.|一致意见、协议;final|m.|结局;proponer|tr.|提议;alternativa|f.|替代方案;domingo|m.|星期日',
'organizar|tr.|组织、安排;fiesta|f.|聚会、节庆;encargarse|v. prnl.|负责（encargarse de）;invitación|f.|邀请;asunto|m.|邮件主题、事项;dirección|f.|地址（本篇）；也可指方向;destinatario|m./f.|收件人;colaborar|intr.|合作',
'reencuentro|m.|重逢;desde|prep.|从……起;hace|v.|hace+时间：距今多久（hacer的形式）;regalo|m.|礼物;agradecer|tr.|感谢;acordarse|v. prnl.|记得（acordarse de）;asunto|m.|事情、话题;invitado|m./f.|受邀者、客人',
'tarjeta|f.|卡片;felicitación|f.|祝贺、贺词;fiesta|f.|节庆、聚会;receta|f.|食谱（本篇）；也可指处方;tomate|m.|番茄;mezclar|tr.|混合;campanada|f.|一声钟响;Nochevieja|f.|除夕，12月31日夜',
'álbum|m.|相册;primo|m./f.|堂/表兄弟姐妹;guitarra|f.|吉他;foto|f.|照片（fotografía的缩略）;canción|f.|歌曲;campo|m.|乡间、田野;gente|f. sg.|人们（集合名词，语法上单数）;pasárselo|v. prnl.|度过、玩得……（pasárselo bien）',
'boda|f.|婚礼;ceremonia|f.|仪式;invitación|f.|邀请; civil|adj.|民事的;religioso|adj.|宗教的;casarse|v. prnl.|结婚;novio|m./f.|新郎/新娘（婚礼语境）；也可指男女朋友;celebración|f.|庆祝活动',
'biografía|f.|传记;nacer|intr.|出生;morir|intr.|死亡;obra|f.|作品;pueblo|m.|村镇（本篇）；也可指人民;río|m.|河;invierno|m.|冬季;medio|m.|媒体（medio de comunicación）',
'alojamiento|m.|住宿;reserva|f.|预订;confirmación|f.|确认;solicitud|f.|申请、请求;modificación|f.|更改;importe|m.|金额;acuerdo|m.|约定、协议;acusación|f.|指责、指控',
'referencia|f.|所指对象、参照;reunir|tr.|汇集、召集;documento|m.|文件;corresponder|intr.|属于……职责、与……对应;definitivo|adj.|最终的;cumplimiento|m.|履行、遵守;destinatario|m./f.|接收者;precisión|f.|准确、精确',
'encuesta|f.|调查;garantizar|tr.|保证;porcentaje|m.|百分比;población|f.|总体（调查语境）；也可指人口;motivación|f.|动机;delimitar|tr.|界定;evidencia|f.|证据;prudente|adj.|审慎的',
'desacuerdo|m.|分歧;exposición|f.|陈述、展示;coordinadora|f.|女协调人;audiencia|f.|受众、听众;anexo|m.|附件;definitivo|adj.|最终的;criterio|m.|标准;verificable|adj.|可核实的'
];
syncReadings.forEach((r,i)=>{r.glosses=readingGlossRows[i].split(';').map(row=>{const[head,abbr,meaning]=row.split('|');return {head:head.trim(),abbr,meaning}});for(const g of r.glosses)readingGlosses[r.id+'|'+g.head.toLocaleLowerCase('es')]=g});
