# 医疗月报

> 2017-02

## 人员&&需求安排

```
- FE: 山莉、郑铎、金梅
- PM: 张婷婷、徐佳、曹文玥
- RD: 刘先锐、王强
```

## 业务规划
        
  [业务规划&目标](http://wiki.baidu.com/pages/viewpage.action?pageId=270190665)


## 业务数据

|方向|本月（pv）|上月（pv） |季度（pv） |目标（年pv） | 
|---|---|---|---|---|
|top词疾病+症状|460w|350w||990w（wise+pc）|
|长尾问答|460w|35.6||5000w|
|精准医院|68w|~50w|60-80w||
|精准药品|170w|||210w|
|母婴|~25w|||150w|
|c类可控页面|750w|||8000w|


## 工作量和质量
  
|项目|数量 |
|---|---|
|上线项目数|2|
|开发卡片数|10|
|紧急上线数|1|
|修复bug数|1|

* 问题总结： 
  * 紧急上线，sf1.0迁移值sf2.0项目，按照编码规格修改完格式没有重新确认效果，上线过程中沙盒、单台没有确认导致上线后页面中直接显示html代码片段，已于3.1日晚修复重新上线
  
  * 修复bug，修复线上老模板医疗药品说明书sigma卡片样式问题，白卡样式写到了sigma_css中导致白卡样式丢失

## 重点项目和产出

### sf1.0迁移（已上线）

[效果](https://m.baidu.com/sf?pd=wenda&openapi=1&dspName=iphone&from_sf=1&resource_id=31143&actname=act_expert_an&word=%E7%B3%96%E5%B0%BF%E7%97%85&title=%E4%B8%89%E7%94%B2%E5%8C%BB%E9%99%A2%E4%B8%93%E5%AE%B6%E9%97%AE%E7%AD%94&ext=%7B%22title%22%3A%22%5Cu4e09%5Cu7532%5Cu533b%5Cu9662%5Cu4e13%5Cu5bb6%5Cu95ee%5Cu7b54%22%2C%22key%22%3A%22%5Cu7cd6%5Cu5c3f%5Cu75c5%22%2C%22resourceid%22%3A%2231143%22%7D&tn=wisetpl&dsp=iphone&top=%7B%22sfhs%22%3A5%7D&lid=13400635194328903710&ms=1&frsrcid=31177&frorder=3)

- 开发模板
    wise_expert_answer,act_expert_an	
- 完成情况
    2.20 开始迁移
    2.22 交给pm验收
    2.23 验收完成，等后台上线
    3.1  完成上线
    
### 效果图：

<img width=300 src="http://wiki.baidu.com/download/attachments/296912444/image2.png?api=v2">
<img width=300 src="http://wiki.baidu.com/download/attachments/296912444/image1.png?api=v2">




### 医疗-母婴孕周刊 （小流量上线）
- [母婴孕周刊](https://cp01-ala-fe-col-3.epc.baidu.com:8004/s?iscookie=1&word=%E5%AD%953%E5%91%A8&sa=re_1_33593&rqid=5967055219260520044)
- 背景：对于用户的孕期系列需求满足较差，需求是可以通过结构化信息进行满足的，本次优化引入权威、优质的结构化资源，不仅包含文本类信息，还加入了富媒体元素，包括3d视频和图片等可视化信息。
- 收益：预期影响pv15w。
- 开发模板
	- 结果页：baby_status
	- 情景页：baby_status、mother_change、mother_tools、muying_diet、baby_video
- 完成情况
   - 2.27 小流量上线


### 效果图：

<img width=300 src="http://wiki.baidu.com/download/attachments/296912444/image2017-3-2%2015%3A14%3A53.png?api=v2">

<img width=300 src="http://wiki.baidu.com/download/attachments/296912444/image2017-3-2%2015%3A12%3A25.png?api=v2">

<img width=300 src="http://wiki.baidu.com/download/attachments/296912444/image2017-3-2%2015%3A10%3A59.png?api=v2">

    
### 项目收益：

- 针对母婴及慢性病群体的粘性需求，建设专题页，增强用户留存。
- 首先是本次『母婴孕周刊』前端基础体验满足，预期pv:15w。

## 技术产出&问题总结
	1. 标准模板中提取的video、imgs组件进行升级pmd的b-scroll迁移到fusion的b-scroll
	2. 目前各浏览器对video的实现各异fusion中的b-player存在兼容问题，目前涉及到当前页面播放的需求建议跳到第三方页面


