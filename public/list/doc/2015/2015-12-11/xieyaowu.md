# 谢耀武

> 从2015-12-07到2015-12-11

## 12.30 - 购物非标类卡片优化

### 背景与目标

用户在搜索商品的时候，有购买、浏览商品的需求。而目前线上无此类卡片，且大多自然结果为一些不知名的网站，商品质量无法保障。

购物非标类卡片对接电商，旨在为用户提供商品，商品优惠、优质商品推荐和购买指南等信息服务。

以全屏瀑布流的形式，让用户可以在百度更为流畅的浏览商品。

### 完成情况

该需求属于在线上模板`generalshopping`上做优化，但会重构整个代码，新ue图没有滑屏，但加入了新交互：全屏浏览+无限滚动模式，目前全屏浏览需要等@杨帆那边组件上线后开发，@杨帆那边预计组件 12.15 左右上线

#### 更新：目前`psd`确认稿已ok，下周一着手开发

## 12.30 - 购物商品列表卡-特卖卡（新卡）

### 背景与目标

用户在搜索商品的时候，有购买、浏览商品的需求。而购物特卖卡片配合电商的优惠活动，结合返利信息，把更多的优惠呈现给用户。且特卖模板也可以兼容适合列表形式展现的商品。

### 完成情况

该模板属于新模板，资源属于全量上线，模板名`wise_discount`，预计影响面`200w`，模板开发完成，12.11模板上线

### 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/ad8c1aae5b5aacdade541d35b6f16e5c/image.png)

### 功能点

该模板内有`倒计时`功能，目前就自己实现好了，没必要组件化

## 12.30 - 二手车阿拉丁（新模板pk老模板）

### 背景与目标

用户在查询二手车时，有查看具体车型信息的需求。而线上卡片只是一个入口，二手车卡片展示车型信息，可以更好的帮助用户决策，满足需求。

### 完成情况

该模板属于新模板`wise_usedcar`，上线全量召回后会pk掉老模板，目前模板自测中，预计12.14提测，预计影响面`30w`

### 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/afc74cc3fa8e3ca220ed6fe63d972e46/image.png)

## 12.30 - 疾病卡

### 背景与目标

目前疾病卡片只满足于基础的疾病介绍需求，此次尝试增加相关推荐服务，在满足疾病介绍的同时，为用户提供更好的服务。

### 完成情况

定为`mini`的新模板，模板名为`img_recom`，正在开发中，联调要依赖后端的召回+数据，预计12.15提供测试数据，预计影响面`300w`

### 效果图

![image](http://gitlab.baidu.com/psfe/psdoc/uploads/6cae75aa6967992127b0cf6755469feb/image.png)