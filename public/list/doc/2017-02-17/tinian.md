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
- 本周进展
    <font color=#f00 size=3>02-09启动酒店重构工作,附近酒店模板开发, 日历组件开发</font>
- 计划
	* 02-20开发完成&联调
    * 02-24测试完成
    * 02-27上线
	* 详情请见[酒店迁移计划](http://wiki.baidu.com/pages/viewpage.action?pageId=287397067)

#### 旅游-我的旅程 - (已全量)
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
	* 02-10全流量上线。
- 本周进展

	<font color=#f00 size=3>02-10全量上线，暂覆盖16个城市（北京，上海，成都，重庆，南京...），UBS下周三产出具体数据。</font>

- 效果预览
	* [北京](https://m.baidu.com/s?word=%E4%B8%BD%E6%B1%9F&ip=211.137.112.0)

	<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/49da17b0af848941f45a3516d304bfe5/image.png" width=300>
	<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/c63fb8354847fd03a7af75bf457b7918/image.png" width=300>

	[详见ICAFE](http://newicafe.baidu.com/issue/1496992-5/show?from=page)

- 计划
	- 项目完成，项目总结详见[项目分析&排期&总结](http://wiki.baidu.com/pages/viewpage.action?pageId=257328897)





### POI-地图 - （李林）

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
	* 01-24上线

- 本周进展
    * 无
- 效果预览
	<img src="http://wiki.baidu.com/download/attachments/249758969/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202017-01-12%20%E4%B8%8A%E5%8D%8811.36.32.png?api=v2" width=300>
- 计划
    01-23正式上线
