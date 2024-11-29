import React from 'react';
import type { CalendarProps } from 'antd';
import { Badge, Calendar } from 'antd';
import { Dayjs } from 'dayjs';
import { CalendarComponentProps } from '~/types';

export const CalendarComponent: React.FC<CalendarComponentProps> = (props) => {
  const { calendar, calendarDateHandler } = props;

  const dateCellRender = (value: Dayjs, originNode: React.ReactElement) => {
    const formattedDate = value.format('YYYY-MM-DD');
    const count = calendar?.[formattedDate];

    return (
      <Badge
        count={count}
        color="#faad14"
        style={{
          zIndex: 999,
        }}
      >
        {originNode}
      </Badge>
    );
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (
    current,
    { type, originNode }
  ) => {
    if (type === 'date') return dateCellRender(current, originNode);
    return originNode;
  };

  return (
    <>
      <Calendar
        headerRender={() => null}
        fullscreen={false}
        fullCellRender={cellRender}
        mode={'month'}
        onSelect={calendarDateHandler}
      />
    </>
  );
};
