# 刘泉有

> 2016-07-04 ~ 2016-07-08

## 天宁岛-城市

### 背景

当前的旅游类搜索结果页包含卡片较多，尤其是同质内容卡片使得页面结构凌乱。以景区和典型旅游城市作为试水Query，依托于场景化卡片优化搜索结果页整体效果，优化内容包括：增加特价线路子卡、百度图片子卡、相关地点推荐子卡、相关咨询子卡，同时尝试兼容广告的浅色大卡样式和自然结果融合的样式。

### 收益

108城市全流量,PV80W.
另730城市小流量,PV20W.

### 完成情况

- 2016-04-28上线

Query: 三亚,乌镇,丽江,桂林,上海,北京...

[三亚](https://m.baidu.com/s?word=%E4%B8%89%E4%BA%9A&sid=105601)

### 本周

<span style="color:#c00">本周五开始继续跟进,初步预计下周二(07-12)提测</span>

#### 整体进度:

- 新增线路规划卡片      80%
- 行程推荐情景页       80%
- 行程详情情景页       80%

### 效果

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/1691a872ac3d6561745b661f755552ea/image.png" width="300">

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/914046790cf61a8b2d0fe785aa0b32fe/image.png"  width="300">

### 后续计划

* 长线方案在走三级单.
* 城市整体大改动, 使用sf2.0机制实现子卡,情景页合并.预计在完成线路规划后开始.

## 天宁岛-景点

### 背景

通过对现有子卡的设计优化,结构重组和增加新子卡,提升用户体验,适配进一步扩招,且用哥伦布2.0机制开发。

### 收益

页面停留时长增加，长点击增加，门票gmv转化率上升,预计日PV 300W（旺季可能会翻倍）.
先小流量上线,PV约120W.

### 完成情况

- 已迁移长线方案

### 本周

<span style="color:#c00">无更新</span>

### 效果

[北京](https://m.baidu.com/ssid=fb07416b373367756361733f09/s?word=%E6%95%85%E5%AE%AB&sid=106555)

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/8793638d1a7908e96a5a39a89ee91606/image.png" width="300">

### 后续计划

* 之前短线方案不迁移长线,入口使用少量新卡片,跳转superframe新机制方式开发.

## 主题游-去哪玩

### 背景

针对旅游类目下的时令旅游搜索泛需求，从页面整体效果上优化体验，建立更有组织的搜索结果页面。

### 收益

目标query下面有点提升，激发城市、景点旅游query pv，带来新的gmv转化入口，后续结合运营提升时令性泛需求的pv.

### 完成情况

- 因交互逻辑问题被拍死.

### 本周

<span style="color:#c00">无更新</span>

### 效果

[端午旅游](http://cq01-ala-fe-4.epc.baidu.com:8003/s?word=%E7%AB%AF%E5%8D%88%E6%97%85%E6%B8%B8&sid=102163)

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/88e624b4aebfa1d9105e01fdd630e3ef/image.png" width="300">
<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/65f2f59184b80aa29cff5d186d1b8da1/image.png" width="300">

## 酒店

### 背景

针对连锁品牌名（例如，锦江之星，汉庭，格林豪泰等）、某一地区的酒店（例如，北京酒店预订，上海酒店预订等）、某一具体酒店名（例如，北京香格里拉饭店，北京王府井希尔顿酒店等）的搜索，通过构建完整情景页的形式优化搜索体验和提升GMV值

### 收益

提升搜索在酒店类目的价值、GMV

### 完成情况

- 数据截止发周报前没有ready.
- 国内酒店（两种状态）,国际酒店同步卡片已OK.

### 本周

<span style="color:#c00">国内酒店A类页测试完成,国际酒店联调中.</span>

## Aladdin文档文档建设

- 删除sto相关文档
- 修改base模板img_delay参数
- 已按大仙意见修改,待review