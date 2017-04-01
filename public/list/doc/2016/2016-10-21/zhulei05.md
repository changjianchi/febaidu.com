# 朱雷

> 从2016-10-17到2016-10-21

## 通用模板

### 背景

开发一些通用模板来满足大部分需求，减少后续模板的开发量，释放人力。

### 进度

我负责通用视频组件，包含2中情况：有tab版和无tab版，目前模板已经开发完成，UE走查完成，其中视频icon需要等待pmd更新完成后方可使用，预计10.21完成并上线

### 效果图

![image](http://gitlab.baidu.com/psfe/schema/raw/master/widgets/img/video/1.png)

## 组件Fusion

### 背景

目前结果页卡片开发使用的组件还是景点的js ui组件，使用起来成本较高，开发思维也是常规的指定式开发。我们希望能够吸收目前业内流行的框架思路，改变原有的组件开发和使用方式，让组件开发思路更明朗，组件性能更高。

### 本周进度

本周进行了部分组件的迁移，已完成的有

* b-tabs
* b-dialog
* b-toast
* b-lightbox
* b-imgfall

### Todos

1. 待迁移的组件：
    * b-scroll 
    * b-popup
    * b-share
    * b-infinitescroll
    * b-city
1. 优化fusion官网
1. 监控组件覆盖模板、pv等数据
1. 持续集成机制探索（Travis CI or Jenkins）

### 组件库website

[http://sfe.baidu.com:8123/doc/](http://sfe.baidu.com:8123/doc/)

### 项目地址

[http://gitlab.baidu.com/fusion/fusion-components](http://gitlab.baidu.com/fusion/fusion-components)

## sigma2.0机制修改(无更新)

### 背景

以前卡片不拉通，sigma2.0的c-container节点上有个c-container-tile的class，卡片拉通后需要去掉该class。这个改动对很多sigma2.0的模板有影响，原先这些模板都是自己写死左右间距，需要他们配合一起修改。

### 进度

已经上线完成。

### 收益

本次改动涉及23个sigma2.0模板，影响面共计**1600w**，覆盖了80%的sigma2.0模板，纠正了这些模板不合理的左右边距实现，增强了线上稳定性，减小了后续框架和机制升级的风险。

## 大鱼

### 背景

在搜索结果页上尝试更多丰富的交互效果，提升体验

### 进度

本周上线了一个实验，调研用户点击title时点击文字区域和空白区域的数据，通过点击率、长点击等数据来论证点击空白区域跳转对用户体验的影响。实验在`we_text`模板上进行，日均影响面约1200w，预计10.25出实验结论。线上query = [中国移动](https://m.baidu.com/s?word=%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8)

### 效果图 

![image](image/zhulei05/1.png)

## 交互Naboo（无更新）

### 背景

交互和组件、栅格一起，都属于大搜前端框架最底层的部分。我们需要一个强大的交互框架，用来支持各种动画需求，包括串并行调度机制、动画工具集。

### 进度

本周完成了2点：

1. 修复了css reset bug：动画完成后需要把动画属性清空，但是如果此时该dom上还有其他css动画在执行，会导致这个正在执行的动画直接停止，修复策略为在dom上新增data-naboo属性，用于记录当前正在该dom上进行动画的数量，当数量为0时，执行css reset

1. 完善了README.md

### 项目地址

[http://gitlab.baidu.com/psfe/naboo](http://gitlab.baidu.com/psfe/naboo)

## PMD组件(无更新)

### 背景

pmd日常迭代，UE每隔2周反馈一次迭代需求。

### 本次需求内容

1. 文字图标的文字垂直居中
1. 文字图标的颜色纠正
1. 下拉列表内部文字距离左侧24px
1. 手百loading icon样式的loading效果
1. 井字表格

### 进度

已上线


