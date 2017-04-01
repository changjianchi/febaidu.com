# 【MIP&&日志方向】

> 2016-12-01

> 王培，佳隆，齐健，浪波，睿娇，泉有，文宇

## sg_lookfor | KG方向 | xueruijiao

## case反馈

### CSS 细节规范

##### [强制] 选择器 与 `{` 之间必须包含空格

- 示例

```css
/* good */
.wa-sg-lookfor-colW {
    color: #fff;
}

/* bad */
.wa-sg-lookfor-colW{
    color: #fff;
}
```

##### [强制] 属性名 与之后的 : 之间不允许包含空格， : 与 属性值 之间必须包含空格。

```css
/* good */
.wa-sg-lookfor-colW {
    color: #fff;
}

/* bad */
.wa-sg-lookfor-colW {
    color:#fff;
}
```

##### [强制] 当数值为 0 - 1 之间的小数时，省略整数部分的 0

- 示例

```css
/* good */
.wa-sg-lookfor-nav {
    margin-top: .24rem;
    margin-bottom: .2rem;
}

/* bad */
.wa-sg-lookfor-nav {
    margin-top: 0.24rem;
    margin-bottom: 0.2rem;
}
```

##### [强制] font-weight 属性必须使用数值方式描述

- 示例

```css
/* good */
.wa-sg-lookfor-gold {
	font-size: .25rem;
    font-weight: 700;
}

/* bad */
.wa-sg-lookfor-gold {
	font-size: .25rem;
    font-weight: blod;
}
```

##### [个人建议] 选择器命名应该尽量简洁

- 示例

```css
/* good */
/* 另，默认字体是12px，如果不是特殊需求需要覆盖，则无需设置字体 */
.wa-sg-lookfor-f12 {
	font-size: .12rem;
}

/* bad */
.wa-sg-lookfor-fsTwe {
	font-size: .12rem;
}
```

##### [个人建议] 尽量使用色值，而不是透明度

- 示例

```css
/* good */
.wa-sg-lookfor-bgC {
    /* 我随便写的，表达意思，数值并不对应 */
	background: #f1f1f1; 
}

/* bad */
.wa-sg-lookfor-bgC {
	background: rgba(0, 0, 0, .05); 
}
```

##### 使用栅格

- 示例

```css
/* good */
/** 
 * padding-bottom 是 .08rem, .07rem, .09rem
 * margin-bottom 是 .08rem, .07rem, .09rem
 * 使用 c-gap-bottom 解决 
 */

/* bad */
.wa-sg-lookfor-how div {
    padding-bottom: .08rem;
    
}
```

### smarty 变量判断的细节

```html
// 目前常用如下方式判断变量 代码片段
{%if $tplData.data%}
    XXXX
{%/if%}
```

参考说明: [【KG方向CR】](http://ala-fe.baidu.com/codereview/cr_16/cr_liuquanyou.md)

### html 代码 

##### 注意代码缩进

##### 删除无用空行

##### 注意代码逻辑，尽量减少无用代码

- 示例

```html

/* 建议*/
{%foreach $tplData.org as $item%}
    {%fe_fn_c_box_adaptive_prefix url=trim($item.orgUrl) class="{%if $item@last && $item@iteration %2 == 1%}c-span12{%else%}c-span6{%/if%}"%}
        <span class="wa-sg-lookfor-bgLogo" style="background-image:url({%trim($item.logo|escape:none|getHttpsHost)%});"></span>
        <span class="c-gap-left-large wa-sg-lookfor-colW">{%$item.name|escape%}</span>
    {%fe_fn_c_box_adaptive_suffix url=$item.orgUrl%}
{%/foreach%}

/* 不建议 */
{%foreach $tplData.org as $item%}
    <div class="c-span6">
        {%fe_fn_c_box_adaptive_prefix url=$item.orgUrl%}
            <span class="wa-sg-lookfor-bgLogo" style="background-image:url({%trim($item.logo|escape:none|getHttpsHost)%});">
            </span>
            <span class="c-gap-left-large wa-sg-lookfor-colW">{%$item.name|escape%}</span>
        {%fe_fn_c_box_adaptive_suffix url=$item.orgUrl%}              
        {%if $item@last && $item@iteration %2 == 1%}
            <div class="c-span6"></div>            
        {%/if%}
    </div>
{%/foreach%}
```

## mip-lightbox | MIP方向 | wangpei

### 无限call

不建议

```javascript

changeParentNode.call(self);

// 事件注册
self.addEventAction('close', function (event) {
	close.call(self, event);
});
self.addEventAction('open', function (event) {
	open.call(self, event);
});
self.addEventAction('toggle', function (event) {
	toggle.call(self, event);
});
```


建议
```

var close = function(){}.bind(this);
var toggle = function(){}.bind(this);
var open = function(){}.bind(this);

// 事件注册
self.addEventAction('close', close);
self.addEventAction('open',open);
self.addEventAction('toggle', toggle);

```

或者更好的方式从框架层面统一绑定this


### 函数职责不单一

不建议
```
   function openMask() {

        var self = this;

        // 不存在遮盖层时先创建
        if (!self.maskElement) {

            const mask = document.createElement('div');
            mask.id = 'MIP-LLIGTBOX-MASK';
            mask.setAttribute('on', 'tap:' + self.id + '.close');
            mask.style.display = 'block';

            // 与mip-lightbox 同级dom
            self.element.parentNode.appendChild(mask);
            mask.addEventListener('touchmove', function (evt) {
                evt.preventDefault();
            }, false);

            self.maskElement = mask;

        }

        // 样式设置
        util.css(self.maskElement, {'display': 'block'});

    }
```


建议
```
	function open(){
		if(!this.hasMask){
			this.createMask();	
		}

		this.openMask();
	}

	function openMask(){

	}

	function closeMask(){
	
	}

	function createMask(){

	}
```

* 逻辑入口，一目了然。

* 高内聚，低耦合。

* 面向对象，模块化，模块通信。数据驱动。

