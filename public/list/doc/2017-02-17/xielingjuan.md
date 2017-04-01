# 谢玲娟

<style>
    .markdown-body img {
        border: 1px solid #888;
        box-shadow: 5px 5px 5px #888;
    }
</style>
> 从1.16-1.20

## 本周跟进

|内容 |类型|进度 | pv/天 | 
|---|---|---|---|
|激发区-激发列表情景页|新增|2.10已提测，预计2.16已上线|小流量pv100万/日|

## 【激发区-激发列表情景页】

### 背景

1，为了满足用户的潜在需求和提高信息触达的效率，采用阿拉丁在结果页展现需求激发范畴的内容；
2，阿拉丁初始插入第10位，后端根据千岛湖折叠位置计算结果，动态调整阿拉丁卡片位置；
3，阿拉丁展示5条优质内容（初始折起展示2条），通过配图和推荐理由等辅助信息激发用户的点击，通过title跳转情景页引导用户持续浏览，从而带来分发和时长的收益；

### 动态环境地址

http://cp01-sys-rath4-c32-qa270.cp01.baidu.com:8003/s?dev=1&dev_workspace=platform&dev_module=aladdin-wise&dev_tpl=insp_list&dev_path=searchaladdin&dev_tpltype=default&sid=99999_114408&dev_online=1&wd=%E5%8D%8E%E4%B8%BA&word=%E5%8D%8E%E4%B8%BA

### 实验设计

对照组：线上，10%流量

实验组1：内容激发阿拉丁（人工数据），10%流量

实验组2：内容激发阿拉丁（策略数据），10%流量

实验组3：通用激发（策略数据），10%流量

### 预期收益

1、满足用户潜在需求，用户体验感知收益提升；

2、整体点击率、有点比例、媒体时长提升；

详细数据：生效query：113个，日均PV：约332w，`小流量影响面：约100w`

### 效果图：

<img src="./img/xielingjuan/1.png" width="400"/>

<img src="./img/xielingjuan/5.png" width="400"/>

### 进度

2.16已上线模板。2.17开流量。

