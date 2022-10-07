import {
  Card,
  Button,
  Modal,
  Radio,
  notification,
  Typography,
  Space,
  Tag,Image,Tabs
} from 'antd'
import React, { useState } from 'react'
// import Countdown from 'react-countdown'
// import { ExclamationCircleOutlined } from '@ant-design/icons'
// import { Tabs } from 'antd'
import PptPlayer from './PptPlayer'
import VideoPlayer from './VideoPlayer'
import Interactive from './Interactive'
import { Steps } from 'antd'
import start from './5.png'
import end from './6.png'
const { TabPane } = Tabs
// import { Steps } from 'antd'
// const { TabPane } = Tabs
const { Title } = Typography
// const { confirm } = Modal
// const { Step } = Steps

const STUDY = () => {
  const [ setScore] = useState(0)
  const [state, setState] = useState('start')
  const [status] = useState([0, 0, 0])
  const [ setQ] = useState(1)
  const [comp, setComp] = useState("NA")
  const [isModalVisiblePPT, setIsModalVisiblePPT] = useState(false);
  const [isModalVisibleVIDEO, setIsModalVisibleVIDEO] = useState(false);
  const [isModalVisibleINTERACIVE, setIsModalVisibleINTERACIVE] = useState(false);

  const showModalPPT = () => {
      setIsModalVisiblePPT(true);
  };
  const showModalVIDEO = () => {
    setIsModalVisibleVIDEO(true);
};
  const showModalINTERACIVE = () => {
    setIsModalVisibleINTERACIVE(true);
}
  const handleOkPPT = () => {
      setIsModalVisiblePPT(false);
      setState('quiz')
      setComp("PPT")
  }
  const handleOkInteractive = () => {
    setIsModalVisibleINTERACIVE(false);
    setState('quiz')
    setComp("INTERACTIVE")
}
  const handleOkVIDEO = () => {
      setIsModalVisibleVIDEO(false);
      setState('quiz')
      setComp("VIDEO")
  };

  const handleCancel = () => {
      setIsModalVisiblePPT(false);
      setIsModalVisibleVIDEO(false);
      setIsModalVisibleINTERACIVE(false);
  };
 

  const gridStyle = {
    width: '33.33%',
    textAlign: 'center',
  }

  return (
    <>
      {state === 'start' && (
        <>
         <Modal visible={isModalVisiblePPT} onOk={handleOkPPT} onCancel={handleCancel} >
          <img src={start} alt="video" width="200%" height="200%"/>
          </Modal>
          <Modal title="Basic Modal" visible={isModalVisibleVIDEO} onOk={handleOkVIDEO} onCancel={handleCancel}>
          <img src={start} alt="video" width="200%" height="200%" />
          </Modal>
          <Modal title="Basic Modal" visible={isModalVisibleINTERACIVE} onOk={handleOkInteractive} onCancel={handleCancel}>
          <img src={start} alt="video" width="200%" height="200%" />
          </Modal>
          <Card title="Study" bordered={true}>
                <Card.Grid style={gridStyle} bordered={true} key={1}>
                  <Title level={4}>{"Task 1"}</Title>
                  <Title level={5}>
                    {
                      status[2] === 0 ? <Tag color="red">Not Completed</Tag> : <Tag color="green">Completed</Tag>
                    }
                  </Title>
                  <Button onClick={()=>{showModalPPT();status[2]=1}}>START</Button>
                </Card.Grid>
                <Card.Grid style={gridStyle} bordered={true} key={2}>
                  <Title level={4}>{"Task 2"}</Title>
                  <Title level={5}>
                    {
                      status[0] === 0 ? <Tag color="red">Not Completed</Tag> : <Tag color="green">Completed</Tag>
                    }
                  </Title>
                  <Button onClick={() => {showModalVIDEO();status[0]=1}}>START</Button>
                </Card.Grid>
                <Card.Grid style={gridStyle} bordered={true} key={3}>
                  <Title level={4}>{"Task 3"}</Title>
                  <Title level={5}>
                    {
                      status[1] === 0 ? <Tag color="red">Not Completed</Tag> : <Tag color="green">Completed</Tag>
                    }
                  </Title>
                  <Button onClick={()=>{showModalINTERACIVE();status[1]=1}}>START</Button>
                </Card.Grid>
          </Card>
        </>
      )}
      {state === 'quiz' && (
        <>
          <Radio.Group >
            <Radio.Button onClick={() => setState('start')} >Back</Radio.Button>
            <Radio.Button onClick={() => setState('result')} >Submit</Radio.Button>
          </Radio.Group>
          <Card >
            {
              comp === "PPT" && (<PptPlayer/>)
            }
            {
              comp === "VIDEO" && (<VideoPlayer/>)
            }
            {
              comp === "INTERACTIVE" && (<Interactive/>)
            }
          </Card>
        </>
      )}
      {state === 'result' && (
        <Card title="Result " bordered={true}>

          <img src={end} alt="video" width="50%" height="50%" /><br/>
          
          <Button onClick={() => {
            setState('start');
            notification.info({
              message: 'TASK COMPLETED',
              duration: 5,
              style: {
                color: 'rgba(0, 0, 0, 0.65)',
                border: '1px solid #91d5ff',
                backgroundColor: '#e6f7ff'
              }
            });
            setScore(0);
            setComp("NA")
            setQ(1);
          }}>BACK</Button>
        </Card>
      )}
    </>
  )
}
export default STUDY
