import { BASE_URL } from '../../utils/base-url';

export async function getCarsLength() {
  const carsResponse: Response = await fetch(`${BASE_URL}/garage?_limit=1`, { method: 'HEAD' });
  const carsQuantity = carsResponse.headers.get('X-Total-Count');

  return carsQuantity;
}
