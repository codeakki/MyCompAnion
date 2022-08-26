import {
  WeeklyCalendar,
} from 'antd-weekly-calendar';

const events = [
  { startTime: new Date(2021, 3, 21, 12, 0, 0), endTime: new Date(2021, 3, 21, 14, 30, 0), title: 'Ap. 1', backgroundColor: 'red' },
  { startTime: new Date(2021, 3, 25, 10, 0, 0), endTime: new Date(2021, 3, 25, 17, 15, 0), title: 'Ap. 1' },
];

function MyCalendar() {
  return (
      <>
        <WeeklyCalendar
            events={events}
            onEventClick={(event) => console.log(event)}
            onSelectDate={(date) => console.log(date)}
        />
      </>
  );
}

export default MyCalendar;