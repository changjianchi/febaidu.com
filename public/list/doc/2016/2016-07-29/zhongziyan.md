# 钟姿艳

> 从 2016-07-25到 2016-07-29

## 汽车品牌哥伦布

### 背景与目标

- query：“宝马车型"
- 宝马品牌哥伦布
- 宝马视频哥伦布
- 模板新建：car_brands, brand_video

### 完成情况

本周二通过QA测试，周五开始走三级单，走完即可上线。

### 效果截图

![宝马车型结果页效果图](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/4481ee7caab842d73a86e024be79934d/屏幕快照_2016-07-08_12.13.24.png)
![宝马车型全部车系页效果图](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/8b8bc27b0f5f60ffeff5cee7b259c716/屏幕快照_2016-07-08_12.13.55.png)

### 后续
先上小流量模板，全流量时需迁移至新情景页。

## 修复线上"区号查询""邮编查询"bug

### 背景与目标

线上wise区号查询 资源id=11123，邮编查询，资源id=10814，线上跳转链接Bug修复。

### 完成情况

- 模板太老，需求紧急，只升级为新版本form格式，增加了escape，没有栅格化。
- 本周一模板query3模板修复上线。
- 邮编查询模板没召回，已建case找值周rd解决。找到问题：wisedebug sort=-1，原因为平台配置sort值为-1，这种情况无法展现。本周二zipcope模板修复上线。

### 效果截图
![区号查询](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/605f9e456e7d97b64d2dafa59a0b61ce/屏幕快照_2016-07-28_10.54.07.png)
</br>
![区号查询跳转页](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/1da2ee4cbb52799de61b3b7ed4266f50/屏幕快照_2016-07-28_10.54.34.png)
![邮编查询](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/4b1b9e0e007518e1622e8a63154e94d3/屏幕快照_2016-07-28_11.06.51.png)
![邮编查询跳转页](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/c9a20e9eccca15888ddfa603bc266f7b/屏幕快照_2016-07-28_11.07.54.png)

### 后续
模板太老，希望尽快迁移成栅格化模板。

## 图片搜索优化

### 背景与目标
针对图片需求类query，优化线上图片阿拉丁特型。
</br>对于图片需求类query，卡片点击率和媒体时长提高，用户体验提升。

### 完成情况

- 大搜结果页瀑布流

本周二完成开发，本周三通过UE检测，已让PM提资源，该步骤碰到问题，提好资源后即可进行QA联调。

- 大搜普通阿拉丁，情景页瀑布流

本周三完成开发，等待rd数据到位及阳阳的情景页开发完后开始联调。

### 效果截图
![手机壁纸瀑布流](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/39a1da0cf39799a4d1e2642111a8374c/屏幕快照_2016-07-28_11.05.00.png)
![吸顶效果+点击查看更多出六行图片](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/f0b95fc8781cba80649163b9455f5bb8/屏幕快照_2016-07-28_11.05.28.png)
![大搜普通阿拉丁，情景页瀑布流](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/700adaa874ee5a680ae0c4f0673deafa/屏幕快照_2016-07-28_11.06.01.png)

### 后续
两个抽样卡预计8.5号上线。