# mac下上传下载

> iterm2这里就不说了，直接说在服务器上的配置方法

### 先安装lrzsz - 以centos为例
    yum install lrzsz -y
    安装完后确认是否安装成功  ls -alh /usr/local/bin/sz

### 下载iterm2-zmodem到/usr/local/bin/
- wget https://raw.github.com/mmastrac/iterm2-zmodem/master/iterm2-send-zmodem.sh
- wget https://raw.github.com/mmastrac/iterm2-zmodem/master/iterm2-recv-zmodem.sh
- chmod 777 /usr/local/bin/iterm2-send-zmodem.sh
- chmod 777 /usr/local/bin/iterm2-recv-zmodem.sh
