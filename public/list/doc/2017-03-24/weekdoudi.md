# 兜底 （阳阳、鹏远）
>从2017年3月20日到2017年3月24日
* fe：阳阳 鹏远

## 精准楼盘(@阳阳)
- 背景：
用户在精准楼盘搜索行为中，存在多维度需求：基础摘要信息、房源、周边配套、房价走势等等。用户需要全面丰富的聚合信息，用于购房行为中的决策指导。而线上优质内容分散，用户信息收集的步长较长。精准楼盘2.0版本聚合多家优质资源，进行信息整合、结构化呈现，满足用户一站式楼盘信息获取需求。
- 收益：影响PV 暂无，GMV 暂无
- **工作量评估** 
  - 需求量：
   	新增两个模板，结果页一个buliding，情景页7个
  - 开发风险：
	样式多 | 1次 
	情景页和结果页通信复杂 | 1次 
  - 沟通风险：
    rd和wd的数据沟通 | 1次
- 开发模板
	暂无
- **完成情况**
	3月13号到3月15号schema产出时间
	3月22资源方给数据
	3月23到29雪峰数据处理
	3月29到4月3号影睇数据xml产出
	清明节节后联调
	前端4月3号前准备好模板
	3月22日结果页building已开发完毕
    3月23日介入情景页卡片周边配套模板的开发
- 本周进展
	结果页schema和情景页schema都已给出
	结果页已介入假数据平台开发
	3月22日结果页building已开发完毕
    3月23日介入情景页卡片周边配套模板的开发
- 平台预览地址
	* [北京装修报价](https://wwwhttps.baidu.com/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=building&dev_path=searchaladdin&dev_tpltype=default&sid=99999&dev_online=0&dev_file=default.xml&dev_fileformat=xml&dev_pos=asResult&wd=%E4%B8%87%E6%9F%B3%E4%B9%A6%E9%99%A2&word=%E4%B8%87%E6%9F%B3%E4%B9%A6%E9%99%A2)
- 效果图
 	<p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/10a5728b367f3a37e18a58fba81444e0/image.png)</p>
  
## 度量衡优化需求 （项目状态：待联调） @ 阳阳 
- 背景：pc和wise端的模版名的unitstatic_new，一些单位没有覆盖到~修改js添加换算单位
- 收益：暂无
- **工作量评估** 
  - 需求量：
 	wise和pc端的unitstatic_new模板js修改
  - 开发风险：
	rd配合|1次
  - 沟通风险：
- **完成情况** 
	- 3月23号修改后的环境给出	
- 本周进展 
	- 3月23号修改后的环境给出，等待与rd联调，rd27号介入
- **排期计划**
  - 3月21日~3月23日 开发
- wise预览地址
	* [北京装修报价](http://cq01-ala-fe-4.epc.baidu.com:8003/s?word=%E5%BA%A6%E9%87%8F%E8%A1%A1&wiseus=10.40.23.46)
- 效果图（新添加单位的图）
	<p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/488b0404de97996eb1fa794680c6204a/image.png)</p>

## xml转mcpack(@阳阳@鹏远)
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
	    - table01	【无问题】
		- table02
		- liarphone2
		- sg_voice_audiobook_museum 【done】
		- tv_precision    【done】
		- train_station	   【done】
		- official_web   【done】
		- olympicmedal
		- sg_astro	【done】
		- wise_astro	【done】
		- table04
		- table08new
		- kefu  【已与pm确认，资源线上已无展现，模板绑定着资源删不掉，等待pm全部解绑资源，可删除】
    - 出行民生：
    	- sam_wise_ticket_lp 【done】
		- form3	
		- ticket12306	【done】
		- table09	【无模板】
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
	3月23日【done】进行上线。
- 线下预览地址
	暂无
- 效果图
 	暂无
 


 
## 民生 （鹏远）  
## 图文优化需求 （项目状态：小流量） @ 鹏远 
- 背景：发现例如人物，影视剧等垂类的图文实体点击较高，用户有想看到更多实体推荐的需求。且之前在推荐聚合页中尝试过实体tag结构化，收益明显。故在搜索结果页尝试对图文推荐卡片进行tag结构化。
- 收益：50w pv
- **工作量评估** 
  - 需求量：
 	1张结果页，修改情景页
  - 开发风险：
	同步异步交互|1次
	结果页到情景页tab定位|1次
  - 沟通风险：
- **完成情况** 
	- 3月21日 小流量上线
	- 3月20日 走单
	- 3月17日 提测
	- 3月13日~3月16日 开发和联调	
- 本周进展 
	- 本周卡片小流量上线7%。
- **排期计划**
  - 3月13日~3月16日 开发和联调
- 效果图 
	<p> ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/6086c804ed0406081fd35757cb370291/image.png)</p>
	<p> ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/1140d0cf6a0ca85a7dd1e526aada5201/image.png)</p>
 
## 问答摘要优化产品需求 （项目状态：联调中） @ 鹏远 
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
	- 3月23日  联调
	- 3月22日  数据产出
	- 3月21日  卡片开发
- 本周进展 
    - 本周卡片开发完成，进入联调。
- **排期计划**
    - 3月23日  联调
	- 3月22日  数据产出
	- 3月21日  卡片开发
- 效果图
	<p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/c99c90a97df4c46d28e2fe4fe8590794/image.png)</p>
	<p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/39e76191a8d1bd4b61d1ded24e0902f7/image.png)</p>
 
## 校园暴力项目 （项目状态：小流量） @ 鹏远 
- 背景：原定“校园暴力”项目@建鑫老师已定稿，因技术方案问题，待重提一个模板的UE需求，其他方案不变。此次上线为下周一校园安全日的发布宣传打奠定基础，原定项目会继续下去，作为校园安全的升级优化版
- 本周进展 
    - 复用线上模板sg_womens_day,现在正在小流量，明天全量。
- 线上连接
	- [同学欺负](https://m.baidu.com/ssid=67b87370616d616c61931e/s?word=%E5%90%8C%E5%AD%A6%E6%AC%BA%E8%B4%9F&sid=101465)
	- [校园暴力](https://m.baidu.com/ssid=67b87370616d616c61931e/s?word=%E6%A0%A1%E5%9B%AD%E6%9A%B4%E5%8A%9B&sid=101465)
	- [孩子欺负](https://m.baidu.com/ssid=67b87370616d616c61931e/s?word=%E5%AD%A9%E5%AD%90%E6%AC%BA%E8%B4%9F&sid=101465)
- 效果图
	<p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/83f51a7a7de732fbfe1f481c4ed5b3dd/image.png)</p>
    <p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/dbccb05ddf0f4bbc8e90522dc03c2970/image.png)</p>
    <p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/8d6ec14464848b6f97875ef83fe468b8/image.png)</p>