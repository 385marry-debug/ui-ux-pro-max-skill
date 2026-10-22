// Replace topic-group labels with the grammatical class of the actual entry.
const specificPOS={};
function posSet(words,label){for(const word of words.split('|'))specificPOS[word]=label}
posSet('yo|tú|él|ella|usted|nosotros|nosotras|vosotros|vosotras|ellos|ellas|ustedes|vos','人称代词');
posSet('me|te|se|nos|os|le|les','非重读人称代词（具体功能依结构）');
posSet('lo|la|los|las','冠词／人称代词（依结构）');
posSet('mi|tu|su|mis|tus|sus|nuestro|nuestra|vuestro|vuestra','物主限定词');
posSet('mío|mía|tuyo|tuya|suyo|suya','物主形容词／代词（依结构）');
posSet('este|esta|estos|estas|ese|esa|esos|esas|aquel|aquella|aquellos|aquellas','指示限定词／代词');
posSet('esto|eso|aquello','中性指示代词');
posSet('a|ante|con|contra|de|desde|durante|en|entre|hacia|hasta|mediante|para|por|según|sin|sobre|tras','介词');
posSet('alguno|alguna|algún|ninguno|ninguna|ningún|todo|toda|otro|otra|varios|varias','不定限定词／代词（依结构）');
posSet('mucho|poco|bastante|demasiado|tanto','量词性限定词／代词；副词（依结构）');posSet('mucha|poca|demasiada|tanta','量词性限定词／代词');
posSet('si|pero|sino|pues|porque|y|e|o|u|ni','连词（具体关系依结构）');posSet('sí','肯定副词／反身代词（依结构）');posSet('no','否定副词（也可名词化）');posSet('el|un|una|unos|unas','冠词／限定词（依结构）');posSet('al|del','介词与冠词的缩合');posSet('qué|cuál','疑问／感叹代词或限定词（依结构）');posSet('quién|quiénes','疑问／感叹代词');posSet('dónde|cuándo|cómo','疑问／感叹副词');posSet('donde|cuando','关系副词／连接用法（依结构）');posSet('cada','分配限定词');posSet('además','副词（连接作用）');
posSet('macho|hembra','名词／形容词（用法及一致依具体结构）');posSet('singular|plural|masculino|femenino','形容词／名词（语法术语的名词化用法）');
posSet('completar|clasificar|marcar|sustituir|transformar','动词');
posSet('ya que|puesto que|siempre que|a menos que|de ahí que|si bien|aun cuando|con tal de que|siempre y cuando|a no ser que|a fin de que|en la medida en que','连词短语');
posSet('a pesar de|en lugar de|en cuanto a|con respecto a|debido a|gracias a|con el fin de|por lo que respecta a','介词短语');
posSet('es decir|dicho de otro modo|en otras palabras','话语标记／解释性表达');
for(const w of vocab){const h=lexicalHeadword(w.word),bare=w.word.split(' / ')[0],entry=dictByHeadword.get(h);if(teachingLexicon[h]){w.kind=w.kind.replace('连接词；关系代词','连词；关系代词').replace('bajar 的变位形式','动词 bajar 的变位形式').replace('comer 的 yo 形式','动词 comer 的 yo 形式');continue}if(specificPOS[h]){w.kind=specificPOS[h];continue}if(/^(el|la|los|las|un|una) /.test(w.word)&&!/^el (que|cual)/.test(w.word)){w.kind='名词';continue}if(w.kind==='数词与数量词'){w.kind='数词';continue}if(/^[a-záéíóúüñ]+$/i.test(bare)&&entry){w.kind=[...new Set(entry.senses.map(s=>({n:'名词',v:'动词',a:'形容词',r:'副词'}[s.pos])))].filter(Boolean).join('；');continue}if(w.kind==='连接表达'){w.kind='副词短语／连接表达';continue}if(w.kind==='教材辅助词条'){w.kind='名词短语（语法术语）';continue}if(w.word.includes(' ')&&!w.word.includes(' / ')&&/^[a-záéíóúüñ]+(?:ar|er|ir|ír)(?:se)? /i.test(w.word)&&/动词|搭配/.test(w.kind)){w.kind='动词短语';continue}if(w.kind==='名词与动词'&&/^(?:[a-záéíóúüñ]+)(?:ar|er|ir|ír)(?:se)?$/i.test(bare)){w.kind='动词';continue}if(w.kind==='名词与方位'||w.kind==='名词与时间词'||w.kind==='名词与表达'||w.kind==='名词与形容词'||w.kind==='形容词与副词'||w.kind==='形容词、副词与连接词'){w.kind=w.word.includes(' ')?'固定短语（按完整结构学习）':w.kind.replaceAll('与','／').replace('副词与连接词','副词／连词')}
}
