import { Steps, Card, Button } from 'antd'
import React, { useState } from 'react'
import Type1 from '../components/Crausel/Type1';
const { Step } = Steps

const Interactive = () => {
    const [stage, setS] = useState(0);
    const [per, setPer] = useState(0);
    const [current, setCurrent] = useState(0);

    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };
    const next = () => {
        if (per === 100) {
            setS(stage + 1);
            setPer(0);
        } else {
            setPer(per + 25);
        }
    }
    const prev = () => {
        if (per === 0) {
            setS(stage - 1);
            setPer(100);
        } else {
            setPer(per - 25);
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
    ];
    return (
        <Card>
            <Steps current={stage} percent={per}>
                {data.map(item => (
                    <Step key={item.title} title={item.title} description={item.content} subTitle="Left 00:00:08" />
                ))}
            </Steps>

            <div style={{ textAlign: 'center' }}>
                <Button type="primary" onClick={prev}>Previous</Button>
                <Button type="primary" onClick={next}>Next</Button>
            </div>
            <Button type="primary" >Reset</Button>
            <Type1/>
        </Card>
    )
}

export default Interactive
