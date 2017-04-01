# 民生方向周报

> 从2016-09-12到2016-09-14

## 民生子垂类

    * 天气：pm周里成+杨宇 rd赵元浩 fe李晓
    * 菜谱：pm周里成+杨宇 rd赵元浩 fe李晓
    * 快递：pm徐海漠 rd楚振江 fe肖学林
    * 日历：pm林馨怡 rd郑杰 fe肖学林
    * 通用推荐：pm徐海漠 rd殷瑞娜 fe李晓、学林

## 进度



#### 哥伦布天气现存问题用户体验优化方案、场景化天气优化方案(项目状态：全流量)@李晓
- 背景：针对query明天天气、明天天气怎么样、后天天气、周*天气，以及实时预报天气等进行优化
- 收益：影响PV 1500w
- 开发模板：aladdin: sam_sg_weather,sg_weather
- 完成情况
    - <span style="color:gray">10.26 测试完毕，资源方落地有点为题待解决后上线</span>
    - 11.21 全流量上线，pv1500w，[明天天气](http://www.baidu.com/s?word=%E6%98%8E%E5%A4%A9%E5%A4%A9%E6%B0%94&callback=B.getCode&ssid=0&from=844b&pu=sz%401320_2001%2Cta%40iphone_1_9.1_3_601&qid=11311115617041668590&rn=10&wpo=base&from=844b&ss=100&sa=ib&ms=1&ts=4962655&isid=11311115617041668590)
- 本周进展
    * 开全流量
- 效果

<img src="http://ala-fe.baidu.com/doc/2016-10-28/img/lixiao12/weather88.png" width="300px">

<img src="http://ala-fe.baidu.com/doc/2016-10-28/img/lixiao12/weather99.png" width="300px">

<img src="http://ala-fe.baidu.com/doc/2016-10-28/img/lixiao12/weather1.png" width="300px">
 
 
#### 极端天气优化方案(项目状态：开发中)@李晓
- 背景：用户在搜索『XX天气』及其相关query的需求，根据不同的场景，又有不同侧重的需求，为了更好的精细化满足用户在不同搜索场景下的需求，现提出天气场景化系列优化方案-对比本地天气优化、历史天气优化、极端天气优化、节日节气优化等。
- 收益：影响PV 50w
- 开发模板：aladdin: 新增weather_news，card：新增weather_news；
- 本周进展：
    - 情景页card开发完跟rd假数据联调中，结果页卡片待联调，真实数据wd同学11.24号给出
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
    - 11.17 提测
    - 11.24 全流量上线 [链接](https://m.baidu.com/s?word=%E7%94%B5%E9%A5%AD%E7%85%B2%E7%85%AE%E6%9D%BF%E6%A0%97%E7%9A%84%E5%81%9A%E6%B3%95)
- 本周进展：
    - 11.23 修复mip页面，苹果5s uc浏览器下白屏上线@mip齐健修复
    - 11.24 模板加https兼容



 
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
- 效果预览

  <img src="http://wiki.baidu.com/download/attachments/246189488/11.png?api=v2" width="300"/>  
 

#### 推荐聚合页小说类目实验@学林
- 背景：更好的满足用户的检索和需求
- 开发模板：新增组图模板，读者还在搜 创建中~~
- 本周进展
  - 介入，内容推荐样式升级，读者还在搜开发~
- 计划
  - 11月24~11月28号 开发3天
  - 11月29号~11月30号 联调
  - 12月1号~12月5号 ue走查 qa测试 走3级单
  - 预计12月6号上线
 
#### 雾霾白卡栅格化@学林
- 进展 11月23日 上线完成 [北京市雾霾](https://www.baidu.com/ssid=d7f8d2b9bea1c7fad6d51541/from=844b/s?word=%E5%8C%97%E4%BA%AC%E5%B8%82%E9%9B%BE%E9%9C%BE&ts=8054377&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=2482265062575713585&rsv_t=4c48yDLoFb9fW1olilBYWHovzeAuGoENPJELjqzXbm0pd9aMQHs0Hx1Dyg&sa=ib&ms=1&rsv_pq=2482265062575713585&rsv_sug4=4673&ss=101&inputT=3763)
 

 


