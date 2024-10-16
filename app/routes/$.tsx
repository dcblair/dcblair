import { ErrorBoundary } from '~/root';

export async function clientLoader() {
  throw new Response('Not found', { status: 404 });
}

export default function NotFound() {
  const error = new Error('Not found');

  return <ErrorBoundary error={error} />;
}
