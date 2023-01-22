import { IFinishedCar } from '../../interfaces';
import { driveCar } from '../../utils/drive-car';
import { winnerHandling } from '../../utils/winner-handling';

export function driveAllCarsListener(optionsContainer: HTMLDivElement) {
  const raceBtn = optionsContainer.querySelector('#race') as HTMLButtonElement;

  raceBtn.addEventListener('click', async () => {
    const allRaces = document.querySelectorAll('.race') as NodeListOf<HTMLDivElement>;
    const carImages = document.querySelectorAll('.race__car-svg') as NodeListOf<SVGElement>;

    carImages.forEach((image) => {
      image.classList.remove('reseted');
    });

    const promisesForAllCars: Promise<IFinishedCar>[] = [];
    allRaces.forEach((raceContainer) => {
      const promiseForCar: Promise<IFinishedCar> = new Promise((resolve) => {
        resolve(driveCar(raceContainer, 'started'));
      });
      promisesForAllCars.push(promiseForCar);
    });

    await winnerHandling(promisesForAllCars);
  });
}

export function resetAllCarsListener(optionsContainer: HTMLDivElement) {
  const resetBtn = optionsContainer.querySelector('#reset') as HTMLButtonElement;

  resetBtn.addEventListener('click', () => {
    const allRaces = document.querySelectorAll('.race') as NodeListOf<HTMLDivElement>;
    const carImages = document.querySelectorAll('.race__car-svg') as NodeListOf<SVGElement>;

    carImages.forEach((image) => {
      image.classList.add('reseted');
    });

    allRaces.forEach((raceContainer) => {
      driveCar(raceContainer, 'stopped');
    });
  });
}
