import { IFinishedCar } from '../../interfaces';
import { driveCar } from '../../utils/drive-car';
import { winnerHandler } from '../../utils/winner-handling';

export function driveAllCarsListener(garageOptionsContainer: HTMLDivElement) {
  const raceBtn = garageOptionsContainer.querySelector('#race') as HTMLButtonElement;

  raceBtn.addEventListener('click', async () => {
    const allRaces = document.querySelectorAll('.race') as NodeListOf<HTMLDivElement>;
    const carImages = document.querySelectorAll('.race__car-svg') as NodeListOf<SVGElement>;
    const promisesForAllCars: Promise<IFinishedCar>[] = [];

    raceBtn.disabled = true;

    carImages.forEach((image) => {
      image.classList.remove('reseted');
    });

    allRaces.forEach((raceContainer) => {
      // eslint-disable-next-line no-async-promise-executor
      const promiseForCar: Promise<IFinishedCar> = new Promise(async (resolve) => {
        const drive = await driveCar(raceContainer, 'started');

        if (!drive.isEngineCrashed) {
          resolve(drive);
        }
      });

      promisesForAllCars.push(promiseForCar);
    });

    await winnerHandler(promisesForAllCars);
  });
}

export function resetAllCarsListener(garageOptionsContainer: HTMLDivElement) {
  const raceBtn = garageOptionsContainer.querySelector('#race') as HTMLButtonElement;
  const resetBtn = garageOptionsContainer.querySelector('#reset') as HTMLButtonElement;

  resetBtn.addEventListener('click', () => {
    const allRaces = document.querySelectorAll('.race') as NodeListOf<HTMLDivElement>;
    const carImages = document.querySelectorAll('.race__car-svg') as NodeListOf<SVGElement>;
    const promisesForAllCars: Promise<IFinishedCar>[] = [];

    resetBtn.disabled = true;

    carImages.forEach((image) => {
      image.classList.add('reseted');
    });

    allRaces.forEach((raceContainer) => {
      const promiseForCar: Promise<IFinishedCar> = new Promise((resolve) => {
        resolve(driveCar(raceContainer, 'stopped'));
      });

      promisesForAllCars.push(promiseForCar);
    });

    Promise.all<Promise<IFinishedCar>[]>(promisesForAllCars).then(() => {
      raceBtn.disabled = false;
    });
  });
}
