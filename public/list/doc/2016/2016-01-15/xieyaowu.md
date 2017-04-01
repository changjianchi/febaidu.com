# 谢耀武

> 2016.1.11 - 2016.1.15

## 北京积分落户计算器 - 测试通过，上线准备中

### 背景与目标

12月10日北京积分落户管理政策公布征集意见，刚发布后wise端用户的检索量一天达到十几万以上的影响面。从12月10日到31日前属于政策意见征集阶段，具有强时效性。因此政务小团队这边想针对积分落户做一个wise上的积分状态查询功能，属于临时需求。希望在本月内能借此时效性待政策先积淀用户，待政策颁布后计划将此计算器作为办事工具型产品

### 完成情况

新模板`gov_calculator`，模板开发完成，处于上线`ready`状态，pm正在走单，预计下周一（01-18）上线，预计pv:12W

### 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/0c96e410190406895dc4b1a3782af065/image.png)

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/0556eaa2fea09d434034510851f64cdb/image.png)

## 天宁岛类目

### 背景与目标

以一个出行方向为基点，聚合各垂类内容，使用户更便捷获取所需信息。

### 完成情况

- sigma卡mrd产出，场景页mrd下周一产出，UE图未出，数据来源初步确定。
- 预计下周开始开发。

## 完成的其他需求

* [wise端春节庙会项目模板修改需求](http://icafe.baidu.com/issue/WiseAladdinTemplate-1230/)
* [电影票sigma模板在部分iphone6+safari上有个连接错误问题](http://icafe.baidu.com/issue/WiseAladdinTemplate-1218/)
* [修复sigma底部样式在android搜狗浏览器中变形](http://icafe.baidu.com/issue/psfewebui-3282)

## 正在跟进的其他需求（按优先级排序）

* 天宁岛项目
* 出行模板里`form`跳转修改，涉及的模板：

模板名 | query | 完整版 | 精简版 | 功能版 | sigma版
--- | --- | --- | --- | --- | ---
form3 | 上海高铁 | 已修改 | 目前不支持 | 目前不支持 | 已废弃
wise_ticket_lp | 哈尔滨到三亚机票价格 | 已修改，但js里的待验证 | 目前不支持 | 目前不支持 | 无
kuaixing | 汽车票查询, 汽车票 | 已修改 | 目前不支持 | 目前不支持 | 已修改
wz_qichepiao | 常州恐龙园 | 老模板不支持修改 | 无 | 无 | 无
busticket_more | 北京到天津汽车票 | 未找到跳转代码 | 无 | 无 | 无
qunar_train01 | 待看 | - | - | - | -
trainnumber | k446 | 老模板不支持修改 | 无 | 无 | 无

> 上午的`已修改`是指在平台上修改了，待pm确认

* pc地图修复bug，目前进度70%，样式已修复，目前还有部分链接有问题
* 非标天使之翼优化，使用新的view层处理动画，但目前pm说等等再优化
* 北京积分落户计算器sigma样式
* [sigma_disease模板修复+增加source字段](http://icafe.baidu.com/issue/4263397/)
* [汽车评测卡多tab升级](http://icafe.baidu.com/issue/WiseAladdinTemplate-1011)
