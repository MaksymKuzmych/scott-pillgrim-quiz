import { BASE_URL } from '../../utils/base-url';

export async function postCar(name: string, color: string) {
  const body = {
    name,
    color,
  };

  await fetch(`${BASE_URL}/garage`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}
