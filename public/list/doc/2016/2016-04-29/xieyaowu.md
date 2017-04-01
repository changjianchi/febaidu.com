# 谢耀武

> 从2016-4-25到2015-4-29

## 天宁岛简报

* 餐饮多点：模板已经上线，正在走单上线中
* 餐饮单点：模板开发完成，没有联调
* ~~景点2.0：2Wquery,04-19小流量上线，该版本只上**百科,贴士,地图,购票,美图,评论,评论情景页**子卡~~
* 城市2.0：模板04-29上线，内网0流量
* 出行城市到城市2.0：无更新

## 天宁岛 - 城市2.0

### 背景

当前的旅游类搜索结果页包含卡片较多，尤其是同质内容卡片使得页面结构凌乱。以景区和典型旅游城市作为试水Query，依托于场景化卡片优化搜索结果页整体效果，优化内容包括：增加特价线路子卡、百度图片子卡、相关地点推荐子卡、相关咨询子卡，同时尝试兼容广告的浅色大卡样式和自然结果融合的样式。

### 收益

扩展到108个城市,全量后预计80W PV

### 完成情况

4-28未测试完成就已上线,对你没有看错,事实就是这样.

Query: 三亚,乌镇,丽江,桂林,上海,北京...

[三亚](http://m.baidu.com/s?word=三亚&sid=105600)

![](http://s.jiathis.com/qrcode.php?url=http://m.baidu.com/s?word=三亚&sid=105600)

### 效果

<a href="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/382a9a8b30268d4e6b63150827e97e65/image.png">
  <img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/382a9a8b30268d4e6b63150827e97e65/image.png" width="300">
</a>

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/57afbd6ccb59e02df78339faad49d8ff/image.png"  width="300">

## 天宁岛-51去哪玩

### 背景

针对时令旅游搜索泛需求，从页面整体效果上优化体验，建立更有组织的搜索结果页面。五一是旅游需求高峰，结合首页运营，上线五一去哪玩相关query哥伦布卡片，提升用户对百度搜索的旅游产品的认知

### 收益

旅游相关pv增长10%, PV3W

### 完成情况

- 4-28已小流量上线.
- Query: [五一去哪玩](https://m.baidu.com/s?word=%E4%BA%94%E4%B8%80%E5%8E%BB%E5%93%AA%E7%8E%A9&sid=102156)

### 效果

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/4069fdf0ae91b9ddc97fde75f7cc9db9/image.png" width="300">




## 天宁岛 - 城市到城市

### 背景

现有城市到城市的卡片比较分散，在没有明确交通方式的情况下，不能满足对不同的出行方式信息对比的需求，这些会影响城市到城市Query的需求满足，所以针对此类需求出一个哥伦布大卡，解决上述问题。

### 收益

预计PV：城市到城市预计的PV大约为50W左右，在整体出行需求中的影响面大约为10%。预期收益：通过有序组织多种出行方式，综合对比各种出行成本摘要信息，降低用户决策的步骤，以此提高转化率。预计提升Query=“城市到城市”下的出行GMV20%。

### 情况

* 无更新

## 最近排期时间

> 以下排期跟fe@泉有并行

* 04-19 至 04-29城市1.0升级为哥伦布2.0机制，**模板已上线**
* 04-19 至 04-29景点剩余子卡+剩余情景页开发并全量，**有很大风险**
* 05-04之后是出行城市到城市模板开发，**时间点待定**

## 跟进其他需求 - 升级图片懒加载

[升级文档](http://sfe.baidu.com/#/阿拉丁/无线网页搜索/模板性能优化/图片懒加载方案)

### 待修改

* busticket_more/iphone.tpl:
* lvyouoversea/iphone.tpl:
* travel2/iphone.tpl:
* wise_discount/iphone.js:
* wise_scene_trav/inc_trav_subcommon.tpl:


## 跟进其他需求 - 升级飘红 - 待修改

* wz_placemovie_new
* busticket_more
* tinian_trav

## 跟进的其他需求 - 升级tc链接

* busticket_more
* wise_video