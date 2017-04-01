# 【cr知识点汇总】

## [如何进行code review](http://ala-fe.baidu.com/share_doc/cooder_review.md) 

- css 规范相关
	* [css规范参考](http://styleguide.baidu.com/style/css/index.html#JS006)
	* [第一期](http://ala-fe.baidu.com/codereview/cr1~cr14/cr01.md)
	* [第二期](http://ala-fe.baidu.com/codereview/cr1~cr14/cr01.md)
	* [百度其他代码规范](http://gitlab.baidu.com/fe/spec/tree/master)
	* [如何使用!importan](http://www.w3cplus.com/css/the-important-css-declaration-how-and-when-to-use-it.html)

- 模板js相关
	* [js规范参考](http://styleguide.baidu.com/style/js/index.html#JS006)
	* parseInt加上，10(默认是10，但是会有怪异问题，如果是0开头，可能会转成8进制)。相关性阅读 [第二期](http://ala-fe.baidu.com/codereview/cr1~cr14/cr01.md) [stackoverflow](http://stackoverflow.com/questions/12318830/parseint08-returns-0)
	* [parseInt mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
	* 代码注释 [第二期](http://ala-fe.baidu.com/codereview/cr1~cr14/cr01.md) [jsdoc](http://usejsdoc.org/)
	* [js书写部分参考-第四期](http://ala-fe.baidu.com/codereview/cr1~cr14/cr04.md)
	* [同步数据获取di的方法](http://ala-fe.baidu.com/codereview/cr1~cr14/cr05.md)
	* [如何使用textarea存储js使用的dom](http://ala-fe.baidu.com/codereview/cr1~cr14/cr05.md)
	* [require使用的方式差异以及常见问题解疑](http://ala-fe.baidu.com/codereview/cr1~cr14/cr12.md)
	* [html拼接几种较优方案](http://ala-fe.baidu.com/codereview/cr_15/cr_liuquanyou.md)
	* [json_encode细节](http://ala-fe.baidu.com/codereview/cr_15/cr_liuquanyou.md)
	* [参数拼接方法参考](http://ala-fe.baidu.com/codereview/cr_15/cr_liuquanyou.md)
	* [代码实现思路简化参考](http://ala-fe.baidu.com/codereview/cr_15/cr_qijian.md)
	* [模板引入etpl引起空格问题的解决](http://ala-fe.baidu.com/codereview/cr_16/cr_kg.md)
	* [无限call解决方案/函数职责单一](http://ala-fe.baidu.com/codereview/cr_16/cr_mip.md)
	* [变量声明规范参考](http://ala-fe.baidu.com/codereview/cr_16/cr_news.md)

	
- smarty相关
	* escape使用场景 [第三期](http://ala-fe.baidu.com/codereview/cr1~cr14/cr03.md)
	* [escape](http://alafe.org/smarty/escape.md)
	* [smarty数据的部分处理方法](http://ala-fe.baidu.com/codereview/cr1~cr14/cr09.md)
	* [星星评分写法](http://ala-fe.baidu.com/codereview/cr1~cr14/cr10.md)
	* [循环逻辑精简写法参考](http://ala-fe.baidu.com/codereview/cr1~cr14/cr10.md)
	* [滑动组件宽度获取的使用注意事项](http://ala-fe.baidu.com/codereview/cr1~cr14/cr11.md)
	* [下拉组件HTML写法参考](http://ala-fe.baidu.com/codereview/cr1~cr14/cr12.md)
	* [gbk转utf8](http://ala-fe.baidu.com/codereview/cr_15/cr_guoyong.md)
	* [smarty变量判断的细节](http://ala-fe.baidu.com/codereview/cr_16/cr_kg.md)

- 组件相关
	* [第三期](http://ala-fe.baidu.com/codereview/cr1~cr14/cr03.md)
	* [常用分享组件写法](https://github.com/overtrue/share.js)
	* [耀武版share.js](https://github.com/xuexb/share.js/blob/master/src/js/share.js)
	* [superframe原理等.pptx](http://gitlab.baidu.com/psfe/ala-weeklyreport/uploads/dc5a8de1de7c2ddca97faacc5a923282/superframe原理等.pptx)
	* [new bdScroll原型链分析图](http://ala-fe.baidu.com/codereview/cr1~cr14/cr03.md)