# 谢耀武

> 从2015-11-23到2015-11-27

## 12.1购物-3c比价二期

### 背景与目标

在原有比价阿拉丁的基础上，增加返利元素，节省用户的购买费用，优化用户的购买流程和体验。

### 完成情况

这是优化的线上模板(`wise_3c_price`)，修改`schema`添加返利的提示和链接，当用户在页面打上对勾时如果该数据有返利提示和链接页面则显示标签，当用户点击有标签的数据时跳转返利链接，否则走以前（线上）的跳转逻辑。模板开发完成，测试完成，`vip`的中间页有2个`case`，修复后该模板就上线。模板属于全量上线

### 最终效果截图

![image](http://gitlab.baidu.com/psfe/psdoc/uploads/16475cdb54ccd259c4676f7d7b984a94/image.png)

## 12.1购物-汽车主卡优化开发

## 背景

用户在搜索车系词时，有查看车系基本信息和具体车型的需求。线上车型卡片数据不够丰富，车型展现不符合用户习惯，召回不够全面，资源方质量不好，且不符合栅格化规范，故优化主卡

### 完成情况

该模板是新增模板，模板名是`wise_car_cars`，模板于周四（11-26）上线，目前线上在做小流量实验，预计影响面为400Wpv，现抽`3%`流量，sid=102313，[召回：迈腾](https://m.baidu.com/s?from=844b&vit=fps&word=%E8%BF%88%E8%85%BE&sid=102312&tn=iphone)

### 效果截图

![](http://gitlab.baidu.com/psfe/psdoc/uploads/7f5da2145ad9578e8902bf274b168466/image.png)

## 12.1彩票-走势图

### 完成情况

模板是优化老模板（`ticket12306`），于周三（11-25）上线，目前线上没有资源召回，预计影响面为70W，模板会走小流量`20%`

### 效果截图

![](http://gitlab.baidu.com/psfe/psdoc/uploads/5a7e57e9de24c58521838a5db5f28a36/image.png)

## 接下来的排期

* 12.1购物-3c比价优化上线
* 购物-汽车评测优化开发
* 购物-二手车