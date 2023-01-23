import { renderWinnersPage } from '../../templates/winners/winners-container';

export function toWinnersListener(headerContainer: HTMLDivElement) {
  const toGarageBtn = headerContainer.querySelector('.header__btn_garage') as HTMLButtonElement;
  const toWinnersBtn = headerContainer.querySelector('.header__btn_winners') as HTMLButtonElement;

  toWinnersBtn.addEventListener('click', async () => {
    const main = document.querySelector('.main') as HTMLElement;
    const garageContainer = document.querySelector('.garage') as HTMLDivElement;

    toGarageBtn.disabled = false;
    toWinnersBtn.disabled = true;

    garageContainer.classList.add('hide');

    main.appendChild(await renderWinnersPage());
  });
}
