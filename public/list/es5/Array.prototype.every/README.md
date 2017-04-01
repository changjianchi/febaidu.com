# Array.prototype.every

确定数组中所有成员是否满足指定的条件

```js
array.every(callbackfn[, thisArg]);

// array 必须 一个数组对象。
// callbackfn 必须 一个接受最多三个参数的函数，`every` 方法会为 `array` 中的每个元素调用 `callbackfn` 函数，直到 `callbackfn` 返回false，或者直到到达数组的结尾。
// thisArg 可选 可在 `callbackfn` 函数中引用 `this` 关键字的对象，如果省略 `thisArg` ，则 `undefined` 将作用于 `this` 值。
```
如果 `callbackfn` 函数为所有数组元素返回 `true` ，则为 `true` ；否则为 `false` 。如果数组没有元素，则 `every` 方法将返回 `true` 。
