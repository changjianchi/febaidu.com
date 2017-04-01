# 李浪波

> 从2016-02-14到2016-02-19

## 1、sigma体验问题

### 背景

* 哥伦布项目节前上线的几个case，都是以现有的sigma机制上实现的，体验都非常差，整体比较卡顿

* android手百下面sigma展现明显白屏

### 完成情况

* 本周调试图片横滑和上下滑动卡的问题，发现是部分css引起，去掉问题css后，体验能够提升一些，但低端机的手百上下滑动的卡顿问题仍然存在。

* 先上线初版解决部分体验问题。16号提交测试，发现北京天气的cavase在android手百下存在问题，遂回归整体sigma用了canvas的模板，一一进行修复。

* 17号初版优化上线，提升了左右横滑的体验

* android sigma展现慢的问题18号查明原因，是因为css是在底部加载的，用css将sigma展现出来，所以只有到底部的时候才会出现，之前这段时间是白屏的，修复方案19号定，22号上线修复。

## sigma头图统一机制

### 背景

sigma头图

### 进展

19号上线www模块的代码改动，模板需要case by case处理

## 大搜样式协同项目

### 背景

* 将通过样式整改、非首位时样式退化、去掉非必要样式模板等进行样式缩减，达到整体样式协同的目的。

### 完成情况

* 设计模板：
sam_wise_car_rank:1
sam_wise_3c_brand:1
sam_wise_3c_general:1
sam_wise_3c_price_3:1
sam_wise_digital:1
sam_wise_3c_comment:1
sam_mobile_compare:1
wise_car_rank:1
wise_3c_brand:1
wise_3c_general:1
wise_3c_price:1
wise_digital:1
wise_3c_comment:1
mobile_compare:1
2月14号部署环境，并进行ue和pm的回归，15号修复完成回归的问题，并上线模板。16日发现部分模板数据只有一条时有问题，又迭代上线一版