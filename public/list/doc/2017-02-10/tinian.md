# 旅游&POI&出行


#### 旅游-酒店项目重构-(开发中)
- 项目背景
Superframe 1.0问题说明：
1）由于SF 1.0 采用 hash change 的机制，与首页异步耦合，异步搜索框架上线后，SF 1.0 情景页会出现无法打开的情况，有很大的质量隐患；
2）对 SF 1.0 我们没有提供太多的监控，整体稳定性较差，出现case 响应较慢；
3）我们将在 SF 2.5 通用情景页改版后，支持更加丰富的交互方式和开发接口，但不覆盖 SF  1.0 的情景页，迁移后更利于产品迭代。
- 收益
	* 升级为SF2.5可维护性，扩展性，用户体验都有明显提高。
	* 修复之前sf1.0实现时候的各种问题，尽快全量。
- 完成情况（时间点达到的里程碑）
    * 02-08当天确定项目详细计划，开始开发
    * 02-20开发完成&联调
    * 02-24测试完成
    * 02-27上线
- 本周进展
    <font color=#f00 size=3>02-09启动酒店重构工作,附近酒店模板开发, 日历组件开发</font>
- 计划
	- 详情请见[酒店迁移计划](http://wiki.baidu.com/pages/viewpage.action?pageId=287397067)

#### KG-旅游-省卡片(全流量上线)
- 项目背景
在用户搜索省有关的旅游Query时，比如云南旅游，四川哪里好玩等词时，在结果页上展示省旅游信息卡片，并根据Query对应的旅游强度，当前页面有无广告等因素，判断以何种形式展现。
#### 收益（总体目标）
省全量后30W.
- 完成情况（时间点达到的里程碑）
	* 10-23评审.
	* 10-27完成新卡片开发.
	* 12-13提测
	* 12-20省主体卡片上线，30%小流量，PV9W
	* 01-23省卡片全量，PV25W

- 本周进展
	- <span style="color:#c00">无更新</span>

- 效果预览
	线上链接：[云南](https://m.baidu.com/s?word=%E4%BA%91%E5%8D%97%E6%97%85%E6%B8%B8)
	<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/b60de1eb27928ebf5bc1caa7aa1693ab/image.png"/ width=300>
	<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/08521f3b1ed15ef97563d63fca327240/image.png"/ width=300>

- 计划
	根据UBS数据持续优化省卡片。


#### 旅游-酒店(小流量-迭代中)
- 项目背景
针对连锁品牌名（例如，锦江之星，7天，汉庭，格林豪泰等）或某一地区的酒店（例如，北京酒店预订，上海酒店预订等），对酒店的分布信息突出展现，并优化整体预订流程的体验。
- 收益
待补充
- 完成情况（时间点达到的里程碑）
    多点：
    * 8月3日升级小流量.
    * 7月16日小流量上线.
    * 7月4日提测
    * 6月18日项目启动
	单点：
	* 11-28提测
	* 11-29测试完毕
	* 12-06走单
	* 12-12小流量上线
- 本周进展
	<font color=#f00 size=3>启动酒店重构项目。</font>

- 效果预览
	单点酒店线上召回：[盘古七星酒店](https://m.baidu.com/ssid=ecafd1eeb2a9b7c6353138bb06/s?word=%E7%9B%98%E5%8F%A4%E4%B8%83%E6%98%9F%E9%85%92%E5%BA%97&sid=112142)
	<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/1757696bb3b6e7fc95f7e294cddd8bb2/image.png" width=300>
- 计划
	* 预计2月底上线。

#### 旅游-我的旅程 - (小流量中)
- 项目背景
在用户进行旅游相关搜索时，实质是想了解一段旅程的部分或全部环节;选择想去的目的地，预订机票/火车票，酒店是旅程开始前的关键步骤。我的旅程项目将用户想去的目的地与用户通过百度预订的酒店或大交通行为相合，方便用户查阅旅程相关信息。同时结合用户想去的景点，为用户推荐景点周边的美食酒店，从而形成旅行信息和服务的有机连接。
- 收益
在用户进行旅游相关搜索时，实质是想了解一段旅程的部分和全部环节，我的旅程项目将用户想去的目的地与用户通过百度预定的酒店或大交通行为相结合，方便用户查阅旅程相关信息。同时结合用户想去的景点，为用户推荐景点周边的美食酒店，从而形成旅行信息和服务的有机链接。
- 完成情况（时间点达到的里程碑）
	* 11-25第二轮评审.
    * 11-28FE介入.
	* 12-07暂停，12-15介入
	* 01-11提测。
	* 01-22零流量上线。
- 本周进展

	<font color=#f00 size=3>部分功能调整迭代，与02-09上线。</font>

- 效果预览
	* [北京](https://m.baidu.com/s?word=%E4%B8%BD%E6%B1%9F&ip=211.137.112.0&sid=7500)

	<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/49da17b0af848941f45a3516d304bfe5/image.png" width=300>
	<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/c63fb8354847fd03a7af75bf457b7918/image.png" width=300>

	[详见ICAFE](http://newicafe.baidu.com/issue/1496992-5/show?from=page)

- 计划
	- 项目完成，项目总结详见[项目分析&排期&总结](http://wiki.baidu.com/pages/viewpage.action?pageId=257328897)








### POI-地图 - （李林）

#### 餐饮糯米旺铺（小流量上线） @李林
- 项目背景
	接入糯米旺铺数据和交互，提升餐饮详情体验。本项目主要由糯米开发，大搜做开发指导
- 收益
    * 用户体验预期：提升
- 开发模板
	* card：（糯米FE负责开发，联调时同步card名称）
- 完成情况（时间点达到的里程碑）
	* 1月18日 小流量上线
	* 1月6日 提测
	* 12月28日 前后端联调
	* 12月19日 开始开发
	* 12月15日 项目启动
- 本周进展
    <span style="color:red;">1月18日 小流量上线</span>
- 计划
    12月28日 前后端联调
	1月6日 提测
- 效果预览
	图片太长，仅放链接：
	[收费版](http://wiki.baidu.com/download/attachments/249758969/%E6%97%BA%E9%93%BA%E4%BB%98%E8%B4%B9%E7%89%88%E9%A4%90%E9%A5%AE-0.png?api=v2)
	[免费版](http://wiki.baidu.com/download/attachments/249758969/%E9%A4%90%E9%A5%AE%201213%20%E5%85%8D%E8%B4%B9%E7%89%88.png?api=v2)

### 出行 - （李林、文宇）

#### 留守儿童 @文宇
- 项目背景
    留守儿童
- 收益
    * 暂无
- 开发模板
	* wise：sg_left_child
- 完成情况
	* 01-03接入
	* 01-12 测试完成


- 本周进展
    * <span style="color:red;">开发测试完毕，走单中</span>
	* [线下环境](http://cp01-ala-fe-col-2.epc.baidu.com:8003/s?word=%E7%95%99%E5%AE%88%E5%84%BF%E7%AB%A5&wiseus=10.95.112.104)

- 效果预览
	<img src="http://wiki.baidu.com/download/attachments/276012758/f8a25f99455d7bce2ec80ac8e.png?version=1&modificationDate=1483428170175&api=v2" width=300>
- 计划
 	* 01-13 上线


#### 火车中转 @文宇@天立
- 项目背景
    像市内公交一样，城市，火车站之间的中转
- 收益
    * 暂无
- 开发模板
	* wise：train_change
- 完成情况
	* 01-05接入
	* 01-09前端开发
	* 01-12联调
	* 01-18提测

- 本周进展
    * <span style="color:red;">已经提测</span>
	* [线下环境]http://cp01-ala-fe-col-2.epc.baidu.com:8003/s?word=%E5%BE%90%E5%B7%9E%E5%88%B0%E6%B1%95%E5%A4%B4%E7%9A%84%E7%81%AB%E8%BD%A6

- 效果预览
	<img src="http://wiki.baidu.com/download/attachments/249758969/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202017-01-12%20%E4%B8%8A%E5%8D%8811.36.32.png?api=v2" width=300>
- 计划
    01-23正式上线

#### ar复原 @文宇@李林
- 项目背景
    ar复原
- 收益
    * 暂无
- 开发模板
	* wise：ar_recover
- 完成情况
	* 01-06接入
	* 01-11前端开发启动
	* 01-12开发，联调，测试完成
    * 01-12紧急上线

- 本周进展
    * <span style="color:red;">已上线</span>
	* [线下环境](https://www.baidu.com/s?ie=UTF-8&wd=%E8%A5%BF%E7%9B%B4%E9%97%A8)

- 效果预览
	<img src="http://wiki.baidu.com/download/attachments/249758969/QQ20170112-0.png?api=v2" width=300>
- 计划
    * 暂无




