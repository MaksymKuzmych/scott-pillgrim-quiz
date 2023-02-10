import { IWinner } from '../../interfaces';
import { BASE_URL } from '../../utils/base-url';

export async function getWinners(page: number, sort: string, order: string): Promise<IWinner[]> {
  const winnersResponse: Response = await fetch(
    `${BASE_URL}/winners?_page=${page}&_limit=10&_sort=${sort}&_order=${order}`,
  );

  return winnersResponse.json();
}
