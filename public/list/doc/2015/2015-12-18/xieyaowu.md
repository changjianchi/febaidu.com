# 谢耀武

> 从2015-12-14到2015-12-18

## 12.30 - 购物非标类卡片优化

### 背景与目标

用户在搜索商品的时候，有购买、浏览商品的需求。而目前线上无此类卡片，且大多自然结果为一些不知名的网站，商品质量无法保障。

购物非标类卡片对接电商，旨在为用户提供商品，商品优惠、优质商品推荐和购买指南等信息服务。

以全屏瀑布流的形式，让用户可以在百度更为流畅的浏览商品。

### 完成情况

属于新模板`generalshopping2`，会于线上的`generalshopping`做pk，使用了新的交互方式，使用`activity`方式开发，但目前`activity`属于内测阶段可能需要写大量的逻辑实现代码，`activity`组件将在1月初做出通用的组件，预计影响面为`200W`

### 遇到的问题

* ~~拼跳转链接问题，由于`activity`与`aladdin`之前不好处理数据传输，导致浮层里不能处理tc跳转链接，目前`activity`提供数据共享方案，且该方案已经全量上线，可使用~~
* `activity`交互日志处理问题，目前要走`webb`日志，具体参数需要跟@刘悦沟通


### 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/a1f5c41cf017fdea412d55461080ab30/image.png)

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/87a457ad9dc42b1eebe5e9b3bd45312f/image.png)

> 全屏的bar图正在跟ue沟通

## 12.30 - 二手车阿拉丁（新模板pk老模板）- 无进度，正在走单中

### 背景与目标

用户在查询二手车时，有查看具体车型信息的需求。而线上卡片只是一个入口，二手车卡片展示车型信息，可以更好的帮助用户决策，满足需求。

### 完成情况

该模板属于新模板`wise_usedcar`，上线全量召回后会pk掉老模板，模板开发完成，正在走单，预计影响面`30w`

### 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/835c2082b40fcf571824c0414a42607b/image.png)


## 12.30 - 疾病卡

### 背景与目标

目前疾病卡片只满足于基础的疾病介绍需求，此次尝试增加相关推荐服务，在满足疾病介绍的同时，为用户提供更好的服务。

### 完成情况

定为`mini`的新模板，模板名为`img_recom`，模板开发完成，上线`ready`状态，等pm走单了，模板为免测，预计影响面`300w`

### 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/9d97d0bccc4374d51e6b24401f6a2f2a/image.png)
