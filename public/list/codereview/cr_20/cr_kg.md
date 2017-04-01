# [KG 方向CR]

> 2017-02-09

> 李林 睿娇 天立

## recom, recom_map, city_scene_list, routes, trip | 旅游 | 刘泉有

## case反馈

### 1、 模板的命名要规范


### 2、通过c-row-tile 去掉c-container 边距
```
    [data-tpl="recom_map"]>.c-container {
        padding: 0;
        margin: 0;
    }
```
* 解决方案: 使用c-row-tile 去掉左右边距、c-row-top/c-row-bottom 去掉上下边距

### 3、不要手工拼接URL参数
```
	var url = '/sf?openapi=1&dspName=iphone&from_sf=1&pd=city&resource_id=4418&cardid=4442,4429&word='+ word + '&title=' + title + '&ext={"cate":"' + type + '"}&ms=1&top={"sfhs":2}' + (circle ? '&circle=' + circle :'')  + (scene ? '&scene=' + scene : '' )

```
* 解决方案：使用以下方法
```
    var param = {
        circle:1,
	scene:2
    };
    urlParam = Object.keys(param).map(function(k) {
        return k + "=" + encodeURIComponent(param[k]);
    }).join('&');
```

### 4、把大文件分隔成多个文件
```
    {%foreach $list as $item%}
        <div  class="sfc-recom-map-page c-blocka">
	        60多行代码
        </div>
    {%/foreach%} 
```

* 解决方案：分割成单独文件
```
    {%foreach $list as $item%}
	{%include name='./inc_recom_item.tpl'%}
    {%/foreach%} 
```


## good code 展示
```
    {%* 推荐列表数据容错 *%}
    {%$recom = $item.recom%}
    {%if !isset($recom[0])%}
        {%$recom = [$recom]%}
    {%/if%}
```
* foreach 之前都检查数据格式
``` 
    var share = $ctt.find('.sfc-routes-share').get(0);
```

* 注意使用PMD组件不允许直接用 $('b-share') 选择器

## 总结

* 代码质量有很大提高
* 细节上需要提高：合理的命名；代码块的组织；有效的注释

> 2017-02-09

> 李阳阳 泉有 鹏远

## sg_operate| 资讯 | 健驰

## case反馈

### 1、 模板的css命名要规范
```
    .wa-sg-operate-wrapper-fixed img{
        background-color: aliceblue;
    }
    <textarea class="textarea" style="display: none;">
```
* 解决方案:a: #F0F8FF,查了下这是个颜色名，不建议用啥red,green这样子直接的颜色~class="textarea"模板中也没用到，去掉呗，规范的用wa开头的命名规范

### 2、sigma2.0的使用上
```
    {%block name="sigma_common_header_content"%}
        {%if $tplData.sigma%}
        xxx此处省略n个字
```
* 注意: base里将sigma_common_header_content这个模块写到了c-onlyshow-toppic这个类里，是有padding-top:110px的,所以及时没有$tplData.sigma也会空出上边的sigma的头部，所以如果是sigma的样式，里边的内容要有~不能为空~不然会像bug，也没必要判断if了

### 3、性能上，smarty里把更多显示里边也加载出来了，只是有hide的类名不显示，如果hide的数据特别多，会影响首屏的速度，可以把比方多余的在js里点击更多时再去加载出来这样虽然在写js时会增加很多成本和方法函数，但是会减少首屏速度

* 注意: {%foreach array_slice($con.shipin.shipinItem,0,5) as $shipin%}截断下只加载前几个就好了

## good code 

* 大部分能带smarty里实现的代码都在smarty里实现，减少加载速度，建议使用smarty函数
* js里代码逻辑很清晰，很明显可以看出，一块区域的功能
* 注释很清晰