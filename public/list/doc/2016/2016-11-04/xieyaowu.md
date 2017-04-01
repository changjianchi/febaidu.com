# 谢耀武

> 2016-10-31 到 2016-11-04

## 1. 相关接口人

* pm.open.baidu.com: liuchen
* openapi-rd: wangpeng36
* sigma-pm: guofeifei
* ae-rd: jiangmingming02
* odp: miaoyichan
* us, newus: chenjunhong
* 863上线op: dingyuting01
* mis-rd: renbaozhan
* ps-qa: zhouyumei
* 一休-qa: zhangshuhao01, chencheng12

---

* wwww基础UI: yuanxueran
* 结果页速度: zhangyuanwei, qiansicheng
* 资讯-fe: chenrui09
* tpldev开发平台: zhangshen04
* pmd栅格化: zhulei05
* sfe文档, ala-fe文档: liuquanyou
* 前端日志: liuyue05, lijialong01
* mip: lilangbo
* 情景页: liwenqian, taoqingqian01
* 其他基础规范,流程: shuxiaoqin
* 基础模板: -



## 2. 基础模板

### smarty

包括`dev-aladdin`, `dev-aladdin-pad`, `aladdin-wise`, `sf/card`的`base`模板

### aladdin-wise js

svn路径: [https://svn.baidu.com/ps/se/trunk/fe/tpl/www-wise/src/static/js/base/ala/*](https://svn.baidu.com/ps/se/trunk/fe/tpl/www-wise/src/static/js/base/ala/)

### aladdin-wise doc

文档: [http://sfe.baidu.com/aladdin/wise/devdocs/base_describe.md](http://sfe.baidu.com/aladdin/wise/devdocs/base_describe.md)

## 3. 上线

#### 流程

1. 模板上线状态
1. 值周开始编译
1. fis3编译(全量)
1. smarty编译(支持全量、增量)
1. 开始上线 - ci到svn主干
1. agile自动触发`编译BCLOUND`
1. 发布到产品库
1. 安全检查(只有`aladdin-wise`模块有)
1. 上线发863上线单
1. 如果有静态文件先发静态文件单子, 静态文件必须达到全量再发模板单子
1. 模板发单, level0完成后找相关上线同学确认效果
1. 模板开始全量到结束

#### 上线单地址

* [aladdin-wise](http://agile.baidu.com/#/builds/ps/se/fe/tpl/aladdin-wise@trunk)
* [sf/card](http://agile.baidu.com/#/builds/ps/se/fe/tpl/sf/card@trunk)
* [dev-aladdin](http://agile.baidu.com/#/builds/ps/se/fe/tpl/dev-aladdin@trunk)
* [dev-aladdin-pad](http://agile.baidu.com/#/builds/ps/se/fe/tpl/dev-aladdin-pad@trunk)
* [result](http://agile.baidu.com/#/builds/ps/se/fe/tpl/result@trunk)

#### archer配置

[http://master.archer.baidu.com/management/showscreen](http://master.archer.baidu.com/management/showscreen)

#### 注意事项

1. 线上代码只增不删
1. 静态文件没有回滚
1. aladdin-wise和card的模板是一组机器, 静态文件是一组机器
1. dev-aladdin和dev-aladdin-pad的模板是一组机器, 静态文件是一组机器

#### 相关路径

1. acard模板laddin-wise模板: `/home/work/odp/template/search/searchaladdin/模板名/`
1. : `/home/work/odp/template/wise/zh-CN/page/card/模板名/`
1. aladdin-wise和card的静态文件: `/home/work/sitedata/se/static/模块`
1. www-wise主模板路径: `/home/work/odp/template/wise/zh-CN/page/www/模块`
1. aladdin-wise svn路径: [https://svn.baidu.com/ps/se/trunk/fe/tpl/aladdin-wise](https://svn.baidu.com/ps/se/trunk/fe/tpl/aladdin-wise)
1. card svn路径: [https://svn.baidu.com/ps/se/trunk/fe/tpl/sf/card](https://svn.baidu.com/ps/se/trunk/fe/tpl/sf/card)
1. dev-aladdin svn路径: [https://svn.baidu.com/ps/se/trunk/fe/tpl/dev-aladdin](https://svn.baidu.com/ps/se/trunk/fe/tpl/dev-aladdin)
1. dev-aladdin-pad svn路径: [https://svn.baidu.com/ps/se/trunk/fe/tpl/dev-aladdin-pad/](https://svn.baidu.com/ps/se/trunk/fe/tpl/dev-aladdin-pad/)
1. www-wise svn路径: [https://svn.baidu.com/ps/se/trunk/fe/tpl/www-wise/](https://svn.baidu.com/ps/se/trunk/fe/tpl/www-wise/)

## 4. 平台 - 一休

一休是qa推出的机器人, 添加到群里可以完成自动化的回复消息, 接口qa: zhangshuhao01, chencheng12

* [保存snippets](http://wiki.baidu.com/pages/viewpage.action?pageId=235317236&src=contextnavpagetreemode)
* [删除snippets](http://wiki.baidu.com/pages/viewpage.action?pageId=235317252&src=contextnavpagetreemode)
* [发布公告到群里](http://wiki.baidu.com/pages/viewpage.action?pageId=235317219&src=contextnavpagetreemode)
* [获取snippets](http://wiki.baidu.com/pages/viewpage.action?pageId=235317306&src=contextnavpagetreemode)
* [获取一休所在群](http://wiki.baidu.com/pages/viewpage.action?pageId=235317433&src=contextnavpagetreemode)
* [获取当前值周人信息](http://wiki.baidu.com/pages/viewpage.action?pageId=235317115&src=contextnavpagetreemode)
* [获取接口人信息](http://wiki.baidu.com/pages/viewpage.action?pageId=235317141&src=contextnavpagetreemode)
* [获取用户积分](http://wiki.baidu.com/pages/viewpage.action?pageId=235317156&src=contextnavpagetreemode)
* [设置值周人](http://wiki.baidu.com/pages/viewpage.action?pageId=235317259&src=contextnavpagetreemode)
* [设置接口人](http://wiki.baidu.com/pages/viewpage.action?pageId=235317264&src=contextnavpagetreemode)
* [配置说明](http://wiki.baidu.com/pages/viewpage.action?pageId=235317448&src=contextnavpagetreemode)

## 5. 情景页日志分析

要做成 [模板展现分析](http://tpldev.baidu.com/#tpllogs) 的功能, ubs会提供日志数据文件, 但ubs提供的是以`pd`为基础切割的, 拿到数据后需要解析并循环入库.

同ubs@tianhaiying, us-rd@chenjunhong, ps-qa@zhouyumei+@lichenglong, ps-fe@zhangshen04 沟通得出数据结构:

```
表一
（情景页请求url按url参数中的resource_id(召回id)聚合）
pd \t resource_id \t  总pv  \t  pv最高的url  \t 来源页query

表二
（针对不存在resource_id的url）
pd \t pv \t pv最高的url \t 来源页query


表三
pd \t 总模板数
pd \t Templte_name1 \t pv1
pd \t Template_name2 \t  pv2

滤后pv
pd为空时不统计
```

参考文件:

* [ubs数据需求详情](http://dayu.baidu.com/dayu/data/detail/getPage/fid/580f18c5dc912)
* 定时抓取日志并入库 - [https://svn.baidu.com/ps/se/trunk/fe/aladdin/platform/pc-tpldev-v5/app/commands/createDbFromTplLogs.sh](https://svn.baidu.com/ps/se/trunk/fe/aladdin/platform/pc-tpldev-v5/app/commands/createDbFromTplLogs.sh)
* 展现接口控制器 - [https://svn.baidu.com/ps/se/trunk/fe/aladdin/platform/pc-tpldev-v5/app/controllers/TplLogsController.php](https://svn.baidu.com/ps/se/trunk/fe/aladdin/platform/pc-tpldev-v5/app/controllers/TplLogsController.php)
* 处理模型 - [https://svn.baidu.com/ps/se/trunk/fe/aladdin/platform/pc-tpldev-v5/app/models/TplLogs.php](https://svn.baidu.com/ps/se/trunk/fe/aladdin/platform/pc-tpldev-v5/app/models/TplLogs.php)