# 刘泉有

> 2016-12-05 ~ 2016-12-09


#### 结果页城市卡(已全量-迭代中)
- 背景
当前的旅游类搜索结果页包含卡片较多，尤其是同质内容卡片使得页面结构凌乱。以景区和典型旅游城市作为试水Query，依托于场景化卡片优化搜索结果页整体效果，优化内容包括：增加特价线路子卡、百度图片子卡、相关地点推荐子卡、相关咨询子卡，同时尝试兼容广告的浅色大卡样式和自然结果融合的样式。
- 收益
507城市全流量,PV120W.
- 完成情况
	- 2016-04-28上线108城市
	- 2016-11-11 507城市全量
- 本周
<p style="color:#c00">sigma城市样式迭代12-09上线。</p>
- 效果
	- Query: 上海，北京，南宁旅游...
	- [南宁旅游Sigma样式](https://m.baidu.com/s?word=%E4%B8%8A%E6%B5%B7&sid=109912)
	- [上海Normal样式](https://m.baidu.com/s?word=%E4%B8%8A%E6%B5%B7&sid=109912)
	<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/d28705390d20c78df79b940d98c3cccf/image.png" width=300>
- 后续计划
	暂无
 
#### 旅游-省卡片(开发中)
- 项目背景
在用户搜索省有关的旅游Query时，比如云南旅游，四川哪里好玩等词时，在结果页上展示省旅游信息卡片，并根据Query对应的旅游强度，当前页面有无广告等因素，判断以何种形式展现。
#### 收益（总体目标）
省全量后30W.
- 完成情况（时间点达到的里程碑）
	* 10-23评审.
	* 10-27完成新卡片开发.
    
- 本周进展
	- <span style="color:#c00">由于部分卡片不可复用只能重新开发或版本太老需要升级才能使用原因导致联调时间推迟，预计本周五12-09联调完成。</span>
    
- 效果预览 
	<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/b60de1eb27928ebf5bc1caa7aa1693ab/image.png"/ width=300>
	<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/08521f3b1ed15ef97563d63fca327240/image.png"/ width=300>
	
- 计划
	暂无
 
 
#### 国内酒店阿拉丁及情景页(小流量-迭代中)
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
- 本周进展
	<font color=#f00 size=3>UBS评估，提出酒店评论数据缺失问题，部分数据已补充，PM走单中</font>
	
- 效果预览 
	<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/1757696bb3b6e7fc95f7e294cddd8bb2/image.png" width=300>
- 计划
	* 暂无
 
### 旅游-我的旅程 - (开发中)
- 项目背景
在用户进行旅游相关搜索时，实质是想了解一段旅程的部分或全部环节;选择想去的目的地，预订机票/火车票，酒店是旅程开始前的关键步骤。我的旅程项目将用户想去的目的地与用户通过百度预订的酒店或大交通行为相合，方便用户查阅旅程相关信息。同时结合用户想去的景点，为用户推荐景点周边的美食酒店，从而形成旅行信息和服务的有机连接。 	
- 收益
在用户进行旅游相关搜索时，实质是想了解一段旅程的部分和全部环节，我的旅程项目将用户想去的目的地与用户通过百度预定的酒店或大交通行为相结合，方便用户查阅旅程相关信息。同时结合用户想去的景点，为用户推荐景点周边的美食酒店，从而形成旅行信息和服务的有机链接。
- 完成情况（时间点达到的里程碑） 
	* 11-25第二轮评审.
    * 11-28FE介入.
- 本周进展

	<font color=#f00 size=3>开发中，进度正常。</font>
 
- 效果预览
	* [北京](http://cp01-ala-fe-plat-1.epc.baidu.com:8003/sf?openapi=1&dspName=iphone&from_sf=1&pd=city&resource_id=4336&ms=1&word=%E5%8C%97%E4%BA%AC&hide=1&apitn=tangram&top=%7B%22sfhs%22%3A2%7D&ext=%7B%22sf_tab_name%22%3A%22%E6%99%AF%E7%82%B9%22%7D&frsrcid=32228&frorder=2)
	
	<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/49da17b0af848941f45a3516d304bfe5/image.png" width=300>
	<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/c63fb8354847fd03a7af75bf457b7918/image.png" width=300>
	
	[详见ICAFE](http://newicafe.baidu.com/issue/1496992-5/show?from=page)

- 计划
	- 王老师项目演示计划取消,项目优先级降低,暂时block,优先支持省&单点酒店项目。
	- 具体见[项目分析&排期](http://wiki.baidu.com/pages/viewpage.action?pageId=257328897)
 
 
 

 