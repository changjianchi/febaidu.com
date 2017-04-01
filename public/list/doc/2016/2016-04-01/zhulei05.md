# 朱雷

> 从2016-03-21到2015-03-25

## 哥伦布-民生类-摇号

### 背景

摇号这部分用户画像清晰，这部分用户主要为有买车打算但当前无车（或无购买本地车牌资格）的用户，因为摇车中签比例日渐走低，这部分用户数量可观且持续变多，目前及未来对各类新车的需求庞大，有激发的潜力，同时对政策车（如新能源车）有较强的需求。

在用户搜索摇号后，且主需求满足很好，我们将针对这部分用户推荐用户新车（尤其是不摇号车）等汽车信息，以及推荐用户新车试驾等服务内容。

### 收益

影响pv：3w.

负收益：

- 有点击行为比例相对减少 9.11%，绝对减少 6.76%（74.22% --> 67.46%）。用户换query增加，同时没有title和官网显著标识，会降低有点
- 换query比例相对增加 41.39%，绝对增加 6.55%（15.82%-->22.37%）。一方面，卡片颜色比较浅，会降低对用户的吸引力；另一方面，没有title，官网标识不明显，大量用户换到摇号官网搜索
- 点击率相对增加 5.34%，绝对增加 8.03%（150.34% --> 158.38%）。主要是不同车型推荐增加
- 长点击率相对减少13.39%，绝对减少 8.41%（62.76% --> 54.36%）；长点击占比相对减少 1.80%，绝对减少1.36%（75.88% --> 74.51%）
- 卡片输入框点击 41.33%，查询点击 40.43%，进入官网点击 22.90%，左右滑动点击 11.45%，新能源汽车链接点击2.04%，修改政策点击1.50%，新能源汽车推荐第一条点击 1.31%，其余链接点击均低于1%，总计 6.92%

### 完成情况

新增模板，小流量上线，sid=103868，2.26上线，query:  [杭州摇号](https://m.baidu.com/s?from=844b&vit=fps&word=%E6%9D%AD%E5%B7%9E%E6%91%87%E5%8F%B7&sid=103868)

![image](http://gitlab.baidu.com/psfe/psdoc/uploads/b23872f3fc4ba409079aecefdc910d77/image.png)

### 效果

![image](http://gitlab.baidu.com/psfe/psdoc/uploads/3193ec49bce6c6373a895bc66bbf1b82/image.png)

### 后续计划

* 摇号二期已评审，预计4.12介入，工作量5天

## 哥伦布-民生类-天气

### 背景

哥伦布项目的探索先驱，在满足用户对天气情况的搜索主需求之后前置其他与天气相关的需求，如饮食、娱乐、运动等。

### 收益

影响pv:1100w。有点击行为比例：绝对增加0.87%，相对增加2.8%（31.09%--->31.96%）,整体点击率：绝对增加1.96%，相对增加5.25%（37.28%--->39.24%）,换query比例：绝对增加0.21%，相对增加28.84%（0.73%--->0.94%）

### 完成情况

目前线上有50+城市全流量，100+城市小流量中，影响面合计1100w。query: [北京天气](https://m.baidu.com/from=844b/s?word=%E5%8C%97%E4%BA%AC%E5%A4%A9%E6%B0%94)

![image](http://gitlab.baidu.com/psfe/psdoc/uploads/19b042dcd0ce3d5c314ef398f755a766/image.png)

### 效果

![image](http://gitlab.baidu.com/psfe/psdoc/uploads/62bc2005095edb2f2170aec00b9bd3f5/image.png)

### 后续计划

* <span style="color: red;">评审了天气搜索结果页自然结果改造需求，4.1开始开发</span>

## 哥伦布-民生类-万年历

### 背景

在万年历和一些日期搜索的query下进行需求激发，在满足用户对日期信息获取的主需求下，将当下的热点新闻、热卖商品推荐给用户，激发用户与日期相关的潜在需求。

### 收益

影响pv:18w.实验的正式结论等待UBS发出，预计3.28日。

### 完成情况

新增模板，小流量上线，sid=104193,104194,3.18上线,query：万年历。[实验组一](https://m.baidu.com/ssid=794557616465334a756e65ae10/s?word=%E4%B8%87%E5%B9%B4%E5%8E%86&sid=104193)  ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/4490cb37805fae396338267864c98efe/image.png)  [实验组二](https://m.baidu.com/ssid=794557616465334a756e65ae10/s?word=%E4%B8%87%E5%B9%B4%E5%8E%86&sid=104194)  ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/c89dc2c61f2b90ebb17bab023a6d872b/image.png)

### 效果

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/f05c486ebfab4f27db51136fe625a231/image.png)

### 后续计划

* <span style="color: red;">万年历三期方案已评审，预计4.8开始开发，工作量2天</span>

## 哥伦布-民生类-pc违章

### 背景

pc违章项目资源方和后端接口有变更，前端需要做接口迁移，同时还有产品形态的调整，把查询结果页面放到车辆列表下面。

### 收益

影响pv：17w.

### 完成情况

新增模板，在老模板的基础上迭代，全流量上线，query: [北京违章查询](https://www.baidu.com/s?ie=UTF-8&wd=%E5%8C%97%E4%BA%AC%E8%BF%9D%E7%AB%A0%E6%9F%A5%E8%AF%A2)

### 效果

![image](http://gitlab.baidu.com/psfe/psdoc/uploads/0e36acc32bdbe2a011395f8b5d9405a7/image.png)

## 哥伦布-民生类-wise快递v2

### 背景

对寻址类相关的query推出sigma大卡，优化线上已有大卡的样式。整合自然结果，满足用户的主需求，激发用户潜在需求。

### 项目进度

模板联调中，预计3.28联调后端数据，4.1提测

### 效果

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/f70bff581080ed3d1de4646f9bdc4bf5/image.png)
