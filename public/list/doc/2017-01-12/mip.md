# Mobile Instant Pages - 移动网页加速器

> 20170107~20170113
> FE成员: 李浪波、齐健、孟轲、吴鹏、王培、传涛、梁佳莹、亢明悦

## 目录

- [MIP 核心代码](#mip)
- [MIP 组件](#extensions)
- [MIP 官网](#website)
- [MIP 博客](#blogs)
- [MIP 工具](#tools)
- [MIP 落地](#impl)
- [已上线](#online)

## <span id="mip">MIP 核心代码</span>

统一管理资源的加载，并支持 MIP 标签的使用，从而确保页面的快速渲染，提高页面各方面的性能。对一些问题进行统一处理，封装了内置工具 API 供组件开发使用。

### animation（@吴鹏）

#### 背景与目标

```
Naboo于Animate统一，升级动画库。
```

#### 本周进展

- 状态：待上线
- 依赖：依赖 mip-carousel 组件和 mip-img
- 上线：01月16日

### template(@齐健)

#### 背景与目标

```
MIP需要提供template功能
```

#### 本周进展

- 状态：待发布，代码已上线
- 依赖：校验升级
- 发布：01月16日

### cookie(@吴鹏)

#### 背景与目标

```
当前MIP Cache域名下可以种cookie，但不推荐这种做法，一是会导致cache域名下cookie臃肿，同时不能在站长域名下获取该cookie，此方案则针对这个问题进行了解决
```

#### 本周进展

- 状态：bug fix
- 发布：01月16日

### gesture(@吴鹏)

#### 背景与目标

```
升级gesture模板，实现多点触摸
```

#### 本周进展

- 状态：待开发

### TODO

- [待排期] layout(@吴鹏)
- [未启动] MIP DOM 化
- [调研中] A4A

## <span id="extensions">MIP 组件</span>

### 1. mip-list 列表组件（@王培）

#### 背景与目标
    
    列表组件，依赖mip-mustache

#### 完成情况

- 进度：待上线
- 依赖：依赖校验升级才能开放
- 上线：01月16日

### 2. mip-mustache 模板组件（@王培）

#### 背景与目标
    
    template 渲染机制，同时有过滤模块，过滤掉不符合 MIP 规范的部分

#### 完成情况

- 进度：待发布
- 依赖：依赖校验升级才能开放
- 上线：01月16日

### 3. mip-app-banner 调起APP组件 (@王培）

#### 背景与目标
    
    提供一个能直接调起原生 APP 的组件

#### 完成情况

- 进度：测试中

##### 效果图

<table>
    <tr>
        <td><img src="../20170113/imgs/wp01.png" width="300px"></td>
    </tr>
</table>

### 4. mip-access(@吴鹏)

#### 背景与目标
    
    ACCESS能够允许发布者对页面内容进行访问权限的控制，通过内容标记和用户访问情况进行综合评价，从而实现对付费墙和订阅功能的支持。

#### 完成情况

- 进度：2016.1.9给出设计文档
- 依赖：cookie

### 5. mip-experiment A/B 实验对比组件(@佳莹）

#### 背景与目标

    提供一个前端页面实验组件，站长通过配置实验变量，达到展示不同页面内容样式的目的。支持通过url配置，强制显示某个实验效果。

##### 完成情况

- 进度：待开发
- 依赖：cookie
- 文档：[技术方案](https://jennyliang220.github.io/mip-experiment/mip-experiment-design.md)

### 6. mip-form 升级（@佳莹）

#### 背景与目标
    
    支持各种type，支持textarea等扩展功能

#### 完成情况

- 进度：开发中
- 提测：01月13日

### 7. mip-carousel（@传梼）

#### 背景与目标
    
    1. 轮播图支持图片popup
    2. 【设置指示器可配】支持当前显示的图片和总图片的数量，例如右下角显示1/20
    3. 支持滑动时的效果。 目前的是在滑动后显示下一张图片，没有拖动效果（参考swiper）。

#### 完成情况

- 进度：已上线（01月12日）
- 预览地址：http://cp01-ps-fe-1.epc.baidu.com/fct?q=lunbodemo

#### 效果图

<table>
    <tr>
        <td><img src="../20170113/imgs/wp03.png" width="300px"></td>
        <td><img src="../20170113/imgs/wp02.png" width="300px"></td>
    </tr>
</table>

### 8. mip-accordion 功能升级（@传梼）

#### 背景与目标
    
    不限定展开按钮和展开内容的位置

#### 完成情况

- 进度：已上线（01月12日）

### TODO

#### 1. 点赞、阅读

- 背景：实现用户页面点在功能，以及记录阅读数功能
- 状态：hold

#### 2. mip-recommend 推荐组件

- 背景：根据用户行为想用户推荐内容
- 状态：hold

#### 3. 广告支持内容联盟ssp

- 背景：
- 状态：hold

#### 4. mip-showmore 展开更多组件

- 背景：支持高度控制；不记录展开想；根据字符数隐藏；
- 状态：待开发

#### 5. mip-infinitescroll 无限滚动

- 背景：结合 mip-mustache 组件，实现无限滚动组件
- 状态：待排期

### 组件BUG修复

#### 1. mip-video 视频组件安卓播放BUG（@传梼）

- 原因：video播放时，浏览器调起native播放器，导致在iframe下视频窗口漂浮BUG
- 进度：[已定位]，域名问题，需要浏览器添加白名单（后续@浪波跟进）

#### 2. fetch BUG（@吴鹏）

- 原因：第三方库 fetch 在 iphone4s 这些低版本发行请求发送有兼容性问题，得列入一个修复计划中
- 进度：问题梳理中

### 第三方组件开发情况

#### 完成情况

###### 组件已上线

> 审核中 PR 13 个

序号|PR 名
---|---
360|mip-nav-nrslidedown
355|修复全网推荐多个广告位加载多次js问题
349|修改网站统计
337|mip-scroll-fixed 组件
322|新增 mip-list 组件
318|东方财富网行情单页
309|合集页面需要的一个重组对应系统资源的组件
307|网页公告滑动效果
255|Add files via upload
248|添加东方头条新闻组件
240|km影视组件
195|Mip weiyoubaba tthead
173|统计系统升级。

> 本周新增组件 2 个

组件名|功能|上线时间
---|---|---
mip-analytics|提供统计发送接口|01.06
mip-mustache|通用模板组件|01.06

> 站长历史组件 73 个

组件名|功能
---|---
mip-fengxi-sdk|凤悉sdk插件
mip-content-readmore|文字截断，查看更多组件
mip-nine-business|页面公共业务逻辑
mip-nine-download|页面下载业务
mip-mz-addonapp| 木子推荐app下载
mip-mz-appdownload|木子 app下载
mip-adsense|google 广告组件
mip-yxdown-floatad|第三方广告投放插件
mip-weiyoubaba-tthead| 微友巴巴头条
mip-cr173-ppzs| 西西软件园皮皮助手下载
mip-3727-pagination |3727图片模拟分页
mip-cr173-count|西西软件园编辑人员统计组件
mip-wkfun-medicine|寻医问药药品频道
mip-wkfun-diseasse|寻医问药疾病频道
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

## <span id="website">MIP 官网</span> (@佳莹)

- 官网地址：https://www.mipengine.org/ 

### 背景与目标

    MIP 官方网站，提供了完整的 MIP 规范，组件文档，开发教程等；现在处于v2.0稳定阶段

### 本周进展

无

### TODO

- 增加周报内容

## <span id="blogs">MIP 博客</span>(@佳莹)

- 博客地址：http://www.cnblogs.com/mipengine/ 

### 背景与目标

    对用户、开发者在使用和改造过中遇到的一系列问题的整理，同时对 MIP 每次重大更新的说明文章

### 本周进展

无

## <span id="tools">MIP 工具</span>

### MIP 校验工具

#### 背景与目标

    为了保证所有的 MIP 页面都是符合 MIP 规范的，MIP 团队开发了 MIP 校验工具，方便对 MIP 页面进行校验，同时后端 Spider 校验保证了所有收录的页面都是符合规范的 MIP 页面。

#### 本周进展

- 1月份校验升级需求梳理：

    1. 有一些站点的页面，虽然在页面头部（head标签中）设置了页面编码为utf8(charset=’utf-8’),但是页面中还是存在其他编码的内容,导致页面进入到 mip cache 后，出现页面内容乱码现象

    2. 规则升级：
        1）增加 template 标签相关校验
        2）去掉 a 标签 target=‘_blank’的属性值强制

- 需求排期已给：

    - 编码问题前端预计01月16日完成上线，Spider 需要修改与 spider-EC 的接口，需要 EC 配合升级，预计春节后一周可完成
    - 校验规则升级前端校验与 Spider 校验 预计2017.01.16完成上线

#### TODO

- Spider 校验解决 domparser 问题

### 组件平台

#### 背景与目标

    MIP 组件平台是提供给所有 MIP 开发者开发组件的一个平台，开发者可以在组件平台上提交自己开发的组件，组件通过审核之后能够自动上线。

#### 本周进展

- 状态：环境部署中
- 短线方案：部署一台内网环境的机器，开通外网权限，BAE 给此机器一个接口，使此机器能够定时访问此接口，确认是否有组件需要上线，如果需要上线，则自动拉取 github 代码库代码，并且通过 mis 配送上线
- 上线：01月13日

#### TODO

- 组件自动上线长线方案：内网机器配置域名，则组件平台的 BAE 机器可以主动推送组件上线

## <span id="impl">MIP 落地</span>

和搜索结合相关，项目相关

### MIP cache相关

#### 背景与目标
    
    页面缓存系统，实现移动网页加速
 
#### 本周进展

- 反屏蔽广告的改写排期定在1月份第二周

- todolist:http://wiki.baidu.com/display/EnhancedYuqu/mipcache+todolist

- 增加校验功能，春节前上线

- mip-link 改写功能

#### TODO

详见wiki：[传送门](http://wiki.baidu.com/pages/viewpage.action?pageId=249763355)

### aladdin MIP机制打通

#### 背景与目标

    在引入阿拉丁资源中，有部分的外跳链接是 MIP 化的页面，可以使用 MIP 页在结果页打开的方式。例如目前线上 query:"奥运” 的阿拉丁结果（并非自动打标，而是硬编码到数据中）
    MIP 页有严格的规范，可以参照上面的 MIP 介绍，需要进行严格的打标记、屏蔽、退化等方式保证线上的良好用户体验

#### 进展

1. 明确建库后续优化计划，采用回写的方式
2. 屏蔽机制确认在 cache 产生词表，具体如何用已经给 US 提需求

## <span id="todo">TODO</span>

### A4A 调研

#### 背景与目标

    A4A AMP Ads For AMP Pages，现状：Classical html+js:iframe
    存在问题：UX 损害、加载速度、degrade scrolling,swiping in the carousel,etc.
    提倡：保留iframe，广告页面用mip实现，加快广告请求，只是渲染延迟。如果广告页面是mip规范，可以直接插入 mip 页面中

#### 进展

- 调研中

## <span id="online">已上线</span> 

- title 机制：sf-mip的 sf 头部区域展示站点中文名
- 枫华和组件平台上线通道打通：为枫化和组件平台打通新的上线通道


