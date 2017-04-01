# array-forEach

数组的`forEach`方法，如：

```js
[].forEach(function(val, index, arr){
    // val为当前循环的数据
    // index为当前循环的索引，下标为0
    // arr被循环的数组，就是[]
});
```

据说`forEach`没有`for`循环性能好，但`forEach`写法比较简洁，不用过多的定义变量

## 兼容性

兼容`ie9+`，[link](http://caniuse.com/#search=forEach)
