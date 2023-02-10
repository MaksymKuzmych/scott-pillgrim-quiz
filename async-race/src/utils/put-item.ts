import { BASE_URL } from './base-url';

export async function putItem(id: number, target: string, body: object) {
  await fetch(`${BASE_URL}/${target}/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}
