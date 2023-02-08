import { getCarsLength } from '../../services/read/read-cars-length';
import { renderGarage } from '../../templates/garage/garage-container';
import { page } from '../../utils/page';

export function prevBtnListener(garageOptionsContainer: HTMLDivElement) {
  const prevBtn = garageOptionsContainer.querySelector('#prev') as HTMLButtonElement;

  if (page.garagePageNumber === 1) {
    prevBtn.disabled = true;
  }

  prevBtn.addEventListener('click', async () => {
    if (page.garagePageNumber > 1) {
      page.garagePageNumber -= 1;
      await renderGarage(page.garagePageNumber);

      if (page.garagePageNumber === 1) {
        prevBtn.disabled = true;
      }
    }
  });
}

async function checkLastPage(nextBtn: HTMLButtonElement, isPressedBtn: boolean) {
  const carsQuantity = await getCarsLength();
  const nextBtnClone = nextBtn;

  if (carsQuantity) {
    const lastPage = Math.ceil(+carsQuantity / 7);

    if (isPressedBtn && page.garagePageNumber < lastPage) {
      page.garagePageNumber += 1;
      await renderGarage(page.garagePageNumber);
    }

    if (page.garagePageNumber === lastPage) {
      nextBtnClone.disabled = true;
    }
  }
}

export async function nextBtnListener(garageOptionsContainer: HTMLDivElement) {
  const nextBtn = garageOptionsContainer.querySelector('#next') as HTMLButtonElement;
  checkLastPage(nextBtn, false);

  nextBtn.addEventListener('click', () => {
    checkLastPage(nextBtn, true);
  });
}
