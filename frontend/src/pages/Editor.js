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
const { TabPane } = Tabs
const { Title } = Typography
const { confirm } = Modal

const STUDY = () => {
  const [score, setScore] = useState(0)
  const [state, setState] = useState('start')
  const [status, setStatus] = useState([0, 0, 0, 0, 0, 0])
  const [q, setQ] = useState(1)
  const questions = [
    {
      id: 1,
      question: '1. lopsum lorem ipsum',
      option1: 'lopsum lorem ipsum 1',
      option2: 'lopsum lorem ipsum 1',
      option3: 'lopsum lorem ipsum 1',
      option4: 'lopsum lorem ipsum 1',
      answer: 1,
    },
    {
      id: 2,
      question: '2. lopsum lorem ipsum',
      option1: 'lopsum lorem ipsum 2',
      option2: 'lopsum lorem ipsum 2',
      option3: 'lopsum lorem ipsum 2',
      option4: 'lopsum lorem ipsum 2',
      answer: 2,
    },
    {
      id: 3,
      question: '3. lopsum lorem ipsum',
      option1: 'lopsum lorem ipsum 3',
      option2: 'lopsum lorem ipsum 3',
      option3: 'lopsum lorem ipsum 3',
      option4: 'lopsum lorem ipsum 3',
      answer: 3,
    },
    {
      id: 4,
      question: '4. lopsum lorem ipsum',
      option1: 'lopsum lorem ipsum 4',
      option2: 'lopsum lorem ipsum 4',
      option3: 'lopsum lorem ipsum 4',
      option4: 'lopsum lorem ipsum 4',
      answer: 4,
    },
    {
      id: 5,
      question: '5. lopsum lorem ipsum',
      option1: 'lopsum lorem ipsum 5',
      option2: 'lopsum lorem ipsum 5',
      option3: 'lopsum lorem ipsum 5',
      option4: 'lopsum lorem ipsum 5',
      answer: 1,
    },
  ]
  const body = {
    "Study": [
      {
        "StudyName": "Task 1",
        "Status": 0,
        "id": 1
      },
      {
        "StudyName": "Task 2",
        "Status": 0,
        "id": 2
      },
      {
        "StudyName": "Task 3",
        "Status": 0,
        "id": 3
      }
    ],
  }

  const gridStyle = {
    width: '33.33%',
    textAlign: 'center',
  }

  return (
    <>
      {state === 'start' && (
        <>
          <Card title="Study" bordered={true}>
            {
              body.Study.map((item, index) => (
                <Card.Grid style={gridStyle} bordered={true} key={index}>
                  <Title level={4}>{item.StudyName}</Title>
                  <Title level={5}>
                    {
                      status[item.id - 1] === 0 ? <Tag color="red">Not Completed</Tag> : <Tag color="green">Completed</Tag>
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
                          status[item.id - 1] = 1;
                          setState('quiz')
                        }).catch(() => console.log('Oops errors!'))
                      },
                      onCancel() {
                        console.log('Cancel')
                      },
                    })
                  }}>START</Button>
                </Card.Grid>
              ))
            }

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
            setQ(1);
          }}>BACK</Button>
        </Card>
      )}
    </>
  )
}
export default STUDY
