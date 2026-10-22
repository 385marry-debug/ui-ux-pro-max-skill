# Hola 西语网站源代码

## 构建与本地运行

只需 Python 3，无需 npm 或外部接口。`python3 build.py` 生成 index.html；`python3 -m http.server 8000` 后打开 http://localhost:8000 。公开目录为 ../spanish/，../docs/ 是支持 GitHub Pages 分支发布的同等内容。

## 内容结构

src/ 是课程、教学、词库及交互源文件；保留完整数据，构建不需要下载。扩展词典 6500 个独立来源词头，合并后 6984 个去重单词词头、7077 个学习条目。194 小节、338 个知识讲解条目、40 个分级单元，题目数量另计。

不要把词头数称为词根数。开放词典中文释义按同一 synset 关联，尚非逐条教师审校；词性、义项排序及特殊含义需核验。人工修订的常用中文主释义在 content/lexicon-review.txt 和 src/lexicon-review.js；词源许可见 assets/licenses/SOURCES.html。词频不是 CEFR 级别。

## 更新网站

修改后运行 python3 build.py，将 index.html 和 assets/licenses/ 同步到 ../spanish/ 和 ../docs/。公开产物不包含用户 PDF、扫描页或原书 OCR 摘录。

## 重新生成扩展词库（可选）

scripts/build-large-lexicon.py 依赖 Python wordfreq，以及 /tmp/omw-1.4.zip、/tmp/wordnet.zip（NLTK nltk_data/gh-pages/packages/corpora）、/tmp/es_lemma_lookup.json（explosion/spacy-lookups-data/data）、/tmp/spa-eng.tei（FreeDict）。FreeDict 仅辅助义项排序，其英文翻译未作为定义复制到分发数据。正常构建无需重新生成词库。

## 验证范围

public-site-validation.json、classroom-validation.json 和 navigation-validation.json 记录 Chromium 验证：搜索、分享新浏览器直达、iframe模式、课程答题、场景互动、备份恢复、逐步导航、390px屏宽。并不表示所有词义或教材全部细则已获人工验收。浏览器测试需安装 Playwright 和 Chromium；测试文件中的执行路径按环境修改。
