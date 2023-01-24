import { updateCarListener } from '../garage-options/update-car';

export function selectCarListener(raceContainer: HTMLDivElement) {
  const selectCarBtn = raceContainer.querySelector('.race__btn_select') as HTMLButtonElement;

  selectCarBtn.addEventListener('click', () => {
    const garageOptionsContainer = document.querySelector('.options') as HTMLDivElement;
    const selectCarBtns = document.querySelectorAll(
      '.race__btn_select',
    ) as NodeListOf<HTMLButtonElement>;
    const updateCarText = document.querySelector('.update-car__text') as HTMLInputElement;
    const carId = selectCarBtn.dataset.id;

    if (carId) {
      selectCarBtns.forEach((btn) => {
        btn.classList.remove('chosen');
      });

      selectCarBtn.classList.add('chosen');
      updateCarText.focus();

      updateCarListener(garageOptionsContainer, +carId);
    }
  });
}
