import { ICar } from '../../interfaces';
import { BASE_URL } from '../../utils/base-url';

export async function getCars(): Promise<ICar[]> {
  const carsResponse: Response = await fetch(`${BASE_URL}/garage`);
  const carsData: ICar[] = await carsResponse.json();

  return carsData;
}
