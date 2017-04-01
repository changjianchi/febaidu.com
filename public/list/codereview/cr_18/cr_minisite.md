# 【建站&激发方向cr】  

> 2016-12-29

> 郭勇 张屾 冯斐帆 胡晓卉 刘玲玲 程恩 刘思豪 陈锐 玲娟 健驰

## post |激发|常健驰

###1、不需要重新title
```
{%block name="title"%}
    {%fe_fn_c_box_adaptive_prefix url=""%}
        <h3 class="c-title c-gap-top-small">
            {%fe_fn_c_text_inline text=$tplData.titleData.text|escape%}
        </h3>
    {%fe_fn_c_box_adaptive_suffix url=""%}
{%/block%}
```
*解决方案

```
{%$tplData.title = $tplData.titleData.text%}
{%$tplData.url = ""%}
```
## Wise_sf_news5 |激发|常健驰

###2、现在应该没有这部分了

```
{%block name="wrapper_suffix"%}{%/block%}
```

###3、{%*共同讨论下 https-http *%}
```
{%$protocal = 'http://'%}
{%if $smarty.server.HTTP_HTTPS == 1%}
    {%$protocal = 'https://'%}
{%/if%}
```

###4、用公共base中的时间函数，不用自己定义
```
{%function wise_sf_news_format_date%}{%strip%}
    {%if ($smarty.now-$second) < 60%}
        刚刚
    {%else%}
        {%if $tempDataMinutes<60%}
            {%$tempDataMinutes|escape%}分钟前
        {%elseif $tempDataMinutes>=60%}
            {%$tempDataHours=floor($tempDataMinutes/60)%}
            {%if $tempDataHours<24%}
                {%$tempDataHours|escape%}小时前 
            {%else%}
                {%$second|date_format:"%m-%d %H:%M"%}
            {%/if%}
        {%/if%}
    {%/if%}
{%/strip%}{%/function%}
 ```

###5、URL 里面有的字段转成escape 有的转成 escape：URL
```
{%function wise_sf_news_build_video_url%}{%strip%} 
     ...
  http://video.pae.baidu.com/show/videoindex?src={%$vd.url|escape:'url'%}&title={%$vd.title|escape%}&duration={%$totaltime|escape%}&sourceName={%$vd.source|escape%}&sourceLink={%$vd.sourcelink|escape:'url'%}&lid={%$reqData.lid|escape%}&srcid={%$alaData.aladdinResourceId|escape%}&query={%$reqData.word|escape%}
{%/strip%}{%/function%}
```
*建议： 拼url 时统一转 escape：URL
