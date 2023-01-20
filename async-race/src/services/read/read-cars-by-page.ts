import { ICar } from '../../interfaces';
import { BASE_URL } from '../../utils/base-url';

export async function getCarsByPage(page: string) {
  const carsResponse: Response = await fetch(`${BASE_URL}/garage?_limit=7&_page=${page}`);
  const carsData: ICar[] = await carsResponse.json();

  return carsData;
}
