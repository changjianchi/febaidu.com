# 杨青青

> 从8-14到8-19

## 出行卡片foot逻辑更新

### 背景与目标

为增加点击率，将线上所有卡片（汽车票火车票飞机票）foot逻辑改为超过第一页可现实条目长度，显示foot文字

### 完成情况
已上线，正收益

### 效果截图

## from3等卡片按钮不居中bug

### 背景与目标

由于栅格按钮组件设置了text-align：center,但是内部图标有6px的左边距，会导致不居中问题。
form3、sam_wise_ticket_lp  卡片由于自定义了icon大小，不居中问题更为明显

### 完成情况
已修复

### 效果截图
![](http://gitlab.baidu.com/psfe/ala-weeklyreport/raw/master/doc/2016-08-19/img/yangiqngiqng01/form3.JPG)
## travel_ship

### 背景与目标

上周已经初步完成
由于增加首次加载命中港口的功能，改为首次加载异步。

### 完成情况
走单完成
数据结构有误RD周五休假，周一修复后上线
平台不允许有转码的判断。所有的数据必须存在$tplData里面，而不是$alaData.resultData中

### 效果截图
