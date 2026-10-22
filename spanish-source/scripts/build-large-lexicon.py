"""Create Spanish–Chinese sense-linked dictionary headwords from OMW, not inflection lists."""
from pathlib import Path
from zipfile import ZipFile
from collections import defaultdict,Counter
import json,re,unicodedata,hashlib,xml.etree.ElementTree as ET
from wordfreq import zipf_frequency
root=Path(__file__).resolve().parents[1]
spa=defaultdict(list);cmn=defaultdict(list)
with ZipFile('/tmp/omw-1.4.zip') as z:
 for name,target in [('omw-1.4/mcr/wn-data-spa.tab',spa),('omw-1.4/cow/wn-data-cmn.tab',cmn)]:
  for line in z.read(name).decode().splitlines():
   if line.startswith('#'):continue
   a=line.split('\t')
   if len(a)>=3 and a[1].endswith('lemma'):target[a[0]].append(a[2])
 for name,out in [('omw-1.4/mcr/LICENSE','MCR-LICENSE.txt'),('omw-1.4/cow/LICENSE','COW-LICENSE.txt'),('omw-1.4/README','OMW-README.txt')]:
  (root/'assets/licenses'/out).write_bytes(z.read(name))
gloss={};lexnum={};eng={}
with ZipFile('/tmp/wordnet.zip') as z:
 for pos,file in [('n','noun'),('v','verb'),('a','adj'),('r','adv')]:
  for line in z.read('wordnet/data.'+file).decode().splitlines():
   if not re.match(r'^\d{8} ',line):continue
   raw,definition=line.split('|',1);a=raw.split();key=a[0]+'-'+pos;gloss[key]=definition.strip();lexnum[key]=int(a[1]);count=int(a[3],16);eng[key]=[a[4+2*i].replace('_',' ').lower() for i in range(count)]
 (root/'assets/licenses/WORDNET-LICENSE.txt').write_bytes(z.read('wordnet/LICENSE'))
def clean(s):return unicodedata.normalize('NFC',s).replace('+','').strip()
def usable(s):return bool(re.search('[\u3400-\u9fff]',s)) and len(s)<=36 and not any(c in s for c in ['_','\t','\n'])
lookup=json.loads(Path('/tmp/es_lemma_lookup.json').read_text()) if Path('/tmp/es_lemma_lookup.json').exists() else {}
fd={};ns={'t':'http://www.tei-c.org/ns/1.0'}
for entry in ET.parse('/tmp/spa-eng.tei').getroot().findall('.//t:entry',ns):
 orth=entry.find('.//t:orth',ns)
 if orth is not None and orth.text:fd[orth.text]=[q.text.lower() for q in entry.findall('.//t:quote',ns) if q.text]
words=defaultdict(list)
rejected={'al','sus','por','era','años','cosas','personas','gran'}

for syn,ss in spa.items():
 if syn not in cmn or syn not in gloss:continue
 zh=list(dict.fromkeys(clean(s) for s in cmn[syn] if usable(clean(s))))
 if not zh:continue
 for word in ss:
  word=unicodedata.normalize('NFC',word)
  if not re.fullmatch('[a-záéíóúüñ]+',word) or word in rejected or len(word)<3:continue
  if syn.endswith('-v') and not word.endswith(('ar','er','ir','ír')):continue
  if lookup.get(word,word)!=word:continue
  words[word].append({'synset':syn,'pos':syn[-1],'meanings':zh[:5],'gloss':gloss[syn],'lexnum':lexnum[syn]})
ranked=sorted(words,key=lambda w:(-zipf_frequency(w,'es'),w))
selected=ranked[:6500]
assert len(selected)>=5000
labels={3:'身体与生理',4:'行为与活动',5:'动物与生命',6:'物品与工具',7:'性质与特征',8:'身体与生理',9:'认识与学习',10:'语言与交流',11:'事件与经历',12:'感受与情绪',13:'食物与饮品',14:'集合与群体',15:'空间与位置',16:'目标与动机',17:'自然物质',18:'人物与职业',19:'现象与变化',20:'植物与自然',21:'财物与拥有',22:'变化与过程',23:'数量与度量',24:'关系与联系',25:'形状与空间',26:'状态与处境',27:'物质与材料',28:'时间与阶段'}
rows=[]
for word in selected:
 senses=words[word]
 # Independent bilingual lookup is used for sense ordering, not copied as definitions.
 translations=fd.get(word,[])
 def order(sense):
  matches=[i for i,t in enumerate(translations) if t in eng[sense['synset']]]
  return min(matches) if matches else 999
 senses=sorted(senses,key=order)

 # Keep distinct concept senses; do not turn aligned synonyms into claimed usage examples.
 uniq=[];seen=set()
 for sense in senses:
  key=(sense['pos'],tuple(sense['meanings']))
  if key not in seen:seen.add(key);uniq.append(sense)
 rows.append({'id':'omw-'+hashlib.sha256(word.encode()).hexdigest()[:14],'word':word,'meaning':'；'.join(dict.fromkeys(m for ss in uniq[:3] for m in ss['meanings'][:2])),'level':'拓展','theme':labels.get(uniq[0]['lexnum'],'词典扩展'),'kind':{'n':'名词','v':'动词','a':'形容词','r':'副词'}[uniq[0]['pos']],'example':'','translation':'','contextual':False,'source':'MCR / Chinese Open WordNet，经 OMW 1.4 同义词集对齐','sourceType':'wordnet','headword':word,'frequency':round(zipf_frequency(word,'es'),2),'senses':uniq[:8],'lemmaChecked':word in lookup})
(root/'content/large-lexicon.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2))
(root/'src/large-lexicon.js').write_text('const largeLexicon='+json.dumps(rows,ensure_ascii=False).replace('<','\\u003c')+';\n'+'''function lexicalHeadword(s){return canonicalWord(s).replace(/^(?:el|la|los|las|un|una) /,'').split(/ \/ /)[0].trim()}
const originalHeadwords=new Map(vocab.map(w=>[lexicalHeadword(w.word),w]));
for(const entry of largeLexicon){const old=originalHeadwords.get(entry.headword);if(old){old.frequency=entry.frequency;old.headword=entry.headword}else{vocab.push(entry);originalHeadwords.set(entry.headword,entry)}}
''')
report={'sourceHeadwords':len(rows),'distinctSourceHeadwords':len(set(x['word'] for x in rows)),'frequencyRange':[rows[0]['frequency'],rows[-1]['frequency']],'senseAlignment':'Exact shared Princeton WordNet 3.0 synset IDs, not English-string pivot translations','morphologyLookup':'spaCy lookups: exclude forms whose dictionary lemma differs; retain source headwords only','scope':'Single Spanish dictionary headwords with at least one Chinese same-concept lemma; Chinese mappings and sense ordering are source data, not fully teacher-reviewed; no synthetic example sentences','partOfSpeech':dict(Counter(r['kind'] for r in rows)),'licences':['MCR CC BY 3.0','Chinese Open WordNet WordNet-style licence','Princeton WordNet licence'],'sourceZipSHA256':hashlib.sha256(Path('/tmp/omw-1.4.zip').read_bytes()).hexdigest()}
(root/'large-lexicon-audit.json').write_text(json.dumps(report,ensure_ascii=False,indent=2));print(report)
for w in ['camino','administración','espejo','aburrido','hermoso','solicitud','autorización','presupuesto','rendimiento','emprender']:
 r=next((r for r in rows if r['word']==w),None);print(w,r['meaning'] if r else '-')
print('SAMPLE',[(r['word'],r['meaning']) for r in rows[1000:1010]])

review=dict(line.split('=',1) for line in (root/'content/lexicon-review.txt').read_text().splitlines() if '=' in line)
(root/'src/lexicon-review.js').write_text('const lexicalReview='+json.dumps(review,ensure_ascii=False).replace('<','\\u003c')+';\nfor(const w of vocab){if(w.sourceType==="wordnet"&&lexicalReview[w.word]){w.meaning=lexicalReview[w.word];w.coreMeaningReviewed=true}}\n')
