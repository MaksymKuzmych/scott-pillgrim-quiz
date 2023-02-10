import { putItem } from '../../utils/put-item';

export async function updateWinner(id: number, wins: number, time: number) {
  const body = {
    wins,
    time,
  };

  putItem(id, 'winners', body);
}
