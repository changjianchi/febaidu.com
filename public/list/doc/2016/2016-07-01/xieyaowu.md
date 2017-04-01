# 谢耀武

> 从2016-06-27 到 2016-07-01

### Galaxy

下周开始整理Galaxy需求，先定位到要做哪些，然后针对性的对Galaxy平台优化，和@朱雷的沟通点：

1. 使用成本
1. 如何评估收益
1. 组件的种类
1. 他人参与的流程
1. 添加新组件的格式
1. 组件是否能直接预览
1. 维护成本
1. 组件的格式（smarty还是纯html）
1. 组件平台升级

### 任务list导航

* ~~城市到城市 - 小流量实验中，点击率+18%，换query-19%，正向~~
* 火车票点到点 - 模板已上线
* 汽车票点到点 - 模板复用，小小的修改下，目前等待rd环境联调
* 飞机票点到点 - 等rd召回环境
* 船票点到点 - 待评审

## 天宁岛 - 出行 - 汽车票点到点

### 背景

改进线上汽车票点到点模板，添加其他方式子卡
 
### 预计收益

1. 推荐其他出行方式换Query下降，有效提高出行整体GMV。
1. 需求综合，有点上升。

### 进度

一共2个子卡：汽车票、其他出行方式，汽车票模板在城市到城市模板`travel_bus`基础上优化样式，做成抽样模板`sam_travel_bus`，其他出行方式直接复用模板`travel_otherlist`

目前等待rd联调环境，模板开发成本不大

### 效果图

<a href="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/34ca48b2844147dc30864d323ded980f/image.png" target="_blank">
    <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/34ca48b2844147dc30864d323ded980f/image.png" width="300">
</a>

## 天宁岛 - 出行 - 火车票点到点

### 背景

对城市到城市火车（如北京到上海火车票）的搜索场景下的需求和结果进行哥伦布化，有序地组织和改造，更好满足出行用户的需求。

### 预计收益

预计pv:150-200w，在城市到城市机票/火车（如北京到上海火车票）的搜索场景下，目前单纯给出了火车购买的阿拉丁，从换Query分析中可以看出，用户有尝试对比选择其他交通方式的潜在需求，当前卡片并没有满足整个出行场景下的所有需求；此外，出行场景中购票前后，仍然有很多可以挖掘的潜在需求，并且可以根据出行方式的不同，目的地的不同，给出针对性的满足。

### 进度

模板06-30（周四）上线

新增4个模板，由于评估问题，现在先上3个模板：

* 火车票子卡 - travel_ptptrain 同travel_train的区别是样式和底部按钮，如果比【城市到城市-火车票】模板正向，则会统一使用该模板，删除其他版本     
* 火车票子卡 - 抽样 - sam_travel_ptptrain  没有导航+没有滑动，抽样结束后会删除模板
* ~~订票助手 travel_trainhelp~~
* 其他出行方式 - travel_otherlist

### 效果图

<a href="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/a555bcf4f4c30f6f83d4b0814bdb3b08/image.png" target="_blank">
    <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/a555bcf4f4c30f6f83d4b0814bdb3b08/image.png" width="300">
</a>