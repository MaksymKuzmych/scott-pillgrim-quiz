import { putItem } from '../../utils/put-item';

export async function updateCar(id: number, name: string, color: string) {
  const body = {
    name,
    color,
  };

  putItem(id, 'garage', body);
}
