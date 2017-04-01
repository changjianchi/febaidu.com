# 【kg方向cr】  


> 2016-11-30

> lixiao12、shanli、lilin、shuxiaoqin、xiaoxuelin、zhengduo、zhulei

## case反馈

## poi_nobiz_sin | POI | siwenyu


### 重复dom查找

```
// 代码片段
 if($container.find('.wa-poi-nobiz-sin-call').attr('href') 
 && $container.find('.wa-poi-nobiz-sin-call').attr('href').split(';').length > 1)
```

* 解决方案

```
 多处使用的dom做变量缓存，不要重复查找dom
```

### 多处url地址拼接

```
// 代码片段
{%$imageJumpUrl = 
'http://m.baidu.com/sf?pd=poi_act&actname=act_poi_photos&title=图片列表&word='|cat:$tplData.uid|cat:'&ext='|cat:$sfExt
%}
{%$dishesJumpUrl = 
'http://m.baidu.com/sf?pd=poi_act&actname=act_poi_dishes&title=推荐菜&word='|cat:$tplData.uid|cat:'&ext='|cat:$sfExt
%}
```

* 解决方案

```
 url的拼接放到数据中
```


### 生成多余dom

```
// 代码片段
{%if $showlines > 1%}<div class="c-gap-top-large"></div>{%/if%}
    <div class="wa-poi-nobiz-sin-item”>
</div>
```

* 解决方案

```
 <div class="wa-poi-nobiz-sin-item {%if $showlines > 1%}c-gap-top-large{%/if%}”>

```

### 函数调用返回值

```
    //代码片段
    updateGeoMap(self.data.geoInfo);

    /* 根据位置信息更新地图图片 */
    function updateGeoMap (geo) {
        return $.ajax({
            url: B.https.domain.get('http://aladdin.wapmap.baidu.com/snap'),
            dataType: 'jsonp',
            jsonp: 'callback',
            data: {
                width: 600,
                height: 300,
                geo: geo,
                icon_size: 'h',
                max_level: 15
            },
            success: function (data) {
                var imgsrc = data.pic_url || '';
                if (imgsrc) {
                    var bgImage = B.https.domain.get(imgsrc.replace("&amp;", "&"));
                    $container.find('.wa-poi-nobiz-sin-map').css({
                        'background-image':'url('+bgImage+')',
                        'background-size': 'cover'
                    });
                }
            },
            error: function () {
                /* error时什么都不做,于PM确认过 */
            }
        });
    }
```


* 解决方案

```
 函数只调用了一次，也并没有用到函数返回值，可以去掉函数内的return
```

## wise_comm_news | 资讯 | lingjuan


### ajax异步请求

```
    //代码片段
    function getdata(index, tag, tagval,ctype) {
        if (wiseCommNewsAjax) {
            wiseCommNewsAjax.abort();
        }
        wiseCommNewsAjax = $.ajax({
            url: '//headline.baidu.com/feed',
            data: $.extend({
                tag: tagval,
                ctype: ctype
            }, datas),
            dataType: 'jsonp',
            jsonp: 'cb',
            success: function(d) {
                var data = d.data.datalist;
                if (data.length >=2) {
                    renderDataList(index, data);
                } else {
                    reqBackupData(index, tag, tagval);
                }
            }
        });
    }
```

* 使用异步请求的检查点

```
1、使用promise，【此处未使用】
2、加error状态判断，【此处没有状态判断】
3、设置超时时间timeout参数，【此处未加】
4、防止频繁发送异步请求，发送请求时先判断是否有尚未完成的请求若有则销毁
5、请求成功后，变量结构较长时加入try/catch，【次数变量结构虽不是很长，但也有风险】
```

### smarty变量判断的细节

```
// 目前常用如下方式判断变量 代码片段
{%if $tplData.synAddressData%}
    XXXX
{%/if%}
```

* 结合场景，建议多使用isset和empty

|            | isset | !empty | 直接判断 |
| ---------- | ----- | ------ |--------- |
| 空字符串   | true  |  false | false    |
| 字符串0    | true  |  false | false    |
| 空数组     | true  |  false | false    |

* 注意：可选字段要设置为非空，比如字符串，控制最小长度为1，一方面可以防止空的无意义的变量传递减少数据冗余，
另一方面ae处理空字符串的时候容易处理为空数组
                  

### 模板内存在文案

```
//代码片段
<div class="c-gap-top wa-wise-comm-more c-color-gray-a WA_LOG_BTN" {%if !$tem@first%}style="display: none;"{%/if%}>
    展开更多资讯<i class="c-icon c-gap-left-small">&#xe73c</i>
</div>
```

* 解决方案

```
1. 普通kv模板所有字段需rd提供，交互后有变化的动态链接，rd至少也要提供链接前缀
2. 一些与数据实体无关的固定文案，比如mini模板筛选数据表头、筛选标签中的全部、不限等，目前大多数是前端写死模板，
如遇pm想变更文案还得fe修改模板发布上线非常trick,cr同学商讨解决方案为期望产出一套pm可以自动配送的工具@忧总关注
```

### 模板引入etpl引起空格问题

```
//代码片段
<p>
    <span class="c-gap-right">${val.layout}</span>
    <span class="c-gap-right">${val.area}</span>
    
    <% for: ${val.orientation} as ${valOri}, ${indexOri} %>
    <span class="c-gap-right">${valOri}</span>  
    <% /for %>    
</p>
```

* 解决方案

```
js引入etpl的时候可用这种方法去除空格
替换 换行 为空为了解决inline-block间隙问题 

//代码片段
var compile = B.etpl.compile(__inline('./inc_imgs.etpl').replace(/[\n\r]\s*/g, ''));
```


## 总结

```
跟rd配合上的延伸
1. 跟rd对接如遇不合理的需前端处理的数据细节可以明确fe同学的职责：实现ue稿样式交互，原则上不做数据处理
2. wd同学抓取数据、rd按照fe的需求产出数据，fe同学不直接跟wd同学对接
3. 定义schema的时候考虑两个层面，1）数据的内容 2）数据的结构，结构设计考虑下代码逻辑
4. 临时数据的存放，未登录用户的临时数据目前存在cookie或者localstorage中@全体成员关注，是否有更好的方法

```



