# 娱乐教育兜底汇总
>从2017年1月7日到2017年1月13日
* fe：小琴 阳阳 丽黎 杨奇 鹏远

## KG-教育 （鹏远，小琴）
### 培训课程 （项目状态：已上线）@小琴 `无更新`
* 背景：针对培训需求，用户有筛选线上线下课程培训，而各资源方提供课程资源较分散
* 预期收益：暂无
* 完成情况
	* 12.29 模板已上线
	* 12.20-12.22 qa测试中
	* 12.15 pm数据评估中
	* 12.8-12.13联调
	* 11.23 进行进一步评审
    * 11.24 结果页数据格式已给出
* 问题
	* 发现AE资源的异步请求的数据结构与之前规范不一致，需求已发邮件给openapi的rd，待排期
	* AE资源加密参数，污染原有数据结构，晓晖跟进中，预计12.15上线
* [线下预览](http://cp01-ala-fe-plat-2.epc.baidu.com:8003/s?word=UI%E8%AE%BE%E8%AE%A1%E5%9F%B9%E8%AE%AD&sa=tb&ts=1562901&t_kt=0&ie=utf-8&rsv_t=e2d87p5giAhu4n%252Fx9mqz1YY3oFLpN9MbWbKsDasr6%252FHN3P1NHxHD&rsv_pq=8527989724491112251&ss=101&rqlang=zh&rsv_sug4=9871&inputT=9261&oq=%E5%B0%A4%E5%85%8B%E9%87%8C%E9%87%8C%E5%9F%B9%E8%AE%AD)
* 效果图
<p> ![img](http://wiki.baidu.com/download/attachments/246189512/image2016-12-15%2012%3A36%3A28.png?api=v2)</p>
<p> ![img](http://wiki.baidu.com/download/attachments/246189512/image2016-12-15%2012%3A37%3A0.png?api=v2)</p>


百度沸点人气尖叫榜rmd：百度沸点人气尖叫榜MRD12.12.docx
### 娱乐（小琴、丽黎）
 
#### 网络印象 @小琴、丽黎 
- 背景：
	* 针对娱乐话题人物（明星、网红、新闻人物、事件）实时抓取各渠道（新闻媒体、微博话题、视频弹幕、天涯贴吧）的内容信息，智能提取网民观点，并同时通过情感分析归类正面负面。让用户可以轻松看到网络各方对于事件人物的实时态度与评价。
 
- 目标：
	* 一期，TOP200 娱乐人物 影响面 900w/d
	* 二期，TOP500 娱乐人物 影响面 1200w/d
 
- 完成情况
	* 1.4已给出数据demo
	* 12.29 初步评审
 
- 本周工作
	* 1.11 已完成结果页静态文件开发 @小琴
 
- 计划
	* 1.13 给出情景页ue设计终稿
	* 1.13 给出情景页环境和异步请求接口
	* 1.16-1.20 完成情景页开发及联调 @丽黎
- [线下预览](https://wwwhttps.baidu.com/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=impress&dev_path=searchaladdin&dev_tpltype=default&sid=99999&dev_online=0&dev_file=default.xml&dev_fileformat=xml&dev_pos=asResult&wd=%E6%9E%97%E4%B8%B9%E5%AD%90%E5%A5%B3%E7%BA%BF%E4%B8%8B&word=%E6%9E%97%E4%B8%B9%E5%AD%90%E5%A5%B3%E7%BA%BF%E4%B8%8B)
- 效果图		
<p>![img](http://wiki.baidu.com/download/attachments/258842251/image2017-1-12%2010%3A51%3A20.png?version=1&modificationDate=1484189479774&api=v2)
</p>

#### 百度沸点人气尖叫榜(分享投票以及第一次点赞tip迭代) @丽黎
 
- 背景
	* 百度明星ALL榜的上线实现了微博、音悦台等几个明星榜单的整合，然而百度并未上线专门为娱乐人物发起的榜单活动。
	* 百度的搜索风云榜单仅仅以搜索指数为衡量标准，并没有设立其他的粉丝行为为明星打榜造势。
 
- 收益
	* 创立以搜索数据和产品数据为基础的榜单，榜单人物排名官方有效，在粉丝范围内具有较大影响力。
	* 通过粉丝的影响力，带动相关明星PV的提升。同时带动语音检索量
 
- 完成情况：
	* 启动开发：1月11日
	* 提测：1月11日下午
 
- 本周工作
	* 第一次点赞头像出现 tip提示开发
	* 分享计数的优化	
	
 
- 效果图
 	<p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/86bb99935ddb6524fac79fe9ea1bccd9/image.png)</p>
- 线下预览 [王源](https://wwwhttps.baidu.com/sf?pd=schedule&from_sf=1&word=%E5%BC%A0%E6%9F%8F%E8%8A%9D&title=%E7%99%BE%E5%BA%A6%E6%B2%B8%E7%82%B9%E4%BA%BA%E6%B0%94%E5%B0%96%E5%8F%AB%E6%A6%9C&top=%7B%22sfhs%22%3A2%7D&ms=1&ms=1&resource_id=4067&dspName=iphone&openapi=1&tn=tangram&lid=10960809751938716301&frsrcid=4068&frorder=10)

- 计划：	
	* 上线： 1月13日

 
#### pc端音乐v榜xss漏洞修复 @丽黎
- 完成情况
	* 修复时间：1月10日修复完毕
    * 上线时间：1月12日上线
 
#### 人物sigma头图优化 @小琴
* 本周工作
	* 模板已优化完成，预计1.12上线
 
#### 百度音乐播放列表跳转bug @小琴
* 完成情况
	* 1.11 问题已定位，桥梁静态页面服务失效，需重新部署
	* 1.12 百度音乐同学已修复组件，待测试及上线
* 计划
	* 1.20之前上线
 

### 图搜 （小琴，阳阳）

#### KG-图搜（升级,无进展） （项目状态：开发中）@阳阳
- 背景：添加切tab的样式
- 收益：影响PV 暂无，GMV 暂无
- 开发模板
	无新增模板
- **完成情况**
	1月6号已升级完成~rd一直在忙天气的事情~目前无暇顾及~
- 本周进展
	1月6号完成，等待进一步联调
 
- 线下预览地址
	[林允儿](http://cp01-rec-platform-test01.epc.baidu.com:8003/s?word=%E6%9E%97%E5%85%81%E5%84%BF&sid=101466&wiseus=10.103.67.36)
 
- 效果图
 	<p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/e083cc58c8b655a80c6f1278956ac6a5/image.png)</p>
    <p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/0ea3e1019d27026ab33bb995b3006386/image.png)</p>
 
#### KG-图搜 （家装图片项目状态：0流量中）@小琴，阳阳
- 背景：家装模板复用图搜模板
- 收益：影响PV 暂无，GMV 暂无
- 开发模板
	新增模板结果页模板：decoration
- **完成情况**
	1月10号上线模板~1月11号上线0流量
- 本周进展
	1月10号上线模板~1月11号上线0流量
 
- 线上预览地址
	<p>[家装效果图](https://m.baidu.com/s?word=%E5%AE%B6%E8%A3%85%E6%95%88%E6%9E%9C%E5%9B%BE&sid=101470)</p>
 
- 效果图
 	<p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/729f0e907d04f60d3f4dcdb0abfd9ab7/image.png)</p>
    <p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/5e0c04758e2508c9a93962099ee90c08/image.png)</p>
    <p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/ec281a0ed195f92fe7d5fb3fec23c372/image.png)</p>
    <p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/243b2d87595400dc5aa5d1d75e454089/image.png)</p>
 
#### 家装计算器(@阳阳)
- 背景：装修预算计算器是家装线上服务转化线下成交重要的产品，阿拉丁装修预算计算器是满足用户获取家装整体预算及明细的产品，
使用户能够了解多家装修公司的预算及明细，减少线下决策时间。通过家装的产品完善,打造家装KG频道，使用户需求快速对接服务，
并提供相应的家装知识。
- 收益：影响PV 暂无，GMV 暂无
- 开发模板
	无新增模板
- **完成情况**
	结果页1月11号基本完成，1月12号介入情景页开发
- 本周进展
	结果页1月11号基本完成，1月12号介入情景页开发，rd12号给mini数据
 
- 线下预览地址
	[林允儿](http://cp01-rec-platform-test01.epc.baidu.com:8003/s?word=%E6%9E%97%E5%85%81%E5%84%BF&sid=101466&wiseus=10.103.67.36)
 
- 效果图
 	<p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/611cd5c3f927e06eac65c803a884b353/image.png)</p>


	

### 兜底 （鹏远）
  
#### 新机制平台 （项目状态：已上线） @ 鹏远 
- 背景：阿拉丁发布开放性行业整合通告，聚拢搜索流量到阿拉丁内部分发，提高高质量中小网站的露出和做大机会，发挥搜索作为流量上游的分发力和影响力。
- **完成情况**
	平台已上线，修复兼容性bug，1月12日上线
- 计划	
	1月11号（周二）上线
	首页 1天 （1月3日)
	schema页面 （小琴完成）
    12月29提测
	12月26-12月29联调中
	资源提交页 3天 12月21日-12月26日
    类目提交资源页 (二期开发）
	资源列表页 3天 （已完成）
	查看数据统计页 3天（二期开发）
	个人中心首页 3天(静态页面已完成)
	
- 本周进展
	1月11号（周二）上线，修复兼容性bug，1月12日上线，[线上地址](http://open.baidu.com/)
- 效果图
	
 <p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/6ffb762ff08651c73fa8d05c025d2f32/image.png)</p>
 <p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/eb4fcaa070163e09e438b731c1513ace/image.png)</p>
 <p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/b77b5e10d265b5527c6830bcb6a75d28/image.png)</p>
 <p>![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/c0cb6e82a65a9dfed0474d32ec2d6f90/image.png)</p>
 
 
#### Wise2017春晚sigma大卡 （项目状态：开发中） @ 鹏远 
- 背景：春晚为中国最受关注晚会之一，临近春晚时，春晚资讯、节目表相关需求愈强，为了更好的满足春晚相关query的搜索体验且为百度用户增添一份年气，故进行春晚sigma卡片的设计开发。
- **完成情况**
	开发中。
- 计划	
	1月11介入开发
    预计1月17日上线
	
- 本周进展
	开发中
- 效果图
	<p><img src="../2017-01-12/img/v_qipengyuan/01.jpg" width="320"></p>
    <p><img src="../2017-01-12/img/v_qipengyuan/02-1230.jpg" width="320"></p>
    <p><img src="../2017-01-12/img/v_qipengyuan/03-1230.jpg" width="320"></p>
    <p><img src="../2017-01-12/img/v_qipengyuan/04-1230.jpg" width="320"></p>
    <p><img src="../2017-01-12/img/v_qipengyuan/05.jpg" width="320"></p>
    <p><img src="../2017-01-12/img/v_qipengyuan/06.jpg" width="320"></p>
    <p><img src="../2017-01-12/img/v_qipengyuan/07.jpg" width="320"></p>
 
#### normal_link模板升级  （项目状态：暂停） @杨奇  `无更新`
- 背景：底部链接改成了九宫格， 辅助信息要求资源方新加字段独立样式。
- 开发模板
 	aladdin：normal_link
- **完成情况**
	启动时间12月13日
	暂停时间12月16日
	暂停原因：节日项目标注着急优先级高，先开发节日项目。
- 本周进展
	更改测试机预处理文件，添加新字段。
- 计划
	预计1月10日上线
- 链接
	[线下链接](https://wwwhttps.baidu.com/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=normal_link&dev_path=searchaladdin&dev_tpltype=default&sid=99999&dev_online=1&wd=cpa&word=cpa)
- 效果图
	![image](http://wiki.baidu.com/download/attachments/246189522/image2016-12-15%2019%3A19%3A14.png?api=v2)
#### 秒懂百科   （项目状态：开发中） @杨奇
- 背景：百度百科图片点击url改成接入秒懂视频，尝试两种接入方案。
- 开发模板
	aladdin：bk_polysemy
- **完成情况**
	启动时间1月5日
- 本周进展
	本周完成两种接入方案
- 计划
	1月5日完成
	预计1月13日上线
- 链接
	[线下链接](https://wwwhttps.baidu.com/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=bk_polysemy&dev_path=searchaladdin&dev_tpltype=default&sid=99999&dev_online=1&wd=%E9%9B%AA%E8%B1%B9%E7%99%BE%E5%BA%A6%E7%99%BE%E7%A7%91&word=%E9%9B%AA%E8%B1%B9%E7%99%BE%E5%BA%A6%E7%99%BE%E7%A7%91)
- 效果图
	<p>![image](http://wiki.baidu.com/download/attachments/246189522/image2017-1-5%2011%3A27%3A46.png?api=v2)</p>
#### 春节祝福语    （项目状态：开发中） @杨奇
- 背景：春晚为中国最受关注晚会之一，临近春晚时，春晚资讯、节目表相关需求愈强，为了更好的满足春晚相关query的搜索体验且为百度用户增添一份年气，故进行春晚sigma卡片的设计开发。
- 开发模板
	aladdin：sg_blessing
- **完成情况**
	启动时间1月11日
- 本周进展
	完成滑动功能和大概布局
- 计划
	1月19日上线
- 链接
	[线下链接](https://wwwhttps.baidu.com/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=sg_blessing&dev_path=searchaladdin&dev_tpltype=default&sid=99999&dev_sigma=1&dev_online=0&dev_file=default.xml&dev_fileformat=xml&dev_pos=asResult&wd=%E6%98%A5%E8%8A%82%E7%A5%9D%E7%A6%8F%E8%AF%AD&word=%E6%98%A5%E8%8A%82%E7%A5%9D%E7%A6%8F%E8%AF%AD)
- 效果图
	<p>![image](http://wiki.baidu.com/download/attachments/246189522/image2017-1-12%2010%3A49%3A45.png?api=v2)</p>

