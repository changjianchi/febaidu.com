# 刘泉有

> 从2015-12-07到2015-12-11

## 1. 场景化出行（wise_scene_trav）

### * 背景与目标
通过时间、地点场景信息定位有出行需求的用户，展现场景化出行卡片，围绕出行需求，集合信息、交通、消费等功能，精准满足其出行需求。

### * 完成情况
- 11月26日上线。
- 实验组/对照组流量各50%，每组影响pv约3.5w/天；策略触发后，场景化卡片覆盖的pv约1w/天。
- Query=香山(天安门，故宫等)，地点策略+时间策略。
- [点这里~点这里~](https://www.baidu.com/from=844b/s?word=%E9%A6%99%E5%B1%B1&ts=0015366&t_kt=0&rsv_iqid=5504612005285293655&rsv_t=f77fpuYM6PishRuwv6A9PSlfWEsQ%252FkBKd%252FtsgBcmqwBGyhR9vBwtIJNd3A&sa=ib&ms=1&rsv_sug4=3888&ss=101&inputT=2065&sid=102251)


<img src="img/liuquanyou/11gugong.png" width=300/>

- <span style="color:red">本周出行项目完成了几次迭代，添加展开收起动画头图样式调整。</span>

## 2. 场景化餐饮（wise_scene_food）

### * 背景与目标
各种餐饮名店信息聚合，吃货的福利。为用户提供更便捷的餐饮搜索信息，给部分产品线导流。

### * 完成情况
- 12月1日已上线。
- 实验圈定query总 pv约3.5w/天；根据策略，卡片会在午饭和晚饭时段触发；触发后，卡片覆盖的pv约1w/天
- Query=全聚德(麻辣诱惑，海底捞等)。
- [点这里~点这里~](http://cq01-aladdin-product-05.epc.baidu.com:8003/s?word=%E6%B5%B7%E5%BA%95%E6%8D%9E&ts=2862183&t_kt=0&sa=ib&rsv_sug4=5921&inputT=4644&ss=100&cip=47.153.191.255&tn=iphone&sid=102122)
- <span style="color:red">本周出行项目完成了几次迭代，手百头图样式调整。</span>

<img src="img/liuquanyou/11canyin.png" width=300/>

## 3. 场景化城市（wise_scene_city）

### * 背景与目标
不同地方的用户，在搜索相同的地域Query时，需求不同；根据用户所在地，用户搜索时间等条件，判断用户搜索的真实需求，整合现有资源，为用户提供高颜值高精准度的搜索结果展现。

### * 完成情况

- <span style="color:red">12月9日开发完成，12月10日联调。12月11日QA介入测试，下周一12月14日上线</span>
- <span style="color:red">下周场景话本地部分完成开发测试上线.</span>

<img src="img/liuquanyou/city.png" width=300/>


## 4. 自由产品出图（zhidao,zhidaoala,wenku,wenkuala,www_zhidao_normal）

### * 背景与目标
以上五个模板增加出图样式。

### * 完成情况
- 前端已完成。
- <span style="color:red">商业和用户空转完成</span>
- <span style="color:red">后端准备小流量上线事宜。</span>

## 5. 场景化人物（wise_scene_person_kv）
从现有数据中抽象出这些趋势的一些规律，将其应用到产品设计和召回中，有效减少用户筛选成本，增加产品使用率。因此我们可以通过条件触发的sigma形式，将粉丝的各维度需求在sigma卡片上做聚合展示，让粉丝通过搜索来追星，获取明星的全面信息。
### * 背景与目标

### * 完成情况
- 本周添加微博与热门微博条数限制，已上线。
- Query=鹿晗，暂时只有鹿晗能触发，初始影响面PV=6.5W，试验期间减半。
- [点这里~点这里~](https://www.baidu.com/from=844b/s?word=%E9%B9%BF%E6%99%97&ts=9424931&t_kt=0&rsv_iqid=7099597460254613959&rsv_t=5473vbvJQ6CHpRcFDZVOcjgQ8PfD4HRnZdMdiAW4%252BJY8bnEwuCP4PPXMZA&sa=ib&ms=1&rsv_sug4=1960&ss=101&inputT=733)

<img src="img/liuquanyou/11luhan.png" width=300/>

- <span style="color:red">本周未更新。</span>
- <span style="color:red">该项目已转李晓跟进。</span>

## 6. 场景化大学（wise_scene_colleges）

### * 背景与目标
根据不同用户群体，不同地域，给用户提供不同高校信息的聚合展示。
### * 完成情况

- <span style="color:red">后端数据准备中。</span>


## 7. 场景化展开收起动画

### * 背景与目标

由于前几个场景化上线紧急，展开收起暂无动画，觉得交互不太友好，计划为展开收起加一个交互动画，提高用户体验。

### * 完成情况

- 以出几版DEMO，已www童鞋商议，在安卓或低版本ios中，表现一版，可选择google的策略，只有高端机型开启动画，其余不开。

## 8. 下周计划

1. 场景化城市本地卡片开发，联调，测试，上线。
2. 场景化出行，场景化餐饮，场景化异地卡片城市迭代。
3. 动画迭代。

## 想法
- 有些方法不要想着趋于完美了再去实施，完美的东西都有一个迭代的过程。

## 开发痛点&吐槽
- langbo：Js拼链接不得不用form，目前跳转的都需要走m.baidu的代理，需要有di和sec，但是局限性比较大；并且js如果还要根据情况来拼接的话 不得不用form来跳转，比较麻烦。
- langbo：手百浮层点击穿透的bug。
- liuquanyou：手百就是个IE6！！！还有那搜索框新头部，各种姿势的展开，唯一答案的背景图可以背挤成各种BUG，得想个好的解决办法。


