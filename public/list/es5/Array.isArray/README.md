# Array.isArray

这是Array对象的一个静态函数，用来判断一个对象是不是数组

```js
Array.isArray(flag);

flag = [];    // true
flag = {};    // false
flag = '';    // false
```

## 兼容性

兼容 `ie9+` ，[link](http://caniuse.com/#search=isArray)
