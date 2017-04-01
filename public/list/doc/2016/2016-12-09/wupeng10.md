# 吴鹏

> 2016-12-05 - 2016-12-09

## Animation

### 背景与目标
- 背景：目前动画库功能不能满足相应需求，需进行扩充；
- 预期目标
  - 功能
    - 提高动画性能，css3 transition实现；
    - 支持动画播放/暂停；
  - 兼容
    - 不支持transition，通过setTimeout实现；
  - 写法
    - 支持链式写法；
    - 支持非链式写法；
  - 执行顺序
    - 支持串行动画；
    - 支持并行动画；
    - 支持串行&并行结合动画（JQuery&Zepto不支持）；
    - 支持多dom动画（通过类选择器，默认为并行）；
  - 类型
    - 支持普通动画；
    - 支持transform动画；
    - 不支持keyframe动画；
  - 回调
    - 支持串行回调；
    - 支持并行回调；
    - 支持并行动画全部执行完成的回调；

### 完成情况
- 已完成开发；
- 已提测（预计12.13测试完成）；

### 效果截图
- [SF内嵌页面](http://cp01-ocean-834.epc.baidu.com:8003/sf?word=%E6%98%86%E5%B1%B1%E9%A1%BA%E4%B8%B0%E5%BF%AB%E9%80%92%E7%94%B5%E8%AF%9D&mod=0&tn=normal&pd=mms_mip&actname=act_sf_mip&title=&top=%7B%22sfhs%22%3A4%7D&ext=%7B%22url%22%3A%22http%253A%252F%252Fcp01-ocean-834.epc.baidu.com%253A8081%252Fanimation_param.html%22%2C%22lid%22%3A%221040712941700408433%22%7D&lid=1040712941700408433&ms=1&frsrcid=4137&frorder=1)；
- [普通页面](http://cp01-ocean-834.epc.baidu.com:8081/animation_param.html)