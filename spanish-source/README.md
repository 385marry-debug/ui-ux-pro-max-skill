# Hola 西语网站源代码

## 构建与本地运行

只需 Python 3，无需 npm 或外部接口。`python3 build.py` 生成 index.html；`python3 -m http.server 8000` 后打开 http://localhost:8000 。公开目录为 ../spanish/，../docs/ 是支持 GitHub Pages 分支发布的同等内容。

## 内容结构

src/ 是课程、教学、词库及交互源文件；保留完整数据，构建不需要下载。扩展词典 6500 个独立来源词头，合并后 7120 个去重单词词头、7213 个学习条目。194 小节、354 个知识讲解条目（含16节新增零基础拆解课）、40 个分级单元，题目数量另计。

不要把词头数称为词根数。开放词典中文释义按同一 synset 关联，尚非逐条教师审校；词性、义项排序及特殊含义需核验。人工修订的常用中文主释义在 content/lexicon-review.txt 和 src/lexicon-review.js；词源许可见 assets/licenses/SOURCES.html。词频不是 CEFR 级别。

## 更新网站

修改后运行 `python3 scripts/publish.py`，自动构建并将 index.html 和 assets/licenses/ 同步到仓库根目录、../spanish/ 和 ../docs/。因此 Pages 选择根目录或 /docs 都会打开同一网站。同步时只包含网站文件和许可声明，不会复制用户 PDF、扫描页或原书 OCR 摘录。

公开网址：https://385marry-debug.github.io/ui-ux-pro-max-skill/ 。GitHub Pages 已于 2026-10-22 成功完成首次发布，发布记录：https://github.com/385marry-debug/ui-ux-pro-max-skill/actions/runs/39783910005 。

## 重新生成扩展词库（可选）

scripts/build-large-lexicon.py 依赖 Python wordfreq，以及 /tmp/omw-1.4.zip、/tmp/wordnet.zip（NLTK nltk_data/gh-pages/packages/corpora）、/tmp/es_lemma_lookup.json（explosion/spacy-lookups-data/data）、/tmp/spa-eng.tei（FreeDict）。FreeDict 仅辅助义项排序，其英文翻译未作为定义复制到分发数据。正常构建无需重新生成词库。

## 验证范围

public-site-validation.json、classroom-validation.json 和 navigation-validation.json 记录 Chromium 验证：搜索、分享新浏览器直达、iframe模式、课程答题、场景互动、备份恢复、逐步导航、390px屏宽。并不表示所有词义或教材全部细则已获人工验收。浏览器测试需安装 Playwright 和 Chromium；测试文件中的执行路径按环境修改。

## 本轮教学扩展（2026-10-22）

- 638个变位入口：Fred Jehle 数据库637个原形＋另补haber；包含带代词用法，不称为638个词根。20组语气/时态形式，-ra/-se分别练习；副动词与分词另列。历史/法律形式标为进阶识读。查询支持中文、原形和变位反查。
- 每组配构成步骤、适用场景、例句拆解、易错点及使用边界；8段基础教学先解释人称、词干、自复代词与haber存在义。原来360道题的ID仍可恢复；其他目标单元格按需生成题目，记录可恢复和备份。
- 新增16节零基础详解，每节4段解释、逐块示范、纠错与3道题。原有194个小节保留，知识卡默认展开对应基础教学。未宣称已逐字复核原书所有细则。
- 原40个单元均增加完整对话：共182句，逐句中译与语法说明；40段原短文也有中译；每单元由6题扩至9题。口语/写作页先展示老师示范，再进入自己的任务。
- 104篇听力、232道理解题、104个MP3文件，24.17分钟。合成语音（eSpeak NG es），非真人录音，不模拟多口音。脚本由本站原创，基础短文40篇、新分级对话40篇、文化对话24篇。音频可直接播放及变速，先隐藏文本，后看译文和证据解析。
- 文化从10个简述扩为24个专题：先讲背景、边界、完整对话、译文与回应方法，再做理解题和可选笔记。原10主题与笔记序号保留。
- 全部7213个词条具有词性；45个高频多义词另配按义项区分的例句、译文和使用提示。其余开放词典义项仍需逐条审校，词性有标注不等于已核验其全部义项。
- 原3个场景保留，新增12个场景示意图，共15场景、120物品、45道场景题。新图使用Lucide图标及部分原创SVG，明确为场景示意图。

数据和教学文件：`conjugation-*`、`verb-teaching.js`、`foundation-lessons.js`、`rich-dialogues.js`、`culture-lessons.js`、`unit-translations.js`、`lexical-enrichment.js`、`lexical-pos.js`、`extra-scenes.js`。入口和导航整合见 `learning-expansion-ui.js`。许可见 assets/licenses/SOURCES.html；变位数据库采用CC BY-NC-SA 3.0，与应用代码及其他数据许可分别管理。

验证：`node tests/expanded-content.cjs`；`SITE_URL=http://127.0.0.1:8000 node tests/expansion-browser.mjs`。浏览器测试需Playwright、Chromium，安装位置根据机器修改。`expanded-content-validation.json`、`expansion-browser-validation.json`记录本轮结果。音频再生成可使用 `scripts/build-listening-audio.py`；常规构建/发布直接复用已生成MP3。

尚未完成的范围包括：原书全部细则逐字校对、全部词义逐条教师审校、真实多口音语料、系统C1—C2课程序列以及真人口语/写作反馈。数量增加不等于这些项目已经验收。
