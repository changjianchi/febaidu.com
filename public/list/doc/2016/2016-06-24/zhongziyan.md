# 钟姿艳
> 从 2016-06-20 到 2016-06-24

## 电影泛需求白卡

### 背景与目标

query“电影”泛需求黑卡转白卡且直接上全流量

### 完成情况

### 6.20
- 更改wz_generaldianyingpiao_new模板的样式。
- 原来query“电影”召回的是iphone.onlyshow的效果，现把onlyshow删了，只剩iphone.tpl。
- 用[定位](https://wwwhttps.baidu.com/s?word=%E4%BA%94%E9%81%93%E5%8F%A3&sa=tb&ts=2692214&t_kt=0&ie=utf-8&rsv_t=aae9Upvl1x1%252FlIxEa61xRMN4yZ1RpjW%252FITj%252FQ%252BUflemaVBG74dm8&tn=iphone&rsv_pq=16735486469939678424&ss=101&t_it=1&rsv_sug4=6915&inputT=6310&oq=%E9%99%84%E4%BB%B6%E5%9B%A2%E8%B4%AD)后方可召回卡片。

### 6.21
- 原模板未栅格化，老模板迁移，需要代码重写。
- [a标签改成拼链接](http://sfe.baidu.com/#/%E6%97%A0%E7%BA%BF%E8%BD%AC%E7%A0%81/%E6%A8%A1%E6%9D%BF%E6%8B%BC%E6%8E%A5%E8%B7%B3%E8%BD%AC%E9%93%BE%E6%8E%A5)
- [结果页点击日志参数规范](http://wiki.baidu.com/pages/viewpage.action?pageId=181805085)
- 检查点击后是否与原来链接相同
![搜tc统计数据](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/d72b2d282b5c899b788e96cd3a760774/屏幕快照_2016-06-21_19.15.41.png)

### 6.22
- 知道更改老模板，需要预处理文件数据迁移。
- 学习smarty语法，完成了数据迁移。如smarty的isset, lower,upper,replace,pre_match,if else, foreach语法。
- 多谢丽黎，玲玲，师傅，大丹，阳阳的e细心教导！
- 讲数据打印到页面：{%var_dump($ )%}

### 6.23
- 因与原先模板的数据略有不同，需模拟部分电影数据。
- 检查并完成了开发。与PM排期相符。
- 同ue联调后给了修改意见。

### 6.24
- 完成了修改。
- 介入新需求。

### 效果截图

![电影方案收起](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/bf56ab7ce71e18e472d1d22acab8bcc8/电影方案收起.png)
![电影方案展开](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/04bf9c55e3660621a07971d644ac92ea/电影方案展开.png)

### 后续

涉及RD人力的部分最早于下下周（7.4）启动，故已开发完的模板仍不能提测上线