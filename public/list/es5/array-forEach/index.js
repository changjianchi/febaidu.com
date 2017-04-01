[1, 2, 5].forEach(function(val, index, arr){
    console.log(val, index, arr);
});


var a = [
    {
        name: 'x'
    },
    {
        name: 'b'
    },
    {
        name: 'c'
    }
];
a.forEach(function(val){
    console.log(val.name);
});