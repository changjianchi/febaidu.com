# 祁鹏远

> 2017年3月13日~2017年3月17日

#### xml转mcpack(@阳阳@鹏远)
- 背景：
mcpack会比xml在只有一个数组元素的情况下多一层结构、gss从mola获取的原始数据是mcpack的，gss代码中将mcpack先转成了xml，xml传给odp又转成了array
- 收益：影响PV 暂无，GMV 暂无
- **工作量评估** 
  - 涉及26个模板的修改
	- 体育：
    	- sport_match_list
		- nba	
		- wise_nba_match      【done】
		- sport_rank_score
		- matchgeneral
		- sport_avsb_wise
	- 兜底：
	    - table01	
		- table02
		- liarphone2
		- sg_voice_audiobook_museum
		- tv_precision    【done】
		- train_station	   【done】
		- official_web   【done】
		- olympicmedal
		- sg_astro
		- wise_astro
		- table04
		- table08new
		- kefu
    - 出行民生：
    	- sam_wise_ticket_lp
		- form3	
		- ticket12306	【done】
		- table09
	- 医疗：
    	- muying_babycannot	【done】
	- 学术：
    	- wa_xueshu_journal_info	【done】
	- 时效性：：
    	- offical_weibo	【done】
- 开发模板
	无
- **完成情况**
	3月13号介入
- 本周进展
	见需求后边，都是待测试上线状态
- 线下预览地址
	暂无
- 效果图
 	暂无
 
#### 问答短观点聚合产品需求 （项目状态：模版已上线，配置周五上线） @ 鹏远 
- 背景：问答query中有很大一部分比例是开放型问题，这类问题往往没有唯一答案可以用来满足用户，而网络上的
回答常常具有多个观点，当前的满足是通过一条条结果罗列或者简单聚合的方式，用户仍然有很大的浏览理
解成本。
- 收益：pv80w/day
- **工作量评估** 
    - 需求量：
      1张结果页，1张情景页
    - 开发风险：
        - 锚点链接|1次
        - 同时存在同步、异步交互方式 | 1次 
    - 沟通风险：
        - 暂无
- **完成情况** 
	- 3月17日  rd配置上线
	- 3月14日  模版上线
	- 3月10日~3月14日  ubs评估，走三级单
	- 3月9日  提测
	- 3月7日~3月8日 开始联调
    - 3月1日 rd数据ready
	- 2月27日~3月7日 卡片开发
- 本周进展 
    - 本周模版上线，rd配置3月17上线。
- **排期计划**
	- 3月10日 小流量上线
	- 3月9日  提测
    - 3月7日~3月8日 开始联调
    - 2月28日  rd数据ready
	- 2月27日~3月7日 卡片开发
	- 2月24日  开始评审
- 效果图
	<p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/37c17181f90261995d454181d1df6151/image.png)</p>
	<p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/00d7889d12e660f7da2aa78b9668456d/image.png)</p>



 
### 民生 （鹏远）  
#### 图文优化需求 （项目状态：联调中） @ 鹏远 
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
	- 3月13日~3月16日 开发和联调
- 本周进展 
	- 本周卡片已完成开发，现在进入联调中。
- **排期计划**
  - 3月13日~3月16日 开发和联调
- 效果图 
	<p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/6086c804ed0406081fd35757cb370291/image.png)</p>
	<p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/1140d0cf6a0ca85a7dd1e526aada5201/image.png)</p>
 
#### 问答摘要优化产品需求 （项目状态：下周介入） @ 鹏远 
- 背景：该项目旨在针对搜索中的精准问答类型query，依托自然语言处理技术和Rank策略从全网搜索结果中进行深
度挖掘、匹配、加工，将所有结果中（目前主要是自然结果，后面有可能接入阿拉丁等产品）最能满足用户
需求的结果和内容提取出来，以简洁的摘要文字展示给用户，提升满足的效率。
- 收益：暂无
- **工作量评估** 
    - 需求量：
      1张结果页
    - 开发风险：
    - 沟通风险：
- **完成情况** 
	- 暂无
- 本周进展 
    - 下周二开始介入
- **排期计划**
    - 3月23日  联调
	- 3月22日  数据产出
	- 3月21日  卡片开发
- 效果图
	<p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/c99c90a97df4c46d28e2fe4fe8590794/image.png)</p>
	<p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/39e76191a8d1bd4b61d1ded24e0902f7/image.png)</p>
	
#### 校园欺凌项目技术方案需求 （项目状态：待排期） @ 鹏远 
- 背景：暂无
- 收益：暂无
- **工作量评估** 
    - 需求量：
    - 开发风险：
    - 沟通风险：
- **完成情况** 
	- 暂无
- 本周进展 
    - 暂无
- **排期计划**
	- 3月20日  评审
- 效果图
	
