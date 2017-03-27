var http = require('http');
var fs = require('fs');
var util = require('util');
var path = '/Users/xiaochang/work/wwwroot/febaidu.com/list';
var fileArray = [];
var test = "1";

fs.watch(path, {
    persistent: true, // 设为false时，不会阻塞进程。
    recursive: false
}, function(event, filename) {
        if (filename) {
            test = filename + '2';
		console.log(test);
        }
});



http.createServer(function (req, res) {
    var htmlArr = function (path) {
        fs.readdir(path, function(err, files){
            //err 为错误 , files 文件名列表包含文件夹与文件
            if(err){
                console.log('error:\n' + err);
                return;
            }

            files.forEach(function(file){
                fs.stat(path + '/' + file, function(err, stat){
                    if (err) {
                        console.log(err);
                        return;
                    }
                    if(stat.isDirectory()){
                        // 如果是文件夹遍历
                        htmlArr(path + '/' + file);
                    }else{
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        // 读出所有的文件
                        //console.log('文件名:' + path + '/' + file);
                        //console.log(file);
                        if(file == 'index.html'){
                        	fileArray.push('文件名:' + path + '/' + file);
				console.log(fileArray.toString(), '常健驰');
			}
                    }
                });
            });
        });
	res.end();
    }
    htmlArr(path);
}).listen(8088);

console.log('Server running at http://115.28.207.231:8088/');
