import { IFinishedCar } from '../../interfaces';
import { checkAllBtnsWithoutHeader, checkAllNecessaryBtns } from '../../utils/check-buttons';
import { driveCar } from '../../utils/drive-car';
import { winnerHandling } from '../../utils/winner-handling';

export function driveAllCarsListener(garageOptionsContainer: HTMLDivElement) {
  const raceBtn = garageOptionsContainer.querySelector('#race') as HTMLButtonElement;
  const resetBtn = garageOptionsContainer.querySelector('#reset') as HTMLButtonElement;

  raceBtn.addEventListener('click', async () => {
    const allRaces = document.querySelectorAll('.race') as NodeListOf<HTMLDivElement>;
    const carImages = document.querySelectorAll('.race__car-svg') as NodeListOf<SVGElement>;
    const promisesForAllCars: Promise<IFinishedCar>[] = [];

    checkAllBtnsWithoutHeader(true);
    resetBtn.disabled = false;

    carImages.forEach((image) => {
      image.classList.remove('reseted');
    });

    allRaces.forEach((raceContainer) => {
      const promiseForCar: Promise<IFinishedCar> = new Promise((resolve) => {
        resolve(driveCar(raceContainer, 'started'));
      });
      promisesForAllCars.push(promiseForCar);
    });

    await winnerHandling(promisesForAllCars);
  });
}

export function resetAllCarsListener(garageOptionsContainer: HTMLDivElement) {
  const resetBtn = garageOptionsContainer.querySelector('#reset') as HTMLButtonElement;

  resetBtn.addEventListener('click', () => {
    const allRaces = document.querySelectorAll('.race') as NodeListOf<HTMLDivElement>;
    const carImages = document.querySelectorAll('.race__car-svg') as NodeListOf<SVGElement>;
    const headerInfo = document.querySelector('.header__info') as HTMLParagraphElement;

    headerInfo.classList.remove('hide');
    resetBtn.disabled = true;

    carImages.forEach((image) => {
      image.classList.add('reseted');
    });

    allRaces.forEach(async (raceContainer) => {
      await driveCar(raceContainer, 'stopped');
    });

    setTimeout(() => {
      checkAllBtnsWithoutHeader(false);
      checkAllNecessaryBtns(true);
      headerInfo.classList.add('hide');
    }, 6000);
  });
}
