# 谢玲娟

> 从12.12-12.16

## 本周跟进

|内容 | 进度 | pv/天 | 是否小流量 |  
|---|---|---|---|---|
|详情页评论功能 | 12.13已上线 | 5万 | 是 |  
|ctkey升级 | 12.12已上线 | 2万 | 是 |   
|图文广告 | 12.12已上线 | 5万rmb收入 | 否 |   
|分享组件 | 12.14已提测 | 暂无 | 是 |  
|feed2.0整体样式改造 | 12.16介入开发，预计12.21上线 | 暂无 | 否 |   
|svn迁移icode | 12.15已迁移完成 | —— | —— |   
|headline编译上线迁移到agile | 12.16验证，跑通上线流程 | —— | —— | 
|模板管理平台删除模板无法立刻新建问题跟进|12.16已有结论|——|——|
        
## 详情页评论功能

### 背景

* 基于SF2.0，在资讯垂类feed流中的图文文章（图集和视频暂未开放）开启评论功能，本次上线主要功能包括在文章详情页增加评论吸底功能条，当前位置可写评论，评论的写/删除、评论的回复和回复删除、点赞等。
* 提高用户在C页面的在线时长，同时不影响其它功能模块的指标
 
 ### 进度
 
 12.13已上线小流量
 
 ### 线上效果
 
实验组：10%流量，sid=113876，[地址](https://m.baidu.com/s?word=%E6%94%B6%E8%A7%86%E7%8E%87%E9%80%A0%E5%81%87%E6%88%90%E4%BA%A7%E4%B8%9A&sid=111429_113876)

### 效果图

* 详情页置底评论入口![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/ac99c81f157fc576e57018dce55e9d14/image.png)

* 详情页内置热评展现区域![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/88ec003b6b0c1edba4026cc436bb78f1/image.png)

* 全部评论列表![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/b61020d42d5d4dfbf1c73b295b913702/image.png)

* 二级评论详情页![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/257a634e8518299962865184cf56de14/image.png)

## ctkey升级

### 背景

* 百度自有流量按要求接入广告幵产出内容数据表，内容分润模块依据唯一广告检索值（CTK）完成广告诧内容数据表拼接产出统一报表满足内容分润不数据分析需求。

* ctkey由之前的26升级成16位，去掉了冗余信息，保持全网一致性，以及唯一性。

### 进度

12.12已上线小流量

### 线上效果

实验组：1%小流量，sid=113500，[地址](https://m.baidu.com/s?word=%E6%94%B6%E8%A7%86%E7%8E%87%E9%80%A0%E5%81%87%E6%88%90%E4%BA%A7%E4%B8%9A&sid=111429_113500)

### 预览效果

实验组ctkey：![tmpp](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/04a84be53c0c769a82ef8db186e84ac8/tmpp.JPG)

对照组ctkey：![tmp](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/9e045d3698cd569ad30b7f9a3091bafb/tmp.JPG)

## 图文广告

### 背景

对哥伦布资讯垂类详情页中间位置插入网盟图文广告，经过UBS评估增加加正文下方图文广告之后详情页，用户体验持平，结论依据为媒体时长持平、feed页和详情页总的点击没有降低。
且对广告外跳体验面进行实验，1跳+2跳(mdsp+lu)组合型的图文广告在广告召回率和收入均大于各单项实验组，最终决定上线1跳+2跳(mdsp+lu)组合型的图文广告。

### 进度

12.12已上线全量

### 线上效果

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/87a89087f30b711b49c18b68f220ee5d/image.png)

## 分享组件

### 背景

* 目前线上的分享组件分享功能单一（没有功能性需求）且分享的途径有限，分享面板应保持交互和视觉一致。

* 在大搜已有的分享组件面板中，扩展字号大小设置，收藏功能，以及举报功能。丰富功能，保持良好的体验。

### 进度

12.14已提测。目前以来qa人力，预计下周三12.21左右上线。

### 线下地址：http://cp01-ala-fe-7.epc.baidu.com:8003/s?word=%E6%94%B6%E8%A7%86%E7%8E%87%E9%80%A0%E5%81%87%E6%88%90%E4%BA%A7%E4%B8%9A&sid=111429_106359

### 效果预览

扩展的分享面板：![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/2d3489f66f0e097582463e857cd0bdbc/image.png)

字号大小设置：![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/c6e443e1a8b42f7eb5feb45ccdf0f758/image.png)

收藏功能：![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/5bfc075880a25a13277d37fc35068a43/image.png)

举报页面：![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/5cdc6a277ce160f5c0a20878b2629c25/image.png)

## feed2.0整体样式改造

### 背景

资讯2.0全量以后，样式细节需要全面修改优化，保证视觉效果的完善

需要优化的样式包括，feed页、详情页、正在加载icon、字号面板、视频、全部评论页面、个人评论主页、评论详情页、图集推荐

### 进度

由我和健驰分着开发，2天，12、16介入，12.19完成，预计12.21上线

## svn迁移icode以及headline上线迁移

### 背景

* svn迁移到icode
* headline上线的方式迁移，由原来的gitlab开发，svn版本管理，jenkins平台编译构建到appengin平台发布上线。改为`icode开发和版本管理，agile平台变异构建，appengin上线`。

### 进度

* icode已迁移完毕，地址http://icode.baidu.com/repo/baidu%2Fps-se-fe-tpl%2Fheadline-wise/files/master/tree/

* 上线流程12.16跑通

### 相关文档（持续补充。。。）：http://agroup.baidu.com/alanews/md/article/192538

## 模板管理平台删除模板无法立刻新建问题跟进

12.16已解决。背景和解决方案参考wiki：http://newicafe.baidu.com/issue/CASEALADDIN-5693/show?from=page

## 下周计划

|内容 | 计划 | 
|---|---|
|分享组件 | 下周三左右上线 | 
|feed2.0整体样式改造 | 下周三左右上线 |
|各垂类接入方案|todo|
|资讯日志打平|todo|
|资讯feed整体bug修复|todo|

