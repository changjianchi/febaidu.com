# Date.now

返回当前日期和时间的Date对象与 `1970/01/01 00:00:00` 之间的毫秒值（北京时间的时区为东8区，起点时间实际为： `1970/01/01 08:00:00`）

## 返回值

{int}：当前时间与起始时间之间的毫秒数，即时间戳。

```js
console.log(Date.now());
```

## 兼容性

兼容 `ie9+`，[link](http://caniuse.com/#search=Date.now())
