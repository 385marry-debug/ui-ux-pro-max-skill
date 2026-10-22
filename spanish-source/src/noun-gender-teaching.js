// Gender is a property of a noun sense; it is not assigned to verbs/adverbs.
const nounGenderNotes={
currículo:['m.','el currículo；表示课程体系或履历。currículum 也是常见形式。'],
celular:['m.','el celular（手机）；形容词 celular（细胞的等）另按被修饰名词配合。'],
masculino:['m.','名词术语 el masculino（阳性形式/阳性类别）为阳性；形容词 masculino/masculina 则与被描述的名词一致。'],
femenino:['m.','名词术语 el femenino（阴性形式/阴性类别）本身用阳性冠词；形容词 femenino/femenina 依其修饰对象变化。'],
agua:['f.','el agua fría；las aguas frías。重读 /a/ 开头的阴性名词单数紧接定冠词时用 el，性仍为阴性。'],
águila:['f.','el águila blanca；las águilas blancas。单数 el 不改变名词阴性。'],
hambre:['f.','el hambre intensa。hambre 阴性；形容词用 intensa，不是 intenso。'],
alma:['f.','el alma；las almas。紧接单数定冠词时用 el，性仍为阴性。'],
aula:['f.','el aula pequeña；las aulas pequeñas。aula 是阴性。'],
mano:['f.','la mano derecha。-o 结尾也可能是阴性。'],
día:['m.','el día siguiente。-a 结尾不保证阴性。'],
problema:['m.','el problema difícil；los problemas。'],
mapa:['m.','el mapa nuevo；los mapas。'],
capital:['m. / f.','按义区分：el capital（资金，m.）；la capital（首都，f.）。表示“主要的”时是形容词，不按此名词标签理解。'],
orden:['m. / f.','按义区分：el orden（顺序、秩序，m.）；la orden（命令，f.）。不是冠词任意替换。'],
frente:['m. / f.','按义区分：la frente（额头，f.）；el frente（前线、锋面等，m.）。'],
cura:['m. / f.','按义区分：el cura（神父，m.）；la cura（治疗、疗法，f.）。'],
cometa:['m. / f.','按义区分：el cometa（彗星，m.）；la cometa（风筝，f.）。'],
mañana:['f.','名词“早晨”：la mañana，f.；副词“明天”：mañana，无名词阴阳性。'],
tarde:['f.','名词“下午”：la tarde，f.；副词“晚、迟”：tarde，不标名词阴阳性。'],
artista:['m. y f.','同一词形指不同人物：el artista / la artista；冠词与所指人物配合。'],
estudiante:['m. y f.','el estudiante / la estudiante。词形不必改为 -a。'],
periodista:['m. y f.','el periodista / la periodista。'],
persona:['f.','la persona；无论指男性还是女性，名词语法性都为阴性。'],
víctima:['f.','la víctima；所指人物是男性时也保持阴性一致。'],
foto:['f.','la foto，是 fotografía 的缩略形式。'],
moto:['f.','la moto，是 motocicleta 的缩略形式。']
};
const plainAdverbs=new Set('hoy ahora después siempre nunca lejos delante detrás'.split(' '));
for(const w of vocab){
 if(lexicalHeadword(w.word)==='alegre'){w.kind='形容词';continue}
 if(plainAdverbs.has(lexicalHeadword(w.word))){w.kind='副词';continue}
 if(!/名词/.test(w.kind))continue;
 const surfaces=w.word.toLowerCase().split(/\s*\/\s*/).map(s=>s.replace(/^(el|la|los|las|un|una|unos|unas) /,''));
 const h=lexicalHeadword(w.word),note=nounGenderNotes[h];
 if(note){w.gender=note[0];w.genderNote=note[1];w.genderSource='教学核对';continue}
 const results=surfaces.map(s=>nounGenderLexicon[s]);
 if(surfaces.length>1&&results.every(Boolean)){
  w.gender=surfaces.map((s,i)=>s+' '+results[i].map(x=>x==='mf'?'m. y f.':x+'.').join(' / ')).join(' · ');
  w.genderNote='分别标注词条中的不同词形；不是所有词形都同时兼有两种性。';w.genderSource='Apertium 形态词典';continue;
 }
 const phraseHead=/^(el|la|los|las|un|una|unos|unas) /.test(w.word)?surfaces[0].split(' ')[0]:null;
 const tags=nounGenderLexicon[surfaces[0]]||(phraseHead&&nounGenderLexicon[phraseHead]);
 if(tags){const set=new Set(tags);w.gender=set.has('mf')&&set.size===1?'m. y f.':set.size===1?[...set][0]+'.':'m. / f.';w.genderSource='Apertium 形态词典';w.genderNote=set.has('mf')?'同一词形有阳性、阴性人物用法；具体指称须结合冠词和语境。':set.size>1?'来源有多种性别分析，可能涉及不同词义或用法；请结合例句核对，不能任意互换。':'此标注用于该词的名词用法；同形动词、形容词等另看词性。'}
 else{w.gender='待核对';w.genderNote='尚未匹配到可靠的名词性别数据；不根据词尾猜测。'}
}
