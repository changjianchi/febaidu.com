# 谢耀武

> 从2016-05-23 到 2016-05-27

## 天宁岛简报

* ~~餐饮多点：小流量实验中 召回：[金鼎轩](http://m.baidu.com/s?word=%E9%87%91%E9%BC%8E%E8%BD%A9&sid=104904)~~
* ~~餐饮单点：情景页已上线 召回：[金鼎轩 - 点击地图下面的链接](http://m.baidu.com/s?word=%E9%87%91%E9%BC%8E%E8%BD%A9&sid=104904)~~
* ~~景点2.0：短线哥伦布已上线 召回：[故宫](https://m.baidu.com/s?word=故宫&sid=104213)~~
* 景点收敛卡：使用短线方案制作，**5月25日上线**，召回：[故宫](https://m.baidu.com/ssid=fb07416b373367756361733f09/s?word=%E6%95%85%E5%AE%AB&sid=106555)
* 城市2.0：短线哥伦布已上线 召回：[北京](https://m.baidu.com/s?word=北京)，**配合点调修改模板**
* 出行城市到城市2.0：模板开发完成，正在测试，**预计05-30模板上线**，召回：[北京到深圳](http://cp01-ps-fe-2.epc.baidu.com:8003/s?word=%E5%8C%97%E4%BA%AC%E5%88%B0%E6%B7%B1%E5%9C%B3&sid=102124)

## 天宁岛 - 出行 - 城市到城市

### 背景

现有城市到城市的卡片比较分散，在没有明确交通方式的情况下，不能满足对不同的出行方式信息对比的需求，这些会影响城市到城市Query的需求满足，所以针对此类需求出一个哥伦布大卡，解决上述问题。

### 收益

预计PV：城市到城市预计的PV大约为50W左右，在整体出行需求中的影响面大约为10%。预期收益：通过有序组织多种出行方式，综合对比各种出行成本摘要信息，降低用户决策的步骤，以此提高转化率。预计提升Query=“城市到城市”下的出行GMV20%。

### 情况

模板开发完成，05-26提测，预计05-30模板上线

测试环境：[http://cp01-ps-fe-2.epc.baidu.com:8003/s?tn=&word=北京到邯郸&sid=102124](http://cp01-ps-fe-2.epc.baidu.com:8003/s?tn=&word=北京到邯郸&sid=102124) 

![img](http://s.jiathis.com/qrcode.php?url=http%3A%2F%2Fcp01-ps-fe-2.epc.baidu.com%3A8003%2Fs%3Ftn%3D%26word%3D%E5%8C%97%E4%BA%AC%E5%88%B0%E9%82%AF%E9%83%B8%26sid%3D102124)

### 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/58f5051ce7bc7dd49eced7b503123f1d/image.png)


## 跟进的其他需求 - 升级tc链接

* kuaixing - 已上线
* sam_wise_ticket_lp - 已上线
* busticket_more - 已上线
* ~~wz_maphotel - 其他fe栅格化~~
* wise_travel2 - 已删除上线
* flight2 - 已删除上线

## 跟进其他需求 - 升级图片懒加载

[升级文档](http://sfe.baidu.com/#/阿拉丁/无线网页搜索/模板性能优化/图片懒加载方案)

### 待修改

* busticket_more/iphone.tpl:
* lvyouoversea/iphone.tpl:
* travel2/iphone.tpl:
* wise_discount/iphone.js:
* wise_scene_trav/inc_trav_subcommon.tpl:


## 跟进其他需求 - 升级飘红 - 待修改

* wz_placemovie_new
* busticket_more
* tinian_trav

