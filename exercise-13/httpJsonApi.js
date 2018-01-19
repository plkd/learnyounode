var http = require('http')
var url = require('url')

http.createServer((req, res) => {
    if (req.method === 'GET') {
        var parsed = url.parse(req.url, true),
            date = new Date(parsed.query.iso),
            result = ''

        if (/api\/parsetime/.test(req.url)) {
            result = {
                'hour': date.getHours(),
                'minute': date.getMinutes(),
                'second': date.getSeconds()
            }
        }else if(/api\/unixtime/.test(req.url)){
            result = {
                'unixtime': date.getTime()
            }
        }
        res.writeHead(200, { 'content-type': 'application/json'})
        return res.end(JSON.stringify(result))
    }else{
        res.writeHead(404)
        res.end()
    }
}).listen(process.argv[2])