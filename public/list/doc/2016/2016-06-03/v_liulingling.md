# 刘玲玲

> 从2016-05-30 到 2016-06-03

## 招聘哥伦布卡片 

### 背景
应2016年，搜索结果页改造，之后招聘阿拉丁的模板为哥伦布类型，目前百度招聘模块，项目拆分后的阿拉丁卡（哥伦布类型）的类别有： 公司型、职位型、寻址型、地区型、符合型、兼职型、其他。

### 进展情况

* 本周上线如下：

* 1、公司、职位型静态文件（情景页图片展示）bug 修复 （周三 6.1上线） 
*   静态文件：wise_zhaopin_job(trend.js、wenda.js）  zhaopin_society (wenda.js)
*   线上地址：https://m.baidu.com/#|src_%E5%8E%A8%E5%B8%88%E6%8B%9B%E8%81%98|sa_tb
*  
* 2、招聘白卡，条数调整（由4改成3条） （周四 6.2上线）
*  模板名：wz_zhaopinexactnew  query= php招聘 
*  线上地址：https://m.baidu.com/#|src_php%E6%8B%9B%E8%81%98|sa_ib
*  
* 3、职位型 （zhaopin_jobglb_allzhiwei 子卡） title修改 （今天上线）
*    title满足条件：
*    (1) title随 query变动而改变
*    (2) 判断有无平均薪资字段（salary）展示不同title   
*        若有 title = query + '_全网职位_平均薪资' + salary  否则 title = query+ '_最新最全的招聘信息'
*  
### 值周