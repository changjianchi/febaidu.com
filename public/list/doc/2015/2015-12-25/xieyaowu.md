# 谢耀武

> 从2015-12-21到2015-12-25

## 12.30 - 购物非标类卡片优化

### 更新进度

模板已上线，资源未上，**后端接口没有上线**，后端接口预计周六（12-26）上线

### 背景与目标

用户在搜索商品的时候，有购买、浏览商品的需求。而目前线上无此类卡片，且大多自然结果为一些不知名的网站，商品质量无法保障。

购物非标类卡片对接电商，旨在为用户提供商品，商品优惠、优质商品推荐和购买指南等信息服务。

以全屏瀑布流的形式，让用户可以在百度更为流畅的浏览商品。

### 完成情况

属于新模板`generalshopping2`，会于线上的`generalshopping`做pk，使用了新的交互方式，使用`activity`方式开发，但目前`activity`属于内测阶段可能需要写大量的逻辑实现代码，`activity`组件将在1月初做出通用的组件，预计影响面为`200W`

### 遇到的问题 - 已全部解决

* ~~拼跳转链接问题，由于`activity`与`aladdin`之前不好处理数据传输，导致浮层里不能处理tc跳转链接，目前`activity`提供数据共享方案，且该方案已经全量上线，可使用~~
* ~~`activity`交互日志处理问题，目前要走`webb`日志，具体参数需要跟@刘悦沟通~~


### 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/a1f5c41cf017fdea412d55461080ab30/image.png)

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/87a457ad9dc42b1eebe5e9b3bd45312f/image.png)

## 12.30 - 二手车阿拉丁（新模板pk老模板）

### 更新进度

模板已上线，模板有地域扩展，0流量中，`sid=7500`，召回: [二手车](https://m.baidu.com/s?word=二手车&sid=7500)、[天津二手车](https://m.baidu.com/s?word=天津二手车&sid=7500)

### 背景与目标

用户在查询二手车时，有查看具体车型信息的需求。而线上卡片只是一个入口，二手车卡片展示车型信息，可以更好的帮助用户决策，满足需求。

### 完成情况

该模板属于新模板`wise_usedcar`，上线全量召回后会pk掉老模板，模板开发完成，正在走单，预计影响面`30w`

### 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/835c2082b40fcf571824c0414a42607b/image.png)


## 12.30 - 疾病卡

### 更新进度

模板已上线，现后端正在调试召回策略

### 背景与目标

目前疾病卡片只满足于基础的疾病介绍需求，此次尝试增加相关推荐服务，在满足疾病介绍的同时，为用户提供更好的服务。

### 完成情况

定为`mini`的新模板，模板名为`img_recom`，模板开发完成，模板已上线，预计影响面`300w`

### 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/9d97d0bccc4374d51e6b24401f6a2f2a/image.png)


## 北京积分落户计算器

### 背景与目标

12月10日北京积分落户管理政策公布征集意见，刚发布后wise端用户的检索量一天达到十几万以上的影响面。从12月10日到31日前属于政策意见征集阶段，具有强时效性。因此政务小团队这边想针对积分落户做一个wise上的积分状态查询功能，属于临时需求。希望在本月内能借此时效性待政策先积淀用户，待政策颁布后计划将此计算器作为办事工具型产品

### 完成情况

新模板`gov_calculator`，为`sigma`样式，目前还没有出确认稿，已跟pm@陈欣对需求和计算规则，已跟rd@胜楠对接初版接口参数，确认稿到手后即可开始开发

### 效果图

<a href="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/a3faaa0fe952d2a69ea66f067c6fe47d/image.png" target="_blank"><img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/a3faaa0fe952d2a69ea66f067c6fe47d/image.png" width="100"></a><a href="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/f7c0d132e17795d446c56b59c54bdb71/image.png" target="_blank"><img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/f7c0d132e17795d446c56b59c54bdb71/image.png" width="100"></a>

## 优化、修复bug

* [优化电影票模板的banner图https问题](http://icafe.baidu.com/issue/WiseAladdinTemplate-1050)
* [比价卡片默认勾选优化](http://icafe.baidu.com/issue/WiseAladdinTemplate-1010)

## 正在跟进的其他需求

* [3c比价卡片反转实验的抽样模板需求](http://icafe.baidu.com/issue/WiseAladdinTemplate-1059)
* [汽车评测卡多tab升级](http://icafe.baidu.com/issue/WiseAladdinTemplate-1011)
* [汽车排行榜卡片升级-兼容多资源](http://icafe.baidu.com/issue/WiseAladdinTemplate-1009/)