// Topic-level crosswalk. A direct lesson link is not a claim that every exercise or footnote is checked.
const textbookTopicTargets={
'名词的性':'gender','单数定冠词':'bridge-articles','大小写':'sound','问号与感叹号':'sound',
'名词复数':'bridge-plural','复数定冠词':'bridge-articles','指示代词':'topic-demonstratives','介词 de':'topic-prepositions',
'不定冠词':'bridge-articles','主格人称代词':'bridge-people','ser 现在时':'core',
'estar 现在时':'core','介词 en':'topic-prepositions','规则 -ar 现在时':'bridge-present-ar',
'钟点':'bridge-clock','ir 现在时':'topic-core-verbs','介词 a':'topic-prepositions',
'形容词一致':'topic-agreement','tener 现在时':'topic-core-verbs','规则 -er 现在时':'bridge-present-er-ir','非重读物主词':'topic-possessives',
'指示限定词':'topic-demonstratives','重读物主词':'topic-possessives','规则 -ir 现在时':'bridge-present-er-ir','及物与不及物':'topic-transitivity',
'词干变化 e→ie / o→ue':'topic-stem-patterns','ser/estar 与形容词':'core','直接/间接宾语辨认':'topic-transitivity','直接宾语代词':'bridge-direct',
'词干变化 e→i':'topic-stem-patterns','代词式动词':'bridge-reflexive','间接宾语代词':'bridge-indirect','现在时用法':'topic-present-uses',
'双宾语代词':'pronouns','代词式动词扩展':'bridge-reflexive','肯定命令入门':'topic-commands','介词 de 扩展':'topic-prepositions',
'肯定命令扩展':'topic-commands','疑问句词序':'topic-question-order','句中一致关系':'topic-agreement','介词 con':'topic-prepositions',
'否定命令':'topic-commands','宾语从句':'topic-object-clauses','si 条件句':'topic-conditions','无人称句':'topic-impersonal','tener que / hay que':'topic-core-verbs',
'关系从句与关系词':'relative','感叹句':'topic-exclamations','se 被动':'topic-impersonal','donde 地点从句':'topic-relative-time-place',
'简单过去入门':'past','无人称句扩展':'topic-impersonal','简单过去扩展':'past','日期':'topic-calendar','过去分词':'topic-nonfinite',
'cuando 时间从句':'topic-relative-time-place','未完成过去入门':'past','副动词入门':'topic-nonfinite'};
const textbookCoverage=textbookReview.lessons.flatMap(([chapter,pdfPage,topics])=>topics.map(topic=>{const id='foundation-'+textbookTopicTargets[topic],g=grammarGuide.find(g=>g.id===id);if(!g)throw Error('Missing textbook topic: '+topic);return {chapter,pdfPage,topic,guide:id,change:bookSupplementLessons.some(f=>f.id===id)?'本轮补专项课':'关联已有详解',questions:g.questions.map(q=>q.id)}}));
