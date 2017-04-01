# 吴丽黎 

> 从2016-06-27到2016-07-1

## 娱乐人物             百度搜索-小鲜肉开发 (无更新)

### 背景

百度搜索与10位刚刚出道，配合度高，微博粉丝活度强的男明星合作搜索结果页。

### 收益

影响面：3w/day

### 完成情况

【因移动生活政务方向的项目优先级更高，负责此项目的ue去设计政务的，没有人力支持】

第三个中间页ue还没有设计好，结果页的数据没有更新，目前开发了结果也和第一第二中间页（功能：分享，投票，音乐播放，贴吧评论，轮播展示，用户登录）

4月27日上午提测给QA郭书。
5月4日反馈测试报告，修复Bug。

6月16日下午项目重新启动
计划下周五上线。    6月16日搭建前端可视环境，目前rd提供的sigma配置有问题，模板召回显示有问题，rd晓鹏组内17日中午有bui，我只能从平台自己配数据搭建环境看，
rd说周末会支持us。
对代码进行栅格检查并修改，自测功能调试，ue终稿这周还没有给出，第三页的设计稿也没有给出样板，目前ue没有给出出稿日期。


### 效果图
设计图：

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/1b34f29cdb6c25fb069818d993a3910f/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/cb5fc0e5a7e83c9ee8d4a9d163ba918b/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/ea55d8526e92d5fdb927956ae1221eb9/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/8c224dd44b737cf11fba10b46326d3cf/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/606add2028ebba8c8fb480ca7d1f4631/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/95372a13e6247bc5be0ef4806eed6dd1/image.png)

## 糯米垂类        电影sigma卡片开发   （无更新）

### 背景

wise精准电影卡（q=熊出没之熊心归来）sigma样式，由于卡片展示内容较多，卡片较长，不符合凤巢广告下移的标准（需要首屏展示在iPhone 6plus一屏内），
且现在的样式已不符合大搜的最新规范，结合新的需求点，希望可以调整卡片样式，更加好的满足用户需求。

### 收益

暂无

### 完成情况
13日下午提测。

测试第二版，已经把bug修复完毕，还剩一些icon需要更换以及头图资源的敲定；

ue 20日下午介入测试。

因同时进行多个项目，期间需求有变动，今天还得改花絮部分内容，pm说下周上线。

项目在过人工审核，pm发现后端数据有问题，正在解决。

因PM MRD没有把所有需求明确，项目提测已经结束，新增花絮图片放大轮播需求，上周人工审核都通过了还加手百框调起需求以及页面所有链接添加参数需求、部分tab根据数据返回
不同显示或隐藏需求，项目于2016年6月8日上线成功，pm节后开流量。

线上地址
https://m.baidu.com/s?word=魔兽电影&sid=103561

6月16日 更新一版花絮放大效果样式，已经上线；

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/e8c6dce0202069bb871aeb595b934be7/image.png)

6月17日 折扣以及评分展示逻辑更改（沿用老模版逻辑）

原逻辑显示

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/829a83f300382c7a64fcb30613bc4dce/image.png)

改后的显示

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/1e4f7abd3b7b6f268522e1f1d0686bf9/image.png)

6月17日 周边商品显示逻辑添加：返回条数小于3的时候不显示该tab内容

### 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/b4d7220daafcbebafe0abee768a47292/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/373248bdc0b5bc41d40c9a56b67c44b9/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/e9b7babf494dc9fbed449a8d91428c1d/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/18fd7a2c3f9f16284d7a3348641c3f06/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/3119dd9e0f26b52b2b012f615bcea6f5/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/b9f16a6231989a955f6b2d27df19aaa6/image.png)

## 糯米垂类    演出票开发  【无更新】

### 完成情况

6月13日14日开发，15日提测，有两张卡片，17日已经准备好模板上线工作，因三级单没有走完，pm改为下周一上线（20日）。

【线上地址  http://m.baidu.com/s?word=%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%BC%94%E5%94%B1%E4%BC%9A&sid=107335】

【发现搜城市query（北京，南京..）返回的数据格式由数组变成了对象，导致页面数据为空，已经修复成功，24日上线。】

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/fbae42043a9eeba29216623e00604ec8/image.png)

修复好后

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/a23aaeb0ead14e9040212784b94aa9e6/image.png)

### 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/4163618cffcf6366abbe1fb545dd3bcd/image.png)

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/66a12a60de9956091e16e036d0a7ee2c/image.png)

弱样式 

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/0f0d5201c97ecc0261e36edfda710cf9/image.png)


## 糯米垂类    sdk 抽样转全流量   （无更新）

### 完成情况

已经准备好上线，等待pm敲定时间。
因糯米方提供调起框的地址与h5地址不一致所以耽搁了，pm已经联系了糯米数据方解决此问题。

## 糯米垂类    糯米唯一答案黑卡转哥伦布白卡 

### 完成情况

【7月4日测试通过，等待三级单过程，pm需求有变更，对八大金刚展示增加展现逻辑逻辑控制，因后端数据准备不是很充分，导致人工审核拖后，
  7月7日三级单审核通过，模板已经上线，后端数据还在迭代。】

按计划把需要开发的两个卡片用线上资源开发完毕，rd 6月27日提供哥伦布环境，再进行联调。

rd环境6月29日下午提供，30日联调完毕，7月1日提测。

### 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/7f2c50d25bdd2e3b8b446a42e1ce7e12/image.png)


## 移动生活服务   政务  

### 背景

mrd没有提供，暂无

### 完成情况

【7月4日测试通过等待上线，7月6日三级单准备完毕，模板上线。】

6月29日参加技术评审，调研地图的实现方案。
6月30日半天开发完毕，7月1日中午rd提供环境联调，预计当天下午3点可以提测。

### 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/726b9efd07c37ce6eb33ee5bc19225a8/image.png)



### 其他

1、对之前所写的老模版做 escape 简化处理以及tc升级，
   wise_tuan  wise_tuan2  wise_tuan_nuo 7月7日上线。
  
2、演出票模板标题链接替换，7月7日已经上线。

3、移动生活政务公积金知识页卡片技术评审。


## 下周计划

1、等政务公积金知识页ue出炉，并出kv  schema以及前端排期。