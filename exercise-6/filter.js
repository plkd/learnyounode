var fs = require('fs')
var path = require('path')

module.exports = function (dir, name, callback) {
    var match = file => {
        return path.extname(file) === '.' + name;
    }
    
    fs.readdir(dir, (err, list) => {
        if (err) return callback(err)
       
        callback(null, list.filter(match))
    })
}

