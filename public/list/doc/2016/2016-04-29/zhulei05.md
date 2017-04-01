# 朱雷

> 从2016-04-15到2016-04-22

## 哥伦布-民生类-天气

### 背景

哥伦布项目的探索先驱，在满足用户对天气情况的搜索主需求之后前置其他与天气相关的需求，如饮食、娱乐、运动等。

关总想要在主需求部分实验白底的效果，包括柱状图和单条曲线

### 收益

影响pv:20w。

### 完成情况

优化模板，采用2.0架构，小流量上线，4.27模板已上线，query=武汉天气，sid=[102157](https://m.baidu.com/s?word=%E6%AD%A6%E6%B1%89%E5%A4%A9%E6%B0%94&sid=102157)，[102158](https://m.baidu.com/s?word=%E6%AD%A6%E6%B1%89%E5%A4%A9%E6%B0%94&sid=102158)，二维码：![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/af6df80e3f827b5fddf4ec4df8c01f32/image.png), ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/f44834aa706e00ff5e1958fa54f72624/image.png)

### 效果

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/8588294211e68b35ae7f3f7375d32ef4/image.png)

## 哥伦布-民生类-万年历

### 背景

万年历二期实验结论为负收益，PM针对实验结果产出了迭代优化方案

### 收益

影响pv:18w.

二期实验结论：

实验一（主卡+推荐）：

* 换query比例：实验组相对提高10.14%，绝对提高0.72%（7.10% -> 7.82%）
* 有点击行为比例：实验组相对降低9.19%，绝对降低2.8%（30.47% -> 27.67%）
* 跳转点击率：实验组相对降低15.04%，绝对降低3.15%（20.95% -> 17.81%）

实验二（仅主卡）：

* 换query比例：实验组相对提高6.42%，绝对提高0.46%（7.10% -> 7.56%）
* 有点击行为比例：实验组相对降低12.90%，绝对降低3.93%（30.47% -> 26.54%）
* 跳转点击率：实验组相对降低21.91%，绝对降低4.59%（20.95% -> 16.36%）

### 完成情况

新增模板，小流量上线，query=黄历,sid=[104811](https://m.baidu.com/s?word=%E9%BB%84%E5%8E%86&sid=104811),[104812](https://m.baidu.com/s?word=%E9%BB%84%E5%8E%86&sid=104812)，二维码：![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/bc03ba0c4029002328f3e8fb013ea8f1/image.png),  ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/6b20630e1a02b80aa631f4fe22a02799/image.png)

本周ubs初步产出了实验数据，发现日历顶部左右切换按钮的点击略降，调整了日历顶部按钮和文案的位置

### 效果

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/32e67d3eb40727d05fc2b7cfcfba413f/image.png)

## 哥伦布-民生类-wise快递寻址(无更新)

### 背景

对寻址类相关的query推出sigma大卡，优化线上已有大卡的样式。整合自然结果，满足用户的主需求，激发用户潜在需求。

### 收益

影响面36w

### 完成情况

新增模板，小流量上线，  query=圆通快递，sid=[104612](https://m.baidu.com/s?word=%E4%B8%AD%E9%80%9A%E5%BF%AB%E9%80%92&sid=104612) , [104613](https://m.baidu.com/s?word=%E4%B8%AD%E9%80%9A%E5%BF%AB%E9%80%92&sid=104613)，二维码：![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/b97141c9423c1b5c85aa119348caab6a/image.png), ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/6c330209bd380696a516aae390fa93f6/image.png)

### 效果

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/2d4e3ba48e35c46b88fc3efd412ee48a/image.png)

## 哥伦布民生类归纳

* 天气：

    FE 朱雷

    - 趋势图白底实验：4.27模板已上线，query=武汉天气，sid=[102157](https://m.baidu.com/s?word=%E6%AD%A6%E6%B1%89%E5%A4%A9%E6%B0%94&sid=102157)，[102158](https://m.baidu.com/s?word=%E6%AD%A6%E6%B1%89%E5%A4%A9%E6%B0%94&sid=102158)，二维码：![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/af6df80e3f827b5fddf4ec4df8c01f32/image.png), ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/f44834aa706e00ff5e1958fa54f72624/image.png)
    - 国外景点优化：由于ue图delay1天，FE4.29休假，所以模板5.3开始开发，由于FE不是关键路径，所以不影响联调时间，预计5.10联调
* 万年历(无更新)：FE 朱雷， 三期迭代，4.21已上线，query=黄历，sid=[104811](https://m.baidu.com/s?word=%E9%BB%84%E5%8E%86&sid=104811),[104812](https://m.baidu.com/s?word=%E9%BB%84%E5%8E%86&sid=104812)
* 快递寻址(无更新)：FE 朱雷， 已上线，query=圆通快递,sid=[104612](https://m.baidu.com/s?word=%E4%B8%AD%E9%80%9A%E5%BF%AB%E9%80%92&sid=104612), [104613](https://m.baidu.com/s?word=%E4%B8%AD%E9%80%9A%E5%BF%AB%E9%80%92&sid=104613)
* 快递单号查询v2：FE 玲娟 ，4.28模板已上线,目前还没开流量
* 违章二期：林鑫跟进，未开始
* 起名：FE 玲娟  4.22模板已上线，query=起名，sid=104918, [link](http://m.baidu.com/s?ie=UTF-8&wd=%E5%8F%96%E5%90%8D&sid=104918)
* 世界时间：FE 玲娟 ,开发中，5.3晚上提测
* 日历假期：FE 玲娟，5.4介入，5天工作量，5.11联调，5.12提测，预计5.15小流量
