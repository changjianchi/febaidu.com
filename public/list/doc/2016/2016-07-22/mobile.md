# 移动生活周报

> 从2016-7-18到2015-7-22

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

* 进度：本周开发（城市-线路规划卡,规划列表情景页,线路详情情景页）

* 线下预览: [北京](https://cq01-ala-fe-4.epc.baidu.com:8004/s?word=%E5%8C%97%E4%BA%AC)

* 效果：

  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/fdd41fe735477b8a0360ea785a71b7b2/image.png" width="300">
  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/30bf3b88f6f6c5b316837d6a60d66ff2/image.png"  width="300">

* 计划:

    城市新风向：交互完成，收敛卡视觉已出,整体07-22评审.

#### 2、旅游-景点（泉有）

* 背景：针对旅游类目下的景点搜索需求，从页面整体效果上优化体验，建立更有组织的搜索结果页面.

* 目标收益: 提升景点目的地搜索体验和在旅游决策中的价值,页面停留时长增加，长点击增加，门票gmv转化率上升,预计日PV 200W.

* 进度排期：

  景点情景页：数据已到位，还需要评估筛选, 预计07-22上线。

  门票接入GMV: 正在更换线上的直达号资源，等到更换完成下周开始介入GMV。

  景点线路规划：依赖于城市的线路规划，预期下周内上线。


#### 3、POI-酒店（田岳,泉有）

* 背景：针对连锁品牌名（例如，锦江之星，汉庭，格林豪泰等）、某一地区的酒店（例如，北京酒店预订，上海酒店预订等）、某一具体酒店名（例如，北京香格里拉饭店，北京王府井希尔顿酒店等）的搜索，通过构建完整情景页的形式优化搜索体验和提升GMV值。

* 收益: 提升搜索在酒店类目的价值、GMV. PV约200W.

* 排期进度：

  国内酒店：正在测试中，7.22晚上提三级单。

  国际酒店：测试基本没有问题，https图片有问题，正在解决。 7.21晚上提单。

* 线下预览: [北京](http://cp01-sys-rath4-c32-qa270.cp01.baidu.com:8003/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=dom_hotel&dev_path=searchaladdin&dev_tpltype=default&sid=99999&dev_online=1&wd=%E6%B1%89%E5%BA%AD%E9%85%92%E5%BA%97&word=%E6%B1%89%E5%BA%AD%E9%85%92%E5%BA%97&wiseus=10.99.218.13)

* 效果：

  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/6a7166e6a375e140cb33ab08f47e8f59/image.png"  width="300">
  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/019d57e3f03a2d3c9f73c611b908b70a/image.png" width="300">
  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/5cd4c23722a9a2225ec0b43f18711aa0/image.png"  width="300">

### 4、POI-餐饮（楚权）

* 背景：针对餐饮搜索需求，整合百科、poi、团购、外卖、电话等信息，构建更有组织的餐饮搜索结果。

* 目标收益: 餐饮品牌搜索需求满足度上升. PV约180W.

* 排期进度：

  团购情景页： 模板上线完成，由于ODP封禁上线，需要delay到7.18上线。

  铺量：排期都已经给出，先保证8月第1周消费类全部上线。

* 线上预览: [海底捞](https://www.baidu.com/#|src_%E6%B5%B7%E5%BA%95%E6%8D%9E|sa_tb)


### 5、出行（青青）

* 背景：为了保证阿拉丁卡片对于出行需求的全面覆盖，保证用户对阿拉丁卡片购票的稳定预期，保证流量的充分利用带来更高GMV，需要持续优化召回率，扩大覆盖，同时降低误召回。从而持续提升阿拉丁出行卡片对于出行需求的稳定覆盖和满足。

* 目标收益: 城市间出行方式和购票交易流程（640W）,点对点市内出行（210W）,航班、线路信息查询 （100W）.

* 排期进度：

  城市到城市：自驾游给到450w数据，正在生效到线上。正在人工评估。

  火车票：正在人工评估，7.21给结论, 本周转全。

  汽车票：7.20给出人工评估结论。7.21开始走三级单。

  飞机票：已小流量上线,PV约2W。

* 线上预览: [北京到上海](https://www.baidu.com/#|src_%E5%8C%97%E4%BA%AC%E5%88%B0%E4%B8%8A%E6%B5%B7|sa_ib)

* 效果：

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/2ed257f98dbd1c89f11cdeec8ac61883/image.png"  width="300">


### 6、移动服务（丽黎）

* 排期进度：

  公积金（查询和提取）： 已上线,试验结果正向.

  gmv-糯米搬家: 下周三（08-03）PM评估,下周四（08-04）完成联调.

  gmv-话费充值开发: 评审中.

  公积金（相关推荐）：测试完毕,已上线.

  政务-结婚证: 07-25模板上线，07-28日上线.

* 效果：

  政务公积金提取:

  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/3043ad198aa4ee6de0b678a125077faf/image.png"  width="300">

  GMV-糯米搬家

  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/4c4879c73b8045cf10e4c4a5af8cc222/image.png"  width="300">

  政务-结婚证卡片

  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/c8ebb559173b1017ba0796ea71c83db4/image.png"  width="300">

  政务-公积金推荐卡片

  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/24271cdd9ed4586b04242f59360f1886/image.png"  width="300">