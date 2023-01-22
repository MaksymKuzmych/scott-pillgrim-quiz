import { BASE_URL } from '../../utils/base-url';

export async function checkEngine(id: number): Promise<Response> {
  const engineResponse = await fetch(`${BASE_URL}/engine?id=${id}&status=drive`, {
    method: 'PATCH',
  });

  return engineResponse;
}
