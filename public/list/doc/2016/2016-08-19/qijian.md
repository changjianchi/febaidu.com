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

08-08 – 08-12    
1、增加 rect 组件（获取dom元素rect，页面scroll，解决iso scrollTop scrollLeft bug）    
2、增加 fn、document 组件（throttle、ready 等方法）    
3、增加 Promise （polyfill）    
4、增加 resources 模块（资源管理）        
5、升级 customElement、element （修改生命周期）    
6、升级 viewport （升级一部分接口和实现方式）    
7、增加 layout 模块 （@李浪波）    
8、提测、升级版本    

<div style="color:red">
08-15 - 08-19   
1、提测、修复测试发现的问题。预计8月22上线当前的测试版本    
2、viewport升级 - 新增 scrollHeight、scrollWidth、setScrollTop 等接口，增加事件机制，暂时除移 gesture   
3、升级 Observable，提供同时 trigger 多个事件和绑定多个事件的模式，
       并且增加 mixin 功能，可以把事件机制扩展到其它类。  
4、gesture 升级为多例模式，可绑定多个 dom 元素    
5、增加 css 模块，去除 zepto 依赖
6、rect 模块升级，修复 iframe 下位置计算的问题
</div>
　　

基础代码整体规划   
1、custom Element、zepto、element  -   done    
2、resources、rect        -    done    
3、layout       -    done    
4、viewport升级   -    done    
5、增加单测    
6、util（document、fn、base64…）    
7、viewer   -   done     
8、animate、motion    
9、内置组件升级  
10、移除zepto  
11、validator、sanitizer  
12、log、error  


排期    
1、08-22 - 08-26    
     增加 event-dom 模块，可以对dom绑定事件， zepto 移除依赖&内置组件升级依赖      
     增加 dom 模块 - dom 操作，zepto 移除依赖    
     增加 animate 模块     
     内置组件升级    
2、08-29 - 09-02    
     内置代码移除 zepto，扩展组件改成异步加载 zepto，后续逐渐删除公司内部代码引入的 zepto    
     增加 error  log 模块    
3、暂未排期：debug、校验工具、单测测试用例、layout完善   
