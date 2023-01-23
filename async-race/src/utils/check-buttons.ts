import { page } from './page';

export function checkAllBtnsWithoutHeader(isNeedDisable: boolean) {
  const allBtns = document.querySelectorAll('.btn') as NodeListOf<HTMLButtonElement>;

  allBtns.forEach((btn) => {
    const button = btn;
    if (!button.classList.contains('header__btn')) {
      button.disabled = isNeedDisable;
    }
  });
}

export function checkAllNecessaryBtns(isNeedDisable: boolean) {
  const resetBtn = document.querySelector('#reset') as HTMLButtonElement;
  const prevBtn = document.querySelector('.options__prev-btn') as HTMLButtonElement;
  const stopCarBtns = document.querySelectorAll('.race__btn_stop') as NodeListOf<HTMLButtonElement>;
  const necessaryBtns = [resetBtn, ...stopCarBtns];

  if (page.garagePageNumber === 1) {
    prevBtn.disabled = isNeedDisable;
  }

  necessaryBtns.forEach((btn) => {
    const button = btn;
    button.disabled = isNeedDisable;
  });
}
