import { IWinner } from '../../interfaces';
import { BASE_URL } from '../../utils/base-url';

export async function postWinner(id: number, time: number) {
  const body: IWinner = {
    id,
    wins: 1,
    time,
  };

  await fetch(`${BASE_URL}/winners`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}
