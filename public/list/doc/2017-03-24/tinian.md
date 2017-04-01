# 旅游&POI&出行

> 2017-03-20 ~ 2017-03-24



#### 旅游-国内酒店项目重构-(测试中)
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
	* 中途插入非登陆收藏等需求
    * 03-16提测
	* 03-22测试完成
- 本周进展

    <font color=#f00>03-16提测。03-22一轮测试完成，BUG修复中。所涉及到的两张单点酒店卡片跳转调整03-22开发完成，03-23提测。国内酒店多点与单点整体预计下周内上线。</font>

- 效果预览

	* [北京渔阳饭店](https://cq01-ala-fe-4.epc.baidu.com:8004/s?iscookie=1&word=%E5%8C%97%E4%BA%AC%E9%85%92%E5%BA%97&sid=112144)
	* [北京春晖园温泉度假酒店](http://cq01-ala-fe-4.epc.baidu.com:8003/s?word=%E5%8C%97%E4%BA%AC%E6%98%A5%E6%99%96%E5%9B%AD%E6%B8%A9%E6%B3%89%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97&sa=ts_1&ts=4665679&t_kt=0&ie=utf-8&rsv_t=6334SAvW6or3l6NxpYsakrHQoMEPdpuThOsJS9%252BP4lnCPDaOdpJy&rsv_pq=5500897826167572973&ss=100&rq=%E5%8C%97%E4%BA%ACchunhuiyuan&rqlang=zh&rsv_sug4=6897&inputT=5989&oq=%E5%8C%97%E4%BA%AC%E9%85%92%E5%BA%97)

	<img src="http://wiki.baidu.com/download/attachments/249759029/14e8c3812fd7c4bb141c13b1815d3b49.png?api=v2" width=300>

	<img src="http://wiki.baidu.com/download/attachments/249759029/038bf7c728e9c01fee1cd1d25659ffbd.png?api=v2" width=300>

	<img src="http://wiki.baidu.com/download/attachments/249759029/7cafbfc0f06ef9a0812525515334abb1.png?api=v2" width=300>

#### 旅游-游记情景页-（联调中）
- 项目背景
    目前旅游游记选项直接跳到第三方页面，复用医疗c_article_base模板，做成自己的情景页。
- 收益
    * 无
- 工作量评估
    * 需求量：复用c_article_base模板
    * 开发风险：无
    * 沟通风险：后端
- 完成情况（联调中）
    * 03-23介入联调，配置环境
- 本周进展
    <font color=#f00>03-23介入</font>
- 预览效果
    * [线下地址](http://cq01-ala-fe-4.epc.baidu.com:8003/sf?openapi=1&dspName=iphone&from_sf=1&pd=city&resource_id=33841&ms=1&word=0004bb10b41016011b34e6f40b191bbd&hide=1&apitn=tangram&top=%7B%22sfhs%22%3A2%7D&city_name=%E5%8C%97%E4%BA%AC&ext=%7B%22sf_tab_name%22%3A%22%E6%B8%B8%E8%AE%B0%22%7D&frsrcid=32228&frorder=2&lid=12411908863208513959)


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
	* 2月28日 需求评审两次次
	* 3月1日 资源方schema创建
	* 3月7、8日 卡片schema创建，静态卡片开发中；图标解决方案确定，日历组件修改中。
	* 3月15号白卡样式完成。
	* 3月15日列表页白卡样式完成。
	* 3月20-3月21联调top卡、头卡。
	* 3月22日联调如何到达卡,天气卡联调完成。
	* 3月23日城市周边卡联调完成。
- 本周进展
	* 3月20-3月21联调top卡、头卡。
	* 3月22日联调如何到达卡,天气卡联调完成。
	* 3月23日城市周边卡联调完成。

- **排期计划**
    见[wiki](http://wiki.baidu.com/pages/viewpage.action?pageId=304744527)
- 效果图
	<img src="http://wiki.baidu.com/download/attachments/249758969/05.B-%E6%88%91%E7%9A%84%E8%A1%8C%E7%A8%8B-%E5%A4%9A%E8%A1%8C%E7%A8%8B-%E9%9D%9E%E8%AE%A2%E5%8D%95-%E9%A3%9E%E6%9C%BA-%E7%99%BB%E6%9C%BA%E5%8F%A3%E6%B5%AE%E5%B1%82-L1-06-0228.png?api=v2" width="350px">

#### 商圈(文宇) （开发中）
- 背景：

针对不知道『去哪儿玩』的用户，在合适的场景，引导用TA发现『去哪儿玩』；
针对知道『去哪玩』的用户，以商圈作为最小组织单元，主打『发现』，给用户回答『玩什么』的问题；
- 收益：影响PV 暂无
- **工作量评估**
  - 需求量：
  	8个情景页卡片
  - 开发风险：
	1.feed流接入 | 1次

  - 沟通风险：
  	1.电影购票复用结果页的数据 | 1次
	2.feed流接入 | 1次
- **完成情况**

	3月16日 开始介入，卡片schema创建，静态卡片开发中；
	3月24日 schema创建完成，静态卡片开发完成，部分数据确认中
- 本周进展
	卡片schema创建完成，5个静态卡片开发完成,电影卡片开发完成。
- **排期计划**
    3-23日之前完成5个卡片样式开发，其他等rd休假回来确定。
	3-24日 电影卡片
	3-28日 筛选页和列表页完成
	联调时间待定，数据需要ready和确认。
	[其他排期](http://wiki.baidu.com/pages/viewpage.action?pageId=317135803)
- 效果图
	<img src="http://wiki.baidu.com/download/attachments/249758969/POI-%E5%95%86%E5%9C%88%E6%83%85%E6%99%AF%E9%A6%96%E9%A1%B5-%E8%A5%BF%E5%8D%95-L3-06-0310-finCopy.png?api=v2" width="350px">
	<img src="http://wiki.baidu.com/download/attachments/249758969/page-1-c%E7%B1%BB_%E5%95%86%E6%88%B7%E4%BA%BA%E6%B0%94%E6%A6%9C_%E8%90%BD%E5%9C%B0%E9%A1%B5.png?api=v2" width="350px">
	<img src="http://wiki.baidu.com/download/attachments/249758969/page-1-poi_%E5%88%97%E8%A1%A8%E9%A1%B5.png?api=v2" width="350px">
#### 摄影(文宇) （已移交）
- 背景：
 摄影推荐，努米合作
- 收益：影响PV 暂无
- **工作量评估**
  - 需求量：
  	一个结果页，三个tab样式
  - 开发风险：
	暂无

  - 沟通风险：
  	暂无

- **完成情况**

	3月14日 接入，给出schema
- 本周进展
	3月14日 接入，给出schema
	3月23日 一天的工作排期已结束，已移交。
- **排期计划**
    3月14日 接入，给出schema
	3月23日 已移交。
- 效果图
	<img src="http://wiki.baidu.com/download/attachments/249758969/sheying.jpg?api=v2" width="350px">

- 线下环境
	[线下环境](http://cp01-ala-fe-col-2.epc.baidu.com:8003/s?word=%E5%8C%97%E4%BA%AC%E5%A9%9A%E7%BA%B1%E7%85%A7%E6%8E%A8%E8%8D%90&wiseus=10.95.112.104)


#### 日历组件(文宇) （迭代中）
- 背景：
 目前酒店应用支持双日期选择，需要添加但日期选择需求
- 收益：影响PV 暂无
- **工作量评估**
  - 需求量：
  	但日期选择功能
  - 开发风险：
	暂无

  - 沟通风险：
  	暂无

- **完成情况**

- 本周进展
	本周无进展，预计下周有需要修复的bug
- **排期计划**
    暂无
- 效果图
	<img src="http://wiki.baidu.com/download/attachments/249758969/QQ20170316-1.png?api=v2" width="350px">
