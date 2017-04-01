# 李浪波

> 从2016-04-10到2015-04-15

## 娱乐哥伦布

简述：

人物通用框架本周进行小流量实验尝试，在原来基础上争取做正收益

人物小鲜肉项目在开发中，预计20能够提测，争取下周内上线

音乐哥伦布项目本周进行需求评审，并启动部分开发，预计20号提测，下周内上线

音乐

### 人物-人物通用框架实验

#### 背景

* 哥伦布要求对整体生态有更强把控力，不仅局限于阿拉丁和sigma的内容增加，而是从用户需求出发整体考虑搜索结果的组织形式。
* 娱乐人物相关需求主要由阿拉丁和八卦自然结果满足
* 在明星query下增加八卦、图片、作品导流入口
* 将八卦类自然结果纳入到“明星八卦中心”里，搜索结果页结构改为阿拉丁+重点需求入口

#### 完成情况

* <span >3.29日小流量上线</span>
* <span >首版小流量数据显示有点有略微下降</span>
* <span style="color:red;">4.8日上线白卡样式实验<span>
* <span style="color:red;">4.12日上线黑卡样式实验<span>
* <span style="color:red;">4.13日优化中间页调起,修复一些bug<span>
* <span style="color:red;">4.14日上线人物轮播实验<span>

#### 效果图

* 线上query 陈伟霆  sid=103289
* [传送门](http://m.baidu.com/s?word=%E9%99%88%E4%BC%9F%E9%9C%86&sid=103289)

<img src="img/lijialong01/r.png" width="200px"/>
<img src="img/lijialong01/r1.png" width="200px"/>
<img src="img/lijialong01/r3.png" width="200px"/>
<img src="img/lijialong01/r4.png" width="200px"/>

### 人物         百度搜索-小鲜肉开发

#### 背景

百度搜索与10位刚刚出道，配合度高，微博粉丝活度强的男明星合作搜索结果页。

#### 收益

影响面：3w/day

#### 完成情况

开发排期：4月5日至4月15日
4月5日搜索结果页开发完毕，调起superframe逻辑已经完成，期间被抽去开发音乐2号项目；
4月8日继续开发中间页，按正常进度往后推移两天完成开发

## 音乐

### 音乐哥伦布2.0-歌手的歌

#### 背景

歌手的歌第一条音乐需求满足了85%+的需求，通过做一些智能推荐，能够满足95%

#### 完成情况

开发排期：20号体测

## 通用兜底和其他

简述：

体育赛事卡片18号提测，20号上线；其他卡片已经开始跟进：球员、对阵等

游戏哥伦布大卡已经启动，由阳阳指导文利进行开发，15号产出schema，直播等需求有序进行中

政务、法律方向：政务办事迁移卡简版18号提测；法律问答聚合模板12号已上线


### wise端政务办事迁移卡简版

新增模板，模板已在 `4月14日` 下午完成，目前数据还有些问题，`4月15号` 可以提测。[query](http://cp01-ala-fe-6.epc.baidu.com:8003/s?word=%E5%85%AC%E7%A7%AF%E9%87%91%E6%9F%A5%E8%AF%A2&sa=tb&ts=3224885&t_kt=0&ie=utf-8&rsv_t=37c5xgYhtyMOJNNrAJyf8EW1qWvXbD8TIXsC59xqklgYaxQVjZut&rsv_pq=10594020536277783468&ss=101&t_it=1&rsv_sug4=4812&inputT=4200&oq=%E9%99%84%E8%BF%91%E7%9A%84%E7%BE%8E%E9%A3%9F)

### 体育——拉塞尔-体育赛事NBA赛程卡片需求

#### 完成情况

基本完成~还有很多细节~需要调整~样式~新闻~fixed的定位吸附优化~大概17号可以提测

#### 效果截图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/aae676338fb8f4cd860cf579f9262aeb/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/d7f52f54b118d2e5128fbf4852d894df/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/7010a7f4eefac60fd18421050571a4e5/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/22000231ab2dc6891cb5f693d178fcf0/image.png)

### 按律问答聚合模板

#### 背景与目标

法律垂类通过法律法规和法律问答满足基本需求，目前线上关于法律方面的问答多来自普通用户，回答缺失权威性和时效性，因此引入法律网站问答资源，进行挖掘、聚合；同时借助基础需求满足进行铺量，成为后续引入服务的入口。

#### 收益

实验组对照组各抽取50%流量，实验组sid=104734，对照组sid=104735,小流量选取8.5W影响面实验，后续扩召。

#### 完成情况

4.12日上线

#### 效果截图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/96107a126e264323c52b04c137f331f6/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/e63ea6b9bb9e702fd6d0d212001565d1/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/8f2d8f53262bfae340aede8ba8acfefd/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/e45d13d676fc9140a5f13747b9d450a2/image.png)

## 待排期需求

- 宠物哥伦布，19号需求评审

- 体育赛事外另5张卡片 下周启动

- 游戏系列卡片，本周已启动


## 开发易用性

### 公共issue收集

#### 背景

* 为开发者能分享自己的开发经验,或者遇到过的坑提供一个交流平台,形成问题集.作为sfe文档的补充.
* [传送门](http://gitlab.baidu.com/psfe/ala-duty-case/issues)

#### 最新进展

* 目前已有一些issue

### 新增sigma2.0文档

* [传送门](http://sfe.baidu.com/#/阿拉丁/无线网页搜索/开发规范/sigma2.0+开发规范)

### 新增哥伦布子卡集建设

* [传送门](http://sfe.baidu.com/#/阿拉丁/无线网页搜索/哥伦布子卡中心)

### 编写新人培训文档

* 目前正在火热编辑中，17号出初版，25号推行试用

## 模板退化-协同项目

### 背景

缩减阿拉丁样式，使结果页10条样式保持风格一致

### 进展

- 本周主要解答pm问题，协助追查部分线上退化问题

- 推荐老版schema自动添加，已经能自动添加，新增部分schema添加需求
