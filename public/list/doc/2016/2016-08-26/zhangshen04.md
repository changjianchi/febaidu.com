# 张屾

> 从 2016-08-21 到 2016-08-26

## 开发平台cr列表添加是否新增模板在确认后的错位渲染问题

### 完成情况

- 完成开发, 自测, 并于本周三（8.23)上线
  
## 熟悉平台代码校验相关功能代码

### 背景与目标

- 希望在自测或预览的时候添加更多规则
- 针对各种规则分配error_level对阻塞错误返回报错

### 完成情况

- 完成70%, 周末再梳理一下目前的流程下周着手进行开发 

## 平台方向

> 按优先级排序

### 功能性优化

1. 针对card类型的模板也需要有确认效果的过程, 需要熟悉odp的渲染流程  (进行中)
2. 针对编辑的模板提供下载压缩包的功能
3. 数据转码检查 escape:none的使用做代码检查 (方案待定)
4. 数据结构检查 对于$tplData的使用做规范检查 (方案待定)
5. class明明检查 (待定)
6. 跨模板引用检查
7. 平台删除模板时的提示
8. 模板列表支持展开收起
9. pad.tpl内容检查

### 重构需求
1. 针对积分模块进行重构, 想在前端代码不大范围修改的情况下, 引入静态资源管理以及构建机制
2. 针对目前积分管理存在的不合理处进行优化, 解放值周人员的手动操作频次

### 兼容需求
1. sigma1.0下线