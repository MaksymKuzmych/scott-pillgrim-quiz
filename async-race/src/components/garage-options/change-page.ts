import { getCarsLength } from '../../services/read/read-cars-length';
import { renderGarage } from '../../templates/garage/garage-container';
import { page } from '../../utils/page';

export function prevBtnListener(optionsContainer: HTMLDivElement) {
  const prevBtn = optionsContainer.querySelector('#prev') as HTMLButtonElement;

  prevBtn.addEventListener('click', async () => {
    if (page.pageNumber > 1) {
      page.pageNumber -= 1;
      await renderGarage(page.pageNumber);
    }
  });
}

export function nextBtnListener(optionsContainer: HTMLDivElement) {
  const nextBtn = optionsContainer.querySelector('#next') as HTMLButtonElement;

  nextBtn.addEventListener('click', async () => {
    const carsQuantity = await getCarsLength();

    if (carsQuantity) {
      const lastPage = Math.ceil(+carsQuantity / 7);

      if (page.pageNumber < lastPage) {
        page.pageNumber += 1;
        await renderGarage(page.pageNumber);
      }
    }
  });
}
