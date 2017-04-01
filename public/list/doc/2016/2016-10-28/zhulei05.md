# 朱雷

> 从2016-10-17到2016-10-21

## 通用模板

### 背景

开发一些通用模板来满足大部分需求，减少后续模板的开发量，释放人力。

### 进度

已上线，文档地址：[视频列表无tab](http://gitlab.baidu.com/psfe/schema/blob/master/tpls/sd_video.md)、[视频列表有tab](http://gitlab.baidu.com/psfe/schema/blob/master/tpls/sd_tab_video.md)

### 效果图

![image](http://gitlab.baidu.com/psfe/schema/raw/master/widgets/img/video/1.png)

## 组件Fusion

### 背景

目前结果页卡片开发使用的组件还是景点的js ui组件，使用起来成本较高，开发思维也是常规的指定式开发。我们希望能够吸收目前业内流行的框架思路，改变原有的组件开发和使用方式，让组件开发思路更明朗，组件性能更高。

### 本周进度

上周完成的组件有：

* b-tabs
* b-dialog
* b-toast
* b-lightbox
* b-imgfall

本周完成的组件有：

* b-scroll
* b-popup
* b-filter

### Todos

1. 待迁移的组件：
    * b-share(预计10.28完成)
    * b-infinitescroll(预计10.31完成)
    * b-city（预计11.3完成）
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

上线空转流量中，实验预计11.7上线，影响面2000w（需要验证对凤巢收入的影响）

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

本周UBS同学产出了实验数据，短点击占比中，空白部分比文字部分多0.28%，所以大约有0.28%的用户点击是空白造成的误点.

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


