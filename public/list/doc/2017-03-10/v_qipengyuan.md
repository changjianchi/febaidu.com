# 祁鹏远

> 2017年3月06日~2017年3月10日

#### 问答短观点聚合产品需求 （项目状态：提测中） @ 鹏远 
- 背景：问答query中有很大一部分比例是开放型问题，这类问题往往没有唯一答案可以用来满足用户，而网络上的
回答常常具有多个观点，当前的满足是通过一条条结果罗列或者简单聚合的方式，用户仍然有很大的浏览理
解成本。
- 收益：暂无
- **工作量评估** 
    - 需求量：
      1张结果页，1张情景页
    - 开发风险：
        - 锚点链接|1次
        - 同时存在同步、异步交互方式 | 1次 
    - 沟通风险：
        - 暂无
- **完成情况** 
	- 3月9日  提测
	- 3月7日~3月8日 开始联调
    - 3月1日 rd数据ready
	- 2月27日~3月7日 卡片开发，中间穿插妇女节样式的修改，可能会造成这个项目的delay
- 本周进展 
    - 本周模板已开发完成，联调完，现在正在提测中。
- **排期计划**
	3月10日 小流量上线
	3月9日  提测
    3月7日~3月8日 开始联调
    2月28日  rd数据ready
	2月27日~3月7日 卡片开发
	2月24日  开始评审
- 效果图
	<p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/37c17181f90261995d454181d1df6151/image.png)</p>
	<p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/00d7889d12e660f7da2aa78b9668456d/image.png)</p>

####  关于线上aladdin-showurl规范问题的需求 （项目状态：开发中） @ 阳阳 @ 鹏远  
- 背景：涉及30个模板的修改，将写死的文案调整为正确的即可，3月10日之前完成，将线上showurl为“百度智能聚合”、“搜索自动生成”、“百度智能生成”统一改为“搜索智能聚合”。
解成本。
- 收益：暂无
- **工作量评估** 
    - 需求量：
       - 涉及30个模板的修改
		 - 修复c-base模板上线，3月9日统一修复上线
		 	 - c_base/inc_pub.tpl
			 - laws_group	
			 - poi_multi
			 - poi_multi_weak
			 - poi_nobiz_mul
			 - poi_nobiz_mul_w	
			 - sam_stock_info1		
			 - star_videolist
			 - vd_list
			 - wise_hotel
			 - wise_novel_author		 	
			 - wise_novel_rank_book
			 - wise_novel_rank_general
			 - wise_recommend_news
			 - wise_relate_news
			 - wz_cartoons
		 - 写死的文案，修复模版上线，3月7日统一修复上线
		 	 - for_hotel
		 	 - general_person_relate
		 	 - inter_hotel
		 	 - tn_route
		 - 不用修复的模版
			 - we_novel_zbook
			 - novel_zbook
			 - wz_movielist
			 - realtime2
			 - vd_nocr_mv
			 - sp_term_3c
			 - we_wise_novel_book
			 - dom_hotel
			 - wise_novel_book
- **完成情况** 
    - 3月6日~3月10日 整体进行修复上线
- 本周进展 
    - 梳理所有模版样式需求，分类别进行样式升级，3月10日内完成整体修复上线。
- **排期计划**
	- 3月6日~3月10日 整体进行修复上线
    - 模板3月9号已批量上线中~修复完成~
    
### 民生 （鹏远）  
#### 图文优化需求 （项目状态：开发中） @ 鹏远 
- 背景：发现例如人物，影视剧等垂类的图文实体点击较高，用户有想看到更多实体推荐的需求。且之前在推荐聚合页中尝试过实体tag结构化，收益明显。故在搜索结果页尝试对图文推荐卡片进行tag结构化。
- 收益：暂无
- **工作量评估** 
  - 需求量：
 	1张结果页，修改情景页
  - 开发风险：
	同步异步交互|1次
	结果页到情景页tab定位|1次
  - 沟通风险：
- **完成情况** 
	- 11月9日评审，11月13日开始介入。
- 本周进展 
	暂无
- **排期计划**
  3月13日~3月17日 开发和联调
- 效果图 
	<p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/dfbcc384eb64ed5f24877cd0a958d6cc/image.png)</p>
	

#### xml转mcpack(@阳阳@鹏远)
- 背景：
mcpack会比xml在只有一个数组元素的情况下多一层结构、gss从mola获取的原始数据是mcpack的，gss代码中将mcpack先转成了xml，xml传给odp又转成了array
- 收益：影响PV 暂无，GMV 暂无
- **工作量评估** 
  - 涉及26个模板的修改
	- 体育：
    	- sport_match_list
		- nba	
		- wise_nba_match
		- sport_rank_score
		- matchgeneral
		- sport_avsb_wise
	- 兜底：
	    - table01	
		- table02
		- liarphone2
		- sg_voice_audiobook_museum
		- tv_precision
		- train_station	
		- official_web
		- olympicmedal
		- sg_astro
		- wise_astro
		- table04
		- table08new
		- kefu
    - 出行民生：
    	- sam_wise_ticket_lp
		- form3	
		- ticket12306
		- table09
	- 医疗：
    	- muying_babycannot
	- 学术：
    	- wa_xueshu_journal_info
	- 时效性：：
    	- offical_weibo
- 开发模板
	无
- **完成情况**
	- 3月13号介入
- 本周进展
	了解需求
- 线下预览地址
	暂无
- 效果图
 	暂无
 	
 	
### 公益 （鹏远）  
#### 三八妇女节sigma卡 （项目状态：已全量） @ 鹏远 
- 背景：关注妇女群体，尤其是妇女群体遭受的不公平待遇，引起社会关注，为弱势群体提供帮助，同时可提升百度品牌形象
- 收益：影响PV 150 W/日
- **工作量评估** 
  - 需求量：
  5个sigma大卡
  - 开发风险：
  模版样式兼容| 1次 | 5张sigma大卡都做成一个模板，做成都兼容的样式
  使用复杂动画交互 | 1次 | 点赞效果
  点击弹出浮层| 1次 | 使用popup组建
  - 沟通风险：
   效果图定稿问题| 1 次 |ue头图部分还未定稿 
- **完成情况** 
	- 3月7日			模板全量
	- 3月3日			模板上线
	- 3月2日			走单中。。
	- 3月1日			老大提意见，修改妇女节头图样式
	- 2月24日~2月28日 pm处理广告下移delay。。
	- 2月23日~2月24日 提测
	- 2月20日~2月22日 卡片整体开发完毕，ue走查并联调
	- 2月13日~2月17日 完成卡片的整体开发，但是头图部分ue还未定稿，可能会有delay的风险
- 本周进展 
	- 3月3日模版上线，3月7日全量。
- **排期计划**
	- 2月28日 模版上线
    - 2月27日 走三级单
    - 2月23日~2月24日 提测
	- 2月20日~2月22日 ue走查并联调
	- 2月13日~2月17日 卡片整体开发（现在头图ue还未定稿，可能会delay） 
- 线上连接 
	[妇女节](https://m.baidu.com/s?word=%E5%A6%87%E5%A5%B3%E8%8A%82)
	[家庭暴力](https://m.baidu.com/s?word=%E5%AE%B6%E5%BA%AD%E6%9A%B4%E5%8A%9B)
	




