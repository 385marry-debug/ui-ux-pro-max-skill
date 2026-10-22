"""Build and sync the public website; include only the app and licensed assets."""
from pathlib import Path
import shutil
import subprocess
import sys

source = Path(__file__).resolve().parents[1]
repository = source.parent
subprocess.run([sys.executable, str(source / 'build.py')], check=True)
public_files = [Path('index.html')]
public_files.extend(p.relative_to(source) for p in (source / 'assets/licenses').iterdir() if p.is_file())
for destination in [repository, repository / 'docs', repository / 'spanish']:
    for relative in public_files:
        target = destination / relative
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source / relative, target)
    (destination / '.nojekyll').touch()
    assert (destination / 'index.html').read_bytes() == (source / 'index.html').read_bytes()
    print(f'Synced {destination.relative_to(repository) or "."}')
