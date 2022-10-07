import { Badge, Calendar, Card } from 'antd';
import React, { useState } from 'react';
import {
  Button,
  Modal,
  Radio,
  notification,
  Typography,
  Space,
  Tag,
} from 'antd'
import modal from './Title.png'
const getListData = (value) => {
  let listData;

  switch (value.date()) {
    case 8:
      listData = [
        {
          type: 'warning',
          content: 'Do homework.',
        }

      ];
      break;

    case 10:
      listData = [
        {
          type: 'success',
          content: 'Maths '
        }
      ];
      break;

    case 15:
      listData = [
        {
          type: 'warning',
          content: 'Play Games',
        }
      ];
      break;

    default:
  }

  return listData || [];
};

const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const App = () => {
  const [isModalVisibleINTERACIVE, setIsModalVisibleINTERACIVE] = useState(false);

  const showModalINTERACIVE = () => {
    setIsModalVisibleINTERACIVE(true);
  }

  const handleOkInteractive = () => {
    setIsModalVisibleINTERACIVE(false);
  }


  const handleCancel = () => {
    setIsModalVisibleINTERACIVE(false);
  };
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} onClick={() => showModalINTERACIVE()} />
          </li>
        ))}
      </ul>
    );
  };

  return (

    <>
      <Modal visible={isModalVisibleINTERACIVE} onOk={handleOkInteractive} onCancel={handleCancel} width={700}>
        <img src={modal} alt="video" width="200%" height="200%" />
      </Modal>
      <Card hoverable bordered={true}>
        <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
      </Card>
    </>
  );
};

export default App;