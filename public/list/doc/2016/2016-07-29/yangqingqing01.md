## 杨青青
> 从7-25到7-29

## kv ae##
kv需要走schema 。ae资源都由资源方提供
## 删除模板##
1. 删除模板 和模板的静态资源
2. 跟PM确认，让他关闭资源。删除pm.open的资源
3. 跟值周同学说
## 开发一个新模板##

### 1设计schema###
[schema地址 ](http://pm.zz.baidu.com/)

设计好之后把schema id发给PM

### 2找pm配置资源###

在http://pm.open.baidu.com:8001/上设计虚拟模板并且上线，注意图片标签和schema里面的对应。

参考：[配置图片资源文档](http://sfe.baidu.com/#/阿拉丁/无线网页搜索/平台指南/02模板平台使用指南)

pm反馈资源号例如31342，和ip:10.99.27.59。 **query需要根据资源给出**

pm给出资源后即可与后端联调

### 3开发时注意事项###

 1. 记得加日志 [日志相关](http://sfe.baidu.com/#/superframe/card/5、统计相关)
 
### 4.发给pm看效果###
### 5.提测###
找周雨梅qa经理，说下大概啥时间提测、要测试模板的样式（psd里截图就行）
找她分配具体由哪个qa来测试。天宁岛项目都是v_yangyanxue。联系好qa之后在提测平台申请

[测试平台](http://cq01-zhouyumei01.epc.baidu.com:8088/)

### ps:###
记得在icafe上新建任务[icafe地址](http://newicafe.baidu.com/issues/space/WiseAladdinTemplate?spaceId=9168&cid=5&q=&currentPage=1&isQuery=29459&vid=29459&viewMode=wall&lane=[9196][9202][9203][9204][9205][2]&channel=&filter=30123)
 参考文档：[参考文档地址](http://sfe.baidu.com/#/串讲文档/阿拉丁/梁佳莹_ala开发流程_201509/Ala-wise+开发串讲 "开发流程") 

## 上线流程
1、确认完效果之后写日志，写完日志之后点发布，**静态文件也要点发布**。

2、在cr中生成cr链接，发[http://tpldev.baidu.com:8082/#codereview](http://tpldev.baidu.com:8082/#codereview)给PM，等待PM确认效果。cr中可检查代码对比

3、上线时间提前20分钟停止发cr。把cr地址+模板名发到线上群，@值周同学，跟进群里值周cr同学反馈的问题，直到cr同学确认你模板ok并准入

4、 3点左右等待沙盒编译时确认，在群里查看自己的cr里是否有自己模板，并在沙盒环境确认自己的代码是否生效，全ok后在群里说：确认。（在沙盒环境中记得加wiseus不然有可能搜不到)。如果无法观看效果需要自行去沙盒和单台确认代码

>去沙盒：登陆测试机，然后go shahe

>去单台： ssh dbl-wise-pui078-tc.dbl01.baidu.com

5、单台同沙盒确认一样

6、模板上线全量结束后通知pm说模板上线完成



## nearby_train

### 背景与目标

火车票临近召回

### 完成情况

已完成等待上线

### 效果截图

![](http://gitlab.baidu.com/psfe/ala-weeklyreport/raw/master/doc/2016-07-29/img/yangqingqing01/nearby_train.JPG)


## travel_bus

### 背景与目标

修改样式，增加出行时间与余票数目信息

### 完成情况

已完成

### 效果截图
![](http://gitlab.baidu.com/psfe/ala-weeklyreport/raw/master/doc/2016-07-29/img/yangqingqing01/travel_bus.PNG)