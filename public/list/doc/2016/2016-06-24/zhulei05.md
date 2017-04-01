# 朱雷

> 从2016-06-20到2016-06-24

## 哥伦布-民生类-万年历农历优化(无更新)

### 背景

上一期万年历实验中农历类query的实验结论为持平，本期继续对农历类query进行优化

### 收益

影响pv:9w.

### 完成情况

新增模板，小流量上线，目前模板已上线，未开小流量

### 效果

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/32e67d3eb40727d05fc2b7cfcfba413f/image.png)

## 哥伦布-民生类-日历黄历自然结果改造

### 背景

黄历哥伦布之前已经全量,本期进行自然结果改造

### 收益

影响面16w

### 完成情况

新增模板，小流量上线。目前模板已上线，线上0流量，query=[黄历](http://tc-wise-pui76.tc.baidu.com:8003/s?word=%E9%BB%84%E5%8E%86&sid=102156)

### 效果

![image](http://gitlab.baidu.com/psfe/psdoc/uploads/4e02a738e497a3353f8aa987124e9dee/image.png)

## 哥伦布-民生类-日历假期优化(无更新)

### 背景

在假期安排类query下，为用户展现放假安排表，并提供相关假期新闻资讯，满足用户的主需求，在此前提下，提供假期旅游相关推荐，将用户需求进一步转化激发。

### 收益

影响面9w

### 完成情况

新增模板，小流量上线，query=[端午节放假安排](https://m.baidu.com/#|src_%E7%AB%AF%E5%8D%88%E8%8A%82%E6%94%BE%E5%81%87%E5%AE%89%E6%8E%92|sa_ib),sid=106756

### 效果

![image](http://gitlab.baidu.com/psfe/psdoc/uploads/ed2c1c9430bf976f42d93f2c0efb7806/image.png)

## 哥伦布-天气-结果页深度优化

### 背景

当前天气自然结果页改造产品中，还存在主需求满足不够完善、生活指数推荐与天气相关度不高等问题，为了继续深度优化用户搜索天气类query需求，特制定提出此优化方案

### 收益

主需求优化+自然结果页改造（需求簇）在天气全量1500W PV下验证, 今日生活指数&相关推荐聚合卡片在现有155个城市下验证

### 完成情况

跟PM沟通，目前先把预报趋势图的单曲线改为双曲线，24小时预报的走势也改为单曲线

### 效果

![image](http://gitlab.baidu.com/psfe/psdoc/uploads/c6fb3f0d5c0f5f628f34540c04c5b663/image.png)

## 实验模板清理

### 背景

目前阿拉丁实验模板数量巨大，有100多个，我们需要清理下已经不在使用的模板

### 思路

我认为要清理的不只是以sam_开头的实验模板，因为有些实验模板命名如果不规范未必是以sam_前缀命名的，我们要清理的应该是所有不在使用的模板。可以先从sam_开头的模板入手，将所有sam_开头的模板梳理一遍，同时结合生玛利亚平台去开发脚本定期跑出无流量的模板list。

* 如何确定模板不在使用？ 这个可以从圣玛利亚平台拿数据，圣玛利亚平台上有各个模板的展现量，我们可以写个定时脚本,每两周跑一次，把展现量为0的模板都筛选出来，并获取模板对应的changlog里最后一次修改人

* 如何推动改进？ 脚本获取到无展现模板的模版名和最后一次修改人数据后邮件出来，让各个人回复邮件确认是否可以删除以及完成时间点。同时hi上拉一个讨论组，把相关人员拉进去，每日推动。第一次清理的时候推动成本会比较大，但是第一次清理完之后问题就基本收敛了,以后例行跑脚本发邮件就行。

### 进度

一共93个无流量的sam_模板，目前已经全部确认，其中67个删除，20个保留，6个由于目前pm.open上资源未被回收，需要15天后再删除。

## 哥伦布民生类归纳

* 天气：FE 朱雷 

    国外景点优化：模板开发hold，优先处理自然结果改造转全和日历相关需求

    天气结果页深度优化：开发中，目前先开发趋势图的双曲线和24小时的单曲线

* 万年历：FE 朱雷
    
    假期安排：已小流量上线，query=[端午节放假安排](https://m.baidu.com/#|src_%E7%AB%AF%E5%8D%88%E8%8A%82%E6%94%BE%E5%81%87%E5%AE%89%E6%8E%92|sa_ib),sid=106756

    农历优化：已上线,query=[农历](https://m.baidu.com/s?word=%E5%86%9C%E5%8E%86&sid=107069)

    黄历改造：已上线模板，目前0流量，query=[黄历](http://tc-wise-pui76.tc.baidu.com:8003/s?word=%E9%BB%84%E5%8E%86&sid=102156)

* 快递寻址1.0架构迁移: 5.20开始迁移，FE无工作量，配合联调即可

* 违章二期：林鑫跟进，违章哥伦布测试完成，三级单中,预计6.27上线
* 起名二期：玲娟、张兵共同跟进，目前开发中，6.30日联调，7月1日提测，预计7月5日上线
* 星河情景页改造：FE 玲娟，开发完成，6.24上线模板

## 民生类年中KPI完成情况

民生类年终的KPI指标为改造pv覆盖完成30%，5月20日已经提前完成。目前天气、快递、日历、限行等项目都以转全，其中天气覆盖pv1000w+，天气项目转全后已经基本完成年中KPI。