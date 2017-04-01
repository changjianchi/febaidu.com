# 刘泉有

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
