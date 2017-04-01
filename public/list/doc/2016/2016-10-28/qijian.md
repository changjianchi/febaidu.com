# 齐健

> 2016-10-24 - 2016-10-28

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

09-26 - 09-30
1、目录整改 - done  
2、整体增加单测 - done  
3、补充注释 - doing　
4、新增mip-extensions，并迁移两个典型组件 - done

10-08 - 10-14  
1、注释整理 - done    
2、代码风格统一 - done  
3、联调核心代码编译工具 - doing    
4、mip上线流程和静态资源引入方案 - 本周产出初版方案

10-17 - 10-21  
1、联调核心代码和组件编译工具 - done  
2、核心代码编译工具升级支持dev、test模式 - done　
3、写组件示例 - done  
4、组件迁移 - doing。周五完成，下周提测  

10-24 - 10-28  
1、追查uc广告BUG - done，结论已发邮件，解决方案待讨论  
2、组件迁移新工程

    进度：10.24提测，10.26测试完毕。10.28使用新机制上线组件  
    PS：组件迁移至新工程后可以优化当前组件开发编译、组件文档等一系列组件开发的问题。  

3、静态文件上线流程及引入方案更新  

    背景和目的：  
    1、解决站长文件更新问题 - 手动更新版本成本太高  
    2、减少组件上线的风险，目前为纯手动操作。  
    3、组件上线规范化  
    进度：  
    1、修改线上静态资源缓存策略 - OP已上线  
    2、已出方案，11月4日前开发完毕   

4、MIP页面闪动问题  

    背景：MIP由于使用web components机制，目前使用JS引入组件CSS。进入页面时页面展现会错乱。  
    进度：  
    1、方案一：组件加载完成后再展现页面 - 周四完成DEMO，DEMO页展现时间从370MS增加至600MS，方案废弃  
    2、其它方案继续调研。  

5、mipmain速度打点 @李兆明  

    背景：速度打点，MIP速度统计以及做为后续优化的依据。  
    进度及排期：  
    1、10.26确定方案  
    2、10.27开发完毕  
    3、11.01上线

