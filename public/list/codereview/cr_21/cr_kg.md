# [KG 方向CR]

> 2017-02-23

> 朱雷 吴丽黎

## www_normal | 自然结果

### case反馈

1. html中有复杂的smarty处理逻辑，可以把smarty处理逻辑单独拿出来，这样html更加清晰

问题代码：

```
<a href="{%www_normal_alaTcUrl l=$l pl='$pl' tx=$tx src=$url undecode=$undecode tj5=$ltj laid=$laid waplogo=$waplogo dict=$dict vmgdb=$vmgdb sto=$sto cyc=$cyc extra_param=$extra_param%}" data-sf-href="/sf_p/question/{%$pai_matches[1]|escape%}?top=%7B%22sfhs%22%3A4%7D"  {%if $xse%}data-xse="{%$xse|escape:'none'%}"{%/if%} data-sf-options="{&quot;view&quot;:{&quot;customClassName&quot;:&quot;zd-sf-p&quot;,&quot;headTitle&quot;:&quot;<p class=\&quot;header-title\&quot;><span class=\&quot;logo\&quot;><\/span><\/p><div class=\&quot;share-wrap\&quot;><\/div>&quot;,&quot;_hold&quot;:2}}" class="
{%$class|escape:'none'%}">
```

优化代码：

```
{%$url = {%www_normal_alaTcUrl l=$l pl='$pl' tx=$tx src=$url undecode=$undecode tj5=$ltj laid=$laid waplogo=$waplogo dict=$dict vmgdb=$vmgdb sto=$sto cyc=$cyc extra_param=$extra_param%}%}
{%$sfUrl = {%"/sf_p/question/"|cat:$pai_matches[1]|cat:"?top=%7B%22sfhs%22%3A4%7D"%}%}
{%$sfOptions = "{&quot;view&quot;:{&quot;customClassName&quot;:&quot;zd-sf-p&quot;,&quot;headTitle&quot;:&quot;<p class=\&quot;header-title\&quot;><span class=\&quot;logo\&quot;><\/span><\/p><div class=\&quot;share-wrap\&quot;><\/div>&quot;,&quot;_hold&quot;:2}}"%}

<a href="{%$url|escape%}" data-sf-href="{%$sfUrl|escape%}" {%if $xse%}data-xse="{%$xse|escape:'none'%}"{%/if%} data-sf-options="{%$sfOptions|escape%}" class="
{%$class|escape%}">
```

### good code

1. 业务逻辑复杂的模板，可以像这样进行分块，这样看起来比较清晰

```
{%block name="main_container"%}
    {%block name="inc_title"%}
        {%include file="search/searchaladdin/www_normal/inc_title.tpl" inline%}
    {%/block%}
    {%block name="inc_subtitle"%}
        {%include file="search/searchaladdin/www_normal/inc_subtitle.tpl" inline%}
    {%/block%}
    {%block name="inc_abstract"%}
        {%include file="search/searchaladdin/www_normal/inc_abstract.tpl" inline%}
    {%/block%}
    {%block name="inc_abstract_rich"%}
        {%include file="search/searchaladdin/www_normal/inc_abstract_rich.tpl" inline%}
    {%/block%}
    {%block name="inc_showurl"%}
        {%include file="search/searchaladdin/www_normal/inc_showurl.tpl" inline%}
    {%/block%}
    {%block name="inc_extra"%}
        {%include file="search/searchaladdin/www_normal/inc_extra.tpl" inline%}
    {%/block%}
    {%block name="inc_script"%}
        {%include file="search/searchaladdin/www_normal/inc_script.tpl" inline%}
    {%/block%}
    {%block name="inc_clkrcmd"%}
        {%include file="search/searchaladdin/www_normal/inc_clkrcmd.tpl" inline%}
    {%/block%}
{%/block%}
```

2. 同一个模板文件中，用注释给业务逻辑分块

```
{%*百度知道手百app调起*%}
...

{%*百度贴吧 手百插件调起*%}
...
```

## hotel_booking | 旅游poi | 王天立 

### case反馈

1. css冗余

问题代码：

```
.sf-hotel-booking-hide {
    display: none;
}
.sf-hotel-booking-js-error {
    display: none;
}
```

优化代码：

```
.sf-hotel-booking-hide,
.sf-hotel-booking-js-error {
    display: none;
}

or 模板里只使用一个类

.sf-hotel-booking-hide {
    display: none;
}
```

2、代码格式乱

问题代码：

```
<div class="c-title">
    酒店预订&nbsp;
    <span class="c-gray">
        <i class="c-showurl c-gap-left c-gap-right-small wa-sigma-hotel-cicons sf-hotel-booking-hide">
            &#xe601;
        </i>
        &nbsp;<span class="sf-hotel-booking-provider"></span>
    </span>
</div>
```
优化代码：
```
<div class="c-title">
    <span class="c-gap-right-small">酒店预订</span>    
    <i class="c-showurl c-gap-left c-gap-right-small c-gray c-gap-right-small wa-sigma-hotel-cicons sf-hotel-booking-hide">&#xe601;</i>
    <span class="c-gray sf-hotel-booking-provider"></span>    
</div>
```
### good code

1. ajax数据获取稳定

原因： 

如果连续点击了5个ajax请求，前4个其实是无效的，可以趁早结束节省资源。 

避免更严重的问题是：最后一个发送的请求，响应未必是最后一个，有可能造成混乱。还需要一个队列来维护发送的请求和响应

ajaxXhr.abort(); ajax请求虽立即停止，但还是会执行后面的function()

还通过defer的方法来控制逻辑实现的顺序，防止获取不到数据报错的情况

```
var getDataPromise = function() {
    var defer = $.Deferred();
    if(ajaxXhr) {
        ajaxXhr.abort();
        ajaxXhr = null;
    }
    if (!uid) {
        defer.reject();
        return defer.promise();
    }
    var para = {
        app_from: 'aladdin',
        resid: '03',
        is_hour: '0',
        st: st, 
        et: et,
        os: 'webapp',
        uid: uid
    };         
    ajaxXhr = $.ajax({
        url: 'https://hotel.baidu.com/api/v3/aladdinprice',
        dataType: 'jsonp',
        data: para,
        jsonp: 'callback',
        success: function(data) {
            if (data) {
                console.log(data);
                defer.resolve(data);
            }else {
                defer.reject();
            }
        },
        error: function(xhr, status) {
            if (xhr && status !== 'abort') {
                defer.reject();
            }
        },
        complete: function () {
            ajaxXhr = null;
        }
    }); 
    return defer.promise();
};
getDataPromise().then(function(data) {...}
```
