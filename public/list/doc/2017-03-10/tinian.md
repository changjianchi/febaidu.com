# 旅游&POI&出行

> 03-06~03-10


#### 国际酒店项目重构-(全流量上线)
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
	* 02-21国际酒店提测，02-23QA介入测试。
- 本周进展

    <font color=#f00>03-08开启全流量上线。大约8WPV...</font>

- 效果预览

	[佛罗伦萨酒店](http://nj02-ecom-sdc06.nj02.baidu.com:8003/s?word=佛罗伦萨酒店&sid=19702)

- 计划
	* 暂无。

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

	<font color=#f00>03-09离线收藏景点功能小流量上线。</font>

- 效果预览
	* [北京](https://m.baidu.com/s?word=%E4%B8%BD%E6%B1%9F&ip=211.137.112.0)

	<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/49da17b0af848941f45a3516d304bfe5/image.png" width=300>
	<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/c63fb8354847fd03a7af75bf457b7918/image.png" width=300>

	[详见ICAFE](http://newicafe.baidu.com/issue/1496992-5/show?from=page)

- 计划
	- 项目完成，项目总结详见[项目分析&排期&总结](http://wiki.baidu.com/pages/viewpage.action?pageId=257328897)

#### 旅游-国内酒店项目重构-(开发中)
- 项目背景
Superframe 1.0问题说明：
1）由于SF 1.0 采用 hash change 的机制，与首页异步耦合，异步搜索框架上线后，SF 1.0 情景页会出现无法打开的情况，有很大的质量隐患；
2）对 SF 1.0 我们没有提供太多的监控，整体稳定性较差，出现case 响应较慢；
3）我们将在 SF 2.5 通用情景页改版后，支持更加丰富的交互方式和开发接口，但不覆盖 SF  1.0 的情景页，迁移后更利于产品迭代。
- 收益
	* 升级为SF2.5可维护性，扩展性，用户体验都有明显提高。
	* 修复之前sf1.0实现时候的各种问题，尽快全量。
-工作量评估
    * 需求量：5个情景页卡片（1个复用）hotel_summary hotel_booking hotel_equipment poi_dtl_comment nearby_hotel
	* 开发风险：使用异步交互|日历调起交互|图片组件调起交互|跳转情景页交互
	* 沟通风险： 后端
- 完成情况（时间点达到的里程碑）
    * 02-08当天确定项目详细计划，开始开发
- 本周进展

    <font color=#f00>联调中。</font>

- 效果预览

	* [北京渔阳饭店](http://cq01-ala-fe-4.epc.baidu.com:8003/sf?openapi=1&dspName=iphone&from_sf=1&pd=poi&resource_id=4487&word=%E5%8C%97%E4%BA%AC&title=%E5%8C%97%E4%BA%AC&hotel_uid=c879fa01948d5253c909f002)

	<img src="http://wiki.baidu.com/download/attachments/249759029/14e8c3812fd7c4bb141c13b1815d3b49.png?api=v2" width=300>

	<img src="http://wiki.baidu.com/download/attachments/249759029/038bf7c728e9c01fee1cd1d25659ffbd.png?api=v2" width=300>

	<img src="http://wiki.baidu.com/download/attachments/249759029/7cafbfc0f06ef9a0812525515334abb1.png?api=v2" width=300>




#### 行程助手(文宇，睿娇) （开发中）
- 背景：提供用户出行的所有信息，线上线下(短信)统一提供全方位服务。
- 收益：影响PV 暂无
- **工作量评估**
  - 需求量：
  	9个情景页卡片
  - 开发风险：
	1.使用未沉淀的交互方式 | 1次 | 日历组件
	2.同时存在同步、异步更新方式 | 1次 | 提示信息，与短信同步

  - 沟通风险：
  	1.后端使用mini、gss等固定格式数据 | 1次 | 卡片多，多个资源方KV
	2.后端使用其他部门的在线接口 | 3次 | 天气图标，糯米，高铁订餐

- **完成情况**
	2月28日 需求评审两次次
	3月1日 资源方schema创建
	3月7、8日 卡片schema创建，静态卡片开发中；图标解决方案确定，日历组件修改中。
- 本周进展
	卡片schema创建，静态卡片开发中
	图标解决方案确定，日历组件修改中。
- **排期计划**
    见[wiki](http://wiki.baidu.com/pages/viewpage.action?pageId=304744527)
- 效果图
	<img src="http://wiki.baidu.com/download/attachments/249758969/05.B-%E6%88%91%E7%9A%84%E8%A1%8C%E7%A8%8B-%E5%A4%9A%E8%A1%8C%E7%A8%8B-%E9%9D%9E%E8%AE%A2%E5%8D%95-%E9%A3%9E%E6%9C%BA-%E7%99%BB%E6%9C%BA%E5%8F%A3%E6%B5%AE%E5%B1%82-L1-06-0228.png?api=v2" width="350px">



