var data = [1,2,3,4];
var arr = data.map(function(item,index,array){
    return item;
});
console.log(arr);   // [1, 2, 3, 4]

var users = [
    {"name":"张含韵","email":"zhang@email.com"},
    {"name":"江一燕","email":"jiang@email.com"},
    {"name":"李小璐","email":"li@email.com"}
];
var emails = users.map(function(user){
    return user.email;
});
console.log(emails);    // ["zhang@email.com", "jiang@email.com", "li@email.com"]
