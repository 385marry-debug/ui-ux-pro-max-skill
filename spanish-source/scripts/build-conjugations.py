"""Import licensed attested conjugation tables; do not guess 600 paradigms."""
import csv,json,hashlib,urllib.request
from pathlib import Path
root=Path(__file__).resolve().parents[1]
cache=Path('/tmp/verbs-csv')
url='https://raw.githubusercontent.com/ghidinelli/fred-jehle-spanish-verbs/master/jehle_verb_database.csv'
if not cache.exists():cache.write_bytes(urllib.request.urlopen(url).read())
expected='f77f01d536cd351584051d76902ff8051ab1b945a38e69c7ed02da78ab082ea8'
if hashlib.sha256(cache.read_bytes()).hexdigest()!=expected:raise RuntimeError('Source CSV changed: review source and license before updating its expected checksum.')
rows=list(csv.DictReader(cache.open()))
keys=[('Indicativo','Presente','present','现在直陈式','A1'),('Indicativo','Pretérito','preterite','简单过去时','A2'),('Indicativo','Imperfecto','imperfect','过去未完成时','A2'),('Indicativo','Futuro','future','简单将来时','A2'),('Indicativo','Condicional','conditional','简单条件式','B1'),('Indicativo','Pretérito perfecto','perfect','现在完成时','A2'),('Indicativo','Pluscuamperfecto','pluperfect','过去完成时','B1'),('Indicativo','Futuro perfecto','futurePerfect','将来完成时','B2'),('Indicativo','Condicional perfecto','conditionalPerfect','复合条件式','B2'),('Subjuntivo','Presente','subjPresent','现在虚拟式','B1'),('Subjuntivo','Imperfecto','subjImperfect','过去未完成虚拟式 -ra','B1'),('Subjuntivo','Pretérito perfecto','subjPerfect','现在完成虚拟式','B2'),('Subjuntivo','Pluscuamperfecto','subjPluperfect','过去完成虚拟式 -ra','B2'),('Imperativo Afirmativo','Presente','command','肯定命令式','A2'),('Imperativo Negativo','Presente','negativeCommand','否定命令式','B1'),('Indicativo','Pretérito anterior','anterior','先过去时（历史/文学）','B2'),('Subjuntivo','Futuro','subjFuture','将来虚拟式（历史/固定语）','B2'),('Subjuntivo','Futuro perfecto','subjFuturePerfect','将来完成虚拟式（历史/法律）','B2')]
lookup={(m,t):k for m,t,k,_,_ in keys};out={}
for r in rows:
 v=r['infinitive'];entry=out.setdefault(v,{'en':r['infinitive_english'],'gerund':r['gerund'],'participle':r['pastparticiple'],'forms':{}})
 entry['forms'][lookup[r['mood'],r['tense']]]=[r['form_'+p].strip() for p in ['1s','2s','3s','1p','2p','3p']]
# The source omits auxiliary haber: supply a separate, explicitly authored paradigm.
haber={'present':'he has ha hemos habéis han','preterite':'hube hubiste hubo hubimos hubisteis hubieron','imperfect':'había habías había habíamos habíais habían','future':'habré habrás habrá habremos habréis habrán','conditional':'habría habrías habría habríamos habríais habrían','subjPresent':'haya hayas haya hayamos hayáis hayan','subjImperfect':'hubiera hubieras hubiera hubiéramos hubierais hubieran','subjFuture':'hubiere hubieres hubiere hubiéremos hubiereis hubieren','command':'— — — — — —','negativeCommand':'— — — — — —'}
hf={k:[x.replace('-',' ') if x!='—' else '' for x in s.split()] for k,s in haber.items()}
for key,aux in [('perfect','present'),('pluperfect','imperfect'),('futurePerfect','future'),('conditionalPerfect','conditional'),('subjPerfect','subjPresent'),('subjPluperfect','subjImperfect'),('anterior','preterite'),('subjFuturePerfect','subjFuture')]:hf[key]=[x+' habido' for x in hf[aux]]
out['haber']={'en':'auxiliary: have; impersonal existence: hay','gerund':'habiendo','participle':'habido','forms':hf,'authored':True}
for v,e in out.items():
 for k,new in [('subjImperfect','subjImperfectSe'),('subjPluperfect','subjPluperfectSe')]:
  forms=[]
  for i,f in enumerate(e['forms'][k]):
   parts=f.split();idx=1 if v.endswith('se') else 0
   if len(parts)>idx:
    ending=['ra','ras','ra','ramos','rais','ran'][i];replacement=['se','ses','se','semos','seis','sen'][i]
    assert parts[idx].endswith(ending),(v,k,f)
    parts[idx]=parts[idx][:-len(ending)]+replacement
   forms.append(' '.join(parts))
  e['forms'][new]=forms
 e['reflexive']=v.endswith('se');e['ending']=(v[:-2] if e['reflexive'] else v)[-2:]
# Modern entry rules: no imperative yo, and do not use the auxiliary paradigm as existential plural.
meta=[{'key':k,'name':n,'level':l,'rare':k in ['anterior','subjFuture','subjFuturePerfect']} for _,_,k,n,l in keys]
meta+= [{'key':'subjImperfectSe','name':'过去未完成虚拟式 -se','level':'B1','rare':False},{'key':'subjPluperfectSe','name':'过去完成虚拟式 -se','level':'B2','rare':False}]
(root/'src/conjugation-data.js').write_text('const conjugationData='+json.dumps(out,ensure_ascii=False,separators=(',',':')).replace('<',r'\u003c')+';\nconst conjugationTenses='+json.dumps(meta,ensure_ascii=False)+';\n')
report={'distinctInfinitives':len(out),'sourceInfinitives':len(out)-1,'authoredAuxiliary':'haber','moodTenseGroups':len(meta),'nonemptyCells':sum(bool(f) for e in out.values() for forms in e['forms'].values() for f in forms),'source':url,'sourceSHA256':hashlib.sha256(cache.read_bytes()).hexdigest(),'license':'CC BY-NC-SA 3.0','note':'-se alternatives derived from supplied -ra forms. Historical forms explicitly labelled; source tables are not claimed to cover every contemporary regional variant or every verb.'}
(root/'conjugation-audit.json').write_text(json.dumps(report,ensure_ascii=False,indent=2));print(json.dumps(report,ensure_ascii=False))
