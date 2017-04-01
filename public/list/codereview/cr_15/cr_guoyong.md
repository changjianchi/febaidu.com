# 【激发&建站方向cr】

> {cr分享时间 2016-11-18}

> {cr参与人员记录}

> {cr参与人员记录}

## city_stay | KG | liuquanyou

## case 反馈
   
### 无用的变量名

### 
```
<div class="wa-city-stay-mapcard c-gap-bottom {%$class_name|escape%}">

```

* 删除

### AE临时字符编码转换
   
```
    {%* 字符编码转换 *%}
    {%if $alaData.encoding == 'gbk'%}
        {%$tplData = Utils_common::arr2utf8($tplData)%}
    {%/if%}

```

* 服务端已做处理，模板不再需要此逻辑

、、、

### 固定文案

```
    {%*foot字段处理,文案尽量别写死，PM急着上*%}
	{%$tplData.showLeftText = '携程'%}
	{%$tplData.showRightUrl = $tplData.url%}

```

* 临时写死文案，后续需要改为数据传递


## 总结

临时方案后续需要跟进。