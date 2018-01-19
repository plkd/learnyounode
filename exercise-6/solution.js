var myModule = require('./filter')

myModule(process.argv[2],process.argv[3],function(err, list){
    if(err) throw err;
    list.forEach(v => console.log(v))
})