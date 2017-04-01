# 移动生活周报

> 2016-10-15 ~ 2016-10-21

# 吃喝玩乐

### 旅游-城市 - （泉有、文宇）
#### 结果页城市卡(已全量-迭代中)
- 项目背景
当前的旅游类搜索结果页包含卡片较多，尤其是同质内容卡片使得页面结构凌乱。以景区和典型旅游城市作为试水Query，依托于场景化卡片优化搜索结果页整体效果，优化内容包括：增加特价线路子卡、百度图片子卡、相关地点推荐子卡、相关咨询子卡，同时尝试兼容广告的浅色大卡样式和自然结果融合的样式。
- 收益（总体目标）
在108城市全流量,PV120W.
- 完成情况（时间点达到的里程碑）
    7月份 在108个城市全量.
- 本周进展
    **结果页城市卡升级上线周三（10-19）10%小流量上线，日PV16W**

- 效果预览

	* 线下[天津]Sigma样式(https://cq01-ala-fe-4.epc.baidu.com:8004/s?word=%E5%A4%A9%E6%B4%A5)
	* 线下[北京]Normal样式(https://cq01-ala-fe-4.epc.baidu.com:8004/s?word=%E5%8C%97%E4%BA%AC)
- 计划
	* 依赖数据优化结果页卡片.
#### 城市收敛卡+情景页 （小流量-迭代中）
- 项目背景
    在用户搜索的 Query 为旅游弱需求 Query 时,比如安阳,天津等城市词时,在 结果页上展示城市收敛卡,并在点击收敛卡头尾部时,进入城市情景页,展示更多的 跟该城市相关的旅游内容。
- 收益（总体目标）
    提升媒体时长,提升点击率,提升生态控制力
- 完成情况（时间点达到的里程碑）
    * 项目启动：08-09
    * 项目提测：09-08
    * 小流量上线：09-20
    * 全量上线：暂无
- 本周进展
    无更新。
- 效果预览

    [淄博](https://m.baidu.com/s?word=%E6%B7%84%E5%8D%9A&sid=109912)
- 近期计划

    小流量根据数据优化卡片。收敛卡与必游景点卡合并，强样式用sigma展现。
#### 情景页tab融合-(李林，文宇) （小流量-迭代中）
- 项目背景
通栏和情景页内容不太相关，主要作为页面导航的交互功能. 通栏的交互，将触发情景页内容的异步刷新，而通栏并不随着内容刷新，有自己的刷新逻辑.
- 完成情况（时间点达到的里程碑）
    * 项目提测：09-26
    * 小流量上线：9.29
    * 全量上线：10.10
- 本周进展
    * 使用文档：[传送门](http://sfe.baidu.com:8910/aladdin/wise/jscommmon/sf2tab.md)
    * 数据具体细节&总结请见:[城市改版项目计划&总结](http://wiki.baidu.com/pages/viewpage.action?pageId=204667813)
	* <span style="color:red;">添加清除锚点功能</span>
- 效果预览
    * 线上demo:[传送门](https://m.baidu.com/sf?openapi=1&dspName=iphone&from_sf=1&pd=city&resource_id=4324&ms=1&word=%E5%8C%97%E4%BA%AC&hide=1&apitn=tangram&top=%7B%22sfhs%22%3A2%7D&ext=%7B%22sf_tab_name%22%3A%22%E6%A6%82%E8%A7%88%22%7D)
- 近期计划
    * <span style="color:red;">日志统计</span>。
### 旅游-景点 - （泉有、文宇）
#### 景点收敛卡+情景页(已全量-迭代中)
- 项目背景
针对旅游类目下的景点搜索需求，从页面整体效果上优化体验，建立更有组织的搜索结果页面.
- 收益（总体目标）
提升景点目的地搜索体验和在旅游决策中的价值,页面停留时长增加，长点击增加，
门票gmv转化率上升,PV200W.
- 本周进展
    * 无更新
- 效果&预览

    * [故宫](https://m.baidu.com/s?word=%E6%95%85%E5%AE%AB)
- 计划

    * 各子卡优化
### 旅游-酒店 - （田岳）
#### 国内酒店阿拉丁及情景页(小流量-迭代中)
- 项目背景
针对连锁品牌名（例如，锦江之星，7天，汉庭，格林豪泰等）或某一地区的酒店（例如，北京酒店预订，上海酒店预订等），对酒店的分布信息突出展现，并优化整体预订流程的体验。
- 收益
待补充
- 完成情况（时间点达到的里程碑）

    * 8月3日升级小流量.
    * 7月16日小流量上线.
    * 7月4日提测
    * 6月18日项目启动
- 本周进展
* 本周无进展
- 效果预览 [7天酒店](https://www.baidu.com/#|src_%E5%8C%97%E4%BA%AC%E9%85%92%E5%BA%97|sa_ib&sid=107894)
- 计划
计划将对情景页进行SF2.0迁移


### POI-地图 - （李林）
#### 非消费类POI阿拉丁及情景页 （小流量 - 迭代中）
- 项目背景
地图阿拉丁模板杂乱且风格不统一，信息组织不够合理，基于位置的需求引导未得到很好满足；其中非消费类POI共涉及14个模板，需要按照丰富详情、简单详情做简化和统一样式。
使用superframe技术，整合地图POI信息，自建情景页，提升满足体验。
- 收益
    * 预计影响面 1500W PV
    * 用户体验预期：长点率提升，有点率持平
- 完成情况（时间点达到的里程碑）

    * 9月30日小流量上线，sid 110242，抽样 10%
    * 9月22日公交车站阿拉丁+情景页提测
    * 9月13日非消费类阿拉丁+情景页提测
    * 8月29日项目启动
- 本周进展

    <font color=#f00 >整体小流量评估负向，正在分模板分类别深入调研，准备采用分模板上线方式逐渐全量。</font>
- 效果预览
[附近的银行](https://m.baidu.com/s?word=%E9%99%84%E8%BF%91%E7%9A%84%E9%93%B6%E8%A1%8C&sid=110242)
[五彩城购物中心](https://m.baidu.com/s?word=%E4%BA%94%E5%BD%A9%E5%9F%8E%E8%B4%AD%E7%89%A9%E4%B8%AD%E5%BF%83&sid=110242)
- 计划
    暂无计划
#### 消费类POI阿拉丁及情景页 （全流量-迭代中）
- 项目背景
地图阿拉丁模板杂乱且风格不统一，信息组织不够合理，基于位置的需求引导未得到很好满足；其中多POI共涉及11个模板，需要按照丰富详情、简单详情做简化和统一样式；
使用superframe技术，提升交互流畅度；整合地图基础信息和糯米消费服务，打造闭环消费体验；
- 收益

    * 预计影响面 600W PV
    * 用户体验预期：长点率提升，有点率持平
    * GMV提升
- 完成情况（时间点达到的里程碑）

    * 9月20日100%全流量
    * 9月13日开始全量，开放到40%
    * 8月19日小流量上线
    * 8月5日整体提测
    * 7月22日项目启动
- 本周进展
    * 无
- 效果预览
    * [附近的美食](https://m.baidu.com/s?word=%E9%99%84%E8%BF%91%E7%9A%84%E7%BE%8E%E9%A3%9F&sid=108342)
    * [金鼎轩亚运村店](https://m.baidu.com/s?word=%E9%87%91%E9%BC%8E%E8%BD%A9%E4%BA%9A%E8%BF%90%E6%9D%91%E5%BA%97&sid=108342)
- 计划
    暂无计划
### 出行 - （田岳、杨青青）
#### 公交路线查询栅格化 （***小流量***）
- 背景：将路线详情、公交查询、地铁查询等未栅格化卡片迁移栅格

- 目标收益：实现栅格化，

- 完成情况（时间点达到的里程碑）

    * 10月19日模板上线，sid=102160，srcid=46678
	* 10月13日整体提测
    * 9月30日项目启动

- 本周进展

    <font color=#f00 >10月19日模板上线,20日开放小流量</font>
- 效果预览

    * [北京公交查询](https://cp01-ala-fe-col-1.epc.baidu.com:8004/s?word=%E5%8C%97%E4%BA%AC%E5%85%AC%E4%BA%A4%E6%9F%A5%E8%AF%A2)
    * [北京地铁查询](https://cp01-ala-fe-col-1.epc.baidu.com:8004/s?word=%E5%8C%97%E4%BA%AC%E5%9C%B0%E9%93%81%E6%9F%A5%E8%AF%A2)
    * [地铁13号线](https://cp01-ala-fe-col-1.epc.baidu.com:8004/s?word=%E5%9C%B0%E9%93%8113%E5%8F%B7%E7%BA%BF)

- 计划
    * 无
#### 航班动态查询 （小流量 - 迭代中）
- 项目背景
当前线上的航班动态卡片，数据由资源方去哪儿提供，准确度不够高；此外卡片设计上，突出了起始地，预计起飞到达时间等用户更为关注的信息并没有突出；同时并没有提供值机口登机口行李转盘等乘机辅助信息；最后，关于航班更加详细的座位分布、餐食信息等需求，航班号查询背后的出行场景下其他潜在需求也没有完全满足。新设计的航班号查询哥伦布卡片，可以有效满足上述需求。
- 收益

    * 预计影响面: 10W pv
    * 用户体验指标: 需求一次被满足度提升
- 完成情况（时间点达到的里程碑）

    * 9月18日小流量上线
    * 9月12日提测
    * 8月28日项目启动
- 本周进展
    * 本周无进展
- 效果预览
模板平台 flight_info模板预览 [线下地址](http://cp01-ala-fe-col-2.epc.baidu.com:8003/s?word=CA1234&sa=tb&ts=0280854&t_kt=0&ie=utf-8&rsv_t=3c53CJ1U%252FOHPwrDr419J6QJNmuBiSt3GJda%252BSGheI9GwgEws74NE&rsv_pq=17485574154746690114&ss=100&t_it=1&rqlang=zh&rsv_sug4=3211&inputT=3207&oq=Cz3951)
- 计划
暂无计划

### 点到点出行 - （司文宇）
#### 市内和跨城市点到点推荐出行 （联调基本结束，待提测）
- 项目背景
在query为“某一个城市内的点到点”“某一个城市内的点到点+相关杂质词”下，触发该阿拉丁的展现。Query举例：“北京南站到北京西站；上海虹桥火车站去上海浦东机场怎么走；西二旗到王府井打车多少钱” 。该阿拉丁包含三张卡片，分别为地图卡，目的地卡和附近卡。其中，地图卡覆盖所有的市内点到点query。
- 收益  暂无
    * 预计影响面 暂无
    * 用户体验预期：找寻满意出行路线。

- 完成情况（时间点达到的里程碑
）
    * 10.11 前端启动，接口demo给出，数据格式给出
	* <span style="color:red;">10.17-20，联调中，UE走查完毕</span>


- 本周进展
    * 10.12 数据接口给出
	* <span style="color:red;">10.20 前端样式开发完成，UE走查完成</span>
- 效果预览
    * 平台：[从北京西站到北京南站驾车](https://wwwhttps.baidu.com/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=pp_route&dev_path=searchaladdin&dev_tpltype=default&sid=99999&dev_online=0&dev_file=default.xml&dev_fileformat=xml&dev_pos=asResult&wd=%E4%BB%8E%E5%8C%97%E4%BA%AC%E8%A5%BF%E7%AB%99%E5%88%B0%E5%8C%97%E4%BA%AC%E5%8D%97%E7%AB%99&word=%E4%BB%8E%E5%8C%97%E4%BA%AC%E8%A5%BF%E7%AB%99%E5%88%B0%E5%8C%97%E4%BA%AC%E5%8D%97%E7%AB%99)
    * 测试机: [从北京西站到北京南站](http://cp01-ala-fe-col-2.epc.baidu.com:8003/s?word=%E5%8C%97%E4%BA%AC%E8%A5%BF%E7%AB%99%E5%88%B0%E5%8C%97%E4%BA%AC%E5%8D%97%E7%AB%99&wiseus=10.99.28.16)
- 计划
    * FE：    10月10日-10月17日开发完成@文宇
    * 地图RD： 10月10日-10月14日提供联调环境@培盛
    * 后端RD： 10月17日-10月19日联调@国辉
    * QA：    10月20日测试@燕雪；
    * 人工评估：10月20日人工评估；@王者



## 生活服务 - （吴丽黎）

> 主要PV,GMV数据

### 生活服务 - GMV （吴丽黎）
#### 糯米-tp (联调中)

- 项目背景
为更好的满足用户生活服务相关的需求，以tp的形式接入相关服务资源方，为用户直接高质量的上门服务

- 收益（总体目标）

暂无

- 完成情况（时间点达到的里程碑）

   * 启动时间: 10月17日
   * 提测时间: 因rd请假无人联调，21日联调，预计21日提测
   * 小流量上线时间:
   * 全量时间点、PV值
   * 扩量时间点、PV值
   * 增加新卡上线时间点：模板=rota_tp，资源id=4348。

- 本周进展

	<font color=#f00 size=3>10月17日模板开发完毕</font>
	<font color=#f00 size=3>10月21日联调</font>

- 效果预览 [北京挂机空调清洗](http://cp01-ala-fe-col-2.epc.baidu.com:8003/s?word=%E5%8C%97%E4%BA%AC%E6%8C%82%E6%9C%BA%E7%A9%BA%E8%B0%83%E6%B8%85%E6%B4%97&wiseus=10.103.62.33)

- 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/21e0f797b37fed6fa533dba9df2d7e61/image.png)
- 计划
暂无后续计划。
### 生活服务 - 政务 （吴丽黎）
#### 政务指南-法律知道(已上线)

- 项目背景
知道卡片：现在的知道卡片在政务层面没有做到地域、进一步识别，故在政务层面进行地域识别

- 收益（总体目标）
PV4W.

- 完成情况（时间点达到的里程碑）

   * 启动时间: 8月17日
   * 提测时间: 9月13日
   * 小流量上线时间: 9月23日
   * 全量时间点、PV值
   * 扩量时间点、PV值
   * 增加新卡上线时间点：9月23日，模板=rota_zhidao，sid=102160，资源id=31876。

- 本周进展

   无进展
- 效果预览 [广州结婚证办理流程是什么](https://m.baidu.com/ssid=074ccdf5b6a1c2fad4dacef7b0b2ef51/s?word=%E8%A1%A5%E5%8A%9E%E8%BA%AB%E4%BB%BD%E8%AF%81%E9%9C%80%E8%A6%81%E4%BB%80%E4%B9%88%E6%89%8B%E7%BB%AD&sid=102160)

- 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/d26fe294996d48030f41a6790ad5ff08/image.png)
- 计划
暂无后续计划。

### 生活服务 - GMV （吴丽黎）
#### 手机及流量充值卡片(提测中)

- 项目背景
线上充值业务资源方为钱包，针对非钱包用户体验较差（需绑定钱包银行卡后方可充值），需进行优化。

-  收益（总体目标）
PV2W

- 完成情况（时间点达到的里程碑）

   * 启动时间: 16年9月21日
   * 提测时间: 10月13日，QA 14日下午才有人力跟进
   * 小流量上线时间:
   * 全量时间点、PV值
   * 扩量时间点、PV值
   * 增加新卡上线时间点：模板=rotarecharge，sid=102160，资源id=31876。

- 本周进展
   * 排期：16年9月21日-9月23日，3个工作日，26日-28日联调。
   * <font color=#f00 size=3>测试时长增加的原因：糯米下单数据不全，导致无法正常跑完整个流程</font>
   * <font color=#f00 size=3>10月19日下午会面，因糯米不能同时提供手机充值和流量充值的链接，模板需求方案变更</font>
   * <font color=#f00 size=3>10月20日按新需求迭代代码，实现默认面额不匹配高亮的处理，手机号验证的优化、以及tab隐藏</font>
   * 功能自测，代码优化，bug修复
   * 因糯米接口没有符合jsonp以及下单页没有开发完成导致联调延期 ， 10月12日列表接口调通，下单页手机充值50元的调通【其他面额暂时没有下单信息】）

- 效果预览 [话费充值](https://wwwhttps.baidu.com/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=rotarecharge&dev_path=searchaladdin&dev_tpltype=default&sid=99999&dev_online=0&dev_file=default.xml&dev_fileformat=xml&dev_pos=asResult&wd=%E8%AF%9D%E8%B4%B9%E5%85%85%E5%80%BC&word=%E8%AF%9D%E8%B4%B9%E5%85%85%E5%80%BC&uid=1474551544488_100&ssid=aa25f62fd955fae2fb44bff9b1bf95ac.3.1474551585.1.mKjE0NzlabVk)

- 效果图  ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/ab45eb6f5658af1ae0616ec6eaec64c6/image.png)

### 移动生活服务   政务公积金自然结果聚簇开发 【项目暂时暂停】
-
 背景
mrd没有提供，暂无

- 完成情况
	* 启动时间: 7月25日
  	* 提测时间: 7月25日
   	* 小流量上线时间:
   	* 全量时间点、PV值
   	* 扩量时间点、PV值
   	* 增加新卡上线时间点：模板=rota_normal

- 本周进展
无进展

- 效果预览 [北京公积金](http://cp01-ala-fe-col-2.epc.baidu.com:8003/s?word=%E6%B7%B1%E5%9C%B3%E5%85%AC%E7%A7%AF%E9%87%91%E6%8F%90%E5%8F%96&wiseus=10.92.75.16)

- 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/8249b7c51beee35ef14fa832fb4661c8/image.png)

## 音乐人物 - （吴丽黎）

#### 新星平台-小鲜肉(已上线-全量)
- 项目背景
百度搜索与10位刚刚出道，配合度高，微博粉丝活度强的男明星合作搜索结果页。
- 收益（总体目标）
PV4W
- 完成情况（时间点达到的里程碑）
* 启动时间: 16年7月28日
* 提测时间: 9月29日
* 小流量上线时间:
* 全量时间点、PV值：9月14日，4w pv
* 扩量时间点、PV值
* 增加新卡上线时间点：模板=fresh_man，资源id=31639；card模板=fresh_man，资源id=31639。
- 本周进展
无更新
- 效果预览 [刘昊然](https://m.baidu.com/s?word=%E5%88%98%E6%98%8A%E7%84%B6)

- 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/a9c5b9204127f757f81b521fdcef05d9/image.png)
- 计划
收益正向陆续放开帮他成名、他的热度页面内容。

## 娱乐八卦 （吴丽黎）
### 八卦人物 （走单中）
- 项目背景
八卦阿拉丁已在人物query下小流量实验，用户体验略正，并能有效提升用户媒体时长与搜索生态控制力，符合哥伦布宏观目标，需尽快退全上线。
- 收益
* 预计影响面 ：根据小流量实验表现，用户媒体时长相对增加3.01%，生态控制力相对增加 4.28%，预计优化pv1000w。
- 完成情况（时间点达到的里程碑）
* 启动时间: 16年9月18日
* 提测时间: 9月20日
* 小流量上线时间:
* 全量时间点、PV值：
* 扩量时间点、PV值：
- 本周进展
 相关性问题的比例有下降导致走单时长增加
 计划下周上线

- 效果预览 [赵丽颖](https://wwwhttps.baidu.com/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=general_person_relate&dev_path=searchaladdin&dev_tpltype=default&sid=99999_108405&dev_online=1&wd=%E8%B5%B5%E4%B8%BD%E9%A2%96&word=%E8%B5%B5%E4%B8%BD%E9%A2%96)
- 效果图
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/46a1562389ac14544f46a784d40745d4/image.png)
- 计划
## 人物特型 - （吴丽黎 饶少艳）
### 角色人物 （吴丽黎 饶少艳）
#### 角色人物卡 （已上线）
- 项目背景
在电视剧热映期间，剧中相关的角色人物流量增加，并且用户会将关注点集中在角色人物结局、关系等问题上，通过使用百科、知道数据，联合投票运营，满足用户对于热映角色的搜索需求。
- 收益
* 预计影响面 ：
峰值60w/day
平均40w/day
- 完成情况（时间点达到的里程碑）
* 启动时间: 16年9月08日
* 提测时间: 9月19日
* 小流量上线时间: 9月29日
* 全量时间点、PV值：50w/day
* 扩量时间点、PV值：
* 小流量pv值：4w/day
* 增加新卡上线时间点：9月28日，模板=role_info，资源id=31919，sid=110325，饰演者百科卡：id=32154，热门剧情卡：id=32152。
- 本周进展
本周无进展
* 9月13日开发完成角色人物介绍卡
* 9月13日rota_wenshu模板复用迭代完毕，9月18、19日联调完毕（数据准备慢）
* 9月19日提测
- 效果预览  [苏三省](https://m.baidu.com/s?word=%E8%8B%8F%E4%B8%89%E7%9C%81&sid=102160)

- 效果图

 ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/d5ca775eaeb4cb91ac468003d65f4b1b/image.png)
- 计划
### 历史人物 （饶少艳）
#### 历史人物传闻卡 （小流量-迭代中）
- 项目背景
例如q=康熙，乾隆等，搜索结果中用户针对其历史故事、人物评价、传闻轶事都有一定的需求，故设计历史人物卡片，引导用户进行人物传闻分析。
- 收益
* 预计影响面：
全量：100w/day；
小流量试验：30w/day；
对照组，实验组各15w/day。
* 目前无小流量试验收益情况，本周给出结论。
- 完成情况（时间点达到的里程碑）
* 启动时间: 16年8月29日
* 提测时间: 9月02日
* 小流量上线时间: 9月06日
* 全量时间点、PV值：
* 扩量时间点、PV值：
* 增加新卡上线时间点：模板=per_hist，资源id=31844。
- 本周进展
* 本周无进展
- 效果预览 [乾隆](https://m.baidu.com/s?word=%E4%B9%BE%E9%9A%86&sid=109829)
- 计划
## 百度榜单
### 明星榜单 - （饶少艳、吴丽黎）
#### 明星榜单大全 （已全量上线-寻址开发）
- 项目背景
粉丝群体容易调动、愿意参与，对明星偶像的应援具有需求痛点；
对影响力的理解和评价来自于感性的认知，行业中缺乏对不同明星统一量化的评价方式。
- 收益
* 预计影响面：250w PV
- 完成情况（时间点达到的里程碑）
* 启动时间: 16年7月28日
* 提测时间: 9月08日
* 小流量上线时间:
* 全量时间点、PV值：9月23日
* 扩量时间点、PV值：
* 增加新卡上线时间点：sigma模板=person_info，资源id=46335；card模板=list_home，资源id=31635，card模板=list_rank，资源id=31618
- 本周进展
* <font color=#f00 size=3 >10月19日提供数据环境，10月20日上线模板</font>
* <font color=#f00 size=3 >寻址卡片效果预览</font>

* <font color=#f00 size=3 >寻址效果图</font> [ALL榜](http://yq01-psdy-diaoyan1042.yq01.baidu.com:8003/s?word=ALL%E6%A6%9C)

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/d156b438ded98070cb2ebde911938f7d/image.png)
* 分享问题修复，浮层开发（1.5个工作日，提测半天，计划10月14日上线）

- 效果预览 [杨洋](http://nj03-psdy-aladdin070.nj03.baidu.com:8003/sf?pd=ent_dabang&openapi=1&dspName=iphone&from_sf=1&resource_id=31635&word=%E6%9D%A8%E6%B4%8B&tn=tangram&title=%E7%99%BE%E5%BA%A6%E6%98%8E%E6%98%9FALL%E6%A6%9C&top=%7B%22sfhs%22%3A2%7D&lid=5646702246468398892&ms=1&frsrcid=46335&frorder=1)

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/e6c620520c6e044c03d4798d2dd93231/image.png)
- 效果预览 [陈伟霆](https://m.baidu.com/s?word=%E9%99%88%E4%BC%9F%E9%9C%86)

- 效果图
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/9cdf900634f781fd9b1f5eaab5bbf6a7/image.png)

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/98aa8817b8e833635cd62f7fe6959607/image.png)

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/bb67873f4e2e6e779267d031918a73ec/image.png)
- 计划
国庆节前上线模板。


