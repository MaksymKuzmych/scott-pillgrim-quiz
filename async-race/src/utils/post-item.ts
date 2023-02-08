import { BASE_URL } from './base-url';

export async function postItem(target: string, body: object) {
  await fetch(`${BASE_URL}/${target}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}
