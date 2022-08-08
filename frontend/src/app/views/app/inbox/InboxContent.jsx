import React, { useState, useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import ReactHtmlParser from "react-html-parser";
import { format } from "date-fns";

const InboxContent = ({
  mainSidenavOpen,
  secSidenavOpen,
  isMobile,
  messageList = [],
  toggleSidenav
}) => {
  const [selectedMessage, setMessage] = useState(null);

  const handleMessageClick = message => {
    setMessage(message);
    if (isMobile) toggleSidenav("secSidenavOpen");
  };

  useEffect(() => {
    if (messageList.length > 0) setMessage(messageList[0]);
  }, [messageList]);

  return (
    <div
      className="inbox-main-content sidebar-content"
      style={{ marginLeft: isMobile ? 0 : "180px" }}
    >
      {/* <!-- SECONDARY SIDEBAR CONTAINER --> */}
      <div className="inbox-secondary-sidebar-container box-shadow-1 sidebar-container">
        <div
          className="sidebar-content"
          style={{ marginLeft: isMobile ? 0 : "360px" }}
        >
          <div
            className="inbox-secondary-sidebar-content position-relative"
            style={{ minHeight: "500px" }}
          >
            <div
              className="inbox-topbar box-shadow-1 perfect-scrollbar rtl-ps-none pl-3"
              data-suppress-scroll-y="true"
            >
              {/* <!-- <span className="d-sm-none">Test</span> --> */}
              <span
                data-sidebar-toggle="main"
                className="link-icon d-md-none"
                onClick={() => toggleSidenav("mainSidenavOpen")}
              >
                <i className="icon-regular i-Arrow-Turn-Left"></i>
              </span>
              <span
                className="link-icon mr-3 d-md-none"
                onClick={() => toggleSidenav("secSidenavOpen")}
              >
                <i className="icon-regular mr-1 i-Left-3"></i> Inbox
              </span>

              <div className="d-flex">
                <span href="" className="link-icon mr-3">
                  <i className="icon-regular i-Mail-Reply"></i>
                  Reply
                </span>
                <span href="" className="link-icon mr-3">
                  <i className="icon-regular i-Mail-Reply-All"></i>
                  Forward
                </span>
                <span href="" className="link-icon mr-3">
                  <i className="icon-regular i-Mail-Reply-All"></i>
                  Delete
                </span>
              </div>
            </div>

            {/* <!-- EMAIL DETAILS --> */}
            {selectedMessage ? (
              <PerfectScrollbar
                className="inbox-details perfect-scrollbar rtl-ps-none"
                data-suppress-scroll-x="true"
              >
                <div className="row no-gutters">
                  <div className="mr-2" style={{ width: "36px" }}>
                    <img
                      className="rounded-circle"
                      src={selectedMessage.sender.photo}
                      alt={selectedMessage.sender.name}
                    />
                  </div>
                  <div className="col-xs-12">
                    <p className="m-0">{selectedMessage.sender.name}</p>
                    <p className="text-12 text-muted">
                      {format(
                        new Date(selectedMessage.date).getTime(),
                        "dd MMM, yyyy"
                      )}
                    </p>
                  </div>
                </div>
                <h4 className="mb-3">{selectedMessage.subject}</h4>
                <div>{ReactHtmlParser(selectedMessage.message)}</div>
              </PerfectScrollbar>
            ) : (
              <div className="w-100 text-center">No message available</div>
            )}
          </div>
        </div>

        {/* <!-- Secondary Inbox sidebar --> */}
        <PerfectScrollbar
          className="inbox-secondary-sidebar sidebar"
          style={{ left: isMobile ? (secSidenavOpen ? 0 : "-280px") : 0 }}
        >
          <i
            className="sidebar-close i-Close cursor-pointer"
            onClick={() => toggleSidenav("secSidenavOpen")}
          ></i>

          {messageList.map(message => (
            <div
              className="mail-item"
              key={message.id}
              onClick={() => handleMessageClick(message)}
            >
              <div className="avatar">
                <img src={message.sender.photo} alt={message.sender.name} />
              </div>
              <div className="col-xs-6 details">
                <span className="name text-muted">{message.sender.name}</span>
                <p className="m-0">{message.subject}</p>
              </div>
              <div className="col-xs-3 date">
                <span className="text-muted">
                  {format(new Date(message.date).getTime(), "dd MMM, yyyy")}
                </span>
              </div>
            </div>
          ))}
        </PerfectScrollbar>
      </div>
    </div>
  );
};

export default InboxContent;
