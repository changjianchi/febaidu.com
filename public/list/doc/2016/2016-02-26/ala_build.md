# 【阿拉丁基础建设方向周报】

> 2016.2.22 - 2016.2.26

## 圣玛利亚项目

### wise模板开发平台化二期
#### 项目背景
wise阿拉丁模板开发未平台化，部署环境、调试代码成本比较高，而且目前参与wise阿拉丁模板开发的产品线有十几个，急需一个平台来管理开发人员及相关模板，以提高后续模板开发及人员管理成本。

#### 目标
* 开发统一：所有产品线及所有端模板，开发统一，规范统一，流程统一
* 上线统一：统一所有搜索结果模板权限控制和上线控制
* 管理统一：所有产品线及所有端模板，统一平台管理、监控、验证等

#### 整体计划
* 发单之前部署沙盒预览环境  1.20-1.25
* wise添加例行日志信息  1.25-2.1
* 支持哥伦布开发升级    2.2-3.15
    * <span style="color:green">模板开发模块支持多根目录升级  2.22-2.29</span>
    * 任务模块升级  3.1-3.2
    * 预览升级
        * 支持多模板编译    3.3
        * 子卡预览选项增加“选择子卡”和“选择主模板”  3.4-3.6
        * 预览数据在线merge 3.7-3.8
    * 新增模板升级  3.9-3.10
        * 增加主模板类型 
* 静态文件增加数据库管理    3.16-3.30
* 上线流程自动化管理 4月份

#### 本周工作

* 修复无权限用户访问平台页面显示空白的bug
* 模板开发模块支持多根目录升级，已完成80%

### 模板基础建设
#### 排期
* 模板相关 2月22 - 2月25
    * 增加子卡模板目录和静态文件目录
    * 主模板开发
    * fis升级
    * base文件开发
* 基础库升级，支持子卡渲染逻辑 - 2月26-2月29
* 统计相关升级 - 3月1
* 测试上线 - 3月2-3月4

#### 进度

* 模板相关 - 本周开发完，联调中
* sigma相关 - 本周设计方案，评审