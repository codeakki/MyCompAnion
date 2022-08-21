import {
  Card,
  Button,
  Modal,
  Radio,
  notification,
  Typography,
  Space,
  Tag
} from 'antd'
import React, { useState } from 'react'
import Countdown from "react-countdown";
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Tabs } from 'antd';
const { TabPane } = Tabs;
const { Title } = Typography
const { confirm } = Modal

const MCQ = () => {
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
    "Assignment": [
      {
        "AssignmentName": "MCQ TEST 1",
        "Status": 0,
        "id": 1
      },
      {
        "AssignmentName": "MCQ TEST 2",
        "Status": 0,
        "id": 2
      },
      {
        "AssignmentName": "MCQ TEST 3",
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
        <Card title="Assignments" bordered={true}>
          {
            body.Assignment.map((item, index) => (
              <Card.Grid style={gridStyle} bordered={true} key={index}>
                <Title level={4}>{item.AssignmentName}</Title>
                <Title level={5}>
                  {
                    status[item.id - 1] === 0 ? <Tag color="red">Not Completed</Tag> : <Tag color="green">Completed</Tag>
                  }
                </Title>
                <Button onClick={() => {
                  confirm({
                    title: 'Do you want to start this test?',
                    icon: <ExclamationCircleOutlined />,
                    content:
                      'This is a MCQ based test. You will be given 5 min for 5 Question and you have to answer each question in order to complete the test. Click OK to start the test or CANCEL to exit.',
                    okText: 'OK',
                    cancelText: 'Cancel',
                    onOk() {
                      return new Promise((resolve, reject) => {
                        setTimeout(Math.random() > 1 ? resolve : resolve, 5000)
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
      )}
      {state === 'quiz' && (
        <>
          <Radio.Group >
            <Radio.Button onClick={() => setState('start')} >Back</Radio.Button>
            <Radio.Button ><Countdown date={Date.now() + 310000} /></Radio.Button>
            <Radio.Button onClick={() => setState('result')} >Submit</Radio.Button>
          </Radio.Group>
          <Tabs type="card">
            {
              questions.map((item, index) => (
                <TabPane tab={"Q"+item.id} key={index}>
                  <Space direction="vertical">
                  <Title level={3}>{item.question}</Title>
                    <Radio.Group buttonStyle="solid" onChange={(e) => {
                      if (e.target.value === item.answer) {
                        setScore(score + 1)
                      }
                    }
                    }>
                      <Radio value={1}><Title level={4}>{item.option1}</Title></Radio><br/>
                      <Radio value={2}><Title level={4}>{item.option2}</Title></Radio><br/>
                      <Radio value={3}><Title level={4}>{item.option3}</Title></Radio><br/>
                      <Radio value={4}><Title level={4}>{item.option4}</Title></Radio><br/>
                    </Radio.Group>
                  </Space>
                </TabPane>
              ))
            }
          </Tabs>
        </>
      )}
       {state === 'result' && (
        <Card title="Result" bordered={true}>
          <Title level={4}>RESULT</Title>
          <Title level={5}>YOUR SCORE : {score} / {questions.length}</Title>
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
//             }
//           </Tabs>
//           {questions.map((item, index) => (
//             <Card key={index} title={item.question} bordered={true}>
//               <Radio.Group onChange={(e) => {
//                 if (e.target.value === item.answer) {
//                   setScore(score + 1)
//                 }
//                 setStatus([...status, e.target.value])
//               }
//               }>
//                 <Radio value={1}>{item.option1}</Radio>
//                 <Radio value={2}>{item.option2}</Radio>
//                 <Radio value={3}>{item.option3}</Radio>
//                 <Radio value={4}>{item.option4}</Radio>
//               </Radio.Group>
//             </Card>
//           ))}
//         </>
//       )}
//       {state === 'result' && (
//         <Card title="Result" bordered={true}>
//           <Title level={4}>RESULT</Title>
//           <Title level={5}>YOUR SCORE : {score} / {questions.length}</Title>
//           <Button onClick={() => {
//             setState('start');
//             notification.info({
//               message: 'TEST COMPLETED',
//               duration: 5,
//               style: {
//                 color: 'rgba(0, 0, 0, 0.65)',
//                 border: '1px solid #91d5ff',
//                 backgroundColor: '#e6f7ff'
//               }
//             });
//             setScore(0);
//             setQ(1);
//           }}>BACK</Button>
//         </Card>
//       )}
//     </>
//   )
// }


// {/* <Title level={4}>{questions[q-1].question}</Title>
//           <Radio.Group  defaultValue={0} onChange={(e) => {
//             var temp = q; temp = temp < questions.length ? temp + 1 : setState('result'); setQ(temp);
//             if(e.target.value === questions[q-1].answer){
//               setScore(score + 1)
//               console.log(score)
//             }else{
//               setScore(score)
//               console.log(score)
//             }
//           }}>
//             <Space direction="vertical"  >
//               <Radio value={1} name="op"><Title level={5}>{questions[q-1].option1}</Title></Radio>
//               <Radio value={2} name="op"><Title level={5}>{questions[q-1].option2}</Title></Radio>
//               <Radio value={3} name="op"><Title level={5}>{questions[q-1].option3}</Title></Radio>
//               <Radio value={4} name="op"><Title level={5}>{questions[q-1].option4}</Title></Radio>
//             </Space>
//           </Radio.Group> */}
//         // </Card >
//       // )}
// {
//   state === 'result' && (
//     <Card title="Result" bordered={true}>
//       <Title level={4}>RESULT</Title>
//       <Title level={5}>YOUR SCORE : {score} / {questions.length}</Title>
//       <Button onClick={() => {
//         setState('start');
//         notification.info({
//           message: 'TEST COMPLETED',
//           duration: 5,
//           style: {
//             color: 'rgba(0, 0, 0, 0.65)',
//             border: '1px solid #91d5ff',
//             backgroundColor: '#e6f7ff'
//           }
//         });
//         setScore(0);
//         setQ(1);
//       }}>BACK</Button>
//     </Card>
//   )
// }
//     </>
//   )
// }

function Assignments() {
  return (
    <>
      <MCQ />
    </>
  )
}

export default MCQ
