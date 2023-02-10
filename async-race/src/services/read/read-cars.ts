import { ICar } from '../../interfaces';
import { BASE_URL } from '../../utils/base-url';

export async function getCars(): Promise<ICar[]> {
  const carsResponse: Response = await fetch(`${BASE_URL}/garage`);

  return carsResponse.json();
}
