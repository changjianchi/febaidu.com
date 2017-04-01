# 李浪波

> 从2016-11-28到2016-12-02        

## 本周相关工作和 mip 规范

1. mip-validator 校验规则（无更新）

    背景与目标

        mip-validator 是一个支持 npm 安装，同时支持网页校验的 MIP 校验工具， 校验规则就是为校验工具提供一套符合 MIP 规范的规则。

        spider 大环在 mip 网页抓取时，对是否符合 MIP 进行校验

    完成情况

    - spider校验框架长线方案

        12月2号上线

2、广告：
    top站点回归 check。目前 已经完成所有第一批 top 站点的回归和上线工作

    计划记入内容联盟


3、mip aladdin 机制打通

        见下面单独的项目描述

4、mip cache
    
    cache页面实时校验：todo 未启动  

    MIP-cache清除功能已于11月30号完成上线:http://zhanzhang.baidu.com/mip/index

    图片、网页、css 线上异常监控

    支持去掉网盟反屏蔽广告的 mip 页面特征，17年1月启动

5、top 站点反馈的 bug 持续跟进
    
    1）华为 meta8 悬浮元素定位 bug：已解决

    2）分享组件 ios qq 浏览器问题：解决中

    3）部分浏览器回退白屏问题：已解决

    4）mip/sf 多次来回交互导致手百卡死问题：已解决

    5） android 手百，sf-mip 上滑导致页面刷新问题：解决中


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
    1、模板c_base已上线，fe 接入文档已产出初版

    2、阿拉丁平台随时上线

    3、tera/spider 已上线

    4、离线建库测试完成, delay 到12月7号上线
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





## 核心代码
1、AE平台联调
    状态：正在接入
2、华为MATE8 fixed元素错位BUG - 已修复
3、IOS9 safari 回退白屏BUG - 已修复
4、上线校验机制
    进度：本周出方案，排期12-14开始
    方案：在上线流程中新增JOB
    JOB功能：每天同步几个top站点的源码，上线前替换静态文件地址到本地测试机，并自动在各机型浏览器下截图，截图后需要人工检查是否正常。
5、animate模块
    进度：本周进入开发，开发已完成，周五准备测试DEMO和提测

```

## 组件  

### 一、本周完成内容：
    1、新增站长组件8个：

    ** 本周新增 **
    mip-ls-pagination 招聘信息列表的分页功能
    mip-xem-comment-duoshuo 多说评论框通用代码稳定版组件
    mip-wkfun-club 寻医问药页面功能组件，提供了一些dom操作功能
    mip-news-recommend 百度资讯垂类新闻和热点推荐组件
    mip-huajun-downtag 点击切换组件
    mip-huajun-fixdnav 固定nav组件
    mip-huajun-loadmore 点击加载更多组件
    mip-dad-appdownload 皮皮高速下载

    ** 历史组件 **
    mip-youth-tb360 青网移动适配页头部360广告
    mip-youth-ttyd 青网移动适配页精彩推荐广告
    mip-global-script 页面逻辑公共脚本
    mip-down-dropload 用来支持页面下拉加载
    mip-down-script 页面逻辑脚本集合
    mip-ecms 帝国cms,整合包主要包括ecms中调用的js如点赞,阅读量,评论等
    mip-changyan 支持在线评论插件 畅言
    mip-xueyou-list 学优网list组件
    mip-xueyou-ad 学优网广告
    mip-xueyou-article 学优网文章阅读组件
    mip-ajax-data 游侠网用来触发元素ajax异步加载数据到指定容器
    mip-yiqibazi-tap 点击切换组件
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

    mip-list 列表 开发中，release 时间待定
    mip-form 搜索框支持自动补全，监听回车事件 已上线
    mip-appdl 下载 修复fixed悬浮在百度 mip 下的滑动体验问题 已完成
    mip-carousel 轮播图 添加轮播指示器 测试中
    mip-video 视频 支持 http 跳转播放 测试中
    mip-gototop 快速回顶升级 测试中 已上线

    审核中的组件：mip-ls-pagination，mip-wkfun-club，mip-recommend，mip-ishowx，mip-xzw-article，mip-91jm-ckdevice，mip-ad-random，mip-huajun-fixdnav

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
    mip-gototop 快速回顶
    mip-vd-tabs tab 切换

    
