import { postItem } from '../../utils/post-item';

export async function postCar(name: string, color: string) {
  const body = {
    name,
    color,
  };

  postItem('garage', body);
}
