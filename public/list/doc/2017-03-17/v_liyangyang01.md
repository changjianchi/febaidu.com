# 李阳阳

> 从3.06-3.10
    
## 房价走势图
* 背景：用户在进行城市/城市区域商圈的房价搜索下，线上均为自然结果展示，且排名靠前的结果多为新闻资讯，无房价及走势内容
的直观展现，导致用户从城市房价换query到城市房价多少钱一平行为较多，新增房价走势卡，将房价信息进行直观展现，减少用户信息
获取步长，提升搜索满意度。
- **工作量评估** 
  - 需求量：
    新增一个模板
  - 开发风险：
    熟悉h5的svg画图| 1次 
    使用复杂动画交互 | 2次 | 切换异步 | 点击浮层位置展示 1次
  - 沟通风险：
    城市数据接口 | 1次
- 开发模板
    新增结果页模板 | 1个
* 完成情况： 
    * 2月9号schema已给出，预计2月15号开始介入
    * 2月15号已介入开发~预计2月22号完成~
    * 2月20到2月23号迁移情景页~2月24号完成~
    * 2月28号已提测~
    * 3月2号人工评估中~预计3月6号上线
    * 3月6号走单子，被打回，单资源方不能上线
    * 3月9号，pm修改了功能，10号重新走单子，待上线状态，模板待修改
    * 3月14号上线，50%的流量实验中，约12w/pv每天
* 线上预览地址
    * [北京房价](https://m.baidu.com/s?word=%E5%8C%97%E4%BA%AC%E6%88%BF%E4%BB%B7&sid=101457)
- 效果图
     <p><img src="../2017-02-24/img/v_liyangyang01/zhexian.png" width="320"></p>

## 家装效果图结果页模板样式优化
* 背景：家装效果图模板样式优化（decoration）
* 完成情况： 
    * 3月6号介入
    * 3月6号已完成，rd正在接数据 建库，等待联调
    * 3月16号已上线
* 线上预览地址
    * [家装效果图](http://cp01-ala-fe-col-2.epc.baidu.com:8003/s?word=%E5%AE%B6%E8%A3%85%E6%95%88%E6%9E%9C%E5%9B%BE&sid=101470)
- 效果图
    <p><img src="../2017-03-10/img/v_liyangyang01/decoration.png" width="320"></p>

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
- **完成情况**
    3月13号到3月15号schema产出时间
    3月22资源方给数据
    3月23到29雪峰数据处理
    3月29到4月3号影睇数据xml产出
    清明节节后联调
    前端4月3号前准备好模板
- 本周进展
    结果页schema和情景页schema都已给出
    结果页已介入假数据平台开发
- 线下预览地址
    暂无
- 效果图
    <p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/10a5728b367f3a37e18a58fba81444e0/image.png)</p>

## xml转mcpack
- 背景：
mcpack会比xml在只有一个数组元素的情况下多一层结构、gss从mola获取的原始数据是mcpack的，gss代码中将mcpack先转成了xml，xml传给odp又转成了array
- 收益：影响PV 暂无，GMV 暂无
- **工作量评估** 
  - 涉及26个模板的修改
    - 体育：
        - sport_match_list
        - nba   
        - wise_nba_match     【done】
        - sport_rank_score
        - matchgeneral
        - sport_avsb_wise
    - 兜底：
        - table01   
        - table02
        - liarphone2
        - sg_voice_audiobook_museum
        - tv_precision      【done】
        - train_station    【done】
        - official_web    【done】
        - olympicmedal
        - sg_astro
        - wise_astro
        - table04
        - table08new
        - kefu
    - 出行民生：
        - sam_wise_ticket_lp
        - form3 
        - ticket12306   【done】
        - table09    
    - 医疗：
        - muying_babycannot    【done】
    - 学术：
        - wa_xueshu_journal_info   【done】
    - 时效性：：
        - offical_weibo
- 开发模板
    无
- **完成情况**
    3月13号介入
- 本周进展
    见需求后边，以上done的是待测试上线状态
- 线下预览地址
    暂无
- 效果图
    暂无