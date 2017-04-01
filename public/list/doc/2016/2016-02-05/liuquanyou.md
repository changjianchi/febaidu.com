 # 刘泉有

> 从2016-02-01到2015-02-05


## 1. 场景化出行（wise_scene_trav）

### * 背景与目标
通过时间、地点场景信息定位有出行需求的用户，展现场景化出行卡片，围绕出行需求，集合信息、交通、消费等功能，精准满足其出行需求。

### * 完成情况
- 11月26日上线。
- 实验组/对照组流量各50%，每组影响pv约3.5w/天；策略触发后，场景化卡片覆盖的pv约1w/天。
- Query=香山(天安门，故宫等)，地点策略+时间策略。
- [点这里~点这里~](https://www.baidu.com/from=844b/s?word=%E9%A6%99%E5%B1%B1&ts=0015366&t_kt=0&rsv_iqid=5504612005285293655&rsv_t=f77fpuYM6PishRuwv6A9PSlfWEsQ%252FkBKd%252FtsgBcmqwBGyhR9vBwtIJNd3A&sa=ib&ms=1&rsv_sug4=3888&ss=101&inputT=2065&sid=102251)

<span style="color:red">本周无更新</span>

<img src="img/liuquanyou/11gugong.png" width=300/>



## 2. 场景化餐饮（wise_scene_food）

### * 背景与目标
各种餐饮名店信息聚合，吃货的福利。为用户提供更便捷的餐饮搜索信息，给部分产品线导流。

### * 完成情况
- 12月1日已上线。
- 实验圈定query总 pv约3.5w/天；根据策略，卡片会在午饭和晚饭时段触发；触发后，卡片覆盖的pv约1w/天
- Query=全聚德(麻辣诱惑，海底捞等)。
- [点这里~点这里~](http://cq01-aladdin-product-05.epc.baidu.com:8003/s?word=%E6%B5%B7%E5%BA%95%E6%8D%9E&ts=2862183&t_kt=0&sa=ib&rsv_sug4=5921&inputT=4644&ss=100&cip=47.153.191.255&tn=iphone&sid=102122)

<span style="color:red">本周无更新</span>



## 3. 场景化城市（wise_scene_city）

### * 背景与目标
不同地方的用户，在搜索相同的地域Query时，需求不同；根据用户所在地，用户搜索时间等条件，判断用户搜索的真实需求，整合现有资源，为用户提供高颜值高精准度的搜索结果展现。

### * 完成情况

- Query=广州(上海，北京等)。
- [点这里~点这里~](http://cq01-aladdin-product-05.epc.baidu.com:8003/s?word=%E8%A5%BF%E5%AE%89&sa=tb&ts=7886850&t_kt=0&rsv_t=d93dQMJ8oDkEP%252FAP42XH91G2DzxGN7euopVrqPYifT3ciDlwi6TI&rsv_pq=1595416660186666569&ss=101&t_it=1&rsv_sug4=3603&inputT=1781&oq=%E9%A2%90%E5%92%8C%E5%9B%AD)

<span style="color:red">本周场景化城市新增本地出行模块，更改异地出行模块，新增旅游贴士模块，预计周天12月27零流量上线。</span>

<img src="img/liuquanyou/city.png" width=300/>

<span style="color:red">本周无更新</span>

## 4. 天宁岛-旅游

### * 背景与目标

- 以一个出行方向为基点，聚合各垂类内容，使用户更便捷获取所需信息。

### * 完成情况
- 01-29内网全流量上线。

<span style="color:red">本周部分细节调整</span>
<span style="color:red">景点跳转展开大卡新需求，模板修改已于02-04上线，需RD与odp上线方可生效。</span>


## 5. 场景化人物（wise_scene_person_kv）
从现有数据中抽象出这些趋势的一些规律，将其应用到产品设计和召回中，有效减少用户筛选成本，增加产品使用率。因此我们可以通过条件触发的sigma形式，将粉丝的各维度需求在sigma卡片上做聚合展示，让粉丝通过搜索来追星，获取明星的全面信息。
### * 背景与目标

### * 完成情况
- 本周添加微博与热门微博条数限制，已上线。
- Query=鹿晗，暂时只有鹿晗能触发，初始影响面PV=6.5W，试验期间减半。
- [点这里~点这里~](https://www.baidu.com/from=844b/s?word=%E9%B9%BF%E6%99%97&ts=9424931&t_kt=0&rsv_iqid=7099597460254613959&rsv_t=5473vbvJQ6CHpRcFDZVOcjgQ8PfD4HRnZdMdiAW4%252BJY8bnEwuCP4PPXMZA&sa=ib&ms=1&rsv_sug4=1960&ss=101&inputT=733)

<img src="img/liuquanyou/11luhan.png" width=300/>

`12.11上午沉浸式样式小流量上线，仍保持90%生效，其中10%生效人群识别策略，覆盖人数12人，影响面150w/天`

<span style="color:red">本周无更新</span>


## 6. 擎天柱项目article公共组件开发

### * 背景与目标

提高代码复用性于开发效率。

### * 完成情况

- 同步已完成，在根据需求迭代

<span style="color:red">本周添加sto日志参数，及其他细节调整,已上线</span>


## 开发痛点&吐槽

1. langbo：Js拼链接不得不用form，目前跳转的都需要走m.baidu的代理，需要有di和sec，但是局限性比较大；并且js如果还要根据情况来拼接的话 不得不用form来跳转，比较麻烦。
2. langbo：手百浮层点击穿透的bug。
3. quanyou：手百就是个IE6！！！还有那搜索框新头部，各种姿势的展开，唯一答案的背景图可以背挤成各种BUG，得想个好的解决办法。
4. liangbo：脱离c-container手百BUG会很多。
5. lingjuan：不紧急的项目催着FE紧急处理，后又其他地方耽搁了。
6. jialong：出了UE图后才给排期。解决：FE得根据UE图来评估时间，给出排期。
7. lixiao：PM沟通xml验证不通过。  解决：前期得教会PM如何查找问题。
8. xiaowu: Bscroll得传一个class字符串，解决：现已传为节点。
9.quanyou:新TIMG规范异步拼接图片的src链接不能是https来源的。短线方案：后端从AE走一个分支，所有图片都不转https。长线方案：后端传新参数，前端拼接即可。
10.quanyou: 一些泛域名在沙盒上不能正常转换为https的请求链接。解决：在新平台上没有此类问题,新上线流程也无沙盒。
11.quanyou:手百中首页或者结果页中搜索query的导航条加载后消失。解决：手百会验证如果不是结果页就会隐藏导航条，由于搜索结果中image模板图片链接问题导致,所以在wise开发过程中小伙伴要主要链接302的问题。