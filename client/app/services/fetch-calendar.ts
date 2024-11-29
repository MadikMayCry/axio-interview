import { fetchWrapper } from '~/services/fetch-wrapper';

export const fetchCalendar = async () =>
  await fetchWrapper({ url: '/calendar' });
