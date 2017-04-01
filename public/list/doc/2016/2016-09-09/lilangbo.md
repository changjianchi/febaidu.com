# 李浪波

> 从2016-09-05号到2016-09-09


## 规范  
    1. mip-validator 校验规则

        #### 背景与目标

            mip-validator 是一个支持 npm 安装，同时支持网页校验的 MIP 校验工具， 校验规则就是为校验工具提供一套符合 MIP 规范的规则。

        #### 完成情况

        - 进度：

            1. MIP 相对路径检查：
                -『禁用』：以单斜线开始，如'/ext/'
                -『允许』： 1）双斜线'//', 2）'../', 3）直接字母 等
            
                升级细节：
                    - link 的 href
                    - mip-img 的 src
                    - mip-video 的src 和poster
                    - mip-audio
            
            2. input 标签校验规则升级, 允许父节点为 mip-form 的input标签
            
            
            站长平台升级

                8月31号上线完成


    2、资讯 mip 迁移  工作量一评估，11天/人,黎明跟进，已在迁移 9月初上线小流量
    
    3、[无进展，等待odp path规则上线]SF-MIP 增加手百调起小耳朵逻辑，bug list fixing，体验升级计划已给出,已上线。本周沟通 odp 需求，准备将域名的 path变成 sf/mip，同步的 url 进行加密处理

    4、 layout 升级计划。组件支持layout本周已全部完成

    5、网盟广告：计费功能已上线，mip 开流量验证阶段，验证一周

    6、top 站点 mip 页面批量测试：

    7、fixed 在 sf-mip 下的技术方案已产出，在测试兼容性，等兼容性测试完成后开完成组件功能。本周开发完成，9月9号开始测试

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
    
    #### 视频组件升级

        描述：视频组件功能升级，具体功能细化：
        视频组件支持 iframe 播放（手百下用手百插件）
        视频组件轻量化（拆分视频组件功能）
        进度：开发中，预计（9.7）提测
        广告 layout 升级
        
        描述：广告组件 layout 适配不同浏览器升级
        进度：开发已完成，已提测（9.1），预计（9.2）上线
    #### mip-sidebar
        
        描述：通用菜单组件
        进度：
        开发完成（8.31），依赖 fixed 和 action 机制，
        delay下周三（9.7）提测，
        下周五（9.9）上线
    #### mip-accordion（接@传梼）
        
        描述：手风琴组件（列表展开收起）
        进度：测试完成，预计下周一（9.5）上线
        mip-anim（接@传梼）
        
        描述：动态图片组件（如 gif图）
        进度：测试完成，预计下周一（9.5）上线
    ####  mip-fit-text（接@传梼）

        描述：自适应字体组件
        进度：已提测（8.26）
        
    #### mip-fx-flying-carpet

        描述：未来显示全屏广告，在页面上使用一个固定高度的窗口来看全屏的广告内容
        进度：9月5号提测

  
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

 
