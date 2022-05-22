# Sass详解

## 一、简介

CSS预处理器的一种，以 `.scss` 文件名结尾

提供了许多便利的写法，大大节省了设计者的时间，使得CSS的开发，变得简单和可维护。



## 二、Sass配置

**webpack基本配置：**

```js
npm i sass -sass-loader -D
```

```js
module:{
    rules:[
        {
            test:/\.scss$/,
            use:['styles-loader','css-loader','sass-loader']
        }
    ]
}
```



**Sass的自动转换：**

+ 全局安装sass

```js
npm install -g sass
```

+ 将sass文件转换为css文件

```js
sass --watch test.scss output.css
```

> 执行上面的语句会[监听](https://so.csdn.net/so/search?q=监听&spm=1001.2101.3001.7020)scss文件的变化，一旦文件发生变化并保存后将立即输出到css文件上。

+ 监听目录的变化

```js
sass --watch app/sass:public/stylesheets
```

> sass将会监听app/sass目录下所有文件的变动，并编译css到public/stylesheets目录。其中以冒号进行分割，前面是sass目录，后面是css目录。



## 三、基本用法

### 1、变量

以`$`开头

```scss
$blue:#1875e7;
div{
    color:$blue;
}
```

如果变量需要镶嵌在字符串之中，就必须需要写在`#{}`之中。

```scss
$side : left;
.rounded {
　　border-#{$side}-radius: 5px;
}
```



### 2、计算功能

SASS允许在代码中使用算式

```scss
body {
　　margin: (14px/2);
　　top: 50px + 100px;
　　right: $var * 10%;
}
```



### 3、嵌套

```SCSS
p {
　　border: {
　　　　color: red;
　　}
}
a {
　　&:hover { color: #ffb3ff; }
}
```



### 4、注释

```scss
//
/**/
/*! 重要注释即使是压缩模式编译也会保留 */
```



## 四、代码的重用

### 1、继承

SASS允许一个选择器，继承另一个选择器

```scss
.class1 {
　　border: 1px solid #ddd;
}
.class2 {
　　@extend .class1;
　　font-size:120%;
}
```



### 2、Mixin

Mixin有点像C语言的宏（macro），是可以重用的代码块。

```scss
//使用@mixin命令，定义一个代码块。
@mixin left {
　　float: left;
　　margin-left: 10px;
}
//使用@include命令，调用这个mixin。
div {
　　@include left;
}
```

mixin的强大之处，在于可以指定参数和缺省值。

```SCSS
@mixin left($value: 10px) {
　　float: left;
　　margin-right: $value;
}
//使用的时候，根据需要加入参数：
div {
　　@include left(20px);
}
```



### 3、颜色函数

SASS提供了一些内置的颜色函数，以便生成系列颜色。

```SCSS
lighten(#cc3, 10%) // #d6d65c
darken(#cc3, 10%) // #a3a329
grayscale(#cc3) // #808080
complement(#cc3) // #33c
```



### 4、插入文件

@import命令，用来插入外部文件。

```scss
@import "path/filename.scss";
```

如果插入的是.css文件，则等同于css的import命令。

```scss
@import "foo.css";
```



## 五、高级用法

### 1、条件语句

`@if`和`@else`

```SCSS
@if lightness($color) > 30% {
　　background-color: #000;
} @else {
　　background-color: #fff;
}
```



### 2、循环语句

```scss
//for循环
@for $i from 1 to 10 {
　　.border-#{$i} {
　　　　border: #{$i}px solid blue;
　　}
}
//while循环
$i: 6;
@while $i > 0 {
　　.item-#{$i} { width: 2em * $i; }
　　$i: $i - 2;
}
//each类似for
@each $member in a, b, c, d {
　　.#{$member} {
　　　　background-image: url("/image/#{$member}.jpg");
　　}
}
```



### 3、自定义函数

SASS允许用户编写自己的函数。

```scss
@function double($n) {
　　@return $n * 2;
}
#sidebar {
　　width: double(5px);
}
```

