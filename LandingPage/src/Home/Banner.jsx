import React from "react";
import PropTypes from "prop-types";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import { Button } from "antd";
import BannerSVGAnim from "./component/BannerSVGAnim";
import logo from "./static/my.png";

function Banner(props) {
  return (
    <div className="banner-wrapper">
      {props.isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          <div className="home-banner-image">
            <img
              alt="banner"
              src="https://gw.alipayobjects.com/zos/rmsportal/rqKQOpnMxeJKngVvulsF.svg"
              width="100%"
            />
          </div>
        </TweenOne>
      )}
      <QueueAnim
        className="banner-title-wrapper"
        type={props.isMobile ? "bottom" : "right"}
      >
        <div key="line" className="title-line-wrapper">
          <div
            className="title-line"
            style={{ transform: "translateX(-64px)" }}
          />
        </div>
        <div id="" to="/">
          <img src={logo}
            width="350"
            height="125" />
        </div>
        <p key="content">
          Stay Concentrated, go after your dreams and keep moving toward your goals.</p>

        <a
          id="preview-button"
          target="_blank"
          href="https://3000-krishbhardwaj-sih-2tdo0c16zrk.ws-us63.gitpod.io/sign-up"
          rel="noopener noreferrer"
        >
          <Button style={{ margin: "0 16px" }} type="primary" ghost>
            Get Started
          </Button>
        </a>
      </QueueAnim>
      {!props.isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          <BannerSVGAnim />
        </TweenOne>
      )}
    </div>
  );
}

Banner.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Banner;
