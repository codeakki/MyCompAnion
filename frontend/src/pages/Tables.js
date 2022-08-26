
import {
  Row,
  Col,
  Card,


} from "antd";
import Players from "./Player";
import PPT from "./PowerPoint";
function Tables() {
  

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} className="mb-24">
            <Card bordered={true} className="criclebox h-full">
              <Players />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} className="mb-24">
            <Card bordered={true} className="criclebox h-full">
              <PPT />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
