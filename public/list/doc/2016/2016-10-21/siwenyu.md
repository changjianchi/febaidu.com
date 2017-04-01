# 司文宇

> 2016年10月17日~2016年10月21日

## 点到点出行项目 

### 排期：  
	FE:10月10日-10月17日开发完成@文宇
	地图RD： 10月10日-10月14日提供联调环境@培盛
	后端RD： 10月17日-10月19日联调@国辉
	QA：     10月20日测试@燕雪；
	人工评估：10月20日人工评估；@王者
个人开发记录：<a href="http://wiki.baidu.com/pages/viewpage.action?pageId=218071759">wiki入口</a>

### 进度

10月12日：schema完成，假数据开发中，<a href="https://wwwhttps.baidu.com/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=pp_route&dev_path=searchaladdin&dev_tpltype=default&sid=99999&dev_online=0&dev_file=default.xml&dev_fileformat=xml&dev_pos=asResult&wd=%E4%BB%8E%E5%8C%97%E4%BA%AC%E8%A5%BF%E7%AB%99%E5%88%B0%E5%8C%97%E4%BA%AC%E5%8D%97%E7%AB%99&word=%E4%BB%8E%E5%8C%97%E4%BA%AC%E8%A5%BF%E7%AB%99%E5%88%B0%E5%8C%97%E4%BA%AC%E5%8D%97%E7%AB%99">平台预览环境</a>

10月17：样式开发完成

10月17-21：联调中

线下环境：<a href="http://cp01-ala-fe-col-2.epc.baidu.com:8003/s?word=%E5%8C%97%E4%BA%AC%E8%A5%BF%E7%AB%99%E5%88%B0%E5%8C%97%E4%BA%AC%E5%8D%97%E7%AB%99&wiseus=10.99.28.16">平台预览环境</a>

### UE图

<img src="../2016-10-14/img/siwenyu/p1.png" width='300px'>

UE黑科技：<a href="file:///Users/baidu/Downloads/%E5%B8%82%E5%86%85%E5%87%BA%E8%A1%8C_%E6%A0%87%E6%B3%A8_0929/index.html">UE黑科技入口</a>

## tab情景页切换组件


#### 进度，已上线

完善组件使用文档连接：<a href="http://sfe.baidu.com/#/阿拉丁/无线网页搜索/js组件/情景页顶部通栏技术方案">传送门</a>

环境稳定，联调结束，待odp上线
<a href="http://cp01-ala-fe-col-2.epc.baidu.com:8003/sf?openapi=1&dspName=iphone&from_sf=1&pd=city&resource_id=4324&word=%E5%8C%97%E4%BA%AC&hide=1&apitn=tangram&top=%7B%22sfhs%22%3A2%7D&ext=%7B%22type%22%3A%22food%22%2C%22tab_name%22%3A%22%E6%A6%82%E8%BF%B0%22%7D">环境连接</a>

#### demo截图

<img src="../2016-09-30/img/siwenyu/p11.png" width='300px'>

#### 本周迭代

1. 日志统计情况。

1. 清除锚点


## 情景页与收敛卡迭代上线

### 本周进展：

迭代结果页入口所有卡片title

	这个问题的原因：如果拼链接没有重写title，默认取word，就是query。修复：后端返回的key是对应的汉字，花重写title可以修复。相关模板：必游景点  精彩游记，相关问答   另外收敛卡也有这个问题~~

已上线(不是所以query都能召回所有的卡)：

<a href="https://m.baidu.com/s?word=%E5%8C%97%E4%BA%AC">线上环境1</a>
<a href="https://m.baidu.com/s?word=%E6%B7%84%E5%8D%9A&sid=109912">线上环境2</a>


## 文档平台

#### 背景和计划

<a href="http://wiki.baidu.com/pages/viewpage.action?pageId=210385547">SFE文档平台&计划</a>

部分文档更新内容。


## 辅助医疗团队组件使用

医疗团队使用top_nav组件开发融合情景页，结合他们的项目指导辅助开发，完善文档。结果页跳转有锚点功能，是情景页策略原因，组件修复。


## 签证开发

帮助签证开发的同学做阿拉丁开发，对提供的文档列表完善，指导开发。

## 模板下线

已通知告诉相关人员，完成模板下线，不下线的标注垂类。



















