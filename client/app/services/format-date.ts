import dayjs from 'dayjs';
import { DATE_FORMAT } from '~/const';

export const formatDate = (date: dayjs.Dayjs) =>
  dayjs(date).format(DATE_FORMAT);
