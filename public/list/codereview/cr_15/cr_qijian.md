# 【mip方向cr】


> 2016-11-17

> qijian,langbo,wangpei

## mip | layout、fixedelement模块 | mip authors

## case反馈

### 代码中使用白名单

代码中维护了两份组件的白名单，组件增加删除都需要维护这份代码，慎用白名单...


```
/**
 * Natural dimensions.
 * @inner
 * @const
 * @type {Object}
 */
var NATURAL_DIMENSIONS = {
    'mip-pix': {width: '1px', height: '1px'},
    'mip-stats': {width: '1px', height: '1px'},
    'mip-audio': null,
    'mip-share': {width: '60px', height: '44px'}        
};

/**
 * Loading elements.
 * @inner
 * @const
 * @type {Object}
 */
var LOADING_ELEMENTS = {
    'mip-anim': true,
    'mip-brightcove': true,
    'mip-embed': true,
    'mip-iframe': true,
    'mip-img': true,
    'mip-list': true,
    'mip-video': true
};
```

* 可通过参数等机制，让使用的组件在组件的代码中接入。

### 实现思路复杂

代码的if逻辑很复杂，但是最终目的比较简单：如果是 123、123px、123.4、123.4px这几种格式的参数，返回数字+'px'。
其它参数返回undefined。

```
/**
 * Parses the CSS length value. If no units specified, the assumed value is
 * "px". Returns undefined in case of parsing error.
 * @param {string|undefined} s
 * @return {!LengthDef|undefined}
 */
Layout.prototype.parseLength = function(s) {
  // PS:这里判断是否是数字，从调用的逻辑看，数字的可能性不高
  if (typeof s == 'number') {
    return s + 'px';
  }
  // PS:s值是空值
  if (!s) {
    return undefined;
  }
  // PS：如果不是 123、123px的格式，返回undefined
  if (!/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(s)) {
    return undefined;
  }
  // PS：如果是 123 格式，返回 123 + 'px'
  if (/^\d+(\.\d+)?$/.test(s)) {
    return s + 'px';
  }
  // PS: 最后只剩 123px 格式了，直接返回。这块很绕  ...
  return s;
}

```

* 修改实现逻辑，一般来说实现可以直奔目标，除非考虑性能问题才使用上面的排除逻辑

```
Layout.prototype.parseLength = function(s) {
    // 这块是否保留主要看 s 是空值的概率大不大。源码可能是考虑了性能问题，所以加了这个。
    if (!s) {
        return undefined;
    }
    // 如果是 123、123px，进入if逻辑，当然正则也可以存成 CONST 参数，这里不用每次都创建新的正则对象
    if (/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.exec(s)) {
        // 根据正则匹配到的参数判断是否需要加单位 ..
        return RegExp.$2 ? s : s + 'px';
    }
}

```

### switch 代码冗余

如果逻辑相同，switch的分支可以合并。这段代码可能是后补的，导致直接复制粘贴了。

```
/**
 * Set styles of a fixed element with type.
 * @param {MIPElement} fixedEle
 * @param {string} type Layout type of the fixedEle.
 */
FixedElement.prototype.setFixedElementRule = function (fixedEle, type) {
    switch (type) {
        case "top":
            fixedEle.style.maxHeight = '88px';
            break;
        case "bottom":
            fixedEle.style.maxHeight = '88px';
            break;
        case "right":
            this.setStyle(fixedEle);
            fixedEle.style.maxHeight = '25%';
            fixedEle.style.maxWidth = '10%';
            break;
        case "left":
            this.setStyle(fixedEle);
            fixedEle.style.maxHeight = '25%';
            fixedEle.style.maxWidth = '10%';
            break;
        default:
            fixedEle.style.display = 'none';
    }
};
```

* 去掉冗余代码

```
FixedElement.prototype.setFixedElementRule = function (fixedEle, type) {
    switch (type) {
        case "top":
        case "bottom":
            fixedEle.style.maxHeight = '88px';
            break;
        case "right":
        case "left":
            this.setStyle(fixedEle);
            fixedEle.style.maxHeight = '25%';
            fixedEle.style.maxWidth = '10%';
            break;
        default:
            fixedEle.style.display = 'none';
    }

};
```


### 多余的 if 判断

代码中用了多余的 if 判断

```
/**
 * Set styles of a fixed element.
 * @param {MIPElement} fixedEle
 */
FixedElement.prototype.setStyle = function (fixedEle) {
    var bottom = layout.parseLength(fixedEle.getAttribute('bottom'));
    if (bottom) {
        fixedEle.style.bottom = bottom;
        return;
    }
    var top = layout.parseLength(fixedEle.getAttribute('top'));
    if (top) {
        fixedEle.style.top = top;
        return;
    }
    if (!top && !bottom) {
        fixedEle.parentElement.removeChild(fixedEle);
        // It will not be counted if the elements's type is non-standard.
        this._fixedTypes.other -= 1;
    }
};
```

这段逻辑中的 if (!top && !bottom) 是多余的，上面两个 if 分支相当于 top || bottom，
如果代码继承执行，肯定是 !top && !bottom

* 去掉多余if

```
/**
 * Set styles of a fixed element.
 * @param {MIPElement} fixedEle
 */
FixedElement.prototype.setStyle = function (fixedEle) {
    var bottom = layout.parseLength(fixedEle.getAttribute('bottom'));
    if (bottom) {
        fixedEle.style.bottom = bottom;
        return;
    }
    var top = layout.parseLength(fixedEle.getAttribute('top'));
    if (top) {
        fixedEle.style.top = top;
        return;
    }
    fixedEle.parentElement.removeChild(fixedEle);
    // It will not be counted if the elements's type is non-standard.
    this._fixedTypes.other -= 1;
};
```

## 总结

1、复制代码时需要考虑代码整理流程是不是顺畅，有没有冗余。如果不仔细可能会导致代码体积臃肿，逻辑混乱。  
2、代码中尽量不使用白名单，任何白名单的逻辑都有维护成本。之前遇到过类似的问题，以前老wise的fis配置文件，有很多模板白名单，后期跟模板对不上了，很难维护。  
3、代码逻辑尽量按照实际功能的逻辑实现。
