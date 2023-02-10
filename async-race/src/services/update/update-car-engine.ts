import { IStartOptions } from '../../interfaces';
import { BASE_URL } from '../../utils/base-url';

export async function updateCarEngine(id: number, status: string): Promise<IStartOptions> {
  const engineResponse = await fetch(`${BASE_URL}/engine?id=${id}&status=${status}`, {
    method: 'PATCH',
  });

  return engineResponse.json();
}
