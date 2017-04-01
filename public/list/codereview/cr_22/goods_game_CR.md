# 【商品&游戏方向CR】

> 2017-03-10

> 陈锐 玲娟 健驰 仁广


## CR方向：娱乐&民生 
- CR项目：明星网络印象
- 项目描述：针对娱乐话题人物，智能提取网民观点。让用户可以轻松看到网络各方对于事件人物的实时态度与评价。
- 涉及模板：
    - impress（网络基本信息卡）
    - impress_person（网络印象个人基础信息）
    - impress_list（网络印象评论留言列表）
- 预览地址：http://cp01-ala-fe-plat-2.epc.baidu.com:8003/s?word=%E9%B9%BF%E6%99%97%E7%88%B6%E4%BA%B2&sa=tb&ts=0183642&t_kt=0&ie=utf-8&rsv_t=30148ZnJOP%252Fp5vSWMv258PqnxJNyEW2QbaXEPiiKdgOvA5YQ%252F7rt&rsv_pq=7275009103640539227&ss=100&t_it=1&rqlang=zh&rsv_sug4=4207&inputT=2996&oq=%E9%B9%BF%E6%99%97


## impress | 娱乐方向 | 吴丽黎

### 数据待调整，跟RD直接对，默认schema

```
{%block name="data_modifier"%}
  {%$tplData.title = $tplData.head.title%}
    {%$tplData.showLeftText = $tplData.head.showLeftText%}
    {%$tplData.showRightText = $tplData.head.showRightText%}
    {%$tplData.showRightUrl = $tplData.head.showRightUrl%}
{%/block%}
```

* 建议在schema中定义好数据结构，避免在模板中重写

### 多余的class，跟模板名不匹配

```
{%block name="foot_right"%}
<div class="c-span6">
    {%fe_fn_c_sflink_prefix url=$tplData.head.sfurl class="c-blocka c-moreinfo wa-train-course-righturl"%}
    {%$tplData.showRightText|escape%}<i class="c-icon">&#xe734</i>
    {%fe_fn_c_sflink_suffix url=$tplData.head.sfurl%}
</div>
{%/block%}
```

* `class="wa-train-course-righturl"`在模板中并没有用到，这里可以删除，而且命名不规范，应该是直接复制过来的吧....

### 没用栅格样式

```
.wa-impress-li {
    padding: 8px 0;
    border-bottom: 1px solid #f1f1f1;
}
```

* padding是可以通过栅格的上下外边距来实现的，下边框线也可以通过c-line-bottom来实现，没有必要自己重写

### 多余的兼容代码

```
@font-face {
    font-family: 'wa-impress-cicons'; 
    src: url(/static/font/aladdin/impress/iconfont.eot);
    src: url(/static/font/aladdin/impress/iconfont.eot#iefix) format('embedded-opentype'),
        url(/static/font/aladdin/impress/iconfont.woff) format('woff'),
        url(/static/font/aladdin/impress/iconfont.ttf) format('truetype'),
        url(/static/font/aladdin/impress/iconfont.svg?#cicons) format('svg');
    font-weight: normal;
    font-style: normal;
}
```

* 在wise端有些没必要做兼容的可以省略掉

### sf跳转地址拼接问题

```
{%foreach array_slice($tplData.list.tag, 0, 4) as $tag%}
  {%fe_fn_c_sflink_prefix class="c-color-gray-a wa-impress-tag {%if !$tag@last%} c-gap-right{%/if%}" url="{%$tplData.head.sfurl|escape:none%}&tag={%$tag.value|escape:url%}"%}
      {%$tag.name|escape%}({%$tag.count|escape%})
    {%fe_fn_c_sflink_suffix url=$tplData.head.sfurl%}
{%/foreach%}
```

* 尽量可以让后端给出一个完整的sf地址

### 截断建议后端按字段来截断

```
{%if strlen($li.title.main) > 120%}
    {%${li.title.main = mb_substr($li.title.main, 0, 32, 'utf-8')|cat:'...'%}
{%/if%}}
```

## impress_person | 娱乐方向 | 吴丽黎

### class命名不规范

```
.sfc-impressperson-wrap

```
* 模板中class命名缺少中划线，规范命名.sfc-impress-person-wrap

### 多余的js代码

```
<script>      
    card.setup({
        img: '{%$tplData.head.person.img|getHttpsHost|escape:none%}'
    });
</script>
<script>
    card.setup(function() {
        var self = this;
        var $cnt = $(self.container);
        var DATA = self.data;
        var $wrap = $cnt.find('.sfc-impressperson-wrap').parent('.c-container').get(0);
        
        $wrap.style.paddingBottom = '0';
        $wrap.style.marginBottom = '0';
    });
</script>
```

* js实现的功能其实是可以通过css样式来实现的，没必要写这块js的逻辑
* 方案一：通过父级选择器如 .c-result[tpl="xxx"] .container
* 方案二：通过子原始外边距 .sfc-impressperson-wrap { margin-top: -.1rem }


## impress_list | 娱乐方向 | 吴丽黎

### 全局样式

```
ul,
li { 
    list-style: none; 
}
```

* 在模板中尽量不要直接定义全局的样式

### 没用到的class

```
.sfc-impresslist-location-mask { 
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #f8f8f8;
    text-align: center;
    line-height: 22px;
    background: rgba(0,0,0,.6);
}
```

* 在模板中没有用到的class建议直接去掉

### 没有语义的参数名

```
function render(d, num) {
...
    $.ajax({
        url: DATA.ajaxurl,
        data: d,
...
    return defer.promise();
}
```

* 传的参数最好具有语义化，提高代码的维护性

### 变量名的规范问题

```
var RENDERJSON = [];
```

* 一般非常量变量名尽量不要用大写来定义

### 容错不严谨

```
if (res.data[0] != null) {                       
    res = res.data[0].result.list.content;
}
```

* 添加 res.data 是否存在的判断

### etpl去空格问题

```
var listHtml = page.etpl.compile(__inline('./inc_list.etpl'));
```

* etpl中的空格会直接带到模板中，尽量用正则去掉etpl中的空格

### etpl模板编译的优化问题

```
var listHtml = page.etpl.compile(__inline('./inc_list.etpl'));
```

* page.etpl.compile 会对文本做复杂的语法处理，建议在性能上做优化

```
var renderListHtml;
...

if (!renderListHtml) {
    
    renderListHtml = page.etpl.compile(__inline('./inc_list.etpl').replace(/\s*\n\s*/g, ''));
}

renderListHtml(data);
...


```


### tab切换内容区域闪烁的问题

* 原因是异步取数据时，dom里面没有内容，导致容器高度没有撑开
* 建议方式

```
// 切换前
$tabContentNew.css('min-height', $tabContentCurr.height());

// 执行切换
$tabContentCurr.hide();
$tabContentNew.show();

// 数据返回，dom填充后
$tabContentNew.css('min-height', null);
```





