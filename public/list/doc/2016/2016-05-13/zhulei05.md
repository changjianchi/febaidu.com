# 朱雷

> 从2016-04-15到2016-04-22

## 哥伦布-民生类-国外景点天气优化

### 背景

目前线上国外景点天气召回的是老的天气卡片，这次需求就是要优化这一块，把这些query的体验跟国内天气打平。

### 收益

影响pv:4w。

### 完成情况

新增模板，采用短线架构，小流量上线，目前开发hold，优先处理天气自然结果改造的转全

### 效果

![image](http://gitlab.baidu.com/psfe/psdoc/uploads/f54a4687a0d0466c775a1767025d3eda/image.png)

## 哥伦布-民生类-天气自然结果改造转全

### 背景

天气自然结果改造实验正收益，换query比例下降，有点增加，点击率增加。实验可以转全。

### 收益

换query比例下降，有点增加，点击率增加

### 完成情况

新增模板，从短线架构迁移到长线架构，目前联调中，预计5.20之前上线

### 效果

![image](http://gitlab.baidu.com/psfe/psdoc/uploads/f54a4687a0d0466c775a1767025d3eda/image.png)

## 哥伦布-民生类-万年历

### 背景

万年历二期实验结论为负收益，PM针对实验结果产出了迭代优化方案

### 收益

影响pv:18w.

三期实验结论：

三期实验按照query分为农历和黄历2大类

农历类：

* 实验组一：有本月宜事查询和本月黄道吉日查询按钮，实验结论为持平，分发量减少
* 实验组二：无本月宜事查询和本月黄道吉日查询按钮，实验结论为持平，分发量减少。

黄历类：

* 实验组一：有本月宜事查询和本月黄道吉日查询按钮，实验结论为略有正收益，媒体时长增加，分发量减少。
* 实验组二：无本月宜事查询和本月黄道吉日查询按钮，实验结论为略有正收益，媒体时长增加，分发量减少。

### 完成情况

新增模板，小流量上线，query=黄历,sid=[104811](https://m.baidu.com/s?word=%E9%BB%84%E5%8E%86&sid=104811),[104812](https://m.baidu.com/s?word=%E9%BB%84%E5%8E%86&sid=104812)，二维码：![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/bc03ba0c4029002328f3e8fb013ea8f1/image.png),  ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/6b20630e1a02b80aa631f4fe22a02799/image.png)

### 本周更新

黄历已转全，农历需要优化，方案已评审，5.18介入，4天工作量，5.25联调，5.27上线，泛需求暂时hold，后续可能先做黄历和农历的自然结果改造

### 效果

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/32e67d3eb40727d05fc2b7cfcfba413f/image.png)

## 哥伦布-民生类-wise快递寻址

### 背景

对寻址类相关的query推出sigma大卡，优化线上已有大卡的样式。整合自然结果，满足用户的主需求，激发用户潜在需求。

### 收益

影响面36w

### 完成情况

新增模板，小流量上线，  query=圆通快递，sid=[104612](https://m.baidu.com/s?word=%E4%B8%AD%E9%80%9A%E5%BF%AB%E9%80%92&sid=104612) , [104613](https://m.baidu.com/s?word=%E4%B8%AD%E9%80%9A%E5%BF%AB%E9%80%92&sid=104613)，二维码：![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/b97141c9423c1b5c85aa119348caab6a/image.png), ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/6c330209bd380696a516aae390fa93f6/image.png)

5.13转全

### 效果

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/2d4e3ba48e35c46b88fc3efd412ee48a/image.png)

## 哥伦布民生类归纳

* 天气：FE 朱雷 国外景点优化：模板开发hold，优先处理自然结果改造转全
* 万年历：FE 朱雷，黄历5.11转全，农历需求已评审，5.18介入，4天工作量，5.25联调，5.27上线
* 快递寻址：FE 朱雷， 已上线，5.13转全
* 违章二期：林鑫跟进，5.11介入，5.30联调，6.2上线
* 驾驶员扣分：林鑫跟进，6.3介入，3天工作量，6.8联调
* 起名：FE 谢玲娟 实验略负，PM已经产出了修改方案，计划对情景页进行优化，方案已评审，工作量1天，PM内部先沟通是否能插入到解梦之前
* 日历假期：FE 玲娟，5.12模板已上线
* 星河迭代：FE 玲娟, 测试中，5.16上线
* 解梦：FE 玲娟，5.12介入，工作量5天，5.19联调
