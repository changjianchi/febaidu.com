## 娱乐&民生（李晓、丽黎、学林）




### 娱乐（李晓、丽黎）
#### 高级感项目 (丽黎)
- 背景：百度wise搜索结果页的样式不够美观，阅读体验较差，现在尝试类App的设计风格，通过增大间距、放大图片、调整链接颜色等方式来增强浏览体验。
- 目标：
    * 第一期（实验阶段）：完成整体页面风格的改造以及部分卡片结构的调整（图片3n->4n，url位置改动等）+ 右图左文，通过实验来分析本次样式改
造是否能提升用户浏览体验，目标是H1末将高级感搜索样式转全
    * 第二期（阿拉丁卡片改造）：整体页面风格的改造全量之后，针对各个垂类的阿拉丁卡片，逐渐进行样式重新设计和开发，使之也能符合高级感的要求
- 完成情况
    * 开发：3月15日-3月17日
- 本周工作
    * 推荐模板：sigma_celebrity_rela ue验收通过
    * 图片模板：we_image ue验收通过
    * 百科模板：bk_polysemy ue验收通过
- 计划  
    * 4月初上线小流量
- 预览
  模板名 | query
    sigma_celebrity_rela | 刘德华
    we_imgae | snh48
    k_polysemy | 名人 / 2017年 / 朴树
  [刘德华sigma_celebrity_rela](http://cp01-ps-fe-4.epc.baidu.com:8003/s?iscookie=1&word=%E5%88%98%E5%BE%B7%E5%8D%8E&sid=114449)
- 效果

  ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/20ecb6e687a095b4e3ceb6edcc7b2622/image.png)


#### 网络印象(三次迭代) @丽黎 （小流量 1% / 9w）
- 背景：针对娱乐话题人物（明星、网红、新闻人物、事件）实时抓取各渠道（新闻媒体、微博话题、视频弹幕、天涯贴吧）的内容信息，智能提取网民观点，
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
    * 3月初上线小流量 [实验预览](https://m.baidu.com/s?word=%E9%B9%BF%E6%99%97&sid=101463)
- 本周工作
    * 暂无
- 计划  
    * 3月初上线小流量
- 效果

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/8859c7bb42244ebaf46df80178a3793a/image.png" width="300"/>

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/f2824c7ea9f848aaf5b839cfbbd5581a/image.png" width="300"/> 

#### 娱乐人物概览 （项目状态：已上线） @丽黎 @李晓
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
    * 3.6 小流量上线
- 本周进展 
    * 暂无
- 计划
    * 2.22 - 2.28 开发
    * 3.1 联调 [刘诗诗](http://yq01-psdy-diaoyan1044.yq01.baidu.com:8003/sf?from_sf=1&word=%E5%88%98%E8%AF%97%E8%AF%97&ms=1&title=%E9%B9%BF%E6%99%97&resource_id=4498&top=%7B%22sfhs%22%3A2%7D&dspName=iphone&openapi=1&tn=tangram&pd=starkg&frsrcid=46337&frsrcid=46337&frorder=2&frorder=2&alr=1&new_aeks=1&ext=%7B%22sf_tab_name%22%3A%22%E6%A6%82%E8%A7%88%22%7D)
    * 3.2 测试
    * 3.6 小流量上线
- 效果图

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/3455792fc9079370f3f407aa53f6ae2d/image.png" width="300">

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/7838bbcf4915a907253c2a4f79005e23/image.png" width="300">

#### 音乐视频化 （项目状态：开发中） 
- 背景：音乐综艺节目使用视频强样式实验，视频团队强样式上线时间太晚，先新开卡片上线实验，抽离html、
- 收益：影响PV 暂无
- **工作量评估** (参考 [工作量评估方法](http://wiki.baidu.com/pages/viewpage.action?pageId=268094117) )
    - 需求量：1个阿拉丁卡片
    - 开发风险：暂无
    - 沟通风险：后端使用其他部门的在线接口 | 1 次 | 资源方直接提交
- **完成情况** 
     - 03.21 fe开发
- 本周进展 
     - 03.21 fe开发
- **排期计划**
     - 03.21 fe开发
     - 03.23 整体联调
     - 03.24 走单
- 效果图

<img src="http://wiki.baidu.com/download/attachments/258842251/BaiduHi_2017-3-23_14-31-46.png?api=v2" width="300" />


#### ala/ui相关组件bug修复 （项目状态：已上线） 
- 背景：www A.page内容和头部分离后，城市组件、日历组件等调起后页面层级错乱，修改city-7.js、calendar-6.js并上线
- 收益：影响PV 暂无
- **完成情况** (记录主要里程碑完成的时间点，不要删除之前的记录)
    - 03.20 fe开发
    - 03.21 op操作上线
- 本周进展 
    - 03.20 fe开发
    - 03.21 op操作上线
- **排期计划**
    - 03.20 fe开发
    - 03.20 op操作上线
- 效果图

<img src="http://wiki.baidu.com/download/attachments/258842251/BaiduHi_2017-3-23_14-40-37.png?api=v2" width="300" /> 

#### 其它 
- 娱乐音乐-音频资源入库，复用模板album_v2 , 3月10日开发模板，数据周五准备好，3月20日联调 `暂停，3月27开启`。
- 人物尖叫榜
    * 添加挖宝入口，3月21日添加，22日上线模板。
    * 反作弊优化，3月22日优化，24日上线模板。
  * 头卡入口逻辑升级，以及总榜情况页弹层开发，预计下周上线。




### 民生（学林、李晓）



#### 天气NA化 (项目状态：开发中) @李晓 @学林
 - 背景：当前WISE端天气卡片，针对天气主需求部分仍存在可优化的空间：1、 首屏天气信息过多，用户无法一目了然的获取到各维度天气情况；2、 根据不同天气情况的背景色，特别是：阴天&多云的灰色，色调过重，颜色单一，用户感知体验较差；3、 24小时预报缺失风力、降水量、空气质量信息，未来天气预报缺失空气质量预报等信息；4、 对标APP竞品，交互上仍可进行优化。
 - 需求量
     - 1个阿拉丁卡片
     - 开发沟通风险
    无
     - 开发模板
    - aladdin: sg_weather_na
 - 本周进展
     - 03.20 跟rd联调
     - 03.21 跟UE联调
 - 完成情况
    - 03.20跟rd联调
 - 排期计划
    - 3.14-3.17 开发
    - 预计3.20联调
 - 效果图

<img src="http://wiki.baidu.com/download/attachments/286892247/image2017-3-16%2012%3A39%3A27.png?api=v2" width="300px">
 
#### 雾霾地图、空气质量优化（项目状态：小流量）@李晓 @学林
- 背景：用户在搜索『XX空气质量』及其相关query的需求，除了有了解当前所搜地域的空气质量的需求之外，也有了解距离自己最近的监测点的空气质量及直观了解全市及全国空气质量分布的需求，为了更好的精细化满足用户在搜索『XX空气质量』场景下的需求，现新增雾霾地图的功能，从而帮助用户更好地把握出行等安排。
- 收益：影响PV 6W
- 需求量：1个阿拉丁卡片，6个情景页卡片
     - 开发风险：
  使用未沉淀的交互方式 | 1次 | 百度地图自定义覆盖物打点
  同时存在同步、异步更新方式 | 1次 | 拖拽放大缩小地图后异步刷新数据
  使用复杂动画交互 | 1次 | 地图相关交互
    - 沟通风险：
  后端使用其他部门的在线接口 | 1 次 | 使用地图接口
- 开发模板 新增aladdin：sg_wet_air；新增card： wet_air_rank 、wet_air_pollute 、pm25_monitor、pm25_map
- 完成情况
     - 2.10号调整方案，直接按照长线方案走，雾霾地图与空气质量一同开发，[确认具体细节](http://newicafe.baidu.com/issue/minsheng-1044/show?from=page)
     - 2.20 - 2.21 空气质量开发, @学林
     - 2.20 - 2.24 雾霾地图开发，@李晓
     - 2.24 - 2.28 空气质量联调，@学林 
     - 3.06 - 3.08 雾霾地图联调， @李晓
     - 3.14 - 3.16 人工评估、走单
     - 03.20 小流量上线 [北京空气质量](https://m.baidu.com/s?word=%E5%8C%97%E4%BA%AC%E7%A9%BA%E6%B0%94%E8%B4%A8%E9%87%8F&sid=115051)
- 本周进展
     - 03.20 小流量上线 [北京空气质量](https://m.baidu.com/s?word=%E5%8C%97%E4%BA%AC%E7%A9%BA%E6%B0%94%E8%B4%A8%E9%87%8F&sid=115051)
     - 03.22 雾霾地图打开手指缩放功能迭代上线
- 计划
     - 2.20 - 2.21 空气质量开发, @学林
     - 2.20 - 2.24 雾霾地图开发，@李晓
     - 2.24 - 2.28 空气质量联调，@学林 
     - 3.01 - 3.08 雾霾地图联调， @李晓
     - 3.09 - 3.13 测试
     - 3.14 - 3.16 人工评估、走单、小流量上线
- 效果图

<img src="http://wiki.baidu.com/download/attachments/286892247/%E7%A9%BA%E6%B0%94%E8%B4%A8%E9%87%8F%26%E9%9B%BE%E9%9C%BE%E5%9C%B0%E5%9B%BE.png?api=v2" width="600px"> 
 
#### 全国天气 （项目状态：小流量）@学林
- 背景：增加天气预报，地区，省份天气检索，可筛选全国处于XXX天气情况下的城市，满足用户更多的需求
- 开发模板 aladdin:wet_all_weather card：wet_pro_weather
- 影响面 大约7.5W
- 完成情况
     - 2.9结果页开发完成
     - 2.16根据调整后ue图进行代码的修改
     - 2.21 开发完成
     - 3.1 联调完成
     - 3.3测试完成
     - 3.20 小流量上线 [华北天气](https://m.baidu.com/s?word=%E5%8D%8E%E5%8D%97%E5%A4%A9%E6%B0%94&sid=101473)
- 本周进展
     - 3.20 小流量上线 [华北天气](https://m.baidu.com/s?word=%E5%8D%8E%E5%8D%97%E5%A4%A9%E6%B0%94&sid=101473)
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
     - 3.6 ubs评估 
     - 3.7 三级单
     - 3.8 小流量上线
- 效果图

<img src="http://wiki.baidu.com/download/attachments/246189488/image2017-1-19%2016%3A38%3A16.png?api=v2" width="300px">
调整后

<img src="http://wiki.baidu.com/download/attachments/286892247/image2017-2-16%2010%3A31%3A50.png?api=v2" width="300px">

<img src="http://wiki.baidu.com/download/attachments/286892247/image2017-2-16%2010%3A33%3A23.png?api=v2" width="300px">
 
#### 泛菜谱 (项目状态：开发中) @李晓 @郝妍
 - 背景：目前菜谱阿拉丁只覆盖了精准、食材类query，仍有大部分泛需求垂类（pv约为50w）无卡片覆盖
 - 需求量：
   2个阿拉丁卡片，2个情景页卡片
 - 开发沟通风险：
    无
 - 开发模板：
     - aladdin: pan-menu-list、sd-img（复用）
     - card: pan-menu-ss、pan-menu-sd、filter（复用）
 - 本周进展
     - 结果页联调完毕
     - 情景页联调中
 - 完成情况
     - 3.13 需求评审
     - 3.15 完成schema确认
     - 3.15-3.16 完成模板pan-menu-list、pan-menu-ss
     - 3.17，3.20 完成模板pan-menu-sd（前端开发结束）
     - 3.23-3.24 联调
 - 排期计划
     - 3.15-3.21 FE开发
     - 3.22-3.24 FE&RD联调，RD召回策略梳理
     - 3.27 UE走查、PM自评
     - 3.28 QA测试&人工评估
     - 3.30 小流量上线
 - 效果图

<img src="http://wiki.baidu.com/download/attachments/286892247/QQ20170323-151306.png?api=v2" width="300px">

<img src="http://wiki.baidu.com/download/attachments/286892247/QQ20170323-151237.png?api=v2" width="300px">

<img src="http://wiki.baidu.com/download/attachments/286892247/image2017-3-16%2016%3A21%3A57.png?api=v2" width="300px">

