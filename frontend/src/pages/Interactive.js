import { Steps, Card} from 'antd'
import React, { useState } from 'react'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import { Radio } from 'antd'
import p1 from '../pages/p/1.png'
import p2 from '../pages/p/2.png'
import p3 from '../pages/p/3.png'
import p4 from '../pages/p/4.png'
const { Step } = Steps
const Interactive = () => {
  const [stage, setS] = useState(0)
  const [per, setPer] = useState(0)
  // const [ setCurrent] = useState(0)
  const [slide, setSlide] = useState(0)
  // const onChange = (value) => {
  //   console.log('onChange:', value)
  //   setCurrent(value)
  // }
  const next = () => {
    if (per === 100) {
      setS(stage + 1)
      setPer(0)
    } else {
      setPer(per + 50)
    }
  }
  const prev = () => {
    if (per === 0) {
      setS(stage - 1)
      setPer(100)
    } else {
      setPer(per - 50)
    }
  }
  const data = [
    {
      title: 'Concept',
      content: '',
    },

    {
      title: 'Facts',
      content: '',
    },
  ]
  return (
    <Card title="Water cycle">
      <Steps current={stage} percent={per}>
        {data.map((item) => (
          <Step
            key={item.title}
            title={item.title}
            description={item.content}
          />
        ))}
      </Steps>
      {slide == 0 && (
        <Card>
          <img
            src={p1}
          />
        </Card>
      )}
      {slide ==1 && (
        <Card>
          <img
            src={p2}
          />
        </Card>
      )}
      {slide ==2 && (
        <Card>
          <img
            src={p3}
          />
        </Card>
      )}
      {slide >= 3 && (
        <Card>
          <img
            src={p4} alt=""
          />
        </Card>
      )}
      <Radio.Group>
        <Radio.Button onClick={()=>{
            prev();
            if(slide === 0){
                setSlide(0)
            }
            else{
                setSlide(slide - 1)
            }}}>
          <LeftCircleOutlined style={{ fontSize: '20px' }} />
        </Radio.Button>
        <Radio.Button onClick={()=>{
            next();
            if(slide === 12){
                setSlide(12)
            }
            else{
                setSlide(slide + 1)
            }}}>
          <RightCircleOutlined style={{ fontSize: '20px' }} />
        </Radio.Button>
      </Radio.Group>
    </Card>
  )
}

export default Interactive
