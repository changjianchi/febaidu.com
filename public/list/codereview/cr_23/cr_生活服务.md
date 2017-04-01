# 天宁岛方向cr


## wet_air_rank|情景页|民生|肖学林

### 1. 大量行内嵌样式

```
	<div style="width:65%; -webkit-box-flex:1; -webkit-flex:1 1 auto;" class="c-gray  c-gap-bottom">{%$tab.descRank|escape%}</div>
    <div style="width:35%; -webkit-box-flex:1; -webkit-flex:1 1 auto;" class="c-gray  c-gap-bottom">{%$tab.descPm|escape%}</div>
    
```

### 2.tab-content内容倒序渲染 *
需求：数据是同步，只有一个正序的list，两个tab分别是正序显示和倒序显示：

```
	
	/*重新渲染dom*/
    function inCity(tag,fList) {
        	
    }
    $container.find('b-tabs').on('change', function (evt, data) {
        var current = data.current;
        var cnt = data.cnt;
        /*
        * var fList = list.reverse();
        */
        var init = inCity(tag,fList);
        $block.eq(1).html(init);
    });
    
```
建议在数据层面逻辑处理倒序逻辑:array_reverse($el)，直接渲染，如果数据量过大，使用textarea。


## sg_wet_air | 民生 | 学林

## case反馈

### css属性冗余

* 源代码

```
.c-sigma-wapper[tpl="sg_wet_air"] {
    background: -webkit-gradient(linear, 0% 0%, 0% 100%,from({%$color|escape%}), to({%$bg|escape%}));
    background: -moz-linear-gradient(top, {%$color|escape%}, {%$bg|escape%});               
    background: -o-linear-gradient(top, {%$color|escape%}, {%$bg|escape%});
}
```

* 解决方案：删除-moz -o前缀属性

```
.c-sigma-wapper[tpl="sg_wet_air"] {
    background: -webkit-gradient(linear, 0% 0%, 0% 100%,from({%$color|escape%}), to({%$bg|escape%}));
    background: linear-gradient(top, {%$color|escape%}, {%$bg|escape%});
}
```

### 图片路径使用其他模板资源 *

* 源代码

```
.wa-sg-wet-air-warn-icon-cheng {
    background-image: url(/static/aladdin/sg_weather/cheng.png);
}
.wa-sg-wet-air-warn-icon-hong {
    background-image: url(/static/aladdin/sg_weather/hong.png);
}
.wa-sg-wet-air-warn-icon-huang {
    background-image: url(/static/aladdin/sg_weather/huang.png);
}
.wa-sg-wet-air-warn-icon-lan {
    background-image: url(/static/aladdin/sg_weather/lan.png);
}
```

* 解决方案：创建自己模板的文件夹，避免模板间依赖。


### paseInt进制问题

* 源代码

```
if(value < 0) {
    tagLeft = 0;
}else if(value <= 200) {
    tagLeft = parseInt(($tagLength*value)/50+(value-1)/50*2);
}else if(value > 200 && value <= 300) {
    tagLeft = parseInt(($tagLength*(value-200))/100+($tagLength+2)*4);
}else if (value > 300 && value <= 500) {
    tagLeft = parseInt(($tagLength*(value-300))/200+($tagLength+2)*5);
}else {
    tagLeft = ($tagLength+2)*6-2;
}
```

* 解决方案：要加上进制

```

if(value < 0) {
    tagLeft = 0;
}else if(value <= 200) {
    tagLeft = parseInt(($tagLength*value)/50+(value-1)/50*2, 10);
}else if(value > 200 && value <= 300) {
    tagLeft = parseInt(($tagLength*(value-200))/100+($tagLength+2)*4, 10);
}else if (value > 300 && value <= 500) {
    tagLeft = parseInt(($tagLength*(value-300))/200+($tagLength+2)*5, 10);
}else {
    tagLeft = ($tagLength+2)*6-2;
}
```

### 代码重复度高，不易阅读

* 源代码

```

	<div class="c-row c-row-tight wa-sg-wet-air-wrapper">
    	<div class="c-span2"><div class="wa-sg-wet-air-ruler wa-sg-wet-air-level1"></div></div>
    	<div class="c-span2"><div class="wa-sg-wet-air-ruler wa-sg-wet-air-level2"></div></div>
    	<div class="c-span2"><div class="wa-sg-wet-air-ruler wa-sg-wet-air-level3"></div></div>
    	<div class="c-span2"><div class="wa-sg-wet-air-ruler wa-sg-wet-air-level4"></div></div>
    	<div class="c-span2"><div class="wa-sg-wet-air-ruler wa-sg-wet-air-level5"></div></div>
    	<div class="c-span2"><div class="wa-sg-wet-air-ruler wa-sg-wet-air-level6"></div></div>
	</div>	

```

* 解决方案：用循环完成 代码量更少
 

```

	{%$arr = array(1,2,3,4,5,6)%}
	<div class="c-row c-row-tight wa-sg-wet-air-wrapper">
	{%foreach $arr as $item%}
		<div class="c-span2"><div class="wa-sg-wet=air-ruler wa-sg-wet-air-level{%$item%}"></div></div>
	{%/foreach%}
	</div>	
```

### good code 展示

### 判断缜密

```
.done(function(data) {                     
    if(data && data.data[0] && data.data[0].allCity && data.data[0].hotcity) {
      var allcity = data.data[0].allCity;
      cityArr[0] = {};
      for(var i in allcity){
          if(Array.isArray(allcity[i])) {
              cityArr[0][i] = allcity[i];
          }
      }
      cityArr[1] = data.data[0].hotcity;
      defer.resolve(cityArr);
     } else {
     defer.reject();
    }
})
```

* 数据容错
* 避免在undifined上寻找key 会报错


## pm25_monitor|情景页|民生|肖学林


### 1. 多余的循环 *

```
$container.find('.sfc-pm25-monitor-list-row').each(function(i, e){
    $(e).attr('data-sf-options','{"view": {"_hold":"2"}}');
});
```
* 解决方案：jquery, zepto自带集化操作

```

$container.find('.sfc-pm25-monitor-list-row').attr('data-sf-options','{"view": {"_hold":"2"}}');
```








