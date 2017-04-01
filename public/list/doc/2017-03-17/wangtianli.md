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
	* 中途插入非登陆收藏等需求
    * 03-22完成开发，提测
- 本周进展
 
    <font color=#f00>03-16提测。QA预计周五下午介入测试，测试三天，03-23上线。</font>
 
- 效果预览
 
	* [北京渔阳饭店](https://cq01-ala-fe-4.epc.baidu.com:8004/s?iscookie=1&word=%E5%8C%97%E4%BA%AC%E9%85%92%E5%BA%97&sid=112144)
 
	<img src="http://wiki.baidu.com/download/attachments/249759029/14e8c3812fd7c4bb141c13b1815d3b49.png?api=v2" width=300>
 
	<img src="http://wiki.baidu.com/download/attachments/249759029/038bf7c728e9c01fee1cd1d25659ffbd.png?api=v2" width=300>
 
	<img src="http://wiki.baidu.com/download/attachments/249759029/7cafbfc0f06ef9a0812525515334abb1.png?api=v2" width=300>
 
#### 百度寻人-(提测中)
- 项目背景
 
    目前因近期两会时厂长推寻人项目，且百度寻人官网在搜索结果页的显示为自然结果，因此产品层面认为有必要针对百度寻人项目的官网进行包装展示，以达到公益及推广效果。
- 工作量评估
    *需求量：1个结果页卡片 模板名 sg_search
    *开发风险 无
    *沟通风险 无
- 完成情况
    * 03-15收到ue图，需求
    * 03-16开发，开发完成
- 本周进展
 
    <font color=#f00>03-16提测。预计测试一天，03-17上线。</font>
 
- 效果预览
    
    * [百度寻人](https://wwwhttps.baidu.com/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=sg_search&dev_path=searchaladdin&dev_tpltype=default&sid=99999&dev_sigma=1&dev_online=0&dev_file=default.xml&dev_fileformat=xml&dev_pos=asResult&wd=%E7%99%BE%E5%BA%A6%E5%AF%BB%E4%BA%BA&word=%E7%99%BE%E5%BA%A6%E5%AF%BB%E4%BA%BA)
    
    <img src="http://wiki.baidu.com/download/attachments/249759029/91944a17f139d5952e06f7aab.png?api=v2" width=300>
