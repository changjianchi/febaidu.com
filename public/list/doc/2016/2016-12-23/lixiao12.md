# 李晓

> 从2016-12-19到2016-12-23

## 民生子垂类

    * 天气：pm周里成+杨宇 rd赵元浩 fe李晓
    * 菜谱：pm周里成+杨宇 rd赵元浩 fe李晓
    * 快递：pm徐海漠 rd楚振江 fe肖学林
    * 日历：pm林馨怡 rd郑杰 fe肖学林
    * 通用推荐：pm徐海漠 rd殷瑞娜 fe李晓、学林

## 进度



    


#### 手百下sigma头图显示优化(项目状态：开发中)@李晓
- 背景：目前sigma有头图的卡片在手百上展示时图片显示不完整，和wise相比少24px
- 收益：影响PV 暂无
- 开发模板：wise: sigma.js
- 完成情况
    - 12.20 测试
    - 12.22 上线
- 本周进展
    - 12.20 测试
    - 12.22 上线 [国航](https://m.baidu.com/s?word=%E5%9B%BD%E8%88%AA&tn=zbios)
- 计划：
    - 12.15~12.16 开发
    - 12.20 测试
    - 12.21 上线
 
#### 天气场景化 - 对比本地天气优化(项目状态：开发中)@李晓
- 背景：用户在搜索『XX天气』及其相关query的需求，根据不同的场景，又有不同侧重的需求，为了更好的精细化满足用户在不同搜索场景下的需求，现提出天气场景化系列优化方案-对比本地天气优化、历史天气优化等。
- 收益：影响PV 暂无
- 开发模板：card: 新增weather_contrast
- 完成情况
    - 暂无
- 本周进展
    - 12.21 介入开发
- 计划：
    - 12.21-12.27  开发
    - 12.28-12.30  联调
    - 1.4-1.5 测试
    - 1.10 小流量上线
- 效果
    
<img src="http://wiki.baidu.com/download/attachments/246189488/ss.png?api=v2" width="300"/>
 
#### 功效菜谱优化 @学林
- 背景
    - 优化用户检索效果，满足更多的需求
- 开发模板 card：cough_food
- 完成情况
    - 12.6 - 12.8 开发
    - 12.8 - 12.9 前后端联调
- 本周进展 
    - 12.12-13 UE联调&PM自评完成
    - 12.14-15 qa 测试中
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
- 本周进展
    - 12.20 平台pull、ci功能已搞定@小琴
    - 12.21 申请代码豁免到Q1 @李林
    - 12.21 wise、pc、card，863上线任务配置 @李晓
    - 12.23 平台代码路径切换svn为icode @小琴
- 计划
    - 12.01 pad为例子，代码copy,agile,863配置跑通 @李晓
    - 12.14 开始ci流程开发，ci的同时将代码pull到开发平台@小琴
    - 申请代码豁免到Q1，后续与建站、资讯共同申请 @李林 
    - 12.23 平台代码路径切换svn为icode @小琴
    - 将fecs代码规划和开发平台集成  @张屾
- wiki
    - [迁移后icode使用及各模块地址](http://sfe.baidu.com/aladdin/wise/icode.md)
 
#### 极端天气优化方案(项目状态：测试中)@李晓

- 背景：用户在搜索『XX天气』及其相关query的需求，根据不同的场景，又有不同侧重的需求，为了更好的精细化满足用户在不同搜索场景下的需求，现提出天气场景化系列优化方案-对比本地天气优化、历史天气优化、极端天气优化、节日节气优化等。
- 收益：影响PV 50w
- 开发模板：aladdin: 新增weather_news，card：新增weather_news；
- 完成情况
    - 12.08 测试
    - 12.16 模板上线，[北京天气](http://cp01-rec-platform-test01.epc.baidu.com:8003/s?word=%E5%8C%97%E4%BA%AC%E5%A4%A9%E6%B0%94&sid=101466)
- 本周进展
    - 暂无
- 计划：
    - 11.28-12.01联调
    - 12.2、12.5测试
    - 12.6小流量上线
- 效果

<img src="http://ala-fe.baidu.com/doc/2016-11-04/img/lixiao12/07.png" width="300px">

<img src="http://ala-fe.baidu.com/doc/2016-11-04/img/lixiao12/08.png" width="300px">


#### Feed搜索联动(项目状态：开发中)@李晓
- 背景：目前Feed上至少存在4种以上的方式在为大搜导流，后续也希望能融合导流入口为feed回流，以满足用户继续在feed场景浏览信息，最终打造信息流闭环,这次希望先借助demo能快速在回流机制上有一个尝试，demo效果好后续会考虑快速立项推实验
- 收益：影响PV 暂无
- 开发模板：aladdin: 新增rec_feed
- 完成情况
    - 12.09 开发
    - 12.12 联调，未快速出demo,之前fe配合rdtrick实现了图片配置、标题配置、卡片召回配置，本周内跟rd配合改为后端配置
- 本周进展
    - 暂无
- 计划：
    - 12.09 出demo
    - 12.14 立项
    - 12.21 模板上线  
- 效果

<img src="http://wiki.baidu.com/download/attachments/246189488/feed.png?api=v2" width="300px">
 
#### 快递优化 @学林
- 背景 ：优化检索，提高用户体验
- 开发模板：aladdin:express_delivery express_main_old
- 本周进展
  12.22介入开发
- 计划
  12.22 开发
  12.23 测试 上线
- 效果

  <img src="http://wiki.baidu.com/download/attachments/246189488/image2016-12-22%2012%3A24%3A42.png?api=v2" width="300px"> 


#### 预处理文件梳理 @李晓
- 背景：预处理文件目前已不维护，没有相关的语法检测，万一语法报错容易引发线上bug,需梳理迁移下线
- 完成情况：
    - 对应模板已经影响面已梳理完