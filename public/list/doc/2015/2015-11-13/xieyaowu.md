# 谢耀武

> 从2015-11-09到2015-11-13

## 12.1购物-汽车口碑

### 背景与目标

用户在购车决策时，用户口碑可以提供。但线上类似卡片，汽车口碑卡片

### 完成情况

该模板是新增模板，模板名是`wise_car_koubei`，模板已开发（测试）完成，正在评估，评估通过后模板上线，预计影响面pv:300W

### 效果截图

![image](http://gitlab.baidu.com/psfe/psdoc/uploads/9ca50f34549487d351dffb96fe3aff0d/image.png)

## 12.1购物-汽车主卡优化

### 背景与目标

用户在搜索车系词时，有查看车系基本信息和具体车型的需求。线上车型卡片数据不够丰富，车型展现不符合用户习惯，召回不够全面，资源方质量不好，且不符合栅格化规范，故优化主卡。

### 完成情况

该模板是新增模板，模板名是`wise_car_cars`，模板正在开发

### 效果截图

![image](http://gitlab.baidu.com/psfe/psdoc/uploads/7f5da2145ad9578e8902bf274b168466/image.png)


## 12.1购物-3c比价二期

### 背景与目标

在原有比价阿拉丁的基础上，增加返利元素，节省用户的购买费用，优化用户的购买流程和体验。

### 完成情况

这次是在线上模板上做出优化，模板名是`wise_3c_price`，主要是添加用户登录状态判断、`js`判断是否提示过、用户提示时选择的状态等

目前已评审，设计图已出，由于涉及到`vip.baidu.com`团队的返利标识，下周一跟`vip rd`沟通出如何做标识，

### 效果图片

![image](http://gitlab.baidu.com/psfe/psdoc/uploads/1e93083f7cbf32deda21eb77da4f1b70/image.png)


## 12.1彩票-走势图

### 背影与目标

目前wise端彩票相关走势图还没有相应的特型卡片，需要出一套卡片满足用户需求。

### 完成情况

该模板是复用线上的`ticket12306`模板，由于彩票特有字段，已经修改`schema`，模板做出把预处理代码删除，迁移到`data_modifier`里处理，模板开发完成，正在调试中，预计周一（11-16）提测，预计影响面pv:70W

### 效果图片

![image](http://gitlab.baidu.com/psfe/psdoc/uploads/5a7e57e9de24c58521838a5db5f28a36/image.png)

### 遇到的问题

原模板（线上）飘红不了，是由于传了`{%fe_fn_c_text_inline text=$tplData.leftText.text highlight=$tplData.leftText.highlight%}`导致飘红失败，现在改为`{%fe_fn_c_text_inline text=$tplData.leftText.text%}`，但飘红还有问题，目前按规范写的飘红插件调用，应该是飘红插件问题，如图：

![image](http://gitlab.baidu.com/psfe/psdoc/uploads/28d6f83102f19f021f63327b64366baf/image.png)

## 接下来的排期

* 12.1购物-汽车口碑模板上线
* 12.1彩票-走势图模板上线
* 12.1购物-汽车主卡优化开发
* 12.1购物-3c口碑优化开发
* 12.1购物-汽车评测优化开发
