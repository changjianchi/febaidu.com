# 刘玲玲

> 从2016-06-12 到 2016-06-24

## 招聘哥伦布卡片 

### 背景
应2016年，搜索结果页改造，之后招聘阿拉丁的模板为哥伦布类型，目前百度招聘模块，项目拆分后的阿拉丁卡（哥伦布类型）的类别有： 公司型、职位型、寻址型、地区型、符合型、兼职型、其他。

### 进展情况

* 本周上线如下：
* 1、寻址型哥伦布 （周一6.20上线）
*   模板名：zhaopin_addressglb_top zhaopin_addressglb_allzhiwei  query=各网站 例如Q = 大街网、智联招聘 目前零流量
*   线上地址：https://m.baidu.com/#|src_%E5%A4%A7%E8%A1%97%E7%BD%91|sa_ib
*   效果图：
*   ![image](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/743f403e6cb0f068ffd168eb26204cbc/image.png)

* 
* 2、 飘红升级
*  2.1、修改hilight_print 的4个模板，（周四6.23下线）
*    wz_gonglue  
*    wz_ofashion_genericity  
*    wz_ofashion_precise 
*    wz_weixiusimple 
*  2.2、修改 htmlspecialchars
*  ./library/search/searchaladdin/tiebaxmlSrcPreProcessor.php    （已改,今天上线）
*  ./library/search/searchaladdin/tiebaxmlsmallSrcPreProcessor.php  （已下掉，pm说没上线，之前做了个实验， 今天删除下线）

*   ./searchaladdin/sigma_celebrity_rela/iphone.tpl  （现该模板玲娟在改的，不确定今天是否上线，等他改为了我在修改）
*   ./searchaladdin/stock_recommend_personal/iphone.tpl  sid=103544 （已改，测试中）
 
###  值周