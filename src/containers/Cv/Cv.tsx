import React, { PureComponent } from "react";
import Gotop from "react-go-top";
import Header from "../../components/Header/Header";
import Bottom from "../../components/Bottom/Bottom";
import DownLoad from "../../components/DownLoad/DownLoad";
import "./cv.less";

class Cv extends PureComponent {
  componentDidMount() {
    document && document.documentElement
      ? (document.documentElement.scrollTop = 0)
      : null;
  }
  render() {
    return (
      <div className="Cv">
        <Header active={0} />
        <Gotop />
        <main className="page">
          <section>
            <h1 className="f-s-18 f-w-900 m-b-20">联系方式</h1>
            <div className="boxes default m-b-20">
              <div className="box bg-gray-lightest p-t-0 p-b-0">
                <div className="row">
                  <div className="col-4 p-t-10 p-b-10">● 手机：19903806340</div>
                  <div className="col-4 p-t-10 p-b-10 border">
                    ● Email：xwq6340@163.com
                  </div>
                  <div className="col-4 p-t-10 p-b-10 border">
                    ● 网站：www.xwq666.com
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h1 className="f-s-18 f-w-900 m-b-20">个人信息</h1>
            <div className="boxes default m-b-20">
              <div className="box bg-gray-lightest p-t-0 p-b-0">
                <div className="row">
                  <div className="col-4 p-t-10 p-b-10">
                    ● 徐伟强 | 男 | 1996-11-18
                  </div>
                  <div className="col-4 p-t-10 p-b-10 border">
                    ● 本科 | 郑州师范学院 | 软件工程
                  </div>
                  <div className="col-4 p-t-10 p-b-10 border">
                    ● 前端开发 | 0 年工作经验
                  </div>
                </div>
                <div className="row">
                  <div className="col-4 p-t-10 p-b-10">
                    ● 期望职位：Web高级前端
                  </div>
                  <div className="col-4 p-t-10 p-b-10 border">
                    ● 期望城市：杭州
                  </div>
                </div>
              </div>
              <div className="box bg-gray-lightest">
                ● Github：
                <a href="https://github.com/xuweiqiang123456" target="_blank">
                  https://github.com/xuweiqiang123456
                </a>
              </div>
              <div className="box bg-gray-lightest">
                ● 技术博客：
                <a href="https://www.xwq666.com" target="_blank">
                  https://www.xwq666.com
                </a>
              </div>
            </div>
          </section>
          <section>
            <h1 className="f-s-18 f-w-900 m-b-20">开源项目</h1>
            <div className="boxes default m-b-20">
              <div className="box bg-gray-lightest">
                ●
                <a
                  href="https://github.com/xuweiqiang123456/blog"
                  target="_blank"
                >
                  {" "}
                  个人博客 - 使用 React + Redux + Ts + Antd + Koa
                  构建的个人网站，个人简历、文章及留言版展示
                </a>
              </div>
            </div>
          </section>
          <section>
            <h1 className="f-s-18 f-w-900 m-b-20">技能掌握</h1>
            <div className="boxes default m-b-20">
              <div className="box bg-gray-lightest">
                ● 前端框架：Vue/React/微信小程序
              </div>
              <div className="box bg-gray-lightest">
                ● 前端工具：Webpack/Sass/Less/stylus
              </div>
              <div className="box bg-gray-lightest">
                ● 后端框架：NodeJS/Koa/express/nginx
              </div>
              <div className="box bg-gray-lightest">● 数据库相关：MongoDB</div>
              <div className="box bg-gray-lightest">
                ● 版本管理工具：Git/GitLab
              </div>
            </div>
          </section>
          <section>
            <h1 className="f-s-18 f-w-900 m-b-20">工作经历</h1>
            <div className="boxes default m-b-20">
              <div className="box bg-gray-lightest">● 空白</div>
              <div className="box bg-gray-lightest">
                <p className="m-t-0">
                  <b>空白</b>
                </p>
                <p>- 空白</p>
                <p>- 空白</p>
                <p>- 空白</p>
              </div>
            </div>
            <div className="boxes default m-b-20">
              <div className="box bg-gray-lightest">● 空白</div>
              <div className="box bg-gray-lightest">
                <p className="m-t-0">
                  <b>空白</b>{" "}
                </p>
                <p> - 空白</p>
                <p>- 空白</p>
                <p>- 空白</p>
              </div>
            </div>
            ......
          </section>
        </main>
        <Bottom />
        <DownLoad />
      </div>
    );
  }
}
export default Cv;
