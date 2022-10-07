import React from "react";
import { Row, Col, Icon, Menu, Button, Popover } from "antd";
import { enquireScreen } from "enquire-js";
import logo from "./static/my.png";

class Header extends React.Component {
  state = {
    menuVisible: false,
    menuMode: "horizontal",
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ menuMode: b ? "inline" : "horizontal" });
    });
  }

  render() {
    const { menuMode, menuVisible } = this.state;

    const menu = (
      <Menu mode={menuMode} id="nav" key="nav">
        <Menu.Item key="home">
          <a>Home</a>
        </Menu.Item>
        {menuMode === "inline" && (
          <Menu.Item key="preview">
            <a target="_blank" href="" rel="noopener noreferrer">
              Login
            </a>
          </Menu.Item>
        )}
      </Menu>
    );

    return (
      <div id="header" className="header">
        {menuMode === "inline" ? (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            <Icon
              className="nav-phone-icon"
              type="menu"
              onClick={this.handleShowMenu}
            />
          </Popover>
        ) : null}
        <Row>
          <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
           {/*  <div id="" to="/">
              <img src={logo}
                width="170"
                height="50" />
            </div> */}
          </Col>
          <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
            <div className="header-meta">
              <div id="preview">
                <a
                  id="preview-button"
                  target="_blank"
                  href="https://3000-krishbhardwaj-sih-2tdo0c16zrk.ws-us63.gitpod.io/sign-up"
                  
                >
                  <Button>Login</Button>
                </a>
              </div>
              {menuMode === "horizontal" ? <div id="menu">{menu}</div> : null}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
