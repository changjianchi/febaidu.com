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
 * [config 配置文件]
 * @obj {Object}
 */
var config = require('./config.json');

var dir = path.resolve(config.path);
var app = express();

// 处理模板引擎
template.config('base', '');
template.config('extname', '.html');
app.engine('.html', template.__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/view');

app.use(express.static(config.static));
// 委托其他静态目录
app.use('/', express.static(config.path));

// 查找目录数据
app.use(function (req, res, next) {
    req.dirData = setDir(dir);
    next();
});

// 渲染模板
app.get('/', function (req, res, next) {
    res.render('./index', {
        config: config,
        dirData: JSON.stringify(req.dirData, null, 4)
    });
});

// 渲染模板
app.get('/post', function (req, res, next) {
    res.render('./post', {
        config: config,
        dirData: JSON.stringify(req.dirData, null, 4)
    });
});

app.get('/api/get', function (req, res, next) {
    console.log(req.query.name);
    var name = req.query.name;
    name = dir + name;
    console.log(name);
    var htmlMd = marked(fs.readFileSync(name, 'utf-8'));
    res.json({
        data: htmlMd
    });
});

app.all('/update', function (req, res, next) {
    require('child_process').exec('git pull', {
        cwd: __dirname
    }, function (err) {
        if (err) {
            res.send('update cache err: ' + err.toString());
        }
        else {
            res.send('update cache.');
        }
    });
});

app.use(function (req, res, next) {
    res.end('404');
});

var server = app.listen(config.port);

var setDir = function (dir) {
    var arr = [];

    fs.readdirSync(dir).forEach(function (file) {
        var filepath = path.resolve(dir, file);
        var stat = fs.statSync(filepath);
        var falg = true;

        config.ignoredir.forEach(function (val, index) {
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
                    link: filepath.split('list')[1],
                    filepath: filepath,
                    type: 'file'
                });
            }
        }
    });

    return arr;
}
