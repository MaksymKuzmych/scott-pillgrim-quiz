import { IFinishedCar } from '../../interfaces';
import { driveCar } from '../../utils/drive-car';

export function driveCarListener(raceContainer: HTMLDivElement) {
  const driveCarBtn = raceContainer.querySelector('.race__btn_start') as HTMLButtonElement;
  const resetCarBtn = raceContainer.querySelector('.race__btn_stop') as HTMLButtonElement;
  const carImage = raceContainer.querySelector('.race__car-svg') as SVGElement;

  driveCarBtn.addEventListener('click', async () => {
    driveCarBtn.disabled = true;

    carImage.classList.remove('reseted');
    const promiseForCar: Promise<IFinishedCar> = new Promise((resolve) => {
      const drive = driveCar(raceContainer, 'started');

      resolve(drive);
    });

    promiseForCar.then(() => {
      resetCarBtn.disabled = false;
    });
  });
}

export function resetCarListener(raceContainer: HTMLDivElement) {
  const driveCarBtn = raceContainer.querySelector('.race__btn_start') as HTMLButtonElement;
  const resetCarBtn = raceContainer.querySelector('.race__btn_stop') as HTMLButtonElement;
  const carImage = raceContainer.querySelector('.race__car-svg') as SVGElement;

  resetCarBtn.addEventListener('click', async () => {
    carImage.classList.add('reseted');

    await driveCar(raceContainer, 'stopped');

    const promiseForCar: Promise<IFinishedCar> = new Promise((resolve) => {
      const drive = driveCar(raceContainer, 'stopped');

      resolve(drive);
    });

    promiseForCar.then(() => {
      driveCarBtn.disabled = false;
      resetCarBtn.disabled = true;
    });
  });
}
