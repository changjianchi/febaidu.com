# 李浪波

> 从2016-06-27到2016-07-01

## MIP

### 组件需求

和pm6.21梳理目前还有哪些需要支持，分优先级来进行开发（整体7.8号达到可用状态）:
	
	1.1    图片* zhulei lightbox已完成，正在开发图集横滑的需求 下周一测试
	
	1.1    动图* zhulei 已完成
	
	1.1    视频* lilangbo 基本功能已开发完成，下周一提测，缺http播放页 暂只支持https资源
	
	1.1    广告* wangpei、浪波  固定的广告样式已经ready，需要考虑个性化广告 网盟广告方案已敲定
	
	1.1    推荐* langbo hold 接口api无后端认领
	
	1.1    分享* menglingjun  开发完成
	
	1.1    iframe* zhulei  启动开发
	
	1.1    app下载* wangpei 开发完成  缺ue图 
	
	1.1    统计*  langbo  支持百度统计

### 文档和规范

本周对文档进行了规整和纰漏的筛查，7.8号达到可供官网使用的状态，7.8日提供mip 原理 其他的均已ready或细条

组件开发规范文档已产出 [地址](http://mip.baidu.com/#./docs/3_reference/components.md)

### mip文件上线通路打通

方案走mis配送，下周一打通通路，上一次线

### mib to mip

通用mip已经都ready，文档已经产出，mibhtml和肖广沟通，下周开始进行to mip的改造

Mip cache：咨询垂类部分站点的mip页正在联调阶段，王培跟进，文档已产出

mip接入网盟广告：
	增加第三方app 手百feed、自然结果和咨询区分分成方式等需求，整体技术方案7.5号给出

META中加domain：文档规范已产出

mip校验标准：js版本升级，和刘立进行c端验证的联调，目前提供的标准mip html均能通过验证；校验增加判断页面是否强制禁止mip cache，标记需要透传到前端做sf-mip的逻辑

### google ad和stats调研

简单包装支持有问题，需要google配合


## 单模板上线

单模板上线方案背景：
   1、目前模板上线只是同步文件，无需重启服务，适合数据配送的方式
   2、目前863上线上线需要打包上线，这种方式上线事件2小时左右，并且需要单日所有需求打包，期间的确认和等待比较耗时。需要提升上线效率
   3、忧总补充

单模板走数据配送详细计划：
   试运行时间：8月1日那一周
   具体涉及到的开发：
模板开发平台 预计三周时间 @齐健
Mis 宝占 工作量比较小 请齐健联系宝占协助
        NOAH上线通路建立： @齐健   联系 @yangtao08协助
        静态文件快速通道申请OP审核和模块经理：li.zheng,baisong，wuyou
QA稳定性测试：联系雨梅处理
   执行收益：1、模板达到上线状态无需等待，直接操作上线；
           2、单词模板上线时间（静态文件9mins + 模板 30mins）：39mins或30mins，较之前的120mins有较大提升；
           3、回滚效率相应类似第二点有提升；
           4、忧总补充
新上线的开发模式：严格禁止跨模板include，其他不变
上线方式：上线入口移至模板开发平台，预计是在平台的online上，每个模板后面都有上线、回滚的button；新开一个页面查看上线状态。具体形式请 齐健后续给出