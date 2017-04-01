# 齐健

> 从2015-12-21到2015-12-25

## wise-aladdin 模板精简(无进展)

### 背景与目标

由于阿拉丁模板数量太多，影响smarty编译和上线时间。

### 完成情况

pm确认中，下周继续跟进


## 上线时间持续跟进优化

### 背景与目标

目前wise上线时间比较久，比PC慢了一倍多。需要持续跟进和优化上线时间，以减少上线人力成本和快速响应紧急需求。

### 进度

本周线上odp扩容，扩容后重新评估是否可以去掉上线等待时间。

## wise-aladdin基础库升级

### 背景与目标

目前wise基础库有很多bug，A.setup、A.init 都有一定问题。需要升级解决。另外基础库跟pc的逻辑不一至，需要同步

### 进度

本周二已上线，上线后之前 A.init、A.setup 的问题都会修复。并且同一个模板多个 A.init 中的 this，指向的是同一个 aladdin 对象


## wise-aladdin 日志升级

### 背景与目标

目前aladdin日志缺少xpath，发送日志相对比较麻烦，需要升级

### 进度

本周开发中 - 完成异步拼接 tc 跳转链接通用函数

### 后续

下周 - 添加xpath，监控区域移至 body 下，在基础库中添加JS发日志方法。

## fis 升级，支持 activity

### 背景与目标

结果页中添加了 activity，阿拉丁需要支持模板相关 activity 开发以及路径注册等。

### 进度

1、添加 \_\_getAmdUri 统一函数，使用后可取到 activity 的路径。  
2、测试时支持 activity 文件的发布  
3、配置 activity 的模块ID  
本周已完成  
相关文档：http://sfe.baidu.com/#/superframe/activity开发帮助

## 值周

### 进度

1、线上问题跟进 - 模板数据不展现、图片加载缓慢、自然结果跳转失败等等
2、线下答疑 - 组件使用问题、旧代码维护问题、流程问题、规范问题等等
3、codereview
4、上线过程中问题跟进







