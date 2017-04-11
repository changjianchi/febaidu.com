/**
 * [author changjianchi]
 * @type {[type]}
 */
var express = require('express');
var fs = require('fs');
var marked = require('marked');
var template = require('art-template');
var path = require('path');
/**
 * [map 配置文件]
 * @obj {Object}
 */
var map = require('./map.json');

var dir = path.resolve(map.path);
var app = express();

// 处理模板引擎
template.config('base', '');
template.config('extname', '.html');
app.engine('.html', template.__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/view');

app.use(express.static('public'));

// 查找目录数据
app.use(function (req, res, next) {
    req.dirData = setDir(dir);
    next();
});

// 渲染模板
app.get('/', function (req, res, next) {
    res.render('./index', {
        title: map.title,
        index: map.index,
        name: map.name,
        link: map.link,
        search: map.search,
        dirData: JSON.stringify(req.dirData, null, 4)
    });
});

app.get('/update', function (req, res, next) {
    require('child_process').exec('git pull');
    res.send('update cache.');
});

app.use(function (req, res, next) {
    res.end('404');
});

var server = app.listen(map.port);

var setDir = function (dir) {
    var arr = [];

    fs.readdirSync(dir).forEach(function (file) {
        var filepath = path.resolve(dir, file);
        var stat = fs.statSync(filepath);
        var falg = true;

        map.ignoredir.forEach(function (val, index) {
            if (file.indexOf(val) > -1) {
                falg = false;
            }
            return;
        });

        if (falg) {
            if (stat.isDirectory()) {
                arr.push({
                    title: file,
                    type: 'directory',
                    child: setDir(filepath)
                });
            }
            else {
                var data = fs.readFileSync(filepath, 'utf-8');
                // 把读取到的内容按行分割成数组，方便获取到第一行内容
                var lines = data.split('\n');
                var title = lines[0].replace('# ', '');

                arr.push({
                    title: title,
                    link: filepath.split('public')[1],
                    filepath: filepath,
                    type: 'file'
                });
            }
        }
    });

    return arr;
}
