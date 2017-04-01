// 情况一

var str = 'changjianchi';
console.log(Object.keys(str));  // ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]

// 情况二

var arr = ["北京","河北","河南","上海","南京"];
console.log(Object.keys(arr));  // ["0", "1", "2", "3", "4"]

// 情况三

var arr = [
    {"name":"chang"},
    {"age":"25"},
    {"sex":"男"}
]
console.log(Object.keys(arr));  // ["0", "1", "2"]

// 情况四

function Test(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.fun = function(){
        return this.name + this.age + this.sex;
    }
}
var newfun = new Test('chang','25','男');
console.log(Object.keys(newfun));   // ["name", "age", "sex", "fun"]
