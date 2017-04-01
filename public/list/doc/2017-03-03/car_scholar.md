# 汽车&学术（郭勇，程恩，杨奇）

> 从 2016-02-27到2016-03-03

## 人员&&需求安排

```
- FE: 郭勇、杨奇、程恩

```
    - 汽车: 郭勇、杨奇
    - 学术：郭勇、程恩
        
### 汽车

#### 汽车情景页 （开发中）@郭勇，@杨奇

- 背景：汽车垂类后续将进行垂类自检，汽车相关卡片将不再跳转资源方，而是进入我们自己的多层情景页。目前一期项目主要满足用户选新车的需求，提供配置、报价、口碑、评测（文章、视频），图片等。后续会建设品牌阿拉丁、泛需求阿拉丁，并丰富频道页，全面满足选车需求。

- 收益：卡片预计覆盖pv 800w，情景页预计覆盖pv：700w

- **工作量评估** 
  - 需求量：7个情景页共涉及约15个情景页卡片
  - 开发风险：
     - 使用未沉淀的交互方式 | 3次 | 城市选择(需要通用解决方案)；车型/颜色筛选；图片放大(无法直接使用组件)
     - 同时存在同步、异步更新方式 | 多次 | 车型点击加载更多，报价口碑下拉展开等
  - 沟通风险：
     - 效果图定稿问题，UE和前后端同步开发，UE分批定稿
     - 后端使用mini固定格式数据，且后端和前端同步开发

- **完成情况** 
     - 2月8日 需求评审。
     - 2月20日 FE介入开发
    
- 本周进展 
     - <p style="color:#c00">本周完成概览页面二手车卡片，车型卡片</p>
     - <p style="color:#c00">本周确定城市选择和车型/颜色筛选技术方案，目前C类详情页面技术方案待定</p>
     - <p style="color:#c00">本周提供了概览页面联调环境，包括顶部通栏卡片、综述卡片(无图)和二手车卡片召回（假数据）</p>
     - <p style="color:#c00">本周完成了城市筛选方案落地</p>
     - <p style="color:#c00">下周开始参数卡片开发</p>
     - <p style="color:#c00">下周内完成车型/颜色筛选方案落地</p>
     - <p style="color:#c00">下周完成图片页面卡片开发</p>

- **排期计划**
    - 参数卡片开发
    - 筛选组件开发
    - 指导杨奇完成部分卡片

    - 整体排期：
    [详见wiki](http://wiki.baidu.com/pages/viewpage.action?pageId=292265098)

- 效果图
    - [详见wiki](http://wiki.baidu.com/pages/viewpage.action?pageId=292719584)

#### 修改二手车泛需求页面 （项目状态:已上线） @ 杨奇 
- 背景：针对二手车，用户有买车和卖车两方面的需求。而各商家的车源分散，中小型城市的车源不足，且市场上暂无巨头出现，目前呈现三足鼎立之势（优信、人人、瓜子）。百度可通过聚合车源、搭建入口、提供额外优惠等方式，进一步满足用户需求，稳住二手车的流量入口。
- 收益：影响PV 60w 
- **工作量评估** 
  - 需求量：
  1个结果页
  - 开发风险：
     - 无
  - 沟通风险：
     - 无
- **完成情况** 
     - 3月2日 开始开发
     - 3月2日 开发完毕
     - 3月2日 上线
- 本周进展 
     - <p style="color:#c00">删除小卡的冗余部分，优化展现</p>
- **排期计划**
     - 3月2日 模版上线 
- 效果图
    <p><img src="../2017-03-03/img/yangqi/0303brand.png" width="320"></p>

#### 修改二手车情景页线上bug （项目状态:待上线） @ 杨奇 
- 背景：针对二手车，用户有买车和卖车两方面的需求。而各商家的车源分散，中小型城市的车源不足，且市场上暂无巨头出现，目前呈现三足鼎立之势（优信、人人、瓜子）。百度可通过聚合车源、搭建入口、提供额外优惠等方式，进一步满足用户需求，稳住二手车的流量入口。
- 收益：影响PV 60w 
- **工作量评估** 
  - 需求量：
  1个情景页
  - 开发风险：
     - 同时需要用同步获取数据和异步获取数据
  - 沟通风险：
     - 无
- **完成情况** 
     - 3月2日 开始开发
     - 3月2日 开发完毕
     - 3月3日 准备上线
- 本周进展 
     - <p style="color:#c00">线上出现首屏同步数据展现跳转链接未加密，现已加密完毕。</p>
- **排期计划**
     - 3月3日 模版上线 
- 效果图
    <p><img src="../2017-03-03/img/yangqi/0303car.png" width="320"></p>
        
 
### 学术

#### 学术--论文查重页面优化需求 （项目状态：开发中）

- 背景：论文查重系统需要新接入两家查重系统，均采用首单免费的营销方式，故需要开发首单免费的机制；同时，论文查重评论页面需增加用户真实反馈，需要进行优化。增加用户的主动评论，提升详情页评论模块对用户的帮助。增加分享的趣味性，拉动用户分享解成本。


- 预期收益：促进论文查重系统订单转化；每天为平台增加评论至少50条，丰富查重系统评论。吸引新用户来平台查看评论，从而进行查重下单。

- **工作量评估** 

  - 需求量：
    - pc端论文查重页面，wiseH5分享页面
  
  - 开发风险：
  
     - 我的报告页面- 优化评论、分享（hover即展现查重结果）
     - wiseH5 pc端扫码进入展现查重结果页面 
     - 新增查重平台- writeCheck
     - 新增平台收费机制变化
     
- **完成情况** 

     - 3月2日 新增平台收费机制修改完成 ，3月3日上线
     - 3月2日 -- 3月3日 根据数据接口格式开发分享功能及评论功能
     - 2月27日 -- 3月1日 基本完成评论、分享、H5页面样式
     - 2月24日 writeCheck新平台添加完成
     
- 本周进展 

     - <p style="color:#c00">本周基本完成评论及分享页面，机构页面修改于3月3日同时上线</p>
     
- **排期计划**
     - 3月8日 预计上线
     - 3月7日 测试
     - 3月6日 数据联调
     
- 效果
    - [pc论文查重](http://cq01-2012q2-kw1-newndi083.cq01.baidu.com:8009/u/biye/?tag=check&upload=1)
    - [wiseH5分享](http://cq01-2012q2-kw1-newndi083.cq01.baidu.com:8009/u/biyewise?cmd=share)
    

####  百度学术毕业季活动方案 （项目状态：未开始） 

- 背景：结合高校学生毕业季的需求小高峰，开展以论文助手为核心的线上运营活动，旨在提升百度学术的品牌口碑和在目标群体中的影响力，让更多的新用户知道并使用百度学术，提升学术及论文助手的美誉度

- 收益：   
  -  提升百度学术整体品牌影响力
  -  提升论文助手页面PV及UV
  -  提升学术及论文助手新用户数

- **工作量评估** 

    - 需求量：
       - 2个H5活动页面
       
- **完成情况** 
    - 暂无
    
- 本周进展 
    - <p style="color:#c00">暂无</p>
    
- **排期计划**

    - 03.09-03.22 开发
    - 03.23-03.24联调测试
    - 03.24上线

####  学术3.0 页面修改 （项目状态：未开始 与毕业季活动冲突，PK中，待定）
- 背景：3.0.1上线已一段时间，基于线上效果和用户反馈，以及之前遗留通用问题，进行样式改版。
- 收益：提升用户交互体验

- **工作量评估** 
    - 需求量：
       - pc端20个页面的修改（主要为导航部分及侧边导航栏的样式风格同统一）
       
- **完成情况** 
    - 暂无
    
- 本周进展 
    - <p style="color:#c00">暂无</p>
    
- **排期计划**
    下周可同时开发2-3天，具体排期待定

####  后续计划

#### 学术合作步骤详情页面（机构页面与超级管理员页面 项目状态：未开展）

- 背景
  -  百度学术知识发现是一个基于海量文献信息构建而成的知识对象发现平台，它将图书馆已购和自建数据库信息与百度学术海量元数据对接，为机构用户提供了一个统一的文献检索入口，方便用户检索的同时优化了图书馆资源的利用。现因学术页面多处合并与改动 ，百度学术知识发现系统的合作方式需重新调整，重设一个新的页面 
  
- 收益（总体目标）
    - 暂无
    
- 效果
    - 暂无 
   