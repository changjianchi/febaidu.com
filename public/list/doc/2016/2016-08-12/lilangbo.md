# 李浪波

> 从2016-08-08到2016-08-12


## 规范  
    1、mip校验标准

        1、css和js主文件更新需向下兼容

        2、去掉 mip-ad 广告组件的相关校验

        3、去掉 mip-baidu-tj 组件的相关校验

        4、去掉 mip-img组件的 data-carousel属性的校验

        5、增加用户 script 校验

        spider和站长平台反馈排期中

    2、资讯 mip 迁移  工作量一评估，11天/人,黎明跟进，已在迁移
    
    3、SF-MIP 修复 resize 的 bug，支持 www_zhidao_normal，均已上线

    4、调研和设计 placeholder 功能，将有尺寸的 mip 标签做占位处理。8.8启动开发，下周内完成 由于有高优 bug，delay 到下周一完成，并提测

## 核心代码

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

## 组件  
    广告：

        本周支持全网推荐
        已上线：https://www.mipengine.org/doc.html#../docs/4-widget/ad-widget/ads/ad-qwang-widget.md 

    视频  

        已上线

    form 表单 

        8月8号上线
    
    统计  

        调研 google 统计
    
    font 

        测试中
    
    gototop：

        已完成，待上线

    mip-embed

        广告别名组件，已上线

    mip-sidebar

        测试中

    mip-fx-flying-carpet

        依赖底层模块layout 和 customElement

    mip-audio

        已上线
    
     mip-askad 
        120ask 广告(已上线)
    
## 文档 

#### 背景与目标
    
    为mip发版准备完善的文档
    
#### 完成情况

- 进度：更新各种组件文档

 
