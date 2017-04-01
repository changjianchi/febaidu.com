# 王培

> 从2016-11-28 到 2016-12-02

## 本周跟进

- MIP 组件开发

- MIP 文档更新

- TOP 站改造支持

- MIP 支付调研

## MIP 支付（无更新）

### 背景与目标

    对『付钱啦』提供技术支持，并已此封装一套 MIP 自己的支付接口

#### 完成情况

- 进度：主要支持站长开发，依赖站长进度，目前hold

#### 效果图

- 暂无

## 组件

### 1. mip-gototop 快速回顶

#### 背景与目标
    
    功能升级，支持非sf和sf下的快速回顶功能，去掉回顶时的页面动画

#### 完成情况

- 进度：已上线（11.28）
- 预览地址：http://fedev.baidu.com/~wangpei07/mip/gototop/no-animation/

#### 效果图

<table>
    <tr>
        <td><img src='../2016-11-25/img/wangpei07/wp02.png' width="300"></td>
    </tr>
</table>

### 2. mip-carousel 图片轮播

#### 背景与目标
    
    功能升级，支持添加指示器，翻页按钮，副标题

#### 完成情况

- 进度：测试中
- 预览地址：http://fedev.baidu.com/~wangpei07/mip/carousel/indicator/

#### 效果图

<table>
    <tr>
        <td><img src='../2016-12-02/img/wangpei07/wp01.png' width="300"></td>
    </tr>
</table>

### 3. mip-form

#### 背景与目标
    
    功能升级，支持软键盘回车提交事件

#### 完成情况

- 进度：已上线(11.28)
- 预览地址：http://fedev.baidu.com/~wangpei07/mip/form/enter/

#### 效果图

<table>
    <tr>
        <td><img src='../2016-10-14/img/wangpei07/wp01.png' width="300"></td>
    </tr>
</table>

### 4. mip-lightbox 弹层组件

#### 背景与目标
    
    修复 Firefox 浏览器下点击事件无效的bug

#### 完成情况

- 进度：已上线（11.28）

#### 效果图

- 暂无

### 5. mip-share 分享组件

#### 背景与目标
    
    1. 暂时屏蔽ios qq浏览器
    2. 解决 6s, 6sp ,ios8 , QQ浏览器下分享失败的BUG

#### 完成情况

- 进度：1. 已上线（12.01）2.问题定位中

#### 效果图

- 暂无

### 6. mip-video 视频组件（@佳莹）

#### 背景与目标
    
    功能升级，支持播放http

#### 完成情况

- 进度：测试中
- 预览地址：http://cp01-mipengine.epc.baidu.com:8089/mip/videotest.html

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
    - 进度：@陈刚清洗有问题数据，然后由图片系统定位问题，高优处理

> 360doc 存在的问题及解决进度

- meta8 自带浏览器 sf 下 fixed 元素错位（@齐健）

    - 原因：iframe bug
    - 进度：已解决上线（12.01）

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

> mip-cr173

    - 审核：暂未通过
    - 进度：hold
    - 原因：未按照规范开发组件，组件目录不对，未通过fecs规范

> mip-jjpz

    - 审核：暂未通过
    - 进度：hold
    - 原因：未通过fecs规范

> mip-changyan(@佳莹)

    - 审核：暂未通过
    - 进度：hold
    - 原因：未通过fecs规范

> mip-ishowx

    - 审核：暂未通过
    - 进度：hold
    - 原因：快速回顶组件有通用组件并且支持SF和非SF，应该使用通用组件

> mip-xzw-article 星座屋mip改造插件

    - 审核：暂未通过
    - 进度：hold
    - 原因：组件文档未按照规范书写，存在调试信息，代码冗余

> mip-91jm-ckdevice

    - 审核：暂未通过
    - 进度：closed
    - 原因：push了zip文件

> mip-ad-random mip广告位置随机显示

    - 审核：暂未通过
    - 进度：hold
    - 原因：组件文档未按照规范书写，package信息不完善，less文件格式杂乱

##### 组件已上线

组件名|功能|上线时间
---|---|---
mip-360doc-script|[升级] 360doc网业务逻辑组件|11.29
mip-ad-video|[新增] 支持播放广告的视频组件|12.02
mip-nav-slidedown|[升级] 菜单组件|12.02
mip-360doc-script|[升级] 360doc网业务逻辑组件 bug fix|12.01
mip-huajun-loadmore|[新增] 点击加载更多组件|11.30
mip-dad-appdownload|[新增] 皮皮高速下载|11.30
mip-dp-script|[升级] 支持www.lz55.cn业务交互和广告显示 bug fix|11.30
mip-down-script|[升级] 页面逻辑脚本集合 bug fix|11.30
mip-askad|[升级] 120askad广告组件升级|11.29
mip-hk-call|[升级] 好看组件添加统计参数|11.29
mip-hk-feed|[升级] 好看组件添加统计参数|11.29
mip-youth-ttyd|[升级] 青网移动适配页精彩推荐广告 广告位修改|11.29
mip-360doc-script|[升级] 360doc网业务逻辑组件|11.29
mip-xueyou-article|[升级] 学优网文章阅读组件 取消度宝广告|11.29
mip-down-script|[升级] 页面逻辑脚本集合 增加热门推荐|11.29
mip-global-script|[升级] 页面逻辑公共脚本 添加编辑统计|11.29
mip-news-recommend|[新增] 百度资讯垂类新闻和热点推荐组件|11.28
mip-huajun-downtag|[新增] 点击切换组件|11.28
mip-huajun-fixdnav|[新增] 固定nav组件|11.28
mip-wkfun-club|[升级] 寻医问药页面功能组件 http 转换 https|11.28
mip-wkfun |[升级] 寻医问药页面功能组件 http 转换 https|11.28
mip-jjpz |[升级] 自有业务详情页整体交互组件 线上bug修复|11.28
mip-askad|[升级] 120askad广告组件升级|11.28
mip-wkfun-club|[新增] 寻医问药页面功能组件，提供了一些dom操作功能|11.26
mip-wkfun|[升级] 寻医问药页面功能组件|11.26
mip-ls-pagination|[新增] 招聘信息列表的分页功能|11.25
mip-xem-comment-duoshuo|[新增] 多说评论框通用代码稳定版组件|11.25

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

    - mip-gototop 组件文档新增
    - github changelog 按时更新

- 进度：

    - 内网文档同步官网脚本完成

- 预览地址：
    
    - 内网：http://mip.baidu.com/
    - 官网：https://www.mipengine.org

