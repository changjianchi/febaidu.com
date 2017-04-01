# 王培

> 从2016-12-12 到 2016-12-16

## 本周跟进

- MIP 组件开发

- MIP 文档更新

- TOP 站改造支持

- MIP 支付调研

- MIP 校验

## MIP 支付（无更新）

### 背景与目标

    对『付钱啦』提供技术支持，并已此封装一套 MIP 自己的支付接口

#### 完成情况

- 进度：主要支持站长开发，依赖站长进度，目前hold

#### 效果图

- 暂无

## 校验

### 背景与目标
    
    官网MIP规范、node校验程序和C++校验程序 标准统一化升级

#### 完成情况

- 进度：已上线（12.13）
- 预览地址：暂无

#### 效果图

- 暂无

## 组件

### 本周开发

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
    - 原因：依赖card上线后会不稳定复现老样式，目前正在定位

- 预览地址：http://transcoder.baidu.com/sf?pd=mms_mipvideo&old&dev_tpl=act_mip_video&title=%E8%A7%86%E9%A2%91&actname=act_mip_video&ext=%7B%22poster%22%3A%22https%3A%2F%2Fplaceholdit.imgix.net%2F~text%3Ftxtsize%3D35%26txt%3D375%25C3%2597210%26w%3D375%26h%3D210%22%2C%22src%22%3A%22http%3A%2F%2Fgss0.bdstatic.com%2F-b1Caiqa0d9Bmcmop9aC2jh9h2w8e4_h7sED0YQ_t9iCPK%2Fmda-gjkt21pkrsd8ae5y%2Fmda-gjkt21pkrsd8ae5y.mp4%22%7D&

##### 效果图

- 暂无

#### 3. mip-ad ssp 内容联盟广告（@佳莹）

##### 背景与目标
    
    ssp 内容联盟广告

##### 完成情况

- 进度：已上线（12.13)后期需要扩展
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

### 组件BUG修复

#### 1. mip-carousel 图片轮播轮播无效BUG（@王培）

- 原因：对非数组使用了forEach导致
- 进度：已上线（12.14）

#### 2. mip-video 视频组件安卓播放BUG（@传梼）

- 原因：video播放时，浏览器调起native播放器，导致在iframe下视频窗口漂浮BUG
- 进度：寻找解决方案...

#### 3. mip-fixed 悬浮组件meta自带浏览器BUG（@佳莹）

- 原因：组件内嵌fixed元素时，在 meta7自带浏览器滑动闪动问题 投票、bottom 类型在 body 有 padding 的情况下，展现会出现问题
- 进度：BUG FIX 后，测试中

#### 4. 编码校验提醒（@杨珺、王培）

- 原因：一些 MIP 页面中会有gbk编码，导致cache后乱码现象
- 进度：前端校验调研中

#### 5.  mip-form 表单组件 BUG@佳莹）

- 原因：https 下 action为http时报错
- 进度：12.16进入开发

### 下周及后期计划

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

#### 3. mip-ad 全网推荐广告（@佳莹）

##### 背景与目标
    
    全网推荐广告

##### 完成情况

- 进度：开发中
- 预览地址：暂无

#### 4. mip-experiment A/B实验组件（@佳莹）

##### 背景与目标
    
    完成一个能够支持A/B实验的组件，支持使用者自己配置对照实验

##### 完成情况

- 进度：待开发
- 预览地址：暂无

#### 5. mip-app-banner (@王培）

##### 背景与目标
    
    提供一个能直接调起app的组件

##### 完成情况

- 进度：待开发，调研中
- 预览地址：暂无

#### 6. mip-list（@王培）

##### 背景与目标
    
    列表组件，依赖mip-mustache

##### 完成情况

- 进度：待开发，有依赖

## TOP 站 MIP 改造支持

#### 背景与目标

    对 TOP 站点迁移 MIP，做技术上的支持，对改造中遇到的问题及时反馈与跟进，推动其尽快完成改造并上线

#### 完成情况

> PC6 存在的问题及解决进度

- css 样式中设置background无效

    - 原因：mip cache badcase
    - 进度：@陈刚 已上线（12.15）

> 360doc 存在的问题及解决进度

- 低版本安卓浏览器 sf 下 fixed 元素错位（@齐健）

    - 原因：iframe bug
    - 进度：新bug定位中

- 手百视频为弹窗播放，悬浮页面，页面可滑动

    - 原因：手百native视频播放
    - 进度：处理中... 


## 第三方组件

#### 背景与目标

    - 支持第三方组件开发
    - 审核起开发代码
    - 上线第三方组件
    - 迁移第三方组件

#### 完成情况

##### 组件审核中

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

##### 组件已上线

组件名|功能|上线时间
---|---|---
mip-haixue-contact|[升级] 支持嗨学网咨询功能|12.15
mip-xem-buttons|[升级] 自用buttons组件|12.15
mip-ck-browser|[升级] 根据不同浏览器展示不同的内容|12.15
mip-ck-location|[升级] 根据不同地区展示不同的内容|12.15
mip-hk-showarticle|[升级] 显示文章更多详情|12.15
mip-down-script|[升级] 页面逻辑脚本集合|12.15
mip-news-iframe-interface|[新增] 资讯下iframe双向通信接口|12.14
mip-muzi-appdownload|[升级] 木子app下载|12.14
mip-share|[升级] 分享组件 修复微信分享图片过大|12.14
mip-global-script|[升级] 页面逻辑公共脚本 添加编辑统计|12.14
mip-down-ppzs|[升级] 皮皮助手|12.14
mip-ck-browser|[升级] 根据不同浏览器展示不同的内容|12.14
mip-ck-location|[升级] 根据不同地区展示不同的内容|12.14
mip-xzw-article|[新增] 星座屋mip改造插件|12.13
mip-ck-browser|[新增] 根据不同浏览器展示不同的内容|12.13
mip-ck-location|[新增] 根据不同地区展示不同的内容|12.13
mip-xem-buttons|[新增] 自用buttons组件|12.13
mip-xem-dropdowns|[新增] 自用dropdowns组件|12.13
mip-a5-loadmore|[新增] a5创业网逻辑组件|12.13
mip-ad-video|[升级] 可播放广告的视频组件|12.13
mip-html-ajax|[升级] 评论提交加载|12.13
mip-news-recommend|[升级] 百度资讯垂类新闻和热点推荐组件|12.13
mip-iask-ajax|[升级] iask—ajax请求|12.13
mip-360doc-script|[升级] 360doc网业务逻辑组件|12.13
mip-iask-business|[升级] 爱问商业广告组件|12.13
mip-jjpz|[升级] 自有业务详情页整体交互组件|12.13
mip-haixue-contact|[新增] 支持嗨学网咨询功能|12.09
mip-haixue-register|[新增] 支持嗨学网手机注册功能|12.09
mip-fh-bus|[新增] 改造两性详情页面的脚本代码|12.09
mip-ad|[升级] 广告组件升级支持 ssp 内容联盟广告|12.09
mip-share|[升级] 分享组件 升级支持 ios qq 浏览器分享，修复手百分享bug|12.09
mip-xem-review|[升级] 自用获取随机评论组件|12.09
mip-yxdown-shielding-page|[升级] 屏蔽问题页面|12.09

### 9. MIP 文档

#### 背景与目标
    
    完善文档，随时更新
    
#### 完成情况

- 更新：

    - 校验规则升级
    - github changelog 按时更新
    - mip-carousel 轮播图功能升级
    - mip-ad 增加ssp联盟广告
    - mip-stats-baidu 增加点击统计

- 进度：

    - 内网文档同步官网脚本完成

- 预览地址：
    
    - 内网：http://mip.baidu.com/
    - 官网：https://www.mipengine.org

