import { IWinner } from '../../interfaces';
import { postItem } from '../../utils/post-item';

export async function postWinner(id: number, time: number) {
  const body: IWinner = {
    id,
    wins: 1,
    time,
  };

  postItem('winners', body);
}
