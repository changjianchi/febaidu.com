# 李阳阳

> 从3.20-3.24

## 精准楼盘
* 背景：
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
    - 暂无
- **排期计划**
  - 3月13号到3月15号schema产出时间
  - 3月22资源方给数据
  - 3月23到29雪峰数据处理
  - 3月29到4月3号影睇数据xml产出
  - 清明节节后联调
  - 前端4月3号前准备好模板
- **完成情况** 
  - 3月13号到3月15号schema
  - 3月20日 结果页已介入假数据平台开发
  - 3月22日 3月22日结果页building已开发完毕
  - 3月23日 介入情景页卡片周边配套模板的开发
- 本周进展 
  - 3月20日 结果页已介入假数据平台开发
  - 3月22日 3月22日结果页building已开发完毕
  - 3月23日 介入情景页卡片周边配套模板的开发，已开发完成
- 线下预览地址
    暂无
- 效果图
    <p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/10a5728b367f3a37e18a58fba81444e0/image.png)</p>
    <p style="width:300px">![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/c0d26779f12ee3f4602f6840a8b49370/image.png)</p>

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
    * [度量衡](http://cq01-ala-fe-4.epc.baidu.com:8003/s?word=%E5%BA%A6%E9%87%8F%E8%A1%A1&wiseus=10.40.23.46)
- 效果图（新添加单位的图）
    <p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/488b0404de97996eb1fa794680c6204a/image.png)</p>

## xml转mcpack
- 背景：
mcpack会比xml在只有一个数组元素的情况下多一层结构、gss从mola获取的原始数据是mcpack的，gss代码中将mcpack先转成了xml，xml传给odp又转成了array
- 收益：影响PV 暂无，GMV 暂无
- **工作量评估** 
  - 涉及26个模板的修改
    - 体育：
        - sport_match_list    【done】
        - nba   
        - wise_nba_match     【done】
        - sport_rank_score
        - matchgeneral
        - sport_avsb_wise
    - 兜底：
        - table01   【无问题】
        - table02
        - liarphone2
        - sg_voice_audiobook_museum
        - tv_precision      【done】
        - train_station    【done】
        - official_web    【done】
        - olympicmedal
        - sg_astro    【done】
        - wise_astro    【done】
        - table04
        - table08new
        - kefu  【已与pm确认，资源线上已无展现，模板绑定着资源删不掉，等待pm全部解绑资源，可删除】
    - 出行民生：
        - sam_wise_ticket_lp  有人在写，模板改完了，跟正在做修改的fe商讨下什么时候上线
        - form3
        - ticket12306   【done】
        - table09    【无模板】
    - 医疗：
        - muying_babycannot    【done】
    - 学术：
        - wa_xueshu_journal_info   【done】
    - 时效性：：
        - offical_weibo    【done】
- 开发模板
    无
- **完成情况**
    3月13号介入
- 本周进展
    3月23日【done】进行上线。设计预处理的下周跟鹏远开始涉及~预计下周五提测，清明节后上线
- 线下预览地址
    暂无
- 效果图
    暂无