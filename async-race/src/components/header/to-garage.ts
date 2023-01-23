import { page } from '../../utils/page';

export function toGarageListener(headerContainer: HTMLDivElement) {
  const toGarageBtn = headerContainer.querySelector('.header__btn_garage') as HTMLButtonElement;
  const toWinnersBtn = headerContainer.querySelector('.header__btn_winners') as HTMLButtonElement;

  toGarageBtn.addEventListener('click', async () => {
    const main = document.querySelector('.main') as HTMLElement;
    const garageContainer = document.querySelector('.garage') as HTMLDivElement;
    const winnersContainer = document.querySelector('.winners-page');

    toGarageBtn.disabled = true;
    toWinnersBtn.disabled = false;

    if (winnersContainer) {
      main.removeChild(winnersContainer);
    }

    page.winnersPageNumber = 1;

    garageContainer.classList.remove('hide');
  });
}
