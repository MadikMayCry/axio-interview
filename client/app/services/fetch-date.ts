import { fetchWrapper } from '~/services/fetch-wrapper';

export const fetchDate = async (date: string) =>
  await fetchWrapper({ url: `/tasks?date=${date}` });
