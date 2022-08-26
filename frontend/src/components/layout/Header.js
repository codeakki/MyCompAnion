import { useState, useEffect } from "react";
import { green } from "@ant-design/colors";
import {
  Row,
  Col,
  Breadcrumb,
  
  Button,

  Avatar,
  
  Typography,
  Popover,
  Card,
  Progress,
  
} from "antd";

import {
  
  UserOutlined,
} from "@ant-design/icons";

import { NavLink} from "react-router-dom";

const { Meta } = Card;














 {
  

  const [ setVisible] = useState(false);
  

  useEffect(() => window.scrollTo(0, 0));

  

  return (
    <>
      <Row gutter={[24, 0]}>
        <Col span={24} md={6}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/">Pages</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item style={{ textTransform: "capitalize" }}>
              {name.replace("/", "")}
            </Breadcrumb.Item>
          </Breadcrumb>
        
        </Col>

        <Col span={24} md={18} className="header-control">
          <Popover
            placement="bottomRight"
            content={
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <Avatar
                    src="https://joeschmoe.io/api/v1/5"
                    size={100}
                    gap={10}
                  />
                }
              >
                <Meta title="Student X" description="Class 5" />
                <p>Concentration score : 4.5</p>
                <Progress
                  percent={45}
                  steps={10}
                  strokeColor={[
                    green[1],
                    green[1],
                    green[2],
                    green[3],
                    green[4],
                    green[5],
                    green[6],
                    green[7],
                    green[8],
                    green[9],
                  ]}
                />
                <Progress percent={30} />
                <Progress percent={50} status="active" />
                <Progress percent={70} status="exception" />
              </Card>
            }
            trigger="click"
          >
            <Button
              type="primary"
              shape="round"
              icon={<UserOutlined />}
            ></Button>
          </Popover>
        </Col>
      </Row>
    </>
  );
}

export default Header;
