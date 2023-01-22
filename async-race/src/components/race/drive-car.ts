import { driveCar } from '../../utils/drive-car';

export function driveCarListener(raceContainer: HTMLDivElement) {
  const driveCarBtn = raceContainer.querySelector('.race__btn_start') as HTMLButtonElement;
  const carImage = raceContainer.querySelector('.race__car-svg') as SVGElement;

  driveCarBtn.addEventListener('click', () => {
    carImage.classList.remove('reseted');
    driveCar(raceContainer, 'started');
  });
}

export function resetCarListener(raceContainer: HTMLDivElement) {
  const stopCarBtn = raceContainer.querySelector('.race__btn_stop') as HTMLButtonElement;
  const carImage = raceContainer.querySelector('.race__car-svg') as SVGElement;

  stopCarBtn.addEventListener('click', () => {
    carImage.classList.add('reseted');
    driveCar(raceContainer, 'stopped');
  });
}
