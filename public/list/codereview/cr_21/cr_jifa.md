# 【建站&激发方向cr】  

> 2017-02-24

> 张屾 郭勇  冯斐帆 胡晓卉 刘玲玲 程恩 刘思豪 陈锐 玲娟 健驰 仁广 杨露

## recom_map  | KG | 薛睿娇 | 郭勇CR


### 问题：escape重复，作为判断条件不要加escape 

```

    {%$type = $tplData.type|escape%}
    {%$word = $reqData['word']|escape%}
    {%$circle = $reqData['circle']|escape%}
    {%$scene = $reqData['scene']|escape%}
    {%$price = $reqData['price']|escape%}
    {%$sort = $reqData['sort']|escape%}
    {%$title = $reqData['title']|escape%}
    {%if isset($reqData['scene_list'])%}
    {%$scene_list = $reqData['scene_list']|escape:none%}
    {%/if%}
    {%$m = {%$smarty.now|escape%}|escape%}
    {%foreach $tplData.list as $item%}
        {%if {%$type|escape%} === 'scene' %}
            {%$tplData.list[$item@index].img = $item.img|getHttpsHost%}
        {%else%}
            {%$tplData.list[$item@index].sq_img = $item.sq_img|getHttpsHost%}
        {%/if%}
    {%/foreach%}

    ...

     <div id="sfc-recom-map-show{%$type|escape%}Map{%$m|escape%}" class="c-row-tile c-row-top c-row-bottom">
    </div> 

```
* 解决方案:
重复escape 只做一次就好了。

```
    {%if $type === 'scene' %}

```

## scrollimage  | KG | 李阳阳 | 程恩CR


### 问题：代码冗余 ，此类问题易被忽略 

```
    .sfc-scrollimage-txtcenter {
        text-align: center;
    }
    .sfc-scrollimage-icontip {
        text-align: center;
    }
```
* 解决方案:

```
    .sfc-scrollimage-txtcenter,
    .sfc-scrollimage-icontip {
        text-align: center;
    }
```

## sg_lasar_team | KG | 郑铎 | 冯斐帆 CR 


模板总体没什么大的问题，根据规范存在个别细节问题，不列举

由于这周进行了两次规范考试，所以重新看了遍html规范，摘要一点如下：

html规范：http://styleguide.baidu.com/style/html/index.html

*[强制] 禁止 img 的 src 取值为空。延迟加载的图片也要增加默认的 src。

解释

src 取值为空，会导致部分浏览器重新加载一次当前页面

为何会导致重新加载：

```

<!DOCTYPE>  
<html> 
<body>
    <img src="" />
</body>
</html>

```

调用这个页面的时候，如果使用firebug看看，会发现，网页被调用了2次。如果该页面还存在其他的复杂的数据请求，那么非常抱歉，复杂的数据依然会把二次请求。

具体原因是，在img 对象的src 属性是空字符串("")的时候，浏览器认为这是一个缺省值，值的内容为当前网页的路径。浏览器会用当前路径进行再一次载入，并把其内容作为图像的二进制内容并试图显示。
对于不同的浏览器测试后，发现对于有无src 或者src 是否为空的情况，还不尽相同，测试结果如下表。

|代码|firefox, chrome|ie 6|ie 7|
|---|---|---|---|
|`<img src="" />`|重新加载|重新加载|重新加载|
|`<img src />`|重现加载|正常|正常|
|`<img />`|重新加载|正常|正常|


## sg_blessing | KG | 杨奇 | 胡晓卉CR


### 1、

```
    {%$currIndex = 0%}      
    {%foreach $tplData.tab as $item%}
        {%$tplData.tabsData[$currIndex] = array()%}
        {%$tplData.tabsData[$currIndex]['tab'] = $item%}
        {%$tplData.tabsData[$currIndex]['items'] = []%}
        {%$tplData.tabsData[$currIndex]['selected'] = 0%}
        {%$temp = $currIndex++%}
    {%/foreach%}
```

建议：

* $currIndex 可用 `$item@index`代替

* 一些冗余变量，如
`{%$temp = $currIndex++%}`可直接写为`{%$currIndex++%}`

2、

```
    {%if $tplData.customjumplink%}
      {%$tplData.shareUrl = $tplData.customjumplink%}
    {%else%}
      {%$tplData.shareUrl = 'http://po.srf.baidu.com/greetings/Index/Index/r?tpl=wise'%}
    {%/if%}
    
```

建议简化为：
```
{%$tplData.shareUrl = $tplData.customjumplink|defalut:'http://po.srf.baidu.com/greetings/Index/Index/r?tpl=wise'%}
```

3、

```
<div class="c-container wa-sg-blessing-top">
      <div class="c-span12 c-gap-top-large">
         ……
```

此处删格c-span12没有意义，"c-span*"要和"c-row"配合使用
[文档说明](http://pmd.baidu.com/doc/#grid)




## housing|房产|键驰|陈锐CR

### 1. CSS代码规范问题

```
.sfc-housing-screen-huxing .sfc-housing-screen-list-item i{
    text-align: right;
    display: none;
}
.sfc-housing-btn .sfc-housing-sort-icon{
    ...
    background: url('/static/sf/card/housing/sort_bg.png') no-repeat 0 0;
    ...
}
```

- 括号前面缺空格
- 样式顺序不对
- url里面不加引号


### 2. 代码实现问题

```
{%if $select.type == 'radiobox'%}
    ...
{%/if%}
                    
{%if $select.type == 'multi'%}
   ...
{%/if%}
```

- 可以合并成 if else

```
<div class="sfc-housing-result"><!-- 结果内容 --></div>
<div class="sfc-housing-loading"><!-- loading内容 --></div>
```

- 用smarty注释，避免内容输出到页面

```
$.each($btn, function (key, btn) {
    $(btn).on('click', function () {

    });
});
```

- 直接用 $btn.on('click', func) 就可以，索引 key 可以通过绑定 data-key 获取

```
var $this = $(this);
                
if ($this.hasClass('sfc-housing-list')) {
    var conIndex = $(this).parents('.sfc-housing-screen-content').index();
    if ($(this).data('type') && $(this).data('type') == '1') {
        var text = $btn.eq(conIndex).data('name');
    }
    ...
}
```

- $(this) 统一改成 $this

```
if (!newData[0].content[0].length || newData[0].content[0].length == 0) {
    ...
}
```

- 后面的条件判断没有意义

```
var LOADING_HTML = [
    ...
    '       <i class="c-icon">&#xe780</i>',
    ...
].join('');
```

- 空格会被输出到页面

# sg_city|天宁岛|泉有|玲娟CR

## 模板信息

* 模板名：sg_city
* [模板线上地址](https://m.baidu.com/s?word=%E6%88%90%E9%83%BD%E6%97%85%E6%B8%B8)
* 代码：
	`80`行css
	`130`行html，
	`80`行js，
	`20`行数据预处理
	}
* 主要逻辑：{
	a、异步获取天气数据，
    b、横滑滚动
	}
* 效果图
![图片](http://bos.nj.bpc.baidu.com/v1/agroup/d5c728af53df33c3d933dc74cc86b6625184d5e0)




## 规范问题

### js（25个问题）

![图片](http://bos.nj.bpc.baidu.com/v1/agroup/c013a7f9b5c34b3670904380c3d3c508623b6b1d)

* line1：忽略，文件注释，在阿拉丁模板中可以不写。
* line3：变量recource_name应使用驼峰命名。

		// bad
		data: {
	        resource_name: 'weather_wise',
	        tn: 'wise_travel_weather'
	    }
	    // good	
	    data: {
		   resourceName: 'weather_wise',
		   tn: 'wise_travel_weather'
	    }
		
	
* line19	：Equality Expression 中使用类型严格的 === 。仅当判断 null 或 undefined 时，允许使用 == null 。

		// bad
		if (res.status == 0) {}
		
		// good
	    if (res.status === '0') {}
		
	
* line29，30，60，68、72：逗号后面应该有空行

		// bad
		require(['pmd/scroll/bdscroll'],function(bdscroll) {
		    $crollAround.on('scrollEnd',function() {
		});
		
		// good
		require(['pmd/scroll/bdscroll'], function (bdscroll) {
			$crollAround.on('scrollEnd', function () {
		});
		
* line36：二元运算符两侧必须有一个空格


		//  bad
		if (wthInfo.indexOf(item)>-1) {}
		
		// good
		if (wthInfo.indexOf(item) >- 1) {}
		
* line46：cache中是空的。而且是要有可能会报错的代码的情况下，才建议添加 try-catch 块。此处没必要。
	
			
		// bad
		if (res.status == 0) {
            try {
                  var weatherData = res.data[0];
                  if (weatherData) {
                  }
            }
            catch (e) {}   // 此处catch里面并没有任何逻辑，不符合规范。
        }
        else {
            $ctt.find('.wa-sg-city-weather').hide();
        }
        
        // good
        if (res && res.status === 0 && res.data[0]) {   
            // 获取到天气数据并添加到dom
        }
        else {
            $ctt.find('.wa-sg-city-weather').hide();
        }
* line60、68：函数定义的时候少了空格

		// bad
		$crollAround.on('scrollEnd',function() {
		});
		// good
		$crollAround.on('scrollEnd', function () {
		});
		
* line61：构造函数bdscroll不应该以小写字母开头

		// bad
		require(['pmd/scroll/bdscroll'],function(bdscroll) {
			var $crollAround = new bdscroll($ctt.find('.wa-sg-city-list').get(0), {});
		}
		
		// good
		require(['pmd/scroll/bdscroll'],function(Bdscroll) {
			var $crollAround = new Bdscroll($ctt.find('.wa-sg-city-list').get(0), {});
		}
		
 
* line74：忽略。在文件结尾处，保留一个空行


### css（20个问题）

![图片](http://bos.nj.bpc.baidu.com/v1/agroup/4dd2bccbbc3be7637d22323e2ef680a6b6bbf2ad)

* line5：font-weight都要改成数值形式的，normal是400，bold是700
* lijne55、76：line-height都要改成数值形式的。将 line-height 设置为数值，浏览器会基于当前元素设置的 font-size 进行再次计算。在不同字号的文本段落组合中，能达到较为舒适的行间间隔效果，避免在每个设置了 font-size 都需要设置 line-height。
![图片](http://bos.nj.bpc.baidu.com/v1/agroup/7889af6f697f83d561c0420d5800b269b74ce492)
* line9：尽量不使用 !important 声明。这里没有必要
	
		[class*="wa-sg-city-icons"] {
		    font-family: "whicons"!important; // 这里去掉import!
		    font-style: normal;
		    -webkit-font-smoothing: antialiased;
		    -webkit-text-stroke-width: 0.2px;
		    -moz-osx-font-smoothing: grayscale;
		}
* line3、4：url中不能加引号

		// bad
		src: url('//m.baidu.com/static/search/iconfont/iconfont_27b73483.eot');
		// good
		src: url(//m.baidu.com/static/search/iconfont/iconfont_27b73483.eot);
* line2、16、19、22、25、28、31：文本内容必须使用双引号

		// bad
		font-family: 'whicons;
		// good
		font-family: "whicons";
* line77：color的值大小写没有统一
		
		// bad
		.wa-sg-city-white {
		    color: #fff;
		}
		.wa-sg-city-btn {
		    border: 2px solid #F1F1F1;
		}
		
		// good
		.wa-sg-city-white {
		    color: #fff;
		}
		.wa-sg-city-btn {
		    border: 2px solid #f1f1f1;
		}

* 同一 rule set 下的属性在书写时，应按功能进行分组，并以 `Formatting Model（布局方式、位置） > Box Model（尺寸） > Typographic（文本相关） > Visual（视觉效果）` 的顺序书写，以提高代码的可读性。
		
		Formatting Model 相关属性包括：position / top / right / bottom / left / float / display/ overflow 等
		Box Model 相关属性包括：border / margin / padding / width / height 等
		Typographic 相关属性包括：font / line-height / text-align / word-wrap 等
		Visual 相关属性包括：background / color / transition / list-style 等

		 // bad
		.wa-sg-city-headMore {
	        font-size: 12px;
	        border: 1px solid rgba(255, 255, 255, 0.51);
	        border-radius: 3px;
	        padding: 2px;
	        vertical-align: middle;
	    }
	    .wa-sg-city-scroller-entity {
	        display: inline-block;
	        vertical-align: top;
	        position: relative;
	    }
		    
		// good
		.wa-sg-city-headMore {
			border: 1px solid rgba(255, 255, 255, 0.51);
	        border-radius: 3px;
	        padding: 2px;
	        vertical-align: middle;
	        font-size: 12px;
	    }
	    .wa-sg-city-scroller-entity {
		    position: relative;
	        display: inline-block;
	        vertical-align: top;
	}

## fecs format，解决80%以上的问题

### js

![图片](http://bos.nj.bpc.baidu.com/v1/agroup/69c529fb7aa36d0b62d5611583268655179f51f8)

### css
![图片](http://bos.nj.bpc.baidu.com/v1/agroup/7d6a170a9e70521cf6ef37244014610bc3da0727)

## 其他

ajax优化：用promise来做，请求失败或者请求无数据各种情况都能写在同一个方法中。不需要重复定义了。

## 代码修复跟进

![图片](http://bos.nj.bpc.baidu.com/v1/agroup/73fefae2eacf631959f2b5e14dfac80beb158b56)

1、目前状态

已优化约60行代码，效果跟之前一致。[点我查看codder地址](http://cooder.baidu.com/5459931/codiff/6501029/65129613)

2、todo

* line-height需要跟ue对完确定下数值
* js的recource_id需要跟rd对是否需要优化程驼峰
* ajax请求考虑用promise
