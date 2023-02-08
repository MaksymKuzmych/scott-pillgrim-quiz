export function toGarageListener(headerContainer: HTMLDivElement) {
  const toGarageBtn = headerContainer.querySelector('.header__btn_garage') as HTMLButtonElement;
  const toWinnersBtn = headerContainer.querySelector('.header__btn_winners') as HTMLButtonElement;

  toGarageBtn.addEventListener('click', () => {
    const main = document.querySelector('.main') as HTMLElement;
    const garageContainer = document.querySelector('.garage') as HTMLDivElement;
    const winnersContainer: HTMLDivElement | null = document.querySelector('.winners-page');

    toGarageBtn.disabled = true;
    toWinnersBtn.disabled = false;

    if (winnersContainer) {
      main.removeChild(winnersContainer);
    }

    garageContainer.classList.remove('hide');
  });
}
