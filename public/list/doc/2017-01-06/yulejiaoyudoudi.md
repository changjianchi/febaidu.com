# 娱乐教育兜底汇总
>从2017年1月3日到2017年1月6日
* fe：小琴 阳阳 丽黎 杨奇 鹏远

### 娱乐（小琴、丽黎）
 
#### 网络印象 @小琴、丽黎 
- 背景：
	* 暂无
 
- 完成情况
	* 12.29 初步评审
 
- 本周工作
	* 1.4已给出数据demo
 
- 计划
	* 1.5 给出假数据环境
	* 1.6 开始开发
- 效果图		
![img](http://wiki.baidu.com/download/attachments/258842251/image2017-1-5%2012%3A44%3A40.png?api=v2)

#### 百度沸点人气尖叫榜 @丽黎
 
- 背景
	* 百度明星ALL榜的上线实现了微博、音悦台等几个明星榜单的整合，然而百度并未上线专门为娱乐人物发起的榜单活动。
	* 百度的搜索风云榜单仅仅以搜索指数为衡量标准，并没有设立其他的粉丝行为为明星打榜造势。
 
- 收益
	* 创立以搜索数据和产品数据为基础的榜单，榜单人物排名官方有效，在粉丝范围内具有较大影响力。
	* 通过粉丝的影响力，带动相关明星PV的提升。同时带动语音检索量
 
- 完成情况：
	* 启动开发：12月15日下午-12月22
	* 提测：12月28日-12月29日
	* 模板上线：12月30日，12月31日晚开全量
 
- 本周工作
	* 点赞效果优化 17年1月5日上线
	* 分享计数的优化方案确定
 
- 效果图
 	
	![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/bb42d05645aebb8f8b9abf9fb793a8ca/image.png)	
	
	![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/7218e777c82c2145b957775b2e933f17/image.png)
	
	![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/fd79951f6abbf144edeac8150e92cadd/image.png)
	
 	![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/673048f4d4a7e3292cf989edfa81acb4/image.png)
- 线下预览 [王源](http://cp01-ala-fe-5.epc.baidu.com:8003/s?word=%E7%8E%8B%E6%BA%90&wiseus=10.103.62.34)

- 计划：
	* 联调： 12月23与多模联调
	* 提测： 12月26日下午
	* 整体联调： 12月27
	* 整体提测：12月28日
	* 上线： 12月31日
	
	## 图搜
### KG-图搜 （项目状态：开发中）@小琴，阳阳
* 背景：调研线上图片搜索结果，发现存在以下问题大搜结果页有部分流量向百度域外分发且质量一般，封闭比例有待提升；大搜结果页与图搜落地页跳转交互不够流畅，且跳转速度有优化空间；图搜落地页广告多且相关性存在问题，影响用户的正常信息获取。     
另外，针对部分热门垂类，图搜落地页仍用通用方式满足，对标竞品，结构化信息满足上有较大劣势。针对以上问题，我们希望从热门垂类切入（以装修图片举例）进行优化，打造全新的图片搜索，实现A-B-C三个页面的流畅读图体验。优化大搜结果页与情景页的交互和跳转速度；接入优质资源方，优化情景页数据质量；完善列表页的tag筛选，满足用户的深度需求。针对培训需求，用户有筛选线上线下课程培训，而各资源方提供课程资源较分散
* 预期收益：暂无
* 完成情况：   
	* 汽车的模板已上线，现在0流量中~pm说配置的电调没生效~生效了就开流量~
* 本周工作
    * 优化模板速度~将首屏数据切换为同步数据~已上线~
    * 图搜样式添加~之前没有切tab，人物的数据是需要切tab的~导致需要重新搞模板~这个正在进行中~
* 计划
    * 1月5号或者6号开流量（家装的模板人工评估中~预计本周可以走完单子上线~）
- 效果图（换几张家装的图）

	 ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/06f9e34aa58aaf0bb42b27c50912baf7/image.png)	
	 
	 ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/c1cc3536f2cd9f375ecc6c1c4d98b412/image.png)
	 
	 ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/000a817b3d70f28d77e3c3cfd47ce920/image.png)
	 
     ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/0d68c6ae64ac9455f5dc208625dcee9a/image.png)

### KG-教育 （鹏远，小琴）
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

![img](http://wiki.baidu.com/download/attachments/246189512/image2016-12-15%2012%3A36%3A28.png?api=v2)

![img](http://wiki.baidu.com/download/attachments/246189512/image2016-12-15%2012%3A37%3A0.png?api=v2)
 
### 房产 （鹏远）

#### 家装效果图 （项目状态:联调中）  @ 鹏远 （无更新）
- 背景：效果图是家装需求中核心内容，在家装规划中需求检索量大，入口级产品，医疗行业新的发展方向，有利于解决中国医疗资源不平衡和人们日益增加的健装KG，从而通过用户需求连接服务，提供家装知识
- 收益：影响PV 暂无，GMV 暂无
- 开发模板
    aladdin: decoration
- **完成情况**
    现在联调中，预计12月16日提测。
- 本周进展
    卡片开发完成，现在正在联调，情景页部分复用阳阳美图的情景页，模版最终与情景页一起上线。
 
- 计划
    12月16日提测
    12月6开始联调
    11月30开始开发
 
- 效果图

 	![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/22b5e406cec17d262eae3e97ce9ad4bc/image.png)
	
### 兜底 （鹏远）
 
#### kg 人物手百下输入框展现不稳定bug追踪，兆明跟进，目前解决方案还需优化 @Lily
 
#### top_nav title 升级（12月14日上线）@Lily
 
#### 新机制平台 （项目状态：提测中） @ 鹏远 
- 背景：阿拉丁发布开放性行业整合通告，聚拢搜索流量到阿拉丁内部分发，提高高质量中小网站的露出和做大机会，发挥搜索作为流量上游的分发力和影响力。
- **完成情况**
    12月29日提测
- 计划	
    预计1月10号（周二）上线
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
    首页开发完毕，联调并提测，预计下周二上线
- 效果图
	
 ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/6ffb762ff08651c73fa8d05c025d2f32/image.png)
 ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/eb4fcaa070163e09e438b731c1513ace/image.png)
 ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/b77b5e10d265b5527c6830bcb6a75d28/image.png)
 ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/c0cb6e82a65a9dfed0474d32ec2d6f90/image.png)


	
 
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
#### 百度百科文字优化	（项目状态：已上线）@杨奇
- 背景：百度百科文字样式改变。
- 开发模板
    aladdin：bk_polysemy
- **完成情况**
    启动时间1月4日
    完成时间1月5日
- 本周进展
    完成文字样式修改
- 计划
    1月5日上线
- 链接

	[线下链接](https://wwwhttps.baidu.com/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=bk_polysemy&dev_path=searchaladdin&dev_tpltype=default&sid=99999&dev_online=1&wd=%E8%83%A1%E6%AD%8C&word=%E8%83%A1%E6%AD%8C)
- 效果图

	![image](http://wiki.baidu.com/download/attachments/246189522/image2017-1-5%2013%3A2%3A14.png?api=v2)
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
- 链接
	
	[线下链接](https://wwwhttps.baidu.com/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=bk_polysemy&dev_path=searchaladdin&dev_tpltype=default&sid=99999&dev_online=1&wd=%E9%9B%AA%E8%B1%B9%E7%99%BE%E5%BA%A6%E7%99%BE%E7%A7%91&word=%E9%9B%AA%E8%B1%B9%E7%99%BE%E5%BA%A6%E7%99%BE%E7%A7%91)
- 效果图

	![image](http://wiki.baidu.com/download/attachments/246189522/image2017-1-5%2011%3A27%3A46.png?api=v2)