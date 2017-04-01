# 【kg方向cr】  


> 2016-11-17

> lilin, quanyou, wenyu, ruijiao

## zhaopin_firmglb_all | 建站-招聘 | lingling

## case反馈

### html拼接

在开发中，多行html拼接比较繁琐，而且容易出问题.

```
// 代码片段
html += '<a class="c-blocka wa-zhaopin-firmglb-all-allInfo c-line-bottom" href="'+ tcUrl +'" >';
html +=     '<div class="c-row">';
html +=         '<div class="c-span7 c-color-link c-line-clamp1 wa-zhaopin-firmglb-all-name">'+ _highlight(res[i].title) +'</div>';
html +=         '<div class="c-span5 c-line-clamp1 wa-zhaopin-firmglb-all-xinshui">'+ ((res[i].salary && res[i].salary != "面议")?strSalary:'薪资面议' )+'</div>';
html +=     '</div>';

```

* 常见的几种解决方案

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

### json_encode的一些细节

无源代码，在看A.setup后组内小伙伴自行脑补的一个细节...

在smarty中看写的最多的以防变量为空导致的js报错的一种方法就是给加引号，就算为空最后得到的页是空字符串，这样后在js内还得JSON.parse后才能使用这个对象。

```
// 这里要把一个对象json_encode后传入js
A.setup({
    temp: "{%json_encode($tplData.temp)%}"
});

A.init(function(){
    var temp = this.data.temp;
    // 各种姿势的容错后取值
    if (temp) {
        something = JSON.parse(temp)
    }
});
```

* {解决方案}

```
// 外层不使用引号，用default来做容错，这样后面的js中可以直接取值使用这个json对象
A.setup({
    temp: {%json_encode($tplData.temp|default:"")%}
});

A.init(function(){
    // 不要parse，就是这么任性
    var temp = this.data.temp;
});
```

### 多参数的拼链接的方法

无源代码，后来想到拼接sf之类的跳转链接比较麻烦，想着如何搞一个能方便拼接url的方法，使用形式类似于：

```
// 调用方式
buildUrl('/sf?pd=poi', {query: 'abc', ext: [json]})

// 返回"/sf?pd=poi&query=abc&ext={a:c}"当然是转码后的结果了    
```

后经查找，暂时没发现smarty支持不定参数，只能曲线救国了。

* {解决方案}

```
// js方案
var newUrl = makeUrl([{"openapi":1,"dspName":"iphone","title":'南山南滑雪场','from_sf':'1',"pd":"jingdian_detail","resource_id":"4239","word":'南山南滑雪场'}],'http://cp01-ala-fe-col-2.epc.baidu.com:8003/sf?');
    function makeUrl(arguments,pre){
        if(arguments){
            i = 0;
            url = '';
            if(typeof(arguments) == 'object')
            {
                for(var p in arguments[0]){
                    if(i == 0){
                        url += p + '=' + arguments[0][p];
                        i++;
                    }else{
                        url += '&'+ p + '=' + arguments[0][p];
                    }
                }
            }else{
                console.error('makeUrl方法中，拼链接参数不是对象');
            }

            if(pre){
                return pre + url;
            }else{
                return url;
            }
        }else{
            console.error('makeUrl方法中，缺少拼链接参数');
        }
    }

// smarty方案
// 纠结中，暂未想到方便的方法，如果是参数传对象里，function内循环之类的方法，感觉还不如直接拼接来的方便。

```
## 总结

- 本次CR的重点不是css栅格规范或者代码缩进之类的问题，而是一些大家一直在用比较容易忽视的小细节。
- json_encode问题请CR值周同学看代码的时候注意下，之前有过线上case。
- 细节要从娃娃抓起。
