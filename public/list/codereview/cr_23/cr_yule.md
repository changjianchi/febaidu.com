# 【娱乐方向cr】
> 2017-03-24

> 李林 李晓 吴丽黎 李阳阳 郝妍 泉有 天力
## 本次cr项目- 国内酒店
* A页面： dom_hotel    入口老模板  @天力
* B页面:  hotellist   新模板  @泉有
* C页面：hotel_summary，hotel_booking ，hotel_equipment ，nearby_hotel，@天力
* [预览地址](http://cq01-ala-fe-4.epc.baidu.com:8003/s?word=%E5%8C%97%E4%BA%AC%E9%85%92%E5%BA%97&sid=112144)





## hotel_summary| 旅游 |天力
#### class命名不符合规范（重复发现）
* 源代码
```html
.sf-hotel-summary-img-number {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: .01rem .06rem;
    background: rgba(0, 0, 0, .3);
    border-radius: .02rem;
    color: #eee;
}
```

* 解决方案：情景页class命名规范为sfc-模板名-xxx 
```html
.sfc-hotel-summary-img-number {
    ...xxxx
}
```

#### popup相关问题
* 源代码
```
popup.fusionReady = function () {
    $popup.find('.b-popup-modal').css('backgroundColor', '#e8e8e8');
    $popup.find('.b-popup-head').addClass('sf-hotel-summary-b-popup-head');
    $popup.find('.b-popup-title').addClass('sf-hotel-summary-b-popup-title');
    $popup.find('.b-popup-remove').addClass('sf-hotel-summary-b-popup-remove');
    $popup.find('.b-popup-content').addClass('sf-hotel-summary-b-popup-content');
    $morePhone.find('a').on('click', function (e) {
        e.preventDefault();
        popup.fusion.open();
    });
};
```    
* 解决方案
    * 不要频繁的addClass 操作DOM，用一组CSS定义可解决
    * 建议：为组件增加custom-class属性，支持自定义样式 


#### 图片没有兼容https
* 源代码
```html
<a class="c-img c-img-s SF_LOG_BTN" data-click='{"tj":"c1"}' href="javascript:;" style="background: url({%$content.ext.detail_info.image|escape%}) 50% 50% / cover no-repeat;">
<span class="c-gray sf-hotel-summary-img-number">{%$photoNum|escape%}张</span>
</a>
```
* 解决方案：图片引入没有用base组件的getHttpsHost兼容下https
```html
<a class="c-img c-img-s SF_LOG_BTN" data-click='{"tj":"c1"}' href="javascript:;" style="background: url({%$content.ext.detail_info.image|getHttpsHost|escape%}) 50% 50% / cover no-repeat;">
<span class="c-gray sf-hotel-summary-img-number">{%$photoNum|escape%}张</span>
</a>
```
#### 图片不要escape
* 源代码
```html
<a class="c-img c-img-s SF_LOG_BTN" data-click='{"tj":"c1"}' href="javascript:;" style="background: url({%$content.ext.detail_info.image|escape%}) 50% 50% / cover no-repeat;">
<span class="c-gray sf-hotel-summary-img-number">{%$photoNum|escape%}张</span>
</a>
```
* 解决方案：图片、url地址不要escape，[科普：escape使用场景](http://sfe.baidu.com/aladdin/wise/devdocs/smarty_escape.md)
```html
<a class="c-img c-img-s SF_LOG_BTN" data-click='{"tj":"c1"}' href="javascript:;" style="background: url({%$content.ext.detail_info.image|getHttpsHost|escape:none%}) 50% 50% / cover no-repeat;">
<span class="c-gray sf-hotel-summary-img-number">{%$photoNum|escape%}张</span>
</a>
```




#### 点击跳转没有日志，SF_LOG_BTN是啥
* 源代码
```
<a class="c-img c-img-s SF_LOG_BTN" data-click='{"tj":"c1"}' href="javascript:;" style="background: url({%$content.ext.detail_info.image|escape%}) 50% 50% / cover no-repeat;">
    <span class="c-gray sf-hotel-summary-img-number">{%$photoNum|escape%}张</span>
</a>
```            

* 解决方案，异步打开superframe 页面使用WA_LOG_SF
*  科普一下：[sf2.0日志使用](http://sfe.baidu.com/log/wise/0-send-guide/sf2_log.md)


## hotel_equipment| 旅游 |天力|本周内重构

#### 用js拼接字节串然后插入dom，异步渲染性能较差，完全可用smarty同步实现渲染。
* 源代码
``` 
var serviceMap = {
    1: {
        name: 'wifi',
        iconfont: ''
    },
    2: {
        name: '带宽',
        iconfont: ''
    },
    3: {
        name: '停车位',
        iconfont: ''
    },
    4: {
        name: '餐厅',
        iconfont: ''
    },
    5: {
        name: '健身房',
        iconfont: ''
    },
    6: {
        name: '游泳池',
        iconfont: ''
    },
    7: {
        name: '会议室',
        iconfont: ''
    },
    8: {
        name: '商务中心',
        iconfont: ''
    }
};
var html = '';
serviceArr.forEach(function (item, index) {
    var data = serviceMap[item];
    html += '<span class="c-gray c-gap-right"><i class="c-gap-right-small wa-hotel-equipment-cicons">' + data.iconfont + '</i>' + data.name + '</span>';
    if (index === serviceArr.length - 1) {
        $container.find('.sf-hotel-equipment-guide-tags').html(html);
    }
});
``` 
* 解决方案
* 数据是同步给到的，模板也是纯展现无交互，可去掉全部js代码，完全可用smarty同步实现渲染。

## wisenearby_hotel | 旅游 |天力|
#### 标签语义化不好，一眼望去全是div
* 源代码
```
<div class="c-title c-color c-gap-top-small">附近同类型酒店</div>
<div class="sf-nearbyhotel-list"></div>
<div class="sf-nearbyhotel-load sf-nearbyhotel-js-loading">
    <div class="c-loading c-gap-top c-gap-bottom">
        <i class="c-icon">&#xe780</i>
        <p>加载中...</p>
    </div>
</div>
<div class="sf-nearbyhotel-load sf-nearbyhotel-js-error">
    <div class="sf-nearbyhotel-error c-color-gray c-gap-top c-gap-bottom WA_LOG_BTN">
        请刷新<i class="c-icon c-gap-left-small">&#xe61d</i>
    </div>
</div>
```

* 解决方案：标签语义化，尽量减少嵌套层级

```
<p class="c-title c-color c-gap-top-small">附近同类型酒店</p>

<div class="sf-nearbyhotel-list"></div>

<div class="c-loading c-gap-top c-gap-bottom sf-nearbyhotel-load sf-nearbyhotel-js-loading">
    <i class="c-icon">&#xe780</i>
    <p>加载中...</p>
</div>

<p class="WA_LOG_BTN sf-nearbyhotel-load sf-nearbyhotel-js-error">
    请刷新<i class="c-icon c-gap-left-small">&#xe61d</i>
</p>
```


## hotel_booking| 旅游 |天力|
#### css控制展开收起

* 源代码

```
if ($this.hasClass('sf-hotel-booking-unfold')) {
    icon.html('');
    $this.removeClass('sf-hotel-booking-unfold');
    subList.addClass('sf-hotel-booking-hide');
}else {
    icon.html('');
    $this.addClass('sf-hotel-booking-unfold');
    subList.removeClass('sf-hotel-booking-hide');
}
```

* 解决方案：父元素class控制展开收起状态，点击时父元素toogleClass

#### class命名不符合规范，wa、sf前缀混用
* 源代码
```html
.wa-hotel-booking-cicons {
    font-family: "wa-hotel-booking-cicons" !important; 
    font-style: normal; 
    -webkit-font-smoothing: antialiased;
}
.sf-hotel-booking-date-icon {
    font-size: .18rem;
}
```

* 解决方案：情景页class命名规范为sfc-模板名-xxx，结果页wa-模板名-xxx
```html
.sfc-hotel-booking-xxx {
    ...xxxx
}
```

#### 为fusion组件拼json属性，直接字符串拼接可读性不友好
* 源代码

```
images.forEach(function (val, index) {
     if (index === 0) {
         str += "[";
     }
     str += '{"src":' + '"' + val.url + '"' + '}';
     str += index < (len - 1) ? "," : '';
     if (index === len - 1) {
         str += "]";
     }
 });
```
                      
* 解决方案：生成json对象后用stringify() 方法


#### AJAX数据要做非空判断
* 源代码，之前逻辑为resolve里面还会继续判断是否有有效数据，逻辑不友好
```
if (data) {
    defer.resolve(data);
}else {
    defer.reject();
}
var roomData = data.data.room_data;
```

* 解决方案：异步请求成功后，先判断是否有有效数据，如果有调用resolve，否则调用reject，reject里面统一处理没有数据的情况。
    
            
## hotellist| 旅游 |泉有

#### style未加data-merge
* 源代码
```
<style>
    .sfc-hotellist-checkin{
        line-height: 20px;
        white-space: normal;
    }
</style>
```

* 解决方案：没有smarty的style标签加上data-merge

## good code 展示

### 标准的注释，方便后续其他同学维护
```
/**
  * 参数合并处理
  *
  * @param {Object} params 商圈数据
  * @return {Object} params 合并参数后的新对象
  * */
 function getParams (params) {
     params = params || {};
     /* 商圈 */
     params = $.extend({}, defaultParams, params);
     return params;
 }
```    





## 总结

* 本次cr还是能发现之前的老问题，以后希望避免，整理了一份cr规范list，里面的问题希望后续不要重复出现， [cr规范落地](http://wiki.baidu.com/pages/viewpage.action?pageId=316970819)