# 朱雷

> 从2017-03-20到2017-03-24

## Vue组件化项目

### 项目背景

目前开发阿拉丁卡片存在交互、UI不统一，技术栈落后的问题，组件化项目引入Vue框架，期望能达到统一UI与交互、减少重复工作，提升人员能力的目的，另外，单条结果将会具有独立run的能力，真正做到`write once, run anywhere`。

### 收益

- 统一UI与交互
- 减少重复工作
- 提升人员能力
- 单条结果具有能够独立run能力，方便度秘等产品接入

### 完成情况

- 1.9 项目kickoff
- 1.10 与SF沟通了需求，初步确定方案
- 1.11 考虑到单条结果独立run的能力，对方案进行微调
- 1.13 确定具体排期，具体排期为：
    - 调研vue-loader原理，1.17 - 1.19（3天）
    - 开发vue-to-js脚本（用于把.vue编译为amd模块）1.20 - 1.26
    - 开发vue编译到tpl的脚本 1.28 - 1.29
- 1.19 完成vue-loader调研
- 1.26 完成vue-to-js工具[https://github.com/Joe3Ray/vue-to-js](https://github.com/Joe3Ray/vue-to-js)
- 2.9 完成.vue编译到.tpl的脚本
- 2.24 开始调研服务端php渲染vue方案
- 3.10 完成php渲染vue方案vue-php
    - 3.6 完成vue template -> AST -> php code转换
    - 3.8 完成php code -> php virtual dom转换
    - 3.10 完成php virtual dom -> html template转换
- 3.15 完成vue-php的测试与bug修复
- 3.15 与odp技术负责人黄川确认odp接入vue-php的方案
    - odp以smarty插件形式调用组件的php
    - vue-php根据模板定义抽出tplData中需要使用的数据，避免敏感数据输出到前端的风险
- 3.17 补充完整的vue改造aladdin[方案](http://gitlab.baidu.com/zhulei05/vue-aladdin)
- 3.22 完成[vue-php](https://github.com/Joe3Ray/vue-php)方案的代码优化
- 3.23 完成vue-php单元测试

### 项目Todo & 排期

- 开发vue-aladdin的showcase（一个模板，一个组件），4.10开始，预计4.20完成
- 使用vue重构fusion组件，预计清明假期之后（4.21）开始，预计4月底完成
- 推动阿拉丁结果页和情景页模板迁移vue，计划Q2末完成

### 本周更新

- 3.22 完成[vue-php](https://github.com/Joe3Ray/vue-php)方案的代码优化
- 3.23 完成vue-php单元测试

### 具体方案

[http://gitlab.baidu.com/zhulei05/vue-aladdin](http://gitlab.baidu.com/zhulei05/vue-aladdin)

## 栅格化高级感改版

### 项目背景

目前搜索的信息密度较大，阅读体验不佳，需要在大搜上尝试进行类app的设计，预期能提升用户体验。

### 收益

预期能够提升用户体验，对pv和收入有正向的影响。

### 完成情况

- 1.25 完成了线下环境的demo，可以参考[http://cp01-ps-fe-4.epc.baidu.com:8003](http://cp01-ps-fe-4.epc.baidu.com:8003)这个环境，需要带sid=114451
- 2.7 针对线下环境的问题与UE重新勾兑，确定了最终实验方案
- 2.9 确定了项目排期
- 2.10 介入开发
- 2.14 完成开发
- 2.15 在QA的bdpt平台跑diff测试，UE介入review
- 2.22 确定了采用原生横滑的方案，修复了图片横滑算法的bug，完成图片横滑与栅格对齐的demo
- 2.24 完成了线下环境高级感样式问题的修复
- 2.28 确定了阿拉丁模板的修改方案
- 3.1 梳理了所有需要修改的阿拉丁模板并给出对应预估排期（见[http://gitlab.baidu.com/zhulei05/worktips/blob/master/%E9%AB%98%E7%BA%A7%E6%84%9F%E6%94%B9%E5%8A%A8%E6%A8%A1%E6%9D%BF.xlsx](http://gitlab.baidu.com/zhulei05/worktips/blob/master/%E9%AB%98%E7%BA%A7%E6%84%9F%E6%94%B9%E5%8A%A8%E6%A8%A1%E6%9D%BF.xlsx)）
- 3.8 与UE确定了模板修改的合作流程：
    - UE出稿 -> UE接口人（王菲） & FE接口人（朱雷）勾兑修改内容，确定标注点 -> FE接口人（朱雷）针对垂类提供模板修改方案 -> 修改模板
- 3.9 UE产出第一批标注，包括`推荐`、`百科`、`贴吧`、`图片`4个垂类
- 3.10 UE产出第二批标注
- 3.10 FE接口人（朱雷）提供各垂类的修改方案文档
- 3.10 模板修改负责人（李林、陈锐、曾江莉）给出介入时间点
- 3.15 百科 + 图片 + 推荐开始模板修改，负责人李林，具体执行FE吴丽黎
- 3.15 贴吧 + 知道开始模板修改，负责人陈锐，具体执行FE常健驰
- 3.22 百科 + 图片 + 推荐模板修改完成
- 3.22 贴吧 + 知道模板修改完成
- 3.23 视频模板开始修改，负责人江莉，具体执行FE张爱飞
- 3.24 自然结果模板开始修改，负责人朱雷

### 本周更新

- 3.22 百科 + 图片 + 推荐模板修改完成
- 3.22 贴吧 + 知道模板修改完成
- 3.23 视频模板开始修改，负责人江莉，具体执行FE张爱飞
- 3.24 自然结果模板开始修改，负责人朱雷

### 效果图

![../2017-03-03/img/zhulei05/1.png](./img/zhulei05/1.png)

## Fusion组件

### 项目背景

之前结果页卡片开发使用的组件还是景点的js ui组件，使用起来成本较高，开发思维也是常规的指定式开发。我们希望能够吸收目前业内流行的框架思路，改变原有的组件开发和使用方式，让组件开发思路更明朗，组件性能更高。

### 收益

引入组件生命周期，让组件更可控，简化了组件使用者的使用方式，提升开发效率。

### 完成情况

一共有的12个组件

12个组件分别是：

- b-tabs: 标签页组件
- b-lightbox: 图片预览组件
- b-imgfall: 图片瀑布流组件
- b-dialog: 对话框组件
- b-toast: 提示框组件
- b-scroll: 横向滑动组件
- b-popup: 浮层组件
- b-filter: 筛选框组件
- b-share: 分享组件
- b-infinitescroll: 无限下拉组件
- b-city: 城市选择组件
- b-grouplist: 列表组件

### 本周更新

- 3.23 b-grouplist组件上线（郭勇开发）
- 3.23 b-infinitescroll组件增加析构逻辑

### 效果&预览

[http://sfe.baidu.com:8123/doc/](http://sfe.baidu.com:8123/doc/)
