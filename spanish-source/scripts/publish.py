"""Build and sync the public website; include only the app and licensed assets."""
from pathlib import Path
import json
import shutil
import subprocess
import sys

source = Path(__file__).resolve().parents[1]
repository = source.parent
subprocess.run([sys.executable, str(source / 'build.py')], check=True)
public_files = [Path('index.html')]
public_files.extend(p.relative_to(source) for p in (source / 'assets/licenses').iterdir() if p.is_file())
public_files.extend(p.relative_to(source) for p in (source / 'assets/audio').glob('*.mp3'))
for destination in [repository, repository / 'docs', repository / 'spanish']:
    for relative in public_files:
        target = destination / relative
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source / relative, target)
    (destination / '.nojekyll').touch()
    reports = {name: json.loads((source / (name + '.json')).read_text()) for name in ['public-site-validation', 'expanded-content-validation', 'expansion-browser-validation', 'gender-depth-validation', 'bridges-validation', 'graded-scaffolds-validation', 'textbook-coverage-audit', 'precision-validation', 'book-subrule-audit'] if (source / (name + '.json')).exists()}
    (destination / 'validation.json').write_text(json.dumps({'version':'2026-10-24-subrules','verification':'Local Chromium and content checks; hosting result is recorded separately in GitHub Pages Actions.','reports':reports}, ensure_ascii=False, indent=2))
    assert (destination / 'index.html').read_bytes() == (source / 'index.html').read_bytes()
    print(f'Synced {destination.relative_to(repository) or "."}')
