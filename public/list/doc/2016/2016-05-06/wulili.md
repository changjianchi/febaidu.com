# 吴丽黎

> 从2016-05-03到2016-05-06

## 娱乐人物             百度搜索-小鲜肉开发（项目因公关问题，暂缓一周后继续进行。）

### 背景

百度搜索与10位刚刚出道，配合度高，微博粉丝活度强的男明星合作搜索结果页。

### 收益

影响面：3w/day

### 完成情况

第三个中间页ue还没有设计好，结果页的数据没有更新，目前开发了结果也和第一第二中间页（功能：分享，投票，音乐播放，贴吧评论，轮播展示，用户登录）

4月27日上午提测给QA郭书。
5月4日反馈测试报告，修复Bug。

### 效果图
设计图：

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/1b34f29cdb6c25fb069818d993a3910f/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/cb5fc0e5a7e83c9ee8d4a9d163ba918b/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/ea55d8526e92d5fdb927956ae1221eb9/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/8c224dd44b737cf11fba10b46326d3cf/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/606add2028ebba8c8fb480ca7d1f4631/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/95372a13e6247bc5be0ef4806eed6dd1/image.png)

## 糯米垂类        电影sigma卡片开发   

### 背景

wise精准电影卡（q=熊出没之熊心归来）sigma样式，由于卡片展示内容较多，卡片较长，不符合凤巢广告下移的标准（需要首屏展示在iPhone 6plus一屏内），
且现在的样式已不符合大搜的最新规范，结合新的需求点，希望可以调整卡片样式，更加好的满足用户需求。

### 收益

暂无

### 效果图
设计图：

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/f83c967876ad20ec1cda99d55eb1ad13/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/79582a73f5ec0fce9310619f9aca8135/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/2078b22b15675816f3d10e88c52c38d8/image.png)

### 完成情况

第4个页签的内容暂时没有提供。
5月4日中午邮件给出前端开发预计排期：5月5日~5月16日，预计大概8个工作日。

前端模板框架搭建成功，按照sigma  2.0开发卡片。


## 糯米垂类         团购阿拉丁退化卡片

### 完成情况

团购阿拉丁卡片退化5月4日已小流量上线，具体情况如下：

1、4821资源退化
上线时间：4.29
（1）实验组：sid=106055，30%流量，退化模板：we_tuan，
         对照组：sid=106054，30%流量，模板名：wise_tuan
（2）实验组：sid=106058，10%流量，退化模板：we_tuan，线上效果：火锅
         对照组：sid=106057，10%流量，模板名：wise_tuan2
实验组和对照组diff：三位以后的卡片样式不同

退化样式：

<img src="img/wulili/tuan.png" style="width:400px;">

2、4812资源退化
上线时间：5.3
实验组：sid=106068，50%流量，退化模板：we_tuan_brand，线上效果：味多美
对照组：sid=106069，50%流量，模板名：wise_tuan_brand和wise_tuan_brand2
实验组和对照组diff：三位以后的卡片样式不同

退化样式：

<img src="img/wulili/tuan2.png" style="width:400px;">

## 糯米垂类         结构化模板样式升级

### 完成情况

模板效果：

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/8922d8c61bcbc83359bedd2e825d6113/image.png)

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/adf4c2e03f3fe2814718e45bf2630ae4/image.png)


修改如下功能：
图片高度更改，摘要飘红处理，添加摘要详情链接，销售展示逻辑的变更。

5月4日中午已经上线。


## 下周计划

1、娱乐人物小鲜肉第三页的开发以及提测后bug的修复。

2、糯米电影卡片开发。

3、影视宣发迭代开发。