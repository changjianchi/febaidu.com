# 王培

> 从2016-03-28到2016-04-01

## 本周跟进

- 中途岛订阅频道页迁移
- 中途岛mib页测速相关事宜
- 运营节日通用卡愚人节特效升级
- 值周


## 中途岛

### 订阅频道页迁移

#### 背景与目标

    为梳理、明确订阅功能的产品逻辑，提供短线调整方案，营造稳定入口，提升交互用户体验。主要优化功能包括通过指定Q=“我的订阅“作为固定入口导入订阅页面，以及订阅页面的产品逻辑进行梳理。
    
#### 完成情况

- PV：暂无

- 状态：

    - 前端出版已上线（03-31），线上登录测试中，页面入口还未上线
    
    - bug修复、样式及功能升级，周五（04-01）全量上线
    
#### 效果图

<table algin="center" >
<tr>
<td style="vertical-align:top"><img src="../2016-03-25/img/wangpei07/wp01.png" width="200px"></td>
<td style="vertical-align:top"><img src="../2016-03-25/img/wangpei07/wp02.png" width="200px"></td>
<td style="vertical-align:top"><img src="../2016-03-25/img/wangpei07/wp03.png" width="200px"></td>
<td style="vertical-align:top"><img src="../2016-03-25/img/wangpei07/wp04.jpeg" width="200px"></td>
</tr>
</table>

### mib页性能监控(无更新)

#### 速度监控

##### 监控体系

也可以称之为『监控指标』，更直接的对页面加载速度进行描述

- 时间点
    
      1. 用户点击调起mib页按钮或文案的时间点T1
          
      2. 头部banner加载完成的时间点T2
          
      3. iframe页面解析到title节点的时间点T3 
          
      4. iframe页面文章内容dom加载完成的间点T4（相关推荐之前的内容）
          
      5. iframe页面首屏（window高度内）的所有图片、视频等加载完成的时间点T5
      
      6. 后端时间 mib_ST放在返回的HTTP头部的SetCookie中，JS使用读取Cookie的方式获取时间值mib_ST.
                
- 监控指标定义 

    
   **首屏时间**
    
    含义：用户从触发调起mib页面事件到文章内容全部加再完（包括图片、视频）的时间。

	计算方法： T5 - T1

    日志字段名：mib_fs
 
 
   **核心dom可用时间**
    
    含义：从iframe加载页面到看到页面全部文字和框架布局的时间。

    计算方法： T4 - T1

    日志字段名：mib_tti
    
   **后端处理时间**
    
    含义：后端服务的时间开销

    计算方法： mib_ST, bws在接到请求和即将发出返回数据的时候记下时间点，两者相减得到后端处理时间。放入返回HTTP头部的setCookie中。

    日志字段名：mib_srv
    
   **网络时间**
    
    含义：从用户触发调起mib页面事件，到iframe中的页面下载完成开始执行时的网络开销（含少许浏览器开销）。
          
    网络开销包括：1、发送HTTP请求数据（1个RTT）；2、接受返回数据的第一个RTT

    少许浏览器开销包括：1、点击事件处理；2、解压gzip；3、把HTML装入解析器

         
    计算方法： T3 - mib_ST - T2

    日志字段名：mib_net
          
   **核心Dom前端渲染时间**
     
    含义：iframe页面从开始渲染到核心Dom（iframe区域全部文字和框架）渲染完成的耗时。
     
    计算方法：T4 - T3

    日志字段名：mib_fsdom
          
   **其他首屏元素时间**
 
    含义：从核心Dom渲染完成后出现首屏内元素加载完成的耗时。要注意的是首屏元素并不是在核心Dom渲染完成后才开始加载，在首屏元素的加载往往和Dom的渲染是并行的。在没有图片或者图片较少的情况下，核心Dom渲染完成后首屏就已经OK了。所以这个指标主要体现的是在核心Dom加载完成后，依然影响首屏展现的元素加载的额外开销。
		   
	计算方法：T5 - T4

    日志字段名：mib_frext
    
##### 监控机制

    即对页面加载速度等进行监控的代码
    
##### 日志数据 & 平台

    数据以日志的方式发送，speedup平台获取相关数据进行分析，总结
  
    更直接的向使用者展现mib页性能
  
    目前，speedup平台已经可以拿到mib页的日志数据
  
#### 后续计划

- 速度监控

- 速度优化

#### 完成情况

- 监控体系

    - 各个监控指标已确定，在实际测试中会根据测试数据进行调整
    
- 监控机制

    - 开发中
    
- 测试

    - delay



## 运营

### 愚人节特效项目

#### 背景与目标

```
愚人节是一个全民恶搞的节日，在这一天用户希望有一些意外之惊，因此希望通过红包雨+愚你同乐的特效形式，和用户形成互动，并传达愚人节以愚为乐的态度。
```

#### 完成情况

- PV：暂无

- 状态

    - 模板已上线（2016-04-01）
    
#### 效果图

- <table algin="center">
<tr>
<td><img src="../2016-04-01/img/wangpei07/wp01.png" width="240px"></td>
<td><img src="../2016-04-01/img/wangpei07/wp02.png" width="240px"></td>
</tr>
</table>

### 运营类通用事件模板升级（无更新）

#### 背景与目标

```
老模板不能满足新的功能需求，修改及维护成本较大。因此开发新的模板，栅格迁移及功能升级，
```

#### 完成情况

- PV：暂无

- 状态

    - 模板已上线，0流量测试中，需求有变动，待需求确定后需要进一步改进
    
#### 效果图

<table algin="center">
<tr>
<td><img src="../2016-02-05/img/wangpei07/wp01.png" width="350px"></td>
</tr>
</table>

### 节日通用卡升级（无更新）

#### 背景与目标

```
为适应导流中途岛需求，模板需增加更优质、丰富阅读内容，以提高用户停留时长。
```

#### 完成情况

- PV：暂无

- 状态

    - 因UE调整哥伦布sigma设计标准，修改设计图，预计今天出终稿（delay）
    
    - 预计下周一（2016/03/14）进入开发状态

#### 效果图

<table algin="center">
<tr>
<td><img src="../2016-03-11/img/wangpei07/img01.png" width="350px"></td>
</tr>
</table>

## 下周计划

- 中途岛-订阅频道页迁移

- 运营愚人节项目











 



















