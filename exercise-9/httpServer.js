var http = require('http')

var urls = [].concat(process.argv.splice(2)),
    result = [],
    count = 0;

function send(url, i) {
    http.get(url, response => {
        var str = '';
        response.setEncoding('utf8');
        response.on('data', data => {
            str += data;
        })
        response.on('end', () => {
            result[i] = str;
            count++;
            if(count === 3){
                printResult();
            }
        })
    })
}

for (let i = 0; i < urls.length; i++) {
    send(urls[i], i)
}
function printResult(){
    for(v of result){
        console.log(v)
    }
}