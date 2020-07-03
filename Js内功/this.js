/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-05-12 15:22:10
 */
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}

var foo = checkscope();
foo();
console.log('foo()', foo());


var group = {
    num: 10
}
function func(obj) {
    obj.num += 10;
    console.log('obj:', obj);
}
func(group); // { num: 20 }