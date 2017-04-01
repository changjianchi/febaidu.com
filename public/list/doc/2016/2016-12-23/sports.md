# 体育游戏汽车
<style>
    ul > li > em {
        font-style: italic;
        color: #999;
    }
    p > img {
        width: 300px;
    }
</style>

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
    预计下周全量
- 效果图
   <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/image2016-12-8%2011%3A38%3A47.png?api=v2">
   <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/image2016-12-8%2011%3A39%3A25.png?api=v2">
   <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/image2016-12-8%2011%3A39%3A51.png?api=v2">
   <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/image2016-12-8%2011%3A40%3A8.png?api=v2">
 
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
 
	tab上滑效果请点击
<img width=300 src="http://wiki.baidu.com/download/attachments/246189486/image2016-11-30%2019%3A35%3A48.png?api=v2">
	比赛情景页入场请点击
 <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/image2016-11-30%2019%3A36%3A39.png?api=v2">
	球队情景页入场请在比赛情景页点击
 <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/image2016-11-30%2019%3A37%3A23.png?api=v2">
	新闻情景页入场请点击新闻tab下任意条目
 <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/image2016-11-30%2019%3A38%3A20.png?api=v2">
	视频情景页入场请点击视频tab下任意条目
 <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/image2016-11-30%2019%3A38%3A59.png?api=v2">
	卡片风格参考material design设计原则优化，增加了卡片的层次感，可以对比该页面的每张卡片与线上效果的差异
- 计划
	优化情景页入场时间：去除loading等待效果
	情景页卡片同样按照material design原则优化，增加层次感
	优化新闻和视频的展开效果
 
#### 线上体育模板优化 (已上线)@山莉
- 背景：
1.统一球队、球员、赛事模板的新闻和视频图片的比例
2.赛事最佳球员统一间距
3.赛程球队名称处理折行&对齐方式
- 开发模板
   sg_lasar_team、sg_lasar_football、sg_lasar
- 本周进展
   12.14日 sg_lasar_football、sg_lasar已上线
   12.15日 改进上述三个问题
- 计划
   12.14日 sg_lasar_football、sg_lasar已上线
   12.16日 sg_lasar_team已上线
 
#### 数据开放 (开发完成)@山莉
- 背景：
1.体育数据需要开放给站长接入,定义外部合作-xml格式,分别为：赛事热门视频、比赛直播、比赛集锦
- 开发模板
   无
- 本周进展
  12.16 同数据rd梳理并增加三个schema数据
- 计划
	12.15-12.16 定义数据格式
### 游戏 （暂停）@山莉
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
    12.20  rd ready 同rd联调
	12.22  UE、QA测试
    12.26  小流量上线
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
    12.16 情景页新加热门车列表，城市筛选位置调整到上方蓝条内
    12.21 情景页首页数据联调
    12.22 将结果页和两个情景页相关联，情景页筛选页数据联调
- 本周进展
    12.21 情景页首页数据联调
    12.22 将结果页和两个情景页相关联，情景页筛选页数据联调
- 计划
    原计划开发时间：12.1~12.14
    现调整为：12.1~12.16
    调整原因：情节页ue图初稿延误两天
    预计联调两天
- 结果页效果图
   <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/%E4%BA%8C%E6%89%8B%E8%BD%A6%E6%90%9C%E7%B4%A2%E7%BB%93%E6%9E%9C%E9%A1%B5-%E6%A0%87%E6%B3%A8.png?api=v2">
- 情景页效果图
   <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/%E6%83%85%E6%99%AF%E9%A1%B5-%E9%A6%96%E9%A1%B5.png?api=v2">
   <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/%E6%83%85%E6%99%AF%E9%A1%B5-%E4%BB%B7%E6%A0%BC%E6%8E%A8%E8%8D%90.png?api=v2">
   <img width=300 src="http://wiki.baidu.com/download/attachments/246189486/%E6%83%85%E6%99%AF%E9%A1%B5-%E5%A4%A7%E5%9B%BE%E6%A8%A1%E5%BC%8F.png?api=v2">
   
   
  
 
