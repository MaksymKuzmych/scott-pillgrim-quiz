import { postGerenatedCars } from '../../services/create/create-hundred-cars';
import { renderGarage } from '../../templates/garage/garage-container';
import { page } from '../../utils/page';

export function generateHundredCarsListener(optionsContainer: HTMLDivElement) {
  const generateBtn = optionsContainer.querySelector('#generate') as HTMLDivElement;

  generateBtn.addEventListener('click', async () => {
    await postGerenatedCars();
    await renderGarage(String(page.pageNumber));
  });
}
