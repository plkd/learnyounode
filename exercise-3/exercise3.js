var fs = require('fs')

var buf = fs.readFileSync(process.argv[2]).toString()
var result = buf.split('\n').length

console.log(result-1);