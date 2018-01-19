var http = require('http')
var fs = require('fs')
var port = process.argv[2]
var dir = process.argv[3]


var server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'})
    return fs.createReadStream(dir).pipe(res)
})
server.listen(port)