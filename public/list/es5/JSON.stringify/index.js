// 情况一
var arr = ["chang","jian","chi"];
var str = JSON.stringify(arr);

console.log(str);

// 情况二
var arr = ["chang","jian","chi"];
var str = JSON.stringify(arr,fun);

function fun(key,value){
    return value.toString().toUpperCase();
}
console.log(str);

// 情况三
var arr = ["chang","jian","chi"];
var arr2 = [1,2];
var str = JSON.stringify(arr,arr2);

console.log(str);

// 情况四
var arr = {};
    arr.name = 'chang';
    arr.sex = 'famle';
    arr.address = 'changping';
var arr2 = {"name":"chang","sex":"girl"};
var str = JSON.stringify(arr,arr2,4);

console.log(str);

// 情况五
var arr = {};
    arr.name = 'chang';
    arr.sex = 'famle';
    arr.address = 'changping';
var arr2 = {"name":"chang","sex":"girl"};
var str = JSON.stringify(arr,arr2,'\n');

console.log(str);

// 情况六
var arr = {};
    arr.name = 'chang';
    arr.sex = 'famle';
    arr.address = 'changping';
var arr2 = {"name":"chang","sex":"girl"};
var str = JSON.stringify(arr,arr2,'ok');

console.log(str);
