# 【建站&激发方向cr】  

> 2017-01-10

> 郭勇 张屾 冯斐帆 胡晓卉 刘玲玲 程恩 刘思豪 陈锐 玲娟 健驰

## wise_tuan |建站|程恩

### 1、文案最好后端给出
```
    {%$tplData.title = $tplData.hilight|cat:'_百度糯米'%}
    {%$tplData.showLeftText = '百度糯米'%}
```
* 解决方案: 后端数据给出

### 2、模版拼接要增强可读性

代码片段如下:
```
listTemplate += '<a data-url= "' + url + '" href="' + url +'" class="c-blocka wa-wise-tuan-item c-line-bottom c-gap-bottom">'+
'<div class="c-row wa-wise-tuan-box-flexbox c-gap-bottom">';
listTemplate +='<div class="c-span3">'+
                    '<div class="c-img c-img-s">'+
                        '<div class="wa-wise-tuan-img" style="background-image: url('+ decodeURIComponent(item.image) +');">'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="c-span9 wa-wise-tuan-item-info">'+
                    '<p class="c-line-clamp1 wa-wise-tuan-item-title">'+ title ;
```
* 解决方案: 

### 1.格式要优雅
```
listTemplate += ''
             + '<a data-url= "' + url + '" href="' + url + '" class="c-blocka wa-wise-tuan-item c-line-bottom c-gap-bottom">'
             + '<div class="c-row wa-wise-tuan-box-flexbox c-gap-bottom">'
             + '<div class="c-span3"><div class="c-img c-img-s">'
             + '<div class="wa-wise-tuan-img" style="background-image: url(' + decodeURIComponent(item.image) + ');">'
             + '</div></div></div><div class="c-span9 wa-wise-tuan-item-info">'
             + '<p class="c-line-clamp1 wa-wise-tuan-item-title">' + title ;
```
### 2.使用join()

```
listTemplate += ['<a data-url= "' ,url ,'" href="', 
                url ,'" class="c-blocka wa-wise-tuan-item c-line-bottom c-gap-bottom">',
                '<div class="c-row wa-wise-tuan-box-flexbox c-gap-bottom">',
                '<div class="c-span3"><div class="c-img c-img-s">',
                '<div class="wa-wise-tuan-img" style="background-image: url(',
                decodeURIComponent(item.image) ,');">',
                '</div></div></div><div class="c-span9 wa-wise-tuan-item-info">',
                '<p class="c-line-clamp1 wa-wise-tuan-item-title">',title].join('');
```
### 1 title内容不必重写 
```
{%block name="title"%}
    {%$search_sf_options = "data-sf-options="|cat:'{"view":{"_hold":2}}'%}
    {%fe_fn_c_sflink_prefix attr={%$search_sf_options|escape:none%}  url=$tplData.url class="c-blocka c-title"%}
      <h3 class="c-title c-gap-top-small">
            {%fe_fn_c_text_inline text={%$tplData.title|escape%}%}
      </h3>
    {%fe_fn_c_sflink_suffix url=$tplData.url%}
{%/block%}
```
* 解决方案: 

```
{%block name="title"%}
  {%$search_sf_options = "data-sf-options="|cat:'{"view":{"_hold":2}}'%}
  {%fe_fn_c_sflink_prefix attr={%$search_sf_options|escape:none%}  url=$tplData.url class="c-blocka c-title"%}
  {%fe_fn_c_title%}
  {%fe_fn_c_sflink_suffix url=$tplData.url%}
{%/block%}

```

## sg_weather|KG|肖学林

### 2 css代码规范

```
.wa-sg-weather-compare-sf {text-align: right;  display:inline-block;margin-right:-0.03rem; color: #fff;}
```
[强制]当数值为 0 - 1 之间的小数时，省略整数部分的 0


## wise_zhaopin_areaglb_info |建站|冯斐帆

### 考虑周全做兼容
```
A.setup({
    ...
    socialList:{%json_encode($tplData.socialList%},
    focusList:{%json_encode($tplData.focusList%},
    ...
});

...
var $lengthSocial = $socialList.length;
var $lengthFocus = $focusList.length;
if ($lengthSocial) {
    for (var i = 0; i < $lengthSocial; i++) {
        sUrl = $socialList[i].key + '&mk=' + mkString;
        sTcUrl = _this.makeTcUrl({
            src: sUrl
        });
        $container.find(".wa-wise-zhaopin-areaglb-hotjob-dom").eq(0).find(".c-blocka").eq(i).attr('href', sTcUrl);
    }
}
if ($lengthFocus) {
    for (var i = 1; i < $lengthFocus; i++) {
        fUrl = $focusList[i] + '&mk=' + mkString;
        fTcUrl = _this.makeTcUrl({
            src: fUrl
        });
        $container.find(".wa-wise-zhaopin-areaglb-hotjob-dom").eq($num-1).find(".c-blocka").eq(i).attr('href', fTcUrl);
    }
}
...
```
* 解决方案: 

```
将错误扼杀在萌芽
{%$tempArray = array()%}
A.setup({
  ...
  socialList:{%json_encode($tplData.socialList|default:$tempArray)%},
  focusList:{%json_encode($tplData.focusList|default:$tempArray)%},
  ...
});

```

## zhp_firm_name|建站|玲玲

[预览](https://m.baidu.com/s?word=%E4%B8%8A%E6%B5%B7%E5%8D%8E%E4%BE%A8%E5%9B%A0%E7%A7%81%E5%87%BA%E5%85%A5%E5%A2%83%E6%9C%8D%E5%8A%A1%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&wd=%E4%B8%8A%E6%B5%B7%E5%8D%8E%E4%BE%A8%E5%9B%A0%E7%A7%81%E5%87%BA%E5%85%A5%E5%A2%83%E6%9C%8D%E5%8A%A1%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&tn=iphone)

### 1、代码冗余
```
{%if $tplData.show_card.query_tab == 'salarypage'%}
     {%$tabpage = '&page=salarypage'%}
     {%$fullName = $fullName|cat:'怎么样？'%}
{%elseif  $tplData.show_card.query_tab == 'interviewpage'%}
    {%$tabpage = '&page=interviewpage'%}
{%elseif  $tplData.show_card.query_tab == 'connectpage'%}
    {%$tabpage = '&page=connectpage'%}
{%elseif  $tplData.show_card.query_tab == 'dynamicspage'%}
    {%$tabpage = '&page=dynamicspage'%}
{%elseif $tplData.show_card.query_tab == 'firmpage'%}
    {%$tabpage = '&page=firmpage'%}
{%/if%}
```
代码可简化为：

```
{%$tabpage = '&page=' + $tplData.show_card.query_tab%}
```

### 2、代码规范问题

```
.wa-zhp-firm-name-svgBox{position:relative;}
```
[强制] 选择器 与 { 之间必须包含空格。

```
{%if $tplData.show_card.logo && $tplData.show_card.logo != ''%}
```

[强制] 在 Equality Expression 中使用类型严格的 ===。仅当判断 null 或 undefined 时，允许使用 == null。

### 3、外层的if没有用
```
{%if $tplData.show_card.feel || $tplData.show_card.scale%}
    {%if $tplData.show_card.feel%}
    <span class="c-color-gray">面试难度：</span>{%$tplData.show_card.feel|escape%}&nbsp;
    {%/if%}
    {%if $tplData.show_card.scale%}
    <span class="c-color-gray">公司规模：</span>{%$tplData.show_card.scale|escape%}
    {%/if%}
{%else%}
    {%if $tplData.show_card.address%}
    <span class="c-color-gray">公司地址：</span>{%$tplData.show_card.address|escape%}
    {%/if%}
{%/if%}
```

## spring_ticket|KG|文宇

[预览](https://m.baidu.com/s?word=%E6%8A%A2%E7%A5%A8%E7%A5%9E%E5%99%A8&wd=%E6%8A%A2%E7%A5%A8%E7%A5%9E%E5%99%A8&tn=iphone)

### 1、css代码规范

```
.wa-spring-ticket-btn{
    color:#fff;
    background-color:#E0B978;
    border: none;
    box-shadow: 0px 2px 2px #D21727;
    width: 100%;
}
```
[建议] 颜色值中的英文字符采用小写。如不用小写也需要保证同一项目内保持大小写一致。

[规范链接](http://agroup.baidu.com/fe-styleguide/md/article/62452#45-%E9%A2%9C%E8%89%B2)

### 2、细节错误
```
for(var i=0;i<list.length;i++){
    ……
    htmlRili+="<table cellspacing='0' class='c-table'><tbody><tr class='c-table-hihead c-gap-top '><td class='wa-spring-ticket-rili-readonly'>一</td><td class='wa-spring-ticket-rili-readonly'>二</td><td class='wa-spring-ticket-rili-readonly'>三</td><td class='wa-spring-ticket-rili-readonly'>四</td><td class='wa-spring-ticket-rili-readonly'>五</td><td class='wa-spring-ticket-rili-readonly'>六</td><td class='wa-spring-ticket-rili-readonly'>日</td></tr>";
    ……
    htmlRili+='<tbody></table>';
};
```
标签的闭合

### 3、无效代码
```
.wa-spring-ticket-other-trip{
    display: {%$tplData.other.show|getHttpsHost|escape:none%};
}
```

```
.wa-spring-ticket-other-trip{
    display: {%$tplData.other.show|getHttpsHost|escape:none%};
}
```

### 4、整体的问题和优点

代码整体缩进、间距有些混乱，但是功能和注释很清晰。


## sd_official_web|MIP|王培

### 1、判断逻辑不一致，有隐患

```
{%block name="data_modifier"%}
  {%$absCSpan = 'c-span12'%}
    {%$absCLineClamp = 2%}
    {%$img = $tplData.imgS%}
  
    {%* 在左图右文 格式下，一些信息的处理 *%}
    {%if $tplData.type != 'n'%}
        {%$absCSpan = 'c-span9'%}
    ...

    {%block name='content'%}
    ...

    {%* 摘要显示，有图片则显示为左图右文，无图片则显示为两行摘要文案 *%}
    <div class="c-row c-gap-top-small">
        {%if $tplData.type != 'n' && !empty($img)%}
            <div class="c-span3">
                {%fe_fn_c_box_adaptive_prefix url=$img.url ltj="l" class="c-blocka"%}
                  {%fe_fn_c_img_delay imgsrc=$img.addr type="{%$tplData.type|escape%}"%}
                {%fe_fn_c_box_adaptive_suffix url=$img.url%}
            </div>
        {%/if%}
        <div class="{%$absCSpan|escape:none%}">
```

[建议] data_modifier 中增加 $absCSpan 判断逻辑增加 $tplData.type != 'n' && !empty($img)

### good code 展示

* 代码整体结构清晰，缩进合理，注释完善，可读性高，开发中寻求更优的解决方案。

* 取循环总数

* 更优化？不用空标签占位

```
{%* 子链循环，不能铺满整行，用空 a 标签补充 *%}
{%if !empty($tplData.sublinks)%}
  {%$cnt = count($tplData.sublinks.sublink) + 4 - count($tplData.sublinks.sublink) % 4%}
    {%section name=loop loop=$cnt%} 
        {%$index = $smarty.section.loop.index%}
        {%$item = $tplData.sublinks.sublink[$index]%}

        {%if $index%4 == 0%}
            <div class="c-slink">
        {%/if%}

        {%if !empty($item)%}
            {%fe_fn_c_box_adaptive_prefix url=$item.url ltj="l" class="c-blocka"%}
                {%$item.text|escape%}
            {%fe_fn_c_box_adaptive_suffix url=$tplData.url%}
        {%else%}
            <a class="wa-sd-official-web-subs"></a>
        {%/if%}

        {%if $index%4 == 3%}
            </div>
        {%/if%}
    {%/section%}
{%/if%}

```

## decoration|KG|阳阳

### 1、重新title 和foot 只为加一个class钩子，在js里做处理

```
{%block name="title"%}
    {%fe_fn_c_sflink_prefix url=$tplData.url ltj="title" class="c-blocka wa-decoration-title"%}
        {%fe_fn_c_title%}
    {%fe_fn_c_sflink_suffix url=$tplData.url%}
{%/block%}

{%block name="foot_right"%}
    <div class="c-span6">
        {%fe_fn_c_sflink_prefix url=$tplData.url class="c-blocka c-moreinfo wa-decoration-foot"%}
            <span>{%$tplData.showRightText|escape%}</span>
            <i class="c-icon c-gap-left-small">&#xe734</i>
        {%fe_fn_c_sflink_suffix url=$tplData.url%}
    </div>
{%/block%}

```

[建议] 可以使用 this.container.find 方式定位节点

### 2、不建议把整个tplData json_encode , 按需索取

```
<script>
A.setup({
    tp:{%json_encode($tplData)%},
    _tcUrl:'{%fe_fn_c_async_tc_url%}',
    pageSize:'{%$pageSize|escape:"javascript"%}',
    pageRow:'{%$pageRow|escape:"javascript"%}',
    ajaxUrl: '{%$ajaxUrl|getHttpsHost|escape:"javascript"%}',
    select:{%json_encode($tplData.select)%},
    resourceId: '{%$tplData.open_resource_id|escape:"javascript"%}',
    query: '{%$tplData.open_query|escape:"javascript"%}',
    sfURL:'{%$tplData.url|escape:javascript%}',
    detailUrl:'{%$tplData.detail_url|escape:javascript%}',
    resNum:'{%$tplData.resNum|escape:javascript%}'
});
</script>

```

### 3、合理使用 try catch

```
...
$.ajax({
    url: ajaxUrl,
    data: obj,
    dataType: 'jsonp',
    jsonp: 'cb',
    success: function (res) {
        var data;
        try {
            data = res.data[0];
        }
        catch (e) {
            defer.reject('noData');
        }
...

```
[建议] 这里的数据异常情况完全是可预知的，完全可以使用 if 