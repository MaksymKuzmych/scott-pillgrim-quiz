import { BASE_URL } from '../../utils/base-url';

export async function deleteWinner(id: number) {
  await fetch(`${BASE_URL}/winners/${id}`, { method: 'DELETE' });
}
