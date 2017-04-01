# MIP 周报

> by wangpei07

MIP (Mobile Instant Pages - 移动网页加速器)主要用于移动端页面加速。

- 功能
- 易用性
- 接入

## FE成员

```
浪波，齐健，王培，佳莹，吴鹏，eric，孟轲
```

## 功能

### 核心代码（@齐健，@吴鹏）

涉及整个 MIP 框架，组件机制，工具接口等

#### 组件机制

- 组件注册
- 组件生命周期

#### 内置工具

> 整体概况

- 动画
- 事件
- 手势
- 浏览器
- dom事件
- 页面布局
- ...

> 完成情况

##### 核心代码升级

- mip.js
    
```
1、去掉mip-share在layout中的默认宽高
2、修复iphone5s UC白屏问题
3、增加在iframe中的a标签处理逻辑，防止跳转失败
```

##### 核心代码使用文档 

- 进度：11.21进入开发，11.25完成上线

##### animation 动画 

- 需求：animation升级，移除naboo，只提供基本动画。后续有复杂动画需求，可异步引入第三方动画库
- 进度：测试中

##### gesture

- 需求：增加多点触摸
- 进度：hold

##### template

- 需求：template渲染机制
- 进度：hold

### 组件（@浪波，@王培）

> 组件列表

- mip-accordion 折叠节点
- mip-anim 动图
- mip-appdl 下载
- mip-stats-baidu 百度统计
- mip-filter 筛选
- mip-fixed 悬浮布局
- mip-form 表单
- mip-html-os 操作系统
- mip-lightbox 弹层
- mip-link 跳转链接
- mip-nav-slidedown 菜单
- mip-share 分享
- mip-sidebar 侧边栏
- mip-stats-tianrun 天润统计
- mip-vd-tabs tab 组件
- mip-ad 广告组件【网盟广告，网盟反屏蔽，图+广告，全网推荐】

> 本周更新

##### mip-ad 广告（@王培）

- 需求：修复网盟广告，不支持fixed的bug
- 进度：已上线（11.22）

##### mip-appdl 下载（@王培）

- 需求：下载组件前期自定义fixed布局，现需要迁移由mip-fixed组件支持
- 进度：已上线（11.23）

##### mip-form 表单（@王培）

- 需求：功能升级，支持软键盘回车提交事件
- 进度：测试回归中

##### mip-gototop 快速回顶（@王培）

- 需求：功能升级，支持非sf和sf下的快速回顶功能，去掉回顶时的页面动画
- 进度：测试中

##### mip-video(@佳莹)

- 需求：支持http视频资源播放
- 进度：测试中

> 后续计划

- mip-mustache（@王培） 模板渲染引擎封装
- mip-list (@王培) 列表组件
- mip-recommend
- mip-accordion 升级加指示器
- mip-access


### MIP Cache(@浪波)

### 背景与目标

    1. 短线：预案的形式给出清理或者forbidden一个mip页面的接口或者脚本。  
    2. 处理iconfont在cache下的抓取
    3. 长线11月底 梳理amp-cache的差异点

### 完成情况

- 进度：
	- 短线11.18 已上线 
	- iconfont的抓取-已上线   
	- 后续计划：http://wiki.baidu.com/pages/viewpage.action?pageId=249763355](http://wiki.baidu.com/pages/viewpage.action?pageId=249763355)

### 阿拉丁机制打通（@浪波）

> 工作分配

全部线下联调，联调3天

- 阿拉丁平台@春杰
- 数据建库@王鹏
- 模板@佳莹，@浪波

> 完成情况

- 整体上线依赖 EC 的校验模块的上线，具体时间点在11月30号之前 @程刚 @光宇  tera&spider：
    
    ```
    1）tera表建好，提供fake的数据和tera访问sdk给王鹏进行开发联调(11.11已提供)
    2）提供接入spider的接口提供给王鹏进行开发  @晓荣(11.15已提供)    
    3）整体上线依赖 EC 的校验模块的上线，具体时间点在11月30号之前 @程刚 @光宇、  上线：11.30  
    4）建库提测（11.22提测）
    5）阿拉丁模板开发中，阿拉丁平台 ready 上线状态
    ```
### MIP代码上线机制（@清乾，@齐健）

> 完成情况

- 先接入到icode，旧agile问题待解决，正在推进修改问题。(11.10已完成)
- 替换上线方式更改为覆盖上线，11.21联调
- mip cache 自动化替换：hold  

###  title 机制

> 完成情况

- 冯旭提供词表，11.14提供， 
- 11.16 开发完毕 
- 11.24 已提测
- 11.28预计测试完成

### MIP 容错机制

#### 背景与目标

	1. top站点走在线抓取、抽样验证。保证稳定性在99.9%以上 非
	2. top站点走spider大环保证抓取数据同步到mint 
	3. nginx 跳转，mip server挂掉的时候 nginx直接跳转到静态404页面

#### 完成情况

	- 进度：11.25已完成

### MIP稳定性（计划）
### 上线校验机制（计划）
### 组件支持多级目录（计划）

## 易用性

### 组件开发工具(@eric,@孟轲)

> 背景与目标

为提高组件开发效率，开发了一系列 npm 组件开发工具

> 完成情况

- [mip-cli](https://github.com/mipengine/mip-cli) [已完成] mip核心代码开发工具
- [mip-cli-boilerplate](https://github.com/mipengine/mip-cli-boilerplate) [已完成] 工具配置模板
- [mip-extension-optimizer](https://github.com/mipengine/mip-extension-optimizer) [已完成] 组件编译工具
- [mip-extension-validator](https://github.com/mipengine/mip-extension-validator) [已完成] 组件校验工具
- [mip-validator](https://github.com/mipengine/mip-validator) [已完成] 前端页面校验工具
- [mip-builder](https://github.com/mipengine/mip-builder) [已完成] mip 编译工具
- [查看更多](https://github.com/mipengine)


### 组件平台（@孟轲）

> 背景与目标

为站长提供一套完善的组件提交平台，能够实现前期组件的相关校验，并进行友好的反馈

> 具体功能

1. 用户账户管理
2. 组件提交和校验
3. 组件审核和同步 
4. 加反馈渠道  状态：前端页面开发完成 确认环境配置 (11.22 )
5. 提测：预计11.28

> 完成情况

- 搭框架开发，使用koa+mysql, BCC云服务器搭建web服务 11.11开始，
- 使用git进行同步
- 预计开发时间2-3周，11月底上线

## 接入

接入MIP请参考 [https://www.mipengine.org/](https://www.mipengine.org/)

### 背景与目标

    对 TOP 站点迁移 MIP，做技术上的支持，对改造中遇到的问题及时反馈与跟进，推动其尽快完成改造并上线

### 完成情况

- top 站点扩量进展请参考： [http://wiki.baidu.com/pages/viewpage.action?pageId=246186884](http://wiki.baidu.com/pages/viewpage.action?pageId=246186884)

- 目前线上流量：1000w+
