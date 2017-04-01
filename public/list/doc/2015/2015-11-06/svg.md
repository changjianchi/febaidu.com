 # SVG——基础知识

> xielingjuan 2016.8.7

### WHAT

* Scalable Vector Graphics，可缩放矢量图形

* 基于xml，可直接写入html

* 兼容大多数浏览器： [点这里查看svg兼容性](caniuse.com)

### svg与位图、canvas的区别

|SVG|位图|
|---|---|
|由数学向量组成|由像素组成|
|图像小，不易失真|图像大，易失真|

|SVG|canvas|
|---|---|
|不依赖分辨率|依赖分辨率|
|支持事件处理器|不支持事件处理|
|最适合带有大型渲染区域的应用程序（比如谷歌地图）|最适合图像密集型的游戏，其中的许多对象会被频繁重绘|

### 使用方式

1. 浏览器直接打开.svg文件

            <!-- 保存为mysvg.svg文件,可直接在浏览器中打开 -->
            <svg  xmlns="http://www.w3.org/2000/svg" width="200" height="200">
                <circle cx="100" cy="100" r="50" fill="yellow" stroke="blue" stroke-width="2"/>
            </svg>

1. img标签

            <!-- 使用img引入my.svg文件 -->
            <img src="my.svg"/>
    
1. svg标签

            <!-- 在html中写svg标签 -->
            <svg  xmlns="http://www.w3.org/2000/svg" width="200" height="200">
    	        <circle cx="100" cy="100" r="50" fill="red" stroke="blue" stroke-width="2"/>
    	    </svg>
    
1. css背景

            #mysvg {
        		background: blue url('my.svg') repeat;
        		width: 1000px;
        		height: 600px;
        	}
        	<!--通过css来设置引入svg文件 -->
        	<div id="mysvg"></div>
        	
### 基本图形和属性

* 基本图形

1. 圆-circle(cx,cy,r)

2. 矩形-rect(x,y,width,height,rx,ry)

3. 直线-line(x1,y1,x2,y2)

4. 椭圆-eclipse(cx,cy,rx,ry)

5. 折线-polyline(points="x1,y1,x2,y2,x3,y3,x4,y4")

6. 多边形-polygon(points="x1,y1,x2,y2,x3,y3,x4,y4")

* 基本属性

1. 填充-fill

2. 描边颜色-stroke

3. 描边粗细-stroke-width

4. 变形-transform

### 基本操作API

1. 创建图形

        document.creatElementNS(ns,tagName)
        // 这里使用creatElementNS而不是creatElement是因为：svg的定义是在自己的namespace下的，要在svg的namespace下创建svg，才能在html中使用。
        
2. 添加图形

        element.appendChild(childElement)
        
3. 设置/获取属性

        element.setAttribute(name,value)
        element.getAttribute(name)
        
### 相关文献

* [慕课网-SVG入门](http://www.imooc.com/learn/143)