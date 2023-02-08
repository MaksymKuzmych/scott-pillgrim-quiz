import { IFinishedCar } from '../../interfaces';
import { driveCar } from '../../utils/drive-car';
import { winnerHandler } from '../../utils/winner-handling';

export function driveAllCarsListener(garageOptionsContainer: HTMLDivElement) {
  const raceBtn = garageOptionsContainer.querySelector('#race') as HTMLButtonElement;

  raceBtn.addEventListener('click', async () => {
    const allRaces = document.querySelectorAll('.race') as NodeListOf<HTMLDivElement>;
    const carImages = document.querySelectorAll('.race__car-svg') as NodeListOf<SVGElement>;
    let winner: IFinishedCar | null = null;

    raceBtn.disabled = true;

    carImages.forEach((image) => {
      image.classList.remove('reseted');
    });

    allRaces.forEach(async (raceContainer) => {
      const drive = await driveCar(raceContainer, 'started');
      if (!drive.isEngineCrashed && !winner) {
        winner = drive;
        winnerHandler(winner);
      }
    });
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
