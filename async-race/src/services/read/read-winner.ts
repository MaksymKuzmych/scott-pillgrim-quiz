import { BASE_URL } from '../../utils/base-url';

export async function getWinner(id: number): Promise<Response> {
  const winnerResponse: Response = await fetch(`${BASE_URL}/winners/${id}`);

  return winnerResponse;
}
