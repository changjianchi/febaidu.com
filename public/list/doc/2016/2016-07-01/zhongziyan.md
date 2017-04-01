# 钟姿艳

> 从 2016-06-27 到 2016-07-01


## 电影泛需求白卡

### 背景与目标

query“电影”泛需求黑卡转白卡且直接上全流量

### 完成情况

上周已初步完成开发，周末对照UE给的修改意见，做了间距，字体等的样式调整。周一通过UE联调。

### 效果截图

![电影](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/ce4d35232dc1fc3b9f18c7f626fd8db2/屏幕快照_2016-07-01_10.35.53.png)

### 后续

预计RD下周介入，更改模板及添加数据。等候"电影精准词"卡片评审后更进开发。


## wz_hospital_special模板退化

### 背景与目标

有一个卡片涉及到退化，需要升级schema
###### 具体如下：
需要退化的模板 | Schema id | 模板id | 退化后模板
----|------|----|----
wz_hospital_special | 4325  | 6748 | we_textlinks

### 完成情况

1. [在模板平台查找已绑定的数据格式id](http://pm.open.baidu.com:8001/aladdinTemplate/ToUpdateTemplate/template_id/6748)

2. [在站长平台查找](http://pm.zz.baidu.com/)

3. 创建数据格式
- 添加标签，包括名称、类型、限制条件等
- 验证xml
- 提交

4. 完成


## 糯米品牌团购卡检索迁移

### 背景与目标

糯米品牌团购卡片进行检索后端的迁移，其中会涉及到模板的改动。
[icafe地址：](http://newicafe.baidu.com/issue/WiseAladdinTemplate-2218/show)
资源id:4812；模板名：wise_tuan_brand、wise_tuan_brand2.

### 完成情况

1. 完成接口的添加。
2. 改正线上的模板，加了一个数据容错。
3. 周五完成上线。

### 效果截图

![北京俏江南团购](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/57adf7e784b642dfd128fcd4944bfa43/屏幕快照_2016-07-01_11.13.46.png)

### 后续

无


## 汽车品牌哥伦布

### 背景与目标

- query：“宝马车型"
- 宝马品牌哥伦布
- 宝马视频哥伦布
- 模板新建：brand_evaluat，brand_video

### 完成情况

从6.30跟进，排期一周。
已完成brand_evaluat模板结果页的开发。

### 效果截图

![宝马车型结果页效果图](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/886a821ad9007d2ff3113710121c4930/屏幕快照_2016-07-01_11.20.03.png)

### 后续
还需完成宝马品牌结果页，及宝马视频模板的开发。