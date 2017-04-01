# 李浪波

> 从2016-11-14到2016-11-18           

## 本周相关工作和 mip 规范

1. mip-validator 校验规则

    背景与目标

        mip-validator 是一个支持 npm 安装，同时支持网页校验的 MIP 校验工具， 校验规则就是为校验工具提供一套符合 MIP 规范的规则。

    完成情况

    - 校验规则升级(11.16)

```
支持多重电话号码形式
从1xxxx到任意形式包括 010-1234567 400-400-400等
支持新版静态文件：mip.js, mip.css
静态文件版本更新
textarea
标签不允许使用 更新为 父标签必须是mip-form

mip-ad 标签type属性规定为强制属性，不做取值限制
由于新增广告组件类型增多，如果每次都升级规则添加类型不是最合适的解决办法，所以升级规则，去掉type的取值限制。
mip-video 去掉poster参数为必须参数的限制
组件升级使poster不再是必须属性，所以去掉相关校验
mip-pix src的属性值必须是 https://,http:// 或者 // 增加支持//的规则
之前的校验规则强制是 https:// 或者 http://，增加可以是//xxx 的情况，为扩展校验
```

    - spider校验框架长线方案

        1104:长线方案 站长平台 RD 采用 c++版本开发，预计开发两周测试一周，已启动开发,11月底上线。

        目前处于低优维护状态

2、涉及规范更新：
    
    1)、站长反馈电话协议只支持手机号形式，其他电话号码形式校验不能通过

    预计 11.11 前端校验升级完成

    2)、校验支持mip.js新规范，所有组件 js 和 mip 的 js 站长均不用版本

3、广告：
    top站点回归 check。目前 已经完成近10家的回归工作


4、mip aladdin 机制打通

        见下面单独的项目描述

5、mip cache
    
    cache页面实时校验：todo 未启动  

    清 cache 接口： http://wiki.baidu.com/pages/viewpage.action?pageId=235318047 

        短线方式已上线，能提供给百度内网处理，长线方案11月底

    长线渠道：

    52mins 自动更新

6、mip cache 容错方案

    已上线。cache 服务失败容错在nginx做跳转，排期开发中

8、120ask 广告定位不准问题
    
    ip.120ask.com 这个接口如果获取不到用户 ip，升级组件发一条日志到你们服务器做监控，需要提供一个日志的 https 的服务器接口以及需要的一些页面信息。这种获取不到用户 ip 的情况将不再发送120ask 的自有广告请求，11月11号上线，需要对方实时观察下自有广告的请求量和日志的情况


## mip aladdin 机制打通

### 背景：

    在引入阿拉丁资源中，有部分的外跳链接是 MIP 化的页面，可以使用 MIP 页在结果页打开的方式。例如目前线上 query:"奥运” 的阿拉丁结果（并非自动打标，而是硬编码到数据中）
    MIP 页有严格的规范，可以参照上面的 MIP 介绍，需要进行严格的打标记、屏蔽、退化等方式保证线上的良好用户体验

### 排期计划：
    
    排期为：
        10.17 ~ 10.21  编码
        10.24 ~ 10.28  测试
        10.31 ~ 11.4   前后端的联调
        11.7 ~ 11.11   上线

    具体分模块排期：

        建库工作        （雷杰），        9月19日可以启动，    10月21日完成开发测试工作
        错误日志回写 （孙巍巍），        非核心依赖，        依赖阿拉丁死链检测长线方案，短线先不支持
        平台工作        （浩玮），        10月初可以启动，     10月底完成相关开发测试工作
        Spdier           （孙权），        10月18号可以启动，   11月初完成相关开发测试工作
        AE相关工作    （陈刚，晓辉）， 非主要路径，             9月16日前完成具体工作的方案确认

### 进展：

```
    1、阿拉丁平台（ready）、阿拉丁模板(ready)、阿拉丁数据建库(依赖tera&spider接口，未ready)三方线下联调 delay5天 到11月21号，改成所有模块大联调。
    2、tera&spider：
        tera提供fake的数据和tera访问idk 11月11号已提供 delay 2天
      提供接入spider的接口  11月15号提供 delay 2天
    3、EC 的校验模块 月底上线 @程刚 @光宇
```

    错误日志回写:
        讨论了在 GSS/ala-root/US/odp/模板的现有情况的可行性，结论是都不能快速短线支持，由于阿拉丁架构在推阿拉丁死链检测，也是同一波 RD 开发，和这个需求类似，所以结论是和阿拉丁死链检测同时进行，长线计划需巍巍给出排期，目前看年底有可能

    MIP阿拉丁的检测详细方案:

    ```
        阿拉丁：
            （1）       建库时，取站长认为符合mip规范的xml里的原始url，调用spider提供的基于Tera的mip类型的查询api接口，得到该url是检测过符合mip规范，检测过不符合mip规范，未检测等状态，用于确认是否能以mip形式进行展示。
            （2）       对于建库集合，基于自己的需求，如页面是否变化，是否进行去重等，过滤出待检测的阿拉丁url集合
            （3）       调度spider提供的抓取检测api，发送到Spider进行抓取。
        Spider：
            （1）       主要提供两个API接口：
            查询MIP类型的接口，查询Tera表里这个url的mip状态等提供，秒级返回；
            抓取检测API接口，接收阿拉丁的检测需求。
            （2）       MIP检测功能开发：
            存储上：实时死链系统，新建Tera表，存储阿拉丁的url符合mip规范的信息，上次检测时间等，并设置一定时间的TTL。
            开发上：接收阿拉丁的检测需求，发送到spider进行抓取检测；
            对于阿拉丁来源，且符合MIP规范的url，实时写入Tera中。
            检测上，spider还是会基于站点的压力控制，进行均衡的抓取，避免把站点抓挂的情况。
    ```

        流程如下图：
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/b5403c0435d30828077c83553579e0da/image.png)

        Mip url年底大概在5000w（总量*5%） 左右，按照更新频率、增量验证等因素来看，每天需要送检的大概在20%左右，大概1000w

### 阿拉丁接入短线方案：
    
    各个资源方着急自己所负责的mip资源上线，可以按照奥运的方案上线:阿拉丁的 mip url 标记完全由 xml 控制，直接站长标记

    缺点：
        1、mip 合法性和规范性无法保证，存在不符合规范也会展现到线上的风险，各资源方需要人工check资源的风险性；
        2、长线方案OK之后，需要迁移数据。

    优点：可以即时上线。





## 核心代码(齐健)

    基础代码完善  
```
1、mip.js 上线后的文档更新等  
    a、官网文档中的mipmain替换为mip，组件路径替换 - 已完成  
    b、github文档组件路径替换 - 已完成  
    c、写一篇mip.js v1版本的文章 - doing  

2、animate模块升级，移除Naboo，只提供基本动画  - 开发完，待测  
3、上线前的自动化检测  
    周五出基本方案  
4、手百下，站长的页面图片横滑失效问题跟进    
    原因：手百BUG  
    解决方案：提供了基本解决方案给站长   
    后续：推进手百改BUG - 未开始  

```

## 组件  

### 一、本周完成内容：
    1、新增站长组件6个：

    ** 本周新增 **
    mip-changyan 支持在线评论插件 畅言
    mip-xueyou-list 学优网list组件
    mip-xueyou-ad 学优网广告
    mip-xueyou-article 学优网文章阅读组件
    mip-ajax-data 游侠网用来触发元素ajax异步加载数据到指定容器
    mip-yiqibazi-tap 点击切换组件

    ** 历史组件 **
    mip-hk-call 好看调起客户端
    mip-hk-fcvideo 好看视频组件
    mip-hk-showarticle 显示文章更多详情
    mip-hk-feed 好看feed流
    mip-hk-keep 好看详情页下载app安装打开对应详情页接口
    mip-hk-share 好看分享插件
    mip-html-tabs TAB滑动、显示、隐藏、元素跳转等操作
    mip-filter  筛选组件，在mip官网有引用 
    mip-nav-slidedown  实现响应式的菜单，在mip官网有引用 
    mip-wkad-config  寻医问药广告配置组件 
    mip-wkad  寻医问药广告组件
    mip-wkfun 寻医问药页面功能组件
    mip-stats-ajk 安居客统计组件
    mip-360doc-script 360doc网业务逻辑组件
    
    mip-ad 广告  优化 baidu-wm-ext类型的代码方式

### 二、bug fix、优化、开发后续计划：

    mip-ad 支持图+广告 已完成】11.16 
    mip-list 列表 开发中，release 时间待定
    mip-form 搜索框支持自动补全，监听回车事件
    mip-appdl 下载 修复fixed悬浮在百度 mip 下的滑动体验问题
    mip-accordion 轮播图 添加轮播指示器
    mip-video 视频 支持 http 跳转播放

    审核中的组件：TTJJ_PZ，mip-ecms，mip-down-dropload，mip-dp-script

### 三、release组件列表（未包含站长自身开发的组件）
    mip-carousel 多图轮播
    mip-iframe iframe
    mip-img 图片
    mip-pix 统计
    mip-video 视频
    mip-anim 动图
    mip-audio 音频播放
    mip-stats-baidu 百度统计
    mip-fixed 悬浮布局
    mip-form 表单
    mip-html-os 操作系统
    mip-lightbox 弹层
    mip-link 跳转链接
    mip-share 分享
    mip-stats-tianrun 天润统计
    mip-ad 广告
    mip-sidebar 侧边栏组件
    mip-accordion 折叠组件

    