import { updateCarListener } from '../garage-options/update-car';

export function selectCarListener(raceContainer: HTMLDivElement) {
  const selectCarBtn = raceContainer.querySelector('.race__btn_select') as HTMLButtonElement;

  selectCarBtn.addEventListener('click', () => {
    const optionsContainer = document.querySelector('.options') as HTMLDivElement;
    const selectCarBtns = document.querySelectorAll('.race__btn_select') as NodeListOf<HTMLButtonElement>;
    const updateCarText = document.querySelector('.update-car__text') as HTMLInputElement;
    const id = selectCarBtn.dataset.id;

    if (id) {
      selectCarBtns.forEach((btn) => {
        btn.classList.remove('chosen');
      });

      selectCarBtn.classList.add('chosen');
      updateCarText.focus();

      updateCarListener(optionsContainer, +id);
    }
  });
}
