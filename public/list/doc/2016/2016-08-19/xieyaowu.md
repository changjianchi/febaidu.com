# 谢耀武

> 2016-08-15 到 2016-08-19

## 单模板上线

### 进展

目前调研tar包使用863上线方式，正在找op确认方案，主要议点在`回滚的效率`问题

## 平台计划

<a href="http://newicafe.baidu.com/issues/space/ps-santa?click=true&filter=40493&c=[type][status][owner][createTime][22797]">计划icafe</a>

### 近期的优化上线

* 平台对静态文件上线的调整 @zhangshen04
* 平台新增模板时模板名添加长度限制15个 @zhangshen04
* 新增组模板解决手百白屏，先做实验，后续升级到base里 @zhangshen04
* 配合odp添加c_base里飘红插件的方法，已上线 @xieyaowu
* 升级c_base里拼sf2.0链接的方法参数，已上线 @xieyaowu
* 开发js里拼sf2.0、mip的方法，已完成，下周一08-23测试，下周二08-24上线 @xieyaowu
* 收集整理`title block`的需求

### 下周的修改

* 建立平台文档 @xieyaowu
    * 现有代码、目录说明
    * 相关服务器说明
    * svn路径说明
    * 新规范说明
    * 后端接口新路径说明
    * 前端新架构说明
* 结合最近发现的删除模板没删资源问题，平台添加删除模板时的提示(查看pm.open是否有删除查询接口) @zhangshen04
* 平台里下掉sigma1.0相关的显示、配置 @zhangshen04
* 上线js拼sf2.0、mip方法 @xieyaowu
* 平台规范检查优化 @zhangshen04
    * pad.tpl内容检查/ 新增模板自动创建
    * include、inline、extends跨模板检查
    * 数据转码检查
    * 数据结构检查
    * 新增模板黑名单检查（不能以指定的名单为文件名）
* 预览时接入qa沙盒自动化
* 同步测试机环境优化