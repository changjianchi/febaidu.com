var express = require('express');
var fs = require('fs');
var marked = require('marked');
var template = require('art-template');
var path = require('path');

/**
 * [map 配置文件]
 * @obj {Object}
 */
var map = {
    "port": "8888",
    "path": "public/list",
    "title": "小常demo",
    "ignoredir": ["img", "imgs", "image", "images", "css", "style", "script", "js", "javascript", ".svn", ".git", ".DS_Store"],
    "index": "/list/README.md"
};
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
        dirData: JSON.stringify(req.dirData, null, 4)
    });
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
            if (file === val) {
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
                arr.push({
                    title: file,
                    link: filepath,
                    type: 'file'
                });
            }
        }
    });

    return arr;
}
