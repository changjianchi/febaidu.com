# 朱雷

> 从2016-09-18到2016-09-23

## PMD组件-表格表头限制不折行

### 背景

pmd中的表格的表头，在文字内容过多时会折行，影响了视觉体验，需要设置不换行

### 进度

已上线，模板统一项目的通用表格模板可以使用

## 组件Fusion(无更新)

### 背景

目前结果页卡片开发使用的组件还是景点的js ui组件，使用起来成本较高，开发思维也是常规的指定式开发。我们希望能够吸收目前业内流行的框架思路，改变原有的组件开发和使用方式，让组件开发思路更明朗，组件性能更高。

### 进度

已完成全部开发，目前持续补充文档中，@袁炜 与 @李林 沟通先在POI试点，反馈使用情况

### 更新

<span style="color: red;">POI垂类FE @田岳 使用Fusion 开发城市选择组件，使用Naboo做进场和退场效果，目前组件已上线，线上地址[https://m.baidu.com/s?&ssid=0&from=0&bd_page_type=1&uid=0&pu=sz%401320_2001%2Cta%40iphone_1_9.1_3_601%2Cusm%407&baiduid=FDA179C4F073012366183B113B2E11B9&spr=1&wpo=base&rn=10&word=7%E5%A4%A9%E9%85%92%E5%BA%97&sa=ib&sid=107894&ts=0&ms=0#%7Cact=activity%2Fhotel%2Fbranches%3D%257B%2522x%2522%253A%2522%2522%252C%2522y%2522%253A%2522%2522%257D](https://m.baidu.com/s?&ssid=0&from=0&bd_page_type=1&uid=0&pu=sz%401320_2001%2Cta%40iphone_1_9.1_3_601%2Cusm%407&baiduid=FDA179C4F073012366183B113B2E11B9&spr=1&wpo=base&rn=10&word=7%E5%A4%A9%E9%85%92%E5%BA%97&sa=ib&sid=107894&ts=0&ms=0#%7Cact=activity%2Fhotel%2Fbranches%3D%257B%2522x%2522%253A%2522%2522%252C%2522y%2522%253A%2522%2522%257D)</span>

### 项目地址

[http://gitlab.baidu.com/psfe/fusion](http://gitlab.baidu.com/psfe/fusion)

## 交互Naboo

### 背景

交互和组件、栅格一起，都属于大搜前端框架最底层的部分。我们需要一个强大的交互框架，用来支持各种动画需求，包括串并行调度机制、动画工具集。

### 进度

本周完成了2点：

1. 修复了css reset bug：动画完成后需要把动画属性清空，但是如果此时该dom上还有其他css动画在执行，会导致这个正在执行的动画直接停止，修复策略为在dom上新增data-naboo属性，用于记录当前正在该dom上进行动画的数量，当数量为0时，执行css reset

1. 完善了README.md

### 项目地址

[http://gitlab.baidu.com/psfe/naboo](http://gitlab.baidu.com/psfe/naboo)

## 大鱼

### 背景

在搜索结果页上尝试更多丰富的交互效果，提升体验

### 进度

展开收起效果完成了初版，@袁炜 review中，预览地址: [鹿晗](http://cp01-ps-fe-4.epc.baidu.com:8003/s?word=%E9%B9%BF%E6%99%97&ts=1862647&t_kt=0&rsv_iqid=4497733348434976872&sa=ihr_3&rsv_sug4=1815&ss=001)

### Todo

* tab切换交互
