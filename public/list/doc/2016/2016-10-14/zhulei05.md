# 朱雷

> 从2016-10-09到2016-10-14

## PMD组件

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

## 组件Fusion

### 背景

目前结果页卡片开发使用的组件还是景点的js ui组件，使用起来成本较高，开发思维也是常规的指定式开发。我们希望能够吸收目前业内流行的框架思路，改变原有的组件开发和使用方式，让组件开发思路更明朗，组件性能更高。

### 本周进度

搭建了 fusion 组件的开发流程和网站，[点我](http://sfe.baidu.com:8123/)，增加了组件单元测试

### Todos

1. 扩充fusion的组件库，然后投入线上使用,目前收集到的 fusion 组件库需求有：
    * 原PMD组件迁移到fusion
    * 城市选择组件
    * lightbox组件
    * imgfall组件
1. 优化fusion官网
1. 监控组件覆盖模板、pv等数据
1. 持续集成机制探索（Travis CI or Jenkins）

### 项目地址

[http://gitlab.baidu.com/fusion/fusion-components](http://gitlab.baidu.com/fusion/fusion-components)

## sigma2.0机制修改

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

tab切换效果已上线，query=[bidu](https://m.baidu.com/s?word=bidu)

### Todo

计划在体育垂类的产品上进行实验，目前未开始

## 交互Naboo（无更新）

### 背景

交互和组件、栅格一起，都属于大搜前端框架最底层的部分。我们需要一个强大的交互框架，用来支持各种动画需求，包括串并行调度机制、动画工具集。

### 进度

本周完成了2点：

1. 修复了css reset bug：动画完成后需要把动画属性清空，但是如果此时该dom上还有其他css动画在执行，会导致这个正在执行的动画直接停止，修复策略为在dom上新增data-naboo属性，用于记录当前正在该dom上进行动画的数量，当数量为0时，执行css reset

1. 完善了README.md

### 项目地址

[http://gitlab.baidu.com/psfe/naboo](http://gitlab.baidu.com/psfe/naboo)
