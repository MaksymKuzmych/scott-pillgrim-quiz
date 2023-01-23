import { ICar } from '../../interfaces';
import { BASE_URL } from '../../utils/base-url';

export async function getCar(id: number): Promise<ICar> {
  const carResponse: Response = await fetch(`${BASE_URL}/garage/${id}`);
  const carData: ICar = await carResponse.json();

  return carData;
}
