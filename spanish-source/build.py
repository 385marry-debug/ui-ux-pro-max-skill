"""Build the standalone HTML without network access or external dependencies."""
import json
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
root = Path(__file__).resolve().parent
src = root / 'src'
base = (root / 'shell.html').read_text()
# Do not publish private scan/OCR excerpts in the standalone public application.
audit = json.loads((src / 'book-audit-data.js').read_text().split('=', 1)[1].rstrip().removesuffix(';'))
for row in audit['rows']:
    row.pop('ocrExcerpt', None)
(src / 'book-audit-data-public.js').write_text('const bookAudit='+json.dumps(audit, ensure_ascii=False).replace('<', r'\u003c')+';\n')
parts = ['base.js', 'curriculum.js', 'extended.js', 'lexicon.js', 'book-lexicon.js', 'large-lexicon.js', 'lexicon-review.js', 'word-usage.js', 'lexical-enrichment.js', 'lexical-pos.js', 'noun-genders.js', 'noun-gender-teaching.js', 'grammar-guide.js', 'book-grammar.js', 'content-links.js', 'teaching.js', 'subsection-lessons.js', 'lesson-workshop.js', 'scaffold-questions.js', 'scenes.js', 'extra-scenes.js', 'book-chapters.js', 'book-pages-public.js', 'book-audit-data-public.js', 'conjugation-data.js', 'conjugation-zh.js', 'verb-teaching.js', 'verb-questions.js', 'rich-dialogues.js', 'unit-translations.js', 'culture-lessons.js', 'foundation-lessons.js', 'grammar-depth.js', 'learning-expansion-data.js', 'app.js', 'library-ui.js', 'classroom-ui.js', 'book-ui.js', 'book-audit-ui.js', 'subsection-ui.js', 'web-ui.js', 'learning-expansion-ui.js', 'depth-ui.js', 'navigation.js']
script = '\n'.join((src / name).read_text() for name in parts) + '\ninitNavigation();initWebExperience();\n'
html = base.replace('/*__EXTRA_CSS__*/', (src / 'extra.css').read_text()).replace('/*__APP__*/', script)
(root / 'index.html').write_text(html)
print(f'Built index.html ({len(html.encode()):,} bytes)')
