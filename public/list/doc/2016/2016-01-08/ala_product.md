# 【阿拉丁产品方向周报】

> 2015.1.4 - 2015.1.8

产品方向主要在做的事情是创新2号项目,创新3号项目,天使之羽翼,擎天柱-模板组件化,其他项目

## 创新2号项目

### 背景

* 2号项目的期望是在满足用户主需求的情况下,激发用户的额外需求.,是横向的扩展,猜测并提供用户可能感兴趣的内容
* 目前正在进行的2号项目有  
天气(朱雷),  
诗词(玲娟),  
spo(问答,朱雷+玲娟),  
解梦(小晴),  
违章(王培),  
限行(玲娟),  
音乐(李佳隆)  

<img src="../2016-01-08/img/wangpei07/wp0801.jpg" width="350px">
<img src="img/lijialong01/img1.png" width="300px"/>
<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/1f02fc548e0d7569e9bb8a99f4cb72b5/968fbfe970aef605856018e12c01683b.PNG" width="300px"/>

### 本周进展

### 1.谢玲娟-春运火车票

### 项目背景
针对用户搜从A地到B地的火车票，给出对应日期和车型的车次列表。同时推荐沿途风景、旅行必备、途经景点的相关推荐。

### 完成情况

1.6上线小流量。pv10w。sid=101486

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/1f02fc548e0d7569e9bb8a99f4cb72b5/968fbfe970aef605856018e12c01683b.PNG" width="300px"/>

### 其他项目开发中

## 创新3号项目

### 背景

* 根据用户的query,尽可能多的提供与query相关的内容,让用户在搜索结果中能找到他需要的信息,在页面上待的时间更久.是纵向的或扩展信息

* 目前3号项目有,场景化人物,餐饮,景点,城市（开发完成以上线）/  大学,菜谱,银行（还没开始）

<img src="img/liuquanyou/11gugong.png" width=300/>
<img src="img/liuquanyou/city.png" width=300/>
<img src="img/liuquanyou/11luhan.png" width=300/>
<img width="300" src="../2015-12-31/img/liuquanyou/11canyin.png">



### 1.场景化餐饮(泉有)

###  背景与目标

各种餐饮名店信息聚合，吃货的福利。为用户提供更便捷的餐饮搜索信息，给部分产品线导流。

### 最新进展

景点更改为最新UE规范



### 2.粉丝场景化(李晓)

### 背景

* 为更好地支持场景化的触发，方便pm更快铺量更好干预，与后端rd统一商定迁移为mini机制

* 为更好地视觉体验，新增沉浸式样式

* 为支持团购商品需求——电影《老炮儿》首映礼票务团购，模板需增加活动区域模块

### 最新进展

* <span style="color:red">2016年奥运会采用kv形式复用该模板，调整kv模式下子卡与mini数据格式统一，01.08号模板上线</span>
* query:鹿晗，迪丽热巴，杨洋，郑爽，李易峰，杨幂
* 线上效果: [吴亦凡](https://www.baidu.com/ssid=8a3d73746172c3f7d0c773746172fc4b/from=844b/s?word=%E5%90%B4%E4%BA%A6%E5%87%A1&sa=tb&ts=8665908&t_kt=0&ms=1&rsv_pq=6932049557572375983&ss=101&t_it=1&rsv_sug4=3221&inputT=2313&oq=%E7%8E%8B%E6%BA%90)
* 效果截图
<img width="300" src="img/lixiao12/01.png">



## 3.场景化城市（李晓）

### 背景与目标
不同地方的用户，在搜索相同的地域Query时，需求不同；根据用户所在地，用户搜索时间等条件，判断用户搜索的真实需求，整合现有资源，为用户提供高颜值高精准度的搜索结果展现；

城市场景化将于1231前需扩招至100个城市，影响面增至50w左右。

### 完成情况

* <span style="color:red">新增头卡迭代样式（需实验），01.08号模板上线</span>

* <img src="img/liuquanyou/city.png" width=300/>

* 线上效果 [上海](https://m.baidu.com/s?word=%E4%B8%8A%E6%B5%B7&sid=102122#|ala_scene_h=0_1)



## 3. 天使之翼项目 - superframe

### 背景

* 目的希望以新的交互方式,展现形式使得结果页可以提供更多内容,不必跳转3方页面,让用户在页面上待的时间更长.目前实现的框架是superframe,在结果页弹中间页的形式
* 目前有的天使之翼项目只有小武的商品[连衣裙](https://m.baidu.com/s?word=连衣裙&tn=iphone)

<img src="img/lijialong01/img2.png" width=300/>

## 最新进度

暂无更新

## 目前使用`superframe`会遇到的一些技术难点：

> 阿拉丁统一接口人 @xieyaowu

* `tc`跳转链接 - 已有解决方案
* `webb`行为日志 - 已有解决方案，已通知`www`组优化接口和文档
* 交互日志 - 待沟通
* 数据共享 - 已有解决方案
* `amdjs`路径映射 - 已有解决方案
* `promise`的使用 - 已有解决方案


## 4.组件

* 擎天柱-模板组件化
* 分享组件-朱雷

## 4.1 擎天柱-模板组件化

### 背景和目标

* 在2号.3号项目中有非常多相似的模块,故抽离出模板代码为模板组件,由数据来控制展现.目的是覆盖70%左右的需求,快速开发.节省开发成本  
* 目前在开发的组件有 super_imglist滑动图片列表 super_article  左图右文  headinfo 头图

### 完成情况

* 浪波,小晴,泉有,李晓,李佳隆重新梳理了开发规范,统一了数据接口.为了更好的扩展性以及同步异步调用的统一,js代码重构为require模块,[文档](http://sfe.baidu.com/#/阿拉丁/无线网页搜索/开发规范/阿拉丁擎天柱项目开发规范)

* 同步组件基本完成开发,目前可以在平台使用了,为线下调用,充分测试后,下周会上线

* 异步组件,开发中


## 4.2 朱雷-分享组件

### 背景

目前wise上的分享组件无法自定义分享信息，且存在一些过时的分享社区，例如开心网等，所以本次我重构了分享组件，支持分享到QQ空间和新浪微博，也支持使用者自定义分享面板的功能。

### 最新进度

增加了在手百上调起native app的分享，目前QA已经完成测试，正在修复bug中

## 5.其他上线项目
## 5.1 刘玲玲-wise途虎汽车样式调整

### 进展情况

周四（2016年1月7号）上线完成

### 效果截图

<img width="300" src="img/v_liulingling/tuhu.png">

## 招聘中间页 首页开发(wise)

### 进展情况

开发完成，今天上线！
测试机地址：http://dbl-aladdin-product-09.epc.baidu.com:8888/m

## 5.2 李阳阳-【WISE影视sigma迭代优化】糯米运营热映卡片

### 背景

针对已经上线的糯米正在热映的运营卡片，需要FE进行优化，优化点在这里详述，希望本周内可以优化上线：
①schema整体结构优化，补充说明，方便后续PM手动填写
②白卡样式补充，补充一个简版样式的白卡

### 完成情况：
1月4号上线，电影query="小门神"上线,kv30w

<img width="300" src="img/lijialong01/img3.png">



# 整体汇总

##	2号项目-音乐

### 背景

2号项目的意义是在满足用户主需求的情况下,激发用户的额外需求.
在满足用户单曲精确查找的需求基础上，充分利用搜索结果的后面点击率较少的区域，激发用户在音乐上的需求。  
Query示例：小幸运（只有一位歌手唱过）  
依赖张靓颖（精准明确歌手与歌曲）  
影响面：首先针对可以在线播放的百度音乐资源的，排在首位的资源。  
初步按照圈定歌曲的方式，小流量测试10w/day  
全量约25w/day  

### 完成情况

* 音乐播放的核心功能线下跑通了.
* 1.7日ue稿才定稿,1.7日晚上rd给出了主卡环境与主卡数据,相关推荐数据还没有.delay了2天,1.8日会重新和pm,rd确认排期

### 效果图

<img src="img/lijialong01/img1.png" width="300px"/>

## 擎天柱-imglist组件开发

### 背景

在场景化,2号项目中有非常多相似的模块,故抽离出模板代码为模板组件,由数据来控制展现.节省开发成本  

### 完成情况

生成相应开发规范:http://sfe.baidu.com/#/阿拉丁/无线网页搜索/开发规范/阿拉丁擎天柱项目开发规范

本周多方寻求意见，咨询了大仙、威风、王芃，并进行了组内的评审。虽上述规范有扩展性和维护性的问题，不过贴近产品需求形态和实际

图片list、sigma头图、左图右文已经按照规范生成，并投入使用，后续会持续优化和迭代

为了更好的扩展性以及同步异步调用的统一,js代码重写为require模块,进一步调整了数据接口,统一模板组件开发规范
目前可以在平台使用了,为线下调用,下周会上线

开发完，待上线，后续会持续优化和迭代

使用文档: [http://sfe.baidu.com/#/阿拉丁/无线网页搜索/开发规范/擎天柱-headinfo模板组件](http://sfe.baidu.com/#/阿拉丁/无线网页搜索/开发规范/擎天柱-headinfo模板组件)

## 歌词、歌词反查、火车票模板统计优化

### 进展

对已有模板的统计进行细分，便于数据分析；1月8号修改完成并上线

## 1. 场景化出行（wise_scene_trav）

### * 背景与目标
通过时间、地点场景信息定位有出行需求的用户，展现场景化出行卡片，围绕出行需求，集合信息、交通、消费等功能，精准满足其出行需求。

### * 完成情况
- 11月26日上线。
- 实验组/对照组流量各50%，每组影响pv约3.5w/天；策略触发后，场景化卡片覆盖的pv约1w/天。
- Query=香山(天安门，故宫等)，地点策略+时间策略。
- [点这里~点这里~](https://www.baidu.com/from=844b/s?word=%E9%A6%99%E5%B1%B1&ts=0015366&t_kt=0&rsv_iqid=5504612005285293655&rsv_t=f77fpuYM6PishRuwv6A9PSlfWEsQ%252FkBKd%252FtsgBcmqwBGyhR9vBwtIJNd3A&sa=ib&ms=1&rsv_sug4=3888&ss=101&inputT=2065&sid=102251)

<img src="img/liuquanyou/11gugong.png" width=300/>

<span style="color:red">更改样式为最新规范</span>

## 2. 场景化餐饮（wise_scene_food）

### * 背景与目标
各种餐饮名店信息聚合，吃货的福利。为用户提供更便捷的餐饮搜索信息，给部分产品线导流。

### * 完成情况
- 12月1日已上线。
- 实验圈定query总 pv约3.5w/天；根据策略，卡片会在午饭和晚饭时段触发；触发后，卡片覆盖的pv约1w/天
- Query=全聚德(麻辣诱惑，海底捞等)。
- [点这里~点这里~](http://cq01-aladdin-product-05.epc.baidu.com:8003/s?word=%E6%B5%B7%E5%BA%95%E6%8D%9E&ts=2862183&t_kt=0&sa=ib&rsv_sug4=5921&inputT=4644&ss=100&cip=47.153.191.255&tn=iphone&sid=102122)

<span style="color:red">更改样式为最新规范</span>



## 3. 场景化城市（wise_scene_city）

### * 背景与目标
不同地方的用户，在搜索相同的地域Query时，需求不同；根据用户所在地，用户搜索时间等条件，判断用户搜索的真实需求，整合现有资源，为用户提供高颜值高精准度的搜索结果展现。

### * 完成情况

- Query=广州(上海，北京等)。
- [点这里~点这里~](http://cq01-aladdin-product-05.epc.baidu.com:8003/s?word=%E8%A5%BF%E5%AE%89&sa=tb&ts=7886850&t_kt=0&rsv_t=d93dQMJ8oDkEP%252FAP42XH91G2DzxGN7euopVrqPYifT3ciDlwi6TI&rsv_pq=1595416660186666569&ss=101&t_it=1&rsv_sug4=3603&inputT=1781&oq=%E9%A2%90%E5%92%8C%E5%9B%AD)

<span style="color:red">本周场景化城市新增本地出行模块，更改异地出行模块，新增旅游贴士模块，预计周天12月27零流量上线。</span>

<img src="img/liuquanyou/city.png" width=300/>

<span style="color:red">已转李晓妹纸跟进。</span>

## 4. 自由产品出图

### * 背景与目标
以上五个模板增加出图样式。

### * 完成情况
- 本周完成测试，于12月16日小流量上线知道类模板(www_zhidao_normal, zhidao, wenda)
- 总计PV 3000W+
- Query=自动咖啡机(水星无线路由器设置，高通骁龙等)。
- [点这里~点这里~](https://www.baidu.com/s?word=%E9%87%91%E6%9E%97%E9%92%A3%E9%87%91%E6%89%8B%E6%9C%BA%E7%89%88&sid=102423)

<span style="color:red">本周无更新</span>


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



## 6. 场景化大学（wise_scene_colleges）

### * 背景与目标
根据不同用户群体，不同地域，给用户提供不同高校信息的聚合展示。
### * 完成情况

<span style="color:red">本周无更新</span>


## 7. 擎天柱项目article公共组件开发

### * 背景与目标

提高代码复用性于开发效率。

### * 完成情况

- 已完成

## 1、旅游 - 城市卡片优化

### 背景

* 原城市卡片样式升级改版，介入更多资源方扩大召回

### 完成情况

* 升级模板wise_city_travel，11.27日模板上线，全量影响面约200W，

* 12/7下午小流量上线，小流量周期为12/7-12/16，实验组（5%）：对照组（5%），小流量前三天固定第三位，三天后放开点调。

* <span style="color:red">实验结论正向</span>

### 覆盖query

* 国内外城市

### 线上效果

* [北京旅游](https://m.baidu.com/ssid=c1c6737465706879777531313235e339/from=844b/s?word=%E5%8C%97%E4%BA%AC%E6%97%85%E6%B8%B8&sid=102393)

### 效果截图

<img width="300" src="img/lixiao12/travel_02.png">

### 后续计划

* 细分强弱样式，根据query点击调权的展现位置，触发不同的强弱样式形态。

## 2、3号项目 - 粉丝场景化

### 背景

* 为更好地支持场景化的触发，方便pm更快铺量更好干预，与后端rd统一商定迁移为mini机制

* 为更好地视觉体验，新增沉浸式样式

* 为支持团购商品需求——电影《老炮儿》首映礼票务团购，模板需增加活动区域模块

### 完成情况

* 升级模板wise_scene_person_kv，12.02日模板上线，12.04日数据切换为mini机制，影响面约125W;

* 沉浸式样式升级，并支持头部颜色可配置,12.10日模板已上线

* 头部文字描述支持可跳转，增加活动区域入口；增加活动区域模块，12.11日模板上线

* 12.11上午沉浸式样式小流量上线，仍保持90%生效，其中10%生效人群识别策略，覆盖人数12人，影响面150w/天

* 增加图片模块，12.25日模板上线

* 粉丝场景化将于1231前需扩招至60人，影响面增至400w左右

* <span style="color:red">2016年奥运会采用kv形式复用该模板，调整kv模式下子卡与mini数据格式统一，01.08号模板上线</span>

### 覆盖query

* 鹿晗，迪丽热巴，杨洋，郑爽，李易峰，杨幂

### 线上效果

* [吴亦凡](https://www.baidu.com/ssid=8a3d73746172c3f7d0c773746172fc4b/from=844b/s?word=%E5%90%B4%E4%BA%A6%E5%87%A1&sa=tb&ts=8665908&t_kt=0&ms=1&rsv_pq=6932049557572375983&ss=101&t_it=1&rsv_sug4=3221&inputT=2313&oq=%E7%8E%8B%E6%BA%90)

### 效果截图

* 唯一答案

<img width="300" src="img/lixiao12/01.png">

## 3. 3号项目 - 场景化城市（wise_scene_city）

### 背景与目标
不同地方的用户，在搜索相同的地域Query时，需求不同；根据用户所在地，用户搜索时间等条件，判断用户搜索的真实需求，整合现有资源，为用户提供高颜值高精准度的搜索结果展现；

城市场景化将于1231前需扩招至100个城市，影响面增至50w左右。

### 完成情况

- 为铺量做如下修改，模板已于12.30日上线,pm已确认100个城市，1231日外网开放90%流量，影响面增至50w左右,

- 新增本地出行模块、旅游贴士模块；

- 更改异地出行模块、经典行程模块；

- 本地生活/出行锦囊部分四个功能时，修复图标过大问题；

- 不可错过模块tab等分；

- 展开缩起栏的文案调整；

- 本地场景下，底部栏高度往上提一点，确保不展示新闻最后一条的分割线；

- 本地生活&出行锦囊处的icon透明度按照设计稿标注来调整透明度；

- 旅游攻略模块，当展示的字段为路线内容时，不展示行程宽松，出行人数等字段，只展示行程名称和摘要字段;

- 10%流量显示全卡，按照rd春博给出的字段，添加是否显示全卡策略.

- <span style="color:red">新增头卡迭代样式（需实验），01.08号模板上线</span>

<img src="img/liuquanyou/city.png" width=300/>

### 线上效果

* [上海](https://m.baidu.com/s?word=%E4%B8%8A%E6%B5%B7&sid=102122#|ala_scene_h=0_1)

## 星座运势卡

### 背景与目标

将原有星座运势阿拉丁卡片改为sigma形式，线上卡片虽为用户展示了较全的运势信息，但月和年运势用户需求不大，无必要展示，用户在运势中，需求强度为：今日运势>明日运势>本周运势，而该3个运势占比80%。期望对卡片升级以进一步提高星座类需求的流量激发、颜值以及体验提升、以及进一步的搜索动机激活。

### 完成情况

模板已在 `1月7日`完成，预览地址：[巨蟹座](https://wwwhttps.baidu.com/s?dev_workspace=platform&dev_tpl=wise_fortune&tn=iphone&sid=99999&dev_online=0&dev_module=aladdin-wise&dev_file=default.xml&dev_fileformat=xml&dev_pos=asResult&wd=%E5%B7%A8%E8%9F%B9%E5%BA%A7&word=%E5%B7%A8%E8%9F%B9%E5%BA%A7)

### 效果截图

sigma效果

![](img/v_changjianchi/xz.png)

## 生肖首页

### 背景与目标

目前无生肖阿拉丁产品，在做竞品分析中，其他搜索产品能对生肖内容有特型展现来满足用户需求；在年底年初之际，用户对生肖query需求较高，所以需生肖卡片，满足这部分用户需求。

根据用户query分析，这部分用户搜索需求主要停留在十二生肖，xx属相，xx属相xx年运势，xx属与xx相配

`这里只展现生肖首页模板，运势不展现`

### 完成情况

`sigma` 和 `白卡` 已通过测试，`生肖运势卡` 有细微调整, `1月7日` 调整完毕，效果确认。正在走单ing...

## pm2.5 (模板delay)

### 背景与目标

目前线上pm2.5卡片内容过于单一，样式不够优美，需要对卡片进行优化，增加更多信息，丰富卡片内容

### 完成情况

pm2.5 `delay` 预期 `1月12日` 开始做，但是中间要插入 `度秘` 项目，可能要 `delay` 1~2天。`保丹-pm` 要疯了~~~

## wise途虎汽车样式调整

### 进展情况

周四（2016年1月7号）上线完成

### 效果截图

<img width="300" src="img/v_liulingling/tuhu.png">

## 招聘中间页 首页开发(wise)

### 进展情况

开发完成，今天上线（根磊操作上线）！
测试机地址：http://dbl-aladdin-product-09.epc.baidu.com:8888/


## 本周跟进

- 【WISE影视sigma迭代优化】糯米运营热映卡片

## 老炮儿线上样式的服用以及白卡样式的修改优化

### 背景与目标

针对已经上线的糯米正在热映的运营卡片，进行优化，优化点在这里详述：
①schema整体结构优化，补充说明，方便后续PM手动填写
②白卡样式补充，补充一个简版样式的白卡


### 完成情况

- PV：30w

- 状态：4号的时候模板上线，线上query='<a href="https://m.baidu.com/pu=sz%401320_2001/s?word=%E5%B0%8F%E9%97%A8%E7%A5%9E&ts=9919309&t_kt=0&ie=utf-8&rsv_iqid=2118562287703335833&rsv_t=a47dSjw%252B1jRYovXoo3ocDC%252B7QxUEq6XVHLBYIgBWroPVxoLNJKjJ&sa=ib&rsv_pq=2118562287703335833&rsv_sug4=3971&ss=101&inputT=1251">小门神</a>'

### 效果图

<table algin="center">
<tr>
<td>新增的白卡样式：</td>
</tr>
<tr>
<td><img src="../2016-01-08/img/v_liyangyang01/baika.JPG" width="358px"></td>
</tr>
<tr>
<td>sigma卡截图：</td>
</tr>
<tr>
<td><img src="../2016-01-08/img/v_liyangyang01/sigmaka.JPG" width="275px"></td>
</tr>
</table>


## 企业异常名录模板（无更新）
### 背景与目标

背景：百度政务之窗一期-政务寻址卡片同北京工商局合作初见成效，现同工商局达成进一步合作，从工商局获得一批北京市企业经营异常名录，可复用线上失信人模板展示这批数据。

<p> 完成情况</p>

唯一答案卡和白卡，这周处理了一些里边存在的样式和功能上的问题，其他的无进展

搜具体公司名称的卡片，已准备好，等待数据好了，可以上线

<p> 唯一答案卡效果截图</p>

<p>开始搜‘北京市企业异常名录查询’出现<p>
<img width="322" src="img/v_liyangyang01/trust1.png">
<p>点击：如何移出企业经营异常名录？出现下图浮层：</p>
<img width="320" src="img/v_liyangyang01/trust2.png">
<p>点击每条的公司名称出现一下浮层：</p>
<img width="326" src="img/v_liyangyang01/trust3.png">
<p>点击右下角的查看更多，出现一下浮层：</p>
<img width="328" src="img/v_liyangyang01/trust4.png">

<p>白卡效果截图</p>

<p>开始搜‘北京市企业异常名录查询’出现<p>
<img width="322" src="img/v_liyangyang01/baika1.png">
<p>点击：查询：</p>
<img width="320" src="img/v_liyangyang01/baika2.png">
<p>点击每条的公司名称出现一下浮层：</p>
<img width="326" src="img/v_liyangyang01/baika3.png">
<p>点击右下角的查看更多，出现一下浮层：</p>
<img width="328" src="img/v_liyangyang01/baika4.png">

<p>精确卡</p>

<img width="322" src="img/v_liyangyang01/baika5.png">

## 手表数据watch.json.tpl文件的添加

本周处理了6个模板格式的修改

## 北京积分落户计算器

### 背景与目标

12月10日北京积分落户管理政策公布征集意见，刚发布后wise端用户的检索量一天达到十几万以上的影响面。从12月10日到31日前属于政策意见征集阶段，具有强时效性。因此政务小团队这边想针对积分落户做一个wise上的积分状态查询功能，属于临时需求。希望在本月内能借此时效性待政策先积淀用户，待政策颁布后计划将此计算器作为办事工具型产品

### 完成情况

新模板`gov_calculator`，模板开发完成，已通知ue、pm确认效果，通过后让qa测试，预计测试2天，然后上线，预计pv:12W

### 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/0c96e410190406895dc4b1a3782af065/image.png)

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/0556eaa2fea09d434034510851f64cdb/image.png)


## 完成的其他需求

* [汽车排行榜卡片升级-兼容多资源](http://icafe.baidu.com/issue/WiseAladdinTemplate-1009/)

## 正在跟进的其他需求

* [sigma_disease模板修复+增加source字段](http://icafe.baidu.com/issue/4263397/)
* 电影票sigma模板在部分iphone6+safari上有个连接错误问题
* [汽车评测卡多tab升级](http://icafe.baidu.com/issue/WiseAladdinTemplate-1011)

## 2号创新项目

### 背景

2号创新项目为百度无线搜索近期主推的方向之一，包含天气、spo等多个类目，在满足用户主需求的情况下激发用户的潜在需求。

### 进度

目前已经评审的需求有天气、诗词、spo人物、作品类问答、火车票需求，天气和spo人物都已经完成了2期开发,诗词和火车票已经上线小流量，作品类问答开始开发。

## 图片沉浸式体验（无更新）

### 背景

在用户需求明确为图片时，对该情景下的图片样式进行优化，采用唯一答案+瀑布流形式，提升用户体验。

### 完成情况

需求已评审，预计12月16日开始开发。

### 更新

由于排期问题，已经转由李晓跟进。

## 分享组件

### 背景

目前wise上的分享组件无法自定义分享信息，且存在一些过时的分享社区，例如开心网等，所以本次我重构了分享组件，支持分享到QQ空间和新浪微博，也支持使用者自定义分享面板的功能。

### 进度

增加了在手百上调起native app的分享，目前QA已经完成测试，正在修复bug中



