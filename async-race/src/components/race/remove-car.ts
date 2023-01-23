import { deleteCar } from '../../services/delete/delete-car';
import { deleteWinner } from '../../services/delete/delete-winner';
import { getCarsLength } from '../../services/read/read-cars-length';
import { renderGarage } from '../../templates/garage/garage-container';
import { page } from '../../utils/page';

export function removeCarListener(raceContainer: HTMLDivElement) {
  const removeBtn = raceContainer.querySelector('.race__btn_remove') as HTMLButtonElement;

  removeBtn.addEventListener('click', async () => {
    const carId = removeBtn.dataset.id;

    if (carId) {
      await deleteWinner(+carId);
      await deleteCar(+carId);

      const carsLength: string | null = await getCarsLength();

      if (carsLength) {
        const lastPage = Math.ceil(+carsLength / 7);

        if (page.garagePageNumber > lastPage) {
          page.garagePageNumber -= 1;
        }

        await renderGarage(page.garagePageNumber);
      }
    }
  });
}
