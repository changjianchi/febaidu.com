# 民生方向周报

> 从2016-11-28到2016-12-02

## 民生子垂类

    * 天气：pm周里成+杨宇 rd赵元浩 fe李晓
    * 菜谱：pm周里成+杨宇 rd赵元浩 fe李晓
    * 快递：pm徐海漠 rd楚振江 fe肖学林
    * 日历：pm林馨怡 rd郑杰 fe肖学林
    * 通用推荐：pm徐海漠 rd殷瑞娜 fe李晓、学林

## 进度



#### 极端天气优化方案(项目状态：开发中)@李晓
- 背景：用户在搜索『XX天气』及其相关query的需求，根据不同的场景，又有不同侧重的需求，为了更好的精细化满足用户在不同搜索场景下的需求，现提出天气场景化系列优化方案-对比本地天气优化、历史天气优化、极端天气优化、节日节气优化等。
- 收益：影响PV 50w
- 开发模板：aladdin: 新增weather_news，card：新增weather_news；
- 本周进展：
    - 联调中
- 计划：
    - 11.24 给出真实数据
    - 11.28-12.01联调
    - 12.2、12.5测试
    - 12.6小流量上线
- 效果

<img src="http://ala-fe.baidu.com/doc/2016-11-04/img/lixiao12/07.png" width="300px">

<img src="http://ala-fe.baidu.com/doc/2016-11-04/img/lixiao12/08.png" width="300px">
 
 
#### KG-菜谱-kg优化，c类页面mip改造模板升级(项目状态：全流量)@李晓
- 背景：菜谱c类页面介入mip后，短线方案需对模板升级增加mip调起
- 收益：影响PV 800w
- 开发模板：aladdin: wise_cook_main、recipe_screen ，card：wise_cook_all、recipe_screen ；
- 完成情况：
    - 11.30号，mip页面解决白屏、样式错乱上线@李浪波
    - 12.01 全流量上线 [链接](https://m.baidu.com/s?word=%E7%94%B5%E9%A5%AD%E7%85%B2%E7%85%AE%E6%9D%BF%E6%A0%97%E7%9A%84%E5%81%9A%E6%B3%95)
- 本周进展：
    - 11.25 发现mip页面bug数据下线
    - 11.25 上线修复情景页跳转至mip页面跳出回退后样式错乱bug@mip浪波修复
    - 11.29 修复情景页异步后跳转至mip页面跳出回退后白屏bug，@李晓修复
    - 11.29 修复ios9mip页面跳出回退后手百下部分白屏bug，@mip齐健修复
    - 11.30 修复情景页跳转至mip页面回退后顶部筛选被隐藏bug@mip浪波修复







 
#### 食材菜谱优化 (项目状态：小流量)@学林
- 背景：食材做法大全样式一：聚合菜谱阿拉丁卡片优化，添加筛选框&左滑查看更多菜谱做法
食材做法大全样式二：默认展现八个图文菜谱，可展开更多，点击后跳转至菜谱做法大全情景页，直接满足菜谱做法需求

- 收益：实验组，对照组各取8%的流量，全量影响PV约为100W/天。

- 开发模板 
    aladdin：rec_recipe rec_general
- **完成情况**
    11月16日 小流量上线，[芦笋的做法大全](https://m.baidu.com/s?word=%E8%8A%A6%E7%AC%8B%E7%9A%84%E5%81%9A%E6%B3%95%E5%A4%A7%E5%85%A8&sid=110677)
 
 
#### KG-星河新产品样式迭代（项目状态：小流量）@学林
- 背景：为了满足用户更好的检索和需求进行新的样式迭代
- 开发模板
    card ：rec_rcharacter rec_sideslip rec_news rec_issue act_atlas
- **完成情况**
    11月18日 小流量上线， [赵丽颖更多推荐](https://m.baidu.com/sf?openapi=1&dspName=iphone&from_sf=1&pd=xinghe_recommend_new&resource_id=4193&word=%E8%B5%B5%E4%B8%BD%E9%A2%96&title=%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%9B%B4%E5%A4%9A%E6%8E%A8%E8%8D%90&lid=10333077470622380211&ms=1&frsrcid=30356&frorder=7)
- 效果图

  <img src="http://wiki.baidu.com/download/attachments/246189488/11.png?api=v2" width="300"/>  
 

#### 推荐聚合页小说类目实验@学林
- 背景：更好的满足用户的检索和需求
- 开发模板：新增组图模板，读者还在搜 创建中~~
- 本周进展
    - 11.24介入，内容推荐样式升级，读者还在搜开发~
    - 由于项目最终ue图改动，整个项目模板都可复用，fe只需对内容样式升级。
   
- 计划
    - 11月24~11月28号 开发3天
    - 11月29号~11月30号 联调
    - 12月1号~12月5号 ue走查 qa测试 走3级单
    - 预计12月6号上线
 
#### 快递开发优化 @学林
- 背景：对快递查询用户进行查询卡片优化体验
- 开发模板：aladdin:express_delivery
- 本周进展：
    - 11.28-11.30 开发完成
    - 12.1 ue走查，pm预览效果中
    - 12.2 qa测试
- 计划：
    - 11.28-11.30 开发
    - 12.1-12.2 走查，测试，确认效果
    - 12.5 预计上线

- 效果

  <img src="http://wiki.baidu.com/download/attachments/246189488/image2016-12-1%2011%3A7%3A9.png?api=v2" width="300"/>


#### icode代码迁移 @李晓
- 背景：svn代码迁移至icode
- 本周进展：
    - 代码copy至icode,已完成
    - agile构建编译发布，已完成
    - 863发单，已完成
- 预览
  [地址](http://icode.baidu.com/repo/baidu%2Fps-se-fe-tpl%2Faladdin-pad/files/master/tree/)


#### 预处理文件梳理 @李晓
- 背景：预处理文件目前已不维护，没有相关的语法检测，万一语法报错容易引发线上bug,需梳理迁移下线
- 本周进展：
    - 对应模板已经影响面已梳理完