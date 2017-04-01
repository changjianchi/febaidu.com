# 李浪波

> 从2016-7-15到2016-7-22

## MIP

### 组件需求

和pm6.21梳理目前还有哪些需要支持，分优先级来进行开发（整体7.8号达到可用状态）:
	
	1.1    图片* zhulei 已完成
	
	1.1    动图* zhulei 已完成
	
	1.1    视频* lilangbo chuantao  http 播放页启动开发
	
	1.1    广告* wangpei、浪波  固定的广告样式已经ready， 网盟广告已ready，重构代码完成，于22号提测
	
	1.1    推荐* langbo hold 接口api无后端认领
	
	1.1    分享* menglingjun  已上线，依赖 js：https://mipcache.bdstatic.com/static/v0.1/mip-share.js
	
	1.1    iframe* zhulei  已完成
	
	1.1    app下载* wangpei chuantao 按 ue 规范开发完成，目前正在测试，下周上线ready 
	
	1.1    统计*  langbo   百度统计已上线 依赖 js:https://mipcache.bdstatic.com/static/v0.1/mip-stats-bidu.js  奥运项目的 sina、163统计组件一上线

### 文档和规范

提供mip 原理 文档 [地址](http://mip.baidu.com/#./docs/2_guides/mipspeedup.md)

组件开发规范文档已产出 [地址](http://mip.baidu.com/#./docs/3_reference/components.md)

多次梳理，已完成初版，但仍须多次迭代，今天完成更新（07.14）

### mip文件上线通路打通

方案走mis配送，上线通路已打通，但是 mis 上传的文件一直为空文件，7月18号查明原因 并 fix

### mib to mip

通用mip已经都ready，文档已经产出，mibhtml和肖广沟通，下周开始进行to mip的改造

Mip cache：咨询垂类部分站点的mip页正在联调阶段，王培跟进，文档已产出

mip接入网盟广告：
	增加第三方app 手百feed、自然结果和咨询区分分成方式等需求，整体技术方案7.5号给出

META中加domain：文档规范已产出

mip校验标准：js版本升级，和刘立进行c端验证的联调，目前提供的标准mip html均能通过验证；校验增加判断页面是否强制禁止mip cache，标记需要透传到前端做sf-mip的逻辑

### google ad和stats调研

简单包装支持有问题，需要google配合

### sf-mip

方案统一走 sf2.0的机制；todo需要支持纯 js 的机制，不走后端请求（后者待开发）

本周完成整体机制的开发，在 base 中增加 sfmip 的 url 函数，开发 sf2.0的通用卡片，修改自然结果模板，打通统计通道，预计下周一上线
