# 刘泉有

> 2016-04-15 ~ 2016-04-22

## 天宁岛-旅游(二期)

### 背景

当前的旅游类搜索结果页包含卡片较多，尤其是同质内容卡片使得页面结构凌乱。以景区和典型旅游城市作为试水Query，依托于场景化卡片优化搜索结果页整体效果，优化内容包括：增加特价线路子卡、百度图片子卡、相关地点推荐子卡、相关咨询子卡，同时尝试兼容广告的浅色大卡样式和自然结果融合的样式。

### 收益

扩展到108个城市,全量后预计80W PV

### 完成情况

- 正在迁移2.0版本,预计4-25联调,4-26,4-27测试,4-28上线,由于各种依赖资源未按时到位,可能有delay风险,具体细节4-21邮件已发.

Query: 三亚,乌镇,丽江,桂林,上海,北京...

[三亚](http://cp01-ps-fe-2.epc.baidu.com:8003/s?word=%E4%B8%89%E4%BA%9A)

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/97e88fe70d7f5920accf3a1760bf73d4/image.png
"   width="300">

### 效果

测试数据

<a href="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/382a9a8b30268d4e6b63150827e97e65/image.png">
  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/382a9a8b30268d4e6b63150827e97e65/image.png" width="300">
</a>

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/57afbd6ccb59e02df78339faad49d8ff/image.png"  width="300">


## 天宁岛-景点(二期)

### 背景

通过对现有子卡的设计优化,结构重组和增加新子卡,提升用户体验,适配进一步扩招,且用哥伦布2.0机制开发。

### 收益

页面停留时长增加，长点击增加，门票gmv转化率上升,预计日PV 300W（旺季可能会翻倍）.
先小流量上线,PV约120W.

### 完成情况

- 已扩量20000+景点
- 4-19上线了头卡,百科,贴士,地图,购票,美图,评论,评价情景页。

### 效果

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/0d36b298194605157cc1415c06a14c68/image.png" width="300">

### 后续计划

* 剩余卡片开发,上线（时间待定）

* 5.1前上线 手百、地图推广的运营活动(需调起地图APP)


## 城市到城市

### 背景

现有城市到城市的卡片比较分散，在没有明确交通方式的情况下，不能满足对不同的出行方式信息对比的需求，这些会影响城市到城市Query的需求满足，所以针对此类需求出一个哥伦布大卡，解决上述问题。

### 收益

预计PV：城市到城市预计的PV大约为50W左右，在整体出行需求中的影响面大约为10%。预期收益：通过有序组织多种出行方式，综合对比各种出行成本摘要信息，降低用户决策的步骤，以此提高转化率。预计提升Query=“城市到城市”下的出行GMV20%。

### 情况

* UE图已提供
* 部分数据已提供
* 5.1之后开发，时间待定。
* 本周未更新

## 其他跟进需求

### 升级图片懒加载

[升级文档](http://sfe.baidu.com/#/阿拉丁/无线网页搜索/模板性能优化/图片懒加载方案)

#### 待修改

* wise_city_travel/iphone.tpl
* wise_scene_city
* wise_scene_food

## 跟进其他需求 - 升级飘红

#### 待修改

* qunar_train01
* ptp_train


## 编写新人培训文档

* 初稿完成待修改,下周一完成
