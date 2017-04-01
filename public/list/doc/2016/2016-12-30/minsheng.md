# 民生方向周报

> 从2016-12-26到2016-12-30

## 民生子垂类

    * 天气：pm周里成+杨宇 rd赵元浩 fe李晓
    * 菜谱：pm周里成+杨宇 rd赵元浩 fe李晓
    * 快递：pm徐海漠 rd楚振江 fe肖学林
    * 日历：pm林馨怡 rd郑杰 fe肖学林
    * 通用推荐：pm徐海漠 rd殷瑞娜 fe李晓、学林

## 进度




#### 天气场景化 - 对比本地天气优化(项目状态：开发中)@李晓
- 背景：用户在搜索『XX天气』及其相关query的需求，根据不同的场景，又有不同侧重的需求，为了更好的精细化满足用户在不同搜索场景下的需求，现提出天气场景化系列优化方案-对比本地天气优化、历史天气优化等。
- 收益：影响PV 暂无
- 开发模板：card: 新增weather_contrast
- 完成情况
    - 12.21-12.27  开发
- 本周进展
    - 12.30 联调
- 计划：
    - 12.21-12.27  开发
    - 12.30-11.04  联调
    - 1.6-1.9 测试
    - 1.12 小流量上线
- 效果
    
<img src="http://wiki.baidu.com/download/attachments/246189488/ss.png?api=v2" width="300"/>
 
#### 空气质量优化(项目状态：开发中) @学林
- 背景 ：针对当前线上空气质量卡片提出产品优化方案，满足用户对今日&未来空气质量（AQI）查询、出行建议参考、全国空气排名等需求。
- 开发模板：aladdin:sg_wet_air card:wet_air_rank wet_air_next
- 本周进展
  12.29 结果页介入开发
- 计划
  待完整ue搞产出
  
- 效果 已产出ue图

<img src="http://wiki.baidu.com/download/attachments/246189488/image2016-12-29%2010%3A55%3A33.png?api=v2" width="300px">

<img src="http://wiki.baidu.com/download/attachments/246189488/image2016-12-29%2010%3A41%3A53.png?api=v2" width="300px">
 
 
#### 国外天气口语化(项目状态：全流量)@李晓

- 背景：国外天气口语化，针对XX明天天气，XX后天天气，XX周几天气，XX几月几号天气等进行扩大召回，同时修复切换城市组件sug框国内城市提示两次bug
- 收益：影响PV 2w
- 开发模板：aladdin: 迭代sg_weather
- 完成情况
    - 12.26 - 12.27联调
    - 12.28 模板上线
- 本周进展
    - 12.26 - 12.27联调
    - 12.28 模板上线
    - 12.29 全量上线，[纽约明天天气](https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E7%BA%BD%E7%BA%A6%E6%98%8E%E5%A4%A9%E5%A4%A9%E6%B0%94&ts=0916790&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=6287702126682454067&rsv_t=a894KA5NK9YkQ7SafmTv1baR3%252BRFKrmsA4zE1ySQFxhylIzFwjgAmbT7Ng&sa=ihr_1&tn=zbios&ms=1&rsv_pq=6287702126682454067&rsv_sug4=3235&ss=001)
- 计划：
    - 12.26 - 12.27联调
    - 12.28 模板上线
    - 12.29 全量上线



#### Feed搜索联动(项目状态：开发中)@李晓
- 背景：目前Feed上至少存在4种以上的方式在为大搜导流，后续也希望能融合导流入口为feed回流，以满足用户继续在feed场景浏览信息，最终打造信息流闭环,这次希望先借助demo能快速在回流机制上有一个尝试，demo效果好后续会考虑快速立项推实验
- 收益：影响PV 暂无
- 开发模板：aladdin: 新增rec_feed
- 完成情况
    - 12.09 开发
    - 12.12 联调，未快速出demo,之前fe配合rdtrick实现了图片配置、标题配置、卡片召回配置，本周内跟rd配合改为后端配置
- 本周进展
    - 千岛湖策略下，sigma卡显示有问题，组模板展开收起工具条有问题，定位修复
- 计划：
    - 12.09 出demo
    - 12.14 立项
- 效果

<img src="http://wiki.baidu.com/download/attachments/246189488/feed.png?api=v2" width="300px">
 

#### 极端天气优化方案(项目状态：已暂停)@李晓

- 背景：用户在搜索『XX天气』及其相关query的需求，根据不同的场景，又有不同侧重的需求，为了更好的精细化满足用户在不同搜索场景下的需求，现提出天气场景化系列优化方案-对比本地天气优化、历史天气优化、极端天气优化、节日节气优化等。
- 收益：影响PV 50w
- 开发模板：aladdin: 新增weather_news，card：新增weather_news；
- 完成情况
    - 12.08 测试
    - 12.16 模板上线，[北京天气](http://cp01-rec-platform-test01.epc.baidu.com:8003/s?word=%E5%8C%97%E4%BA%AC%E5%A4%A9%E6%B0%94&sid=101466)
- 本周进展
    - 12.27 模板上线，迭代模板增加时啊异步接口请求错误时点击重新请求功能 
    - 12.29 会议讨论两个问题需改进1.时啊异步接口失败率较高 2.进入情景页后切换tab跳出返回未正确记录tab,需改为tab融合方式，项目暂时hold，pm重新梳理后继续
- 计划：
    - 11.28-12.01联调
    - 12.2、12.5测试
    - 12.6小流量上线
- 效果

<img src="http://ala-fe.baidu.com/doc/2016-11-04/img/lixiao12/07.png" width="300px">

<img src="http://ala-fe.baidu.com/doc/2016-11-04/img/lixiao12/08.png" width="300px">

#### 功效菜谱优化(项目状态：已提测) @学林
- 背景
    - 优化用户检索效果，满足更多的需求
- 开发模板 card：cough_food
- 完成情况
    - 12.6-12.8 开发完成
    - 12.8-12.9 前后端联调完成
    - 12.14-12.15 qa测试完成
    - 12.22 bug修复完成
    
- 本周进展 
    - 12.12-13 UE联调&PM自评完成
    - 12.14-15 qa 测试中
    - 12.19 追bug(手白8.1)
    - 12.22-今 数据策略优化中
    
- 计划
    - 12.6 - 12.8 开发
    - 12.8 - 12.9 前后端联调
    - 12.12、13 UE联调&PM自评
    - 12.14、15 QA测试&UBS人工评估
    - 12.16 三级单
    - 12.19 小流量上线
- 效果
    
<img src="http://wiki.baidu.com/download/attachments/246189488/image2016-12-8%2011%3A36%3A47.png?api=v2" width="300"/>

<img src="http://wiki.baidu.com/download/attachments/246189488/image2016-12-8%2011%3A37%3A26.png?api=v2" width="300"/>
  
 

  
#### icode代码迁移 
- 背景：svn代码迁移至icode
- 完成情况：
    - 12.01 pad代码copy至icode，agile构建编译发布，863发单配置 @李晓
    - 12.14 pc、wise、card、static/ui代码copy至icode,agile构建编译发布 @李晓
    - 12.14 同步svn代码到git库，考虑文件多的时候加快更新 @李林
    - 12.20 平台pull、ci功能已搞定@小琴
    - 12.21 申请代码豁免到Q1 @李林 
    - 12.21 wise、pc、card，863上线任务配置 @李晓
    - 12.26 平台代码路径切换svn为icode @小琴
- 本周进展
    - 12.26 平台代码路径切换svn为icode @小琴
- 计划
    - 12.01 pad为例子，代码copy,agile,863配置跑通 @李晓
    - 12.14 开始ci流程开发，ci的同时将代码pull到开发平台@小琴
    - 申请代码豁免到Q1，后续与建站、资讯共同申请 @李林 
    - 12.23 平台代码路径切换svn为icode @小琴
    - 将fecs代码规划和开发平台集成  @张屾
- wiki
    - [迁移后icode使用及各模块地址](http://sfe.baidu.com/aladdin/wise/icode.md)

