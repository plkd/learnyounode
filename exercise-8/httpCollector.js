var http = require('http')
var url = process.argv[2]
var bf = ''

http.get(url, response => {
    response.setEncoding('utf8');
    response.on('data',data => {
        bf += data
    })
    response.on('end',() => {
        console.log(bf.length)
        console.log(bf);
    })
})