# 钟姿艳

> 从 2016-08-08到 2016-08-12


## 图片搜索优化-大图页

### 背景与目标
C类页面的建设，是之前沉浸式实验的延续，希望能够给到用户A-B-C三个页面的完整、刘畅的体验，做一次完整的沉浸式实验。
</br>大搜C类页面通过SuperFrame2.0实的，对比跳转图搜可以提升页面的加载速度，优化用户的浏览体验。

### 完成情况

- 图片搜索优化实验组一:大搜结果页瀑布流 8.8日小流量上线。sid=108241，资源号=31372，模板名=image_list。抽取10%流量，影响面约6w PV/天。
- 大图页需要用AE的数据，目前正在安排RD对接。
- 本周四拟订完schema，周五评审，预计下周五开发完大图页，浮层先调用图搜的接口。
- 浮层页涉及无限图片横滑，目前的iscroll组件无法实现，因此开发成本较高。开发完基础页面后可评审是否需要做一个无限横滑组件。

### 设计图
<p>大图页设计图</p><img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/662c10028fcfc34564caebe680983866/info.png" width="300">
<p>大图页浮层效果图</p><img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/39204c905dbf1e599efab20800c5e2f7/info2Black5.png" width="300">

### 后续
开发完成后评审是否需要做图片无限横滑组件。


## 电影泛需求卡片优化

### 背景与目标
线上电影泛需求（q=电影、热映电影）黑卡为早期样式，已不符合UE&FE规范，故升级模板样式，变为白色底色，使得大搜结果体验更加规范化和一致性。

### 完成情况

上周五已全量上线，收益25W左右。

### 效果截图
<p>iphone6线上效果</p><img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/c288ceb8fb10fe04e54fddd18c3821e2/IMG_5169.PNG" width="300">
<p>iphone6更多电影展开线上效果</p><img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/a5d74944cd00400b8e8c1edbb24e3661/IMG_5172.JPG" width="300">
<p>安卓机线上效果</p><img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/e48c7193d97345914119e13f927e1da0/IMG_5173.JPG" width="300">

### 后续
无