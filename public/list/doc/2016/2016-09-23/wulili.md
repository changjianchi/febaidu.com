# 吴丽黎 

> 从2016-09-12到2016-09-14

## 娱乐人物             百度搜索-小鲜肉开发【无更新】

### 背景

百度搜索与10位刚刚出道，配合度高，微博粉丝活度强的男明星合作搜索结果页。

### 收益

影响面：4w/day

### 完成情况

【本周工作 
    贴吧功能迭代
    9月14上线
    地址：https://m.baidu.com/s?word=%E6%9B%BE%E8%88%9C%E6%99%9E%E7%99%BE%E5%BA%A6%E6%90%9C%E7%B4%A2
】


期间 ue设计改版联调 

登录功能需求更改

bug修复

截止到9月1日全部功能按最新设计稿和最新新增需求开发完毕，

9月2日上线零流量测试登录功能。

暂时只开放第一页情景页，实验效果若好，后续再释放后面两张卡。

###  效果图

![image](/uploads/9b1425b2e60ecee3fdaa04d967f8751d/image.png)
![image](/uploads/c1fc475adcc8e538491e3004839e7f7c/image.png)
![image](/uploads/ef37794dfe52dfbbaab150a985c26615/image.png)
![image](/uploads/f0be00f915d3b34c621f0b488670d1a3/image.png)
![image](/uploads/ef5571820185ceaa13bf5aeeff3d8a68/image.png)
![image](/uploads/1b0948224ad1485b1f51e30bb0144bfb/image.png)

单个情景页的设计效果

![image](/uploads/7a40702bb938115588a205a3bf0a8c0d/image.png)

## 娱乐    人物八卦

### 背景与目标

背景：八卦阿拉丁已在人物query下小流量实验，用户体验略正，并能有效提升用户媒体时长与搜索生态控制力，符合哥伦布宏观目标，需尽快退全上线。

收益：根据小流量实验表现，用户媒体时长相对增加3.01%，生态控制力相对增加 4.28%，预计优化pv1000w。

### 完成情况

迭代内容： 

o卡片title：XX_相关热门八卦

o新增字段：浏览量，来源，图集/视频tag

o新增图片：首位四图样式

o四图样式逻辑：三条内容中第一条可获取4张图片的资讯自动升级为首位四图样式，
        如三条内容均无4张图片，则不展现图片。

o不同类型调起不同类型sf页面

项目排期：2016-9-18 ~ 16-9-19   共计开发总天数为 2 个工作日

9月18日开发完毕，9月19日数据ready，联调完毕

9月20日提测，数据问题修复

9月22日开始走单

预计23日或者26日上线模板。

线下地址： https://wwwhttps.baidu.com/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=general_person_relate&dev_path=searchaladdin&dev_tpltype=default&sid=99999_108405&dev_online=1&wd=%E8%B5%B5%E4%B8%BD%E9%A2%96&word=%E8%B5%B5%E4%B8%BD%E9%A2%96

### 效果截图

![image](/uploads/d99ccf13dd0886dafa293d152950c3e5/image.png)


## 移动生活服务   政务公积金自然结果聚簇开发 【等待上线】

### 背景

mrd没有提供，暂无

### 完成情况
【8月26日走单】

此卡片有更多需求，pm内部商讨策略，上线日期待定

测试环境： http://cp01-ala-fe-col-2.epc.baidu.com:8003/s?word=%E6%B7%B1%E5%9C%B3%E5%85%AC%E7%A7%AF%E9%87%91%E6%8F%90%E5%8F%96&wiseus=10.92.75.16

7月25日上午模板开发完毕。

7月26日rd请假，7月27日提供真实数据环境，联调提测通过。

rd7月29日请假，没法提供全部卡片的召回效果，三级单卡着，计划8月1日上线。

### 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/8249b7c51beee35ef14fa832fb4661c8/image.png)


## 移动生活服务   GMV 糯米搬家 

### 背景

搜索上的生活服务相关的query，如搬家、保洁等，有GMV价值且搜索结果有提升空间，针对该类query，引入O2O相关卡片，优化搜索体验，探索GMV提升空间。本次先行探索搬家方向，后续可复用至保洁等其他垂类。

### 完成情况
生活服务O2O方向-搬家卡片（资源id:4279）已于9月14日16：00全流量上线，影响面日均5-7W。

实验结论

整体结论：用户体验正收益

具体指标如下：

1.	有点击行为比例：升高，相对升高6.39%(26.03%--->27.69%)

2.	长点率：升高，相对升高9.54%(24.49%--->26.83%)

3.	换query比例、长点击占比：交叉波动

4.	整体点击率：升高，相对升高13.07%(41.05%--->46.41%)

5.	卡片点击率：8.42%

详见大禹：http://dayu.baidu.com/dayu/eva/statement/getStatement/fid/57a87f838eebd

线上地址：
https://m.baidu.com/s?word=%E5%8C%97%E4%BA%AC%E6%90%AC%E5%AE%B6&sid=102164

排期：7月14-7月15日，两个工作日（包含联调）
8月23日模板上线，当晚小流量。

详情：
因糯米数据的问题，模板做了微调配合，期间增加了title链接跟随tab切换而改变的功能，8月18日人工评估继续

8月9日已经测试通过回归，期间ue设计稿多次变动，8月11日给了ue终稿，8月12日下午开始人工评估，计划下周上线。

4日下午5点接口和数据准备完毕， 

8月5日上午提测给qa贺民
   
测试地址： http://cp01-ala-fe-col-3.epc.baidu.com:8003/s?word=%E5%8C%97%E4%BA%AC%E6%90%AC%E5%AE%B6&wiseus=10.195.229.40


pm给的进度：

进度：

1.	FE与RD已完成开发，正在处理糯米数据问题

2.	下周三（8.3）PM介入评估case

3.	下周四（8.4）下班前完成联调


模板实现方案改为mini数据渲染，rd 7月25日才有时间跟进

7月14日中午出ue终稿，当天下午拼好schema并用模拟数据开发完卡片；
7月15日等rd联调。

### 效果图

![image](/uploads/358eab0c919e5e97dca4cda4adabed99/image.png)

## 移动生活服务   GMV  话费充值开发 

### 背景

线上充值业务资源方为钱包，针对非钱包用户体验较差（需绑定钱包银行卡后方可充值），需进行优化。

影响面：约2w

### 完成情况

【9月9日评审。】

项目排期：16-9-21 ~ 16-9-23   共计开发总天数为 3 个工作日【不包含联调排期】

9月12日：schema给到糯米rd李季

9月21日：模板静态框架开发完毕

9月22日：熟悉数据驱动开发模式，完成以下几个功能点，

                1、手机号码验证，
                
                2、手机号码变更相对应价格列表刷新
                
                3、充值面额的默认选中以及选中后立即充值内容对应变化功能
                
                4、立即充值登录功能              

线下地址： https://wwwhttps.baidu.com/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=rotarecharge&dev_path=searchaladdin&dev_tpltype=default&sid=99999&dev_online=0&dev_file=default.xml&dev_fileformat=xml&dev_pos=asResult&wd=%E8%AF%9D%E8%B4%B9%E5%85%85%E5%80%BC&word=%E8%AF%9D%E8%B4%B9%E5%85%85%E5%80%BC&uid=1474551544488_100&ssid=aa25f62fd955fae2fb44bff9b1bf95ac.3.1474551585.1.mKjE0NzlabVk

### 效果图

![image](/uploads/ab45eb6f5658af1ae0616ec6eaec64c6/image.png)



## 移动生活服务   政务 公积金百度知道卡片 

### 背景

现在的知道卡片在政务层面没有做到地域、进一步识别，故在政务层面进行地域识别

### 完成情况

9月13日联调 完毕，次日走单  

8月17日评审，当天开发完毕，等待数据联调，计划下周上线。

9月22日上线模板

### 效果图

![image](/uploads/d26fe294996d48030f41a6790ad5ff08/image.png)


## 移动生活服务   政务 法律文书  【无更新】

### 背景

法律垂类相关需求目前线上检索体验较差，且无相关卡片覆盖。
1、	资源：百度文库。
2、	召回：在法律文书类相关query下召回该卡片。例如：租房合同等。

### 完成情况

【8月23日16:24环境ok，联调完毕，

8月24日提测通过并走单，

8月25日上线模板，8月26日开小流量

测试地址：
http://cp01-ala-fe-col-3.epc.baidu.com:8003/s?word=%E7%A6%BB%E5%A9%9A%E5%8D%8F%E8%AE%AE&wiseus=10.195.229.40&bd_ck=0
    
】
8月18日评审，下午7点给出schema,8月19日上午模板开发完毕，等待数据联调。

### 效果图

![image](/uploads/775b551f998fef40ee5dd0843b4faf0e/image.png)

## 移动生活服务   政务 法律推理  【无更新】

### 背景

法律垂类中对用户需求可在法律原文中推理得出答案的卡片进行优化。

### 完成情况

【
8月29日模板上线（全量）

推迟上线原因：因数据问题，模板比预计时间晚2天上线。

线上地址： https://m.baidu.com/s?word=%E9%97%AF%E7%BA%A2%E7%81%AF%E6%80%8E%E4%B9%88%E5%A4%84%E7%BD%9A

】

8月24日数据到位，当天开发、联调完毕。

8月25日提测通过并走单（因数据有问题，走单大概26日走完）。

8月26日争取上线。

### 效果图

![image](/uploads/3dbd2a7ceaedfa3116f0f8dbb0e3300e/image.png)


## 移动生活服务   GMV-生活服务横向推广 【无更新】

### 背景

生活服务包含缴费、车主、政务、交通出行等多类，在搜索结果页上建立服务聚合页面将多类服务进行聚合，给予用户整体感知；同时可作为横向推荐的内容承载页。

### 完成情况
【9月2日下午白卡模板的开发/提测，9月5日上线。】

【
9月1日上线模板。

线上地址：https://m.baidu.com/s?word=%E7%99%BE%E5%BA%A6%E7%94%9F%E6%B4%BB%E6%90%9C%E7%B4%A2&sid=102164


已通过UBS人工评估，9.1小流量上线，实验信息如下：

1、话费推荐小流量：实验组对照组各取50%影响面，实验组sid=109693，

实际影响面约1w，示例：话费充值，点击标题跳转至服务聚合卡片，

示例：百度生活搜索，对照组sid=109694，实际影响面约1w，示例：话费充值。

2、违章推荐小流量：实验组对照组各取40%影响面，实验组sid=109719，

实际影响面约12w，示例：违章，点击推荐卡片标题跳转至服务聚合卡片，

示例：百度生活搜索，对照组sid=109720，实际影响面约12w，示例：违章。

】

样式被ue重新规划，8月22日重新开评审会议。

 排期：8月24日提供头卡schema并完成模板开发，25日联调，26日提测。
 
 项目正常进度。

测试地址：
http://cp01-ala-fe-col-2.epc.baidu.com:8003/s?word=%E5%8C%97%E4%BA%AC%E7%99%BE%E5%BA%A6%E7%94%9F%E6%B4%BB%E6%9C%8D%E5%8A%A1&wiseus=10.195.231.18

### 效果图：

入口页效果：

![image](/uploads/5de79d9da72546eabe4fde29f7c72634/image.png)

头卡效果：

![image](/uploads/1884bf583b65d35ff6eee26b272b98dd/image.png)


## 移动生活服务   GMV-糯米推广 【无更新】                  

### 背景

暂无

### 完成情况

【8月24日下午糯米数据ok，线下配合数据做模板调整，自测通过，8月25日上线一版】

测试地址：
https://wwwhttps.baidu.com/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=wiseilife&dev_path=searchaladdin&dev_tpltype=default&sid=99999_102164&dev_online=1&wd=%E4%BF%A1%E9%98%B3%E7%A7%9F%E8%BD%A6&word=%E4%BF%A1%E9%98%B3%E7%A7%9F%E8%BD%A6

计划这周上线，优先级高：
8月9日开发，8月11日已经上线一版模板，8月12日上午上线最终模板。

详情：

8月4日 ，GMV方向的糯米TP对接复用线上模板，对模板进行调研是否可复用，针对tp业务适当增加kv字段，负责出schema给糯米方天数据。

8月9日开始开发，按预计想法复用线上模板 wiseilife，配合联调，排期大概半天。

8月11日糯米新增需求：要求调起sdk组件页，链接都由糯米同学提供，12日正在极速准备。

### 效果图

![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/481a7c3983d5686e246003130337a552/image.png)

## 其他

9月13：结婚证本地宝展现样式迭代，已上线。

       横向推广入口页添加导流。

9月12日：GMV手机充值立项前期开发工作规划 


## 下周计划 

1、手机充值联调、弱卡开发