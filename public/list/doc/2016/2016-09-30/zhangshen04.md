# 张屾

> 从 2016-09-26 到 2016-09-27

## 标准模板模块开发

### 项目背景

- 模板维护成本高, 重复代码多, 不符合标准的模板大量存在. 为了解决公用模板复用且代码更易维护, 
  需要在平台支持将一部分模板标志为 __标准模板__, 且添加标准模板标签. 在浏览模板的同时可以上传
  该模板的截图, 指定相应开发文档. 标准模板的浏览需要按照模块以及组件两个纬度进行查询.

### 完成情况

- 15%, 对于user表中具有admin权限的用户,可以在浏览模板的时候标志模板为标准, template表中新增一个
 tinyint的字段(is_standard), 0为为非标准, 1为标准, 目前线下可测试.
 
- 项目整体排期如下

时间点 | 实现点 | 备注 |开发者  
---   | --- | --- | --- 
9.20-9.23 | 理清相似的模板浏览模块前后端调用逻辑| 前端入口、依赖关系、接口调用、库表关系后段接口、使用框架等 | 张屾
9.26-9.27 | 平台添加标签入口实现| 在模板浏览模块添加标志入口，考虑表是否需要分离，接口实现库表操作 | 张屾
9.28-9.30 |（休假） | -- | --
10.8-10.11 | 新加模块前端代码迁移及实现 | 新加模块静态文件构建方式，老旧代码剥离优化，样式库选择、上传组件实现集成 | 张屾
10.12-10.15 | 后端渲染逻辑及接口实现 | 后端渲染框架和已有框架集成，上传接口实现，增删改库表操作接口实现 | 张屾
10.17-10.18 | 库表实现及整体流程走通| 需要先在线下环境走通流程，后将库表整合到线上走流程 | 张屾
10.19-10.20 | 自测及@晓琴 review |目前同一分支开发，线上可能也有部分新代码，需谨慎操作| 张屾 舒晓琴
10.21  | 预计上线| -- | 张屾