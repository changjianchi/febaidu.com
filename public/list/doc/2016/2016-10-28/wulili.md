# 吴丽黎

> 从2016-10-24到2016-10-28

## 生活服务 - （吴丽黎）

### 生活服务 - GMV （吴丽黎）
#### 糯米-tp (验证中)

- 项目背景
为更好的满足用户生活服务相关的需求，以tp的形式接入相关服务资源方，为用户直接高质量的上门服务

- 收益（总体目标）
 
暂无

- 完成情况（时间点达到的里程碑）
   
   * 启动时间: 10月17日
   * 提测时间: 因rd请假无人联调，21日联调，预计21日提测
   * 小流量上线时间:
   * 全量时间点、PV值
   * 扩量时间点、PV值
   * 增加新卡上线时间点：模板=rota_tp，资源id=4348。    

- 本周进展
 
	<font color=#f00 size=3>因糯米数据准备不充分，截止到10月25日完成安卓和ios的数据联调，并提测，26日走单</font>
	
  
- 效果预览 [北京挂机空调清洗](http://cp01-ala-fe-col-2.epc.baidu.com:8003/s?word=%E5%8C%97%E4%BA%AC%E6%8C%82%E6%9C%BA%E7%A9%BA%E8%B0%83%E6%B8%85%E6%B4%97&wiseus=10.103.62.33)

- 效果图 
 
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/21e0f797b37fed6fa533dba9df2d7e61/image.png)

- 计划

暂无后续计划。


### 生活服务 - GMV （吴丽黎）

#### 手机及流量充值卡片(待上线)

- 项目背景

线上充值业务资源方为钱包，针对非钱包用户体验较差（需绑定钱包银行卡后方可充值），需进行优化。

-  收益（总体目标）

PV2W

- 完成情况（时间点达到的里程碑）
   
   * 启动时间: 16年9月21日
   * 提测时间: 10月13日，QA 14日下午才有人力跟进
   * 小流量上线时间: 
   * 全量时间点、PV值
   * 扩量时间点、PV值
   * 增加新卡上线时间点：模板=rotarecharge，sid=102160，资源id=31876。 

- 本周进展 
   * 排期：16年9月21日-9月23日，3个工作日，26日-28日联调。
   * 测试时长增加的原因：糯米下单数据不全，导致无法正常跑完整个流程  
   * 10月19日下午会面，因糯米不能同时提供手机充值和流量充值的链接，模板需求方案变更
   * 10月20日按新需求迭代代码，实现默认面额不匹配高亮的处理，手机号验证的优化、以及tab隐藏   
   * 因糯米接口没有符合jsonp以及下单页没有开发完成导致联调延期 ， 10月12日列表接口调通，下单页手机充值50元的调通【其他面额暂时没有下单信息】）
   
   *** 项目延期原因阐述：
   
1、这次合作的糯米同学第一次接入大搜，对相关工作内容不熟悉 

2、糯米方的页面开发延期，导致项目整体联调进度拖后 

3、提测后，糯米方的数据不全问题引发需求变更和返工导致项目迟迟不能完结

4、糯米同学负责的页面测试出来的问题较多，因解决时长较长，导致整体项目延期



- 效果预览 [话费充值](https://wwwhttps.baidu.com/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=rotarecharge&dev_path=searchaladdin&dev_tpltype=default&sid=99999&dev_online=0&dev_file=default.xml&dev_fileformat=xml&dev_pos=asResult&wd=%E8%AF%9D%E8%B4%B9%E5%85%85%E5%80%BC&word=%E8%AF%9D%E8%B4%B9%E5%85%85%E5%80%BC&uid=1474551544488_100&ssid=aa25f62fd955fae2fb44bff9b1bf95ac.3.1474551585.1.mKjE0NzlabVk)

- 效果图  

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/0e05e27cc4a68a7e8dd15e55a583abfe/image.png)
 
### 移动生活服务   政务公积金自然结果聚簇开发 【项目暂时暂停】
-
 背景
 
mrd没有提供，暂无

- 完成情况
	* 启动时间: 7月25日
  	* 提测时间: 7月25日
   	* 小流量上线时间: 
   	* 全量时间点、PV值
   	* 扩量时间点、PV值
   	* 增加新卡上线时间点：模板=rota_normal

- 本周进展

无进展
 
- 效果预览 [北京公积金](http://cp01-ala-fe-col-2.epc.baidu.com:8003/s?word=%E6%B7%B1%E5%9C%B3%E5%85%AC%E7%A7%AF%E9%87%91%E6%8F%90%E5%8F%96&wiseus=10.92.75.16)

- 效果图 
 
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/8249b7c51beee35ef14fa832fb4661c8/image.png)

## 娱乐八卦 （吴丽黎）
### 八卦人物 （待上线 -- 本周给出相关性问题的最终方案，确定模板上线时间）
- 项目背景
八卦阿拉丁已在人物query下小流量实验，用户体验略正，并能有效提升用户媒体时长与搜索生态控制力，符合哥伦布宏观目标，需尽快退全上线。
- 收益
 * 预计影响面 ：根据小流量实验表现，用户媒体时长相对增加3.01%，生态控制力相对增加 4.28%，预计优化pv1000w。
- 完成情况（时间点达到的里程碑）
 * 启动时间: 16年9月18日
 * 提测时间: 9月20日
 * 小流量上线时间: 
 * 全量时间点、PV值：
 * 扩量时间点、PV值： 
- 本周进展
 无进展

- 效果预览 [赵丽颖](https://wwwhttps.baidu.com/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=general_person_relate&dev_path=searchaladdin&dev_tpltype=default&sid=99999_108405&dev_online=1&wd=%E8%B5%B5%E4%B8%BD%E9%A2%96&word=%E8%B5%B5%E4%B8%BD%E9%A2%96)
- 效果图 

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/46a1562389ac14544f46a784d40745d4/image.png)

- 计划

### 历史人物 （饶少艳）
#### 历史人物传闻卡 （小流量- <font color=#f00 size=3 >持平结论，准备上线全流量，正在圈query</font>）
- 项目背景
例如q=康熙，乾隆等，搜索结果中用户针对其历史故事、人物评价、传闻轶事都有一定的需求，故设计历史人物卡片，引导用户进行人物传闻分析。
- 收益
 * 预计影响面： 
全量：100w/day；
小流量试验：30w/day；
对照组，实验组各15w/day。
 * 目前无小流量试验收益情况，本周给出结论。
- 完成情况（时间点达到的里程碑）
 * 启动时间: 16年8月29日
 * 提测时间: 9月02日
 * 小流量上线时间: 9月06日
 * 全量时间点、PV值：
 * 扩量时间点、PV值：
 * 增加新卡上线时间点：模板=per_hist，资源id=31844。 
- 本周进展
 * 本周无进展
- 效果预览 [乾隆](https://m.baidu.com/s?word=%E4%B9%BE%E9%9A%86&sid=109829)
- 计划

## 百度榜单

### 明星榜单 - （吴丽黎）

#### 明星榜单大全 （已全量上线）
- 项目背景
粉丝群体容易调动、愿意参与，对明星偶像的应援具有需求痛点；
对影响力的理解和评价来自于感性的认知，行业中缺乏对不同明星统一量化的评价方式。
- 收益
 * 预计影响面：250w PV
- 完成情况（时间点达到的里程碑）
 * 启动时间: 16年7月28日
 * 提测时间: 9月08日
 * 小流量上线时间: 
 * 全量时间点、PV值：9月23日
 * 扩量时间点、PV值：
 * 增加新卡上线时间点：sigma模板=person_info，资源id=46335；card模板=list_home，资源id=31635，card模板=list_rank，资源id=31618
- 本周进展
 无进展
 
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/d156b438ded98070cb2ebde911938f7d/image.png)

 * 分享问题修复，浮层开发（1.5个工作日，提测半天，计划10月14日上线）
 
- 效果预览 [杨洋](http://nj03-psdy-aladdin070.nj03.baidu.com:8003/sf?pd=ent_dabang&openapi=1&dspName=iphone&from_sf=1&resource_id=31635&word=%E6%9D%A8%E6%B4%8B&tn=tangram&title=%E7%99%BE%E5%BA%A6%E6%98%8E%E6%98%9FALL%E6%A6%9C&top=%7B%22sfhs%22%3A2%7D&lid=5646702246468398892&ms=1&frsrcid=46335&frorder=1)
 
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/e6c620520c6e044c03d4798d2dd93231/image.png)

- 效果预览 [陈伟霆](https://m.baidu.com/s?word=%E9%99%88%E4%BC%9F%E9%9C%86)
 
- 效果图 

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/9cdf900634f781fd9b1f5eaab5bbf6a7/image.png)
          
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/98aa8817b8e833635cd62f7fe6959607/image.png)
        
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/bb67873f4e2e6e779267d031918a73ec/image.png)

- 计划

国庆节前上线模板。
 
#### 明星蛋糕雨-运营 （联调中）
- 项目背景
明星生日是很容易与粉丝产生互动的时间节点。多个直播平台、社交平台、媒体平台，都会利用这个时间点，做出动作。在此前，百度虽然有大量流量但在这块并没有涉足。现在我们希望能够借助这个时间节点，能够和艺人发生联系，搭建营销场景，在更有效的掌控明星资源的同时，为搜索带来更大收益。同时可发展为一个用户型产品的商业模式
- 收益
 * TO明星：百度在对应时间节点提供更多独特资源明星care这些推广资源
 * TO粉丝：粉丝喜欢针对自家明星有这种创意的小特效，同时后期我们会将此进行包装，以任务的形式，让粉丝完成，给粉丝的感觉是大家合力在送明星礼物，
 * TO百度：增加各类大搜的数据指标（pv、点击等）、增加百度对于明星的掌控力、增加百度的商业收入。甚至在后期我们还会加入更多元素，搭建营销场景，引入更多可玩内容如（直播、feed等等）
- 完成情况（时间点达到的里程碑）
 * 启动时间: 16年10月21日
 * 提测时间: 16年10月28
 * 小流量上线时间: 
 * 全量时间点、PV值：
 * 扩量时间点、PV值：
 * 增加新卡上线时间点：sigma模板=person_info，资源id=46335；
 
- 本周进展

 * <font color=#f00 size=3 >10月21日-10月25日蛋糕雨特效开发完毕</font>
 * <font color=#f00 size=3 >10月26-10月27蛋糕雨微调、以及所剩功能开发</font> 
 
- 效果预览 [吴亦凡](http://yq01-psdy-diaoyan1002.yq01.baidu.com:8003/s?word=%E5%90%B4%E4%BA%A6%E5%87%A1)
 
- 效果图 
 
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/466bce5832bf110ad2f113020f805d68/image.png)

- 计划
 * 项目进行正常
 * 若这次效果收益好，会考虑新增点蜡烛、吹蜡烛等活动
 
#### 音乐版权 （待上线）
- 项目背景
近期百度音乐新增了一批带有版权的音乐。根据版权合作协议，该类歌曲须跳转到落地页进行播放。
- 收益
 * 100w pv
 * 为用户提供正版音乐，扩大音乐覆盖面，提高用户体验
 
- 完成情况（时间点达到的里程碑）
 * 启动时间: 16年10月27日
 * 提测时间: 16年10月27
 * 小流量上线时间: 16年10月28
 * 全量时间点、PV值：100w
 * 扩量时间点、PV值：
 * 增加新卡上线时间点：sigma模板=musicsong，music_lrc,muisc_lrc_r资源id=8041；
- 本周进展
 * <font color=#f00 size=3 >10月27日开发完、提测</font>
 * <font color=#f00 size=3 >10月28日上线</font> 
 
- 效果预览 [找一个不伤心的理由](http://cp01-ala-fe-col-2.epc.baidu.com:8003/s?word=%E6%89%BE%E4%B8%80%E4%B8%AA%E4%B8%8D%E4%BC%A4%E5%BF%83%E7%9A%84%E7%90%86%E7%94%B1)
[找一个不伤心的理由歌词](http://cp01-ala-fe-col-2.epc.baidu.com:8003/s?word=%E6%89%BE%E4%B8%80%E4%B8%AA%E4%B8%8D%E4%BC%A4%E5%BF%83%E7%9A%84%E7%90%86%E7%94%B1%E6%AD%8C%E8%AF%8D)
[在无数个夜里总在导演我自已](http://cp01-ala-fe-col-2.epc.baidu.com:8003/s?word=%E5%9C%A8%E6%97%A0%E6%95%B0%E4%B8%AA%E5%A4%9C%E9%87%8C%E6%80%BB%E5%9C%A8%E5%AF%BC%E6%BC%94%E6%88%91%E8%87%AA%E5%B7%B2)
 
- 效果图 

单曲：

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/f77001b45e306d08ec1cb254807a7ecb/image.png)

正查：

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/938a95eb26e86b196eda9af359dcab38/image.png)

反查：

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/b559f1e7df949468c18038974e2602da/image.png)

- 计划
 暂无
 
#### 百科秒懂人物 （开发中）
- 项目背景
秒懂百科作为百科原创优质内容，目前在百科页面中点击率约5%。实验引入预期提升结果页资源丰富度，同时延长搜索媒体时长。
- 收益
 * TO明星：百度在对应时间节点提供更多独特资源明星care这些推广资源
 * TO粉丝：粉丝喜欢针对自家明星有这种创意的小特效，同时后期我们会将此进行包装，以任务的形式，让粉丝完成，给粉丝的感觉是大家合力在送明星礼物，
 * TO百度：增加各类大搜的数据指标（pv、点击等）、增加百度对于明星的掌控力、增加百度的商业收入。甚至在后期我们还会加入更多元素，搭建营销场景，引入更多可玩内容如（直播、feed等等）
- 完成情况（时间点达到的里程碑）
 * 启动时间: 16年10月27日
 * 提测时间: 16年10月28
 * 小流量上线时间: 预计 10月31日
 * 全量时间点、PV值：
 * 扩量时间点、PV值：
 * 增加新卡上线时间点：sigma模板=person_info，资源id=46335；
- 本周进展
 * <font color=#f00 size=3 >迭代内容：将百科秒懂内容接入视频合作播放页，在人物垂类idol特型中新增视频播放入口，跳转至合作播放页。观察用户体验数据变化与产品收益。根据实验效果，考虑后续白卡引入秒懂方案。</font>
 * <font color=#f00 size=3 >10月27开发完毕</font>
 * <font color=#f00 size=3 >10月28联调、提测</font> 
 
- 效果预览 [陈翔](http://yq01-psdy-diaoyan1002.yq01.baidu.com:8003/s?word=%E9%99%88%E7%BF%94)
 
- 效果图 
 
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/ba3c765f2a92bda60641ebdf6ac275cc/image.png)

- 计划

