import { IWinner } from '../../interfaces';
import { BASE_URL } from '../../utils/base-url';

export async function getWinners(): Promise<IWinner[]> {
  const winnersResponse: Response = await fetch(`${BASE_URL}/winners`);
  const winners: IWinner[] = await winnersResponse.json();

  return winners;
}
