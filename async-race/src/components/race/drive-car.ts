import { IFinishedCar } from '../../interfaces';
import { driveCar } from '../../utils/drive-car';

export function driveCarListener(raceContainer: HTMLDivElement) {
  const driveCarBtn = raceContainer.querySelector('.race__btn_start') as HTMLButtonElement;
  const resetCarBtn = raceContainer.querySelector('.race__btn_stop') as HTMLButtonElement;
  const carImage = raceContainer.querySelector('.race__car-svg') as SVGElement;

  driveCarBtn.addEventListener('click', async () => {
    driveCarBtn.disabled = true;
    resetCarBtn.disabled = false;
    carImage.classList.remove('reseted');
    await driveCar(raceContainer, 'started');
  });
}

export function resetCarListener(raceContainer: HTMLDivElement) {
  const driveCarBtn = raceContainer.querySelector('.race__btn_start') as HTMLButtonElement;
  const resetCarBtn = raceContainer.querySelector('.race__btn_stop') as HTMLButtonElement;
  const carImage = raceContainer.querySelector('.race__car-svg') as SVGElement;

  resetCarBtn.addEventListener('click', async () => {
    await driveCar(raceContainer, 'stopped');
    resetCarBtn.disabled = true;

    const promiseForCar: Promise<IFinishedCar> = new Promise((resolve) => {
      const drive = driveCar(raceContainer, 'stopped');

      resolve(drive);
    });

    promiseForCar.then(() => {
      carImage.classList.add('reseted');
      driveCarBtn.disabled = false;
    });
  });
}
