import { IFinishedCar } from '../interfaces';

export function findWinner(carsArray: IFinishedCar[]): IFinishedCar {
  const finishedCars = carsArray.filter((car) => car.isEngineCrashed !== true);
  const winner = finishedCars.sort((a, b) => a.time - b.time)[0];

  return winner;
}
