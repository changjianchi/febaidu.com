# 李浪波

> 从2016-03-14到2016-03-18

## wise sigma体验优化项目

### 背景与目标

sigma展现明显有白屏，然后再出现模板;低端机器ipod、iphone5等，页面比较复杂是上下滑动卡顿

### 完成情况

* 1、分析页面卡顿原因，通过排查，发现去掉iscroll功能体验会好很多，并且手百上下滑动一次会触发resize30多次

* 2、解决方案未定，初步推手百优化，产品层面看看能否少用iscroll功能。

### 本周进展

* 21号修改完所有2的阿拉丁模板，并上线小流量。25号出小流量初版数据


## 哥伦布sigma机制重构

### 背景与目标

线上sigma机制优化已接近尾声，但整体实现方案还是存在问题，固重构新的实现方案，老的机制保留

### 本周进度

1、本周sigma支持品专，24号修改完成上线



## 整体结果页loading效果

### 背景

sigma会在结果返回后去修改头部搜索框皮肤，会造成头部明显的跳动，正常结果也会出现下面空白情况，为了优化体验，增加重新搜索的loading效果

### 完成情况

3月14号上线小流量实验

实验地址：http://m.baidu.com/s?word=%E4%B9%8C%E9%95%87&sid=104007

实验组：104007 流量3%

对照组：104008 流量3%

### 本周进展

小流量实验结论已产出，基本持平，等待UBS同事的评估邮件

## 阿拉丁协同项目

### 背景

缩减阿拉丁样式，使结果页10条样式保持风格一致

### 进展

* 增加一种带子链的样式，29号上线

* 弱化流程已经敲定，暂时由我这边和pm接口，完成平稳退化，后续放开权限给pm同学

* 平台配置和ODP选模板机制已经上线

* 本周统一跟pm同学培训退化流程

## 阿拉丁模板性能优化

### 背景

缩减阿拉丁展现的不可见图片，提升页面展现速度

### 进展

* 文档地址：http://sfe.baidu.com/#/阿拉丁/无线网页搜索/模板性能优化/图片懒加载方案

* 已推送各个负责的fe操作