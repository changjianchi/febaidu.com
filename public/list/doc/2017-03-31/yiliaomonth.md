# 医疗&教育月报

> 2017-03

## 人员安排

```
- FE: 山莉、郑铎、金梅
- PM: 张婷婷、徐佳、曹文玥
- RD: 刘先锐、王强、何源川、李殿亚
```

## 业务规划
        
  [业务规划&目标](http://wiki.baidu.com/pages/viewpage.action?pageId=270190665)


## 主要业务数据

|方向|本月（pv）|上月（pv） |季度（pv） |目标（年pv） | 
|---|---|---|---|---|
|top词疾病+症状|510w|460w||990w（wise+pc）|
|长尾问答|1800w|||5000w|
|精准医院|80w|68w|60-80w|150w|
|精准药品|190w|170w||210w|
|母婴|135w|120w||140-150w|
|c类可控页面|46w||100w|||



## 工作量和质量
  
|项目|数量 |
|---|---|
|上线项目数|4|
|开发卡片数|6|
|紧急上线数|1|
|修复bug数|0|

* **问题总结：** 
  * 紧急上线，精准药品卡线上报hhvm的错误日志，修复了一下数组转换的问题，线上query覆盖不全面导致感康的推荐品牌展现为空，感康应该不展示品牌列表

## 重点项目和产出

- [医疗一问多答&多轮问答&文章C类页面](http://cp01-ala-fe-col-3.epc.baidu.com:8003/sf?openapi=1&dspName=iphone&from_sf=1&pd=health_disease_glb&resource_id=4420&word=%E7%B3%96%E5%B0%BF%E7%97%85%E7%97%85%E5%9B%A0&apitn=tangram&ms=1&top=%7B%22sfhs%22%3A11%7D&title=%E7%B3%96%E5%B0%BF%E7%97%85&ext=%7B%22sf_tab_name%22%3A%22%E7%97%85%E5%9B%A0%22%7D&frsrcid=&frorder=&lid=)
- [旅游游记](http://cq01-ala-fe-4.epc.baidu.com:8003/sf?openapi=1&dspName=iphone&from_sf=1&pd=city&resource_id=33841&ms=1&title=%E6%B8%B8%E8%AE%B0&word=0004bb10b41016011b34e6f40b191bbd&hide=1&apitn=tangram&top=%7B%22sfhs%22%3A2%7D&city_name=%E5%8C%97%E4%BA%AC&ext=%7B%22sf_tab_name%22%3A%22%E6%B8%B8%E8%AE%B0%22%7D&frsrcid=32228&frorder=2&lid=12411908863208513959)

### 医疗-C类文章页面建设 （医疗已上线）
- **背景：**目前医疗、旅游、汽车三个垂类均有C类页面建设的需求，为几个垂类文章内容页面提供公用的base模板、数据格式
- **收益&目标：**提供通用的数据格式,满足基础文章类内容页建设，同时确认统一的广告数据接入形式
- 开发模板
	- 情景页：
		- 方案一：c_article_base
	    - 方案二：c_main_base、c_tag_base、c_recommen_base、c_cyright_base
- **完成情况**
	- 确认分两套方案满足[通用C类文章页实现方案](http://agroup.baidu.com/ala-fe/md/article/273988)：
		- 整合文章内容、实体推荐、广告、相关推荐、版权五部分为一个模板，满足所有数据是一个资源的情况
        - 文章内容、实体推荐、广告、相关推荐、版权五部分拆卡提供灵活性，满足数据来源不一致的情况
    - 应用到医疗文章页已上线
    - 应用到旅游文章页联调中
- **效果图** 
 <img width=300 src="http://wiki.baidu.com/download/attachments/296912444/chunyu2.jpg?api=v2">
 
#### 医疗c类页面建设（持续迭代中）
- **背景：**
  针对医疗资源方落地页用户体验差，广告泛滥的问题，搜索医疗垂类今年的方向是自建封闭页面，对用户体验和广告体验进行提升和平衡。目标是提升基础页面体验和广告体验，探索多种变现方式。
- **收益：**
  扩量后PV 2000W
- **完成情况**
   - 3.13 一问多答卡片第一版上线&凤巢广告接入（NLP入口未开）
   - 3.23 医疗文章上线&凤巢广告接入（NLP入口未开）
   - 3.29 多轮问答上线&凤巢广告接入（入口还未开）
- **效果图**
  - 一问多答
    <img width=300 src="http://wiki.baidu.com/download/attachments/296912444/chunyu1.jpg?api=v2">
  - 相关文章
    <img width=300 src="http://wiki.baidu.com/download/attachments/296912444/chunyu2.jpg?api=v2">
  - 多轮问答
    <img width=300 src="http://wiki.baidu.com/download/attachments/296912444/chunyu4.jpg?api=v2">
 
#### 医院
- **背景：**
  由于资源方数据改动，将必填字段改为不必填字段，需做数据兼容处理

- **完成情况**
   - 3.20     wz_hospital_special模板上线
   
- **效果图**
 
    <img width=300 src="http://wiki.baidu.com/download/attachments/296912444/hospital.png?api=v2">
 
### 未删格化模版优化(教育)
- **背景：**针对未栅格化的模板，以新版UE图进行栅格化
- **收益&目标：**该模板会通用normal_link,pc,wise,ipad端公用模板。因线上case发现未线上老旧模板，未栅格化
- **开发模板**
- **情景页：**accountant_exam
- **效果图**
  
	<img width=300 src="http://wiki.baidu.com/download/attachments/296912444/accountant_exam.png?api=v2">
 

## 技术产出&问题总结
- [通用C类文章页实现方案](http://agroup.baidu.com/ala-fe/md/article/273988)


