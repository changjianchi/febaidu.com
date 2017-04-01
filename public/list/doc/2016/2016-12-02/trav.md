# 旅游POI出行



### 旅游城市-（泉有、睿娇）
#### KG-结果页城市卡(已全量-迭代中)
- 背景
当前的旅游类搜索结果页包含卡片较多，尤其是同质内容卡片使得页面结构凌乱。以景区和典型旅游城市作为试水Query，依托于场景化卡片优化搜索结果页整体效果，优化内容包括：增加特价线路子卡、百度图片子卡、相关地点推荐子卡、相关咨询子卡，同时尝试兼容广告的浅色大卡样式和自然结果融合的样式。
- 收益
507城市全流量,PV120W.
- 完成情况
	- 2016-04-28上线108城市
	- 2016-11-11 507城市全量
	- 2016-11-30 扩量到606城市
- 本周
<p style="color:#c00">11-30扩量到606城市</p>
- 效果
	- Query: 上海，北京，南宁旅游...
	- [南宁旅游Sigma样式](https://m.baidu.com/s?word=%E4%B8%8A%E6%B5%B7&sid=109912)
	- [上海Normal样式](https://m.baidu.com/s?word=%E4%B8%8A%E6%B5%B7&sid=109912)
	<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/d28705390d20c78df79b940d98c3cccf/image.png" width=300>
- 后续计划
	- 『我的旅程』项目初版UE图已出。
 
#### KG-旅游-省卡片(开发中)
- 项目背景
在用户搜索省有关的旅游Query时，比如云南旅游，四川哪里好玩等词时，在结果页上展示省旅游信息卡片，并根据Query对应的旅游强度，当前页面有无广告等因素，判断以何种形式展现。
#### 收益（总体目标）
省全量后30W.
- 完成情况（时间点达到的里程碑）
	* 10-23评审.
	* 10-27完成开发.
    
- 本周进展
	- <span style="color:#c00">省sigma卡新做，11-30开发联调完成，情景页头卡11-30开发联调完成，12-01开发如何到达卡，预计今天12-02开发联调完成。</span>
    
- 效果预览 
	<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/b60de1eb27928ebf5bc1caa7aa1693ab/image.png"/ width=300>
	<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/08521f3b1ed15ef97563d63fca327240/image.png"/ width=300>
	
- 计划
	* 预计下周一（12-05）提测。
 
### 旅游-景点 - （泉有、睿娇、文宇）
#### KG-景点收敛卡+情景页(已全量-迭代中)
- 背景
针对旅游类目下的景点搜索需求，从页面整体效果上优化体验，建立更有组织的搜索结果页面.
- 收益
页面停留时长增加，长点击增加，门票gmv转化率上升,预计日PV 300W（旺季可能会翻倍）.
先小流量上线,PV约120W.
- 完成情况
	- 重新做一份数据，新建normal卡和sigma卡，sigma已开发提测完成，待上线，normal卡开发中。
- 本周
	- <span style="color:#c00">景点新Sigma卡，normal卡周四（12.1）上线。</span>
- 效果
 	<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/7b32935ef073711f7f9f62bfd942408b/image.png" width=300>
	<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/raw/c773c4de3f74a5a34dfe7b6c84befa86b8b91ff9/doc/2016-11-18/img/siwenyu/p1.png" width=300>
	
- 后续计划
 * <span style="color:#c00">新项目景点行中项目12-1评审，UE图未ready。</span>
 
### 旅游-酒店 - （泉有、睿娇）
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
	
	<font color=#f00 size=3>酒店单点需求，联调完成，11-28提测，11-29测试完毕BUG回归完成。UBS评估中，提出酒店评论数据缺失问题，数据RD正在解决。上线时间待定。</font>
	
- 效果预览 
	<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/1757696bb3b6e7fc95f7e294cddd8bb2/image.png" width=300>
- 计划
	* 下周四前上线。
 
### 旅游-我的旅程 - （泉有、睿娇）
- 项目背景
在用户进行旅游相关搜索时，实质是想了解一段旅程的部分或全部环节;选择想去的目的地，预订机票/火车票，酒店是旅程开始前的关键步骤。我的旅程项目将用户想去的目的地与用户通过百度预订的酒店或大交通行为相合，方便用户查阅旅程相关信息。同时结合用户想去的景点，为用户推荐景点周边的美食酒店，从而形成旅行信息和服务的有机连接。 	
- 收益
在用户进行旅游相关搜索时，实质是想了解一段旅程的部分和全部环节，我的旅程项目将用户想去的目的地与用户通过百度预定的酒店或大交通行为相结合，方便用户查阅旅程相关信息。同时结合用户想去的景点，为用户推荐景点周边的美食酒店，从而形成旅行信息和服务的有机链接。
- 完成情况（时间点达到的里程碑） 
	* 11-25第二轮评审.
    * 11-28开始开发.
- 本周进展
 
	<font color=#f00 size=3>景点收藏（11-30）开发联调完成</font>
	<font color=#f00 size=3>行程规划（12-01开发联调完成）</font>
 
- 效果预览
	* [北京](http://cp01-ala-fe-plat-1.epc.baidu.com:8003/sf?openapi=1&dspName=iphone&from_sf=1&pd=city&resource_id=4336&ms=1&word=%E5%8C%97%E4%BA%AC&hide=1&apitn=tangram&top=%7B%22sfhs%22%3A2%7D&ext=%7B%22sf_tab_name%22%3A%22%E6%99%AF%E7%82%B9%22%7D&frsrcid=32228&frorder=2)
	
	<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/49da17b0af848941f45a3516d304bfe5/image.png" width=300>
	<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/c63fb8354847fd03a7af75bf457b7918/image.png" width=300>
	
	[详见ICAFE](http://newicafe.baidu.com/issue/1496992-5/show?from=page)

- 计划
	- 开发时间 11-29~12-02，12-5~12-9，12-13总体ready，部分调整，12-15~16测试，12-19上线。
	- 具体见[项目分析&排期](http://wiki.baidu.com/pages/viewpage.action?pageId=257328897)
 
 
 
### POI-地图 - （李林）
#### POI单点迭代（全流量 - 迭代中） @李林@司文宇
- 项目背景
由于对单点实验效果有异议，要求重新优化POI单点样式，重新产出实验数据
- 收益
    * 用户体验预期：持平
- 开发模板
	* wise：poi_single, poi_single_weak, poi_nobiz_sin, poi_nobiz_sin_w
	* card：poi_map_list
- 完成情况（时间点达到的里程碑）
	* 11月24 迭代上线
- 本周进展
    <span style="color:red;">部分迭代上线</span>
- 计划
    11月24日 迭代上线
	11月25日 重开反转流量实验
- 效果预览 
    无
#### POI商圈推荐（新项目启动） @李林
- 项目背景
由于对单点实验效果有异议，要求重新优化POI单点样式，重新产出实验数据
- 收益
    * 用户体验预期：持平
- 开发模板
	* card：poi_map_list，poi_area
- 完成情况（时间点达到的里程碑）
	* 11月30日 UE稿确定，开始开发
	* 11月25日 项目启动
- 本周进展
    30日 开始开发
- 计划
    12月7日 前后端联调
	12月9日 提测
- 效果预览 
	<img src="http://wiki.baidu.com/download/attachments/249758969/page-1-a_%E5%88%97%E8%A1%A8%E9%A1%B5.png?api=v2" width=300>
	<img src="http://wiki.baidu.com/download/attachments/249758969/page-1-d_%E8%AF%A6%E6%83%85%E9%A1%B501.png?api=v2" width=300>
    
### 出行 - （李林、文宇）
#### 航班动态查询 （小流量 - 迭代中）@李林
- 项目背景
当前线上的航班动态卡片，数据由资源方去哪儿提供，准确度不够高；此外卡片设计上，突出了起始地，预计起飞到达时间等用户更为关注的信息并没有突出；同时并没有提供值机口登机口行李转盘等乘机辅助信息；最后，关于航班更加详细的座位分布、餐食信息等需求，航班号查询背后的出行场景下其他潜在需求也没有完全满足。新设计的航班号查询哥伦布卡片，可以有效满足上述需求。
- 收益
    * 预计影响面: 10W pv
    * 用户体验指标: 需求一次被满足度提升
- 开发模板
	* aladdin: airplane_info
	* card: flight_info_tit, flight_info_sc, airplane_fac_sc, plane_seat_sc, airplane_pic_sc
- 完成情况
	* 11月25日二期转全，全量PV 10W
    * 11月10日二期小流量上线, sid=101464，[线上地址](https://m.baidu.com/s?word=hu7706&sid=101464)
    * 9月18日小流量上线
    * 9月12日提测
    * 8月28日项目启动
	* 10月27日项目二期开发完毕
- 本周进展
    * 11月25日转全
- 效果预览 
模板平台 flight_info模板预览 [线下地址](http://cp01-ala-fe-col-2.epc.baidu.com:8003/s?word=CA1234&sa=tb&ts=0280854&t_kt=0&ie=utf-8&rsv_t=3c53CJ1U%252FOHPwrDr419J6QJNmuBiSt3GJda%252BSGheI9GwgEws74NE&rsv_pq=17485574154746690114&ss=100&t_it=1&rqlang=zh&rsv_sug4=3211&inputT=3207&oq=Cz3951)
 
#### 市内和跨城市点到点推荐出行 （已全量）@司文宇
- 项目背景
在query为“某一个城市内的点到点”“某一个城市内的点到点+相关杂质词”下，触发该阿拉丁的展现。Query举例：“北京南站到北京西站；上海虹桥火车站去上海浦东机场怎么走；西二旗到王府井打车多少钱” 。该阿拉丁包含三张卡片，分别为地图卡，目的地卡和附近卡。其中，地图卡覆盖所有的市内点到点query。
- 开发模板
	* aladdin：pp_route
- 完成情况
 	11.10全量  pv:130W
- 本周进展
	无
- 后续计划
	暂无
    
- 效果预览 
    * 线上：https://m.baidu.com/ssid=eaecc9b3c2a93134333761a244/s?word=%E6%95%85%E5%AE%AB%E5%88%B0%E9%A2%90%E5%92%8C%E5%9B%AD%E6%80%8E%E4%B9%88%E8%B5%B0&sid=110780
    * 测试机: [从北京西站到北京南站](http://cp01-ala-fe-col-2.epc.baidu.com:8003/s?word=%E5%8C%97%E4%BA%AC%E8%A5%BF%E7%AB%99%E5%88%B0%E5%8C%97%E4%BA%AC%E5%8D%97%E7%AB%99&wiseus=10.99.28.16)

#### 春运抢票（新项目启动） @文宇
- 项目背景
春节前后抢票活动，在售票期内的可以直接购买，不在售票期内的可以提前预约。
- 收益
    * 暂无
- 开发模板
	* wise：spring_ticket
- 完成情况（时间点达到的里程碑）
	* 11月29号提出需求，有其他同学跟进。
	* 12月1日 根据项目需求状况，由文宇接入，UE稿确定，开始开发
	* 12月2日 项目启动
- 本周进展
    * <span style="color:red;">开始开发</span>
- 计划
    12月7日 提测
	12月9日 上线
- 效果预览 
	<img src="http://wiki.baidu.com/download/attachments/249758969/QQ20161202-0.png?api=v2" width=300>