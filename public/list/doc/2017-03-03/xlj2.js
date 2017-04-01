/*
 * created by baidu on 17/3/3.
 */

var arr1 = ['a', 'b', 'c'];
var arr2 = ['b', 'd', 'e'];

var hasOwnProperty = Object.prototype.hasOwnProperty;

function unique(arr) {
    var returnArray = arr;
    var seen = {}, cursorInsert = 0, cursorRead = 0;

    while (cursorRead < arr.length) {
        var current = arr[cursorRead++];
        var key = (typeof current).charAt(0) + current;

        if (!hasOwnProperty.call(seen, key)) {
            seen[key] = true;
            returnArray[cursorInsert++] = current;
        }
    }
    returnArray.length = cursorInsert;
}

function difference(arr1, arr2) {
    unique(arr1);
    unique(arr2);
    var obj = {};
    arr1.forEach(item => {
        obj[item] = 1;
    });

    arr2.forEach(item => {
        if (obj[item]) {
            delete obj[item];
        } else {
            obj[item] = 1;
        }
    });

    return Object.keys(obj);
}


console.log(difference(arr1, arr2));
