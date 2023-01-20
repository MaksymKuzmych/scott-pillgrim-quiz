import { BASE_URL } from '../../utils/base-url';

export async function deleteCar(id: number) {
  await fetch(`${BASE_URL}/garage/${id}`, { method: 'DELETE' });
}
