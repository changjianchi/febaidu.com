# MIP 

> 2016-12-12 到 2016-12-16

> 组员：孟轲、浪波、王培、齐健、佳莹、传梼、吴鹏

## MIP核心代码

介绍

### animation

移除Naboo，mip只提供基本动画功能模块animation，复杂动画通其它方案实现。

#### 本周进展

- 测试完成
- 业务需求最好维护一套代码，由Naboo和Animate统一，精简动画库，由朱雷负责

### template

MIP需要提供template功能

#### 本周进展

已经测试完成，待上线

### html-filter

通过 template 模块的生成的代码需要过滤

#### 本周进展

无

### platform

识别平台，引擎，浏览器，系统版本等功能

#### 本周进展

- 完成开发

## mip 组件

### 已上线组件 20 个（未包含站长自身开发的组件）

组件名|功能
---|---
mip-carousel |多图轮播
mip-iframe| iframe
mip-img| 图片
mip-pix |统计
mip-video |视频
mip-anim |动图
mip-audio| 音频播放
mip-stats-baidu| 百度统计
mip-fixed| 悬浮布局
mip-form |表单
mip-html-os |操作系统
mip-lightbox| 弹层
mip-link |跳转链接
mip-share |分享
mip-stats-tianrun| 天润统计
mip-ad |广告
mip-sidebar| 侧边栏组件
mip-accordion |折叠组件
mip-gototop |快速回顶
mip-vd-tabs |tab 切换

### 本周跟进组件

#### 1. mip-share 分享组件（@王培）

##### 背景与目标
    
    解决 6s, 6sp ,ios8 , QQ浏览器下分享失败的BUG
    采用postmessage策略将分享信息传到父级进行分享

##### 完成情况

- 进度：已上线（12.14）

##### 效果图

- 暂无

#### 2. mip-video 视频组件（@佳莹）

##### 背景与目标
    
    功能升级，支持播放http

##### 完成情况

- 进度：
    - delay
    - 原因：依赖card上线后会不稳定复现老样式，截止12.16，OP正在定位

- 预览地址：http://transcoder.baidu.com/sf?pd=mms_mipvideo&old&dev_tpl=act_mip_video&title=%E8%A7%86%E9%A2%91&actname=act_mip_video&ext=%7B%22poster%22%3A%22https%3A%2F%2Fplaceholdit.imgix.net%2F~text%3Ftxtsize%3D35%26txt%3D375%25C3%2597210%26w%3D375%26h%3D210%22%2C%22src%22%3A%22http%3A%2F%2Fgss0.bdstatic.com%2F-b1Caiqa0d9Bmcmop9aC2jh9h2w8e4_h7sED0YQ_t9iCPK%2Fmda-gjkt21pkrsd8ae5y%2Fmda-gjkt21pkrsd8ae5y.mp4%22%7D&

##### 效果图

- 暂无

#### 3. mip-ad 内容联盟广告（@佳莹）

##### 背景与目标
    
    ssp 内容联盟广告

##### 完成情况

- 进度：已上线（12.13)后期需要提供详细的文档说明，指导站长如何选择不同的广告组件
- 预览地址：http://cp01-mipengine.epc.baidu.com:8089/mip/sspad_qa.html

##### 效果图

<table>
    <tr>
        <td><img src='../2016-12-09/img/wangpei07/wp01.png' width="300"></td>
    </tr>
</table>

#### 4. mip-stats-baidu（@传梼）

##### 背景与目标
    
    现有升级版本完善百度统计api的调用。已覆百度统计所有jsapi。

##### 完成情况

- 进度：今天（12.16）上线
- 预览地址：暂无

##### 效果图

- 暂无

#### 5. mip-stats-cnzz（@传梼）

##### 背景与目标
    
    现有升级版本完善cnzz统计api的调用。已覆cnzz统计所有jsapi

##### 完成情况

- 进度：今天（12.16）上线
- 预览地址：暂无

#### 效果图

- 暂无

### BUG FIX 组件

#### 1. mip-carousel 图片轮播轮播无效BUG（@王培）

- 原因：对非数组使用了forEach导致
- 进度：已上线（12.14）

#### 2. mip-video 视频组件安卓播放BUG（@传梼）

- 原因：video播放时，浏览器调起native播放器，导致在iframe下视频窗口漂浮BUG
- 进度：寻找解决方案...

#### 3. mip-fixed 悬浮组件meta自带浏览器BUG（@佳莹）

- 原因：组件内嵌fixed元素时，在 meta7自带浏览器滑动闪动问题 投票、bottom 类型在 body 有 padding 的情况下，展现会出现问题
- 进度：BUG FIX 中

#### 4. 编码校验提醒（@杨珺、王培）

- 原因：一些 MIP 页面中会有gbk编码，导致cache后乱码现象
- 进度：前端校验调研中

#### 5.  mip-form 表单组件 BUG@佳莹）

- 原因：https 下 action为http时报错
- 进度：12.16进入开发

#### 6.  mip-ad ad-qwang增加悬浮功能 BUG@佳莹）

- 原因：现有全网推荐广告不支持站长自己配置的悬浮广告，悬浮广告需要引入其他js
- 进度：12.15开发完毕，需要全网推荐同学修改投放代码，解决直接插入fixed元素问题

#### 7.  mip-share BUG@佳莹）

- 原因：在微信中点击分享给好友，提示图片样式错乱 [issue](https://github.com/mipengine/mip-extensions/issues/201)
- 进度：已修复（12.15上线） [截图及代码](https://github.com/mipengine/mip-extensions/pull/202)

### 后续计划

#### 1. mip-access(@吴鹏)

##### 背景与目标
    
    ACCESS能够允许发布者对页面内容进行访问权限的控制，通过内容标记和用户访问情况进行综合评价，从而实现对付费墙和订阅功能的支持。

##### 完成情况

- 进度：调研完成，12.16完成组内分享
- 预览地址：暂无

#### 2. mip-mustache（@王培）

##### 背景与目标
    
    模板组件，引入并封装第三方模板引擎

##### 完成情况

- 进度：12.19进入开发
- 预览地址：暂无


#### 3. mip-experiment A/B实验组件（@佳莹）

##### 背景与目标
    
    调研google的amp-experiment组件，给出调研报告并分享

##### 完成情况

- 进度：12.21开始调研


#### 4. mip-app-banner (@王培）

##### 背景与目标
    
    提供一个能直接调起app的组件

##### 完成情况

- 进度：待开发，调研中
- 预览地址：暂无

#### 5. mip-list（@王培）

##### 背景与目标
    
    列表组件，依赖mip-mustache

##### 完成情况

- 进度：待开发，有依赖

#### 6. 第三方组件(@王培)

##### 背景与目标

    - 支持第三方组件开发
    - 审核起开发代码
    - 上线第三方组件

##### 完成情况

###### 组件审核中

> mip-head

    - 审核：暂未通过
    - 进度：hold
    - 原因：组件目录不符合规范

> mip-xueyou-article

    - 审核：暂未通过
    - 进度：hold
    - 原因：未按照规范开发组件，使用相对路径

> mip-cr173

    - 审核：暂未通过
    - 进度：hold
    - 原因：未按照规范开发组件，组件目录不对，未通过fecs规范

###### 组件已上线

> 本周新增组件 10 个

组件名|功能|上线时间
---|---|---
mip-news-iframe-interface| 资讯下iframe双向通信接口|12.14
mip-xzw-article|星座屋mip改造插件|12.13
mip-ck-browser|根据不同浏览器展示不同的内容|12.13
mip-ck-location|根据不同地区展示不同的内容|12.13
mip-xem-buttons|自用buttons组件|12.13
mip-xem-dropdowns|自用dropdowns组件|12.13
mip-a5-loadmore|a5创业网逻辑组件|12.13
mip-haixue-contact|支持嗨学网咨询功能|12.09
mip-haixue-register|支持嗨学网手机注册功能|12.09
mip-fh-bus|改造两性详情页面的脚本代码|12.09

> 站长历史组件 40 个

组件名|功能
---|---
mip-ad-random|广告位随机
mip-yxdown-shielding-page|屏蔽问题页面
mip-iask-ajax| iask—ajax请求
mip-iask-business| 爱问商业广告组件
mip-iask-ext| 爱问详细页插件
mip-iask-report| 爱问举报组件
mip-html-ajax| 评论提交加载
mip-down-ppzs|皮皮助手
mip-xem-review| 自用获取随机评论组件
mip-muzi-appdownload| 木子app下载
mip-html-tabs| TAB滑动、显示、隐藏、元素跳转等操作
mip-ls-pagination| 招聘信息列表的分页功能
mip-xem-comment-duoshuo| 多说评论框通用代码稳定版组件
mip-wkfun-club| 寻医问药页面功能组件，提供了一些dom操作功能
mip-news-recommend| 百度资讯垂类新闻和热点推荐组件
mip-huajun-downtag| 点击切换组件
mip-huajun-fixdnav| 固定nav组件
mip-huajun-loadmore| 点击加载更多组件
mip-dad-appdownload| 皮皮高速下载
mip-youth-tb360| 青网移动适配页头部360广告
mip-youth-ttyd| 青网移动适配页精彩推荐广告
mip-global-script| 页面逻辑公共脚本
mip-down-dropload| 用来支持页面下拉加载
mip-down-script| 页面逻辑脚本集合
mip-ecms| 帝国cms,整合包主要包括ecms中调用的js如点赞,阅读量,评论等
mip-changyan| 支持在线评论插件 畅言
mip-xueyou-list| 学优网list组件
mip-xueyou-ad| 学优网广告
mip-xueyou-article| 学优网文章阅读组件
mip-ajax-data| 游侠网用来触发元素ajax异步加载数据到指定容器
mip-yiqibazi-tap |点击切换组件
mip-hk-call| 好看调起客户端
mip-hk-fcvideo| 好看视频组件
mip-hk-showarticle |显示文章更多详情
mip-hk-feed| 好看feed流
mip-hk-keep |好看详情页下载app安装打开对应详情页接口
mip-hk-share |好看分享插件
mip-html-tabs |TAB滑动、显示、隐藏、元素跳转等操作
mip-wkfun |寻医问药页面功能组件
mip-stats-ajk| 安居客统计组件
mip-360doc-script| 360doc网业务逻辑组件

## MIP官网 (@佳莹)

官网地址：https://www.mipengine.org/ 现在处于v2.0稳定阶段

### 本周进展

无

### 后续计划

增加周报内容

## MIP博客 (@佳莹)

博客地址：http://www.cnblogs.com/mipengine/ 处于维护阶段

### 本周进展

无


## MIP 工具

介绍

### spider 长线校验方案

spider 长线校验方案是mip生效环节重要的一环
 
#### 本周进展

12月7号已上线，长线方案有部分问题，已邮件反馈出来

#### 后续计划

Q1解决 domparser 问题

### 组件平台

介绍

#### 本周进展

内容

#### 后续计划

内容

## MIP 落地

和搜索结合相关，项目相关

### MIP cache相关

页面缓存系统，实现移动网页加速
 
#### 本周进展

反屏蔽广告的改写排期定在1月份第二周

todolist:http://wiki.baidu.com/display/EnhancedYuqu/mipcache+todolist

#### 后续计划

后续计划：http://wiki.baidu.com/pages/viewpage.action?pageId=249763355


### A4A 调研

 A4A AMP Ads For AMP Pages，现状：Classical html+js:iframe
存在问题：UX 损害、加载速度、degrade scrolling,swiping in the carousel,etc.
提倡：保留iframe，广告页面用mip实现，加快广告请求，只是渲染延迟。如果广告页面是mip规范，可以直接插入 mip 页面中

#### 本周进展

调研中，12月12号出初步结论

#### 后续计划

暂无

### aladdin MIP机制打通

在引入阿拉丁资源中，有部分的外跳链接是 MIP 化的页面，可以使用 MIP 页在结果页打开的方式。例如目前线上 query:"奥运” 的阿拉丁结果（并非自动打标，而是硬编码到数据中）
MIP 页有严格的规范，可以参照上面的 MIP 介绍，需要进行严格的打标记、屏蔽、退化等方式保证线上的良好用户体验

#### 排期计划：
    
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

#### 进展：

```
    1、模板c_base已上线，fe 接入文档已产出初版

    2、阿拉丁平台随时上线

    3、tera/spider 已上线

    4、离线建库测试中, 进一步 delay，建库还在 bug fix
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

#### 阿拉丁接入短线方案：
    
    各个资源方着急自己所负责的mip资源上线，可以按照奥运的方案上线:阿拉丁的 mip url 标记完全由 xml 控制，直接站长标记

    缺点：
        1、mip 合法性和规范性无法保证，存在不符合规范也会展现到线上的风险，各资源方需要人工check资源的风险性；
        2、长线方案OK之后，需要迁移数据。

    优点：可以即时上线。

### 富交互MIP方案(hold)

### title 机制

sf-mip的 sf 头部区域展示站点中文名

#### 本周进展

12月7号上线 odp 插件，发现数据文件有些问题 12月12号更新数据文件上线，然后同步修改阿拉丁


### 枫华和组件平台上线通道打通

为枫化和组件平台打通新的上线通道

#### 本周进展

基本方案已出，新开一个线上的组件目录和新的数据流，专门供这些新的通道使用
