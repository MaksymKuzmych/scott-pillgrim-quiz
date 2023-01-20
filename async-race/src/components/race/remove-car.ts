import { deleteCar } from '../../services/delete/delete-car';
import { getCarsLength } from '../../services/read/read-cars-length';
import { renderGarage } from '../../templates/garage/garage-container';
import { page } from '../../utils/page';

export function removeCarListener(raceContainer: HTMLDivElement) {
  const removeBtn = raceContainer.querySelector('.race__btn_remove') as HTMLButtonElement;

  removeBtn.addEventListener('click', async () => {
    const carId = removeBtn.dataset.id;

    if (carId) {
      await deleteCar(+carId);

      const carLength = await getCarsLength();

      if (carLength) {
        const lastPage = Math.ceil(+carLength / 7);

        if (page.pageNumber > lastPage) {
          page.pageNumber -= 1;
          await renderGarage(String(page.pageNumber));
        } else {
          await renderGarage(String(page.pageNumber));
        }
      }
    }
  });
}
