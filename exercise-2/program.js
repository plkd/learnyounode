// var fs = require('fs')

// var buf = fs.readFileSync('./a.txt')
// var str = buf.toString();
// console.log('HELLO WORLD');
var str = [].concat(process.argv).splice(2);
// var result = 0;
// for (value of str) {
//     // console.log(Number(value));
//     result += Number(str);

// }
console.log(str.map(Number).reduce((m, n) => { return m + n }))
