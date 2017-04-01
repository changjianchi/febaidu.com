# 谢耀武

> 从2016-02-21到2015-02-26

## superframe aladdin-base

### 背景和目标

由于在 wise-aladdin 中开发情景页需要依赖于 superframe 框架，但经实际项目中使用发现需要写大量的重复代码（是指不同情景页中代码的重复），基于这种原因可以根据 superframe 的生命周期来扩展一个 aladdin-base.js 的文件，在开发情景页时可以继承于这个文件，使用者可以使用简单的配置（配置是指初始化 sfview 时需要的参数）以达到快速使用，当然如果需求、交互很多还是可以直接使用 superframe 本身，aladdin-base.js 只是封装一层基础的方法以供让使用者更简洁。

[点这里查看更多 aladdin-base.js 相关的讨论](http://gitlab.baidu.com/psfe/psdoc/issues/6)

### 完成情况

目前初版评审方案已完成，初版 js 已完成，等待跟大家一起评审

[点这里查看 aladdin-base.js 源码](http://api.baidumd.com/superframe-aladdin-base/base.js)

## 天宁岛 - 景点二期、周末游、周边游

### 完成情况

02-24 号评审，目前只是大概知道一些大的功能，具体开发需要等再平身数据

## 完成的其他需求

* 修复 pc-aladdin 地铁图标箭头问题 已上线
* 跟进天宁岛情景页 tc 链接跳转问题（siteapp）已上线
* 跟进天宁岛情景页 tc 跳转链接参数重复问题，（现@qijian已解决，02-26上线）

## 跟进的其他需求

* 迁移`*scroll->bdscroll`从而解决日志问题
* 升级`xml->mcpack`数据结构