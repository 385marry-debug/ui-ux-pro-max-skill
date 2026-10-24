# Hola 西语网站源代码

## 构建与本地运行

只需 Python 3，无需 npm 或外部接口。`python3 build.py` 生成 index.html；`python3 -m http.server 8000` 后打开 http://localhost:8000 。公开目录为 ../spanish/，../docs/ 是支持 GitHub Pages 分支发布的同等内容。

## 内容结构

src/ 是课程、教学、词库及交互源文件；保留完整数据，构建不需要下载。扩展词典 6500 个独立来源词头，合并后 7148 个去重单词词头、7241 个学习条目。194 小节、385 个知识讲解条目（含47节基础、过渡与补充课）、40 个分级单元，题目数量另计。

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
- 新增16节零基础详解，每节至少4段解释、逐块示范、纠错与3道题（其中6节本轮进一步扩成完整长课与8道题）。原有194个小节保留，基础课自身默认展开完整教学；其他知识卡可展开相关基础补课。未宣称已逐字复核原书所有细则。
- 原40个单元均增加完整对话：共182句，逐句中译与语法说明；40段原短文也有中译；每单元由6题扩至9题。口语/写作页先展示老师示范，再进入自己的任务。
- 104篇听力、232道理解题、104个MP3文件，24.17分钟。合成语音（eSpeak NG es），非真人录音，不模拟多口音。脚本由本站原创，基础短文40篇、新分级对话40篇、文化对话24篇。音频可直接播放及变速，先隐藏文本，后看译文和证据解析。
- 文化从10个简述扩为24个专题：先讲背景、边界、完整对话、译文与回应方法，再做理解题和可选笔记。原10主题与笔记序号保留。
- 全部7213个词条具有词性；45个高频多义词另配按义项区分的例句、译文和使用提示。其余开放词典义项仍需逐条审校，词性有标注不等于已核验其全部义项。
- 原3个场景保留，新增12个场景示意图，共15场景、120物品、45道场景题。新图使用Lucide图标及部分原创SVG，明确为场景示意图。

数据和教学文件：`conjugation-*`、`verb-teaching.js`、`foundation-lessons.js`、`rich-dialogues.js`、`culture-lessons.js`、`unit-translations.js`、`lexical-enrichment.js`、`lexical-pos.js`、`extra-scenes.js`。入口和导航整合见 `learning-expansion-ui.js`。许可见 assets/licenses/SOURCES.html；变位数据库采用CC BY-NC-SA 3.0，与应用代码及其他数据许可分别管理。

验证：`node tests/expanded-content.cjs`；`SITE_URL=http://127.0.0.1:8000 node tests/expansion-browser.mjs`。浏览器测试需Playwright、Chromium，安装位置根据机器修改。`expanded-content-validation.json`、`expansion-browser-validation.json`记录本轮结果。音频再生成可使用 `scripts/build-listening-audio.py`；常规构建/发布直接复用已生成MP3。

尚未完成的范围包括：原书全部细则逐字校对、全部词义逐条教师审校、真实多口音语料、系统C1—C2课程序列以及真人口语/写作反馈。数量增加不等于这些项目已经验收。

2026-10-22 教学与名词性别修订：`grammar-depth.js` 为六节基础课提供逐层说明、对比、推理和新增定向练习；不是根据本次尚未能读取的大体积 PDF 编写。`noun-genders.js` 从 Apertium 名词形态标签提取，`noun-gender-teaching.js` 另处理 agua、mano、capital 等教学例外。未匹配词条明确标待核对。生成脚本、压缩完整源词典、许可和作者归属均保留。浏览器核对见 `tests/gender-depth-browser.mjs` 与 `gender-depth-validation.json`。

2026-10-23 教材结构参考修订：已读取压缩的《西班牙语公共课·上册》，阅读与未验证范围见 `textbook-review.md`。新增9节原创过渡课，与既有基础组成17步先修路线；当前基础与过渡课合计25节，语法讲解条目363个，不能把条目数当成全部语法点总数。新课有前置链接、带词性/性别的词汇预习、分步讲解、原创对话与分层练习（54题，其中18填写、9组句）。实际内容在 `textbook-bridges.js`、`bridge-ui.js`，书目和18课主题页码索引在 `textbook-review.js`。原教材PDF/正文/原题均不对外发布。运行 `tests/bridges-browser.mjs` 验证新增流程。

## 分级课程与教材缺项修订（2026-10-23）

40 个原有 A1—B2 单元均增加专属预习词汇、三个小步的解释与即时填写练习、三层练习入口。每单元原9题保持原ID和顺序，后补3题，共12题；新小步单练不更新完整单元达标分数。返回与刷新保留刚才课堂位置及答题记录。每单元说明来自该单元具体例句，不用一段共享概述冒充40课。

教材18课的58项一级语法主题均有直达讲解与题目，补17节专项课、102题（指示词、物主词、一致、核心动词结构、词干变化、现在时用法、介词、命令、疑问、宾语从句、条件、感叹、时间地点关系、无人称、日期、非人称动词形式、及物性）。这是主题级对应，仍不等于全书脚注、子规则、原题答案或配套音频逐条验收。对照报告为 `textbook-coverage-audit.json`，可由 `node scripts/audit-teaching.cjs` 重新生成。

新源码为 `graded-scaffolds.js`、`graded-scaffolds-ui.js`、`textbook-supplements.js`、`textbook-coverage.js`。新增27个课程中实际缺少的常见词条，包含教学释义、词性、适用的名词性别、例句和可用词义练习，不把每单元反复预习的240个词汇位置算作240个新增单词。新增浏览器检查 `tests/graded-scaffolds-browser.mjs` 遍历全部40单元、17专题，并验证小步返回、重音判分、刷新及手机布局。

## 具体子规则继续核对（2026-10-24）

新增5节细讲：规则简单过去、不规则简单过去、过去未完成、ser/estar+形容词、拼读中的c/qu与g/gu/gü等。原有简单过去/未完成主题改为直达对应专项，相关分级单元的先修链接同步更新。新增8组细则与对比表，涵盖复数边界、人物名词分类、物主词指称、命令式词干与代词脱落、日期语体、分词一致、有介词疑问、宾语从句角色。共46道新增相关题，既有题目ID保留。

声明了规范变体的输入题可用 acceptedAnswers 接受额外正确形式；目前的明确示范是tabúes/tabús。必要重音仍检查，不放宽成所有近似拼写都正确。时间线节点可点击/键盘操作，解释相对先后、背景与转述参照；新细则在相应分级课中有讲解和小练习入口。返回仍保留课堂步骤。

已核看上传PDF第457页（印刷页456）的实际版面：tú对应escribir的未完成过去表格疑似漏印-s。网站原变位库及新增讲解采用escribías，并加入独立核对；不以教材单格内容替代语法验证。核对范围与问题记录在book-subrule-audit.json，不把本轮列出的细则宣称为全书逐条验收。

新增源码：precision-lessons.js、precision-details.js、precision-bindings.js、precision-ui.js。验证：tests/precision-browser.mjs，包含22个独立词形案例、规范变体与重音判分、返回/刷新、日期表、时间线键盘与手机布局。正常发布无需新下载或外部接口；仍不发布用户PDF、扫描页或整段原书正文。

## 教材全课入口与每日精读（2026-10-24）

新增“教材同步课”：对照上传版487页教材的18课、108个部分与6次单元复习，提供原创的语音/热身、语法详解入口、两个情景、文化讲解、综合运用，以及本课词汇。659个教材词形和词汇网络事实均解析到真实可搜索词条；原全站词汇保留，现为7423个条目，条目数不等于去重词头数或已掌握单词数。`content/textbook-page-inventory.json`记录页码定位，`caminante-word-facts.json`保存短词汇事实。配套故事、讲解与练习原创，不发布原书扫描、整段课文、原题或歌曲。108个对应入口不代表所有原教材脚注与原题逐条验收。

新增“每日精读”：首批22篇原创文章（A1九篇、A2九篇、B1两篇、B2两篇），共88段中西对照、176个语境词汇位置、44个难句分析、132题。每篇提供逐段翻译、查词收藏、词性/名词性别、生词语境义、用法解读、文化背景、听读音频、答案解析、复述范例与笔记。前18篇与教材学习功能对应，后4篇补充独立交际与论证阅读。内容分级为站内教学编排，非专业CEFR认证。

自适应在本机运行：用户设置材料难度、10/20/30/45分钟和开关；每日按北京时间在该级未读文章中选篇，同日计划稳定。本级文章都读过时明确安排低分文章复读。当前级至少完成两篇、累计12次阅读作答，结合难度反馈与近期正确率（升档≥85%，降档<55%）最多调整一级。学习画像在主要栏目实时生成阅读及相应知识点、听力、文化、词汇建议；用户可一键应用筛选，仍能自由选级。没有后台AI无限生成新文、自动改写全站内容、自动作文/口语评分或云端同步。学习备份保存阅读笔记、难度反馈、计划、完成和成绩，并兼容原version 2记录。

新增40个真实MP3（22篇全文与18课热身），听力总计144篇、294题、53.6分钟。均为eSpeak NG合成音频，非真人配套录音。脚本在`content/listening-audio-scripts.json`，音频构建继续使用`scripts/build-listening-audio.py`。

核验：`node scripts/audit-reading.cjs`、`node tests/expanded-content.cjs`、`node scripts/audit-teaching.cjs`；本地Chromium检查`tests/reading-browser.mjs`、`tests/adaptive-browser.mjs`，报告为`reading-content-audit.json`、`reading-browser-report.json`、`adaptive-browser-report.json`。公开页面可分享`?view=reading&id=sr-01`或`?view=textbook&chapter=8&part=vocab`，嵌入功能沿用原入口。

## 独立语法讲解与练习重写（2026-10-24）

保留系统语法目录、搜索和自由学习，重写原`foundation-gender`为“名词的性①：事物怎样判断阴阳性”；新增独立的“名词的性②：人物词怎样区分与变化”“名词的性③：动物名与真实雌雄怎样区分”。三节共15小节，分别解释定义、常见词尾、明确例外、不能可靠推断时的查证、人物/动物的词形类别与固定语法性。例词提供本节所需中文义，判断过程逐项展开；不再把冠词、复数和形容词一致混在入门第一组练习。相关知识点仍可自由打开。

参考用户两书：Caminante印刷26—27页（上传PDF27—28）；Gramática básica印刷14—19页（上传扫描PDF12—17）及答案印刷274页（PDF272）。资料研究记录保存在独立研读目录，网站只发布重新撰写的中文讲解、语法事实、短例词与自编练习，不分发用户PDF、扫描页或整章原题。

本轮配套36道新题：17道输入、12道辨析、7道多项分类；7道分类共38个作答位置，题目数与分类项目数分别统计。分类用带明确标签的下拉选择逐项作答，全部提交后逐项给依据；整组全对才按一题计分。支持未答项检查、已作答状态刷新还原、逐题返回不重复计分，以及返回该组对应的规则小节。输入与找不同题同样可从原小节进入，答案提交后显示。

“语法知识点”与首页提供直达入口；旧的名词性别索引卡转向相应完整讲解，语法书第1、2章概览也使用相同教学内容。全文规则、例词和分类项目参与搜索；语法题库新增“分类 / 归类”题型筛选。旧题ID及学习记录保留，新基础课使用独立题目，原有课程、阅读、词库、听力、场景功能保留。

新增源码`src/gender-lessons.js`、`src/gender-lessons-ui.js`；新检查`node scripts/audit-gender-rewrite.cjs`以及`node tests/gender-rewrite-browser.mjs`。内容核验包含26个独立性别事实与13个词形用例；浏览器核验覆盖三课所有新题、38分类项、错题反馈、返回/刷新、检索、备份及手机布局。原`tests/gender-depth-browser.mjs`已按新的独立课修订，不再把原先混在一起的冠词一致规则作为本课验收标准。

当前基础/过渡/补充独立课为49节，语法条目387个。这些计数不代表全部西语语法均已审校。本轮只重写上述名词性别专题，不把它宣称为全站所有语法已经重写。
