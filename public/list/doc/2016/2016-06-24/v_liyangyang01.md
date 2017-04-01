# 李阳阳

> 从2016-06-20到2016-06-24

## pc奥运会复用样式~

### 背景与目标

#### 背景：

PC奥运会项目总共涉及4个模板的优化

#### 目标：

	主要以下优化点：

	1.  开闭幕式 
	左图右文方式，给出开幕式时间、入口等信息，tab按钮按照时间进程变更内容。
	修改内容：+showurl字段
	 
	模板ID    4682
	模板英文名     worldcup_live
	模板中文名     世界杯直播模板
	schema:id(3342)

	2.  general需求（奥运、奥运会）可用于多类赛程 亚运会赛程
		（1）           标题链接指向专题页面；
		（2）           中国金牌播报内容：实时更新最新中国金牌内容，链接至中国金牌页面（页面中须有中国所有金牌内容）；同时右侧更多链接至完整奖牌榜；
		（3）           实时奖牌榜：显示前5名国家奖牌
		（4）           赛程：显示10条重点推荐赛程，实时更新，右侧给出重要场次的视频观看入口（须资源方有资源）
		（5）           子链接处：今日全部赛程、今日金牌赛程、完整赛程查询、中国队赛程；
		修改内容：
		（1）   增加子link数量。
		（2）       赛事观看添加icon。
		 
		模板ID： 5390
		中文名： 游戏赛事模板
		英文名： game_race

	3.  实时奖牌榜：田径世锦赛
	（1）           展现前10名实时奖牌榜信息：名次、国家（国旗、文字、link）、金银铜、奖牌总数
	（2）           点击国家link，跳转到该国按时间、按项目的奖牌信息汇总。
	（3）           子链接：查看完整奖牌榜、查看全部金牌得主
	修改内容：
	（1） 更换金银铜icon。
	（2）  增加子link数量。
	 
	模板ID： 1165
	中文名： 亚运奖牌榜模板
	英文名： ag_medal

### 完成情况

模板逻辑已处理完~还未上线~随时上线~

## 效果截图 

暂无~

## pc客服模板

### 背景与目标

	目的：在中间页展示商户所有业务电话；对用户：能够方便在结果页找到所需电话，提升搜索体验；
	目的：展示企业更多信息：对用户：使用户对企业能够有更深的了解，对企业：品牌宣传；对百度：全面的产品信息展现，形成信息黄页；
	目的：增加增值服务业务；对公司：产生增值价值；

### 完成情况

已完成，6月24号上线~

## 效果截图 

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/6cb466487d5ddd0e08e2861b504020a6/image.png)

## 后续排期

* 汽车哥伦布卡片~