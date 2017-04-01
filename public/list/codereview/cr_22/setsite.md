# 【平台&招聘方向CR】

> 2017-03-10

> 张屾 胡晓卉 冯斐帆 刘玲玲

## sg_bady_status | 医疗 | 山莉

### case反馈

模板中判断是否为数组的，大家判断的条件不一， 在此与大家讨论下

问题代码：

```
{%if $bottom && !isset($bottom[0])%}
    {%$bottom = [$bottom]%}
{%/if%}

{%if !isset($tplData.anchorDataG[0])%}
    {%$tplData.anchorDataG = [$tplData.anchorDataG]%}
{%/if%}

{%if !$tplData.result[0]%}
    {%$tplData.result = [$tplData.result]%}
{%/if%}

{%if $tplData.result && !$tplData.result[0]%}
    {%$tplData.result = [$tplData.result]%}
{%/if%}

```
代码逻辑：

```
这段代码逻辑是为了保证$bottom转为数组做的兼容，那么$bottom可能为字符串、数组、空值。
经测试发现$arr='abc'时，isset($arr)运行结果是1，所以这段代码兼容性处理存在问题

```
运行如下(版本：PHP 5.3~7)：

- <p><img src="../../casespace/img/res.png" width="400"/></p>

运行结果：

|$arr|数字、布尔型|空字符串$arr=''|非空字符串$arr='abc'|非空数组$arr=array('a', 'b')|空数组$arr=array()|对象|null|不存在|
|----|--------|----------|--------|------|----|----|----|----|
| isset($arr) |true|true|true|true|true|true|<span style="color: #f60">false</span>|<span style="color: #f60">false</div>|
| is_object($arr) |false|false|false|false|false|<span style="color: #f60">true</span>|false|--|
| is_array($arr) |false|false|false|<span style="color: #f60">true</span>|<span style="color: #f60">true</span>|false|false|--|
|is_string($arr)|false|<span style="color: #f60">true</span>|<span style="color: #f60">true</span>|false|false|false|false|--|
| isset($arr[0]) |false|false|true|true|false|--|false|--|
|empty($arr)|false|true|false|false|true|false|true|true|

建议优化代码：

```
    {%if isset($bottom) && !is_array($bottom)%}
        {%$bottom = [$bottom]%}
    {%/if%}
```

```
总结关于php区分变量类型的逻辑判断：
    上述真值表中显示，从表中第一行开始根据标颜色boolean值依次可以进行类型区分，逻辑判断一目了然。
    1、isset()      可以剔除 null 、不存在 两种情况；
    2、is_object()  可以区分对象和非对象类型（数字、布尔型、字符串、数组）；
    3、is_array()   可以区分数组和非数组类型（数字、布尔型、字符串）；
    4、is_string()  可以区分字符串和非字符串类型（数字、布尔型）；
    5、is_bool()    可以区分数字和布尔型。
    逻辑是1->2->3->4->5，大家可以根据类型灵活使用。
```
### 建议
在判断数组时，应该首先 isset 判断该字段是否存在且取值不为空，然后再判断是否为数组，若不是数组，在设置为数组

## sg_med_ins | 医疗 | 山莉

- <p><img src="../../casespace/img/wjbfw.png" width="500"/></p>
- <p><img src="../../casespace/img/wjbfw_show.png" width="500"/></p>
```
问题：

```

array_values(array) 函数返回一个包含给定数组中所有键值的数组，但不保留键名。

array_values()中所需参数必须为数组，上述标黄的部分可能存在字符串的情况，所以在传参前，需要对参数做兼容处理。

```
建议方案：
```
	{%if isset($tplData.img) && !is_array($tplData.img)%}
    	{%$tplData.img = [$tplData.img]%}
    {%/if%}
    {%if isset($tplData.list) && !is_array($tplData.list)%}
    	{%$tplData.list = [$tplData.list]%}
    {%/if%}
    {%if isset($tplData.shortDetail) && !is_array($tplData.shortDetail)%}
    	{%$tplData.shortDetail = [$tplData.shortDetail]%}
    {%/if%}
    {%if isset($tplData.longDetail) && !is_array($tplData.longDetail)%}
    	{%$tplData.longDetail = [$tplData.longDetail]%}
    {%/if%}

```

## wise_sp_xz_osite | 张晶锋

- 相关Query: [亚马逊](https://m.baidu.com/s?word=%E4%BA%9A%E9%A9%AC%E9%80%8A&wd=%E4%BA%9A%E9%A9%AC%E9%80%8A&tn=iphone)

- 问题：模板中的array_rand()使用有问题。
- <p><img src="../../casespace/img/ymx.png" width="500"/></p>

问题：
```
array_rand(array,number) 函数返回包含随机键名的数组
array_rand 存在第一个参数不存在的情况
或者array_rand()的结果 超出了listitem的长度
```

建议方案：
```
    此处省略：转数组代码

    {%if $queryListItem && isset($queryListItem[0])%}
        {%$defaultQuery = $queryListItem[rand(0, count($queryListItem) - 1)]%}
    {%else%}
        {%$defaultQuery = ''%}
    {%/if%}
```
