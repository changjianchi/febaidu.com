# 谢耀武

> 从2015-11-02到2015-11-06

## 栅格化电影票泛需求白卡模板

### 背景与目标

属于栅格化迁移项目里的重点类目

### 完成情况

模板已上线，召回query: [北京最新电影票团购](https://m.baidu.com/s?word=北京最新电影票团购)，影响pv大概：5W

### 效果截图

![](img/xieyaowu/dianyingpiao.png)


## 栅格化电影院泛需求白卡模板

### 背景与目标

属于栅格化迁移项目里的重点类目

### 完成情况

模板已开发完成，正在测试，预计下周一/二上线

### 效果截图

![](img/xieyaowu/dianyingyuan.png)



## 修复和优化的模板

* 修复线上电影票白卡老模板附近影院tab，右下角链接错误，原因是由于`js`调用时字段错误
* 修复线上电影院数据长度为1时模板空白，原因是预处理里没有作长度判断
* 修改商品模板并上线-非标类商品卡片加上百度vip跳转的监控链接: [story](http://icafe.baidu.com/issue/3797677/show?spaceId=9168&cid=5&projectId=)
* 修复线上日历模板`https`报警问题: [story](http://icafe.baidu.com/issue/3802063/show?spaceId=9168&cid=5&projectId=)
* 开发定位组件，目前已开发，正在测试，测试完成后会请@杨帆帮忙上线代码，组件上线后会更新文档，目前的说明在：[psdoc issues](http://gitlab.baidu.com/psfe/psdoc/issues/2)


## 后续排期

* 电影院泛需求模板上线
* 12.1购物项目跟进，目前有4个模板必上
* 12.1彩票项目跟进，目前有1个模板必上

## 遇到的问题

经最近电影模板调框的使用，发现`c_base`里主模板是否考虑做出以下优化：

* `showRightUrlVmgdb`，底部右下角链接的GMV参数
* `showRightUrlLaid`，底部右下角链接的`laid`
* 底部右下角链接的`xse`设置
* `showRightText`外层添加一个`span`包裹容器以方便动态的修改文字
* `titleUrlLaid`，标题链接的`laid`
* `titleUrlVmgdb`，标题链接的GMV参数
* 标题链接的`xse`设置

以上主要针对标题/右下角链接调框参数的配置，目前必须重写`title,foot block`才可完成，但修改这些影响面很大，需要专门的跟进下优化