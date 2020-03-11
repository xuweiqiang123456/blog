# React+Redux+Ts+Antd+Webpack+Koa 构建个人博客

> ##### 技术选型：react + redux + antd + ts + webpack + koa
>
> ##### 实现效果：个人博客网页展示，兼容移动端

## 写在前面

- 此项目为 clone 别人的，原是当做毕业设计，为方便管理放在 github 上，分支为在原有项目上修改的文件，源文件在 master 分支

## 主要功能

**博客前端**

- [x] 个人简历展示
- [x] 文章列表分页
- [x] 文章详情
- [x] 访客登陆、登出
- [x] 留言添加、删除
- [x] 留言列表分页

**Koa 服务端**

- [x] 用户账号创建、登陆登出
- [x] 文章增删改查
- [x] 留言增删改查
- [x] 留言关键字过滤
- [x] 留言被回复时发送邮件通知

**后台系统（代码未上传）**

- [x] 管理员登陆登出
- [x] 文章创建、删除、修改
- [x] 留言统计、留言关键字过滤
- [x] 访客统计

## 技术栈

- [x] react
- [x] redux
- [x] react-redux
- [x] react-router
- [x] redux-thunk
- [x] ant-design
- [x] typescript
- [x] webpack
- [x] Koa
- [x] MongoDB
- [x] Mongoose

**博客前端运行**

    yarn install

    yarn start

**服务器运行**

    cd server

    yarn install

    node index

## 项目截图

![简历截图](https://images.gitee.com/uploads/images/2019/0629/155231_14daf218_675480.png "cv.png")

![文章截图](https://images.gitee.com/uploads/images/2019/0629/155251_3cf35005_675480.png "artical.png")

![留言截图](https://images.gitee.com/uploads/images/2019/0629/155312_2ceef6e1_675480.png "comment.png")

## 文件结构

```
BLOG
│  .babelrc
│  .gitignore
│  package-lock.json
│  package.json
│  README.en.md
│  README.md
│  tsconfig.json
│  yarn.lock
│
├─config
│  │  env.js
│  │  paths.js
│  │  webpack.config.js
│  │  webpackDevServer.config.js
│  │
│  └─jest
│          cssTransform.js
│          fileTransform.js
│
├─public
│  │    favicon.ico
│  │    index.html
│  │    manifest.json
│  └─uploads
│
├─scripts
│      build.js
│      start.js
│      test.js
│
├─server
│  ├─db
│  ├─routers
│  ├─utils
│  └─www
│      ├─static
│      │  ├─css
│      │  ├─js
│      │  └─media
│      └─uploads
└─src
    │  bg.jpg
    │  declare_modules.d.ts
    │  font.less
    │  index.less
    │  index.tsx
    │  react-app-env.d.ts
    │  serviceWorker.ts
    │
    ├─api
    │      api.js
    │
    ├─components
    │  ├─Bjq
    │  │  │  bjq.less
    │  │  │  Bjq.tsx
    │  │  │
    │  │  ├─CommentList
    │  │  │      commentlist.less
    │  │  │      CommentList.tsx
    │  │  │
    │  │  └─img
    │  │          icons.png
    │  │
    │  ├─Bottom
    │  │      bottom.less
    │  │      Bottom.tsx
    │  │
    │  ├─Gotop
    │  │      gotop.less
    │  │      Gotop.tsx
    │  │      top.png
    │  │
    │  ├─Header
    │  │      header.jpg
    │  │      header.less
    │  │      Header.tsx
    │  │
    │  ├─List
    │  │      list.less
    │  │      List.tsx
    │  │      pic.jpg
    │  │
    │  ├─Music
    │  │      bgm.mp3
    │  │      music.less
    │  │      music.png
    │  │      Music.tsx
    │  │
    │  └─Toast
    │          toast.less
    │          Toast.tsx
    │
    ├─containers
    │  ├─Comments
    │  │      Comments.tsx
    │  │
    │  ├─Cv
    │  │      cv.less
    │  │      Cv.tsx
    │  │
    │  ├─Detail
    │  │      content.txt
    │  │      detail.less
    │  │      Detail.tsx
    │  │
    │  └─Home
    │          Home.tsx
    │
    ├─reducer
    │      artical.redux.js
    │      comment.redux.js
    │      index.js
    │      user.redux.js
    │
    └─routers
            routers.js
```
