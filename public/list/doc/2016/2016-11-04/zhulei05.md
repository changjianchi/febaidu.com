# 朱雷

> 从2016-10-31到2016-11-04

## 组件Fusion

### 背景

目前结果页卡片开发使用的组件还是景点的js ui组件，使用起来成本较高，开发思维也是常规的指定式开发。我们希望能够吸收目前业内流行的框架思路，改变原有的组件开发和使用方式，让组件开发思路更明朗，组件性能更高。

### 本周进度

本周完成的组件有：

* b-scroll
* b-popup
* b-filter
* b-share
* b-infinitescroll

### Todos

1. 待迁移的组件：
    * b-city（预计11.4完成）
1. 优化fusion官网
1. 监控组件覆盖模板、pv等数据
1. 持续集成机制探索（Travis CI or Jenkins）

### 组件库website

[http://sfe.baidu.com:8123/doc/](http://sfe.baidu.com:8123/doc/)

### 项目地址

[http://gitlab.baidu.com/fusion/fusion-components](http://gitlab.baidu.com/fusion/fusion-components)

## 栅格行高缩减实验

### 背景

张瑶组UE希望调小栅格中文字的行高，通过实验来验证行高对用户体验和收入的影响。

### 进度

各方check效果中，实验预计11.7上线，影响面2000w（需要验证对凤巢收入的影响）

## PMD组件

### 背景

pmd日常迭代，UE每隔2周反馈一次迭代需求。

### 本次需求内容

1. iconfont更新，更新了向右箭头、视频播放，去掉了2个摄像头icon，替换为1个直播icon 
1. 修复安卓手机上文字标签中文字偏上问题
1. 把短链的分隔竖线高度修改为10px

### 进度

已上线

## 交互Naboo（无更新）

### 背景

交互和组件、栅格一起，都属于大搜前端框架最底层的部分。我们需要一个强大的交互框架，用来支持各种动画需求，包括串并行调度机制、动画工具集。

### 进度

本周完成了2点：

1. 修复了css reset bug：动画完成后需要把动画属性清空，但是如果此时该dom上还有其他css动画在执行，会导致这个正在执行的动画直接停止，修复策略为在dom上新增data-naboo属性，用于记录当前正在该dom上进行动画的数量，当数量为0时，执行css reset

1. 完善了README.md

### 项目地址

[http://gitlab.baidu.com/psfe/naboo](http://gitlab.baidu.com/psfe/naboo)


