<<<<<<< HEAD
# 祁鹏远

> 2016年8月1日~2016年8月5日

## 自有产品阿拉丁样式修改需求(无进展，PM说目前样式上有些弱，先不建议上线，等PM再和ue沟通下得)

### 需要修改的模板
* <span>模板名：【gonglveyouxi】 query：保卫萝卜2攻略</span>
* <span>模板名：【tiebaxml】     query：李毅吧</span>
* <span>模板名：【wenkuala】     query：柳树醒了教案</span>

### 完成情况
* <span>7月18日已上线上线 模板名：gonglveyouxi</span>
* <span>7月18日已上线上线 模板名：wenkuala</span>
* <span>模板名：tiebaxml已修改完，PM说目前样式上有些弱，先不建议上线，等PM再和ue沟通下得</span>

### 效果

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/083820522517061f9a900f3be4cfec25/image.png)


![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/650eb556adecb6c04d761e80698a4080/image.png)


![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/896cae902028e58f2995d8e94788a41a/image.png)


## 王者荣耀（手游类）哥伦布迭代

### 背景

在用户搜索手游的时候，在搜索结果页中展示较为丰富的结果，满足用户的几乎所有手游相关需求，包含游戏的基本信息，百科，贴吧，官网，下载，咨询，礼包，攻略，图集，视频，推荐等。 手机游戏用户的用户画像较为清晰，主要集中在较为年轻的游戏玩家，时间为较碎片化的闲暇时间，有了解游戏、下载游戏、以及查询游戏相关攻略内容的需求，这类用户有较强的接受能力，在手游类型的query下需求明确，可以适应较为多元和复杂的游戏内容。 因此在手游游戏名下布置哥伦布，以更好的满足用户的需求，提升用户的媒体时间与需求满足，加强搜索在整个游戏生态的把控力，并且拿到优异的商业收益。

### 收益
* <span>王者荣耀游戏哥伦布（源计划）-手机游戏名卡，已在7.6号晚小流量上线（25%），影响面9w左右</span>
* <span>sid=107606  对照组  原有自然结果</span>
* <span>sid=107605  实验组  需求卡片聚合，内部点调，原有需求优化基础上增加新卡满足需求。</span>

* <span>A/B test实验单元（对照组Sid: 107606 VS 实验组Sid: 107605）,基于20160713-20160717共5天的数据。</span>
* <span>实验换query比例上升，且聚簇后实验组6-9位有点击行为比例比对照组低，故给出略负收益。</span>
* <span>详细数据如下:</span>
    - 一、宏观指标:
        - 1、搜索用户媒体时长: 持平
        - 2、搜索生态控制力: 相对-7.96%(66.53%->61.23%)
        - 3、人均检索量: 持平
        - 4、人均分发量: 持平

    - 二、用户体验主要判断指标:
        - 1、有点行为比例: 持平
        - 2、换query比例: 相对+1.29%(24.47%->24.78%)
        - 3、长点率: 相对+4.75%(39.70%->41.58%)
        - 4、长点击占比: 相对-2.04%(79.53%->77.91%)
        - 5、实验组聚簇后位置6-9位有点击行为比例低于对照组，且低于簇外的位置10有点击行为比例。

    - 三、用户体验辅助判断指标:
        - 1、短点率: 统计显著,相对+12.01%(1.27%->1.42%)
        - 2、rs点击率: 统计显著,相对-8.84%(1.70%->1.55%)
        - 3、翻页率: 统计显著,相对-14.24%(0.48%->0.41%)
        - 4、点击率: 统计显著,相对+19.13%(70.96%->84.53%)

### 迭代建议
* <span>建议优化簇内新闻、视频、直播、百度多玩。</span>
* <span>新闻：建议调整为攻略，同时调整tab顺序。</span>
* <span>视频、直播：建议优化展现样式和展示图片（现在图片质量较差）。</span>
* <span>百度多玩：建议优化文案或去除此条结果。</span>

### 完成情况
* <span>模板名：game_baidu_encyclopedia7月25日已上线</span>
* <span>模板名：short_video 复用模板，样式升级，兼容无tab样式，7月28日已上线</span>
* <span>王者荣耀哥伦布卡片7月28日小流量25%上线，观察两天，再发上线通告</span>
* <span>王者荣耀线上网址：https://m.baidu.com/s?word=%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80&sid=108008</span>

### 效果

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/b9257d35bd49b4beba61eb71aab4e0e9/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/0bbd8368f695bef5a5523ccec7c3d8e8/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/6817dc5deb352d5ca1819314b8ef7d66/image.png)



## 车系卡片样式修改

### 需要修改的模板
* <span>模板名：【car_detail】 query：宝马3系 sid：102162</span>


### 完成情况
* <span>样式升级滑动已修改完成</span>
* <span>新需求：1已停售的颜色显示#999.未停售的颜色显示#ff6500</span>
* <span>2右下角的文案和连接要随着tab的切换而变化</span>
* <span>周二(8月2日)已上线</span>
* <span>线上地址：https://m.baidu.com/s?word=%E5%AE%9D%E9%A9%AC3%E7%B3%BB&sid=102162</span>


### 效果

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/604065271eba0d513c290315e2e55a00/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/0d7d8e6daae9eb003b6cc7f24b27f8a6/image.png)


## 游戏数据库弱样式

###背景：
本次上线的游戏数据-英雄角色的弱样式卡，主要为了补充强样式卡没有覆盖的王者荣耀手游的角色数据。满足的需求包括：技能、玩法、视频等。模板是线上模板样式的栅格化，query影响面较小，因此采用全流量上线。
类型：用户
性质：长期存在
目标效果：用户体验上升，提高有点击比例，降低换query，小幅度提升pv


### 进度排期
* <span>本来要服用线上模板，但是线上模版不满足需求，所以新做一个卡片</span>
* <span>7月25介入开发，预计开发两天，等数据delay一天</span>
* <span>7月28测试</span>
* <span>7月29上线</span>


### 完成情况

* <span>周一（8月1日）已上线，模版上线</span>
* <span>企业信息查询的一个项目要复用这个模板，做个一个无图片兼容的样式,许诺已经批了.</span>
* <span>周三（8月3日）游戏数据上线， 0流量 sid=103292 query=王者荣耀李白、王者荣耀夏侯惇 线上地址：https://m.baidu.com/s?word=%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E6%9D%8E%E7%99%BD&sid=103292</span>
* <span>周三（8月3日）企业信息查询数据全量上线，sid=102163 query=济宁博敏达生物科技有限公司、肥西世阳护栏工程有限公司 线上地址https://m.baidu.com/s?word=%E5%A4%A7%E8%BF%9E%E6%AC%A7%E7%89%B9%E5%8D%B0%E5%88%B7%E5%99%A8%E6%9D%90%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&sid=102163</span>


### 效果
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/beb1708f2242a64ee267a79fb9f89468/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/4955094a0b981cf8c987397f9d92715e/image.png)

## 值周

## 后续排期

=======
# 祁鹏远

> 2016年8月1日~2016年8月5日

## 自有产品阿拉丁样式修改需求(无进展，PM说目前样式上有些弱，先不建议上线，等PM再和ue沟通下得)

### 需要修改的模板
* <span>模板名：【gonglveyouxi】 query：保卫萝卜2攻略</span>
* <span>模板名：【tiebaxml】     query：李毅吧</span>
* <span>模板名：【wenkuala】     query：柳树醒了教案</span>

### 完成情况
* <span>7月18日已上线上线 模板名：gonglveyouxi</span>
* <span>7月18日已上线上线 模板名：wenkuala</span>
* <span>模板名：tiebaxml已修改完，PM说目前样式上有些弱，先不建议上线，等PM再和ue沟通下得</span>

### 效果

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/083820522517061f9a900f3be4cfec25/image.png)


![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/650eb556adecb6c04d761e80698a4080/image.png)


![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/896cae902028e58f2995d8e94788a41a/image.png)


## 王者荣耀（手游类）哥伦布迭代

### 背景

在用户搜索手游的时候，在搜索结果页中展示较为丰富的结果，满足用户的几乎所有手游相关需求，包含游戏的基本信息，百科，贴吧，官网，下载，咨询，礼包，攻略，图集，视频，推荐等。 手机游戏用户的用户画像较为清晰，主要集中在较为年轻的游戏玩家，时间为较碎片化的闲暇时间，有了解游戏、下载游戏、以及查询游戏相关攻略内容的需求，这类用户有较强的接受能力，在手游类型的query下需求明确，可以适应较为多元和复杂的游戏内容。 因此在手游游戏名下布置哥伦布，以更好的满足用户的需求，提升用户的媒体时间与需求满足，加强搜索在整个游戏生态的把控力，并且拿到优异的商业收益。

### 收益
* <span>王者荣耀游戏哥伦布（源计划）-手机游戏名卡，已在7.6号晚小流量上线（25%），影响面9w左右</span>
* <span>sid=107606  对照组  原有自然结果</span>
* <span>sid=107605  实验组  需求卡片聚合，内部点调，原有需求优化基础上增加新卡满足需求。</span>

* <span>A/B test实验单元（对照组Sid: 107606 VS 实验组Sid: 107605）,基于20160713-20160717共5天的数据。</span>
* <span>实验换query比例上升，且聚簇后实验组6-9位有点击行为比例比对照组低，故给出略负收益。</span>
* <span>详细数据如下:</span>
    - 一、宏观指标:
        - 1、搜索用户媒体时长: 持平
        - 2、搜索生态控制力: 相对-7.96%(66.53%->61.23%)
        - 3、人均检索量: 持平
        - 4、人均分发量: 持平

    - 二、用户体验主要判断指标:
        - 1、有点行为比例: 持平
        - 2、换query比例: 相对+1.29%(24.47%->24.78%)
        - 3、长点率: 相对+4.75%(39.70%->41.58%)
        - 4、长点击占比: 相对-2.04%(79.53%->77.91%)
        - 5、实验组聚簇后位置6-9位有点击行为比例低于对照组，且低于簇外的位置10有点击行为比例。

    - 三、用户体验辅助判断指标:
        - 1、短点率: 统计显著,相对+12.01%(1.27%->1.42%)
        - 2、rs点击率: 统计显著,相对-8.84%(1.70%->1.55%)
        - 3、翻页率: 统计显著,相对-14.24%(0.48%->0.41%)
        - 4、点击率: 统计显著,相对+19.13%(70.96%->84.53%)

### 迭代建议
* <span>建议优化簇内新闻、视频、直播、百度多玩。</span>
* <span>新闻：建议调整为攻略，同时调整tab顺序。</span>
* <span>视频、直播：建议优化展现样式和展示图片（现在图片质量较差）。</span>
* <span>百度多玩：建议优化文案或去除此条结果。</span>

### 完成情况
* <span>模板名：game_baidu_encyclopedia7月25日已上线</span>
* <span>模板名：short_video 复用模板，样式升级，兼容无tab样式，7月28日已上线</span>
* <span>王者荣耀哥伦布卡片7月28日小流量25%上线，观察两天，再发上线通告</span>
* <span>王者荣耀线上网址：https://m.baidu.com/s?word=%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80&sid=108008</span>

### 效果

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/b9257d35bd49b4beba61eb71aab4e0e9/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/0bbd8368f695bef5a5523ccec7c3d8e8/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/6817dc5deb352d5ca1819314b8ef7d66/image.png)



## 车系卡片样式修改

### 需要修改的模板
* <span>模板名：【car_detail】 query：宝马3系 sid：102162</span>


### 完成情况
* <span>样式升级滑动已修改完成</span>
* <span>新需求：1已停售的颜色显示#999.未停售的颜色显示#ff6500</span>
* <span>2右下角的文案和连接要随着tab的切换而变化</span>
* <span>周二(8月2日)已上线</span>
* <span>线上地址：https://m.baidu.com/s?word=%E5%AE%9D%E9%A9%AC3%E7%B3%BB&sid=102162</span>


### 效果

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/604065271eba0d513c290315e2e55a00/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/0d7d8e6daae9eb003b6cc7f24b27f8a6/image.png)


## 游戏数据库弱样式

###背景：
本次上线的游戏数据-英雄角色的弱样式卡，主要为了补充强样式卡没有覆盖的王者荣耀手游的角色数据。满足的需求包括：技能、玩法、视频等。模板是线上模板样式的栅格化，query影响面较小，因此采用全流量上线。
类型：用户
性质：长期存在
目标效果：用户体验上升，提高有点击比例，降低换query，小幅度提升pv


### 进度排期
* <span>本来要服用线上模板，但是线上模版不满足需求，所以新做一个卡片</span>
* <span>7月25介入开发，预计开发两天，等数据delay一天</span>
* <span>7月28测试</span>
* <span>7月29上线</span>


### 完成情况

* <span>周一（8月1日）已上线，模版上线</span>
* <span>企业信息查询的一个项目要复用这个模板，做个一个无图片兼容的样式,许诺已经批了.</span>
* <span>周三（8月3日）游戏数据上线， 0流量 sid=103292 query=王者荣耀李白、王者荣耀夏侯惇 线上地址：https://m.baidu.com/s?word=%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E6%9D%8E%E7%99%BD&sid=103292</span>
* <span>周三（8月3日）企业信息查询数据全量上线，sid=102163 query=济宁博敏达生物科技有限公司、肥西世阳护栏工程有限公司 线上地址https://m.baidu.com/s?word=%E5%A4%A7%E8%BF%9E%E6%AC%A7%E7%89%B9%E5%8D%B0%E5%88%B7%E5%99%A8%E6%9D%90%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&sid=102163</span>


### 效果
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/beb1708f2242a64ee267a79fb9f89468/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/4955094a0b981cf8c987397f9d92715e/image.png)

## 值周

## 后续排期

>>>>>>> e33362957a1bfb2f0e5e002268b918575858ee2a
* <span>暂无</span>