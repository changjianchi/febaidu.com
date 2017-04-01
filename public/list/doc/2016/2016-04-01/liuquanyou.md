# 刘泉有

> 从2016-03-28到2015-04-01

## 天宁岛-旅游(二期)

### * 背景与目标

当前的旅游类搜索结果页包含卡片较多，尤其是同质内容卡片使得页面结构凌乱。以景区和典型旅游城市作为试水Query，依托于场景化卡片优化搜索结果页整体效果，优化内容包括：增加特价线路子卡、百度图片子卡、相关地点推荐子卡、相关咨询子卡，同时尝试兼容广告的浅色大卡样式和自然结果融合的样式。

### * 完成情况

- 扩展到108个城市,全量后预计80W PV.
* 玩法情景页拆分为=>路线+游记2个情景页
* 添加问答子卡、问答情景页
* 修改收起页面

召回：

[北京](http://cp01-ps-fe-2.epc.baidu.com:8003/s?word=%E5%8C%97%E4%BA%AC)
![北京](http://s.jiathis.com/qrcode.php?url=http://cp01-ps-fe-2.epc.baidu.com:8003/s?word=%E5%8C%97%E4%BA%AC)

### 最终效果图

* 添加的问答子卡

<a href="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/a320fb4850fc19c8c1fde38b9fe1e4ea/image.png">
  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/a320fb4850fc19c8c1fde38b9fe1e4ea/image.png" width="200">
</a>

* 添加的问答情景页

<a href="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/382a9a8b30268d4e6b63150827e97e65/image.png">
  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/382a9a8b30268d4e6b63150827e97e65/image.png" width="200">
</a>


* 修改收起状态

<a href="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/4ef721ed80da1ee68a6e442a79551f3d/image.png">
  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/4ef721ed80da1ee68a6e442a79551f3d/image.png" width="200">
</a>

## 天宁岛-餐饮(二期)

### * 背景与目标

- 整合地图、糯米、美味不用等的poi基础数据和团购、买单、排号服务，打造闭环就餐体验；
- 利用sigma和天使之翼的产品形态，提升交互体验；
- 并在美食泛搜索下尝试主题推荐；

### * 完成情况
<p style="color:red">已由qingqian负责</p>

## 周边游

### * 背景与目标

- 由于用户对周边出行呈迅猛增长的势头,且现有市场各竞品并没有明显优势来满足对于用户所需信息。

### * 完成情况
- 02-24第一次评审,细节PM与UE商定.
<p style="color:red">暂无更新</p>


## 天宁岛-景点（二期)

### * 背景与目标

- 通过对现有子卡的设计优化,结构重组和增加新子卡,提升用户体验,适配进一步扩招.

### * 完成情况
- 02-24第一次评审
- 03-08已给PM提供schema，PM与资源方提数据.
<p style="color:red">暂无更新</p>



## 场景化景点（wise_scene_trav）

### * 背景与目标
通过时间、地点场景信息定位有出行需求的用户，展现场景化出行卡片，围绕出行需求，集合信息、交通、消费等功能，精准满足其出行需求。

### * 完成情况
- 11月26日上线。
- 约200个景点,pv约3.5w/天；策略触发后，场景化卡片覆盖的pv约1w/天。
- Query=香山(天安门，故宫等)，地点策略+时间策略。
- [点这里~点这里~](https://www.baidu.com/from=844b/s?word=%E9%A6%99%E5%B1%B1&ts=0015366&t_kt=0&rsv_iqid=5504612005285293655&rsv_t=f77fpuYM6PishRuwv6A9PSlfWEsQ%252FkBKd%252FtsgBcmqwBGyhR9vBwtIJNd3A&sa=ib&ms=1&rsv_sug4=3888&ss=101&inputT=2065&sid=102251)
<p style="color:red">暂无更新</p>
<img src="img/liuquanyou/11gugong.png" width=300/>







## 场景化餐饮（wise_scene_food）

### * 背景与目标
各种餐饮名店信息聚合，吃货的福利。为用户提供更便捷的餐饮搜索信息，给部分产品线导流。

### * 完成情况
- 12月1日已上线。
- 实验圈定query总 pv约3.5w/天；根据策略，卡片会在午饭和晚饭时段触发；触发后，卡片覆盖的pv约1w/天
- Query=全聚德(麻辣诱惑，海底捞等)。
- [点这里~点这里~](http://cq01-aladdin-product-05.epc.baidu.com:8003/s?word=%E6%B5%B7%E5%BA%95%E6%8D%9E&ts=2862183&t_kt=0&sa=ib&rsv_sug4=5921&inputT=4644&ss=100&cip=47.153.191.255&tn=iphone&sid=102122)

<p style="color:red">暂无更新</p>





## 场景化城市（wise_scene_city）

### * 背景与目标
不同地方的用户，在搜索相同的地域Query时，需求不同；根据用户所在地，用户搜索时间等条件，判断用户搜索的真实需求，整合现有资源，为用户提供高颜值高精准度的搜索结果展现。

### * 完成情况

- Query=广州(上海，北京等)。
- [点这里~点这里~](http://cq01-aladdin-product-05.epc.baidu.com:8003/s?word=%E8%A5%BF%E5%AE%89&sa=tb&ts=7886850&t_kt=0&rsv_t=d93dQMJ8oDkEP%252FAP42XH91G2DzxGN7euopVrqPYifT3ciDlwi6TI&rsv_pq=1595416660186666569&ss=101&t_it=1&rsv_sug4=3603&inputT=1781&oq=%E9%A2%90%E5%92%8C%E5%9B%AD)

<p style="color:red">暂无更新</p>

<img src="img/liuquanyou/city.png" width=300/>
