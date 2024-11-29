type FetchWrapperParams = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  body?: BodyInit;
  headers?: Record<string, string>;
};

const BASE_URL = 'http://localhost:4000';

export async function fetchWrapper({
  method = 'GET',
  url,
  headers = { 'Content-Type': 'application/json' },
  ...rest
}: FetchWrapperParams): Promise<any> {
  try {
    const response = await fetch(BASE_URL + url, {
      method,
      headers,
      ...rest,
    });

    // Если контент пустой (204 No Content), возвращаем null
    if (response.status === 204) {
      return null;
    }

    return await response.json();
    // return response.then((r) => r).then((r) => r.json());
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    throw error;
  }
}
