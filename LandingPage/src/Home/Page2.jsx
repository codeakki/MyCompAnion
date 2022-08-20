import React from "react";
import { OverPack } from "rc-scroll-anim";
import QueueAnim from "rc-queue-anim";
import { Button } from "antd";

function Page2() {
  return (
    <div className="home-page page2">
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page2-line">
          <div className="title-line" />
        </div>
        <h2>
          How to get access to<span> My Companion</span>
        </h2>
        <OverPack>
          <QueueAnim
            key="queue"
            type="bottom"
            leaveReverse
            className="page2-content"
          >
            <p key="p" className="page-content">
              Get Started in 2 simple steps!
            </p>
            <div key="code1" className="home-code">
              <div>
                <span>Our Services Can be used through API integration</span>{" "}
              </div>
              <div>
                1 - Fetch our API key which will be given to you after
                successfull purchase of our services
              </div>
              <div>2 - Integrate our components through API</div>
            </div>

            <div key="button" style={{ marginTop: 3 }}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button type="primary">Get a Callback</Button>
              </a>
            </div>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}

export default Page2;
