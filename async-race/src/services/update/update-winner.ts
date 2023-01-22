import { BASE_URL } from '../../utils/base-url';

export async function updateWinner(id: number, wins: number, time: number) {
  const body = {
    wins,
    time,
  };

  await fetch(`${BASE_URL}/winners/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}
