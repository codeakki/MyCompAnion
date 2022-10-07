
import { SmileOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import React from 'react';

const App = () => (
  <Timeline>
    <Timeline.Item color="green">Read Study Module 1 2022-08-21</Timeline.Item>
    <Timeline.Item color="green">Attempt Quiz 2022-08-21</Timeline.Item>
    <Timeline.Item color="red">
      <p>Solve initial Task 1</p>
      <p>Solve initial Task 2</p>
      <p>Solve initial Task 3 2022-08-22</p>
    </Timeline.Item>
    <Timeline.Item>
      <p> Read Study Modal 1</p>
      <p> Read Study Modal  2</p>
      <p>Read Study Modal 3 2022-08-26</p>
    </Timeline.Item>
    <Timeline.Item color="#00CCFF" dot={<SmileOutlined />}>
      <p>Play Quiz 1</p>
      <p>Play Quiz 2</p>
    </Timeline.Item>
  </Timeline>
);

export default App;