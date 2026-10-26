"""Apply reviewed lexical repairs to factual occurrence data; no PDF or network needed."""
import json
from pathlib import Path

root = Path(__file__).resolve().parents[1]
path = root / 'content/context-word-occurrences.json'
rows = json.loads(path.read_text())
fixes = json.loads((root / 'content/context-lexical-repairs.json').read_text())
excluded = set(fixes['excludedNameForms'])
grouped = {}
removed = moved = 0
for row in rows:
    for form in row['forms']:
        if form in excluded:
            removed += 1
            continue
        entry = {k: row[k] for k in ['entryId', 'lemma', 'head', 'meaning', 'pos']}
        for rule in fixes['remappings']:
            if row['source'] == rule['source'] and row['chapter'] in rule['chapters'] and form in rule['forms']:
                moved += entry['entryId'] != rule['entry']['entryId']
                entry = dict(rule['entry'])
                break
        if entry['lemma'] in fixes['coreMeanings']:
            entry['meaning'] = fixes['coreMeanings'][entry['lemma']]
        key = (row['source'], row['chapter'], entry['entryId'])
        target = grouped.setdefault(key, {**entry, 'source': row['source'], 'chapter': row['chapter'], 'forms': [], 'pages': []})
        if form not in target['forms']:
            target['forms'].append(form)
        for page in row['pages']:
            if page not in target['pages']:
                target['pages'].append(page)
path.write_text(json.dumps(list(grouped.values()), ensure_ascii=False, indent=2) + '\n')
print(json.dumps({'groups': len(grouped), 'excludedNameAssociations': removed, 'remappedForms': moved}))
