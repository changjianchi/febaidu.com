##体育游戏汽车 

### 体育  （山莉、朱雷）
#### KG-新增球员卡(小流量上线）@山莉
- 背景：为提升体育搜索体验，新增体育人物阿拉丁，覆盖体育人物新闻数据资料视频百科需求，并且与百度体育中间页打通形成完整的体育体验。也是体育方向继赛事、球队之后的第三个知识库阿拉丁
- 收益：覆盖1000+球员，影响面60wpv，换query比例降低，页面点击率明显提升
- 开发模板
	aladdin: sg_lasar_member
    widget: table_img
- **完成情况**
    11.24 模板开发完成
    11.29 联调完成&测试&UE走查
    12.1  测试走查完成
    12.2  UE走查完成
    12.3-12.6 协助数据check&联调环境处理
    12.7  小流量上线
	
- 本周进展
	修改bug
	预览地址：[http://cp01-ala-fe-6.epc.baidu.com:8003/s?word=%E8%A9%B9%E5%A7%86%E6%96%AF&wiseus=10.103.73.34&bd_ck=0](http://cp01-ala-fe-6.epc.baidu.com:8003/s?word=%E8%A9%B9%E5%A7%86%E6%96%AF&wiseus=10.103.73.34&bd_ck=0)
- 计划
	小流量实验预计一周，一周后全量
- 效果图
   ![img](http://wiki.baidu.com/download/attachments/246189486/image2016-12-8%2011%3A38%3A47.png?api=v2)
   ![img](http://wiki.baidu.com/download/attachments/246189486/image2016-12-8%2011%3A39%3A25.png?api=v2)
   ![img](http://wiki.baidu.com/download/attachments/246189486/image2016-12-8%2011%3A39%3A51.png?api=v2)
   ![img](http://wiki.baidu.com/download/attachments/246189486/image2016-12-8%2011%3A40%3A8.png?api=v2)
 
#### KG-NBA （开发中）@朱雷
- 背景：在体育垂类上尝试创新的交互效果，预期能够提升pv、点击等指标。
- 收益：影响pv 10w，在交互体验上对标谷歌
- 开发模板
	aladdin: sg_lasar
	card: match、team、match_news、match_video
- **完成情况**
	11月11日 match、team开发完成
	11月16日 match_news、match_video开发完成
	11月22日 完成新闻情景页、比赛情景页渐入效果开发
	11月24日 完成视频模块的结果页到情景页切换、比赛情景页到球队情景页切换效果
	11月29日 修复了结果页到情景页切换时的闪动问题
	11月30日 参照material design思想将showcase页面的卡片优化，增加层级感
- 本周进展
	本周引入了superframe2.5框架，用于修复结果页到情景页切换时的闪动问题，参照material design思想将showcase页面的卡片优化，增加层级感
- 效果
	页面地址：[http://cp01-ps-fe-4.epc.baidu.com:8003/s?word=nba](http://cp01-ps-fe-4.epc.baidu.com:8003/s?word=nba)
 
	tab上滑效果请点击 ![img](http://wiki.baidu.com/download/attachments/246189486/image2016-11-30%2019%3A35%3A48.png?api=v2)
	比赛情景页入场请点击 ![img](http://wiki.baidu.com/download/attachments/246189486/image2016-11-30%2019%3A36%3A39.png?api=v2)
	球队情景页入场请在比赛情景页点击 ![img](http://wiki.baidu.com/download/attachments/246189486/image2016-11-30%2019%3A37%3A23.png?api=v2)
	新闻情景页入场请点击新闻tab下任意条目 ![img](http://wiki.baidu.com/download/attachments/246189486/image2016-11-30%2019%3A38%3A20.png?api=v2)
	视频情景页入场请点击视频tab下任意条目 ![img](http://wiki.baidu.com/download/attachments/246189486/image2016-11-30%2019%3A38%3A59.png?api=v2)
	卡片风格参考material design设计原则优化，增加了卡片的层次感，可以对比该页面的每张卡片与线上效果的差异
- 计划
	优化情景页入场时间：去除loading等待效果
	情景页卡片同样按照material design原则优化，增加层次感
	优化新闻和视频的展开效果
#### 新增赛事 (已上线)@山莉
- 背景：
1.新增欧冠、欧联赛事
- bugfix
1.修复线上子tab定位&交互修改
2.积分榜球队名处理截字
3.UE统一图片缩放比例调整
- 开发模板
   sg_lasar_football
- 本周进展
   已完成开发，并于11.23日完成上线
- 计划
   暂无
#### 足球球队模板改进 (已上线)@郑铎
- 背景：
1.改进新闻和视频图片的伸缩比例
2.原本每增加一个tab，就要在字段中增加一种tab类型，模板改进需要前后台一起进行，现将tab部分进行改进，使以后新增tab后前端不需要参与开发。
3.球员头像点击要跳大搜。
4.更改新闻部分的时间显示格式，现在时间显示更加具体。
- 开发模板
   sg_lasar_team
- 本周进展
   改进完成，于11.29日上线


### 游戏 （开发中）@山莉
背景：用户在检索游戏攻略时，常常是具体的某一个攻略，query偏长尾。此时结果的时效性和相关性不够好。
- 收益：优质资源引入,和资源方建立一个数据通路，建立检索query与资源方内容的通信，并在前端以聚合阿拉丁的样式更好的满足用户。
- 开发模板
	game_plan、gam_plan_detail、video
- **完成情况**
	12.1 数据格式定义&结果页卡片开发
    12.6 视频组件修改
    12.7 情景页开发
- 本周进展
	12.6 视频组件修改
    12.7 情景页开发
- 计划
    12.9  联调，依赖rd时间
	预计13号上线
-效果图
   ![img](http://wiki.baidu.com/download/attachments/246189486/image2016-12-8%2011%3A44%3A16.png?api=v2)
   ![img](http://wiki.baidu.com/download/attachments/246189486/image2016-12-8%2011%3A45%3A14.png?api=v2)
   ![img](http://wiki.baidu.com/download/attachments/246189486/image2016-12-8%2011%3A45%3A48.png?api=v2)
   ![img](http://wiki.baidu.com/download/attachments/246189486/image2016-12-8%2011%3A46%3A51.png?api=v2)
 
 
### 汽车@郑铎
背景：百度可通过聚合车源、搭建入口、提供额外优惠等方式，进一步满足用户需求，稳住二手车的流量入口
- 收益：帮助用户更好的决策，指标上是增加情景页的点击和媒体时长
- 开发模板
	brands2
- **完成情况**
	初稿给出，刚刚介入开发
- 本周进展
	12.1 数据格式定义&结果页开发
- 计划
    开发时间：12.1~12.14
    预计联调两天
 