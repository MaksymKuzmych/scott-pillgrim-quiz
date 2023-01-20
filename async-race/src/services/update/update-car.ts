import { BASE_URL } from '../../utils/base-url';

export async function updateCar(id: string, name: string, color: string) {
  const body = {
    name,
    color,
  };

  await fetch(`${BASE_URL}/garage/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}
