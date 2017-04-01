# 【kg方向cr】  

> 2017-01-11

> lixao12,wulili,shanli,lilin,shuxiaoqin,xiaoxuelin,zhengduo,zhulei

## person_boil|娱乐|lili

### 1、多余的代码
```
        .sfc-personboil-totop {
            float:right;
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border-radius: 15px;
            background: rgba(0,0,0,.5);
        }


        setTimeout(function () {
              location.href = loginUrl;
          }, 50);
```

### 2.动画清空方案不保险
```
                setTimeout(function () {
                    $popwrap.remove();
                }, 3000);
```
* 解决方案:
  使用两个数组去维护，一个保存已完成的动画，一个保存还未完成的动画。清空应该只针对于已经完成的动画。
### 3.绑定的事件，ajax，settimeout退场时要销毁
* 解决方案: 

```
        view.on('stop', function () {
            if ($zan) {
                $zan.remove();
            }
            if ($end) {
                $end.remove();
            }
        });
```
### 4.不要在window上这样绑定事件 
```
        window.onscroll = fixedF;
```
* 解决方案: 

```
        $(window).on('scroll',function(){});

```

### 5.组件使用方法错误
```
        dialog.fusionReady = function () {};
        function confirmF() {        	
            dialog.fusion.open();
            $(dialog).on('operate', function (e, i) {
                self.sendLog({
                    'type': 'operate',
                    'action': 'button' + i
                }, this);
```
* 解决方案: 

```
        dialog.fusionReady = function () {
            dialog.fusion.open();
            $(dialog).on('operate', function (e, i) {
                self.sendLog({
                    'type': 'operate',
                    'action': 'button' + i
                }, this);

}

```

## zhp_firm_name | 建站 | v_liulingling

### css书写不规范

源代码：

       .wa-zhp-firm-name-yAxis-item, .wa-zhp-firm-name-xAxis-item{ text-align:center; display:inline-block;}
       
解决方案：[强制] [RULE011] 属性定义必须另起一行,
        [强制] [RULE008] 当一个 rule 包含多个 selector 时，每个选择器声明必须独占一行。

      .wa-zhp-firm-name-yAxis-item,
      .wa-zhp-firm-name-xAxis-item { 
          text-align:center; 
          display:inline-block;
      }
       

### 代码中写死数据过多

源代码：

        <span class="c-color-gray">面试难度：</span>{%$tplData.show_card.feel|escape%}&nbsp;
        <p class="c-line-clamp1">面试感受：{%$item.desc|escape%}</p>
        <p class="c-line-clamp1 c-color-gray c-gap-bottom">面试职位：{%$item.job_name|escape%}</p>
        
解决方案：[建议] 后端给出
        
### resource_id写死

源代码：

    url: $opendataUrl +'&query='+ encodeURIComponent($rmQuery) +'&resource_id=8257&need_di=1'

解决方案：[建议] 获取之后传递


### js代码可读性不友好

```
 if($salarypage == 1){
    var $svgBox = $container.find(".wa-zhp-firm-name-wrapper-fixed");
    var $svg = $container.find(".wa-zhp-firm-name-svg");
    var $yPos = $container.find(".wa-zhp-firm-name-yAxis-item");
    var $xAxis = $container.find(".wa-zhp-firm-name-svgxAxis"); 
    .......
 if(keys == 'connectpage'){
    $renmai.html('<div class="c-loading c-gap-top-large"><i class="c-icon">&#xe780</i><p>加载中…</p></div>');
    $.ajax({
          url: $opendataUrl +'&query='+ encodeURIComponent($rmQuery) +'&resource_id=8257&need_di=1',
          dataType:'jsonp',
     .......
```
解决方案：[建议] 先定义 然后调用
      
      function aa () {

      }
      aa ();