# 司文宇
 
 > 2016年10月17日~2016年10月21日
 
 ## 景点强样式
 
#### 项目背景
 强样式展现sigma卡，弱样式展现普通卡。pv170w。
 
 
#### 本周进展
 
 线下环境：<a href="http://yq01-psdy-diaoyan1007.yq01.baidu.com:8003/s?word=%E5%8D%97%E5%B1%B1%E5%8D%97%E6%BB%91%E9%9B%AA%E5%9C%BA">传送门</a>
 
 中间页开发中。
 
#### MRD
 <img src="../2016-11-18/img/siwenyu/p1.png" width='300px'>
 
 
#### 后续计划
 
 预计数据周四（11.18）ready，下周二上线
 
 
 
## 政务大厅  
 
#### 项目背景
 在五险一金的query下，集合多家资源，设计中间页和搜索结果页，打造百度政务大厅。并让用户对于百度搜索政务有整体品牌感知。影响面：50w/day
 
#### 相关信息
 	fe：司文宇    pm：王舒平    
 	中文名：政务大厅
 	模板名：government_aff
 	schemaId：5707
 	模板id：10433
 	wiseus：   10.92.79.47：3210
 	q=北京公积金     上海公积金
 	srcid=32382
 
#### 本周进展
 
 线下环境：<a href="http://cp01-ala-fe-col-2.epc.baidu.com:8003/s?word=%E6%9C%88%E7%90%83%E5%85%AC%E7%A7%AF%E9%87%91&wiseus=10.92.79.47&bd_ck=0">传送门</a>
 
 中间页开发中。数据周四（11.17）ready，联调中
 
#### UE稿
 <img src="../2016-11-04/img/siwenyu/p1.jpg" width='300px'>
 
 
## 公积金提取－小度机器人
 
#### 开发相关
 	fe：司文宇    pm：王舒平    rd：许天涵 
 	中文名：公积金提取－小度机器人
 	模板名：rota_life_guide
 	schemaId：5343
 	模板id：9561
#### 本周进展
 
 线下环境：<a href="http://cp01-ala-fe-col-2.epc.baidu.com:8003/s?word=%E5%85%AC%E7%A7%AF%E9%87%91%E6%8F%90%E5%8F%96&wiseus=10.40.23.48&ip=47.153.191.255&bd_ck=0">传送门</a>
 
 更换三组展现，周四（11.17）确定最终样式，待后端上线，模板将于下周一上线。
 
#### 效果图
 
 <img src="../2016-11-18/img/siwenyu/p2.png" width='300px'>
 
 
 个人开发记录：<a href="http://wiki.baidu.com/pages/viewpage.action?pageId=235583071">wiki入口</a>
 
 
 
## 文档平台
 
#### 背景和计划
 
 <a href="http://wiki.baidu.com/pages/viewpage.action?pageId=210385547">SFE文档平台&计划</a>
 
 部分文档更新内容。
 
#### 本周进展
 
 无。
 
## 签证开发
 
 帮助签证开发的同学做阿拉丁开发，对提供的文档列表完善，指导开发。
 
#### 本周进展
 
 1. a标签嵌套华为测试机bug问题追踪，是由于c-blocka省略造成的问题
 已记录在wiki中：<a href="http://wiki.baidu.com/pages/viewpage.action?pageId=246191143">传送门</a>
 
## 城市情景页
 
#### 背景
 
 周四（11.17）早上宽哥提出情景页tab不能切换bug，我跟进，在测试机上反复查找问题，发现是所有的情景页js都挂了
 
#### 具体跟进
 
 拉青乾，林哥，小琴，文倩等人一起定位问题，是情景页同学更新全局变量重名导致，已于周四（11.17）晚7点左右修复。
 
 
#### 建议
 
 1.基础架构更新要充分测试，覆盖结果页，情景页1.0，情景页2.0等；
 
 2.类似于这种更新，好像大家都不同步，比如：日志，applid原来是不变的，隔两天忽然每次刷新都变化了，也没找到谁更新的机制。
