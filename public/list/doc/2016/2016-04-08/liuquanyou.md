# 刘泉有

> 2016-04-05 ~ 2016-04-08

## 天宁岛-旅游(二期)

### 背景

当前的旅游类搜索结果页包含卡片较多，尤其是同质内容卡片使得页面结构凌乱。以景区和典型旅游城市作为试水Query，依托于场景化卡片优化搜索结果页整体效果，优化内容包括：增加特价线路子卡、百度图片子卡、相关地点推荐子卡、相关咨询子卡，同时尝试兼容广告的浅色大卡样式和自然结果融合的样式。

### 收益

扩展到108个城市,全量后预计80W PV

### 完成情况

模板还在原来白卡基础上不断迭代，本周主要开发&优化的功能点：

- 更改游记情景页为分页获取数据无限下拉。
- 更改问答情景页为分页获取数据无限下拉。
- 优化点击更多按钮落地页query，从 `city`+旅游城市 改成 `city`+旅游
- 优化所有情景页的点击跳转链接 - 日志fe@刘悦确认

Query: 三亚,乌镇,丽江,桂林,上海,北京...

[Query](http://cp01-ps-fe-2.epc.baidu.com:8003/s?word=%E4%B8%89%E4%BA%9A)

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/97e88fe70d7f5920accf3a1760bf73d4/image.png
"   width="300">

### 效果

<a href="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/382a9a8b30268d4e6b63150827e97e65/image.png">
  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/382a9a8b30268d4e6b63150827e97e65/image.png" width="300">
</a>


<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/57afbd6ccb59e02df78339faad49d8ff/image.png"  width="300">

### 后续计划

迁移至哥伦布2.0机制。


## 天宁岛-景点(二期)

### 背景

- 通过对现有子卡的设计优化,结构重组和增加新子卡,提升用户体验,适配进一步扩招,且用哥伦布2.0机制开发。

### 收益

页面停留时长增加，长点击增加，门票gmv转化率上升,预计日PV 200W（旺季可能会翻倍）.

### 完成情况

- UE图已定。
- 04-07所有子卡SCHEMA已给RM&PM。
- 下周开发部分子卡。

## 完成的其他需求

* 更改度假+签证卡片，更换携程数据，数据评估后04-05上线。（之前lixiao跟进的lvyouroute）

## 跟进需求 - 可选

- 编写新人培训文档。