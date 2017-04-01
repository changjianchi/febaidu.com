# 朱雷

> 从2016-04-15到2016-04-22

## 哥伦布-民生类-天气自然结果改造转全(无更新)

### 背景

天气自然结果改造实验正收益，可以转全

### 收益

影响pv：1100w

### 完成情况

新增模板，从短线架构迁移到长线架构，全流量上线，已上线。query=[北京天气](https://m.baidu.com/s?word=%E5%8C%97%E4%BA%AC%E5%A4%A9%E6%B0%94&sid=102157)，二维码：![image](http://gitlab.baidu.com/psfe/psdoc/uploads/603cd9d9f61bb14609814157f8e6d77e/image.png)

### 效果

![image](http://gitlab.baidu.com/psfe/psdoc/uploads/cfd4b77cdcb354c02cc680bf40d1739f/image.png)

## 哥伦布-民生类-国外景点天气优化(无更新)

### 背景

目前线上国外景点天气召回的是老的天气卡片，这次需求就是要优化这一块，把这些query的体验跟国内天气打平。

### 收益

影响pv:4w。

### 完成情况

新增模板，采用短线架构，小流量上线，目前开发hold，优先处理天气自然结果改造的转全和日历相关需求

### 效果

![image](http://gitlab.baidu.com/psfe/psdoc/uploads/f54a4687a0d0466c775a1767025d3eda/image.png)

## 哥伦布-民生类-万年历农历优化

### 背景

上一期万年历实验中农历类query的实验结论为持平，本期继续对农历类query进行优化

### 收益

影响pv:9w.

### 完成情况

新增模板，小流量上线，目前模板开发hold，优先其他需求

### 效果

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/32e67d3eb40727d05fc2b7cfcfba413f/image.png)

## 哥伦布-民生类-wise快递寻址自然结果改造

### 背景

一期实验正收益，已经转全，二期进行进一步优化和自然结果改造。

### 收益

影响面18w

### 完成情况

新增模板，小流量上线，目前模板联调中，预计5.31提测，6.1上线

### 效果

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/2d4e3ba48e35c46b88fc3efd412ee48a/image.png)

## 哥伦布-民生类-日历假期优化

### 背景

在假期安排类query下，为用户展现放假安排表，并提供相关假期新闻资讯，满足用户的主需求，在此前提下，提供假期旅游相关推荐，将用户需求进一步转化激发。

### 收益

影响面9w

### 完成情况

新增模板，小流量上线，5.31介入，3天工作量，6.3联调，6.7上线

### 效果

![image](http://gitlab.baidu.com/psfe/psdoc/uploads/ed2c1c9430bf976f42d93f2c0efb7806/image.png)

## 哥伦布民生类归纳

* 天气：FE 朱雷 

    国外景点优化：模板开发hold，优先处理自然结果改造转全和日历相关需求

    自然结果改造转全：已上线，query=[北京天气](https://m.baidu.com/s?word=%E5%8C%97%E4%BA%AC%E5%A4%A9%E6%B0%94&sid=102157)，二维码：![image](http://gitlab.baidu.com/psfe/psdoc/uploads/603cd9d9f61bb14609814157f8e6d77e/image.png)

* 万年历：FE 朱雷
    
    假期安排：5.31介入，3天工作量，6.3联调，6.7上线

    农历优化：暂hold

* 快递寻址自然结果改造：FE 朱雷， 联调中,5.31提测,6.1上线
* 违章二期：林鑫跟进，5.11介入，5.31联调，6.8上线
* 驾驶员扣分：林鑫跟进，6.8介入，3天工作量，6.13联调
* 起名：FE 谢玲娟 UBS给出正收益结论，目前PM在准备转全
* 解梦：FE 玲娟，开发完成，5.27上线
* 菜谱：FE 玲娟，5.24介入开发（半天人力），6.2下午联调。6.6提测。暂定6.8上线
