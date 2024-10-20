const http = require('http');

const server = http.createServer(function(req , res){
    res.end("hallo world")
})
server.listen(3000);