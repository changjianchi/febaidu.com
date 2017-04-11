var http = require('http');

http.createServer(function (req, res) {
    if (req.url === '/update') {
        require('child_process').exec('git pull', function (a, b) {
                console.log(arguments);
                 console.log(a, b, new Date().getTime());
        });

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('update cache.');
    }
}).listen(8004);
