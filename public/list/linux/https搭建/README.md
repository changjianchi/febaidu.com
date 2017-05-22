# SSL 泛域名证书

### a. 生成 SSL KEY 及 CSR

在 unix 系统终端下输入以下命令即可生成：
生成证书私钥：

``` js
openssl genrsa -out any.key 2048
```

生成证书 CSR：

``` js
openssl req -new -key any.key -out any.csr
```

生成 CSR 时会要求填入以下信息：

``` js
Country Name (2 letter code) [AU]: // 输入国家代码，中国填 CN 美国填 US

State or Province Name (full name) [Some-State]: // 输入省份

Locality Name (eg, city) []: // 输入城市

Organization Name (eg, company) [Internet Widgits Pty Ltd]: // 输入组织机构（例如公司名）

Organizational Unit Name (eg, section) []: // 输入机构部门（例如公司某部门）

Common Name (e.g. server FQDN or YOUR name) []: // 输入域名（例如 「yjk.im」，如果要签发泛域名证书，这里填写 「*.yjk.im」）

Email Address []: // 你的邮箱

---

A challenge password []: // 证书密码，不设置密码请直接回车，建议直接回车

An optional company name []: // 额外的公司名称，可直接回车 
```
![](../img/csr.png)

然后当前目录会生成以下两个文件：

* any.key

* any.csr

### b. 签发证书

打开 [https://assl.loovit.net](https://assl.loovit.net) 粘贴 any.csr 内容至 Paste your CSR below: 栏，Email Address:栏填入你的邮箱，点下一步。

![](../img/assl.png)

然后点击确定

![](../img/ok.png)

然后稍等几分钟，选择验证邮箱地址：

![](../img/email.png)

然后前往域名邮箱收取邮件，点击邮件中链接，点击 I Approve，没有域名邮箱需要先注册一个

![](../img/chenggong.png)

![](../img/chenggong2.png)

你的邮箱会收到一封标题类似「CEDX1606110000: Your SSL Certificate for *.your.domain has been issued 」的邮件，邮件最下方为您的证书，将它和以下内容合并，并保存为 any.crt 文件：

``` js
-----BEGIN CERTIFICATE-----
邮件最下方内容
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIETTCCAzWgAwIBAgILBAAAAAABRE7wNjEwDQYJKoZIhvcNAQELBQAwVzELMAkG  
A1UEBhMCQkUxGTAXBgNVBAoTEEdsb2JhbFNpZ24gbnYtc2ExEDAOBgNVBAsTB1Jv  
b3QgQ0ExGzAZBgNVBAMTEkdsb2JhbFNpZ24gUm9vdCBDQTAeFw0xNDAyMjAxMDAw  
MDBaFw0yNDAyMjAxMDAwMDBaMEwxCzAJBgNVBAYTAkJFMRkwFwYDVQQKExBHbG9i  
YWxTaWduIG52LXNhMSIwIAYDVQQDExlBbHBoYVNTTCBDQSAtIFNIQTI1NiAtIEcy  
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2gHs5OxzYPt+j2q3xhfj  
kmQy1KwA2aIPue3ua4qGypJn2XTXXUcCPI9A1p5tFM3D2ik5pw8FCmiiZhoexLKL  
dljlq10dj0CzOYvvHoN9ItDjqQAu7FPPYhmFRChMwCfLew7sEGQAEKQFzKByvkFs  
MVtI5LHsuSPrVU3QfWJKpbSlpFmFxSWRpv6mCZ8GEG2PgQxkQF5zAJrgLmWYVBAA  
cJjI4e00X9icxw3A1iNZRfz+VXqG7pRgIvGu0eZVRvaZxRsIdF+ssGSEj4k4HKGn  
kCFPAm694GFn1PhChw8K98kEbSqpL+9Cpd/do1PbmB6B+Zpye1reTz5/olig4het  
ZwIDAQABo4IBIzCCAR8wDgYDVR0PAQH/BAQDAgEGMBIGA1UdEwEB/wQIMAYBAf8C  
AQAwHQYDVR0OBBYEFPXN1TwIUPlqTzq3l9pWg+Zp0mj3MEUGA1UdIAQ+MDwwOgYE  
VR0gADAyMDAGCCsGAQUFBwIBFiRodHRwczovL3d3dy5hbHBoYXNzbC5jb20vcmVw  
b3NpdG9yeS8wMwYDVR0fBCwwKjAooCagJIYiaHR0cDovL2NybC5nbG9iYWxzaWdu  
Lm5ldC9yb290LmNybDA9BggrBgEFBQcBAQQxMC8wLQYIKwYBBQUHMAGGIWh0dHA6  
Ly9vY3NwLmdsb2JhbHNpZ24uY29tL3Jvb3RyMTAfBgNVHSMEGDAWgBRge2YaRQ2X  
yolQL30EzTSo//z9SzANBgkqhkiG9w0BAQsFAAOCAQEAYEBoFkfnFo3bXKFWKsv0  
XJuwHqJL9csCP/gLofKnQtS3TOvjZoDzJUN4LhsXVgdSGMvRqOzm+3M+pGKMgLTS  
xRJzo9P6Aji+Yz2EuJnB8br3n8NA0VgYU8Fi3a8YQn80TsVD1XGwMADH45CuP1eG  
l87qDBKOInDjZqdUfy4oy9RU0LMeYmcI+Sfhy+NmuCQbiWqJRGXy2UzSWByMTsCV  
odTvZy84IOgu/5ZR8LrYPZJwR2UcnnNytGAMXOLRc3bgr07i5TelRS+KIz6HxzDm  
MTh89N1SyvNTBCVXVmaU6Avu5gMUTu79bZRknl7OedSyps9AsUSoPocZXun4IRZZ  
Uw==  
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIDdTCCAl2gAwIBAgILBAAAAAABFUtaw5QwDQYJKoZIhvcNAQEFBQAwVzELMAkG  
A1UEBhMCQkUxGTAXBgNVBAoTEEdsb2JhbFNpZ24gbnYtc2ExEDAOBgNVBAsTB1Jv  
b3QgQ0ExGzAZBgNVBAMTEkdsb2JhbFNpZ24gUm9vdCBDQTAeFw05ODA5MDExMjAw  
MDBaFw0yODAxMjgxMjAwMDBaMFcxCzAJBgNVBAYTAkJFMRkwFwYDVQQKExBHbG9i  
YWxTaWduIG52LXNhMRAwDgYDVQQLEwdSb290IENBMRswGQYDVQQDExJHbG9iYWxT  
aWduIFJvb3QgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDaDuaZ  
jc6j40+Kfvvxi4Mla+pIH/EqsLmVEQS98GPR4mdmzxzdzxtIK+6NiY6arymAZavp  
xy0Sy6scTHAHoT0KMM0VjU/43dSMUBUc71DuxC73/OlS8pF94G3VNTCOXkNz8kHp  
1Wrjsok6Vjk4bwY8iGlbKk3Fp1S4bInMm/k8yuX9ifUSPJJ4ltbcdG6TRGHRjcdG  
snUOhugZitVtbNV4FpWi6cgKOOvyJBNPc1STE4U6G7weNLWLBYy5d4ux2x8gkasJ  
U26Qzns3dLlwR5EiUWMWea6xrkEmCMgZK9FGqkjWZCrXgzT/LCrBbBlDSgeF59N8  
9iFo7+ryUp9/k5DPAgMBAAGjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8E  
BTADAQH/MB0GA1UdDgQWBBRge2YaRQ2XyolQL30EzTSo//z9SzANBgkqhkiG9w0B  
AQUFAAOCAQEA1nPnfE920I2/7LqivjTFKDK1fPxsnCwrvQmeU79rXqoRSLblCKOz  
yj1hTdNGCbM+w6DjY1Ub8rrvrTnhQ7k4o+YviiY776BQVvnGCv04zcQLcFGUl5gE  
38NflNUVyRRBnMRddWQVDf9VMOyGj/8N7yy5Y0b2qvzfvGn9LhJIZJrglfCm7ymP  
AbEVtQwdpf5pLGkkeB6zpxxxYu7KyJesF12KwvhHhm4qxFYxldBniYUr+WymXUad  
DKqC5JlR3XC321Y9YeRq4VzW9v493kHMB65jUr9TU/Qr6cf9tveCX4XSQRjbgbME  
HMUfpIBvFSDJ3gyICh3WZlXi/EjJKSZp4A==  
-----END CERTIFICATE-----
```

这样您的域名 SSL 证书就已经签发好了。

有效的证书内容为：

* any.key // SSL 私钥

* any.crt // SSL 证书

any.crt，any.key文件可以放到服务器的固定位置

    例如：/home/work/ssl/域名命名的文件夹/any.crt

配置nginx.conf文件

* 前提是ngxin安装了`http_ssl_module`模块

``` js
server {
        listen 443 ssl;
        server_name work.febaidu.com;
        ssl on;
        ssl_certificate   /home/work/ssl/febaidu/primary.crt;
        ssl_certificate_key   /home/work/ssl/febaidu/any.key;
        gzip on;
        location / {
                proxy_set_header   X-Real-IP $remote_addr;
                proxy_set_header   Host      $http_host;
                proxy_pass         http://127.0.0.1:9999;
                client_max_body_size 35m;
        }
}

server {
        listen 80;
        server_name work.febaidu.com;
        gzip on;
        rewrite ^(.*)$  https://$host$1 permanent;
        location / {
                proxy_set_header   X-Real-IP $remote_addr;
                proxy_set_header   Host      $http_host;
                proxy_pass         http://127.0.0.1:9999;
                client_max_body_size 35m;
        }
}
```

配置完后重启ngxin就可以了~
