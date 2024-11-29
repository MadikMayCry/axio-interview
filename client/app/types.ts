import dayjs, { Dayjs } from 'dayjs';
import { CalendarProps } from 'antd';

export type ICalendar = Record<string, number>;

export type ITask = {
  id: number;
  title: string;
  date: string;
  completed: boolean;
};

export type ITasks = ITask[];

export type WrapperComponentProps = { calendar: ICalendar };

export type CalendarComponentProps = {
  calendar: ICalendar;
  calendarDateHandler: CalendarProps<Dayjs>['onSelect'];
};

export type ModalComponentProps = {
  date: dayjs.Dayjs;
  isModalOpen: boolean;
  hideModal: () => void;
};
