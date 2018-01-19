var http = require('http')
var map = require('through2-map')
var port = process.argv[2]

http.createServer((req, res) => {
    if(req.method === 'POST'){
        return req.pipe(map( v => v.toString().toUpperCase())).pipe(res)
    }
}).listen(port)
