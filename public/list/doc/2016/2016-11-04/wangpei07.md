# 王培

> 从2016-10-31 到 2016-11-04

## 本周跟进

- MIP 组件开发

- MIP 文档更新

- TOP 站改造支持

- MIP 支付调研

## MIP 支付

### 背景与目标

    对『付钱啦』提供技术支持，并已此封装一套 MIP 自己的支付接口

#### 完成情况

- 进度：调研中，预计下周进入开发

#### 效果图

- 暂无

## TOP 站改造支持

### 第三方组件代码审核

#### 背景与目标

    审核第三方站长提交的组件代码，把控代码质量

#### 完成情况

##### mip-ifeng-ppt

- 审核：通过
- 进度：已上线，迁移中

##### mip-ifeng-pptdetail

- 审核：通过
- 进度：已上线，迁移中

##### mip-hnr-rem

- 审核：暂未通过
- 进度：hold
- 原因：因为组件都是JS加载的，所以JS加载之前html标签是没有font-size的，页面上使用rem单位的样式都会有问题

##### mip-html-tabs

- 审核：暂未通过
- 进度：hold
- 原因：部分功能可通过mip-accordion组件实现

## 组件

### 1. mip-sidebar

#### 背景与目标
    
    通用侧边栏组件，支持左边侧边栏和右边侧边栏

#### 完成情况

- 进度：测试 BUG 修复中
- 预览地址：http://fedev.baidu.com/~wangpei07/mip/sidebar/mip-sidebar.html

#### 效果图

<table>
    <tr>
        <td><img src='../2016-09-09/img/wangpei07/wp03.png' width="320"></td>
    </tr>
</table>

### 2. mip-mustache

#### 背景与目标
    
    模板组件，引入并封装第三方模板引擎

#### 完成情况

- 进度：开发中
- 预览地址：暂无

#### 效果图

- 暂无

### 3. mip-list

#### 背景与目标
    
    列表组件，依赖mip-mustache

#### 完成情况

- 进度：开发中
- 预览地址：暂无

#### 效果图

- 暂无

### 4. 第三方组件

#### 背景与目标

    - 支持第三方组件开发
    - 审核起开发代码
    - 上线第三方组件

#### 完成情况

- 升级|迁移中 mip-vd-popup
- 升级|迁移中 mip-vdtabs
- 升级|迁移中 mip-ck-ad
- 新增|迁移中 mip-ck-script
- 新增|迁移中 mip-down-comment
- 新增|迁移中 mip-down-hideshow
- 新增|迁移中 mip-ck-basecss
- 新增|迁移中 mip-ck-course-detail
- 新增|迁移中 mip-ifeng-ppt
- 新增|迁移中 mip-ifeng-pptdetail

### 5. MIP 文档

#### 背景与目标
    
    完善文档，随时更新
    
#### 完成情况

- 进度：

    - 内网文档同步官网脚本完成

- 预览地址：
    
    - 内网：http://mip.baidu.com/
    - 官网：https://www.mipengine.org

