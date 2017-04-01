# 【kg方向cr】  


> 2016-12-15

> 小琴，丽黎，阳阳，鹏远，杨奇

### 模板

* 模板名：my_car
* 模块：card
* owner：张屾


### data-merge和https代理使用不规范

```js
<script data-merge>
    var requestLimitUri = '{%"http://traffic.pae.baidu.com/data/xianxing"|getHttpsHost%}';
    var requestLotteryUri = '{%"http://api.open.baidu.com/pae/common/api/yaohaoquery?"|getHttpsHost%}';
    // 省略1000行
    function requestLimit() {
        carsInfo = JSON.parse('{%json_encode($cars)%}');
        // 省略1000行
    }
</script>
```

* 解决方案

`data-merge`设计的初衷是：进行纯js代码后移，就是说加了data-merge的js代码禁止混用smarty语法。    
目前的状态：不强推使用data-merge，但使用的话，一定要规范来；有smarty数据需要透传给js语法，建议使用以下方式：

```js
    // smarty数据透传
    <script>
        A.setup({
            carsInfo: '{%json_encode($cars)%}'
        });
    </script>

    // js的https代理
    var requestLimitUri = page.https.domain.get("http://traffic.pae.baidu.com/data/xianxing");
```

### sf跳转链接统一由后端透传

```html
    {%$url = "/sf?openapi=1&dspName=iphone&from_sf=1&pd=life_weizhang&alr=1&resource_id=4083&pagetype=1&word=%E8%BF%9D%E7%AB%A0%E6%9F%A5%E8%AF%A2&title=%E6%9F%A5%E8%AF%A2%E7%BB%93%E6%9E%9C&lid=`$lid`&city=`$city`&hphm=`$hphm`&engine=`$engine`&body=&hpzl=`$hpzl`&province=`$city_name`&store=yes&city_name=`$city_name`"%}
```

* 解决方案

不要前端拼接，统一由后端透传，已达成约定

### selector查找性能问题

```
function calculateLimit(rules, city) {
    $('.sfc-my-car-block div[data-limit-city=' + city + ']').each(function(index, dom) {
        var $dom = $(dom);
        var num = $dom.find('p:first-child').text();
        var tail = num.charAt(num.length - 1);
        rules.forEach(function(rule) {
            if (rule.rule.length && rule.rule.indexOf(tail) > -1) {
                $dom.find('p:last-child').text('周' + rule.date + '限行');
            }
        })
    });
}
```

* 问题

selector查找原则是`从右向左`，选择器的查找尽量减少层级，并使用精确选择器，而不是泛选择器，否则性能比较低

* 解决方案

```js
    var num = $dom.find('className').first().text();

```

### 写死的数据太多

``` html
<div class="c-row c-line-bottom c-gap-top sfc-my-car-block">
    <div class="c-span8">
        <div>
            <span class="c-gray">我的摇号: </span>
            <span class="c-abstract" data-eid="{%$lottery.eid|escape%}"></span>
        </div>
    <div class="c-gray">摇号编码: {%$lottery.eid|default:''|escape%}</div>
    </div>
    <div class="c-span4 sfc-my-car-block-vertical">
        {%fe_fn_card_sflink_prefix url=$url ltj="l" class="c-color c-blocka"%}
        <span class="sfc-my-car-query">摇号查询<i class="c-icon">&#xe734</i></span>
        {%fe_fn_card_sflink_suffix url=$url%}
    </div>
</div>
```


* 解决方案

可以考虑部分字段由后端传递，提高模板复用性

### 尽量使用已有栅格样式

```css
    .sfc-my-car-query i {
        color: #666;
    }
```

* 解决方案

使用栅格样式`c-color-gray-a`

### 模板

* 模板名：top_nav
* 模块：card
* owner：司文宇

### 数据处理

```
	bad：
	{%*url不存在的去掉*%}

    {%foreach $tablistobjold as $tabs%}
        {%if $tabs.url%}
            {%$tablistobj[] = $tabs%}
        {%/if%}
    {%/foreach%}
    取数组循环合并
    {%$length = $tablistobj|count%}
    {%*$tablist只有name*%}
    {%$tablist = []%}
    {%foreach $tablistobj as $item%}
        {%$tablist[] = $item.name%}
    {%/foreach%}
	good:
	{%foreach $tablistobjold as $tabs%}
        {%if $tabs.url%}
            {%$tablistobj[] = $tabs%}
            {%$tablist[] = $tabs.name%}
        {%/if%}
    {%/foreach%}
```

循环两次一次处理url不存在，一次处理数组，合并成一此循环。

### switch代替多次ifelse

```
	bad:
	换成switch
    {%*$tabcolor 0是默认*%}
    {%if $tabcolor == "1"%}
        {%$tabbgcolor = '#333'%}
        {%$tabtextcolor = '#fff'%}
    {%else if $tabcolor == "10"%}
        {%$tabbgcolor = '#3388FF'%}
        {%$tabtextcolor = '#fff'%}
    {%else if $tabcolor == "11"%}
        {%$tabbgcolor = '#029CC6'%}
        {%$tabtextcolor = '#fff'%}
    {%else if $tabcolor == "12"%}
        {%$tabbgcolor = '#02336D'%}
        {%$tabtextcolor = '#fff'%}
    {%else if $tabcolor == "13"%}
        {%$tabbgcolor = '#DE3E28'%}
        {%$tabtextcolor = '#fff'%}
    {%else if $tabcolor == "14"%}
        {%$tabbgcolor = '#29002D'%}
        {%$tabtextcolor = '#fff'%}
    {%else if $tabcolor == "15"%}
        {%$tabbgcolor = '#2A2727'%}
        {%$tabtextcolor = '#fff'%}
    {%/if%}
	good：
	switch ($tabcolor)
        {
        case '1':
            {%$tabbgcolor = '#333'%}
            {%$tabtextcolor = '#fff'%}
            break;
        case '10':
            {%$tabbgcolor = '#3388FF'%}
            {%$tabtextcolor = '#fff'%}
            break;
        case '11':
            {%$tabbgcolor = '#029CC6'%}
            {%$tabtextcolor = '#fff'%}
            break;
        case '12':
            {%$tabbgcolor = '#02336D'%}
            {%$tabtextcolor = '#fff'%}
            break;
        case '13':
            {%$tabbgcolor = '#DE3E28'%}
            {%$tabtextcolor = '#fff'%}
            break;
        case '14':
            {%$tabbgcolor = '#29002D'%}
            {%$tabtextcolor = '#fff'%}
            break;
        case '15':
            {%$tabbgcolor = '#2A2727'%}
            {%$tabtextcolor = '#fff'%}
            break;
        default:
            
        }
```

### 颜色值大小写

习惯小写，css对大小写不敏感，但是大写也不会影响性能，都是一个字节。
设计软件生成一般是大写。
### 组件升级管理
```
	require(['fusion/b-share/b-share'], function (Share) 		{
            var share = $('.wa-spring-ticket-share').get(0);
            share.fusionReady = function () {
                $('.wa-spring-ticket-share-popup').on('click', function () {
                    share.fusion.popup();
                    $('.wa-spring-ticket-share').on('click','.b-share-btn',function(){
                        $('.wa-spring-ticket-after-popup').show();
                    });
                    $('.wa-spring-ticket-after-cloce').on('click',function(){
                        $('.wa-spring-ticket-after-popup').hide();
                    })
                });
            };
        });
```
`share.fusionReady`外可执行，内不可执行。每周更新更新测试机。

### class中有if判断加注意空格 
```
	<li style="width:{%100/$length|cat:'%'%}" 
	class="c-tabs-nav-li {%if $currentindex[0] == $list@index%} c-tabs-nav-selected{%/if%}" 
	data-href={%$list.url|escape%} >
    	{%$list.text|escape%}
	</li>
```
注意情况，if判断的类之后还有类。

### data无用
```
	<script>
	bad：
    card.setup({
            data无用变量
            data:{%json_encode($tplData)%},
        });
    </script>
    card.setup(function() {
        var _this = this;
    	var data = _this.data.data;
    });
    
	good：
	card.setup(function() {
        var _this = this;
		console.log({%json_encode($tplData)%});
	})

```
反正最后不能要，可以避免这种问题。

### 声明多个变量

```
	bad：
	var tab_name,tabchild_tpye, title;	
	
	good:
	var tab_name;
	var tabchild_tpye;
	var title;	
```
百度js代码规范3.1：
·[强制] [RULE071] 每个 var 只能声明一个变量。

### 情景页tab日志

```
	$container.find('.sf-tabs-wrapper-more .c-tabs-nav-li').removeClass('WA_LOG_TAB');
	
	_this.sendLog({
            tj: tab_name,
            type: 't'
        });
```
日志重发：绑定在body上，原来的view没有销毁。
解决办法：原来的view销毁，绑定在content上。监听不到top部分。


### 对象合并方法
```
	bad:
	/* 对象合并 */
    function topNavExtend(o,n){
        for(var p in n){
            if(n.hasOwnProperty(p) && n[p] != null) {
                o[p] = n[p];
            }
        }
        return o;
    };
    good:
    $.extend( o, n );
```
### 参数列表提取
```
	var newextobj = {
            "sf_tab_name":tab_name,
            "type":tabchild_tpye
        };
       
```
暂时只支持参数传递，参数值处理有待优化。

