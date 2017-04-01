# 谢耀武

> 从2016-03-28到2015-04-01

## 天宁岛 - 旅游城市2.0过渡版本

### 背景

由于现在哥伦布机制时间，本周的迭代是过渡版本，主要添加一个新的问答子卡和情景页，修改收起状态的页面向2.0靠拢。

### 收益

属于小流量（抽样ID为104212-104214），抽60%流量，全量后日均PV48W

> 以下分析基于3月19日~3月21日期间的小流量数据，下面数据描述中使用的对照组为线上纯白样式（无城市场景化卡片）

整体效果（不区分强弱旅游需求）：总的来说用户体验是略正的，比之前一版有了很大的提升。

* 点击率：+9.33%（113.34% → 122.67%）
* 有点击行为比例：+0.02%（54.88% → 54.90%）
* 有跳转点击比例：-0.03%（49.72 → 49.69%）
* 换query比例：-0.98%（22.08% → 21.10%）
* 哥伦布长点击率*：-6.16%（55.70% → 49.55%）
* 导流率*：+17.79%（4.16% → 21.95%）
* 总跳转点击率*：-9.30%（79.48% → 70.19%）
* 卡片跳转点击占比*：64.04%

### 完成情况

针对线上模板(`tinian_trav`)进行优化，预计04-01测试并上线，优化列表如：

* 玩法情景页拆分为=>路线+游记2个情景页
* 添加问答子卡、问答情景页
* 修改收起页面

召回：[北京](http://cp01-ps-fe-2.epc.baidu.com:8003/s?word=%E5%8C%97%E4%BA%AC)
![北京](http://s.jiathis.com/qrcode.php?url=http://cp01-ps-fe-2.epc.baidu.com:8003/s?word=%E5%8C%97%E4%BA%AC)

### 后续计划

使用哥伦布机制开发天宁岛旅游城市2.0版本，目前确认稿还没有完成

### 最终效果图

* 添加的问答子卡

<a href="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/a320fb4850fc19c8c1fde38b9fe1e4ea/image.png">
    <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/a320fb4850fc19c8c1fde38b9fe1e4ea/image.png" width="200">
</a>

* 添加的问答情景页

<a href="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/382a9a8b30268d4e6b63150827e97e65/image.png">
    <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/382a9a8b30268d4e6b63150827e97e65/image.png" width="200">
</a>


* 修改收起状态

<a href="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/4ef721ed80da1ee68a6e442a79551f3d/image.png">
    <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/4ef721ed80da1ee68a6e442a79551f3d/image.png" width="200">
</a>


## 天宁岛 - 景点二期

只是初步评审，无更新

## 天宁岛 - 餐饮二期

> pm: 正波

@清乾跟进

## 天宁岛 - 周边游，周末游，无更新

只是初步评审，无更新

## 跟进其他需求 - 升级图片懒加载

[升级文档](http://sfe.baidu.com/#/阿拉丁/无线网页搜索/模板性能优化/图片懒加载方案)

### 已上线

* ./wise_car_cars/iphone.tpl: 东风标致301 不用修改，无
* ./sigma_disease/iphone.tpl: 甲亢 升级pad即可
* ./lvyouviewspot/iphone.tpl: 四川旅游景点大全 
* ./lvyouviewspot/iphone.tpl: yaowu 四川旅游景点大全 
* ./lvyouraiders/iphone.tpl: 上海
* ./lvyouraiders/iphone.tpl: 上海

### 待修改

* busticket_more/iphone.tpl:
* lvyouoversea/iphone.tpl:
* travel2/iphone.tpl:
* wise_discount/iphone.js:
* wise_scene_trav/inc_trav_subcommon.tpl:
