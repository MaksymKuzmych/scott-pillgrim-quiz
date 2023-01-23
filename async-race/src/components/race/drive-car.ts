import { checkAllBtnsWithoutHeader, checkAllNecessaryBtns } from '../../utils/check-buttons';
import { driveCar } from '../../utils/drive-car';

export function driveCarListener(raceContainer: HTMLDivElement) {
  const driveCarBtn = raceContainer.querySelector('.race__btn_start') as HTMLButtonElement;
  const stopCarBtn = raceContainer.querySelector('.race__btn_stop') as HTMLButtonElement;
  const carImage = raceContainer.querySelector('.race__car-svg') as SVGElement;

  driveCarBtn.addEventListener('click', async () => {
    checkAllBtnsWithoutHeader(true);
    stopCarBtn.disabled = false;
    carImage.classList.remove('reseted');
    await driveCar(raceContainer, 'started');
  });
}

export function resetCarListener(raceContainer: HTMLDivElement) {
  const stopCarBtn = raceContainer.querySelector('.race__btn_stop') as HTMLButtonElement;
  const carImage = raceContainer.querySelector('.race__car-svg') as SVGElement;

  stopCarBtn.addEventListener('click', async () => {
    const headerInfo = document.querySelector('.header__info') as HTMLParagraphElement;

    headerInfo.classList.remove('hide');
    carImage.classList.add('reseted');

    await driveCar(raceContainer, 'stopped');

    setTimeout(() => {
      checkAllBtnsWithoutHeader(false);
      checkAllNecessaryBtns(true);
      headerInfo.classList.add('hide');
    }, 3000);
  });
}
