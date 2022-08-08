import React, { Component } from "react";
import { isMobile } from "@utils";
import InboxSidenav from "./InboxSidenav";
import { getAllMessage } from "./inboxService";
import InboxContent from "./InboxContent";

class AppInbox extends Component {
  container = React.createRef();
  windowResizeListener;
  state = {
    mainSidenavOpen: true,
    secSidenavOpen: true,
    masterCheckbox: false,
    isMobile: false,
    messageList: []
  };

  toggleSidenav = field => {
    this.setState({ [field]: !this.state[field] });
  };

  componentDidMount() {
    if (isMobile())
      this.setState({
        mainSidenavOpen: false,
        secSidenavOpen: false,
        isMobile: true
      });
    if (window)
      this.windowResizeListener = window.addEventListener("resize", e => {
        if (isMobile())
          this.setState({
            mainSidenavOpen: false,
            secSidenavOpen: false,
            isMobile: true
          });
        else
          this.setState({
            mainSidenavOpen: true,
            secSidenavOpen: true,
            isMobile: false
          });
      });

    getAllMessage().then(data => {
      this.setState({
        messageList: data.data
      });
    });
  }

  componentWillUnmount() {
    if (window) window.removeEventListener("resize", this.windowResizeListener);
  }

  render() {
    let { mainSidenavOpen, secSidenavOpen, messageList, isMobile } = this.state;
    return (
      <div className="inbox-main-sidebar-container sidebar-container">
        <InboxContent
          secSidenavOpen={secSidenavOpen}
          mainSidenavOpen={mainSidenavOpen}
          isMobile={isMobile}
          messageList={messageList}
          toggleSidenav={this.toggleSidenav}
        ></InboxContent>
        <InboxSidenav
          open={mainSidenavOpen}
          toggleSidenav={this.toggleSidenav}
        ></InboxSidenav>
      </div>
    );
  }
}

export default AppInbox;
