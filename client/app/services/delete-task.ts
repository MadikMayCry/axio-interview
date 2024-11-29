import { fetchWrapper } from '~/services/fetch-wrapper';

export const deleteTask = async (id: number) =>
  await fetchWrapper({ url: `/tasks/${id}`, method: 'DELETE' });
