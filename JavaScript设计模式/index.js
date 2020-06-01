/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-05-21 13:53:01
 */

// var MyClass = function () {
//     this.name = 1;
//     return 1
// }
// var myClass = new MyClass() // { name: 2}
// console.log('myClass.name:', myClass.name);

// var obj1 = {
//     name: 1,
//     getName: function (aaa = '') {
//         return this.name + aaa;
//     }
// };

// var obj2 = {
//     name: 2,
// }

// console.log(obj1.getName())
// console.log(obj1.getName.call(obj2, 2))
// console.log(obj1.getName.apply(obj2, [2]))

// var obj = {
//     name: '1',
//     getName: function (params) {
//         console.log(this.name)
//     }
// };
// obj.getName();
// var getName2 = obj.getName;
// getName2();

// 当我们缩减Dom方法时
// var getDomById = function (id) {
//     return document.getElementById(id);
// };
// getDomById('div1') //dom节点

// // 那么我们看看这么写行不行？

// var getDomById = document.getElementById
// getDomById('div1') // 非法调用 this指向window

// // 修正上述写法
// // 陷入死循环
// document.getElementById = function (id) {
//     var that = document.getElementById
//     return that.call(document, id)
// }

// var getId = document.getElementById
// document.getElementById = (function (func) {

//     return function(){
//         return func.call(document, ...arguments)
//     }
// })(document.getElementById)

// document.getElementById = (...arguments) => getId.call(document, ...arguments)
// getId('J_MainBanner')

var obj = {
    name: 1,
    getName: function (params) {
        console.log(this.name)
    }
}
var getNew = obj.getName
getNew.call(obj)
// getNew()
