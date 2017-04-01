# 谢耀武

> 从2016-02-14到2015-02-19

## 天宁岛-情景页开发

### 背景与目标

当前的旅游类搜索结果页包含卡片较多，尤其是同质内容卡片使得页面结构凌乱，体验和用户使用效率上都欠佳。以景区和典型旅游城市作为试水Query，依托于场景化卡片优化搜索结果页整体效果。

### 完成情况 - 本周只是优化部分代码

这是新模板，模板名为`clbus_trav`，现内网全流量上线，外网小流量上线，query: <a href="https://m.baidu.com/s?word=乌镇&sid=103639&tn=iphone">乌镇</a>、<a href="https://m.baidu.com/s?word=丽江&sid=103639&tn=iphone">丽江</a>、<a href="https://m.baidu.com/s?word=桂林&sid=103639&tn=iphone">桂林</a>、<a href="https://m.baidu.com/s?word=三亚&sid=103639&tn=iphone">三亚</a>、<a href="https://m.baidu.com/s?word=香港&sid=103639&tn=iphone">香港</a>

全网的小流量列表：

* 33%天宁岛屏蔽阿拉丁（抽样ID为103639）；
* 33%天宁岛不屏蔽阿拉丁（抽样ID为103640）；
* 33%城市原样式（抽样ID为103641）

### 图片

<a href="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/8ddb56329038b9eaba151b37040ea857/image.png"><img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/8ddb56329038b9eaba151b37040ea857/image.png" width="300"></a>

<a href="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/cd579d06f5a1f4fc0059c12a11c93b94/image.png"><img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/cd579d06f5a1f4fc0059c12a11c93b94/image.png" width="300"></a>

<a href="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/146275ff89771db85048fa2e70e88b44/image.png"><img src="http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/146275ff89771db85048fa2e70e88b44/image.png" width="300"></a>


## 其他需求

* [电影票模板优化百科链接，已上线](http://newicafe.baidu.com/issue/WiseAladdinTemplate-1406/show)
* weibo模板utouch、big版式修复，已上线
* 跟@浪波、@玲娟、@泉有、@朱雷升级bscroll
* map_subway pc模板里的图片更换