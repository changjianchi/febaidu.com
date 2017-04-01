# 郭勇

> 从2016-12-26到2016-12-30

#### PPV个人(开发中,部分提测)

- 背景

PPV单篇付费除开放给图书馆用户外，仍然存在40%的用户不在高校内，这部分用户的下载需求无法得到满足，所以针对个人，也需要搭建单篇付费的通路，并且将此通路作为学术服务的一种，强化用户认知，培养用户习惯。

- 收益（总体目标）

完善学术服务，提升用户品牌认知，GMV

- 完成情况（里程碑）

    - 11月21日启动开发，预计开发3周，联调1周。由于临时项目插入预计delay2周

    - 12月21日个人支付部分开发完成，12月26日个人支付提测

- 本周进展

<p style="color:#c00">个人支付提测</p>

<p style="color:#c00">接口调整引起的部分页面逻辑配合修改</p>

<p style="color:#c00">除个人支付外其他功能尚未开始（ue未确定，实现方式未确定）</p>

- 效果
    - [个人支付线下环境，需要登录线下账号](http://cq01-2012q2-kw1-newndi083.cq01.baidu.com:8009/u/ppv?tab=usercenter)

- 计划
    - 下周内完成剩余其他流程，完成联调，提测。
    - 预计2.5周时陆续提测，整体预计12.16上线，其他需求插入整体预计delay2周


#### 学术年度报告（已确认待上线）

- 背景

通过前期的用户调研和访谈发现，虽然知晓百度学术的用户认可度已逐渐提高，但仍有约50%左右的目标用户对品牌并不知晓，口口相传的速度比较慢，计划通过一些有趣&有价值的内容传播提高学术的产品知名度，提升更多的新增用户。

- 收益（总体目标）

通过微信，微博等传播形式提升学术新用户

- 完成情况（里程碑）

    - 12月12日开发完成

- 本周进展

<p style="color:#c00">PM，UE已确认，待上线</p>

- 效果
    - [线下环境](http://cq01-2012q2-kw1-newndi083.cq01.baidu.com:8009/u/commonpage?cmd=report2016)

- 计划
    - 上线


#### 学术搜索结果页UI3.0（开发中）

- 背景

学术整体已经有过搜索上线的1.0版本和收藏订阅等服务的平台上线2.0版本两次视觉效果，随着产品的不断丰富，用户越来越多，对产品品牌认知加深，视觉交互上需要从逻辑、风格上做进一步的梳理和统一，打造一个强认知的学术范儿风格的产品。


- 收益（总体目标）

优化学术搜索交互体验，打造人工智能、语义搜索的学术搜索引擎。提升用户交互体验和产品品牌影响力。

- 完成情况（里程碑）

    - 12月26日介入开发

- 本周进展

<p style="color:#c00">左侧筛选功能开发中</p>

- 效果
    - [线下环境](http://st01-spi-pubec1.st01.baidu.com:8012/s?wd=%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0&tn=SE_baiduxueshu_c1gjeupa&cl=3&rn=50&ie=utf-8&bs=paperuri%3A%282226686f009d7df75daee53447a54ba5%29&f=8&rsv_bp=1&rsv_sug2=0&sc_f_para=sc_tasktype%3D%7BfirstSimpleSearch%7D)

- 计划
    - 元旦后2周上线

#### 学术svn模块 迁移icode（进行中）

- 背景

svn 在今年底将寿终正寝，相关模板需要迁移icode。同时scholar-pae模块 还是用aglie/old ,预期迁移到aglie 2.0。midpage模块 雪冉已经统一迁移，需要验证上线正常。同时迁移经验知道招聘模块迁移。

- 收益（总体目标）

svn迁移icode 更好的开发体验。

- 完成情况（里程碑）

    - 12月21日icode 模块已创建，第一次提交svn基线代码

    - 12月28日 迁移完成，第一次icode 上线验证完成


- 本周进展

<p style="color:#c00">本周三（12.28）迁移完成，上线验证成功</p>

- 效果
    - 无

- 计划
    - 招聘目前还是主干上线，架构已经申请半年延期，后续推动后端逐步迁移beehive方式上线和icode。