import { fetchWrapper } from '~/services/fetch-wrapper';

export const createTask = async (task: { title: string; date: string }) =>
  await fetchWrapper({
    url: `/tasks`,
    method: 'POST',
    body: JSON.stringify(task),
  });
