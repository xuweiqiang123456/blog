import React, { PureComponent } from "react";
import "./bottom.less";
class Bottom extends PureComponent<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  render() {
    return (
      <div>
        <p className="beian">
          © 666 |{" "}
          <a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action">
            豫ICP备19003410号
          </a>
        </p>
      </div>
    );
  }
}
export default Bottom;
