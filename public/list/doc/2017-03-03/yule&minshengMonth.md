## 娱乐&民生月报

> 2017/02月

### 人员安排
 
```
- FE: 李晓、吴丽黎
- PM: 汪雪飞、王舒平、刘悦、王奕博、朱莹
- RD: 张溢麟、施文祥
```

### 业务数据
|方向| 当月 | 上月 |同比|季度 | 年度 | 
|---|---|---|---|---|---|
|人物网络印象|0||||50W|
|人物kg页|20w|||300W||
|音乐|搜索流量900w，<br />情景页流量100w，<br />内容页分发量 300w||&nbsp;||覆盖搜索流量1000w pv，<br />情景页流量 270w（其中曲谱中间页10w，多版本中间页30w，歌词中间页130w，视频中心100w）,<br />内容页分发量 550w（音乐内容消费400w，音乐视频中心消费150w）|

 
### 工作量&质量
|上线项目数|卡片数|紧急上线次数|修复BUG数量|
|---|---|---|---|
|5|16|2|1|

### 紧急上线&修复bug总结
- [日历卡片国外时区日期星期错乱bug](http://newicafe.baidu.com/issue/AladdinTemplateCase-1155/show?from=page) 
- 音乐紧急上线：兼容某些站点title不可点，当时测试的时候数据没有完全放开，导致有些query的卡片展现title重复，所以回滚了
### 重点项目&产出
 

#### 视频sf1.0迁移
- 背景：sf1.0机制即将下线，视频类目如下两个需要迁移，入口模板名： sam_wz_micro_video3，资源号：4185，query：dj妙音坊，activity：video_living_broadcast；入口模板名：wise_video_live ，资源号：4194，query：免费视频在线观看，activity： wz_micro_video
- 开发模板：新增card: video_broadcast、video_micro
- 完成情况
    - 02.20号card上线
    - 02.22号结果页更改入口 [dj妙音坊](https://www.baidu.com/#|src_dj%E5%A6%99%E9%9F%B3%E5%9D%8A|sa_ib) [免费视频在线观看](https://www.baidu.com/#|src_%E5%85%8D%E8%B4%B9%E8%A7%86%E9%A2%91%E5%9C%A8%E7%BA%BF%E8%A7%82%E7%9C%8B|sa_tb)
- 计划  
    - 02.17 完成开发

 
#### 音乐v榜sf1.0迁移到js模块  @ lily
- 背景：娱乐人物 
- 开发模板：card:act_timeline act_pictext act_playmv
- 完成情况
    * 2.8 - 2.10 开发
    * 2.13 提测
    * 2.21 上线 [微白城市](http://cp01-ala-fe-col-1.epc.baidu.com:8003/s?word=%E5%BE%AE%E7%99%BD%E5%9F%8E%E5%B8%82)
    * 2.27 erson_info person_xingcheng 删除多余sf1.0部分代码
- 计划
    * 2月底前
- 效果图

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/677f275789cb11e5db3e4c82fc3642a1/image.png" width="300" />

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/9bb9f74ffbd03ed66e14f45a10b8008e/image.png" width="300" />
 
#### 网络印象(三次迭代) （项目状态：测试中） @丽黎
- 背景：针对娱乐话题人物（明星、网红、新闻人物、事件）实时抓取各渠道（新闻媒体、微博话题、视频弹幕、天涯贴吧）的内容信息，智能提取网民观点，
并同时通过情感分析归类正面负面。让用户可以轻松看到网络各方对于事件人物的实时态度与评价。 
- 开发模板 aladdin: impress； card：impress_person, impress_list
- 目标：
    * 一期，TOP200 娱乐人物 影响面 900w/d
    * 二期，TOP500 娱乐人物 影响面 1200w/d 
- 完成情况
    * 12.29 初步评审
    * 1.4 已给出数据demo
    * 开发：1月17-1月19（三次迭代：3月1日）
    * 出demo: 1月20
    * 提测：2月22日 （三次迭代：3月1日下午-3月2日）
- 计划    
    * 3月初上线小流量 [线下预览](http://cp01-ala-fe-plat-2.epc.baidu.com:8003/s?word=%E9%B9%BF%E6%99%97%E7%88%B6%E4%BA%B2)
- 效果图

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/8859c7bb42244ebaf46df80178a3793a/image.png" width="300" />

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/f2824c7ea9f848aaf5b839cfbbd5581a/image.png" width="300" />
 
#### 娱乐人物概览 （项目状态：测试中） @丽黎 @李晓
- 背景：人物知识聚合页需概览页完成pv流转与二次分发，概览页所需数据已有一定积累。
- 开发模板 aladdin:无 card：gl_detail (we_table、person_music、person_bagua、person_rela、person_video) 
- 收益：影响PV 500 W
- **工作量评估**
    - 需求量：1个情景页卡片
    - 开发风险：图搜情景页没有上线，会导致需求变更 | 1次 | 依赖图搜情景页流转 
    - 沟通风险：无
- 完成情况
    * 2.23 - 2.28 开发
    * 2.23 - 2.28 联调
    * 3.1 测试
- 计划
    * 2.22 - 2.28 开发
    * 3.1 联调 
    * 3.2 测试
    * 3.6 小流量上线 [刘诗诗](http://yq01-psdy-diaoyan1044.yq01.baidu.com:8003/sf?from_sf=1&word=%E5%88%98%E8%AF%97%E8%AF%97&ms=1&title=%E9%B9%BF%E6%99%97&resource_id=4498&top=%7B%22sfhs%22%3A2%7D&dspName=iphone&openapi=1&tn=tangram&pd=starkg&frsrcid=46337&frsrcid=46337&frorder=2&frorder=2&alr=1&new_aeks=1&ext=%7B%22sf_tab_name%22%3A%22%E6%A6%82%E8%A7%88%22%7D)
- 效果图

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/3455792fc9079370f3f407aa53f6ae2d/image.png" width="300" />

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/7838bbcf4915a907253c2a4f79005e23/image.png" width="300" />


#### 全国天气 （项目状态：测试中）@学林
- 背景：增加天气预报，地区，省份天气检索，可筛选全国处于XXX天气情况下的城市，满足用户更多的需求
- 开发模板 aladdin:wet_all_weather card：wet_pro_weather
- 完成情况
    - 2.9结果页开发完成
    - 2.16根据调整后ue图进行代码的修改
    - 2.21 开发完成
    - 3.1 联调完成
- 计划 
    - 2.27-3.1 联调
    - 3.2-3.3 测试 
    - 3.5 ubs评估 
    - 3.6 三级单
    - 3.7 小流量上线 [全国天气](http://cp01-misheng-glb-test01.epc.baidu.com:8003/s?word=%E5%85%A8%E5%9B%BD%E5%A4%A9%E6%B0%94)
- 效果图

<img src="http://wiki.baidu.com/download/attachments/286892247/image2017-2-16%2010%3A31%3A50.png?api=v2" width="300px">

<img src="http://wiki.baidu.com/download/attachments/286892247/image2017-2-16%2010%3A33%3A23.png?api=v2" width="300px">
 