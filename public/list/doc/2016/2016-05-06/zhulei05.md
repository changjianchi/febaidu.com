# 朱雷

> 从2016-04-15到2016-04-22

## 哥伦布-民生类-国外景点天气优化

### 背景

目前线上国外景点天气召回的是老的天气卡片，这次需求就是要优化这一块，把这些query的体验跟国内天气打平。

### 收益

影响pv:4w。

### 完成情况

新增模板，采用短线架构，小流量上线，目前模板开发中，预计5.10联调，5.14上线

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

荣总提出了一个意见：页面内容太长，农历内容太靠下。于是PM要求再上一个实验组，把农历内容放在页面最上方,预计工作量1小时，5.6上线

### 效果

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/32e67d3eb40727d05fc2b7cfcfba413f/image.png)

## 哥伦布-民生类-wise快递寻址

### 背景

对寻址类相关的query推出sigma大卡，优化线上已有大卡的样式。整合自然结果，满足用户的主需求，激发用户潜在需求。

### 收益

影响面36w

### 完成情况

新增模板，小流量上线，  query=圆通快递，sid=[104612](https://m.baidu.com/s?word=%E4%B8%AD%E9%80%9A%E5%BF%AB%E9%80%92&sid=104612) , [104613](https://m.baidu.com/s?word=%E4%B8%AD%E9%80%9A%E5%BF%AB%E9%80%92&sid=104613)，二维码：![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/b97141c9423c1b5c85aa119348caab6a/image.png), ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/6c330209bd380696a516aae390fa93f6/image.png)

吴海提出2个意见：

* 查询结果返回的快递公司如果不是原来query的快递公司，则页面其他内容要一起联动，换成新快递公司的内容
* 官网模块的费用估算和在线寄件按钮，点击后跳到我们自己的情景页，放在官网模块不妥

PM已经产出了修改方案,5.6修改，5.9上线

### 效果

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/2d4e3ba48e35c46b88fc3efd412ee48a/image.png)

## 哥伦布民生类归纳

* 天气：

    FE 朱雷

    - 趋势图白底实验：4.27模板已上线，query=武汉天气，sid=[102157](https://m.baidu.com/s?word=%E6%AD%A6%E6%B1%89%E5%A4%A9%E6%B0%94&sid=102157)，[102158](https://m.baidu.com/s?word=%E6%AD%A6%E6%B1%89%E5%A4%A9%E6%B0%94&sid=102158)，二维码：![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/af6df80e3f827b5fddf4ec4df8c01f32/image.png), ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/f44834aa706e00ff5e1958fa54f72624/image.png)
    - 国外景点优化：模板开发中，预计5.10联调,5.14上线
* 万年历：FE 朱雷，根据荣总提出的意见新增实验组，预计5.6上线 
* 快递寻址：FE 朱雷， 已上线，根据吴海提出的意见需要修改2处，5.6完成，5.9上线
* 快递单号查询v2：FE 玲娟 ，4.28模板已上线,query=申通快递单号查询，sid=[104846](http://m.baidu.com/s?word=%E7%94%B3%E9%80%9A%E5%BF%AB%E9%80%92%E5%8D%95%E5%8F%B7%E6%9F%A5%E8%AF%A2&sid=104846),[104847](http://m.baidu.com/s?word=%E7%94%B3%E9%80%9A%E5%BF%AB%E9%80%92%E5%8D%95%E5%8F%B7%E6%9F%A5%E8%AF%A2&sid=104847),[104848](http://m.baidu.com/s?word=%E7%94%B3%E9%80%9A%E5%BF%AB%E9%80%92%E5%8D%95%E5%8F%B7%E6%9F%A5%E8%AF%A2&sid=104848)
* 违章二期：林鑫跟进，未开始
* 起名：FE 玲娟  4.22模板已上线，query=起名，sid=104918, [link](http://m.baidu.com/s?ie=UTF-8&wd=%E5%8F%96%E5%90%8D&sid=104918)
* 世界时间：FE 玲娟 ,已上线,query=[纽约时间](https://m.baidu.com/#|src_%E7%BA%BD%E7%BA%A6%E6%97%B6%E9%97%B4|sa_ib)
* 日历假期：FE 玲娟，开发完成，5.9联调，5.12上线
* 星河迭代：FE 玲娟, 开发中，5.10联调，5.13上线
* 解梦：FE 玲娟，5.12介入，工作量5天，5.19联调
