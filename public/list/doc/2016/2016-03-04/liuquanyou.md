# 刘泉有

> 从2016-02-29到2015-03-04

## 1. 天宁岛-旅游

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

<p style="color:red">哥伦布旅游迁移bdscroll</p>

- 近期计划: 城市/景区扩量和增加Query变换

<img src="img/liuquanyou/wz1.png" width=300/>
<br/>
<img src="img/liuquanyou/wz2.png" width=300/>
<br/>
<img src="img/liuquanyou/wz3.png" width=300/>

## 2. 周边游

### * 背景与目标

- 由于用户对周边出行呈迅猛增长的势头,且现有市场各竞品并没有明显优势来满足对于用户所需信息。

### * 完成情况
- 02-24第一次评审,细节PM与UE商定.
<p style="color:red">暂无更新</p>

## 3. 景点二期

### * 背景与目标

- 通过对现有子卡的设计优化,结构重组和增加新子卡,提升用户体验,适配进一步扩招.

### * 完成情况
- 02-24第一次评审
<p style="color:red">暂时PM与UE在更改展现细节,预计下周开始开发</p>

## 4. 场景化景点（wise_scene_trav）

### * 背景与目标
通过时间、地点场景信息定位有出行需求的用户，展现场景化出行卡片，围绕出行需求，集合信息、交通、消费等功能，精准满足其出行需求。

### * 完成情况
- 11月26日上线。
- 约200个景点,pv约3.5w/天；策略触发后，场景化卡片覆盖的pv约1w/天。
- Query=香山(天安门，故宫等)，地点策略+时间策略。
- [点这里~点这里~](https://www.baidu.com/from=844b/s?word=%E9%A6%99%E5%B1%B1&ts=0015366&t_kt=0&rsv_iqid=5504612005285293655&rsv_t=f77fpuYM6PishRuwv6A9PSlfWEsQ%252FkBKd%252FtsgBcmqwBGyhR9vBwtIJNd3A&sa=ib&ms=1&rsv_sug4=3888&ss=101&inputT=2065&sid=102251)

<span style="color:red">sigma机制首展速度体验差短线方案更改上线</span>

<img src="img/liuquanyou/11gugong.png" width=300/>
<p style="color:red">附近经典展现调整</p>

## 5. 场景化餐饮（wise_scene_food）

### * 背景与目标
各种餐饮名店信息聚合，吃货的福利。为用户提供更便捷的餐饮搜索信息，给部分产品线导流。

### * 完成情况
- 12月1日已上线。
- 实验圈定query总 pv约3.5w/天；根据策略，卡片会在午饭和晚饭时段触发；触发后，卡片覆盖的pv约1w/天
- Query=全聚德(麻辣诱惑，海底捞等)。
- [点这里~点这里~](http://cq01-aladdin-product-05.epc.baidu.com:8003/s?word=%E6%B5%B7%E5%BA%95%E6%8D%9E&ts=2862183&t_kt=0&sa=ib&rsv_sug4=5921&inputT=4644&ss=100&cip=47.153.191.255&tn=iphone&sid=102122)

<p style="color:red">暂无更新</p>



## 6. 场景化城市（wise_scene_city）

### * 背景与目标
不同地方的用户，在搜索相同的地域Query时，需求不同；根据用户所在地，用户搜索时间等条件，判断用户搜索的真实需求，整合现有资源，为用户提供高颜值高精准度的搜索结果展现。

### * 完成情况

- Query=广州(上海，北京等)。
- [点这里~点这里~](http://cq01-aladdin-product-05.epc.baidu.com:8003/s?word=%E8%A5%BF%E5%AE%89&sa=tb&ts=7886850&t_kt=0&rsv_t=d93dQMJ8oDkEP%252FAP42XH91G2DzxGN7euopVrqPYifT3ciDlwi6TI&rsv_pq=1595416660186666569&ss=101&t_it=1&rsv_sug4=3603&inputT=1781&oq=%E9%A2%90%E5%92%8C%E5%9B%AD)

<img src="img/liuquanyou/city.png" width=300/>

<p style="color:red">暂无更新</p>


## 7. 擎天柱项目article公共组件开发

### * 背景与目标

提高代码复用性于开发效率。

### * 完成情况

- 同步已完成，在根据需求迭代

<p style="color:red">暂无更新</p>

