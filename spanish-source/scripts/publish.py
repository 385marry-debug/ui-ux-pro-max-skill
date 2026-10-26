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
    reports = {name: json.loads((source / (name + '.json')).read_text()) for name in ['public-site-validation', 'expanded-content-validation', 'expansion-browser-validation', 'gender-depth-validation', 'bridges-validation', 'graded-scaffolds-validation', 'textbook-coverage-audit', 'precision-validation', 'book-subrule-audit', 'reading-content-audit', 'reading-browser-report', 'adaptive-browser-report', 'gender-rewrite-content-audit', 'gender-rewrite-validation', 'grammar-rewrite-content-audit', 'grammar-rewrite-validation', 'grammar-rewrite-entry-validation', 'rules-first-content-audit', 'rules-first-browser-validation', 'gender-textbook-rule-check', 'rules-first-final-smoke', 'textbook-rule-repairs-audit', 'textbook-repairs-browser-validation', 'textbook-table-mobile-validation', 'book-source-pass-audit', 'book-source-browser-validation', 'study-path-content-audit', 'study-path-browser-validation', 'study-path-final-smoke', 'learning-quality-content-validation', 'learning-quality-browser-validation', 'quality-audio-audit', 'level-route-content-validation', 'level-route-browser-validation'] if (source / (name + '.json')).exists()}
    (destination / 'validation.json').write_text(json.dumps({'version':'2026-10-26-level-boundaries-and-professional-routes','verification':'Local Chromium and content checks; hosting result is recorded separately in GitHub Pages Actions.','reports':reports}, ensure_ascii=False, indent=2))
    assert (destination / 'index.html').read_bytes() == (source / 'index.html').read_bytes()
    print(f'Synced {destination.relative_to(repository) or "."}')
