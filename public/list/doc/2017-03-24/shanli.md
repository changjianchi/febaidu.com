# 山莉

> 2017.03.20~2017.03.24

### C类内容情景页建设 （医疗已上线）@山莉
- 背景：目前医疗、旅游、汽车三个垂类均有C类页面建设的需求，为几个垂类文章内容页面提供公用的base模板、数据格式
- 收益&目标：提供通用的数据格式,满足基础文章类内容页建设，同时确认统一的广告数据接入形式
- 开发模板
	- 情景页：c_article_base、c_main_base、c_tag_base、c_recommen_base、c_cyright_base
- **完成情况**
	- 确认分两套方案满足：
		- 整合文章内容、实体推荐、广告、相关推荐、版权五部分为一个模板，满足所有数据是一个资源的情况
        - 文章内容、实体推荐、广告、相关推荐、版权五部分拆卡提供灵活性，满足数据来源不一致的情况
    - schema数据格式开发
    - 第一种方案的base模板雏形 
    - base模板开发完成，待联调
    - 应用到医疗文章页测试中
    - 应用到医疗文章页已上线
    - 应用到旅游疗文章页联调中`@王天立`
- 本周进展
	- 数据格式已确认
    - base模板开发完成，待联调
    - 应用到旅游文章页联调中`@王天立`
	- 3.20-3.21联调
    - 3.22测试&ue走查中
    - 3.24医疗已上线  
- 计划
	- 3.10 数据格式整体调整完
	    - [方案一schema地址](http://admin.kg.baidu.com/sitemap/template2/schemaView?id=6070)
	    - [方案二主体内容schema地址](http://admin.kg.baidu.com/sitemap/template2/schemaView?id=6080)
	    - [方案二实体推荐schema地址](http://admin.kg.baidu.com/sitemap/template2/schemaView?id=6081)
	    - [方案二相关推荐schema地址](http://admin.kg.baidu.com/sitemap/template2/schemaView?id=6052)
	    - [方案二版权schema地址](http://admin.kg.baidu.com/sitemap/template2/schemaView?id=6082)
	- 3.14 提供出内容的base模板
    - 3.15 文章base主体内容模板开发完成
    - 3.22 医疗测试&ue走查中
    - 3.24 医疗已上线
- 效果图
    <img width=300 src="http://wiki.baidu.com/download/attachments/296912444/chunyu2.jpg?api=v2">
    
    
### 医疗 
#### 医疗c类页面迭代（开发中）@山莉@郑铎@李金梅
- 背景：
  针对医疗资源方落地页用户体验差，广告泛滥的问题，搜索医疗垂类今年的方向是自建封闭页面，对用户体验和广告体验进行提升和平衡。目标是提升基础页面体验和广告体验，探索多种变现方式。
- 收益：
  PV 2000W
- **工作量评估**
  - 需求量：
    三个c类页面重建（一问多答，多轮交互问答，相关文章共三张sf卡）
  - 开发风险
    同时存在同步,异步更新方式（多轮交互问答卡片）
  - 沟通风险
    - 点赞功能中单个用户的点赞次数存储方案待定
    - 需要修改所有跳转到c类页面的入口，包含一张NLP结果卡
    - 凤巢和网盟广告接入
    - c类页面使用mip还是sf开发待定
- **排期计划**
    - 2.28~3.1  完成凤巢广告联调,广告部分单独开发成一个module@郑铎
    - 3.2~3.9   一问多答模板开发(一张sf卡)@郑铎
    - 3.6~3.14  相关文章模板开发(一张sf卡)@山莉@李金梅
    - 3.10~3.13 一问多答模板联调@郑铎
    - 3.14~3.17 交互问答模板开发(一张sf卡)@郑铎
    - 3.14~3.17 相关文章模板联调@山莉@李金梅
    - 3.20~3.21 交互问答模板联调@郑铎
    - 3.20~3.22 测试
    - 3.22~3.23 ue走查
    - 3.24      上线 
- **完成情况**
    - 2.28~3.1 凤巢广告联调完成，广告引入部分单独开发一个module，模块名：common_advert
    - 3.2 一问多答模板建数据
    - 3.6 一问多答卡片第一版开发完成，模板名：disease_answer
    - 3.7~3.8 真实数据联调完成
    - 3.9 ue走查结束，跳转入口修改完成
    - 3.13 一问多答卡片第一版上线
    - 3.14 修改一问多答卡片上线后反馈的问题，增加吸底button部分，进行相关文章情景页的开发
    - 3.15 吸底button测试走查完毕，修改nlp情景页入口，沟通点赞功能实现方案 完成左图右文部分
    - 3.16 开发点赞功能，修改一问多答卡片样式问题，完成c_recommen_base模板开发（用来兼容c类页面的左图右文）
    - 3.21 点赞功能独立出一个module(common_agree),disease_answer模板加入相关问答部分。解决diseae_answer模板tag部分的bug,开始开发交互问答模板(disease_exch)@郑铎
    - 3.22 disease_exch模板样式开发完成，disease_answer模板提测@郑铎
    - 3.23 修复disease_answer提测反馈的问题，disease_exch模板给ue走查样式@郑铎
    - 3.20-3.21 医疗文章页联调 @山莉
    - 3.22 医疗文章页联调 @山莉
- 本周进展
    - 3.21 点赞功能独立出一个module(common_agree),disease_answer模板加入相关问答部分。解决diseae_answer模板tag部分的bug,开始开发交互问答模板(disease_exch)@郑铎
    - 3.22 disease_exch模板样式开发完成，disease_answer模板提测@郑铎
    - 3.23 修复disease_answer提测反馈的问题，disease_exch模板给ue走查样式@郑铎
    - 3.21 问答&文章的相关推荐开发完成 @金梅      
    - 3.22 问答&文章的相关推荐UE走查完成 @金梅 
    - 3.20-3.21 医疗文章页联调 @山莉
    - 3.22 医疗文章页联调 @山莉
    - 3.23 医疗文章页测试完成 @山莉 
- **效果图**
  - 一问多答
    <img width=300 src="http://wiki.baidu.com/download/attachments/296912444/chunyu1.jpg?api=v2">
  - 相关文章
    <img width=300 src="http://wiki.baidu.com/download/attachments/296912444/chunyu2.jpg?api=v2">
  - 多轮问答
    <img width=300 src="http://wiki.baidu.com/download/attachments/296912444/chunyu4.jpg?api=v2">








