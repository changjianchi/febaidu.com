Array.prototype.some = function(fun /*, thisp*/) {
    var len = this.length;
    if (typeof fun != "function") {
        throw new TypeError();
    }

    var thisp = arguments[1];
    for (var i = 0; i < len; i++) {
    if (i in this && fun.call(thisp, this[i], i, this))

        return true;
    }

    return false;
};

function isBigEnough(element) {
    return (element >= 10);
}

var arr = [1,3,5,11,15,20];

console.log(arr.some(isBigEnough)); // 如果arr有符合 isBigEnough条件 则返回true 否则返回false
