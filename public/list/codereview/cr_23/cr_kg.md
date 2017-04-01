# 【KG 方向CR】

> 2017-03-24

> 山莉 鹏远 金梅 郑铎

## sp_product | 自然结果 | 商品 | 杨露

## case反馈

### 单位不一致

问题代码：

```
.wa-sp-product-comment {
	position: relative;
    height: 21px;
}
.wa-sp-product-img-text {
    position: absolute;
    left: 5%;
    margin-top: -.24rem;
    width: 90%;
    height: .16rem;
    background: rgba(51, 51, 51, 0.4);
    font-size: .12rem;
    line-height: .16rem;
    color: #fff;
    text-align: center;
}
```

强制：
```
模版内单位要一直，全是px或者全是rem。
```

### 图片不符合规范

问题代码：

```
{%fe_fn_c_img_delay imgsrc=$product.img size=80 cuttype=b200_200%}
```
优化代码：

```
{%fe_fn_c_img_delay imgsrc=$product.img size=80 type=s notimg=1%}
```

### 代码逻辑复杂

问题代码：

```
{%$star = floatval($product.star)%}
{%$shang = $star/5%}
{%$width = ($fontsize ) * 5 * $shang %}
```
优化代码：
```
{%$width = ($fontsize ) * $star %}
```


## sp_product_info | 情景页 | 商品 | 杨露

## case反馈

### css代码规范问题

问题代码：

```
.sfc-sp-product-info-text {
    color: #3388ff;
}
.sfc-sp-product-info-ingredient-tags .sfc-sp-product-info-ingredient-tags-selected {
    color: #3388ff;
    background-color: #fff;
    border: 1px solid #3388ff;
}
```
优化代码：
```
.sfc-sp-product-info-text {
    color: #38f;
}
.sfc-sp-product-info-ingredient-tags .sfc-sp-product-info-ingredient-tags-selected {
    color: #38f;
    background-color: #fff;
    border: 1px solid #38f;
}
```
### 如果包含 content 属性，应放在最前面。

问题代码：

```
.sfc-sp-product-info-feature-name:after {
	display:inline-block;
	content:'';
	overflow:hidden;
	width:100%;
}
```
优化代码：
```
.sfc-sp-product-info-feature-name:after {
    content:'';
	display:inline-block;
	overflow:hidden;
	width:100%;
}
```
### 左右布局未用栅格

问题代码：

```
.sfc-sp-product-info-name {
    width: 22%;
    display: inline-block;
}
.sfc-sp-product-info-value {
    width: 78%;
    display: inline-block;
}
```
建议：
```
应用栅格化布局。
```
### 其他

问题代码：

```
.sfc-sp-product-info-line {
    border-top-width: .10rem;
}
<div class="c-row-tile c-line-top sfc-sp-product-info-line"></div>
<div class="sfc-sp-product-info-ingredient">
    ...
</div>     
```
建议：
```
在dom节点应用伪类元素实现
.sfc-sp-product-info-ingredient:before {
    content: '';
    display: block;
    border-top: .1rem solid #f1f1f1;
}
```


## sp_product_rank | 情景页 | 商品 | 杨露

## case反馈

### 无效class，未用到

问题代码：

```
<div class="sfc-sp-product-rank-container">
```

建议：

```
去掉无效类名
```

### 写死文案太多不利于复用


问题代码：

```
<span class="c-gap-left c-color-gray">{%$product.comment_num|escape%}位</span>

<span class="c-color-gray">{%$product.comment_from|escape%}评分</span>

<div>¥ {%$product.price|escape%}</div>
```

建议：

```
由后端数据传来，模板内不要有写死文案，利于复用。
```

### 图片未符合规范

问题代码：

```
{%fe_fn_c_img_delay imgsrc=$product.img size=80 cuttype=b200_200%}
```

优化代码：
```
{%fe_fn_c_img_delay imgsrc=$product.img size=80 type=s notimg=1%}
```
## 日历组件分享 | 泉友

## 建议修改点

### 关闭日历组件

代码：

```
if (sCount > 1) {
    contentArea.text(cttText[1]);
    me.sEndDate = date;
    me.selectMiddle(me.sStartDate, me.sEndDate);
    me.selected(me.sStartDate, me.sEndDate);
    setTimeout(function () {
        me.$ct.find('.b-popup-remove').trigger('click');
    }, me.options.timeout);
}
```

建议：可直接调用fusion组建

```
/**
*关闭组件
* */
close: function () {
    this.el.fusion.close();
},

```

### 在关闭b-popup函数时间前，快速依次选中日期时，会出现重复入住或退房的文案，建议清除入住和退房之间日期的文案。

#### 线上连接： [巴黎酒店](https://m.baidu.com/sf?pd=for_hotel&openapi=1&dspName=iphone&from_sf=1&resource_id=27528&word=%E5%B7%B4%E9%BB%8E%E9%85%92%E5%BA%97&title=%E5%B7%B4%E9%BB%8E&alr=1&adapt_tn=wisexmlnew&query=%E5%B7%B4%E9%BB%8E%E9%85%92%E5%BA%97&cityId=5330&ext=%7B%22sDate%22%3A%222017-4-10%22%2C%22eDate%22%3A%222017-4-11%22%7D)


## 亮点

### table布局合理，每月第一天计算并生成占位符。

代码：

```
/**
 * 生成占位字符串
 *
 * @param {number} n 生成占位字符串的个数 ag: 10
 * @return {string} tempStr 空占位字符串
 * */
function emtCeil(n) {
    var tempStr = '';
    for (var i = 0; i < n; i++) {
        tempStr += '<td class="' + oriDisCls + '"></td>';
    }
    return tempStr;
}
```
### classid加时间戳，生成唯一的b-popup组件。

代码：

```
var classId = 'poiCal' + Date.now();

/* 异步刷依赖的popup组件 */
var popupStr = '<div class="sfc-poical"><b-popup class="' + classId + '" title="'
    + title + '" fullView="true"></b-popup></div>';
var $calEle = $(popupStr);
```
## 注意点

### 日历组件依赖b-popup组件的fusionReady函数,模板中应用日历组件的时候，应先调用日历组件的ready函数。

代码：

```
poiCal = new PoiCal(ops);
poiCal.ready(function () {
    var limitDate = padDate(getDate(null, 30)).replace(/-/g, '/');
    poiCal.setDisabled && poiCal.setDisabled(limitDate);
    poiCal.$el.on('selected', function (e) {
        if (e && e.data) {
            initInfiniteScroll();
        }
    });
});
```


