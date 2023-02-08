import { Errors } from '../interfaces';
import { checkEngine } from '../services/update/update-car-drive';
import { updateCarEngine } from '../services/update/update-car-engine';
import { MS_IN_SECOND } from './variables';

export async function driveCar(raceContainer: HTMLDivElement, status: string) {
  const carImage = raceContainer.querySelector('.race__car-svg') as SVGElement;
  const trackView = raceContainer.querySelector('.track__view') as HTMLDivElement;
  const id = +raceContainer.id;
  let currentX = 0;
  const endX = trackView.clientWidth - carImage.clientWidth;
  const { distance, velocity } = await updateCarEngine(id, status);
  const duration = Math.ceil(distance / velocity);
  const framesPerSecond = 60;
  const frameCount = (duration / MS_IN_SECOND) * framesPerSecond;
  const movePerTick = (endX - currentX) / frameCount;
  let requestAnimation = null;
  let isEngineCrashed = false;

  async function tick() {
    const isReseted = carImage.classList.contains('reseted');

    currentX += movePerTick;

    if (isReseted) {
      carImage.style.transform = 'translateX(0)';
    } else {
      carImage.style.transform = `translateX(${currentX}px)`;
    }

    if (currentX < endX) {
      requestAnimation = requestAnimationFrame(tick);
      if (isEngineCrashed || isReseted) {
        cancelAnimationFrame(requestAnimation);
      }
    }
  }

  tick();

  if (status !== 'stopped') {
    const driveResponse = await checkEngine(id);
    if (driveResponse.status === Errors.internalServerError) {
      isEngineCrashed = true;
    }
  }

  return {
    id,
    isEngineCrashed,
    time: duration,
  };
}
