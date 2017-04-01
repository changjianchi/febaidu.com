# 山莉

> 2017.03.06~2017.03.10

### C类内容情景页建设 （联调中）@山莉
- 背景：目前医疗、旅游、汽车三个垂类均有C类页面建设的需求，为几个垂类文章内容页面提供公用的base模板、数据格式
- 收益&目标：提供通用的数据格式,满足基础文章类内容页建设，同时确认统一的广告数据接入形式
- 开发模板
	- 情景页：c_article_base、c_main_base、c_tag_base、c_recommen_base、c_cyright_base
- **完成情况**
	- 确认分两套方案满足：
		- 方案一:整合文章内容、实体推荐、广告、相关推荐、版权五部分为一个模板，满足所有数据是一个资源的情况
        - 方案二:文章内容、实体推荐、广告、相关推荐、版权五部分拆卡提供灵活性，满足数据来源不一致的情况
    - schema数据格式开发
    - 第一种方案的base模板雏形 
    - base模板开发完成，今天同医疗联调
- 本周进展
	- 数据格式已确认
    - base模板开发完成，今天同医疗联调
- 计划
	- 3.10 数据格式整体调整完
	    - [方案一schema地址](http://admin.kg.baidu.com/sitemap/template2/schemaView?id=6070)
	    - [方案二主体内容schema地址](http://admin.kg.baidu.com/sitemap/template2/schemaView?id=6080)
	    - [方案二实体推荐schema地址](http://admin.kg.baidu.com/sitemap/template2/schemaView?id=6081)
	    - [方案二相关推荐schema地址](http://admin.kg.baidu.com/sitemap/template2/schemaView?id=6052)
	    - [方案二版权schema地址](http://admin.kg.baidu.com/sitemap/template2/schemaView?id=6082)
	- 3.14 提供出内容的base模板
    - 3.15 文章base主体内容模板开发完成
- 效果图

### 医疗 （小流量上线）@山莉
背景：对于用户的孕期系列需求满足较差，需求是可以通过结构化信息进行满足的，本次优化引入权威、优质的结构化资源，不仅包含文本类信息，还加入了富媒体元素，包括3d视频和图片等可视化信息。
- 收益：预期影响pv15w。
- 开发模板
	- 结果页：sg_baby_status
	- 情景页：baby_status、mother_change、mother_tools、muying_diet、baby_video
- **完成情况**
    - 1.05 需求评审
    - 1.12-1.13 数据格式定义&结果页开发完成
    - 1.17-1.18 视频情景页数据格式定义&开发完成
    - 1.22 详情情景页UE稿定稿
    - 2.7 详情页开发完成
    - 2.15 联调
    - 2.21-23 测试&UE走查
    - 2.27 小流量上线
- 本周进展
	- 1.05 需求评审
    - 1.12-1.13 数据格式定义&结果页开发完成
    - 1.17-1.18 视频情景页数据格式定义&开发完成
    - 2.7 详情页开发完成
    - 2.9 待联调
    - 2.16 联调中
    - 2.23 fixbug&修改UE走查问题
    - 2.27 上线
- 计划
	- 1.05 需求评审
    - 1.13 结果页开发完成
    - 1.18 视频情景页开发完成
    - 2.7 详情页开发完成
    - 2.17 预计联调完成提测
    - 2.27 走三级单
- 效果图
   - 结果页：
	<img width=300 src="http://wiki.baidu.com/download/attachments/296912444/image2017-3-2%2015%3A14%3A53.png?api=v2">
   - 情景页-详情： 
   <img width=300 src="http://wiki.baidu.com/download/attachments/296912444/image2017-3-2%2015%3A12%3A25.png?api=v2">
  - 情景页-视频：
   <img width=300 src="http://wiki.baidu.com/download/attachments/296912444/image2017-3-2%2015%3A10%3A59.png?api=v2">
 

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
    - 3.8-3.9  文章页面的schema定义
- 本周进展
    - 3.10      一问多答卡片第一版开发完成&测试完成预计今天紧急上线
    - 3.6-3.10   文章类内容页数据格式输出完成      
    
- **效果图**
  - 一问多答
    <img width=300 src="http://wiki.baidu.com/download/attachments/296912444/chunyu1.jpg?api=v2">
  - 相关文章
    <img width=300 src="http://wiki.baidu.com/download/attachments/296912444/chunyu2.jpg?api=v2">
  - 多轮问答
    <img width=300 src="http://wiki.baidu.com/download/attachments/296912444/chunyu4.jpg?api=v2">








