# 王培

> 从2016-11-28 到 2016-12-02

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

- 进度：站长修改中，规范预计12.12 完成升级
- 预览地址：暂无

#### 效果图

- 暂无

## 组件

### 1. mip-carousel 图片轮播

#### 背景与目标
    
    功能升级，支持添加指示器，翻页按钮，副标题

#### 完成情况

- 进度：已上线
- 预览地址：http://fedev.baidu.com/~wangpei07/mip/carousel/indicator/

#### 效果图

<table>
    <tr>
        <td><img src='../2016-12-02/img/wangpei07/wp01.png' width="300"></td>
    </tr>
</table>

### 2. mip-share 分享组件

#### 背景与目标
    
    解决 6s, 6sp ,ios8 , QQ浏览器下分享失败的BUG
    采用postmessage策略将分享信息传到父级进行分享

#### 完成情况

- 进度：测试中

#### 效果图

- 暂无

### 3. mip-video 视频组件（@佳莹）

#### 背景与目标
    
    功能升级，支持播放http

#### 完成情况

- 进度：
    - card已上线
    - 组件上线delay
    - 原因：依赖card上线后会不稳定复现老样式，目前正则定位

- 预览地址：http://cp01-mipengine.epc.baidu.com:8089/mip/videotest.html

#### 效果图

- 暂无

### 4. mip-ad ssp 内容联盟广告（@佳莹）

#### 背景与目标
    
    ssp 内容联盟广告

#### 完成情况

- 进度：测试中
- 预览地址：http://cp01-mipengine.epc.baidu.com:8089/mip/sspad_qa.html

#### 效果图

<table>
    <tr>
        <td><img src='../2016-12-09/img/wangpei07/wp01.png' width="300"></td>
    </tr>
</table>


### 5. mip-stats-baidu（@传梼）

#### 背景与目标
    
    现有升级版本完善百度统计api的调用。已覆百度统计所有jsapi。

#### 完成情况

- 进度：测试中
- 预览地址：暂无

#### 效果图

- 暂无

### 6. mip-stats-cnzz（@传梼）

#### 背景与目标
    
    现有升级版本完善cnzz统计api的调用。已覆cnzz统计所有jsapi

#### 完成情况

- 进度：测试中
- 预览地址：暂无

#### 效果图

- 暂无

### 7. mip-mustache（无更新）

#### 背景与目标
    
    模板组件，引入并封装第三方模板引擎

#### 完成情况

- 进度：开发中
- 预览地址：暂无

#### 效果图

- 暂无

### 8. mip-list（无更新）

#### 背景与目标
    
    列表组件，依赖mip-mustache

#### 完成情况

- 进度：开发中
- 预览地址：暂无

#### 效果图

- 暂无

### 9. TOP 站 MIP 改造支持

#### 背景与目标

    对 TOP 站点迁移 MIP，做技术上的支持，对改造中遇到的问题及时反馈与跟进，推动其尽快完成改造并上线

#### 完成情况

> 学优网 存在的问题及解决进度

- 背景透明png图片再sf下背景被填充白色

    - 原因：mip cache 或者图片系统引起
    - 进度：@陈刚 已上线

> 360doc 存在的问题及解决进度

- 低版本安卓浏览器 sf 下 fixed 元素错位（@齐健）

    - 原因：iframe bug
    - 进度：预计今天上线（12.09）

- 手百视频为弹窗播放，悬浮页面，页面可滑动

    - 原因：手百native视频播放
    - 进度：处理中... 


### 10. 第三方组件

#### 背景与目标

    - 支持第三方组件开发
    - 审核起开发代码
    - 上线第三方组件
    - 迁移第三方组件

#### 完成情况

##### 组件审核中

> mip-contact

    - 审核：暂未通过
    - 进度：hold
    - 原因：未通过fecs规范, readme未按照规范写，使用了cookie（禁止），组件名不规范

> mip-register/README.md

    - 审核：暂未通过
    - 进度：hold
    - 原因：未通过fecs规范, readme未按照规范写，使用了cookie（禁止），组件名不规范

> mip-cr173

    - 审核：暂未通过
    - 进度：hold
    - 原因：未按照规范开发组件，组件目录不对，未通过fecs规范

> mip-jjpz

    - 审核：暂未通过
    - 进度：hold
    - 原因：未通过fecs规范

> mip-xzw-article 星座屋mip改造插件

    - 审核：暂未通过
    - 进度：hold
    - 原因：组件文档未按照规范书写，存在调试信息，代码冗余

##### 组件已上线

组件名|功能|上线时间
---|---|---
mip-ad-random|[新增] 广告位随机|12.08
mip-yxdown-shielding-page|[新增] 屏蔽问题页面|12.08
mip-down-ppzs|[升级] 皮皮助手|12.08
mip-iask-ajax|[新增] iask—ajax请求|12.08
mip-iask-business|[新增] 爱问商业广告组件|12.08
mip-iask-ext|[新增] 爱问详细页插件|12.08
mip-iask-report|[新增] 爱问举报组件|12.08
mip-html-ajax|[新增] 评论提交加载|12.07
mip-down-ppzs|[新增] 皮皮助手|12.07
mip-xem-review|[新增] 自用获取随机评论组件|12.07
mip-meishij.js|[升级] 实现了百分点统计,收藏和菜单添加，社会化分享|12.07
mip-news-recommend  [升级] 百度资讯垂类新闻和热点推荐组件 bug fix|12.07
mip-muzi-appdownload|[新增] 木子app下载|12.06
mip-changyan|[升级] 支持在线评论插件 畅言|12.06
mip-ad-video|[升级] 可播放广告的视频组件|12.06
mip-news-recommend|[升级] 百度资讯垂类新闻和热点推荐组件 bug fix|12.06
mip-html-tabs|[新增] TAB滑动、显示、隐藏、元素跳转等操作|12.05
mip-ad-video|[升级] 可播放广告的视频组件|12.05
mip-down-comment|[升级] 用来支持文章详情页的评论|12.05

##### 组件迁移

- 新增|迁移完 mip-ck-basecss
- 新增|迁移完 mip-ck-course-detail
- 新增|迁移完 mip-ifeng-ppt
- 新增|迁移完 mip-ifeng-pptdetail

### 9. MIP 文档

#### 背景与目标
    
    完善文档，随时更新
    
#### 完成情况

- 更新：

    - 校验规则升级
    - github changelog 按时更新

- 进度：

    - 内网文档同步官网脚本完成

- 预览地址：
    
    - 内网：http://mip.baidu.com/
    - 官网：https://www.mipengine.org

