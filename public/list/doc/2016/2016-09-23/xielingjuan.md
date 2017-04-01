# 谢玲娟

> 从2016-09-19到2016-09-23

## 本周跟进

- 资讯
    - 时效性we_realtime/realtime中间页改版首尾工作
        - 搜索框样式以及逻辑优化
        - 时效性结果图片已经样式优化
        - 兼容小流量方案
    - 时效性中间页rt_normal 0流量bug修复
        - 图片https兼容
        - 刷新去掉pn参数
    - 时效性wise_realtime 
        - 升级模板，新增title和时间轴样式
        - wise_realtime是带预处理的老模板，跟pm沟通后节后计划迁移
    - 官微样式实验
        - 官微强样式新增两组实验组，分别是加转发样式、去除头像还换成微博图片。
        - 官微弱样式新增一组实验组，增加转发样式
    - 图文详情页
        - 0流量bug修复
        - 相关推荐替换成广告样式
        
## 1. 时效性we_realtime/realtime中间页改版收尾工作

### 背景

时效性新闻的中间页线上样式太丑陋，想要替换成sf2.0的新样式。基本功能已经0流量，还需要优化样式，并且新增小流量入口。

### 完成情况

- 进度：9.23联调+提测，预计9.28上线小流量。

## 2. 时效性中间页rt_normal 0流量bug修复

### 进度

9.21已修好bug并且上线。

### 预览地址

m.baidu.com:8003/sf?word=奥运&pd=realtime_content&title=焦点新闻

## 3. 时效性wise_realtime 

### 背景

线上wise_real_time模板进行优化，添加title和时间轴样式

### 进度

9.21上线模板。目前线上无资源。

### 预览地址

https://wwwhttps.baidu.com/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=wise_realtime&dev_path=searchaladdin&dev_tpltype=default&sid=99999_102164&dev_online=1&wd=%E5%A4%9Atab%E6%8B%BC%E6%8E%A5%E6%B5%8B%E8%AF%95%E5%8D%A1&word=%E5%A4%9Atab%E6%8B%BC%E6%8E%A5%E6%B5%8B%E8%AF%95%E5%8D%A1

## 4. 官微样式实验

### 背景

微博新增了对外的转发接口，因此wise的官微想做一些实验尝试。

### 进度

9.22评审完。排期是，9.29开发完毕，十一节后来了联调。

## 5. 图文详情页bug修复

### 进度

bug和锐锅一起看，节前修复完上线。






