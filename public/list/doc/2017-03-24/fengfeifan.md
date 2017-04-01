# 冯斐帆

> 2017年3月20日~2017年3月24日

#### www-wise模块代码优化改造,阿拉丁模板梳理 （项目状态: 已经完成，待和林哥对接）

- 背景：周二下午收到邮件关于以下四点进行阿拉丁模板的梳理：1、B变量已经废弃，阿拉丁模板里面用到B的地方，也需全部改成page替代。2、www-wise里面的阿拉丁基础代码，用到B的地方，全部改成page。3、阿拉丁模板访问全局#page，不能直接用$(‘xxx’)访问，需要通过A.page()访问。4、阿拉丁里面，直接访问阿拉丁结果外层dom的，需要在A上提供公共的方法访问，类似A.page阿拉丁里面可能访问到的外层dom： #page-tips，#page-relative，#page-controller，#page-ft, #page-copyright。

- 收益：
 - 便于后续修改推进。
 
- **工作量评估** 
  - 需求量：
    涉及文件605个文件。
    
  - 开发风险：
     - 由于涉及文件较多，所以需要谨慎修改，严格控制修改节奏进行推进。

  - 沟通风险：
     - 第一阶段模块梳理结束，沟通问题暂无。
     
- **完成情况** 
     - 完成模板梳理工作。
     
- 本周进展 
   - 完成状态，待找林哥@李林对接。
   
- **梳理详情**
   - 1、需要将B替换为page的文件共<span style="color:#c00">540个</span>如下：
   - /aladdin-wise/src/searchaladdin 这个路径下的文件有<span style="color:#c00">238个</span>
   - /aladdin-wise/src/static/activity 这个路径下的文件有<span style="color:#c00">122个</span>
   - /aladdin-wise/src/static/aladdin/static_old 这个路径下的文件有<span style="color:#c00">167个</span>
   - 其他目录下的文件有<span style="color:#c00">13个</span>
   - 2、www-wise中需要将B替换成page的阿拉丁基础模块有<span style="color:#c00">3个</span>，分别如下：
   - <span style="color:#c00">/www-wise/src/static/js/base/ala/alaBaseFoot.js</span>
   - <span style="color:#c00">/www-wise/src/static/js/base/ala/alaBaseHead.js</span>
   - <span style="color:#c00">/www-wise/src/static/js/base/ala/sigma.js</span>
   - 3、阿拉丁模板中需要将$('#page')修改为通过A.page()访问的模板有<span style="color:#c00">62个</span>：
   - 4、阿拉丁模板中#page-tips，#page-relative，#page-controller，#page-ft, #page-copyright需要修改的模板为<span style="color:#c00">0个</span>。

   - 以上是梳理的模板的详细内容,详情请见<a href="http://wiki.baidu.com/pages/viewpage.action?pageId=321366857">详情连接</a>
    

#### 百聘中间页wise优化 （项目状态: 开发完成20%）

- 背景：百度百聘wise端优化这周开始进行，主要是针对样式和功能模块上的调整。

- 收益：
 - 提高用户体验。
 
- **工作量评估** 
  - 需求量：
    涉及wise端所有页面的调整
    
  - 开发风险：
     - 由于涉及的页面较多，潜在页面之间逻辑处理问题。

  - 沟通风险：
     - 无
     
- **完成情况** 
     - 这周完成了20%，下周继续。
     
- 本周进展 
	 - 已经完成了总优化内容的20%。
	 
- **排期计划**
	 - 下周继续进行这部分内容
	 
- 效果
    wise:http://cq01-w-ps-2011q3-ndi212.cq01.baidu.com:8888/wise
  
    
#### 百聘中间页wise端定位模块功能开发（项目状态: 周五下班前完成开发）

- 背景：百度百聘wise定位模块新增输入功能。

- 收益：
 - 提高定位功能的用户体验。
 
- **工作量评估** 
  - 需求量：
    涉及wise端社招列表页。
    
  - 开发风险：
     - 无。

  - 沟通风险：
     - 无
     
- **完成情况** 
     - 周五下班前完成开发。
     
- 本周进展 
	 - 开发完成。
	 
- **排期计划**
	 - 下周根据反馈会适当调整
	 
- 效果
    wise: http://cq01-w-ps-2011q3-ndi212.cq01.baidu.com:8888/wise?mk=12965745.9025_4833061.79446
    