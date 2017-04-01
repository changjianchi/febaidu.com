# 李佳隆

> 从2015-12-28到2015-12-31


## 本周跟进
* 擎天柱-imglist模板组件
* 2号项目-音乐
* scroll 联动tab滑动组件


## 擎天柱-imglist模板组件

### 背景

抽离公共组件,模板复用,解放生产力

### 完成情况

* 基本开发完成,已上线模板组件,后续会继续优化数据接口,已更新[开发文档](http://sfe.baidu.com/#/阿拉丁/无线网页搜索/开发规范/擎天柱-imglist模板组件)

### 效果预览

<img src="img/lijialong01/super_imglist.png" width="300px"/>

## 2号项目-音乐

### 背景

在满足用户单曲精确查找的需求基础上，充分利用搜索结果的后面点击率较少的区域，激发用户在音乐上的需求。  
Query示例：小幸运（只有一位歌手唱过）  
依赖张靓颖（精准明确歌手与歌曲）  
影响面：首先针对可以在线播放的百度音乐资源的，排在首位的资源。  
初步按照圈定歌曲的方式，小流量测试10w/day  
全量约25w/day  

### 完成情况

*  已给出xml,rd预计1.6日给出线下环境,预计1.11号开发完成,开始联调

### 效果预览

<img src="img/lijialong01/music.png" width="300px"/>

## scroll联动tab滑动组件

### 背景

目前pm有滑动tab到最后一个时,自动切换到下一个tab的需求,故封装一个组件与tab,iscroll一同使用

### 完成情况

基本开发完成,待qa测试,封装成amd组件(擎天柱,2号项目优先级较高,故延后)