# 祁鹏远

> 2016年7月18日~2016年7月22日

## 自有产品阿拉丁样式修改需求

### 需要修改的模板
* <span>模板名：【gonglveyouxi】 query：保卫萝卜2攻略</span>
* <span>模板名：【tiebaxml】     query：李毅吧</span>
* <span>模板名：【wenkuala】     query：柳树醒了教案</span>

### 完成情况
* <span>7月18日已上线上线 模板名：gonglveyouxi</span>
* <span>7月18日已上线上线 模板名：wenkuala</span>
* <span>模板名：tiebaxml已修改完，PM说要做的测试，说下周五前测试能完成，暂时先不上线，等通知</span>

### 效果

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/083820522517061f9a900f3be4cfec25/image.png)


![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/650eb556adecb6c04d761e80698a4080/image.png)


![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/896cae902028e58f2995d8e94788a41a/image.png)

## 弱样式优化

### 需要修改的模板
* <span>模板名：【we_wenkuala】  query：小学语文教案          sid=107584</span>
* <span>模板名：【we_zhidao】    query：天空为什么是蓝色的    sid=107582</span>


### 完成情况
* <span>7月19日已上线上线 模板名：we_wenkuala</span>
* <span>7月19日已上线上线 模板名：we_zhidao</span>

### 效果

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/ec5fa800e1c2627de361c00d28da7b83/image.png)
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/a3830292a3f8f74fe87a0b8f75472979/image.png)

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
* <span>预计7月25日已上线</span>

## 后续排期

* 球球大作战游戏卡牌