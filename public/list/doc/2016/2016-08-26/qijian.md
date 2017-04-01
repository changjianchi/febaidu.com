# 齐健

> 从 2016-08-22 到 2016-08-26

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

08-15 - 08-19    
1、提测、修复测试发现的问题。预计8月22上线当前的测试版本    
2、viewport升级 - 新增 scrollHeight、scrollWidth、setScrollTop 等接口，增加事件机制，暂时除移 gesture   
3、升级 Observable，提供同时 trigger 多个事件和绑定多个事件的模式，
       并且增加 mixin 功能，可以把事件机制扩展到其它类。  
4、gesture 升级为多例模式，可绑定多个 dom 元素    
5、增加 css 模块，去除 zepto 依赖
6、rect 模块升级，修复 iframe 下位置计算的问题

<div style="color:red">
08-22 - 08-26    
1、mip v1.0.1 上线    
     changelog:    
     - 生命周期修改和补充。inviewCallback、viewportCallback    
     - 升级 viewport。增加  changed 事件；增加一些通用接口 getWidth、getHeight、getScrollHeight、getRect ...    
     - 增加 Resources 模块。负责mip资源管理和生命周期相关调度    
     - 增加 layout 模块。对 mip 资源做一些布局相关处理。
     - 增加一些通用模块。fn、rect、css、event ...    
     - 修复Observable、viewport bug   
2、增加 dom 模块   -  补充一些兼容不好的方法 contains、closest 等。done    
3、增加 dom-event 模块  -  对于原生事件支持不好的方法做了一些补充，增加 delegate 方法。done
4、引入 naboo -  naboo 还需要升级，目前用起来有些麻烦   
5、修改内置组件  -  doing   
6、require.config 增加 jquery 引入 - done
</div>
 　

基础代码整体规划   
1、custom Element、zepto、element  -   done    
2、resources、rect        -    done    
3、layout       -    done    
4、viewport升级    -   done    
5、增加单测    
6、util（document、fn、base64…）    
7、viewer    
8、animate、motion    
9、内置组件升级  
10、移除zepto  - doing    
11、validator、sanitizer  
12、log、error   

排期  
1、viewport升级 & 增加单测    08-15 – 08-19  
2、viewer、animate、内置组件升级    08-22 – 08-26  
3、移除 zepto、增加 zepto 替代方法   08-29 – 09-02  
4、页面验证、log、error 模块    09-05 – 09-16   

排期 update (08-19)    
1、08-22 - 08-26      
     增加 dom 模块 - dom 操作，zepto 移除依赖    
     增加 animate 模块     
     内置组件升级    
2、08-29 - 09-02    
     内置代码移除 zepto，扩展组件改成异步加载 zepto，后续逐渐删除公司内部代码引入的 zepto    
     增加 error  log 模块    
3、暂未排期：
     debug、校验工具、单测测试用例
     layout、gesture、viewer 完善
     
 
