# 【建站&激发方向cr】  

> 2017-02-09

> 张屾 郭勇  冯斐帆 胡晓卉 刘玲玲 程恩 刘思豪 陈锐 玲娟 健驰 仁广 杨露

## life_pay | 建站 | 刘玲玲 | 程恩CR


### 问题1、尽可能使用简洁的表达式

```
    if(middleArray.length > 0){
       objNew[cityList[i]] = middleArray;
    }
```
* 解决方案:

```
    if(middleArray.length){
       ...
    }
```

## brands | KG | 郑铎 | 程恩CR

### 问题1、变量----即用即声明，不要在函数或其它形式的代码块起始位置统一声明所有变量。

```
    function addInfo(carlist,start,end,res){
        var priceRange;
        var hotcar;
        var htmlArr = [];
        var listArr = [];
        var orange;
        ......
        for(var item in jionData){
           if(item === 'price' && jionData[item] !=""){
                .....
                } 
                priceRange = jionData.price.split('_');
                priceRange = priceRange[1]/100 === 9999 ? priceRange[0]/100+'万以上' : priceRange[0]/100+'-'+priceRange[1]/100+'万';
                .....
            }
        }
    }    
   
```


* 解决方案:

```
    function addInfo(carlist,start,end,res){ 
        for( var item in jionData){
            ...
             if(item === 'price' && jionData[item] !=""){
                var priceRange;
                priceRange = jionData.price.split('_');
                priceRange = priceRange[1]/100 === 9999 ? priceRange[0]/100+'万以上' : priceRange[0]/100+'-'+priceRange[1]/100+'万';
            }
        }
    }

```
## 问题1解释：

* 变量声明与使用的距离越远，出现的跨度越大，代码的阅读与维护成本越高。虽然JavaScript的变量是函数作用域，还是应该根据编程中的意图，缩小变量出现的距离空间。



## wise_chunwan | KG | 最后修改人祁鹏远 | 刘玲玲 CR


### 问题 代码冗余及待优化部分

```
    bribery: {%json_encode($tplData.bribery)%}, (没有用的代码)
    ......
    praiseApi: '{%"http://api.open.baidu.com/pae/channel/data/asyncqury"|getHttpsHost%}',
    encodeApi: '{%"http://vote.baidu.com/pae/component/api/desenc?content="|getHttpsHost%}',
    ......
```
* 解决方案:

```
    1、上线前没有的代码记得删掉
    bribery: {%json_encode($tplData.bribery)%}, 
    
    2、建议添加 escape:"javascript"
    praiseApi: '{%"http://api.open.baidu.com/pae/channel/data/asyncqury"|getHttpsHost|escape:"javascript"%}',
    encodeApi: '{%"http://vote.baidu.com/pae/component/api/desenc?content="|getHttpsHost|escape:"javascript"%}',
    ......
```

## sg_lasar_member | KG | 山莉 | 冯斐帆 CR 


### 问题1、css样式要规范

```
    存在多处，不一一列举
    .wa-sg-lasar-member-history-table .c-table-abstract th {
        color: #666666;
    }
    .c-sigma-wapper[tpl="sg_lasar_member"] .c-tabs-nav  {
        background: #ffffff;
        padding: 0 .16rem;
    }
```
* 解决方案:

```
    1、用公共样式 c-color-gray-a
    2、
    .c-sigma-wapper[tpl="sg_lasar_member"] .c-tabs-nav  {
        background: #fff;
        padding: 0 .16rem;
    }
```

### 问题2、判断条件不一样，潜在textarea标签闭合问题

```
    根据代码逻辑：!$tab.selected 和 !$tplData.tab[3].selected 相同
    {%if !$tab.selected%}<textarea class="wa-sg-lasar-member-dpn">{%/if%}
    .....
    {%if !$tplData.tab[3].selected%}</textarea>{%/if%}
```
* 建议方案:

```
    {%if !$tab.selected%}<textarea class="wa-sg-lasar-member-dpn">{%/if%}
    .....
    {%if !$tab.selected%}</textarea>{%/if%}
```

## life_o2o | 建站 | 程恩 | 冯斐帆 CR 


### 问题1、css样式要规范

```
    .wa-life-o2o-telIcon {
        color:#666;
        font-size:16px;
    }
```
* 解决方案:

```
    用公共样式   c-color-gray-a
    
```
### 问题2、字符串拼接

```
    存在多处
     html +=    '<div class="c-line-clamp1">'+
                '<div class="wa-life-o2o-star">'+
                    '<span style="width:'+ Math.ceil(list.score/5) + '%;"></span>'+
                '</div>';
```
* 解决方案:

```
     html +='<div class="c-line-clamp1">'
          + '<div class="wa-life-o2o-star">'
          + '<span style="width:'+ Math.ceil(list.score/5) 
          + '%;"></span>'
          + '</div>';
    或者：
     html = ['<div class="c-line-clamp1">','<div class="wa-life-o2o-star">',
          '<span style="width:'+ Math.ceil(list.score/5), 
          '%;"></span>','</div>'].join('');
```





## zhaopin_exact | 建站 | 刘玲玲|杨露 CR

## case反馈

### 问题1.不建议把整个tplData json_encode , 按需索取

```
    A.setup({
        tpl: {%json_encode($tplData)%},
        ala: {%json_encode($alaData)%},
        _tcUrl: '{%fe_fn_c_async_tc_url%}',
        hilight : '{%$OriginQuery|escape:javascript%}'.split(''),
        querys : '{%$OriginQuery|escape:javascript%}',
        host : '{%$host|escape:javascript%}',
        queryWord : '{%$queryWord|escape:javascript%}',
        ajaxQueryWord : '{%$tplData.query_word|escape:javascript%}',
        param : '{%$param|escape:javascript%}',
        citySug : '{%$city_sug|escape:javascript%}',
        hasprov : '{%$hasProv|escape:javascript%}',
        opendataUrl : '{%$opendataUrl|getHttpsHost|escape:javascript%}'
    },false);
```


### 问题2.在开发中，多行html拼接比较繁琐，而且容易出问题.

```
    html += '<a class="c-blocka c-gap-top c-line-bottom" href="'+ tcUrl +'" >';
    html +=     '<div class="c-row">';
    html +=         '<div class="c-span7 c-line-clamp1">'+ _highlight(res[i].title) +'</div>';
    var strSalary = res[i].salary.replace(/元/i,'');
    html +=         '<div class="c-span5 wa-zhaopin-exact-salary">'+ ((res[i].salary && res[i].salary != "面议")?strSalary+'元/月':'薪资面议' )+'</div>';
    html +=     '</div>';
    html +=     '<div class="c-row '+((!res[i].ori_welfare)?'c-gap-bottom':'') +'">';
    html +=         '<div class="c-span8 c-line-clamp1 c-color-gray">'+ res[i].district +'｜'+ _highlight(res[i].company) +'</div>';
    html +=         '<div class="c-span4 c-line-clamp1 c-color-gray wa-zhaopin-exact-date">'+ ((res[i].ori_welfare.length>0)?'':res[i].source) +'</div>';
    html +=     '</div>';
```

* {解决方案}

```
    var htmlCodes = [
            '<a class="c-blocka c-gap-top c-line-bottom" href="'+ tcUrl +'" >',
            '<div class="c-row">',
            '<div class="c-span7 c-line-clamp1">'+ _highlight(res[i].title) +'</div>'
        ].join("");
```


##  wise_zhaopin_areaglb_info| 建站 | 冯斐帆|杨露CR

## case反馈

### 问题1.代码冗余

```
    {%$list = []%}
        {%$list[0] = 'http://zhaopin.baidu.com/m/xiaoyuan'%}
        {%$list[1] = 'http://zhaopin.baidu.com/wise?query='|cat:$focusKey[1]|cat:'&city='|cat:$tplData.key%}
        {%$list[2] = 'http://zhaopin.baidu.com/wise?salary=10000_99999999'|cat:'&city='|cat:$tplData.key%}
        {%$list[3] = 'http://zhaopin.baidu.com/wise?welfare='|cat:$focusKey[3]|cat:'&city='|cat:$tplData.key%}
        {%$list[4] = 'http://zhaopin.baidu.com/wise?welfare='|cat:'包吃,包住'|cat:'&city='|cat:$tplData.key%}
        {%$list[5] = 'http://zhaopin.baidu.com/wise?welfare='|cat:$focusKey[5]|cat:'&city='|cat:$tplData.key%}
        {%$list[6] = 'http://zhaopin.baidu.com/wise?welfare='|cat:'绩效奖金,年终分红,全勤奖,股票期权'|cat:'&city='|cat:$tplData.key%}
        {%$list[7] = 'http://zhaopin.baidu.com/wise?welfare='|cat:'餐补,房补,通讯补贴,交通补贴,加班补助,高温补贴,采暖补贴'|cat:'&city='|cat:$tplData.key%}
        {%$list[8] = 'http://zhaopin.baidu.com/wise?welfare='|cat:'年度旅游,年底双薪,弹性工作,医疗保险,定期体检,免费班车'|cat:'&city='|cat:$tplData.key%}
```

* {解决方案}

* 1.将重复的http://zhaopin.baidu.com这部分提取到一个公有变量。

* 2.最好还是后端将数据拼接好传过来，不要在前端处理




##  sg_lasar_football| KG | 郑铎 |杨露 CR


### 问题1、html拼接问题

```
    aiainstHtml += '<div class="wa-sg-lasar-football-sort-tabs-against"><div class="wa-sg-lasar-football-sort-tabs-against-east">'+ pairAll(eastpairAll,0) + pairAHalf(eastpairHalf,0)+ pairUnit(eastpairunit,0)+ '<div class="wa-sg-lasar-football-sort-tabs-against-east-half"></div><div class="wa-sg-lasar-football-sort-tabs-against-east-half-right"></div><div class="wa-sg-lasar-football-sort-tabs-against-east-center">'+ (nowAgainst.east_against.east_title?nowAgainst.east_against.east_title:"西部") +'</div></div>'+ pairLogo(nowAgainst) + '<div class="wa-sg-lasar-football-sort-tabs-against-west">' +pairUnit(westpairunit,1) + pairAHalf(westpairHalf,1) + pairAll(westpairAll,1) +'<div class="wa-sg-lasar-football-sort-tabs-against-west-half"></div><div class="wa-sg-lasar-football-sort-tabs-against-west-half-right"></div><div class="wa-sg-lasar-football-sort-tabs-against-west-center">'+ (nowAgainst.west_against.west_title?nowAgainst.west_against.west_title:"东部") +'</div></div></div>';
```

* 解决方案:

```
    // A方案，上下文自行脑补
    etplEngine.compile(__inline('./branches.etpl'));


    // B方案:
    var htmlCodes = [
    '<div class="c-line-clamp1">',
    '        <span class="c-color-gray">xxx</span>',
    '        <span class="c-foot-icon c-foot-icon-16 c-foot-icon-16-aladdin c-gap-left-small">xxx</span>',
    ' </div>'
    ].join("");

    // C方案
    var htmlCodes = '<div class="c-line-clamp1">' +
                    '        <span class="c-color-gray">{{a}}</span>' +
                    '        <span class="c-foot-icon c-foot-icon-16 c-foot-icon-16-aladdin c-gap-left-small">{{b}}</span>' +
                    ' </div>'
                    .replace("{{a}}", xxxx)
                    .replace("{{b}}", xxxx);
```

##  form3| KG |  司文宇|杨露 cr


### 问题1、不能用一个var声明多个变量

```
    var _$ = A.$, hotcitys = me.data.hotcitys.replace(/\,/, ' '), c, c1 = [], c2 = [], c_data = {}, oldval = {}, timer, now = new Date(), hideHotCity = false,  srcid = me.srcid, appStime, q = me.$, qq = me.$$, citySrcid = me.data.citySrcid, appSwitch = me.data.appSwitch, qunarapp = me.data.qunarapp, appUrl = me.data.appUrl, appHeight = me.data.appHeight, appName = me.data.appName,httpsUrl = me.data.httpsUrl;
```

* 解决方案:
每个var只能声明一个变量

```
    var _$ = A.$;
    var hotcitys = me.data.hotcitys.replace(/\,/, ' ');
    var c;
    var c1 = [];
```

## zhaopin_rank | 建站 | 刘玲玲 | 董仁广CR

```
    <script>
        A.setup({
            tpl: {%json_encode($tplData)%}

        });
    </script>
    <script data-merge>
        A.init(function(){
            var _this = this;
            var $container = $(this.container);
            var tpl = _this.data.tpl;
            console.log(tpl);

            require(['fusion/b-tabs/b-tabs']);
        })     
    </script>
```

### 问题1、定义了`_this`变量却没有始终使用

```
    var $container = $(this.container);
```

### 问题2、上线前应检查一遍，把`console.log`去掉

```
    console.log(tpl);
```

### 问题3、方法的调用后面应要加分号

```
    A.init(function(){
        ...
    })
```

### 问题4、`function`关键字后面的`{`前应要加一个空格

```
    A.init(function(){
```

### 问题5、没有用到的变量无需声明

```
    var $container = $(this.container);
    ...
```

* 解决方案(汇总):

```
<script data-merge>
    A.init(function() {
        require(['fusion/b-tabs/b-tabs']);
    });
</script>
```


## sg_wet_air | KG | 肖学林 | 董仁广CR

```
     console.log('data',{%json_encode($tplData)%});
    if(value<0){
        tagLeft = 0;
    }else if(value<=200){
        tagLeft = parseInt(($tagLength*value)/50+(value-1)/50*2);
    }else if(value>200 && value<=300){
        tagLeft = parseInt(($tagLength*(value-200))/100+($tagLength+2)*4);
    }else if (value>300 && value<=500){
        tagLeft = parseInt(($tagLength*(value-300))/200+($tagLength+2)*5);
    }else{
        tagLeft = ($tagLength+2)*6-2;
    }
    $tag.css("left",tagLeft-5);
```

### 问题1、缺乏日志

### 问题2、`console.log`要删除

### 问题3、代码风格
* 比较运算符前后要加空格
* `else`关键字要么另起一行，要么前面加一个空格
* `function`后面的`{`的前要加一个空格
* 数学运算符左右要加空格
* `,`逗号后面加空格
* 匿名函数中，`function`关键字后面的`()`前面不建议加空格
* ......
* 解决方案：养成良好的编程习惯；建议了解`ESLint`之类的代码规范审查工具


##  takeoutfood| KG |  李阳阳 |郭勇 cr


### 问题1、block title 不用重写

```
    {%block name="title"%}
    {%fe_fn_c_box_adaptive_prefix url=$tplData.title_url ltj="title" class="c-blocka"%} 
        {%fe_fn_c_title%}
    {%fe_fn_c_box_adaptive_suffix url=$tplData.title_url%}
    {%/block%}
```

* 解决方案:

```
    {%block name="data_modifier"%}
        ...
        {%$tplData.url=$tplData.title_url%}
        ...
    {%/block%}

```

### 问题2、公用功能考虑提取成组件

```
    {%* 定位组件 *%}
    <div class="c-row-tile c-location-wrap wa-takeoutfood-location c-gap-top">
        <div class="c-location-header c-flexbox c-gap-top c-gap-bottom-small">
            <div class="c-location-header-l c-line-clamp1">
                <p class="c-color c-location-name c-line-clamp1">加载中...</p>
                <p class="c-location-header-tips c-line-clamp1">
                    <span>精确定位查询周边</span>
                </p>
            </div>
            <div class="c-location-header-btn">
                <div class="c-location-header-btn-reload WA_LOG_OTHER">
                    <i class="c-icon c-location-header-btn-787">&#xe787</i><i class="c-icon c-location-header-btn-788">&#xe788</i><span class="c-gap-left-small">定位</span>
                </div>
                <div class="c-location-header-btn-in WA_LOG_OTHER">
                    <i class="c-icon">&#xe786</i><span class="c-gap-left-small">输入</span>
                </div>
            </div>
        </div>
    </div>
```

* 解决方案:

```
    1、base文件定义function
    2、fusion组件

```

### 问题3、2个tcUrl定义

```
    <script>
        A.setup({
            ajaUrl : "{%$openData|getHttpsHost|escape:'javascript'%}",
            resourceid : "{%$resourceid|escape:'javascript'%}",
            key : "{%$key|escape:'javascript'%}",
            _tcUrl : "{%fe_fn_c_async_tc_url%}",
            city : "{%$tplData.city|escape:'javascript'%}",
            urls: '{%"http://img.waimai.baidu.com"|getHttpsHost|escape:"javascript"%}',
            _tcUrl: '{%fe_fn_c_async_tc_url|escape:"javascript"%}'
        });
    </script>
```

* 解决方案:

```
    删掉第一个_tcURL定义，保留后一个

```

### 问题4、"img.waimai.baidu.com" https域名处理，只能说是个短线方案

```
    <script>
        A.setup({
            ...
            urls: '{%"http://img.waimai.baidu.com"|getHttpsHost|escape:"javascript"%}',
            ...
        });
    </script>

    <script data-merge>
        A.init(function () {
            ... 

            if (window.B && B.https && B.https.domain && 'function' === typeof B.https.domain.set) {
                B.https.domain.set('img.waimai.baidu.com', urls);
            }

            ...

            var str = [
                    ...
                    <div class="c-img c-img-s" style="background:url('+ B.https.domain.get(val.img) +') 50% 50% / cover no-repeat;">
            ...
```

* 解决方案:

```
    推动 www-wise 更新 https_script_list.tpl，让 B.https.domain.get 直接支持 img.waimai.baidu.com https转换

```

### 问题5、html拼接

```
    var str = ['<a href='+ tcUrl +' class="c-blocka c-color wa-takeoutfood-alink" data-xse="1">
        <div class="c-row c-line-bottom'+ (key == dataLen-1|| (dataLen > 2 && key ==1)?' c-gap-bottom':'') +'">
            <div class="c-span3 c-gap-bottom c-gap-top">
                <div class="c-img c-img-s" style="background:url('+ B.https.domain.get(val.img) +') 50% 50% / cover no-repeat;">
                </div>
            </div>
            <div class="c-span9 c-gap-bottom c-gap-top">
                <div class="c-line-clamp1">'+ val.shop_name +'</div>
                <div class="c-flexbox c-gap-top-small">
                    <div class="wa-takeoutfood-box">
                        <p class="c-line-clamp1 c-color-gray"><span>评分'+ val.rate +'</span><span class="c-gap-left">月售'+ val.sales +'</span></p>
                        <p class="c-line-clamp1 c-gap-top-small"><span>起送&yen;'+ val.takeout_price +'</span><span class="c-gap-left">配送&yen;'+ val.takeout_cost +'</span></p>
                    </div>
                    <div class="wa-takeoutfood-box wa-takeoutfood-widthR"><p class="wa-takeoutfood-waimai">'+ (val.delivery_party == 'self'?'<i class="c-text-box c-text-box-red">百度专送</i>':'') +'</p>
                        <p class="c-line-clamp1 c-gap-top-small"><span class="c-color-gray">'+ changeNum(val.dist) +'</span><span class="c-color-orange c-gap-left-small">'+ val.time +'分钟</span></p>
                    </div>
                </div>
            </div>
        </div>
    </a>'].join('');

```

* 解决方案:

```
    方案1，参考js规范  使用 数组 或 + 拼接字符串。
    // 按一定长度截断字符串，并使用 + 运算符进行连接。
    // 分隔字符串尽量按语义进行，如不要在一个完整的名词中间断开。
    // 特别的，对于HTML片段的拼接，通过缩进，保持和HTML相同的结构。
    var html = '' // 此处用一个空字符串，以便整个HTML片段都在新行严格对齐
        + '<article>'
        +     '<h1>Title here</h1>'
        +     '<p>This is a paragraph</p>'
        +     '<footer>Complete</footer>'
        + '</article>';

    // 也可使用数组来进行拼接，相对 + 更容易调整缩进。
    var html = [
        '<article>',
            '<h1>Title here</h1>',
            '<p>This is a paragraph</p>',
            '<footer>Complete</footer>',
        '</article>'
    ];
    html = html.join('');

    方案2，逻辑复杂，较长html拼接，直接上etpl

```

### 问题6、若干风格问题

```
    // 即用即声明，不要在函数或其它形式的代码块起始位置统一声明所有变量。
    A.init(function () {
            var me = this;
            var $ctt = $(me.container);
            var $main = $ctt.find('.wa-takeoutfood-content');
            var ajaUrl = me.data.ajaUrl;
            var resourceid = me.data.resourceid;
            var key = me.data.key;
            var urls = me.data.urls;
            var defcity = me.data.city;
            var loc;


    function getData(x,y) {
        var defer = $.Deferred();
        var data = {
            resource_id : resourceid || 4824, // 属性中的 : 之后必须有空格，: 之前不允许有空格。
            query : key,
            tn : 'wisexmlnew',
            lbs_crd : x + '_' + y,
            city : defcity
        };
    ...

    function changeDom (x,y){
        getData(x,y).then(function (data) {
            if(data.ResultNum == 1){    
        // 在 Equality Expression 中使用类型严格的 === 。仅当判断 null 或 undefined 时，允许使用 == null 。   

```

##  oversea_college | 建站 |  胡晓卉 |郭勇 cr

### GOOD CODE 总体来说，没毛病。

{优秀代码源码}

* {栅格table样式无法满足pm需求，考虑了一个通用的表格方案，想法值得赞}
* {优化空间，样式，dom 是否有更优化的写法}

```
        <style>
        {%foreach $tplData.tabContent as $tabContent%}
            {%foreach $tabContent.thWidth as $val%}
                .wa-oversea-college-tabs-wrapper-fixed :nth-child({%$tabContent@index+2|escape%}) tr :nth-child({%$val@index+1|escape%}) {
                    width: {%$val|escape%};
                }
            {%/foreach%}
        {%/foreach%}
        </style>
        ...
        {%foreach $tplData.tabContent as $tabContent%}
            <div class="c-tabs-content c-gap-bottom"{%if $tabContent@index != 0%} style="display:none;"{%/if%}>  
            {%fe_fn_c_box_adaptive_prefix url=$tabContent.tabUrl%}
            {%if $tabContent.isTable == 1%}
            <table class="c-table wa-oversea-college-table c-gap-top-large">
                <tbody>          
                    <tr>
                        {%foreach $tabContent.ths as $val%}
                        <th class="c-line-clamp1 c-color-gray">{%$val|escape%}</th>
                        {%/foreach%}
                    </tr>  
                    {%if !is_array($tabContent.trs[0])%}
                        {%$tabContent.trs = array($tabContent.trs)%}
                    {%/if%}
                    {%foreach $tabContent.trs as $trs%} 
                    <tr>             
                        {%foreach $trs.tds as $val%}   
                        <td class="c-line-clamp1 c-color">
                            {%$val|escape%}
                        </td>                
                        {%/foreach%}
                    </tr>
                    {%/foreach%}
                </tbody>
            </table>  
            {%/if%}
            {%if $tabContent.isContent == 1%}
            <div class="c-line-bottom c-gap-top">
                <div class="c-gap-bottom">
                    <div class="c-color-gray">{%$tabContent.subTitle|escape%}</div>
                    {%foreach $tabContent.content as $item%}
                    {%if $item@index % 2 == 0%}
                    <div class="c-row c-gap-top-small c-color">
                        <div class="c-span6 c-line-clamp1">
                    {%else%}
                        <div class="c-span6 c-line-clamp1">
                    {%/if%}
                            {%$item.con_key|escape%}{%$item.con_value|escape%}
                        </div>
                    {%if $item@index % 2 == 1 || $item@last%}
                    </div>
                    {%/if%}
                    {%/foreach%}
                </div>
            </div>
            {%/if%}
            {%fe_fn_c_box_adaptive_suffix url=$tabContent.tabUrl%}
            </div>
        {%/foreach%}

```

## common/share.js | 建站 | 张屾 CR

### 问题1、尽可能使用简洁的表达式

位置：line 2 char 5

```
    var isBaidubox = (navigator.userAgent.indexOf('baiduboxapp') > -1) ? true : false;
```
* 解决方案:

```
    var isBaidubox = navigator.userAgent.indexOf('baiduboxapp') > -1;
```

### 问题2、代码冗余，需要空格分割代码

位置：line 18 char 5

```
    var onSuccess = function(){
    }

    var onFail = function(){
    }
```
* 解决方案:

```
    var noop = function () {
    };
```

### 问题3、代码容错，多处重复代码

位置：line 49 char 5

```
    if(B && B.log && B.log.send) B.log.send({'ct': 40, 'cst': 4});
```
* 解决方案:

1. 抽离判断是否具有发日志的函数，每次调用函数
2. 判断全局变量`B`是否存在可以用`typeof`操作符

### 问题4、重复的选择器

位置：line 251 char 5

```
    $('.waui-share-btn').off();
    $('.waui-share-btn').each(function (i) {
```

## hotels|KG|睿娇|胡晓卉CR

### 1、函数的使用&精简代码
```
……
    {%$title = $tplData.title|escape%}
{%/block%}
{%block  name="title"%}
    <a class="wa-hotels-title c-title c-blocka WA_LOG_SF">
        {%fe_fn_c_text_inline text=$title%}
    </a>
{%/block%}
```
text中的变量可以不做escape处理，fe_fn_c_text_inline在c_base中已经处理了。$title只在这一处使用到了，代码可简化为：

```
{%block  name="title"%}
    <a class="wa-hotels-title c-title c-blocka WA_LOG_SF">
        {%fe_fn_c_text_inline text=$tplData.title%}
    </a>
{%/block%}
```

### 2、代码规范问题

```
.wa-hotels-picmini {
            position: absolute;
            right: .07rem;
            bottom: .08rem;
            color: #FFFFFF;
            font-size: 20px;
            background: rgba(51, 51, 51, .4);
        }
```
[强制] 颜色值可以缩写时，必须使用缩写形式。[规范链接](http://agroup.baidu.com/fe-styleguide/md/article/62452#45-%E9%A2%9C%E8%89%B2)

### 3、函数的使用
```
A.setup({
            opendata:'{%"https://hotel.baidu.com/"|getHttpsHost|escape:"javascript"%}',
……
        });
```
常量可以直接在js中使用，https不需要使用函数getHttpsHost处理

### 4、精简代码&代码规范
```
allFull = (j == len ) ? true : false ;

```
[强制] 在 Equality Expression 中使用类型严格的 ===。仅当判断 null 或 undefined 时，允许使用 == null。

解释：

使用 === 可以避免等于判断中隐式的类型转换。

[规范链接](http://agroup.baidu.com/fe-styleguide/md/article/62439#32-%E6%9D%A1%E4%BB%B6)

代码可修改为：

```
allFull = j === len;
```

### 5、优点

代码结构清晰，注意了之前cr中提到的一些问题。

