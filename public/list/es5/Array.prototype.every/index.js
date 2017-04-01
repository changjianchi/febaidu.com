var arr = [5, 8, 3, 10];
var str = 1;

function fun(arr){
    return arr > str;
}

if(arr.every(fun)){
    console.log('arr的每一个元素都比str大'); // 结果为true走这里的逻辑
}else{
    console.log('arr元素中有比str小的存在');
}
