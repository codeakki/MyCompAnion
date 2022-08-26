import {
  Card,
  Button,
  Modal,
  Radio,
  notification,
  Typography,
  Space,
  Tag,
} from 'antd'
import React, { useState } from 'react'
import Countdown from 'react-countdown'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Tabs } from 'antd'
import PptPlayer from './PptPlayer'
import VideoPlayer from './VideoPlayer'
import Interactive from './Interactive'
import { Steps } from 'antd'
const { TabPane } = Tabs
const { Title } = Typography
const { confirm } = Modal
const { Step } = Steps

const STUDY = () => {
  const [score, setScore] = useState(0)
  const [state, setState] = useState('start')
  const [status, setStatus] = useState([0, 0, 0])
  const [q, setQ] = useState(1)
  const [comp, setComp] = useState("NA")
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
      setIsModalVisible(true);
  };

  const handleOk = () => {
      setIsModalVisible(false);
  };

  const handleCancel = () => {
      setIsModalVisible(false);
  };
  const body = {
    "Study1" : 0,
    "Study2" : 0,
    "Study3" : 0,
  }

  const gridStyle = {
    width: '33.33%',
    textAlign: 'center',
  }

  return (
    <>
      {state === 'start' && (
        <>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
          <Card title="Study" bordered={true}>
                <Card.Grid style={gridStyle} bordered={true} key={1}>
                  <Title level={4}>{"Task 1"}</Title>
                  <Title level={5}>
                    {
                      status[2] === 0 ? <Tag color="red">Not Completed</Tag> : <Tag color="green">Completed</Tag>
                    }
                  </Title>
                  <Button
                  onClick={showModal}
                  // onClick={() => {
                    // confirm({
                    //   title: 'Get ready to study',
                    //   icon: <ExclamationCircleOutlined />,
                    //   content:
                    //     '',
                    //   okText: 'OK',
                    //   cancelText: 'Cancel',
                    //   onOk() {
                    //     return new Promise((resolve, reject) => {
                    //       setTimeout(Math.random() > 1 ? resolve : resolve, 5000)
                    //       console.log('OK')
                    //       notification.info({
                    //         message: 'Get Ready 🛠️',
                    //         description: '',
                    //         onClick: () => {
                    //           console.log('Test Starting')
                    //         },
                    //         duration: 5,
                    //         style: {
                    //           color: 'rgba(0, 0, 0, 0.65)',
                    //           border: '1px solid #91d5ff',
                    //           backgroundColor: '#e6f7ff'
                    //         }
                    //       })
                    //       status[2] = 1;
                    //       setState('quiz')
                    //       setComp("PPT")
                    //     }).catch(() => console.log('Oops errors!'))

                    //   },
                    //   onCancel() {
                    //     console.log('Cancel')
                    //   },
                    // })
            
                  // }}
                  >START</Button>
                </Card.Grid>
                <Card.Grid style={gridStyle} bordered={true} key={2}>
                  <Title level={4}>{"Task 2"}</Title>
                  <Title level={5}>
                    {
                      status[0] === 0 ? <Tag color="red">Not Completed</Tag> : <Tag color="green">Completed</Tag>
                    }
                  </Title>
                  <Button onClick={() => {
                    confirm({
                      title: 'Get ready to study',
                      icon: <ExclamationCircleOutlined />,
                      content:
                        '',
                      okText: 'OK',
                      cancelText: 'Cancel',
                      onOk() {
                        return new Promise((resolve, reject) => {
                          setTimeout(Math.random() > 1 ? resolve : resolve, 5000)
                          console.log('OK')
                          notification.info({
                            message: 'Get Ready 🛠️',
                            description: '',
                            onClick: () => {
                              console.log('Test Starting')
                            },
                            duration: 5,
                            style: {
                              color: 'rgba(0, 0, 0, 0.65)',
                              border: '1px solid #91d5ff',
                              backgroundColor: '#e6f7ff'
                            }
                          })
                          status[0] = 1;
                          setState('quiz')
                          setComp("VIDEO")
                        }).catch(() => console.log('Oops errors!'))

                      },
                      onCancel() {
                        console.log('Cancel')
                      },
                    })
                  }}>START</Button>
                </Card.Grid>
                <Card.Grid style={gridStyle} bordered={true} key={3}>
                  <Title level={4}>{"Task 3"}</Title>
                  <Title level={5}>
                    {
                      status[1] === 0 ? <Tag color="red">Not Completed</Tag> : <Tag color="green">Completed</Tag>
                    }
                  </Title>
                  <Button onClick={() => {
                    confirm({
                      title: 'Get ready to study',
                      icon: <ExclamationCircleOutlined />,
                      content:
                        '',
                      okText: 'OK',
                      cancelText: 'Cancel',
                      onOk() {
                        return new Promise((resolve, reject) => {
                          setTimeout(Math.random() > 1 ? resolve : resolve, 5000)
                          console.log('OK')
                          notification.info({
                            message: 'Get Ready 🛠️',
                            description: '',
                            onClick: () => {
                              console.log('Test Starting')
                            },
                            duration: 5,
                            style: {
                              color: 'rgba(0, 0, 0, 0.65)',
                              border: '1px solid #91d5ff',
                              backgroundColor: '#e6f7ff'
                            }
                          })
                          status[1] = 1;
                          setState('quiz')
                          setComp("INTERACTIVE")
                        }).catch(() => console.log('Oops errors!'))

                      },
                      onCancel() {
                        console.log('Cancel')
                      },
                    })
                  }}>START</Button>
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
            {/* <PptPlayer/> */}
            {/* <VideoPlayer/> */}
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
        <Card title="Result" bordered={true}>
          <Title level={4}>Ending note</Title>
          
          <Button onClick={() => {
            setState('start');
            notification.info({
              message: 'TEST COMPLETED',
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
