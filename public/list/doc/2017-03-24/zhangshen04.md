
# 张屾

> 从2017-3-20到2016-3-24

## 人员安排
```
招聘B：张屾（0.5），刘玲玲
招聘站：冯斐帆
专家：胡晓卉
模板平台：张屾（0.5）
```

## 开放平台

#### 招聘to B （项目状态: 开发中） @张屾 @刘玲玲

- 背景：开放平台对接的垂类之一。to B项目，需要做接入、审核、发布、管理等招聘相关的功能模块。聚焦在pc端以及移动端上。目前招聘
     已经确定一期的全部需求，后端2月底前联调通api与数据层接口。前端需要整体考虑开放平台的重构和后期rd的维护成本，将框架和
     新的技术选型应用在招聘这个垂类，慢慢再延伸到整个开放平台。

- 预期收益：
  － m1: 3月底一期上线

- **工作量评估** 
  - 需求量：开发 前端15人日（4个pc 页面、其中共用部分拆分成13个组件）
    - 组件：header 、输入框 ＋ 校验器 、地区选择、多图上传、文本输入、通知对话框、下拉列表、组别单选、组别复选、搜索框、翻页、职位选择tree
    - pc页面：引导页、职位发布页、资质审核页、职位管理页
  - 开发风险：
    - 新框架有学习成本 
    - 部分组件通用型开发
     
- **完成情况** 
    - 80% 基本开发完毕，接口联调完毕。缺少联动下拉框组件和页面逻辑调通
     
- **排期计划**          
    - 2.26~3.18 开发
    - 3.18~3.23 联调     
    - 3.28 提测
    - 3.28~ 测试介入
    - 4月初上线
     
#### 数据开放平台 （项目状态：评审中） @张屾
          
- 背景：开放平台为检索提供深度优化的引入资源。新的前端技术选型应用在延伸到整个开放平台。

- 预期收益：
    - 未数据提供方提供更好的接入流程体验
    - 为检索提供更优质的数据资源
    - 简化统一前端开发

- **工作量评估** 
    - 需求量：
        - 数据开放平台
        - 个人中心
    - 开发风险：
        - 暂无
        
- **完成情况** 
    - 0%
    
- **排期计划** 
    - 3.10~3.17 产品评审产出mrd 
    - 3.19~3.24 ue出设计稿
     	  
    
## 模版开发平台

- 背景：模版开发平台的不断改进和优化。未来更加开放和提供定制化流程机制

- 预期收益：提供更稳定 更开发的开发方式

- **工作量评估** 
  - 需求量：
     - 优化git diff
     - cr不稳定原因追查及解决
     - 模版展现分析2017年数据丢失问题 @胡晓卉
     - 标准化js css代码的支持 @张屾
     - 接口开放
     
  - 开发风险：
     - 不能全人力投入
     - 临时被打断次数太多
     
- **完成情况** 
     - 100% 解决wise模块个人code review时每次上线后一定几率提示代码冲突
     - 90%  模版展现分析2017年数据丢失问题，田海英负责的ubs机器上数据文件由于他们的迁移导致丢失。
            确定本周五做逻辑恢复，但2017.1.1-2017.3.24的数据没有了，如果需要则需要提需求，单独实现
     - 50%  fecs技术方案调研和初步实现。目前fecs调用是否支持传入可读流 另外是否可以阻塞调用 在调研中。
            另外diff代码需要实现
	 
- **排期计划**
	 - 3.17前 确定fecs在平台的一期支持
	 - 3.25前 完成fecs在平台上的一期实现
	 - 3.31前 上线一期fesc
	 - 3.31前 fix模版展现分析数据丢失问题

## 其他机动任务