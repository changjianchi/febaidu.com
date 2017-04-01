# 移动生活周报

> 从2016-7-25到2015-7-29

### 成员

	* FE: 李林, 田岳, 丽黎, 少艳, 楚权, 青青, 泉有  , 文宇
	* PM: 祥涛, 博菲, 惠美, 正波, 涂炜, 舒平  
	* RD: 郑宽, 君生, 佳旺, 国辉, 梁超, 卢奇, 黄岳

### 需求安排

	* 李林（整体接口人）
	* 泉有（旅游, 文宇）
	* POI-餐饮 (楚权）
	* POI-酒店 (田岳）
	* 出行（青青）
	* 生活服务（丽黎）
	* 娱乐+生活服务 (少艳)

### 进度

#### 旅游-城市（泉有）

* 背景：当前的旅游类搜索结果页包含卡片较多，尤其是同质内容卡片使得页面结构凌乱。以景区和典型旅游城市作为试水Query，依托于场景化卡片优化搜索结果页整体效果，优化内容包括：增加特价线路子卡、百度图片子卡、相关地点推荐子卡、相关咨询子卡，同时尝试兼容广告的浅色大卡样式和自然结果融合的样式。

* 收益：108城市全流量,PV80W. 扩张后PV约 120W.

* 进度：本周城市-线路规划卡,规划列表情景页,线路详情情景页开发&测试完成,走单驳回,UE图改动.

* 线下预览: [北京](https://cq01-ala-fe-4.epc.baidu.com:8004/s?word=%E5%8C%97%E4%BA%AC)

* 效果：

  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/fdd41fe735477b8a0360ea785a71b7b2/image.png" width="300">
  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/30bf3b88f6f6c5b316837d6a60d66ff2/image.png"  width="300">

* 计划:

    城市新风向：项目计划已OK,下周城市结果页大卡调整后开始介入.
    城市结果页大卡: 卡片改动下周一（08-01）评审.

#### 2、旅游-景点（泉有）

* 背景：针对旅游类目下的景点搜索需求，从页面整体效果上优化体验，建立更有组织的搜索结果页面.

* 目标收益: 提升景点目的地搜索体验和在旅游决策中的价值,页面停留时长增加，长点击增加，门票gmv转化率上升,预计日PV 200W.

* 进度排期：

  景点结果页优化+情景页(07-29)晚19：00成功上线小流量实验,PV约8W.

  景点线路规划开发完毕，下周上线。

  度假线路: 下周给出schema,与资源方准备数据.


#### 3、POI-酒店（田岳,泉有）

* 背景：针对连锁品牌名（例如，锦江之星，汉庭，格林豪泰等）、某一地区的酒店（例如，北京酒店预订，上海酒店预订等）、某一具体酒店名（例如，北京香格里拉饭店，北京王府井希尔顿酒店等）的搜索，通过构建完整情景页的形式优化搜索体验和提升GMV值。

* 收益: 提升搜索在酒店类目的价值、GMV. PV约200W.

* 排期进度：

  国内酒店：正在走单，预计下周二(08-02)上线。

  国际酒店：已上线，实验流量50%，整体pv 1w。

* 线下预览: [巴厘岛酒店](https://m.baidu.com/s?word=%E5%B7%B4%E5%8E%98%E5%B2%9B%E9%85%92%E5%BA%97&sid=108043)

* 效果：

  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/6a7166e6a375e140cb33ab08f47e8f59/image.png"  width="300">
  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/019d57e3f03a2d3c9f73c611b908b70a/image.png" width="300">
  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/5cd4c23722a9a2225ec0b43f18711aa0/image.png"  width="300">

### 4、POI-餐饮（楚权）

* 背景：针对餐饮搜索需求，整合百科、poi、团购、外卖、电话等信息，构建更有组织的餐饮搜索结果。

* 目标收益: 餐饮品牌搜索需求满足度上升. PV约180W.

* 排期进度：

  团购情景页： 模板上线完成，由于ODP封禁上线，需要delay到7.18上线。

  下周给出餐饮情景页1.0 页面cache的方案和工作量。

* 线上预览: [海底捞](https://www.baidu.com/#|src_%E6%B5%B7%E5%BA%95%E6%8D%9E|sa_tb)


### 5、出行（青青）

* 背景：为了保证阿拉丁卡片对于出行需求的全面覆盖，保证用户对阿拉丁卡片购票的稳定预期，保证流量的充分利用带来更高GMV，需要持续优化召回率，扩大覆盖，同时降低误召回。从而持续提升阿拉丁出行卡片对于出行需求的稳定覆盖和满足。

* 目标收益: 城市间出行方式和购票交易流程（640W）,点对点市内出行（210W）,航班、线路信息查询 （100W）.

* 排期进度：

  点到点扩量小流量中，下周三给实验结论。
  汽车票扩量小流量中，下周三给实验结论。
  火车票扩量小流量，点击没问题，但是GMV有下降,下周上实验看数据。
  机票小流量负向，下周根据数据后续优化。


* 线上预览: [北京到上海](https://www.baidu.com/#|src_%E5%8C%97%E4%BA%AC%E5%88%B0%E4%B8%8A%E6%B5%B7|sa_ib)

* 效果：

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/2ed257f98dbd1c89f11cdeec8ac61883/image.png"  width="300">


### 6、移动服务（丽黎）

* 背景：暂无

* 排期进度：

  公积金（查询和提取）： 模板提前开发完毕，pm准备三级单状态以及上线计划（7月19日上线）
  gmv-糯米搬家:lili负责 ，等待数据联调
  gmv-法律咨询：少艳跟进，联调中
  公积金（相关推荐）：开发完毕，测试中，下周一上线
  结婚证的已经测试通过，等着下周上线

* 效果：

  政务公积金提取:

  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/3043ad198aa4ee6de0b678a125077faf/image.png"  width="300">

  GMV-糯米搬家

  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/4c4879c73b8045cf10e4c4a5af8cc222/image.png"  width="300">

  政务-结婚证卡片

  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/c8ebb559173b1017ba0796ea71c83db4/image.png"  width="300">

  政务-公积金推荐卡片

  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/24271cdd9ed4586b04242f59360f1886/image.png"  width="300">