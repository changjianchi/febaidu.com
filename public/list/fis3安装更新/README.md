# fis3安装更新

安装fis3首先要安装 node 和 npm，如果不确定自己是否已经安装，可以检测下：

    ~ node -v
```js
npm ERR! Darwin 15.5.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "install" "-g" "fis3"
npm ERR! node v4.2.2
npm ERR! npm  v2.14.7
npm ERR! path /usr/local/lib/node_modules/fis3/.editorconfig
npm ERR! code EACCES
npm ERR! errno -13
npm ERR! syscall unlink

npm ERR! Error: EACCES: permission denied, unlink '/usr/local/lib/node_modules/fis3/.editorconfig'
npm ERR!     at Error (native)
npm ERR!  { [Error: EACCES: permission denied, unlink '/usr/local/lib/node_modules/fis3/.editorconfig']
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'unlink',
npm ERR!   path: '/usr/local/lib/node_modules/fis3/.editorconfig' }
npm ERR!
npm ERR! Please try running this command again as root/Administrator.
npm ERR! error rolling back Error: EACCES: permission denied, unlink '/usr/local/lib/node_modules/fis3/.editorconfig'
npm ERR! error rolling back     at Error (native)
npm ERR! error rolling back  { [Error: EACCES: permission denied, unlink '/usr/local/lib/node_modules/fis3/.editorconfig']
npm ERR! error rolling back   errno: -13,
npm ERR! error rolling back   code: 'EACCES',
npm ERR! error rolling back   syscall: 'unlink',
npm ERR! error rolling back   path: '/usr/local/lib/node_modules/fis3/.editorconfig' }

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/xiaochang/npm-debug.log
```
