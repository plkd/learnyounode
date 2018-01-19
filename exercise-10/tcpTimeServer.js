var net = require('net')
var port = process.argv[2]

var server = net.createServer(socket => {
    socket.end(addTime())
})
server.listen(port)

function addTime() {
    var date = new Date();
    var firstLine = date.getFullYear() + '-' + 
    zeroFill(date.getMonth()+1) + '-' + 
    zeroFill(date.getDate()) + ' ' + 
    zeroFill(date.getHours()) + ':' + 
    zeroFill(date.getMinutes()) + '\n'
    return firstLine;
}

function zeroFill(i){
    return i<10?'0'+i:i
}