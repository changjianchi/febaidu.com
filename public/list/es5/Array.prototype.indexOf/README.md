# Array.prototype.indexOf

indexOf()方法返回在该数组中第一个找到的元素位置，如果它不存在则返回-1。

```js
arr.indexOf(searchElement[, fromIndex = 0]);
```

### searchElement

要查找的元素

### fromIndex

开始查找的位置，如果值大于数组的长度，则返回-1，如果是负值，则表示倒数，-3 表示从倒数第三个开始查找。

```js
if(Array.prototype.indexOf){
    console.log('该浏览器兼容indexOf方法');
}
```

## 兼容性

兼容 `ie9+` ，[link](http://caniuse.com/#search=indexOf)
