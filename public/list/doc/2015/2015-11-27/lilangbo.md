# 李浪波

> 从2015-11-22到2015-11-27

## wise阿拉丁飘红策略和pc打平（上线）

### 项目背景

```
1、背景：旧的飘红有bug，经常出现误飘或不飘，并且会引起hhvm性能问题
```

### 完成情况

- 本周三对线上所有调用老飘红函数的模板进行批量修改，并部署好测试环境提交测试；周五上午测试完成，并操作上线
- 影响面 在小流量下，心策略的飘红会覆盖除www_normal的所有阿拉丁

### 后续

- 由于设计到的影响面颇大，测试回归时间有限，需要持续跟进效果和线上


## 音乐——有声小说（上线）

### 完成情况

- PV：预估2W

- 状态：`周三已上线`

### 背景和目标

```
背景：有声小说作为音乐市场新的增长点，用户需求在搜索上并未得到很好满足，以小说类query用户为目标，在文本阅读得到满足的情况下尝试满足用户的有声小说需求，提升用户体验，增强大搜音乐类目的影响力和导流能力。一期计划先行覆盖少量query（Q=修仙狂徒），小流量验证数据效果。

目标：提升用户体验，增强大搜音乐类目的影响力和导流能力
```

### 完成情况

- 本周四（11.26）wise小流量上线，实验组对照组各取20%流量，实验组sid=102280，影响面约20w，对照sid=102281
    
### 效果截图

<img src="../2015-11-27/img/lilangbo/lilangbo01.png" height="200px">


## 歌词卡片

### 背景与目标

```
背景：目前线上百度音乐的歌词卡片存在数据覆盖不全且存在歌词版本不准确的问题（q=终于等到你歌词，q=小苹果歌词完整版，q=loser歌词），优化pc&wise歌词结果（q=终于等到你歌词）并扩大覆盖

目标：预计歌词卡片覆盖影响面10w，其中3w为纯新增歌词覆盖
``` 
### 完成情况

- PV：10w

- 状态：

    - 模板开发和测试完成，11月27号全流量上线，目前还看不到线上效果
    
## 效果截图

<img src="../2015-11-27/img/lilangbo/lilangbo02.png" height="300px">

### 汽车点到点卡片（测试中）

### 背景和目标

- 为了提升线路覆盖率、提高转化率，优化汽车票点到点卡片。

### 进展 

- 本周联调完成多家资源方数据，并于24好完成ue和pmreview，25号开始测试，由于26号休假，27号下午开始修复bug，预计下周一能够完成测试

### 后续

- 下周一完成测试，周二上线

## 值周

- 修复万年历冬时令和夏时令切换bug  

- 修复鹿晗query下音乐site tab不能点击的bug

- 修复asktobaike html注入bug

## 下周计划

- 汽车票点到点

- 音乐沉浸式体验