import { Errors, IFinishedCar, IWinner } from '../interfaces';
import { postWinner } from '../services/create/create-winner';
import { getWinner } from '../services/read/read-winner';
import { updateWinner } from '../services/update/update-winner';
import { findWinner } from './find-winner';

export async function winnerHandling(promisesForAllCars: Promise<IFinishedCar>[]) {
  Promise.all<IFinishedCar>(promisesForAllCars)
    .then((data: IFinishedCar[]) => findWinner(data))
    .then(async (data: IFinishedCar) => {
      const { id, time } = data;
      const searchWinnerResponse = await getWinner(id);

      if (searchWinnerResponse.status === Errors.NotFound) {
        postWinner(id, time);
      } else {
        const searchWinnerData: IWinner = await searchWinnerResponse.json();
        const winsInDB = searchWinnerData.wins;
        const timeInDB = searchWinnerData.time;
        const resultTime = Math.min(time, timeInDB);

        updateWinner(id, winsInDB + 1, resultTime);
      }
    });
}
