var http = rewuire('http');
    fs = require('fs')
var serring = require('./setting')
var server = http.createServer();
var msg;
server.on('request',function(req.res){
    fs.readFile(__dirname + '/public.html/hello/html', 'utf-8', function(err, data) 
        if (err){
            res.writeHead(404, {'Content-Type':'text/plain'}) ;
            res.write('not found!') ;
            return.res.end();
        }
        res.writeHead(200, {'Content-Type':'text/html'}) ;
        res.write(data) ;
        res.end();
    )
    switch (req.url) {
        case '/about';
            msg = "about this page" ;
            break;
        case '/profile' ;
            msg = "abou me" ;
            break;
        default:    
            msg = 'wrong page' ;
            break;   
    }
    res.writeHead(200, {'Content-Type':'text/plain'}) ;
    res.write('hello ') ;
    res.end();
});
server.listen(setting.port, setting.host);
console.log("server listening...");
