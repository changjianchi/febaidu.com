# JSON.stringify

将JSON对象转换为JSON字符串（对象转为字符串）

```js
JSON.stringify(value[,replacer][,space]);
```

`value` 必选，通常为对象或数组

`replacer` 可选，它又分为2种方式，一种是数组，第二种是方法
##### 情况一：replacer为数组时，通过后面的实验可以知道，它是和第一个参数value有关系的。一般来说，系列化后的结果是通过键值对来进行表示的。 所以，如果此时第二个参数的值在第一个存在，那么就以第二个参数的值做key，第一个参数的值为value进行表示，如果不存在，就忽略。

```js
var arr = ["chang","jian","chi"];
var str = JSON.stringify(arr,fun);

function fun(key,value){
    return value.toString().toUpperCase();
}
console.log(str);   // "chang,jian,chi"
```

##### 情况二：replacer为方法时，那很简单，就是说把系列化后的每一个对象（记住是每一个）传进方法里面进行处理。

```js
var arr = ["chang","jian","chi"];
var arr2 = [1,2];
var str = JSON.stringify(arr,arr2);

console.log(str);   // ["chang","jian","chi"]    第二个参数被忽略了，只是第一个参数被系列化了

```

`space` 可选，就是用什么来做分隔符的。
##### 如果省略的话，那么显示出来的值就没有分隔符，直接输出来 。

```js
var arr = {};
    arr.name = 'chang';
    arr.sex = 'famle';
    arr.address = 'changping';
var arr2 = {"name":"chang","sex":"girl"};
var str = JSON.stringify(arr,arr2);
console.log(str);
```
输入的结果是 `{"name":"chang","sex":"famle","address":"changping"}`

##### 如果是一个数字的话，那么它就定义缩进几个字符，当然如果大于10 ，则默认为10，因为最大值为10。

```js
var arr = {};
    arr.name = 'chang';
    arr.sex = 'famle';
    arr.address = 'changping';
var arr2 = {"name":"chang","sex":"girl"};
var str = JSON.stringify(arr,arr2,4);
console.log(str);
```
输出的结果是：
```js
{
    "name":"chang",
    "sex":"famle",
    "adress":"changping"
}
```

##### 如果是一些转义字符，比如“\n”，表示回车，那么它每行一个回车。

```js
var arr = {};
    arr.name = 'chang';
    arr.sex = 'famle';
    arr.address = 'changping';
var arr2 = {"name":"chang","sex":"girl"};
var str = JSON.stringify(arr,arr2,'\n');
console.log(str);
```
输出的结果是：
```js
{
"name":"chang",
"sex":"famle",
"adress":"changping"
}
```

##### 如果仅仅是字符串，就在每行输出值的时候把这些字符串附加上去。当然，最大长度也是10个字符。

```js
var arr = {};
    arr.name = 'chang';
    arr.sex = 'famle';
    arr.address = 'changping';
var arr2 = {"name":"chang","sex":"girl"};
var str = JSON.stringify(arr,arr2,'ok');
console.log(str);
```
输出的结果是：
```js
{
ok"name":"chang",
ok"sex":"famle",
ok"adress":"changping"
}
```
## 兼容性

兼容 `ie8+`，[link](http://caniuse.com/#search=stringify)
