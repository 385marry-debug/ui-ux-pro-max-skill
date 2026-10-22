"""Extract surface noun gender from pinned Apertium lexical paradigms, never word endings.
The source and extraction output are GPL-2.0-or-later; see assets/licenses/APERTIUM-README.md.
"""
from pathlib import Path
import xml.etree.ElementTree as ET
import gzip,json,hashlib,subprocess
root=Path(__file__).resolve().parents[1]
p=root/'assets/licenses/apertium-spa.spa.metadix.gz'
data=gzip.decompress(p.read_bytes());r=ET.fromstring(data)
def text(e):
 if e is None:return ''
 return (e.text or '')+''.join((' ' if c.tag=='b' else text(c))+(c.tail or '') for c in e)
paradigms={p.get('n'):p for p in r.findall('.//pardef')}
lookup={}
for e in r.findall('./section/e'):
 stem=e.find('i');par=e.find('par')
 if stem is None or par is None:continue
 pd=paradigms.get(par.get('n'))
 if pd is None:continue
 for form in pd.findall('e'):
  rr=form.find('p/r');ll=form.find('p/l')
  if rr is None:continue
  tags=[s.get('n') for s in rr.findall('s')]
  if 'n' not in tags:continue
  gender=next((g for g in ('m','f','mf') if g in tags),None)
  if not gender:continue
  surface=(text(stem)+text(ll)).strip().lower()
  if surface:lookup.setdefault(surface,set()).add(gender)
# Ship only forms needed by current vocabulary, retaining the full compressed source.
js=r"""const fs=require('fs'),vm=require('vm');const parts=fs.readFileSync('build.py','utf8').match(/parts = \[(.*?)\]/s)[1].match(/'([^']+)'/g).map(s=>s.slice(1,-1));let c={};vm.createContext(c);vm.runInContext(parts.slice(0,parts.indexOf('noun-genders.js')).map(n=>fs.readFileSync('src/'+n,'utf8')).join('\n')+';this.words=vocab.map(w=>w.word);',c);console.log(JSON.stringify(c.words));"""
words=json.loads(subprocess.check_output(['node','-e',js],cwd=root))
import re
needed=set()
for word in words:
 for part in re.split(r'\s*/\s*',word.lower()):
  part=re.sub(r'^(el|la|los|las|un|una|unos|unas) ','',part)
  needed.update([part,part.split(' ')[0]])
lookup={k:sorted(v) for k,v in sorted(lookup.items()) if k in needed}
(root/'src/noun-genders.js').write_text('// Apertium spa a904c4a, GPL-2.0-or-later; see assets/licenses/APERTIUM-README.md\nconst nounGenderLexicon='+json.dumps(lookup,ensure_ascii=False,separators=(',',':'))+';\n')
print('Gender surface forms:',len(lookup),'source SHA256:',hashlib.sha256(data).hexdigest())
