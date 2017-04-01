# 医疗/教育 (山莉、郑铎、金梅)

### C类内容情景页建设 （方案设计中）@山莉
- 背景：目前医疗、旅游、汽车三个垂类均有C类页面建设的需求，为几个垂类文章内容页面提供公用的base模板、数据格式
- 收益&目标：提供通用的数据格式,满足基础文章类内容页建设，同时确认统一的广告数据接入形式
- 开发模板
	- 情景页：c_page_base
- **完成情况**
	- 确认分两套方案满足：
		- 整合文章内容、实体推荐、广告、相关推荐、版权五部分为一个模板，满足所有数据是一个资源的情况
        - 文章内容、实体推荐、广告、相关推荐、版权五部分拆卡提供灵活性，满足数据来源不一致的情况
    - schema数据格式开发
    - 第一种方案的base模板雏形 
- 本周进展
	- 同相关rd进行方案沟通，确认出大方向的两个实现方案
    - 确认数据格式
- 计划
	- 3.10 数据格式整体调整完
	- 3.14 提供出内容的base模板
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
    - 3.6~3.14  相关文章模板开发(一张sf卡)@李金梅
    - 3.10~3.13 一问多答模板联调@郑铎
    - 3.14~3.17 交互问答模板开发(一张sf卡)@郑铎
    - 3.14~3.17 相关文章模板联调@李金梅
    - 3.20~3.21 交互问答模板联调@郑铎
    - 3.20~3.22 测试
    - 3.22~3.23 ue走查
    - 3.24      上线 
- **完成情况**
    - 2.28~3.1 凤巢广告联调完成，广告引入部分单独开发一个module
    - 3.2      一问多答模板建数据
    - 3.6      一问多答卡片第一版开发完成
    - 3.7~3.8  真实数据联调完成
    - 3.9      ue走查结束，跳转入口修改完成
- 本周进展
    3.6      一问多答卡片第一版开发完成
    3.7~3.8  真实数据联调完成，开始走查和测试，修改跳转入口。
    3.9      走查和测试结束，跳转入口修改完成(两个sf卡，两个结果页卡)。
    
- **效果图**
  - 一问多答
    <img width=300 src="http://wiki.baidu.com/download/attachments/296912444/chunyu1.jpg?api=v2">
  - 相关文章
    <img width=300 src="http://wiki.baidu.com/download/attachments/296912444/chunyu2.jpg?api=v2">
  - 多轮问答
    <img width=300 src="http://wiki.baidu.com/download/attachments/296912444/chunyu4.jpg?api=v2">







