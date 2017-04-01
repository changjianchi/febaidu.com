# 钟姿艳

> 从 2016-07-11到 2016-07-15

## 电影泛需求白卡

### 背景与目标

query“电影”泛需求黑卡转白卡上小流量实验

### 完成情况

- 本周二通过QA测试。
- 本周三上线抽样模板。

### 效果截图

![电影](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/b3373fd479a01225876465b93375406b/屏幕快照_2016-07-14_19.33.24.png)

### 后续

上全流量模板时，迁移至sigma2.0。


## 修复线上"电话号码归属地查询"bug

### 背景与目标

线上wise手机归属地查询，资源id=10685，经过查看后发现模板有问题，本周四提出高优修复需求。

### 完成情况

- 删除了big.tpl文件，修改iphone.tpl及middle.tpl文件。
- 已升级为新版本form格式。
- 本周五上线。

### 效果截图
![电话号码归属地查询](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/c08a53e7882b5a56fbcf09892e4e6f6c/屏幕快照_2016-07-15_13.53.27.png)
![跳转页面](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/66ee0f0d029692c28e9617a748517159/屏幕快照_2016-07-15_13.55.49.png)

### 后续
无


## 汽车品牌哥伦布

### 背景与目标

- query：“宝马车型"
- 宝马品牌哥伦布
- 宝马视频哥伦布
- 模板新建：car_brands

### 完成情况

- 上周三已完成开发，等待联调。
- 后端数据始终没到位，导致联调delay。

### 效果截图

![宝马车型结果页效果图](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/4481ee7caab842d73a86e024be79934d/屏幕快照_2016-07-08_12.13.24.png)
![宝马车型全部车系页效果图](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/8b8bc27b0f5f60ffeff5cee7b259c716/屏幕快照_2016-07-08_12.13.55.png)

### 后续
先上小流量模板，全流量时需迁移至新情景页。