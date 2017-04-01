# 移动生活周报

> 从2016-8-8到2015-8-12

### 成员

	* FE: 李林, 田岳, 丽黎, 少艳, 楚权, 青青, 泉有  , 文宇
	* PM: 祥涛, 博菲, 惠美, 正波, 涂炜, 舒平  
	* RD: 郑宽, 君生, 佳旺, 国辉, 梁超, 卢奇, 黄岳

### 需求安排

	* 李林（整体接口人）
	* 城市,景点（泉有,文宇）
	* POI-餐饮 (楚权）
	* POI-酒店 (田岳）
	* 出行（青青）
	* 生活服务（丽黎）
	* 娱乐+生活服务 (少艳)

### 进度

#### 旅游-城市（泉有）

* 背景：当前的旅游类搜索结果页包含卡片较多，尤其是同质内容卡片使得页面结构凌乱。以景区和典型旅游城市作为试水Query，依托于场景化卡片优化搜索结果页整体效果，优化内容包括：增加特价线路子卡、百度图片子卡、相关地点推荐子卡、相关咨询子卡，同时尝试兼容广告的浅色大卡样式和自然结果融合的样式。

* 收益：108城市全流量,PV80W. 扩张后PV约 120W.

* 进度：

- 城市-线路规划卡,规划列表情景页,线路详情情景页已上线(08-10).
- 城市新卡本周（08-08）已介入开发.

* 线上预览: [北京](https://m.baidu.com/ssid=ecafd1eeb2a9b7c6353138bb06/s?word=%E5%8C%97%E4%BA%AC&sid=106372)

* 效果：

  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/fdd41fe735477b8a0360ea785a71b7b2/image.png" width="300">
  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/30bf3b88f6f6c5b316837d6a60d66ff2/image.png"  width="300">

* 计划:

    城市改版：项目开发已介入,具体项目分析&排期见:

    [城市改版项目分析&计划](http://wiki.baidu.com/pages/viewpage.action?pageId=204667813).

#### 2、旅游-景点（泉有）

* 背景：针对旅游类目下的景点搜索需求，从页面整体效果上优化体验，建立更有组织的搜索结果页面.

* 目标收益: 提升景点目的地搜索体验和在旅游决策中的价值,页面停留时长增加，长点击增加，门票gmv转化率上升,预计日PV 200W.

* 进度排期：

  景点结果页优化+情景页(07-29)上线小流量实验,PV约10W,全量后约50W.

  其中景点线路规划卡片(08-11)已上线.

#### 3、POI-酒店（田岳）

* 背景：针对连锁品牌名（例如，锦江之星，汉庭，格林豪泰等）、某一地区的酒店（例如，北京酒店预订，上海酒店预订等）、某一具体酒店名（例如，北京香格里拉饭店，北京王府井希尔顿酒店等）的搜索，通过构建完整情景页的形式优化搜索体验和提升GMV值。

* 收益: 提升搜索在酒店类目的价值、GMV. PV约200W.

* 进度：

  国际酒店：已上线，实验流量50%，整体pv 1w。

  国内酒店：小流量上线,PV约7W,与糯米GMV参数修改统计中。

* 预览地址:  [杭州布丁酒店](https://m.baidu.com/ssid=ecafd1eeb2a9b7c6353138bb06/s?word=%E6%9D%AD%E5%B7%9E%E5%B8%83%E4%B8%81%E9%85%92%E5%BA%97&ts=7394407&t_kt=0&ie=utf-8&rsv_iqid=13319738511001666662&rsv_t=ede7waz5BISvCJhrS2wDiUXBemKYJ21fA0q6nHA%252BlSjnmhdbW3%252BL&sa=ihr_1&rsv_pq=13319738511001666662&rsv_sug4=1270&ss=001)

* 效果：

  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/6a7166e6a375e140cb33ab08f47e8f59/image.png"  width="300">
  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/019d57e3f03a2d3c9f73c611b908b70a/image.png" width="300">
  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/5cd4c23722a9a2225ec0b43f18711aa0/image.png"  width="300">

### 4、POI-餐饮（楚权）

* 背景：针对餐饮搜索需求，整合百科、poi、团购、外卖、电话等信息，构建更有组织的餐饮搜索结果。

* 目标收益: 餐饮品牌搜索需求满足度上升. PV约180W.

* 排期进度：

  铺量:问题均确认完，自评完成。08-11开始走单.

  本周(08-08)联调POI扩量，A类单点、多点强弱样式卡片及推荐情景页、评论情景页、图片情景页,预计下周一(08-15)上线.


* 线上预览: [海底捞](https://www.baidu.com/#|src_%E6%B5%B7%E5%BA%95%E6%8D%9E|sa_tb)


### 5、出行（青青）

* 背景：为了保证阿拉丁卡片对于出行需求的全面覆盖，保证用户对阿拉丁卡片购票的稳定预期，保证流量的充分利用带来更高GMV，需要持续优化召回率，扩大覆盖，同时降低误召回。从而持续提升阿拉丁出行卡片对于出行需求的稳定覆盖和满足。

* 目标收益: 城市间出行方式和购票交易流程（640W）,点对点市内出行（210W）,航班、线路信息查询 （100W）.

* 排期进度：

  点到点扩量小流量中,优化召回,PV约15W。
  汽车票扩量小流量中,PV约12W。
  火车票已已全量,PV200W.
  机票小流量，PV约2W.
  船票目前RD在搞其他事,block.

* 线上预览: [北京到上海](https://www.baidu.com/#|src_%E5%8C%97%E4%BA%AC%E5%88%B0%E4%B8%8A%E6%B5%B7|sa_ib)

* 效果：

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/2ed257f98dbd1c89f11cdeec8ac61883/image.png"  width="300">


### 6、移动服务（丽黎）

* 背景：暂无

* 排期进度：

  公积金（查询和提取）：7月4日测试通过等待上线，7月6日三级单准备完毕，模板小流量上线,PV约1W。
  公积金（相关推荐）：7月25小流量上线,PV约1W。
  结婚证: 7月25日模板上线，数据28日上线,pm下周一开始ubs评估，小流量上线,PV约1W。
  GMV-糯米推广: 8月9日开发，8月11日已经上线一版模板，8月12日小流量上线。

* 效果：

  政务公积金提取:

  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/3043ad198aa4ee6de0b678a125077faf/image.png"  width="300">

  GMV-糯米搬家

  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/4c4879c73b8045cf10e4c4a5af8cc222/image.png"  width="300">

  政务-结婚证卡片

  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/c8ebb559173b1017ba0796ea71c83db4/image.png"  width="300">

  政务-公积金推荐卡片

  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/24271cdd9ed4586b04242f59360f1886/image.png"  width="300">