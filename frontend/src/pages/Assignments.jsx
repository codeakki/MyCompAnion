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
import React, { useState , useEffect } from 'react'
import Countdown from 'react-countdown'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Tabs } from 'antd'
const { TabPane } = Tabs
const { Title } = Typography
const { confirm } = Modal

const MCQ = () => {
  const [setTabHasFocus] = useState(true);
    useEffect(() => {
    const handleFocus = () => {
      // alert('Tab has focus');
      setTabHasFocus(true);
    };

    const handleBlur = () => {
      // alert('Tab lost focus');
      notification.error({
        message: 'Tab lost focus',
        description: 'Dont change tab',
        onClick: () => {
          console.log('Screen Change Detected')
        },
        duration: 5,
        style: {
          color: 'rgba(0, 0, 0, 0.65)',
          border: '1px solid #ffa39e',
          backgroundColor: '#fff1f0'
        }
      })
      setTabHasFocus(false);
    };

    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    return () => {
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, []);
  const [score, setScore] = useState(0)
  const [state, setState] = useState('start')
  const [status] = useState([0, 0, 0, 0, 0, 0])
  const [setQ] = useState(1)
  const questions = [
    {
      id: 1,
      question: 'Q 1. Which solution is given when a person has vomiting and loose motions ?',
      option1: 'ORS',
      option2: 'Fruit juice',
      option3: 'Milk',
      option4: 'None',
      answer: 1,
    },
    {
      id: 2,
      question: 'Q 2. What is given to a sick person for getting instant energy?',
      option1: 'Chocolate',
      option2: 'Glucose drip',
      option3: ' Ice-cream',
      option4: 'Pizza ',
      answer: 2,
    },
    {
      id: 3,
      question: 'Q 3. What are the tiny bumps present on the tongue called?',
      option1: 'Smell buds',
      option2: 'Flower buds',
      option3: 'Taste buds',
      option4: 'lNone of these',
      answer: 3,
    },
    {
      id: 4,
      question: 'Q 4. Which nutrient protects us against diseases?      ',
      option1: 'Fats and carbohydrates',
      option2: 'Protein',
      option3: 'All of these',
      option4: 'Vitamin and minerals.',
      answer: 4,
    },
    {
      id: 5,
      question: 'Q 5. Which nutrients give us energy to do work?',
      option1: 'Facts and carbohydrates',
      option2: 'Vitamin and minerals',
      option3: 'Protein',
      option4: 'All of these',
      answer: 1,
    },
  ]
  const body = {
    Assignment: [
      {
        AssignmentName: 'MCQ TEST 1',
        Status: 0,
        id: 1,
      },
      {
        AssignmentName: 'MCQ TEST 2',
        Status: 0,
        id: 2,
      },
      {
        AssignmentName: 'MCQ TEST 3',
        Status: 0,
        id: 3,
      },
    ],
  }

  const gridStyle = {
    width: '33.33%',
    textAlign: 'center',
  }
  const gridStyle1 = {
    width: '100%',
    // textAlign: 'center',
  }

  return (
    <>
      {state === 'start' && (
        <>
          <Card title="Assignments" bordered={true}>
            {body.Assignment.map((item, index) => (
              <Card.Grid style={gridStyle} bordered={true} key={index}>
                <Title level={4}>{item.AssignmentName}</Title>
                <Title level={5}>
                  {status[item.id - 1] === 0 ? (
                    <Tag color="red">Not Completed</Tag>
                  ) : (
                    <Tag color="green">Completed</Tag>
                  )}
                </Title>
                <Button
                  onClick={() => {
                    confirm({
                      title: 'Do you want to start this test?',
                      icon: <ExclamationCircleOutlined />,
                      content:
                        'This is a MCQ based test. You will be given 5 min for 5 Question and you have to answer each question in order to complete the test. Click OK to start the test or CANCEL to exit.',
                      okText: 'OK',
                      cancelText: 'Cancel',
                      onOk() {
                        return new Promise((resolve, reject) => {
                          setTimeout(
                            Math.random() > 1 ? resolve : resolve,
                            5000,
                          )
                          console.log('OK')
                          notification.info({
                            message: 'Get Ready 🛠️',
                            description: 'Test starts in 5 seconds',
                            onClick: () => {
                              console.log('Test Starting')
                            },
                            duration: 5,
                            style: {
                              color: 'rgba(0, 0, 0, 0.65)',
                              border: '1px solid #91d5ff',
                              backgroundColor: '#e6f7ff',
                            },
                          })
                          status[item.id - 1] = 1
                          setState('quiz')
                        }).catch(() => console.log('Oops errors!'))
                      },
                      onCancel() {
                        console.log('Cancel')
                      },
                    })
                  }}
                >
                  START
                </Button>
              </Card.Grid>
            ))}
          </Card>
        </>
      )}
      {state === 'quiz' && (
        <>
          <Radio.Group style={{marginLeft:"800px"}}>
            <Radio.Button onClick={() => setState('start')}>Back</Radio.Button>
            <Radio.Button>
              <Countdown date={Date.now() + 310000} />
            </Radio.Button>
            <Radio.Button onClick={() => setState('result')}>
              Submit
            </Radio.Button>
          </Radio.Group>
          <Tabs type="card">
            {questions.map((item, index) => (
              <TabPane tab={'Q' + item.id} key={index}>
                <Space direction="vertical">
                  <Radio.Group
                    buttonStyle="solid"
                    onChange={(e) => {
                      if (e.target.value === item.answer) {
                        setScore(score + 1)
                      }
                    }}
                  >
                    <Card title={<Title level={3}>{item.question}</Title>}>
                      <Radio.Button value={1} style={gridStyle1} >
                        <Title level={4}>{item.option1}</Title>
                      </Radio.Button>
                      <br></br>
                      <br></br>
                        <Radio.Button value={2} style={gridStyle1}>
                        <Title level={4}>{item.option2}</Title>
                      </Radio.Button>
                      <br></br>
                      <br></br>
                      <Radio.Button value={3} style={gridStyle1}>
                        <Title level={4}>{item.option3}</Title>
                      </Radio.Button>
                      <br></br>
                      <br></br>
                      <Radio.Button value={4} style={gridStyle1}>
                        <Title level={4}>{item.option4}</Title>
                      </Radio.Button>
                    </Card>

                  </Radio.Group>
                </Space>
              </TabPane>
            ))}
          </Tabs>
        </>
      )}
      {state === 'result' && (
        <Card title="Result" bordered={true}>
          <Title level={4}>RESULT</Title>
          <Title level={5}>
            YOUR SCORE : {score} / {questions.length}
          </Title>
          <Button
            onClick={() => {
              setState('start')
              notification.info({
                message: 'TEST COMPLETED',
                duration: 5,
                style: {
                  color: 'rgba(0, 0, 0, 0.65)',
                  border: '1px solid #91d5ff',
                  backgroundColor: '#e6f7ff',
                },
              })
              setScore(0)
              setQ(1)
            }}
          >
            BACK
          </Button>
        </Card>
      )}
    </>
  )
}

export default MCQ
