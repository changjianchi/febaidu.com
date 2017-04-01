# 祁鹏远

> 2016年10月24日~2016年10月28日

## 模板栅格化升级

### 模板

* <span>模板：jinzhi，10月26日已上线</span>
* <span>模板：kefu3和answer4合并成areacode一个模板，10月27日已上线，数据还未上线，等数据上线后，删除老模版。</span>
* <span>模板：wise_table05合并成game_gift开发中,预计11月2号迁移完成</span>


### 效果图
<p>模板名:jinzhi query=0.68875的二进制</p>
<p><img src="../2016-10-28/img/v_qipengyuan/2.png" width="320"></p>

<p>模板名:game_gift query=全民斗战神礼包</p>
<p><img src="../2016-10-28/img/v_qipengyuan/23.png" width="320"></p>

<p>模板名:areacode query=南京区号</p>
<p><img src="../2016-10-28/img/v_qipengyuan/1.png" width="320"></p>

## 院校分数线迭代需求

### 背景

<p>经UBS反馈院校分数线卡片4180召回率相对于神马竞品待优化。目前线上卡片为基础mini卡片，仅对地区默认文理及批次进行匹配。为追齐竞品体验，需求迭代详情如下:</p>

* <span>1.	各筛选框默认值：</span>

    * <span>优先基于query进行匹配，例如 厦门大学山西文科分数线；</span>
    * <span>其次基于地理位置，及该地区默认匹配 文理+批次 召回卡片</span>
    * <span>如地理位置获取失败，则按照院校所在地默认进行匹配</span>
    * <span>当匹配地域无数据时，召回卡片，提示暂无招生数据
对应文理科和批次，统一按照该校其他生源地招生文理科及批次进行展现（如某文科类二本院校在河北不招生，河北用户搜索时召回卡片，筛选框内容为：河北 文科 二批）</span>

* <span>2.	提升用户地域筛选预期：</span>

    * <span>切换筛选生源地(tab1)时：文理科及批次均调整至对应默认值</span>
    * <span>各生源地及文理科均可进行筛选，如无数据，提示用户暂无招生数据</span>
    * <span>筛选框调整，不影响标题文案，但标题及右下角url跳转值随之调整：</span>
    
         * <span>针对不同筛选组合，提供不同跳转链接</span>
         * <span>对应筛选项无数据时，title及右下角url取默认值</span>
         
### 排期

* <span>开发3天，11月4日~11月8日</span>
* <span>联调2天，11月9日~11月10日</span>
* <span>11月11号提测，11月15号上线</span>


### 效果图


<p><img src="../2016-11-04/img/v_qipengyuan/fsx.png" width="320"></p>












