import { Steps, Card} from 'antd'
import React, { useState } from 'react'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import { Radio } from 'antd'
// import Type1 from '../components/Crausel/Type1'
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
      setPer(per + 25)
    }
  }
  const prev = () => {
    if (per === 0) {
      setS(stage - 1)
      setPer(100)
    } else {
      setPer(per - 25)
    }
  }
  const data = [
    {
      title: 'Title 1',
      content: 'Content 1',
    },
    {
      title: 'Title 2',
      content: 'Content 2',
    },
    {
      title: 'Title 3',
      content: 'Content 3',
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
      {slide >= 0 && slide < 5 && (
        <Card>
          <img
            src="https://dummyimage.com/1200x500" alt=""
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
