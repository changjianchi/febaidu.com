# 李浪波

> 2016-08-22 ~ 2016-08-26


## 规范  
    1. mip-validator 校验规则

        #### 背景与目标

            mip-validator 是一个支持 npm 安装，同时支持网页校验的 MIP 校验工具， 校验规则就是为校验工具提供一套符合 MIP 规范的规则。

        #### 完成情况

        - 进度：

            前端校验工具

            - 校验工具已发布（8.25）
            - 在线校验地址：http://180.76.174.107:8080/
            - 命令行校验工具安装及使用参考文档：http://gitlab.baidu.com/MIP/mip-validator/blob/master/docs/how-to-use.md

            站长平台升级

            最迟8月29号上线完成


    2、资讯 mip 迁移  工作量一评估，11天/人,黎明跟进，已在迁移 9月初上线小流量
    
    3、SF-MIP 增加手百调起小耳朵逻辑，bug list fixing，体验升级计划已给出,已上线。本周沟通 odp 需求，准备将域名的 path变成 sf/mip，同步的 url 进行加密处理

    4、 layout 测试完成，22号补充文档说明，已上线并同步官网

    5、网盟广告：需求沟通，提供 top wise 结果页域名做白名单。对方下周一启动开发。本周最后一次技术评审，对方已给排期

    6、产出外部站长开发组件：已产出[github 地址](https://github.com/mipengine/mip-plugins/tree/master/extensions)

    7、fixed 在 sf-mip 下的技术方案已产出，在测试兼容性，等兼容性测试完成后开完成组件功能

## 核心代码

    基础代码完善  
```
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
```

## 组件  
    - 进度：
    
        ##### mip-sidebar

        - 描述：通用菜单组件
        - 进度：预计下周四（9.1）提测
            
        ##### mip-accordion（接@传梼）

        - 描述：手风琴组件（列表展开收起）
        - 进度：已提测（8.26）

        ##### mip-anim（接@传梼）

        - 描述：手风琴组件（列表展开收起）
        - 进度：已提测（8.26）

        ##### mip-fit-text（接@传梼）

        - 描述：自适应字体组件
        - 进度：
    
    - 备注: 8月26日提测, 后期转交@王培

    ### 3. MIP组件 layout升级

    #### 背景与目标
        
        mip组件适配多种layout

    - 进度：
        - mip-img DONE
        - mip-iframe DONE
        - mip-appdl DONE
        - mip-audio DONE
        - mip-form DONE
        - mip-video DONE
        - mip-share DONE
        - mip-ad DOING
    
## 文档 

#### 背景与目标
    
    为mip发版准备完善的文档
    
#### 完成情况

- 校验list文档更新并徒步官网（8.10）

```
- script 标签升级，允许 mip 所需js，以及type为 application/ld+json 
```
- mip-video 组件文档更新

- mip-link 组件文档更新

- mip-carousel 图片轮播组件文档更新，增加属性说明

 
