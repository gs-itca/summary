/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-05-12 15:22:10
 */

// var i = function() {
//     console.log('余光')
// }();

// true && function() {
//     console.log('余光')
// }();

// 0, function() { console.log('余光') }();


void function() {
    console.log('余光');
}();

new function() {
    console.log('余光');
}();

var currentTime = (function () {
    var time = new Date();
    var year  = time.getFullYear()
    var month = time.getMonth()+1;
    var date  = time.getDate();
    var hour  = time.getHours();
    var min   = time.getMinutes();
    return year + '-' + month + '-' + date + ' ' + hour + ':' + min;
})()
console.log('currentTime:', currentTime);