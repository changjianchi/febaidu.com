# 谢玲娟

> 从2016-10-17到2016-10-21

## 本周跟进

- 资讯
    -   图文/视频/图集分享优化
    -   运营大卡
    - 	时效性新闻中间页样式优化
    -   时效性微博sam_weibo
    

## 1. 详情页分享功能升级

### 背景

线上详情页的分享入口有限，只有qq好友，需要跟已有的分享组件对的分享入口打平，引入微信，朋友圈，微博之类的入口；同时引入资讯特有的分享，举报，字体大小设置的功能。

### 完成情况

- 进度： 11.1上线0流量，目前仍剩两个bug。下周能转小流量。

- 效果图：![4E8FF51486FB96BBAC7C3B2BC9AAD743](/uploads/bd8467221fe4821f102a1f8a3b316c00/4E8FF51486FB96BBAC7C3B2BC9AAD743.JPG)

## 2. 运营大卡

### 背景

针对典礼类query，做一个sigma大卡：
头部满足主需求展现典礼大图，倒计时，相关信息。
子卡满足激发需求，典礼视频，资讯，热议，历史日程等信息。

### 进度

11.4介入开发，开发量4天。11.10联调。预计11.16上线。

## 3、时效性新闻中间页样式优化

### 背景

时效性新闻，线上遗留的体验问题，点击加载的体验不如无限下拉流畅，本期优化将点击加载10条新闻改成无线下拉。

### 进度

11.4上线。

### 线下效果

[https://wwwhttps.baidu.com/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=realtime&dev_path=searchaladdin&dev_tpltype=default&sid=99999&dev_online=1&wd=%E6%9D%A8%E5%B9%82&word=%E6%9D%A8%E5%B9%82](https://wwwhttps.baidu.com/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=realtime&dev_path=searchaladdin&dev_tpltype=default&sid=99999&dev_online=1&wd=%E6%9D%A8%E5%B9%82&word=%E6%9D%A8%E5%B9%82)

## 4. 时效性微博（hold）

### 背景

- 目前线上的微博没有图片，条数固定2条太少。针对这两项新出了ue图，做小流量实验。

- 开发时发现模板较老，预处理的逻辑写在了模板，还有一些固定的文案，跟pm提出之后趁这次小流量一起来推动rd那边的数据升级。
   已推进rd那边全量之前完成优化开发。

### 进度

- 10.24介入，10.25联调，10.26提测。

- 截止10.28联调dalay，原因是disp没有获取到在线抓取到的图片数据。rd刘钦目前仍然开发中。

- 截止11.4联调delay，图片抓取后的机器还在扩容中，影响线下提测。预计11.4下午数据到位。

