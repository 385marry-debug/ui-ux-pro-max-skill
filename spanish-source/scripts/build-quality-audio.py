"""Generate portable Spanish practice audio with eSpeak NG, not human recordings.
Requires espeakng-loader wheel installed/unpacked and ffmpeg. No user audio is uploaded.
"""
import ctypes as c,wave,json,subprocess,hashlib,tempfile,argparse
from pathlib import Path
root=Path(__file__).resolve().parents[1]
parser=argparse.ArgumentParser();parser.add_argument('--runtime',type=Path,default=Path('/tmp/spanish-tts/runtime/espeakng_loader'));args=parser.parse_args();base=args.runtime
lib=c.CDLL(str(base/'libespeak-ng.so'));lib.espeak_Initialize.argtypes=[c.c_int,c.c_int,c.c_char_p,c.c_int];sr=lib.espeak_Initialize(2,0,str(base).encode(),0)
if sr<=0:raise RuntimeError('Cannot initialize Spanish speech synthesizer')
chunks=[]
@c.CFUNCTYPE(c.c_int,c.POINTER(c.c_short),c.c_int,c.c_void_p)
def callback(samples,n,events):
 if n>0:chunks.append(c.string_at(samples,n*2))
 return 0
lib.espeak_SetSynthCallback(callback)
if lib.espeak_SetVoiceByName(b'es')!=0:raise RuntimeError('Spanish voice missing')
lib.espeak_SetParameter(1,150,0);lib.espeak_Synth.argtypes=[c.c_char_p,c.c_size_t,c.c_uint,c.c_int,c.c_uint,c.c_uint,c.c_void_p,c.c_void_p]
readings=json.loads((root/'content/quality-readings.json').read_text());phonics=json.loads((root/'content/quality-phonics.json').read_text());lessons=[{'id':r['id'],'script':' '.join(p['es'] for p in r['paragraphs'])} for r in readings]+[{'id':p['id'],'script':p['script']} for p in phonics['items']+phonics['questions']];out=root/'assets/audio';out.mkdir(exist_ok=True);manifest=[]
for i,l in enumerate(lessons):
 target=out/(l['id']+'.mp3');sha=hashlib.sha256((l['script']+'espeak-ng-es-150-v1').encode()).hexdigest();tag=out/(l['id']+'.sha256');chunks.clear()
 if not target.exists() or not tag.exists() or tag.read_text()!=sha:
  text=l['script'].encode();ret=lib.espeak_Synth(text,len(text)+1,0,1,0,1,None,None);lib.espeak_Synchronize()
  if ret!=0 or not chunks:raise RuntimeError(l['id'])
  with tempfile.NamedTemporaryFile(suffix='.wav') as temp:
   with wave.open(temp.name,'wb') as f:f.setnchannels(1);f.setsampwidth(2);f.setframerate(sr);f.writeframes(b''.join(chunks))
   subprocess.run(['ffmpeg','-nostdin','-y','-loglevel','error','-i',temp.name,'-codec:a','libmp3lame','-b:a','48k',str(target)],check=True)
  tag.write_text(sha)
 duration=float(subprocess.check_output(['ffprobe','-v','quiet','-show_entries','format=duration','-of','csv=p=0',str(target)]))
 manifest.append({'id':l['id'],'durationSeconds':round(duration,2),'sha256':hashlib.sha256(target.read_bytes()).hexdigest(),'bytes':target.stat().st_size,'engine':'eSpeak NG, Spanish es, 150 wpm, synthetic'} )
 if i%20==0:print('Generated',i+1,'/',len(lessons),flush=True)
(root/'quality-audio-audit.json').write_text(json.dumps({'clips':len(manifest),'totalMinutes':round(sum(x['durationSeconds'] for x in manifest)/60,2),'humanRecordings':False,'items':manifest},ensure_ascii=False,indent=2))
print('Completed',len(manifest),'clips',sum(x['bytes'] for x in manifest),'bytes',flush=True)
