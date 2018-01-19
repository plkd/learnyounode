var fs = require('fs')
var path = process.argv[2]
var name = process.argv[3]

fs.readdir(path, (err, list) => {
    if (err) throw err;
    for (v of list) {
        if (v.indexOf('.'+name) != -1) {
            console.log(v);
        }
    }
})