# 刘玲玲

> 从2016-11-28 到 2016-12-02

### 本周进展如下： 

###  阿拉丁卡片部分
* 1、优质文章调起情景页bug修改 （周一11.28上线）
* 问题：因优质文章的召回通路是走us ，us本身有rank策略的，会把这个卡片rank到第二页，所以情景页在这种情况下需要拼翻页相关的参数
* 模板名： sp_eval query=小米note2, sid=102164
* 线上地址： https://m.baidu.com/pu=sz%401320_2001/s?pn=10&usm=1&sid=102164&word=%E5%B0%8F%E7%B1%B3note2&sa=np
* 
* 2、招聘校招栅格化（周二11.29上线）
* 模板名： wise_campus_recruit query = 校园招聘2016
* 线上地址：https://m.baidu.com/s?word=%E6%A0%A1%E5%9B%AD%E6%8B%9B%E8%81%982016
* 
* 3、招聘遗留品牌名称更改、弱需求样式优化调整 （周二11.29上线）
* 模板名：
* wise_fan_jianzhi  query = 兼职招聘
* we_wise_fan_jianzhi  query = 北京兼职
* we_wise_campus_gen  query = 邢台123
* wise_campus_gen  query = 人才招聘网
* 
* 4、招聘公司名大卡 细节跳转
* 模板名： zhp_firm_name 
* 
* 5、招聘公司名大卡，接口变动（待qa测试）
* 背景： 原接口调用的是第三方脉脉的接口，现该成自己的（openapi）的接口
*
* 6、iframe 嵌套 开发中
* 背景： 因部分中间页（视频、职场、问答）的详情页是第三方开发的，招聘为使其变成自己的内容（以zhaopin.baidu.com 展示），所以建一个iframe嵌套的框

### 下周待开发需求如下：

* 1、招聘职位哥伦布迭代KG优化 （delay到下周） 
* 2、职场中间页 （delay下周待开发）
* 4、生活服务方向 生活缴费——水电煤气费  （排期是12.5号，半人力介入，预估会delay到下周中旬了 ）




