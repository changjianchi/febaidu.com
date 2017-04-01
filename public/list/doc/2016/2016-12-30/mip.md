# MIP 

> 2016-12-19 到 2016-12-23

> 组员：孟轲、浪波、王培、齐健、佳莹、传梼、吴鹏

## MIP核心代码

介绍

### animation

Naboo于Animate统一，升级动画库。

#### 本周进展

- 单测完成；
- 1.4完成mip demo并提测；

### template

MIP需要提供template功能

#### 本周进展

已上线，但正式使用依赖 html-sanitizer

### html-sanitizer

通过 template 模块的生成的代码需要过滤

#### 本周进展

12.23达到提测状态

### platform

识别平台，引擎，浏览器，系统版本等功能

#### 本周进展

- 文档已完善；
- 已上线；

### cookie

当前MIP Cache域名下可以种cookie，但不推荐这种做法，一是会导致cache域名下cookie臃肿，同时不能在站长域名下获取该cookie，此方案则针对这个问题进行了解决

#### 本周进展

- 方案已确定；
- 12.29-12.30 1.3-1.4开发
- 1.5单测，写测试用例
- 1.6提测

## mip 组件

### 本周开发

#### 1. mip-form升级（@佳莹）

##### 背景与目标
    
    支持各种type

##### 完成情况

- 进度：排期中

##### 效果图

- 暂无

#### 2. mip-carousel（@传梼）

##### 背景与目标
    
    1. 轮播图支持图片popup
    2. 【设置指示器可配】支持当前显示的图片和总图片的数量，例如右下角显示1/20
    3. 支持滑动时的效果。 目前的是在滑动后显示下一张图片，没有拖动效果（参考swiper）。

##### 完成情况

- 进度：bugfix
- 预览地址：http://cp01-ps-fe-1.epc.baidu.com/fct?q=lunbodemo

##### 效果图

<table>
    <tr>
        <td><img src="../2016-12-30/img/wangpei07/wp02.png" width="300px"></td>
        <td><img src="../2016-12-30/img/wangpei07/wp01.png" width="300px"></td>
    </tr>
</table>

#### 3. mip-accordion 功能升级（@传梼）

##### 背景与目标
    
    1. 支持高度控制（可以设置高度阈值，超过高度才会显示『展开』『收起』按钮）
    2. 不记录用户展开历史选项

##### 完成情况

- 进度：待开发
- 预览地址：暂无

##### 效果图

- 暂无

#### 4. mip-img-lightbox 图片弹层（@传梼）

##### 背景与目标
    
    1. 图片弹层功能

##### 完成情况

- 进度：开发中
- 预览地址：暂无

##### 效果图

- 暂无

#### 5. mip-access(@吴鹏)

##### 背景与目标
    
    ACCESS能够允许发布者对页面内容进行访问权限的控制，通过内容标记和用户访问情况进行综合评价，从而实现对付费墙和订阅功能的支持。

##### 完成情况

- 进度：1.9给设计文档，开发时间待设计和策略都定了之后开始；

##### 效果图

- 暂无

#### 6. mip-mustache（@王培）

##### 背景与目标
    
    模板组件，引入并封装第三方模板引擎

##### 完成情况

- 进度：组件已上线（12.21），依赖校验升级才能开放
- 预览地址：暂无

##### 效果图

- 暂无

#### 7. mip-ad 全网推荐广告（@佳莹）

##### 背景与目标
    
    全网推荐广告支持悬浮

##### 完成情况

- 进度：已上线（12.27）
- 预览地址：暂无

##### 效果图

- 暂无

#### 8. mip-list（@王培）

##### 背景与目标
    
    列表组件，依赖mip-mustache

##### 完成情况

- 进度：待测试

##### 效果图

- 暂无

### 组件BUG修复

#### 1. mip-video 视频组件安卓播放BUG（@传梼）

- 原因：video播放时，浏览器调起native播放器，导致在iframe下视频窗口漂浮BUG
- 进度：[已定位]，域名问题，需要浏览器添加白名单（后续@浪波跟进）

#### 2. 编码校验提醒（@杨珺、王培）

- 原因：一些 MIP 页面中会有gbk编码，导致cache后乱码现象
- 进度：12.30提测

#### 3.  mip-form 表单组件 BUG@佳莹）

- 原因：https 下 action为http时报错
- 进度：bugfix

#### 4. 非top站点悬浮广告BUG(@王培)

- 原因：悬浮广告未使用悬浮组件支持，鉴于站点问题较多，短线升级广告组件
- 进度：已上线（12.27）

#### 5. mip-ad 全网推荐js执行时机问题(@佳莹)

- 原因：全网推荐js是立即执行的，会在第一次引用组件时引入。但js执行时，可能有组件暂未初始化，导致后面广告不展示
- 进度：上线中(12.30)

### 下周及后期计划

#### 1. mip-experiment A/B实验组件（@佳莹）

##### 背景与目标
    
    完成一个能够支持A/B实验的组件，支持使用者自己配置对照实验

##### 完成情况

- 进度：1.5给出技术文档
- 预览地址：暂无

#### 2. mip-app-banner (@王培）

##### 背景与目标
    
    提供一个能直接调起app的组件

##### 完成情况

- 进度：待开发，调研中
- 预览地址：暂无

## 第三方组件

#### 背景与目标

    - 支持第三方组件开发
    - 审核起开发代码
    - 上线第三方组件
    - 迁移第三方组件

#### 完成情况

##### 组件审核中

> mip-dftt-data

    - 审核：暂未通过
    - 进度：hold
    - 原因：未通过fecs规范
    
> mip-km-ys.js

    - 审核：暂未通过
    - 进度：hold
    - 原因：readme不符合规范

>  mip-template

    - 审核：暂未通过
    - 进度：hold
    - 原因：官方提供通用template方案和组件，所以暂不通过

>  mip-async-recommend

    - 审核：暂未通过
    - 进度：hold
    - 原因：调用了第三方模块引擎，鉴于mip会提供通用模板引擎，所以暂不通过

>  mip-weiyoubaba-tthead

    - 审核：暂未通过
    - 进度：hold
    - 原因：未通过fecs规范

> mip-xueyou-article

    - 审核：暂未通过
    - 进度：hold
    - 原因：未按照规范开发组件，使用相对路径

###### 组件已上线

> 本周新增组件 4 个

组件名|功能|上线时间
---|---|---
mip-3727-pagination |3727图片模拟分页|12.28
mip-cr173-count|西西软件园编辑人员统计组件|12.27
mip-wkfun-medicine|寻医问药药品频道|12.27
mip-wkfun-diseasse|寻医问药疾病频道|12.27

> 站长历史组件 59 个

组件名|功能
---|---
mip-bsml-carousel| bsml轮播组件
mip-bsml-fixedbar|bsml底部转换工具组件
mip-bsml-form| bsml表单组件
mip-bsml-multiselect|bsml多选下拉组件
mip-bsml-sliding| bsml图片滑屏组件
mip-bsml-widget|bsml通用组件，包括打点等功能
mip-wangxia-call|自由业务
mip-wangxia-down|下载站定制高速下载组件
mip-cr173-tags|西西软件园适配下载地址组件
mip-news-iframe-interface|资讯下iframe双向通信接口
mip-xzw-article|星座屋mip改造插件 
mip-ck-browser|根据不同浏览器展示不同的内容 
mip-ck-location|根据不同地区展示不同的内容 
mip-xem-buttons|自用buttons组件
mip-xem-dropdowns|自用dropdowns组件
mip-a5-loadmore| a5创业网逻辑组件
mip-haixue-contact|  支持嗨学网咨询功能 
mip-haixue-register |支持嗨学网手机注册功能 
mip-fh-bus | 改造两性详情页面的脚本代码 
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

### MIP 校验工具

#### spider 长线校验方案

spider 长线校验方案是mip生效环节重要的一环
 
##### 本周进展

- 12月29号已上线，长线方案有部分问题，已邮件反馈出来
- 升级校验规则
    - 修改select、option规则为只允许祖先节点为mip-form
    - 校验规则去掉mip-appdl的positiontype属性的强制要求
    - mip-form method的post、get允许大小写
    - a标签href属性支持sms:xx格式

##### 后续计划

Q1解决 domparser 问题

#### 前端校验

前端校验工具
 
##### 本周进展

- 升级校验规则
    - 修改select、option规则为只允许祖先节点为mip-form
    - 校验规则去掉mip-appdl的positiontype属性的强制要求
    - mip-form method的post、get允许大小写
    - a标签href属性支持sms:xx格式
- 升级template校验

##### 后续计划

Q1解决 domparser 问题

### 组件平台

提供一个组件提交平台，实现组件审核的部分自动功能

#### 本周进展

- 已提测

#### 后续计划

- 根据测试结果进行改进，完善平台

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
