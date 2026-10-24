// Targeted links: new reference lessons supplement, rather than replace, a unit's own three steps.
const precisionUnitPrerequisites={
'A1-1':['foundation-topic-spelling-sounds','foundation-bridge-people'],
'A1-3':['foundation-core','foundation-topic-state-adjectives'],
'A1-10':['foundation-topic-spelling-sounds','foundation-topic-question-order'],
'A2-1':['foundation-topic-past-regular','foundation-topic-past-irregular'],
'A2-2':['foundation-topic-past-imperfect','foundation-topic-past-regular'],
'B1-1':['foundation-topic-past-imperfect','foundation-topic-past-irregular','foundation-past'],
'B2-1':['foundation-topic-object-clauses','foundation-topic-past-imperfect','foundation-past']
};
for(const [unit,ids]of Object.entries(precisionUnitPrerequisites))gradedScaffolds[unit].prerequisites=ids;
const precisionUnitDetails={
'A1-2':['gender-categories','plural-boundaries'],
'A1-7':['calendar-register'],
'A1-9':['questions-with-prepositions'],
'A2-3':['participle-agreement'],
'A2-6':['calendar-register'],
'B1-4':['command-boundaries'],
'B1-8':['clause-roles'],
'B2-1':['clause-roles'],
'B2-7':['participle-agreement']
};
const teachingTimelines={};
function timeAxis(key,title,events){teachingTimelines[key]={key,title,events}}
timeAxis('foundation-topic-past-regular','把三个过去事件作为整体推进',[
['昨天①','出门：salí','把出门作为过去整体节点，并非展开它内部每一秒。'],
['昨天②','买书：compré','第二个谓语继续配我；过去时间不是只在第一个动词上标一次。'],
['昨天③','回家：volví','按事件顺序连接；加入当时天气时，可另外用未完成过去时铺背景。']]);
timeAxis('foundation-topic-past-irregular','先看事件时间，再分类具体词形',[
['过去时间框架','在过去的一天','语境先把叙述放进过去；并不是所有单词以同样词尾表示过去。'],
['事件','tuve / hice / dije','分别识别强词干、hacer 的 c/z 与 j 词干组，再按主语选形式。'],
['现在','回头讲述','不规则拼写不改变叙事任务；形式与视角要分别学会。']]);
timeAxis('foundation-topic-past-imperfect','背景展开时，一个事件进入画面',[
['背景','estudiábamos','镜头放在过去某时，我们当时在学习；不宣布后来没有学完。'],
['进入画面','sonó el teléfono','电话响作为推进事件；它的主语不是我们，动词既换视角也换人称。'],
['随后','继续叙事','可以再补接电话或回去学习等事件；是否用未完成，仍取决于如何呈现。']]);
timeAxis('foundation-past','过去参照之前，另一件事已完成',[
['更早','Ana había salido','出门早于我的到达；用过去完成表达相对先后，不是因为事情很古老。'],
['过去参照','yo llegué','到达给出比较“更早”的参照节点，简单过去推进叙事。'],
['现在','讲述这段经过','不能只按句子里哪个动词写在前面，就决定现实中谁先发生。']]);
timeAxis('unit-A2-1','昨天的叙事顺序',teachingTimelines['foundation-topic-past-regular'].events);
timeAxis('unit-A2-2','生活背景与某一次发现',[
['过去阶段','vivía cerca del mar','进入童年生活的内部，把住处当作背景。'],
['习惯','iba a la playa','描述过去习惯；不等于所有重复事件都必须未完成。'],
['某一次','encontré una concha','一回发现贝壳推动故事，作为过去整体事件。']]);
timeAxis('unit-B1-1','先离开，后到达：参照不是词序',[
['更早','el tren había salido','火车发车发生在我的到达之前，以过去完成说明更早已完成。'],
['过去参照','llegué a la estación','我的到达成为这个先后关系的参照点。'],
['背景','llovía / no tenía paraguas','描述到达时的情景；背景可与过去参照同时，不代表一定最后才发生。']]);
timeAxis('unit-B2-1','转述：原话与转述各有参照点',[
['周一','原话：Vendré mañana','周一口中的明天是周二。先固定原说话时间。'],
['周二','转述：vendría al día siguiente','转换叙述位置时，时态、人称与时间词一起核对；不能让承诺误移到周三。'],
['所指事件','约定的来访：周二','事件日期不会因为转述时间改变就自动改变；引用原话与间接转述分开处理。']]);
timeAxis('unit-B2-2','反事实先分实际与假设',[
['实际过去','envié la solicitud tarde','先陈述真实发生的失误，作为反事实分析基准。'],
['不同条件','si hubiera revisado','想象当时核对了日期；该条件与既定过去不同。'],
['假设结果','habría entregado a tiempo','描述在这个不同条件下原本会有的结果；不把它误写成真实历史。']]);
timeAxis('unit-B2-10','将来完成：从未来截止点回看',[
['现在','作出计划或判断','我现在谈到周五前完成的预期，不是宣布周五才开始。'],
['截止前','预计已完成：terminado','完成位于所选未来参照点之前；具体完成时刻可以不说。'],
['周五参照','para el viernes','从该截止点回看“已经完成”，因此用 habré+分词。']]);
