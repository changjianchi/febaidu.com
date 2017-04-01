# 齐健

> 从 2016-08-08 到 2016-08-12

## superframe

### 背景

superframe 情景页(sf-app、sf-card)日常维护

### 进度

1、增加extra统计参数 - done    
2、fix sf-options bug  -  done
3、支持log相关需求@李佳隆


## mip

### 背景

mip 框架

### 进度

基础代码完善  

08-01 – 08-05     
1、customElement 升级，将dom元素与customElement解耦 && fix customElement bug    
2、jquery 迁移至 zepto    
3、registerElement 升级，修改注册组件方式，增加api。    
4、目录整理，拆分    

<div style="color: green">
08-08 – 08-12    
1、增加 rect 组件（获取dom元素rect，页面scroll，解决iso scrollTop scrollLeft bug）    
2、增加 fn、document 组件（throttle、ready 等方法）    
3、增加 Promise （polyfill）    
4、增加 resources 模块（资源管理）        
5、升级 customElement、element （修改生命周期）    
6、升级 viewport （升级一部分接口和实现方式）    
7、增加 layout 模块 （@李浪波）    
8、提测、升级版本    
</div>
　

基础代码整体规划   
1、custom Element、zepto、element  -   done    
2、resources、rect        -    done    
3、layout       -    done    
4、viewport升级    
5、增加单测    
6、util（document、fn、base64…）    
7、viewer    
8、animate、motion    
9、内置组件升级  
10、移除zepto  
11、validator、sanitizer  
12、log、error  


排期  
1、viewport升级 & 增加单测    08-15 – 08-19  
2、viewer、animate、内置组件升级    08-22 – 08-26  
3、移除 zepto、增加 zepto 替代方法   08-29 – 09-02  
4、页面验证、log、error 模块    09-05 – 09-16   

