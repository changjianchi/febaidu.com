# 吴丽黎 

> 从2016-10-09到2016-10-14


## 娱乐    人物八卦  【走单中-延期上线原因（相关性问题的比例有下降导致走单时长增加，计划下周上线）】

### 背景与目标

背景：八卦阿拉丁已在人物query下小流量实验，用户体验略正，并能有效提升用户媒体时长与搜索生态控制力，符合哥伦布宏观目标，需尽快退全上线。

收益：根据小流量实验表现，用户媒体时长相对增加3.01%，生态控制力相对增加 4.28%，预计优化pv1000w。

### 完成情况

项目排期：2016-9-18 ~ 16-9-19   共计开发总天数为 2 个工作日

提测：9月20日

### 主要工作

迭代内容： 

* 卡片title：XX_相关热门八卦

* 新增字段：浏览量，来源，图集/视频tag

* 新增图片：首位四图样式

* 四图样式逻辑：三条内容中第一条可获取4张图片的资讯自动升级为首位四图样式，
        如三条内容均无4张图片，则不展现图片。

* 不同类型调起不同类型sf页面

### 本周进展

无进展

线下地址： https://wwwhttps.baidu.com/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=general_person_relate&dev_path=searchaladdin&dev_tpltype=default&sid=99999_108405&dev_online=1&wd=%E8%B5%B5%E4%B8%BD%E9%A2%96&word=%E8%B5%B5%E4%B8%BD%E9%A2%96

### 效果截图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/d99ccf13dd0886dafa293d152950c3e5/image.png)

## 明星榜单大全 【已全量 - 分享BUG修复、浮层开发、寻址卡片调起sf迭代】

### 背景与目标

粉丝群体容易调动、愿意参与，对明星偶像的应援具有需求痛点；
对影响力的理解和评价来自于感性的认知，行业中缺乏对不同明星统一量化的评价方式。

### 收益

预计影响面：250w PV

### 完成情况（时间点达到的里程碑）

启动时间: 16年7月28日

提测时间: 9月08日

小流量上线时间: 

全量时间点、PV值：9月23日

扩量时间点、PV值：

增加新卡上线时间点：sigma模板=person_info，资源id=46335；card模板=list_home，资源id=31635，card模板=list_rank，资源id=31618


### 本周进展

分享问题修复，浮层开发（1.5个工作日，提测半天，计划10月14日上线）

### 效果预览 [杨洋](http://nj03-psdy-aladdin070.nj03.baidu.com:8003/sf?pd=ent_dabang&openapi=1&dspName=iphone&from_sf=1&resource_id=31635&word=%E6%9D%A8%E6%B4%8B&tn=tangram&title=%E7%99%BE%E5%BA%A6%E6%98%8E%E6%98%9FALL%E6%A6%9C&top=%7B%22sfhs%22%3A2%7D&lid=5646702246468398892&ms=1&frsrcid=46335&frorder=1) 

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/e6c620520c6e044c03d4798d2dd93231/image.png)

### 效果预览 [陈伟霆](https://m.baidu.com/s?word=%E9%99%88%E4%BC%9F%E9%9C%86)

### 效果图 

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/9cdf900634f781fd9b1f5eaab5bbf6a7/image.png)
          
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/98aa8817b8e833635cd62f7fe6959607/image.png)
        
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/bb67873f4e2e6e779267d031918a73ec/image.png)


## 移动生活服务   政务公积金自然结果聚簇开发 【等待上线-原因（规划改为重点开发政务大厅）】

### 背景

mrd没有提供，暂无

### 完成情况

项目排期：7月25日 

提测：7月26日

测试环境： http://cp01-ala-fe-col-2.epc.baidu.com:8003/s?word=%E6%B7%B1%E5%9C%B3%E5%85%AC%E7%A7%AF%E9%87%91%E6%8F%90%E5%8F%96&wiseus=10.92.75.16


### 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/8249b7c51beee35ef14fa832fb4661c8/image.png)


## 移动生活服务   GMV  话费充值开发 【 提测中 】

### 背景

线上充值业务资源方为钱包，针对非钱包用户体验较差（需绑定钱包银行卡后方可充值），需进行优化。

影响面：约2w

### 完成情况

启动时间: 16年9月21日

提测时间: 10月13日，QA 14日下午才有人力跟进

小流量上线时间: 

全量时间点、PV值:

扩量时间点、PV值:

增加新卡上线时间点：模板=rotarecharge，sid=102160，资源id=31876。

### 本周进展

排期：16年9月21日-9月23日，3个工作日，26日-28日联调。 

功能自测，代码优化，bug修复

因糯米接口没有符合jsonp以及下单页没有开发完成导致联调延期 ， 10月12日列表接口调通，下单页手机充值50元的调通【其他面额暂时没有下单信息】）
 

线下地址： [话费充值]http://cp01-ala-fe-col-2.epc.baidu.com:8003/s?word=%E6%89%8B%E6%9C%BA%E5%85%85%E5%80%BC&wiseus=10.92.79.46)

### 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/ab45eb6f5658af1ae0616ec6eaec64c6/image.png)

## 下周计划 

1、手机充值上线

2、娱乐特型人物生日运营开发

3、GMV 接入糯米tp一期开发
