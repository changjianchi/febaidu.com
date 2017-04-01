# 朱雷

> 从2016-10-31到2016-11-04

## Fusion组件（已上线）

### 项目背景

目前结果页卡片开发使用的组件还是景点的js ui组件，使用起来成本较高，开发思维也是常规的指定式开发。我们希望能够吸收目前业内流行的框架思路，改变原有的组件开发和使用方式，让组件开发思路更明朗，组件性能更高。

### 收益

引入组件生命周期，让组件更可控，简化了组件使用者的使用方式，提升开发效率。

### 完成情况

计划的10个组件全部上线

10个组件分别是：

- b-tabs: 标签页组件
- b-lightbox: 图片预览组件
- b-dialog: 对话框组件
- b-toast: 提示框组件
- b-scroll: 横向滑动组件
- b-popup: 浮层组件
- b-filter: 筛选框组件
- b-share: 分享组件
- b-infinitescroll: 无限下拉组件
- b-city: 城市选择组件

### 本周进度

- QA测试的bugs修复
- b-tabs组件：对没有菜单的情况进行了容错，新增对b-tabs嵌套使用的支持，已上线
- b-scroll组件：将scroll实例暴露到fusion属性上，方便组件使用者调用scroll实例的`refresh`等方法
- fusion core：fusion框架核心代码的事件机制支持冒泡可配置


### 效果&预览

[http://sfe.baidu.com:8123/doc/](http://sfe.baidu.com:8123/doc/)

### 计划

1. 优化fusion官网
1. 监控组件覆盖模板、pv等数据
1. 持续集成机制探索（Travis CI or Jenkins）

## 栅格行高缩减实验（已上线）

### 项目背景

张瑶组UE希望调小栅格中文字的行高，通过实验来验证行高对用户体验和收入的影响。

上周实验上线后凤巢收入骤降3.5%，于是紧急下线了实验，本周重新上线实验，将流量改为200w，用于验证对用户体验的影响

### 收益

小流量影响面200w，预期能提升用户体验

### 完成情况

本周一（11.14）完成了小流量上线

### 效果&预览

所有query生效，sid=[111294](http://sample.baidu.com/index.php/sample/task/tasklist/find_type/sample_id/find_key/111294)

## 百度专家平台（无更新）

### 项目背景

百度专家是独立建站方向最早的一个项目，预期能建立一个覆盖医疗、法律和房产等领域专家的提问平台。

### 收益

吸引流量，建立搜索生态闭环。

### 完成情况

本周我参与了专家平台日志方案的制定，确定使用tc日志，另外引入百度统计用于uv停留时长的统计。tc日志规范由RD@卢田 给到@晓卉

## KG-体育NBA（开发中）

### 项目背景

在体育垂类上尝试创新的交互效果，预期能够提升pv、点击等指标。

### 收益

影响pv 10w，在交互体验上对标谷歌

### 完成情况

所有情景页静态页面开发完成，待与RD联调。需要了解superframe架构代码来确定富交互效果的前端方案，目前superframe代码基本了解，本周五(11.18)产出本次showcase的动画方案。

### 计划

11月21日 开始开发交互效果，预计11月底完成开发

## PMD组件（无更新）

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

