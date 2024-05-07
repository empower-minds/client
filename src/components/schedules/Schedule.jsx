import { ScheduleComponent, Day, Week, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import * as React from 'react';

function Schedule() {
  const data = [
    {
      Id: 1,
      Subject: 'Meeting',
      StartTime: new Date(2024, 5, 15, 10, 0),
      EndTime: new Date(2024, 5, 15, 12, 30),
    },
  ];
  return (
    <ScheduleComponent
      selectedDate={new Date(2024, 5, 15)}
      eventSettings={{
        dataSource: data,
      }}
    >
      <Inject services={[Day, Week, Month, Agenda]} />
    </ScheduleComponent>
  );
}
export default Schedule;