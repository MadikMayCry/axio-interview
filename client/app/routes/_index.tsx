import { useLoaderData } from '@remix-run/react';
import { Wrapper } from '~/components/wrapper';
import { fetchCalendar } from '~/services/fetch-calendar';

export async function loader() {
  const res = await fetchCalendar();
  return Response.json(await res);
}

export default function GistsRoute() {
  const calendar = useLoaderData<typeof loader>();
  return <Wrapper calendar={calendar} />;
}
