# angular-todo-app-example
这是一个demo，开发了一个简单的todo app（记录你要什么待做的事情），基于这个demo，展示了angular的语法。你可以查看commit log(对应“提纲”），拉下对应的代码学习

##这个demo的功能
- 新增、删除、展示todo事件
- todo事件保存在本地存储

##展示的ng概念
- 一个html一般对应一个controller
- 数据绑定：ng-bind,ng-model,{{}}
- controller中的scope,rootScope,
- 页面渲染：ng-repeat,ng-show,ng-if,ng-class
- 事件绑定：ng-click,ng-submit
- 语法糖：filter，factory
- 依赖注入
- url路由

##提纲
![](https://github.com/giantray/angular-todo-app-example/tree/master/doc-img/tigang.png)

##访问方式
拉下代码，放到web容器，如果最新的代码（也就是加了url多页面路由后）请访问/index.html#/todo，之前的代码直接访问index.html