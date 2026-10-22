from pathlib import Path
import json,re,shutil
root=Path(__file__).resolve().parents[1];icons=Path('/tmp/lucide-spanish/package/icons');scenes=[]
custom={
'fork':'<path d="M6 1v8q0 3 4 3t4-3V1m-4 0v23"/>',
'knife':'<path d="M13 1q-7 5-6 12h6v11m0-23v12"/>',
'plate':'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="7"/>',
'bench':'<path d="M2 6h20v7H2zM1 15h22M5 15v8m14-8v8M5 6V2m14 4V2"/>',
'platform':'<path d="M1 11h22v4H1zM3 15v4m18-4v4M1 21h22M3 19v5m6-5v5m6-5v5m6-5v5M12 11V2m-5 0h10v6H7z"/>',
'spoon':'<ellipse cx="12" cy="6" rx="4" ry="5"/><path d="M12 11v12"/>',
'cheese':'<path d="M2 20V10L18 3l4 7v10zM2 10h20M6 14h1m7 3h1m3-4h1"/><circle cx="8" cy="17" r="1"/>',
'fountain':'<path d="M2 16q10 12 20 0zM12 16V5m0 1Q5 2 4 10m8-4q7-4 8 4M6 12v2m12-2v2"/>',
 'traffic-lights':'<rect x="7" y="1" width="10" height="18" rx="2"/><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="10" r="1.5"/><circle cx="12" cy="15" r="1.5"/><path d="M12 19v5"/>',
 'sink':'<path d="M2 11h20l-3 8H5zM12 11V5q0-5 5-3v3M4 20v3m16-3v3"/>',
 'medical-mask':'<path d="M5 7h14v10q-7 6-14 0zM5 8Q-3 5 2 15l3 1m14-8q8-3 3 7l-3 1M8 10h8m-8 3h8m-8 3h8"/>',
 'pants':'<path d="M5 2h14l2 21h-7L12 9l-2 14H3zM5 5h14"/>',
 'dress':'<path d="M9 1h6l1 7-1 3 6 12H3l6-12-1-3zM9 11h6"/>',
 'coat':'<path d="M7 2l5 2 5-2 6 6-4 4-2-3v14H7V9l-2 3-4-4zM12 4v19m-2-12h.1m-.1 4h.1m-.1 4h.1"/>',
 'hat':'<path d="M6 14 8 4q4-3 8 0l2 10M2 15q10 10 20 0Q12 12 2 15zM7 10h10"/>'}

def sc(id,name,items,request,answer,wrong1,wrong2,note,style):
 objects=[];positions=[('arriba, a la izquierda',100,130),('arriba, en el centro a la izquierda',310,130),('arriba, en el centro a la derecha',520,130),('arriba, a la derecha',730,130),('abajo, a la izquierda',100,370),('abajo, en el centro a la izquierda',310,370),('abajo, en el centro a la derecha',520,370),('abajo, a la derecha',730,370)]
 for i,line in enumerate(items.split(';')):
  word,zh,icon=line.split('|');assert icon in custom or (icons/(icon+'.svg')).exists(),icon
  svg=(icons/(icon+'.svg')).read_text() if icon not in custom else '<svg>'+custom[icon]+'</svg>';inner=re.sub(r'^.*?<svg[^>]*>|</svg>\s*$','',svg,flags=re.S);pos,x,y=positions[i]
  art='La' if word.startswith('la ') else 'El';noun=word.split(' ',1)[1]
  drawing=f'<g transform="translate({x-48} {y-48}) scale(4)" fill="none" stroke="#315548" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">{inner}</g>'
  objects.append(dict(id=id+'-'+str(i),word=word,zh=zh,example=f'{art} {noun} está {pos}.',translation=zh+'在示意图的'+['左上方','上方偏左','上方偏右','右上方','左下方','下方偏左','下方偏右','右下方'][i]+'。',svg=drawing))
 qa=[[f'¿Dónde está {objects[0]["word"]}?','Arriba, a la izquierda.',['Arriba, a la izquierda.','Abajo, a la derecha.','Fuera de la escena.'],'按当前示意图的实际位置判断，不按自己家或真实场所猜。'],[f'Completa: Hay _____ {objects[1]["word"].split(" ",1)[1]}.','una' if objects[1]['word'].startswith('la ') else 'un',['un','una','unos'],'先看名词语法性与单数；冠词连名词记。'],[request,answer,[answer,wrong1,wrong2],note]]
 backdrop={
 'room':'<path d="M40 300H860M40 315H860" stroke="#b1bda6" stroke-width="4"/><rect x="15" y="15" width="870" height="530" rx="18" fill="none" stroke="#c5cdb7" stroke-width="6"/>',
 'shop':'<rect x="40" y="45" width="820" height="180" fill="#f5f2e7"/><path d="M40 230H860M40 250H860M40 460H860" stroke="#bd9c72" stroke-width="10"/>',
 'outdoor':'<rect width="900" height="300" fill="#dcecef"/><path d="M0 300H900V560H0" fill="#cddbbb"/><path d="M0 285H900" stroke="#a8c7bc" stroke-width="5"/>',
 'public':'<rect x="25" y="25" width="850" height="210" rx="12" fill="#dfebec"/><path d="M0 285H900M0 295H900" stroke="#c0cdbb" stroke-width="5"/>',
 'bath':'<path d="M0 100H900M0 200H900M0 300H900M0 400H900M100 0V560M250 0V560M400 0V560M550 0V560M700 0V560M850 0V560" stroke="#d2dfd8" stroke-width="2"/>'}[style]
 scenes.append(dict(id=id,name=name,intro='场景示意图：先辨认物品，再练位置、词性与实际交流。图中的位置用于本轮练习。',objects=objects,qa=qa,backdrop=backdrop))
sc('kitchen','厨房','el frigorífico|冰箱|refrigerator;la olla|锅|cooking-pot;el microondas|微波炉|microwave;el fregadero|水槽|sink;el plato|盘子|plate;el vaso|玻璃杯|glass-water;el tenedor|叉子|fork;la cuchara|勺子|spoon','Quieres agua. ¿Qué dices?','¿Me pasas un vaso de agua, por favor?','Necesito un billete de tren.','¿Dónde está mi pasaporte?','请求一杯水要说明容器和内容，por favor 调整语气。','room')
sc('supermarket','超市','el carrito|购物推车|shopping-cart;la manzana|苹果|apple;el pan|面包|sandwich;la leche|牛奶|milk;el queso|奶酪|cheese;el pescado|鱼|fish;la cesta|篮子|shopping-basket;el recibo|小票|receipt','No sabes el precio. ¿Qué preguntas?','¿Cuánto cuesta?','¿Cómo te llamas?','¿Qué hora es?','cuánto cuesta 询问单个商品价格；多个商品可能用 cuestan。','shop')
sc('bathroom','浴室','el lavabo|洗手盆|sink;la ducha|淋浴|shower-head;el inodoro|坐便器|toilet;el cepillo de dientes|牙刷|toothbrush;el jabón|肥皂／洗手液|soap-dispenser-droplet;el espejo|镜子|rectangle-vertical;la toalla|毛巾|towel-rack;la lavadora|洗衣机|washing-machine','¿Qué haces con el cepillo de dientes?','Me cepillo los dientes.','Compro un billete.','Escribo una carta.','cepillarse los dientes 是洗漱搭配；me 对应 yo。','bath')
sc('airport','机场','el avión|飞机|plane;la maleta|行李箱|luggage;el pasaporte|护照|book-user;el billete|票|ticket;la puerta de embarque|登机口|door-open;el reloj|钟|clock;la pantalla|显示屏|monitor;el asiento|座位|armchair','¿Qué debes confirmar antes de embarcar?','La puerta y la hora de embarque.','El color favorito del piloto.','La receta de la sopa.','核对登机口和登机时间；登机时间与起飞时间不同。','public')
sc('hotel','酒店','la cama|床|bed-double;la llave|钥匙|key-round;el ascensor|电梯|arrow-up-down;el teléfono|电话|phone;la recepción|前台|concierge-bell;la lámpara|灯|lamp-desk;el equipaje|行李|luggage;la tarjeta|卡|credit-card','Tienes una reserva. ¿Qué dices?','Tengo una reserva a nombre de Lin.','Quiero cambiar un neumático.','Me gusta la gramática.','a nombre de 指预订姓名；不需先背复杂长句才能入住。','room')
sc('clinic','诊所','el estetoscopio|听诊器|stethoscope;la jeringa|注射器|syringe;el termómetro|温度计|thermometer;la receta|处方|file-text;la silla|椅子|armchair;el botiquín|急救箱|briefcase-medical;el reloj|钟|clock;la mascarilla|口罩|medical-mask','No has entendido una pregunta. ¿Qué dices?','¿Puede repetirla más despacio?','Sí a todo, aunque no entienda.','No necesito comprobar nada.','重要信息不懂时明确请求重复；本场景练语言，不给诊疗建议。','public')
sc('park','公园','el árbol|树|tree-deciduous;la flor|花|flower-2;el banco|长椅|bench;la bicicleta|自行车|bike;el perro|狗|dog;la pelota|球|volleyball;la fuente|喷泉|fountain;el sendero|小路|route','En este contexto, ¿qué significa banco?','Un asiento largo.','Siempre una institución financiera.','Un tipo de avión.','公园与就坐语境提示长椅义，但 banco 还可指银行。','outdoor')
sc('office','办公室','el ordenador|电脑|monitor;la impresora|打印机|printer;el teclado|键盘|keyboard;el ratón|鼠标|mouse;el teléfono|电话|phone;el calendario|日历|calendar-days;el documento|文件|file-text;el clip|回形针|paperclip','Quieres pedir una copia del documento. ¿Qué dices?','¿Puedes enviarme una copia?','¿A qué sabe este documento?','Tengo hambre de impresora.','poder+原形提出请求，enviarme 说明收件者是我。','room')
sc('street','街道','el semáforo|交通灯|traffic-lights;la farmacia|药店|cross;el banco|银行|landmark;el autobús|公交车|bus;el coche|汽车|car;la bicicleta|自行车|bike;la señal|路标|signpost;el paso de peatones|人行横道|footprints','Buscas una farmacia. ¿Qué preguntas?','¿Dónde hay una farmacia cerca?','¿Cuántos años tiene el autobús?','¿Cómo sabe la señal?','寻找尚未特定的一家药店可用 dónde hay；定位已知药店可用 dónde está。','outdoor')
sc('restaurant','餐厅','la carta|菜单|notebook-text;el plato|盘子|plate;la copa|高脚杯|wine;la servilleta|餐巾|square;el cuchillo|刀|knife;el tenedor|叉子|fork;la cuenta|账单|receipt;la mesa|餐桌|table','En el restaurante, ¿qué suele significar la carta?','El menú de comidas y bebidas.','Siempre una carta postal.','El pasaporte del cliente.','餐厅语境常为菜单；carta 也可指信或纸牌。','room')
sc('clothes','服装店','la camiseta|T恤|shirt;el pantalón|裤子|pants;el vestido|连衣裙|dress;el zapato|鞋|footprints;el sombrero|帽子|hat;el abrigo|大衣|coat;la puerta del probador|试衣间的门|door-closed;la etiqueta|标签|tag','Quieres otra talla. ¿Qué preguntas?','¿Tiene una talla más grande?','¿Sale el tren a las cinco?','¿Dónde está la sopa?','talla 表服装尺码，más grande 说明希望更大。','shop')
sc('station','火车站','el tren|火车|train-front;el billete|车票|ticket;el andén|站台|platform;el reloj|时钟|clock;la máquina|售票机|panel-top;la maleta|行李箱|luggage;el mapa|地图|map;la salida|出口|door-open','El tren llega con retraso. ¿Qué necesitas confirmar?','La nueva hora y la conexión.','El color de todas las maletas.','La edad del reloj.','晚点可能影响换乘，应核对更新信息而不是只背原时刻。','public')
(root/'src/extra-scenes.js').write_text('const extraSceneData='+json.dumps(scenes,ensure_ascii=False).replace('<',r'\u003c')+';\nfor(const s of extraSceneData){s.questions=s.qa.map(([prompt,answer,options,explain],i)=>({id:"scene-"+s.id+"-"+i,level:"A1",cat:"场景问答",kind:"choice",prompt,answer,options,explain,scene:s.id,speak:answer}));sceneData.push(s);for(const q of s.questions){questionBank.push(q);byId.set(q.id,q)}}\n')
shutil.copy2(icons.parent/'LICENSE',root/'assets/licenses/LUCIDE-LICENSE.txt')
print('New scenes',len(scenes),'objects',sum(len(s['objects']) for s in scenes))
