### git多账号配置

- **生成公钥私钥**
    - ssh-keygen -t rsa -C "changjianchi@qq.com" -f ~/.ssh/cjc
    - 生成两个文件`cjc(私钥)`和`cjc.pub(公钥)`

- **添加到高速缓存**
    - 添加私钥到ssh-agent的高速缓存中
        - ssh-add cjc
    - 查看缓存列表
        - ssh-add -l

- **添加公钥**
    - 在git平台添加公钥
