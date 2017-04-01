# 谢耀武

> 2016-09-19 到 2016-09-23

## aladdin-wise上线优化 - 2.0方案

1. 冗余文件的整理 - 定期自动分析无使用的静态文件、删除无用的php文件 - **已上线**
1. 打包脚本优化 - 优化fis编译临时目录（解决同时编译冲突）、优化fis编译前解压逻辑、优化smarty编译白名单 - **已上线**
1. 找op沟通批量level时的并发数 - **进行中，已发评估资料**

## pc aladdin showurl添加https显示支持

### 背景

针对目前https环境普及化，结果页aladdin卡片在showurl中针对已经是htpts的站点前面标识出https，更让用户明确https站点，并且推动https普及

### 进度

代码已修改，[cr](http://cooder.baidu.com/browser4769879#/i/4769879/reps/file/0,1/src/page/aladdin/c_base.tpl)，需要qa@雨梅帮助回归展现diff，没问题的话下周一/二上线

### 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/fd4e9be143c481b30995c608f3d1f68d/image.png)

## https部署文档、脚本更新 - 已上线

### 背景

目前wise结果页已经全量https环境，开发aladdin-wise模板，必须兼容https环境

最近很好几个人反馈说sfe文档平台上的https部署文档不能使用，经查看是数据包源不存在了

### 进度

0921把包放到了 [http://tpldev.baidu.com/https_nginx.tar.gz](http://tpldev.baidu.com/https_nginx.tar.gz) ，并更新了文档 [http://sfe.baidu.com/#/工具服务/无线测试机部署https](http://sfe.baidu.com/#/工具服务/无线测试机部署https)

## 值周bug

[值周bug记录](/casespace/0919-0925.md)

## 下周计划

1. pc aladdin showurl上线
1. 平台支持不规范foot强制提示
1. 情景页飘红需求跟进
1. 梳理基础文档
1. op优化863并发数跟进
