// Numbers 基本数字和小数
typeof 37 === 'number'; // true
typeof 3.14 === 'number'; // true

// 基本数学API和属性
typeof Math.LN2 === 'number'; // true
typeof Infinity === 'number'; // true
typeof -Infinity === 'number'; // true
typeof NaN === 'number'; // true NaN是特殊的数字类型，

// 被强转称数字的其他数据类型
typeof Number('1') === 'number';      // Number tries to parse things into numbers
typeof Number('shoe') === 'number';   // including values that cannot be type coerced to a number
