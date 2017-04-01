# 刘泉有

> 从2016-03-14到2015-03-18


## 天宁岛-旅游(一期)

### * 背景与目标

- 以一个出行方向为基点，聚合各垂类内容，使用户更便捷获取所需信息。

### * 完成情况
- 01-29内网全流量上线。
- 已于2月15日17:20分在外网小流量上线。
- Query: 乌镇、丽江、桂林、三亚、香港
- 影响面日均4.5W.
#### * 实验策略：
- 33%天宁岛屏蔽阿拉丁（抽样ID为103639）
- 33%天宁岛不屏蔽阿拉丁（抽样ID为103640）
- 33%城市原样式（抽样ID为103641）
- [点这里~点这里~](https://www.baidu.com/ssid=303b7363686f6575c808/from=844b/s?word=%E4%B9%8C%E9%95%87&ts=8455359&t_kt=0&ie=utf-8&rsv_iqid=4779496194617090106&rsv_t=fbb32vuIyem3JR0xKLf906qDkaLFpGwCs8cBT1lS0VdvJU%252FAlvYbC77%252BEg&sa=ib&ms=1&rsv_pq=4779496194617090106&rsv_sug4=3689&inputT=963&ss=100)

<p style="color:red">03-18已下线.</p>


<img src="img/liuquanyou/wz1.png" width=300/>
<br/>
<img src="img/liuquanyou/wz2.png" width=300/>
<br/>
<img src="img/liuquanyou/wz3.png" width=300/>





## 天宁岛-旅游(二期)

### * 背景与目标

- 当前的旅游类搜索结果页包含卡片较多，尤其是同质内容卡片使得页面结构凌乱。以景区和典型旅游城市作为试水Query，依托于场景化卡片优化搜索结果页整体效果，优化内容包括：增加特价线路子卡、百度图片子卡、相关地点推荐子卡、相关咨询子卡，同时尝试兼容广告的浅色大卡样式和自然结果融合的样式。

### * 完成情况

- 扩展到108个城市,全量后预计80W PV.

- 出白卡强样式和弱样式.

### * 试验方案

- 实验组一组：（SID：104214）,根据Query确定默认展开半卡或全卡

- 对照组两组：1.（SID：104215）线上城市场景化半卡样式；2.（SID：104216）纯白卡样式；

- 小流量PV预计16W.


<p style="color:red">03-16开发完成,03-17联调+测试,预计03-18小流量上线</p>

### 最终效果图


* 状态1：全展开灰卡 - 默认

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/53afe9667fb48548d96a2dae970893a2/image.png)

* 状态2：半展开灰卡

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/424be15dc7e087a2965bbbe0e36b8547/image.png)



## 天宁岛-餐饮(二期)

### * 背景与目标

- 整合地图、糯米、美味不用等的poi基础数据和团购、买单、排号服务，打造闭环就餐体验；
- 利用sigma和天使之翼的产品形态，提升交互体验；
- 并在美食泛搜索下尝试主题推荐；

### * 完成情况
<p style="color:red">数据03-18到位.</p>



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
<p style="color:red">无更新</p>




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



