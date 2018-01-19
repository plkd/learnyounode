var fs = require('fs')

fs.readFile(process.argv[2], (err, buffer) => {
    if (err) throw err;
    var line = buffer.toString().split('\n').length - 1;
    console.log(line);
})