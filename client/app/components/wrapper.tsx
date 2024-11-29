import React from 'react';
import { type CalendarProps, Col, Row } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { CalendarComponent } from '~/components/calendar';
import { ITasks, WrapperComponentProps } from '~/types';
import { DATE_FORMAT } from '~/const';
import { fetchDate } from '~/services/fetch-date';
import { Tasks } from '~/components/tasks';
import { ModalComponent } from '~/components/modal';

export function Wrapper({ calendar }: WrapperComponentProps) {
  const [tasks, setTasks] = React.useState<ITasks>([]);
  const [date, setDate] = React.useState<dayjs.Dayjs>(dayjs(new Date()));
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => setIsModalOpen(true);

  const hideModal = () => setIsModalOpen(false);

  const calendarDateHandler: CalendarProps<Dayjs>['onSelect'] = (
    date,
    { source }
  ) => {
    if (source === 'date') setDate(date);
  };

  const getTasks = async (date: dayjs.Dayjs) => {
    const formatted_date = date.format(DATE_FORMAT);
    const date_tasks = await fetchDate(formatted_date);
    setTasks(date_tasks);
  };

  React.useEffect(() => {
    getTasks(date);
  }, [date, calendar]);

  return (
    <>
      <Row gutter={24}>
        <Col className="gutter-row" xs={24} md={14}>
          <CalendarComponent
            calendar={calendar}
            calendarDateHandler={calendarDateHandler}
          />
        </Col>
        <Col className="gutter-row" xs={24} md={10}>
          <Tasks tasks={tasks} showModal={showModal} />
        </Col>
      </Row>
      <ModalComponent
        date={date}
        isModalOpen={isModalOpen}
        hideModal={hideModal}
      />
    </>
  );
}
