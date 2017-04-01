# 李晓



## 民生子垂类

    * 天气：pm周里成+杨宇 rd赵元浩 fe李晓
    * 菜谱：pm周里成+杨宇 rd赵元浩 fe李晓
    * 快递：pm徐海漠 rd楚振江 fe肖学林
    * 日历：pm林馨怡 rd郑杰 fe肖学林
    * 通用推荐：pm徐海漠 rd殷瑞娜 fe李晓、学林

## 视频进度



### 豆瓣影评卡细节优化方案
- 背景：在影评卡的空白区域和标签位置，目前没有相应的跳转逻辑，点击相关区域无响应，用户体验受影响，增加逻辑点击卡片的标签以及空白区域，跳转到跟title一样的落地页
- 开发模板：comment_on_film
- 本周进展
  - 02.04 上线
- 计划  
  - 节后上线
- 效果图

<img src="http://wiki.baidu.com/download/attachments/246189488/BaiduHi_2017-2-8_18-41-59.png?api=v2" width="300"/>
 
#### 视频sf1.0迁移
- 背景：sf1.0机制即将下线，视频类目如下两个需要迁移，入口模板名： sam_wz_micro_video3，资源号：4185，query：dj妙音坊，activity：video_living_broadcast；入口模板名：wise_video_live ，资源号：4194，query：免费视频在线观看，activity： wz_micro_video
- 开发模板：新增card
- 本周进展
  - 02.07 介入开发
- 计划  
  - 02.17 完成开发
 
 
#### 阿拉丁秒懂视频
- 背景：视频化的百科卡片
- 开发模板：新增aladdin
- 本周进展
  - 02.08号已评审
- 计划  
  - 02.20号介入开发


## 民生进度

#### 日历卡片国外时区日期星期错乱bug （项目状态：测试中）@李晓
- 背景：万年历 日历 在国外显示异常bug，比如时区切换到夏威夷，万年历query下2月4号为星期天，日历query下对应的今天会一直跳
- 开发模板 aladdin:迭代wise_calendar、calendars
- 本周进展
 - 02.06开发
 - 02.08测试
- 计划 
 - 02.06 开发
 - 02.08 测试
 - 02.09 上线
- 效果图

<img src="http://wiki.baidu.com/download/attachments/246189488/2.PNG?api=v2" width="300px">







#### 雾霾地图（项目状态：开发中）@李晓
- 背景：用户在搜索『XX空气质量』及其相关query的需求，除了有了解当前所搜地域的空气质量的需求之外，也有了解距离自己最近的监测点的空气质量及直观了解全市及全国空气质量分布的需求，为了更好的精细化满足用户在搜索『XX空气质量』场景下的需求，现新增雾霾地图的功能，从而帮助用户更好地把握出行等安排。
- 开发模板 新增aladdin、新增card
- 本周进展
 - 暂无，暂时hold,pm想直接按长线方案排期
- 计划
 - 1.20 UE定稿 
 - 1.22——2.6 FE开发 
 - 2.14——2.16 联调
 - 2.17——2.20 QA测试 
 - 2.23 小流量上线 
- 效果图

<img src="http://wiki.baidu.com/download/attachments/246189488/demo-20170119114553-dosw4m.png?api=v2" width="300px"> 
 
#### 全国天气 （项目状态：开发中）@学林
- 背景：增加天气预报，地区，省份天气检索，可筛选全国处于XXX天气情况下的城市，满足用户更多的需求
- 开发模板 aladdin:wet_all_weather card：wet_pro_weather
- 本周进展
 - 暂无
- 完成情况
 - 2.9结果页开发完成
- 计划 
 - 1.17-1.20，2.10-2.13 开发
 - 2.14-2.16 联调
 - 2.17-2.20 测试
 - 2.21 人工评估
 - 2.22 三级单
 - 2.23 上线
- 效果图

<img src="http://wiki.baidu.com/download/attachments/246189488/image2017-1-19%2016%3A38%3A16.png?api=v2" width="300px">   