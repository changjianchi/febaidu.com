# 吴丽黎

> 2017/03/13-2017/03/17

### 娱乐（丽黎）
 
#### 高级感项目
- 背景：
	* 百度wise搜索结果页的样式不够美观，阅读体验较差，现在尝试类App的设计风格，通过增大间距、放大图片、调整链接颜色等方式来增强浏览体验。
- 目标：
	* 第一期（实验阶段）：完成整体页面风格的改造以及部分卡片结构的调整（图片3n->4n，url位置改动等）+ 右图左文，通过实验来分析本次样式改
造是否能提升用户浏览体验，目标是H1末将高级感搜索样式转全
	* 第二期（阿拉丁卡片改造）：整体页面风格的改造全量之后，针对各个垂类的阿拉丁卡片，逐渐进行样式重新设计和开发，使之也能符合高级感的要求
- 完成情况
    * 开发：3月15日-3月17日
- 本周工作
 	* 推荐模板：sigma_celebrity_rela 开发完毕
	* 图片模板：we_image 开发中
	* 百科模板：bk_polysemy 开发完毕 
- 计划	
	* 4月初上线小流量
- 预览
	[刘德华sigma_celebrity_rela](http://cp01-ps-fe-4.epc.baidu.com:8003/s?iscookie=1&word=%E5%88%98%E5%BE%B7%E5%8D%8E&sid=114449)
	[snh48 bk_polysemy](http://cp01-ps-fe-4.epc.baidu.com:8003/s?iscookie=1&word=snh48&sid=114449)
- 效果

	![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/20ecb6e687a095b4e3ceb6edcc7b2622/image.png)
	
	![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/82ac3c7ca3f4a0cde5ca72081ab260ca/image.png)



#### 网络印象(三次迭代) @丽黎 （小流量 1% / 20w）
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
 	* 零流量回归测试、代码优化上线
- 计划	
	* 3月初上线小流量
- [实验预览](https://m.baidu.com/s?word=%E9%B9%BF%E6%99%97&sid=101463)
- 效果
<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/8859c7bb42244ebaf46df80178a3793a/image.png" width="300"/>
<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/f2824c7ea9f848aaf5b839cfbbd5581a/image.png" width="300"/> 

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
	* 3.15 模板上线
- 计划
    * 2.22 - 2.28 开发
	* 3.1 联调 [刘诗诗](http://yq01-psdy-diaoyan1044.yq01.baidu.com:8003/sf?from_sf=1&word=%E5%88%98%E8%AF%97%E8%AF%97&ms=1&title=%E9%B9%BF%E6%99%97&resource_id=4498&top=%7B%22sfhs%22%3A2%7D&dspName=iphone&openapi=1&tn=tangram&pd=starkg&frsrcid=46337&frsrcid=46337&frorder=2&frorder=2&alr=1&new_aeks=1&ext=%7B%22sf_tab_name%22%3A%22%E6%A6%82%E8%A7%88%22%7D)
    * 3.2 测试
	* 3.6 小流量上线
- 效果图

<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/3455792fc9079370f3f407aa53f6ae2d/image.png" width="300">
<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/7838bbcf4915a907253c2a4f79005e23/image.png" width="300">


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
 
<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/f6e02322cbdf02d2ae17463ccf38750a/image.png" width="300"/>
 
<img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/d0a01165c2b209c62f55058c2c2296a2/image.png" width="300"/>
	
- 计划
	* 2.25 上线
 
#### 其它
 
- 娱乐音乐-音频资源入库，复用模板album_v2 , 3月10日开发模板，数据周五准备好，3月20日联调。
- 娱乐音乐-音乐泛需求扩增酷狗资源，修改模板singer_v2，新增酷狗图标，升级横滑组件，3月15日上线。


