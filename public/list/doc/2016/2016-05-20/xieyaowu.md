# 谢耀武

> 从2016-05-16 到 2016-05-20

## 天宁岛简报

* 餐饮多点：小流量实验中 召回：[金鼎轩](http://m.baidu.com/s?word=%E9%87%91%E9%BC%8E%E8%BD%A9&sid=104904)
* 餐饮单点：~~模板开发完成~~ 情景页已上线 召回：[金鼎轩 - 点击地图下面的链接](http://m.baidu.com/s?word=%E9%87%91%E9%BC%8E%E8%BD%A9&sid=104904)
* ~~景点2.0：短线哥伦布已上线 召回：[故宫](https://m.baidu.com/s?word=故宫&sid=104213)~~
* 景点收敛卡：使用短线方案制作，预计下周上线
* 城市2.0：短线哥伦布已上线 召回：[北京](https://m.baidu.com/s?word=北京)
* 出行城市到城市2.0：模板开发中，预计5月底小流量上线

## 天宁岛 - 出行 - 城市到城市

### 背景

现有城市到城市的卡片比较分散，在没有明确交通方式的情况下，不能满足对不同的出行方式信息对比的需求，这些会影响城市到城市Query的需求满足，所以针对此类需求出一个哥伦布大卡，解决上述问题。

### 收益

预计PV：城市到城市预计的PV大约为50W左右，在整体出行需求中的影响面大约为10%。预期收益：通过有序组织多种出行方式，综合对比各种出行成本摘要信息，降低用户决策的步骤，以此提高转化率。预计提升Query=“城市到城市”下的出行GMV20%。

### 情况

模板05-04开始开发，使用哥伦布长线方案开发，预计5月底小流量上线

目前进度：

* 火车票子卡 - 95%
* 汽车票子卡 - 95%
* 头卡 - 90%
* 自驾路线子卡 - 90%
* 飞机票 - 0%

测试环境：[http://cp01-ps-fe-2.epc.baidu.com:8003/s?tn=&word=北京到邯郸&sid=102124](http://cp01-ps-fe-2.epc.baidu.com:8003/s?tn=&word=北京到邯郸&sid=102124) 

![img](http://s.jiathis.com/qrcode.php?url=http%3A%2F%2Fcp01-ps-fe-2.epc.baidu.com%3A8003%2Fs%3Ftn%3D%26word%3D%E5%8C%97%E4%BA%AC%E5%88%B0%E9%82%AF%E9%83%B8%26sid%3D102124)

### 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/58f5051ce7bc7dd49eced7b503123f1d/image.png)

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

## 跟进的其他需求 - 升级tc链接

* kuaixing - 已修改，下周上线
* sam_wise_ticket_lp - 已修改，下周上线
* busticket_more - 已修改，下周上线
* wz_maphotel - 需要跟pm确认是否有展现
* wise_travel2 - 模板未使用，将删除，pm@涛哥已确认
* flight2 - 模板未使用，将删除，pm@涂伟已确认


## 值周

1. 修复q=谭松韵 bk_polysemy 页面空白问题 ，5-16上线
2. 修复q=想说爱你不容易  musicsongs 模板升级mcpack引发的血案 ， 5-16上线
3. 修复q=t121 trainnumber https环境图片http报警 5-18上线
4. 删除电影4个模板wz_generaldianyingyuan，wz_dianyingyuan，wz_generaldianyingpiao，wz_placemovie 5-18删除上线
5. pc q=逆战 musicsong 单曲模板修复播放时翻页js报错  5-18上线
6. pc q=左手右手一个慢动作是什么歌 music_lrc_r 歌词反查模板修复播放时翻页js报错 5-18上线
7. wise_video_expert模板hhvm报错，因为使用了count(可选字段.xxoo) 5-18 已反馈给fe@pengbin
8. table01模板版式错误: https://baidumd.com/tools/tpl.md 05-17已联系pm下资源
9. table01模板样式问题：武汉大动脉错位医院,美国企业500强,北京股骨头坏死医院 - @杨帆正在跟进

