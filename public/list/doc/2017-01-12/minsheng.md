# 民生方向周报

> 从2017-01-09到2017-01-13

## 民生子垂类

    * 天气：pm周里成+杨宇 rd赵元浩 fe李晓
    * 菜谱：pm周里成+杨宇 rd赵元浩 fe李晓
    * 快递：pm徐海漠 rd楚振江 fe肖学林
    * 日历：pm林馨怡 rd郑杰 fe肖学林
    * 通用推荐：pm徐海漠 rd殷瑞娜 fe李晓、学林

## 进度




#### 天气场景化 - 对比本地天气优化(项目状态：小流量)@李晓
- 背景：用户在搜索『XX天气』及其相关query的需求，根据不同的场景，又有不同侧重的需求，为了更好的精细化满足用户在不同搜索场景下的需求，现提出天气场景化系列优化方案-对比本地天气优化、历史天气优化等。
- 收益：影响PV 暂无
- 开发模板：card: 新增weather_contrast
- 完成情况
    - 12.21-12.27  开发
    - 12.30-1.04  联调
    - 1.6-1.9 测试
    - 1.13 小流量上线
- 本周进展
    - 1.6-1.9 测试
    - 1.13 小流量上线 [对比本地天气](http://cp01-ps-fe-5.epc.baidu.com:8003/sf?pd=life_compare_weather&openapi=1&dspName=iphone&from_sf=1&resource_id=4280&word=%E5%AF%B9%E6%AF%94%E6%9C%AC%E5%9C%B0%E5%A4%A9%E6%B0%94_%E4%B8%8A%E6%B5%B7_%E5%8C%97%E4%BA%AC&title=%E5%AF%B9%E6%AF%94%E6%9C%AC%E5%9C%B0%E5%A4%A9%E6%B0%94&lid=14917458620575447671&ms=1&frsrcid=47013&frorder=1)
- 计划：
    - 12.21-12.27  开发
    - 12.30-1.04  联调
    - 1.6-1.9 测试
    - 1.12 小流量上线
- 效果
    
<img src="http://wiki.baidu.com/download/attachments/246189488/ss.png?api=v2" width="300"/>
 
#### 空气质量优化(项目状态：开发中) @学林
- 背景 ：针对当前线上空气质量卡片提出产品优化方案，满足用户对今日&未来空气质量（AQI）查询、出行建议参考、全国空气排名等需求。
- 开发模板：aladdin:sg_wet_air card:wet_air_rank wet_air_next
- 完成情况
  - 1.3 结果页开发完成
  - 1.5 情景页开发完成
  - 1.10 调整结果页开发完成
- 本周进展
  - 1.10 调整结果页开发完成
- 计划
  - 待产出剩余ue稿
  
- 效果 已产出ue图,调整ue图

<img src="http://wiki.baidu.com/download/attachments/246189488/image2016-12-29%2010%3A55%3A33.png?api=v2" width="300px">

<img src="http://wiki.baidu.com/download/attachments/246189488/image2016-12-29%2010%3A41%3A53.png?api=v2" width="300px">

<img src="http://wiki.baidu.com/download/attachments/246189488/image2017-1-12%2010%3A55%3A32.png?api=v2" width="300px">
  
#### wise 突出空气质量(项目状态：全流量)@李晓
- 背景：近期大家比较关注空气质量，wise端样式调整突出显示实时空气质量
- 收益：影响PV 1500W
- 开发模板：aladdin: 迭代sg_weather
- 完成情况
    - 1.4 开发
    - 1.5 测试
    - 1.6 全量上线
- 本周进展
    - 1.4 开发
    - 1.5 测试
    - 1.6 全量上线 [北京天气](http://cp01-ps-fe-5.epc.baidu.com:8003/s?word=%E5%8C%97%E4%BA%AC%E5%A4%A9%E6%B0%94&ip=220.181.38.110&sid=123456)
- 计划：
    - 1.4 开发
    - 1.5 测试
    - 1.6 全量上线
- 效果 已产出ue图

<img src="http://wiki.baidu.com/download/attachments/246189488/1.PNG?api=v2" width="300px">

<img src="http://wiki.baidu.com/download/attachments/246189488/2.PNG?api=v2" width="300px">


#### Feed搜索联动(项目状态：测试中)@李晓
- 背景：目前Feed上至少存在4种以上的方式在为大搜导流，后续也希望能融合导流入口为feed回流，以满足用户继续在feed场景浏览信息，最终打造信息流闭环,这次希望先借助demo能快速在回流机制上有一个尝试，demo效果好后续会考虑快速立项推实验
- 收益：影响PV 暂无
- 开发模板：aladdin: 新增rec_feed
- 完成情况
    - 12.09 开发
    - 12.12 联调，未快速出demo,之前fe配合rdtrick实现了图片配置、标题配置、卡片召回配置，本周内跟rd配合改为后端配置
    - 1.5 测试 [鹿晗](http://cp01-sys-rath4-c32-qa073.cp01.baidu.com:8003/s?word=%E9%B9%BF%E6%99%97&sa=ihl&topic=%E9%B9%BF%E6%99%97&fdi=15700464122726438692&fdr=1)
- 本周进展
    - 1.11 小流量上线 [林心如](https://m.baidu.com/s?word=%E6%9E%97%E5%BF%83%E5%A6%82&sa=ihl&fdr=1&topic=%E6%9E%97%E5%BF%83%E5%A6%82&fdi=2993083893858323299&sid=114235)
- 计划：
    - 12.09 出demo
    - 12.14 立项
    - 1.5 测试
- 效果
<img src="http://wiki.baidu.com/download/attachments/246189488/feed.png?api=v2" width="300px">
 

#### 空气质量实验对照（项目状态：开发中）@学林
 
- 背景
   - 进行多组实验对比
- 开发模板 aladdin: sam_sg_weather2
- 本周进展
   - 1.11 介入开发
- 计划
   - 1.11 开发
   - 1.12 测试
   - 1.13 上线
- 实验对照效果图
 
<img src="http://wiki.baidu.com/download/attachments/246189488/image2017-1-12%2011%3A13%3A37.png?api=v2" width="300px">
  
 
#### 功效菜谱优化(项目状态：已暂停) @学林
- 背景
    - 优化用户检索效果，满足更多的需求
- 开发模板 card：cough_food
- 完成情况
    - 12.6-12.8 开发完成
    - 12.8-12.9 前后端联调完成
    - 12.14-12.15 qa测试完成
    - 12.22 bug修复完成 
- 本周进展
    - 1.10 三级单审核没过，结果页进行优化迭代
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
 
<img src="http://wiki.baidu.com/download/attachments/246189488/image2017-1-12%2011%3A0%3A51.png?api=v2" width="300"/>