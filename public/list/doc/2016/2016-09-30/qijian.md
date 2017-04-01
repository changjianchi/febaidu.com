# 齐健

> 2016-09-26 - 2016-09-30

# mip

## 核心代码进度  

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

08-29 - 09-02  
1、animate  - done   
2、gesture（完成基本代码，完成三个基本手势 tap、doubletap、swipe）  -  done  
3、fetch、fetch-jsonp （polyfill）  -  done  
4、mip-base.less  - done  
5、内置组件移除 zepto  -  done  

09-05 - 09-09  
1、event-action  - done   
2、代码提测   - done  
3、基础代码测试页面（包含基础库代码的大部分功能）- done     
4、组件开发文档（近一个月新增的模块文档以及如何替代 zepto）  - doing 周末完成  
5、本次修改整体打包，上线 1.1.0 版本  - doing，测试未完成  

09-12 - 09-14  
1、修复测试后的BUG  
2、补充注释  

09-18 - 09-23  
1、v1.1.0修复测试发现的问题 & 上线 - done  
2、代码推送至github(私有仓库)  
3、增加单测 - doing  
4、编译&工具相关需求 - 整理&与孟珂沟通  
5、v1.1.0文档优化 - done  
6、整理组件规范 - doing  
7、代码修改（开源） -   todo  
8、手势增加多点 - todo  

<div style="color: #f00">
09-26 - 09-30
1、目录整改 - done  
2、整体增加单测 - done  
3、补充注释 - doing　
4、新增mip-extensions，并迁移两个典型组件 - done
</div>
　
　


后续todo:  
1、内部开发的组件移除 zepto  
2、增加单测  
3、手势增加多点
4、修改代码(开源计划)  
5、animate 完善



排期 

09-26   -   09 - 30  
1、增加单测  
2、修改代码（开源计划） 

10-08  -  10 - 14  
开源 - 具体看进度
  
 
