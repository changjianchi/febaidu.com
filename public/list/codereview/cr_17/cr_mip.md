# 【MIP&&日志方向】

> 2016-12-15

> 王培、文宇、睿娇、传梼、齐健、浪波、泉友

## wa-hotel-gb/wa-hotels | KG方向 | xueruijiao

## CSS 反馈

### CSS 细节规范

##### [强制] 选择器 与 `{` 之间必须包含空格

##### [建议] 选择器命名尽量简洁明了

```css
/* good */
.wa-hotel-gd-f17 {}

/* bad */
.wa-hotel-gd-icons {}
```

##### [强制] 当数值为 0 - 1 之间的小数时，省略整数部分的 0

- 示例

```css
/* good */
.wa-hotel-gd-picmini {
    right: .07rem;
    bottom: .08rem;
}

/* bad */
.wa-hotel-gd-picmini {
    right: 0.07rem;
    bottom: 0.08rem;
}
```

[强制] 颜色值可以缩写时，必须使用缩写形式。

```css
/* good */
.success {
    background-color: #aca;
}
/* bad */
.success {
    background-color: #aaccaa;
}
```

[建议] 颜色值中的英文字符采用小写。如不用小写也需要保证同一项目内保持大小写一致。

- 示例

```css
/* good */
.wa-hotels-picmini {
    color: #fff;
}

/* bad */
.wa-hotels-picmini {
    color: #FFFFFF;
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
.wa-hotel-gd-map {
    background-size: cover;
    background-repeat: no-repeat;
    margin: 4px  0; 
    background-image: url({%trim($tplData.map|getHttpsHost)%});
}
```

##### 消除点击高亮

```css
/* good */
.wa-hotels-itemlist {
    -webkit-tap-highlight-color: transprent;
}

/* bad */
.wa-hotels-itemlist {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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

##### 注意代码逻辑，尽量减少无用代码

- 示例

```html

/* 建议*/
<div class="wa-hotel-gd-imgList WA_LOG_SF"> position:relative
    {%fe_fn_c_img_delay imgsrc=$tplData.bImg cuttype="f160_160"%}
    <i class="c-icon c-img-text wa-hotel-gd-picmini">&#xe752</i>
</div>

/* 不建议 */
<div class="wa-hotel-gd-imgList WA_LOG_SF">
    {%fe_fn_c_img_delay imgsrc=$tplData.bImg cuttype="f160_160"%}
    <div class="wa-hotel-gd-picmini-f">
        <i class="c-icon c-img-text wa-hotel-gd-picmini">&#xe752</i>
    </div>
</div>
```

### 值得表扬

- 代码格式
