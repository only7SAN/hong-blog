# hong-blog
  这是一个面向新手的react+express项目，并借此希望了解前端与后台如何交互，熟悉前后端环境

  如果你已经对这方面有丰富的经验或者相当了解，请掠过

  本人也是个新手，若项目中存在错误或者不恰当的地方，欢迎指出

## 工具

>* 前端: webpack, react, redux(状态管理), react-router(路由)
>
>* 服务器: node, express(使用ajax进行前后端通信)
>
>* 数据库：mongoose(mongodb)

## 项目预览

## 运行
    npm clone https://github.com/only7SAN/hong-blog
    npm install
    npm run dev "访问开发环境"
    npm run dist "访问生产环境"
    npm run lint "eslint代码风格校验"

   环境：node，mongodb

## 完成功能
* 简单api设计
* mongoose 数据库的规划
* 前端路由设计
* 前端UI自己玩坏了（==原谅我，有心设计，无力回天）
* 登录，注册，浏览，新建，编辑，退出
* 使用sessionStorage进行用户信息保存
* 用户登录退出
* 密码加密
* 简单加载动画
* eslint 进行代码风格校验

## 接下来（未完成）
* 文章的分页
* 点赞与评论功能
* 用户权限的设置
* 动画效果
* ...

## 状态图

## restful api 设计
    用户api
    post('/api/user/new')               新建用户
    get('/api/user/del')                删除用户
    get('/api/user/:user_id')           用户详细信息
    post('/api/user')                   登录获取用户信息
    文章api
    post('/api/article/new')            新建文章
    post('/api/article/update')         更新文章
    get('/api/article/:article_id')     文章详细信息
    get('/api/article/del')             删除文章
    get('/api/articles')                某人所有文章

## 个人收获
收获一大堆，因为我之前不懂的太多，下面简单说说

* 更加深入熟悉了解了js语法（es5,es6...)我觉得这是收获最大的，基础打得好才能走的远，对吧==
* 加深对react技术栈理解与使用，有许多人说react看起来好难用，东西太多，其实不然，不过每个框架都有自己擅长的地方，之后我也会多多学习其他框架，比较他们的优劣和特点，react很多问题还是比较方面找答案，redux在状态管理方面相当的好用，理解它的原理很有感触
* l love webpack ! 模块化真的很棒，配置不会的多看看就好啦
* node我一直不是很擅长，这次==更加觉得自己对于服务器端还有好多要学习，express还是比较简单容易上手的(多亏了它)
* mongodb 搭配 node 很棒,当然现在许许多多数据库都支持node服务，所以node学好对于前端来说还是相当关键的
* 学会了框架的使用，有时候重造轮子很不划算，尤其你不知道你写的是不是最好实践，所以 思考 > 学习  (耶！)
* 准备闭关。。。力争上游

## 感谢
嗯，看了很多文章，吸血（学习）了很多代码，感谢他们，如下