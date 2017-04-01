## 娱乐&民生（李晓、丽黎、学林）

> 2017/02/20 - 2017/02/24

### 娱乐（丽黎）
 
#### 网络印象(三次迭代) @丽黎 （ue走查、提测中）
- 背景：
    * 针对娱乐话题人物（明星、网红、新闻人物、事件）实时抓取各渠道（新闻媒体、微博话题、视频弹幕、天涯贴吧）的内容信息，智能提取网民观点，
并同时通过情感分析归类正面负面。让用户可以轻松看到网络各方对于事件人物的实时态度与评价。 
- 目标：
    * 一期，TOP200 娱乐人物 影响面 900w/d
    * 二期，TOP500 娱乐人物 影响面 1200w/d 
- 完成情况
    * 12.29 初步评审
    * 1.4 已给出数据demo
    * 开发：1月17-1月19（三次迭代：3月1日）
    * 出demo: 1月20
    * 提测：2月22日 （三次迭代：3月1日下午-3月2日）
- 本周工作
    * 第三版开发、走查、提测
- 计划    
    * 3月初上线小流量
- [线下预览](http://cp01-ala-fe-plat-2.epc.baidu.com:8003/s?word=%E9%B9%BF%E6%99%97%E7%88%B6%E4%BA%B2)
- 效果图       
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/8859c7bb42244ebaf46df80178a3793a/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/f2824c7ea9f848aaf5b839cfbbd5581a/image.png)
 
#### 娱乐人物概览 （项目状态：开发中） @丽黎 @李晓
- 背景：人物知识聚合页需概览页完成pv流转与二次分发，概览页所需数据已有一定积累。
- 收益：影响PV 500 W
- **工作量评估**
  - 需求量：
  1个情景页卡片
  - 开发风险：
  图搜情景页没有上线，会导致需求变更 | 1次 | 依赖图搜情景页流转 
  - 沟通风险：
  无
- 完成情况
    * 2.23 - 2.28 开发
    * 2.23 - 2.28 联调
    * 3.1 测试
- 本周进展 
    * 02.27 完成头卡开发,新增card模板 gl_detail @丽黎
    * 02.28 完成5张子卡开发 @李晓
- 计划
    * 2.22 - 2.28 开发
    * 3.1 联调 [刘诗诗](http://yq01-psdy-diaoyan1044.yq01.baidu.com:8003/sf?from_sf=1&word=%E5%88%98%E8%AF%97%E8%AF%97&ms=1&title=%E9%B9%BF%E6%99%97&resource_id=4498&top=%7B%22sfhs%22%3A2%7D&dspName=iphone&openapi=1&tn=tangram&pd=starkg&frsrcid=46337&frsrcid=46337&frorder=2&frorder=2&alr=1&new_aeks=1&ext=%7B%22sf_tab_name%22%3A%22%E6%A6%82%E8%A7%88%22%7D)
    * 3.2 测试
    * 3.6 小流量上线
- 效果图
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/3455792fc9079370f3f407aa53f6ae2d/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/7838bbcf4915a907253c2a4f79005e23/image.png)

#### 百度沸点人气尖叫榜(新增强提示优化) @丽黎 `暂停`
 
- 背景
    * 百度明星ALL榜的上线实现了微博、音悦台等几个明星榜单的整合，然而百度并未上线专门为娱乐人物发起的榜单活动。
    * 百度的搜索风云榜单仅仅以搜索指数为衡量标准，并没有设立其他的粉丝行为为明星打榜造势。 
- 收益
    * 创立以搜索数据和产品数据为基础的榜单，榜单人物排名官方有效，在粉丝范围内具有较大影响力。
    * 通过粉丝的影响力，带动相关明星PV的提升。同时带动语音检索量 
- 完成情况：
    * 启动开发：
    * 提测： 
- 本周工作
    * 迭代评审，产出数据格式 
- 效果图
    ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/f6e02322cbdf02d2ae17463ccf38750a/image.png)
    ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/d0a01165c2b209c62f55058c2c2296a2/image.png)
- 计划
    * 2.25 上线
 

#### 娱乐人物 person_info person_xingcheng 删除多余sf1.0部分代码，2月27日上线 
#### 娱乐音乐-音频资源入库，复用模板album_v2 , 2月23日提供schema


### 民生（学林、李晓）

#### 雾霾地图、空气质量优化（项目状态：开发中）@李晓 @学林
- 背景：用户在搜索『XX空气质量』及其相关query的需求，除了有了解当前所搜地域的空气质量的需求之外，也有了解距离自己最近的监测点的空气质量及直观了解全市及全国空气质量分布的需求，为了更好的精细化满足用户在搜索『XX空气质量』场景下的需求，现新增雾霾地图的功能，从而帮助用户更好地把握出行等安排。
- 需求量：
  1个阿拉丁卡片，6个情景页卡片
  - 开发风险：
  使用未沉淀的交互方式 | 1次 | 百度地图自定义覆盖物打点
  同时存在同步、异步更新方式 | 1次 | 拖拽放大缩小地图后异步刷新数据
  使用复杂动画交互 | 1次 | 地图相关交互
  - 沟通风险：
  后端使用其他部门的在线接口 | 1 次 | 使用地图接口
- 开发模板 新增aladdin、新增card
- 完成情况
 - 2.10号调整方案，直接按照长线方案走，雾霾地图与空气质量一同开发，[确认具体细节](http://newicafe.baidu.com/issue/minsheng-1044/show?from=page)
 - 2.20 - 2.21 空气质量开发, @学林
 - 2.20 - 2.24 雾霾地图开发，@李晓
 - 2.24 - 2.28 空气质量联调，@学林 
- 本周进展
 - 2.27 空气质量联调完, @学林
 - 3.02 雾霾地图开始联调, @李晓
- 计划
 - 2.20 - 2.21 空气质量开发, @学林
 - 2.20 - 2.24 雾霾地图开发，@李晓
 - 2.24 - 2.28 空气质量联调，@学林 
 - 3.01 - 3.08 雾霾地图联调， @李晓
 - 3.09 - 3.13 测试
 - 3.14 - 3.16 人工评估、走单、小流量上线
- 效果图
<img src="http://wiki.baidu.com/download/attachments/286892247/%E7%A9%BA%E6%B0%94%E8%B4%A8%E9%87%8F%26%E9%9B%BE%E9%9C%BE%E5%9C%B0%E5%9B%BE.png?api=v2" width="600px"> 
 
#### 全国天气 （项目状态：开发中）@学林
- 背景：增加天气预报，地区，省份天气检索，可筛选全国处于XXX天气情况下的城市，满足用户更多的需求
- 开发模板 aladdin:wet_all_weather card：wet_pro_weather
- 本周进展
 - ue图调整
 - rd人员更换，排期调整
 - 情景页结果页开发完成
 - 2.27开始联调
- 完成情况
 - 2.9结果页开发完成
 - 2.16根据调整后ue图进行代码的修改
 - 2.21 开发完成
 - 3.1 联调完成
- 计划 
 - 1.17-1.20，2.10-2.13 开发
 - 2.14-2.16 联调
 - 2.17-2.20 测试
 - 2.21 人工评估
 - 2.22 三级单
 - 2.23 上线
 调整后
 - 2.27-3.1 联调
 - 3.2-3.3 测试 
 - 3.5 ubs评估 
 - 3.6 三级单
 - 3.7 小流量上线
- 效果图
<img src="http://wiki.baidu.com/download/attachments/246189488/image2017-1-19%2016%3A38%3A16.png?api=v2" width="300px">
调整后
<img src="http://wiki.baidu.com/download/attachments/286892247/image2017-2-16%2010%3A31%3A50.png?api=v2" width="300px">
<img src="http://wiki.baidu.com/download/attachments/286892247/image2017-2-16%2010%3A33%3A23.png?api=v2" width="300px">
#### 空气质量 （项目状态：开发中）@学林
- 背景：增加空气质量未来预报，城市排名，便于用户了解全国城市空气质量状况
- 需求量
  - 1个阿拉丁卡片，3个情景页卡片
  - 开发风险，沟通风险：
    无
- 开发模板 aladdin:sg_wet_air card：wet_air_rank wet_air_pollute
- 本周进展
 - 2.20结果页开发
 - 2.21空气质量排名开发  [线下连接](http://cp01-plat-wise-preview.epc.baidu.com:8003/s?word=%E5%AE%9C%E5%AE%BEpm2.5)
 - 2.24开始联调，ue走查
- 完成情况
 - 2.20完成结果页开发
 - 2.21完成空气质量排名开发
 - 2.28联调大致完成(后端缺少部分数据)
- 排期计划
 - 2.20 - 2.21 开发 
 - 2.24 - 2.28 联调 
 - 3.9 - 3.13  测试
 - 3.14 人工评估
 - 3.15 走单
 - 3.16 小流量上线
- 效果图 
 <img src="http://wiki.baidu.com/download/attachments/286892247/image2017-2-23%2012%3A36%3A39.png?api=v2" width="300px"> 
 <img src="http://wiki.baidu.com/download/attachments/286892247/image2017-2-23%2012%3A37%3A32.png?api=v2" width="300px">
 
  
