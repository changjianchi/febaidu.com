## 体育游戏汽车

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
	12.20 球员百科增加头图展现，同时兼容老数据
- 本周进展
    1. 为增加球员百科部分点击率，增加头图展现
	预览地址：[https://m.baidu.com/?normalload=1#|src_%E8%A9%B9%E5%A7%86%E6%96%AF|sa_ib&sid=112208](https://m.baidu.com/?normalload=1#|src_%E8%A9%B9%E5%A7%86%E6%96%AF|sa_ib&sid=112208)
- 计划
	12.7-12.15 小流量实验
    1.6 出两组小流量实验的数据
    预计下周全量
- 效果图
   <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/image2016-12-8%2011%3A38%3A47.png?api=v2">
   <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/image2016-12-8%2011%3A39%3A25.png?api=v2">
   <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/image2016-12-8%2011%3A39%3A51.png?api=v2">
   <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/image2016-12-8%2011%3A40%3A8.png?api=v2">
 


#### KG进场动效 (开发中)@山莉
- 背景：
KG方向情景页进场效果
- 开发模板
   sg_lasar
- 本周进展
   1.4日 开发效果
- 计划
   1.5-1.6 加上真实dom效果

#### 线上体育模板优化 (已上线)@山莉
- 背景：
1.球队阵容跳转逻辑修改
2.nba模板积分榜修改表格样式
- 开发模板
   sg_lasar_team、sg_lasar
- 本周进展
   12.29日 修改两个问题
- 计划
   12.29日 sg_lasar_team、sg_lasar已上线
 
#### 数据开放 (待开发)@山莉
- 背景：
1.体育数据需要开放给站长接入,定义外部合作-xml格式,分别为：赛事热门视频、比赛直播、比赛集锦，新增热门节目
- 开发模板
   无
- 本周进展
    12.16 同数据rd梳理并增加三个schema数据
    1.05 增加热门节目数据
- 计划
	1.05 增加热门节目数据
### 游戏 （联调中）@山莉
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
    12.29 开始联调结果页
    1.05 情景页联调
- 计划
    1.06  提测&UE走查
    1.11  小流量上线
-效果图
   <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/image2016-12-8%2011%3A44%3A16.png?api=v2">
   <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/image2016-12-8%2011%3A45%3A14.png?api=v2">
   <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/image2016-12-8%2011%3A45%3A48.png?api=v2">
   <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/image2016-12-8%2011%3A46%3A51.png?api=v2">
 
### 汽车@郑铎
背景：百度可通过聚合车源、搭建入口、提供额外优惠等方式，进一步满足用户需求，稳住二手车的流量入口
- 收益：帮助用户更好的决策，指标上是增加情景页的点击和媒体时长
- 开发模板
	brands2
- **完成情况**
	12.1 初稿给出，刚刚介入开发
    12.7 结果页开发完成
    12.9 情景页ue图给出，开始开发
    12.14 情景页大图模式和列表模式切换完成，tab部分更新完成，新加排序tab和切换模式的tab
    12.16 情景页新加热门车列表，城市筛选移到情景页head中
    12.21 情景页首页数据联调
    12.22 将结果页和两个情景页相关联，情景页筛选页数据联调
    12.23 修复联调中发现的问题，在情景页首页中新增了定位功能
    12.27 将新的定位组件迁移到筛选页
    12.28 解决迁移中遇到的组件和情景页的一些问题
    1.3   开始解决qa测试后反馈的bug
- 本周进展
    1.3   开始解决qa测试后反馈的bug
- 计划
    原计划开发时间：12.1~12.14
    现调整为：12.1~12.16
    调整原因：情节页ue图初稿延误两天
    预计联调两天
- 结果页效果图
   <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/%E4%BA%8C%E6%89%8B%E8%BD%A6%E6%90%9C%E7%B4%A2%E7%BB%93%E6%9E%9C%E9%A1%B5-%E6%A0%87%E6%B3%A8.png?api=v2">
- 情景页首页
   <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/brands2-pic1.png?api=v2">
   <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/brands2-pic2.png?api=v2">
- 情景页筛选页
   <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/brands-pic3.png?api=v2">
   <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/brands-pic2.png?api=v2">
   <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/brands-pic1.png?api=v2">
   
   
  
 
