import { postCar } from '../../services/create/create-car';
import { renderGarage } from '../../templates/garage/garage-container';
import { page } from '../../utils/page';

export function createCarListener(garageOptionsContainer: HTMLDivElement) {
  const createCarText = garageOptionsContainer.querySelector(
    '.create-car__text',
  ) as HTMLInputElement;
  const createCarColor = garageOptionsContainer.querySelector(
    '.create-car__color',
  ) as HTMLInputElement;
  const createCarBtn = garageOptionsContainer.querySelector(
    '.create-car__submit',
  ) as HTMLInputElement;

  createCarBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    const textValue = createCarText.value;
    const colorValue = createCarColor.value;

    if (textValue.length > 0) {
      await postCar(textValue, colorValue);
      await renderGarage(page.garagePageNumber);
    }
  });
}
