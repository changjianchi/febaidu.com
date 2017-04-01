# 娱乐教育兜底汇总
> 2016-12-26到2016-12-30
* fe：小琴 阳阳 丽黎 杨奇 鹏远


## KG-教育 （鹏远，小琴）
### 培训课程 （项目状态：模板已上线，待开流量）@小琴
* 背景：针对培训需求，用户有筛选线上线下课程培训，而各资源方提供课程资源较分散
* 预期收益：暂无
* 完成情况
	* 12.20-12.22 qa测试中
	* 12.15 pm数据评估中
	* 12.8-12.13联调
	* 11.23 进行进一步评审
    * 11.24 结果页数据格式已给出
* 本周工作
    * 模板12.29上线，流量需等架构升级new_need_di加密逻辑（顺利的话，12.30上线）再开
* 计划
    * 12.30之前上线
* 问题
	* 发现AE资源的异步请求的数据结构与之前规范不一致，需求已发邮件给openapi的rd，待排期
	* AE资源加密参数，污染原有数据结构，晓晖跟进中，预计12.15上线
* [线下预览](http://cp01-ala-fe-plat-2.epc.baidu.com:8003/s?word=UI%E8%AE%BE%E8%AE%A1%E5%9F%B9%E8%AE%AD&sa=tb&ts=1562901&t_kt=0&ie=utf-8&rsv_t=e2d87p5giAhu4n%252Fx9mqz1YY3oFLpN9MbWbKsDasr6%252FHN3P1NHxHD&rsv_pq=8527989724491112251&ss=101&rqlang=zh&rsv_sug4=9871&inputT=9261&oq=%E5%B0%A4%E5%85%8B%E9%87%8C%E9%87%8C%E5%9F%B9%E8%AE%AD)
* 效果图    
![img](http://wiki.baidu.com/download/attachments/246189512/image2016-12-15%2012%3A36%3A28.png?api=v2)  
![img](http://wiki.baidu.com/download/attachments/246189512/image2016-12-15%2012%3A37%3A0.png?api=v2)

### 娱乐（小琴、丽黎）
 
#### 音乐泛需求 @丽黎 【小流量 sid 101473】 `无更新`
- 背景：
	* 针对移动端，例如q=好听的歌等进行线上卡片时效性、资源多元化太少，故高优进行线上卡片优化。
	* 影响面：全量影响面约60w/day
 
- 完成情况
	* 开发：12月8日开发
	* 联调：12月9日联调
	* 提测：12月12日
	* 上线：12月14日
 
- 本周工作
	* 12月12日送测
	* 12月14日模板上线
 
- 效果图    
 
	![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/4fcc05768b15e8574f43417a29468902/image.png)
 
- 线上预览 [欧美歌曲](https://m.baidu.com/s?word=%E6%AC%A7%E7%BE%8E%E6%AD%8C%E6%9B%B2&sid=101473)
 
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
	* 模板上线：12月30日
 
- 本周工作
	* 与多模联调，以及公共功能的迁移工作
	* 提测以及测试回归
	* 12月26日规则页 list_rule 已上线
	* 12月29日沸点榜单白卡 game_baidu_encnyclopedia 模板已上线，零流量
	* 12月30日 沸点剩余模板上线 person_info person_boil
 
- 效果图
 	
	![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/b375babbf4a1d38d696402d8cf790eba/image.png)  	
	![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/ddeda98c357ba4b76d96d17be011ca05/image.png)  
	![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/8cba017a1f9d651a1927f778b5e82f9b/image.png)  
	![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/c5f23586321013b245bd05597e8ad019/image.png)
 
- 线下预览 [王俊凯](http://cp01-ala-fe-5.epc.baidu.com:8003/sf?from_sf=1&word=%E7%8E%8B%E4%BF%8A%E5%87%AF&ms=1&title=%E7%8E%8B%E4%BF%8A%E5%87%AF&resource_id=4067&top=%7B%22sfhs%22%3A2%7D&dspName=iphone&openapi=1&tn=tangram&pd=starkg)


- 计划：
	* 联调： 12月23与多模联调
	* 提测： 12月26日下午
	* 整体联调： 12月27
	* 整体提测：待定
	* 上线： 12月31
 
#### idol独家活动子卡 @丽黎  `无更新`
- 需求描述
	1、第一行标题飘蓝
	2、左图右文，右边可编辑4行文字，字号：42号字，字色：#333。每行文字皆可将部分编辑为橙色高亮
	3、整张卡片为一个点击区域
 
- 本周工作
	* 需求迭代，样式更改、链接区域扩大	
 
- 效果图
 
![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/c38fed93a09f7467d7c31b72fda25d25/image.png)
 
- 预览 [刘诗诗](http://cp01-ala-fe-col-2.epc.baidu.com:8003/s?word=%E5%88%98%E8%AF%97%E8%AF%97)
 
## 图搜
### KG-图搜 （项目状态：已上线）@小琴，阳阳
* 背景：调研线上图片搜索结果，发现存在以下问题大搜结果页有部分流量向百度域外分发且质量一般，封闭比例有待提升；大搜结果页与图搜落地页跳转交互不够流畅，且跳转速度有优化空间；图搜落地页广告多且相关性存在问题，影响用户的正常信息获取。     
另外，针对部分热门垂类，图搜落地页仍用通用方式满足，对标竞品，结构化信息满足上有较大劣势。针对以上问题，我们希望从热门垂类切入（以装修图片举例）进行优化，打造全新的图片搜索，实现A-B-C三个页面的流畅读图体验。优化大搜结果页与情景页的交互和跳转速度；接入优质资源方，优化情景页数据质量；完善列表页的tag筛选，满足用户的深度需求。针对培训需求，用户有筛选线上线下课程培训，而各资源方提供课程资源较分散
* 预期收益：暂无
* 完成情况：   
	* 12.20-23 人工评估中~预计12月23号走三级单子~
* 本周工作
    * 走三级单中~顺利的话今天上线~~预计今天或者12月30号上线
* 计划
    * 
- 效果图    

	 ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/3b35fcaa69f24f905ebb31c5308c5204/image.png)      	
	 ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/a86064e32a9af1552a684c370d30fabc/image.png)      
	 ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/5f7a2fed231762f608e58e3e77927a07/image.png)      
     ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/1d0def31f971083dbbc964727cba4be0/image.png)     
     
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
 
#### 新机制平台 （项目状态：联调中） @ 鹏远 
- 背景：阿拉丁发布开放性行业整合通告，聚拢搜索流量到阿拉丁内部分发，提高高质量中小网站的露出和做大机会，发挥搜索作为流量上游的分发力和影响力。
- **完成情况**
	12月29日提测
- 计划	
    12月29提测
	12月26-12月29联调中
	资源提交页 3天 12月21日-12月26日
    类目提交资源页 (二期开发）
	资源列表页 3天 （已完成）
	查看数据统计页 3天（二期开发）
	个人中心首页 3天(静态页面已完成)
- 本周进展
	开发完毕，12月29日和ue对样式，提测
- 效果图
	
 ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/6ffb762ff08651c73fa8d05c025d2f32/image.png) 
 ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/db180f4970b5491e2c39915ca2ebe8d6/image.png) 
 ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/eb4fcaa070163e09e438b731c1513ace/image.png) 
 ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/b77b5e10d265b5527c6830bcb6a75d28/image.png) 
 ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/c0cb6e82a65a9dfed0474d32ec2d6f90/image.png) 


	
 
#### normal_link模板升级  （项目状态：开发中） @杨奇 `无更新`
- 背景：底部链接改成了九宫格， 辅助信息要求资源方新加字段独立样式。
- 开发模板
 	aladdin：normal_link
- **完成情况**
	启动时间12月13日
	暂停时间12月16日
	暂停原因：节日项目标注着急优先级高，先开发节日项目。
	再次启动时间12月22日
- 本周进展
	九宫格修改完毕，
	辅助信息样式在等待资源方新加字段。
- 计划
	12月13日开始开发
	预计1月3日上线
- 链接
	[线下链接](https://wwwhttps.baidu.com/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=normal_link&dev_path=searchaladdin&dev_tpltype=default&sid=99999&dev_online=1&wd=cpa&word=cpa)
- 效果图    
	![image](http://wiki.baidu.com/download/attachments/246189522/image2016-12-15%2019%3A19%3A14.png?api=v2)
 
#### 项目名称 festiavl top_24jieqi (项目状态：待上线) @杨奇 `无更新`
- 背景： 更改数据的传输，将固定的颜色变为可调
- 开发模板
	aladdin：festival
	pc: top_24jieqi
- **完成情况**
	启动时间12月15日
	开发时间12月15日
- 计划
	预计12月22日上线
- 链接
	festival [线下链接](https://wwwhttps.baidu.com/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=festival&dev_path=searchaladdin&dev_tpltype=default&sid=99999&dev_sigma=1&dev_online=0&dev_file=default.xml&dev_fileformat=xml&dev_pos=asResult&wd=%E4%B8%87%E5%9C%A3%E8%8A%82&word=%E4%B8%87%E5%9C%A3%E8%8A%82)
	top_24jieqi [线下链接](https://alahttps.baidu.com/s?dev=1&dev_workspace=platform&dev_module=dev-aladdin&dev_tpl=top_24jieqi&dev_path=aladdin&dev_tpltype=default&tn=tpldev&dev_online=0&dev_file=default.xml&dev_fileformat=xml&dev_pos=topResult&wd=%E5%9B%BD%E5%BA%86%E8%8A%82&word=%E5%9B%BD%E5%BA%86%E8%8A%82)
- 效果图    
 	![image](http://wiki.baidu.com/download/attachments/246189522/image2016-12-16%2011%3A22%3A34.png?api=v2)    
	![image](http://wiki.baidu.com/download/attachments/246189522/image2016-12-16%2011%3A25%3A30.png?api=v2)
	