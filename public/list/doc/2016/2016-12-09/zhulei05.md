# 朱雷

> 从2016-12-05到2016-12-09

## 富交互效果落地

### 项目背景

在NBA卡片上尝试了类似于Google的富交互打开情景页效果，得到多方认可，现在尝试在具体case上落地，包括正在迁移情景页的百科 & 图片 & 知道和KG项目。

### 收益

预期能够提升用户体验，对pv和收入有正向的影响。

### 完成情况

11.08 开始进行superframe交互机制的打通工作，预计12.12完成

### 计划

- 开发百科 & 图片 入场动画，预计12.14完成
- 产出百科 & 图片 富交互demo，预计12.15完成
- 开发tab入场动画，预计12.19完成
- 升级tab组件，支持单tab展示，其余tab打开情景页的功能，预计12.20完成
- 接入tab富交互入场case，预计接入工作量0.5天

### 效果

[www_zhidao_normal模板, 点击title](http://cp01-ps-fe-4.epc.baidu.com:8003/s?word=%E5%A6%96%E7%A5%9E%E8%AE%B0&sa=tb&ts=8182877&t_kt=0&ie=utf-8&rsv_t=2429LRpFnjrAn7W2rd1BFzZ4fL7vWGHxJtP4sbWk8EgvBVY9Yw%252Bh&rsv_pq=14207835196401434568&ss=101&t_it=1&rqlang=zh&rsv_sug4=1575&inputT=661&oq=%E4%BA%94%E8%A1%8C%E5%A4%A9)

![img](./img/zhulei05/1.png)

## Fusion组件（已上线）

### 项目背景

目前结果页卡片开发使用的组件还是景点的js ui组件，使用起来成本较高，开发思维也是常规的指定式开发。我们希望能够吸收目前业内流行的框架思路，改变原有的组件开发和使用方式，让组件开发思路更明朗，组件性能更高。

### 收益

引入组件生命周期，让组件更可控，简化了组件使用者的使用方式，提升开发效率。

### 完成情况

计划的10个组件全部上线

11个组件分别是：

- b-tabs: 标签页组件
- b-lightbox: 图片预览组件
- b-dialog: 对话框组件
- b-toast: 提示框组件
- b-scroll: 横向滑动组件
- b-popup: 浮层组件
- b-filter: 筛选框组件
- b-share: 分享组件
- b-infinitescroll: 无限下拉组件
- b-city: 城市选择组件
- b-player: 视频播放器组件

### 本周进度

- b-share组件对外暴露了qq分享的接口，供iframe中的页面调用
- b-player视频播放组件上线（赵雷 开发）

自此pmd所有组件迁移完成

### 效果&预览

[http://sfe.baidu.com:8123/doc/](http://sfe.baidu.com:8123/doc/)

### 计划

1. 优化fusion官网
1. 监控组件覆盖模板、pv等数据
1. 持续集成机制探索（Travis CI or Jenkins）
## 百度专家平台（无更新）

### 项目背景

百度专家是独立建站方向最早的一个项目，预期能建立一个覆盖医疗、法律和房产等领域专家的提问平台。

### 收益

吸引流量，建立搜索生态闭环。

### 完成情况

本周我参与了专家平台日志方案的制定，确定使用tc日志，另外引入百度统计用于uv停留时长的统计。tc日志规范由RD@卢田 给到@晓卉

## KG-体育NBA（开发中）

### 项目背景

在体育垂类上尝试创新的交互效果，预期能够提升pv、点击等指标。

### 收益

影响pv 10w，在交互体验上对标谷歌

### 完成情况

- 11月11日 match、team开发完成
- 11月16日 match_news、match_video开发完成
- 11月22日 完成新闻情景页、比赛情景页渐入效果开发
- 11月24日 完成视频模块的结果页到情景页切换、比赛情景页到球队情景页切换效果
- 11月29日 修复了结果页到情景页切换时的闪动问题
- 11月30日 参照material design思想将showcase页面的卡片优化，增加层级感
- 12月07日 修改superframe框架，优化了过渡动画完成后页面的加载速度，大约优化了200ms

### 本周进展

本周继续优化了showcase的效果，提升了过渡动画完成后的页面的加载速度，大约200ms

### 效果

页面地址：[http://cp01-ps-fe-4.epc.baidu.com:8003/s?word=nba](http://cp01-ps-fe-4.epc.baidu.com:8003/s?word=nba)

- tab上滑效果请点击 ![img](http://wiki.baidu.com/download/attachments/246189486/image2016-11-30%2019%3A35%3A48.png?api=v2)
- 比赛情景页入场请点击 ![img](http://wiki.baidu.com/download/attachments/246189486/image2016-11-30%2019%3A36%3A39.png?api=v2)
- 球队情景页入场请在比赛情景页点击 ![img](http://wiki.baidu.com/download/attachments/246189486/image2016-11-30%2019%3A37%3A23.png?api=v2)
- 新闻情景页入场请点击新闻tab下任意条目 ![img](http://wiki.baidu.com/download/attachments/246189486/image2016-11-30%2019%3A38%3A20.png?api=v2)
- 视频情景页入场请点击视频tab下任意条目 ![img](http://wiki.baidu.com/download/attachments/246189486/image2016-11-30%2019%3A38%3A59.png?api=v2)
- 卡片风格参考material design设计原则优化，增加了卡片的层次感，可以对比该页面的每张卡片与线上效果的差异

### 计划(元旦前完成)

- 情景页卡片同样按照material design原则优化，增加层次感
- 优化新闻和视频的展开效果

## 官网模板新增控制通路（无更新）

### 背景

官网模板wise_official对于官网标的显示覆盖不够全面，新增一条控制通路，数据来源由诚信提供，增强官网的识别率

### 完成情况

11.24模板已上线

### 效果预览

query=[牡丹江扣分查询](https://m.baidu.com/s?word=%E7%89%A1%E4%B8%B9%E6%B1%9F%E6%89%A3%E5%88%86%E6%9F%A5%E8%AF%A2&sa=tb&ts=4270010&t_kt=0&ie=utf-8&rsv_t=d8ceEVIQtN1JexCMtX6zXKydIV0VgT5p4YVAuGu00GLHM2WNqvCc&rsv_pq=12637489698434984207&ss=101&t_it=1&rqlang=zh&rsv_sug4=4823&inputT=4515&oq=nba)

![image](./img/zhulei05/1.png)
