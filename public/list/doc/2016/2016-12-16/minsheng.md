# 民生方向周报

> 从2016-12-12到2016-12-16

## 民生子垂类

    * 天气：pm周里成+杨宇 rd赵元浩 fe李晓
    * 菜谱：pm周里成+杨宇 rd赵元浩 fe李晓
    * 快递：pm徐海漠 rd楚振江 fe肖学林
    * 日历：pm林馨怡 rd郑杰 fe肖学林
    * 通用推荐：pm徐海漠 rd殷瑞娜 fe李晓、学林

## 进度



    

#### 极端天气优化方案(项目状态：测试中)@李晓
- 背景：用户在搜索『XX天气』及其相关query的需求，根据不同的场景，又有不同侧重的需求，为了更好的精细化满足用户在不同搜索场景下的需求，现提出天气场景化系列优化方案-对比本地天气优化、历史天气优化、极端天气优化、节日节气优化等。
- 收益：影响PV 50w
- 开发模板：aladdin: 新增weather_news，card：新增weather_news；
- 完成情况
    - 12.08 测试
    - 12.16 模板上线，[北京天气](http://cp01-rec-platform-test01.epc.baidu.com:8003/s?word=%E5%8C%97%E4%BA%AC%E5%A4%A9%E6%B0%94&sid=101466)
- 本周进展
    - 12.14 人工评估
    - 12.15 走单
    - 12.16 模板上线，[北京天气](http://cp01-rec-platform-test01.epc.baidu.com:8003/s?word=%E5%8C%97%E4%BA%AC%E5%A4%A9%E6%B0%94&sid=101466)
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
    - 12.10 联调
- 本周进展
    - 12.12 联调，未快速出demo,之前fe配合rdtrick实现了图片配置、标题配置、卡片召回配置，本周内跟rd配合改为后端配置
- 计划：
    - 12.09 出demo
    - 12.14 立项
    - 12.21 模板上线  
- 效果

<img src="http://wiki.baidu.com/download/attachments/246189488/feed.png?api=v2" width="300px">


#### 手百下sigma头图显示优化(项目状态：开发中)@李晓
- 背景：目前sigma有头图的卡片在手百上展示时图片显示不完整，和wise相比少24px
- 收益：影响PV 暂无
- 开发模板：wise: sigma.js
- 完成情况
    - 暂无
- 本周进展
    - 12.15~12.16 开发
- 计划：
    - 12.15~12.16 开发
    - 12.20 测试
    - 12.21 上线

#### 食材菜谱优化 (项目状态：小流量)@学林
- 背景：食材做法大全样式一：聚合菜谱阿拉丁卡片优化，添加筛选框&左滑查看更多菜谱做法
食材做法大全样式二：默认展现八个图文菜谱，可展开更多，点击后跳转至菜谱做法大全情景页，直接满足菜谱做法需求
- 收益：实验组，对照组各取8%的流量，全量影响PV约为200W/天。
- 开发模板：aladdin：rec_recipe rec_general
- 完成情况
    - 11.16 小流量上线
    - 12.12 全量上线 
- 本周进展
    - 12.12 全量上线 [芦笋的做法大全](https://m.baidu.com/s?word=%E8%8A%A6%E7%AC%8B%E7%9A%84%E5%81%9A%E6%B3%95%E5%A4%A7%E5%85%A8)
 
 
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
    - 12.01 pad代码copy至icode @李晓
    - 12.01 agile构建编译发布 @李晓
    - 12.01 863发单配置 @李晓
    - 12.14 pc、wise、card、static/ui代码copy至icode @李晓
    - 12.14 同步svn代码到git库，考虑文件多的时候加快更新 @李林
- 本周进展
    - 12.14 pc、wise、card、static/ui代码copy至icode @李晓
    - 12.14 同步svn代码到git库，考虑文件多的时候加快更新 @李林
- 计划
    - 12.14 开始ci流程开发，ci的同时将代码pull到开发平台@小琴
    - 申请代码豁免到Q1，后续与建站、资讯共同申请 @李林 
    - 将fecs代码规划和开发平台集成  @张屾
- wiki
    - [参考wiki](http://sfe.baidu.com/aladdin/wise/icode.md)