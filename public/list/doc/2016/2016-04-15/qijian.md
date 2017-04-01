# 齐健

> 从2016-04-11到2016-04-15


## 上线时间持续跟进优化

### 背景与目标

目前wise上线时间比较久，比PC慢了一倍多。需要持续跟进和优化上线时间，以减少上线人力成本和快速响应紧急需求。

### 进度

1、上线过程中 sleep 问题 - 本周因上线基本都在非正常上线期，具体时间无法给出。
2、nginx重查升级后，去掉高峰期限制 - 目前线上不稳定，nginx调整有依赖

## 哥伦布2.0机制

### 背景

原有机制对2.0样式支持的不够好，一些需求支持不了。需要升级哥伦布机制

### 进度

1、长线方案把千岛湖、哥伦布垂类的机制合并在一起。    
    涉及FE的改动及排期：   
    a、平台升级支持  @小琴    
    b、修改www主模板支持模板渲染    @雪冉    
    c、修改阿拉丁统计，支持组、簇相关日志    @雪冉    
    d、修改阿拉丁基础库。支持组、簇的JS渲染。以及层级间的绑定。    @雪冉    
    e、开发2.0样式中的组、簇模板。    @齐健    
    f、sigma机制支持到组和簇（短线）。    @齐健
    排期：除平台外  4月12日开发完，4月13联调，4月18提测，4月25上线。平台因高优支持上线优化，时间待定。    
2、哥伦布1.0数据问题沟通，AE数据到模板无法做数据映射 - 长线在odp做数据处理    
3、栅格化问题修复&哥伦布短线栅格修复 - 已上线
4、sigma机制跟右侧推荐冲突BUG - 周五上线

## tc跳转相关

### 背景

目前模板中tc链接的生成比较混乱，许多项目有依赖，需要统一

### 进度

1、l和srd参数移至odp。需要odp插件支持，支持后部分写死l和srd参数的模板开始迁移。- 4月25日上线
2、线上有问题的链接整理 - tc同学给出了日志。没时间跟  
3、给出 safari 跳转失败链接列表 - 无进展    


## 日志相关

### 背景

日志后续需要迁移到webb，短期内需要把现有日志迁移到webb格式，供ubs迁移。   

### 进度

1、哥伦布sto问题沟通 - 由刘悦跟进   
2、clk_info 可用性问题 - 跟进后发现 map 模板自己发了交互日志，推进改成规范的统计