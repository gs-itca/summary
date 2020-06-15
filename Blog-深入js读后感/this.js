/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-05-12 15:22:10
 */

function aaa() {
  console.log('1:函数aaa内部' );
  bbb();
  console.log('2:函数aaa内部');
}

function bbb() {
  console.log('3:函数bbb内部');
}

aaa();
console.log('4:全局');
