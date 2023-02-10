import { BASE_URL } from '../../utils/base-url';

export async function getWinnersLength(): Promise<string | null> {
  const carsResponse: Response = await fetch(`${BASE_URL}/winners?_limit=1`, { method: 'HEAD' });

  return carsResponse.headers.get('X-Total-Count');
}
