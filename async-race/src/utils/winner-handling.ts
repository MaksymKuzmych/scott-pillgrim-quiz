import { renderModalWindow } from '../components/modal-window/modal-window';
import { Errors, IFinishedCar, IWinner } from '../interfaces';
import { postWinner } from '../services/create/create-winner';
import { getCar } from '../services/read/read-car';
import { getWinner } from '../services/read/read-winner';
import { updateWinner } from '../services/update/update-winner';
import { MS_IN_SECOND } from './variables';

export async function winnerHandler(winner: IFinishedCar) {
  const resetBtn = document.querySelector('#reset') as HTMLButtonElement;
  const body = document.querySelector('.body') as HTMLBodyElement;
  const { id, time } = winner;
  const searchWinnerResponse = await getWinner(id);
  const timeInSeconds = +(time / MS_IN_SECOND).toFixed(2);

  resetBtn.disabled = false;

  if (searchWinnerResponse.status === Errors.NotFound) {
    await postWinner(id, timeInSeconds);
  } else {
    const searchWinnerData: IWinner = await searchWinnerResponse.json();
    const winsInDB = searchWinnerData.wins;
    const timeInDB = searchWinnerData.time;
    const resultTime = Math.min(timeInSeconds, timeInDB);

    await updateWinner(id, winsInDB + 1, resultTime);
  }

  const winnerCar = await getCar(id);
  body.appendChild(renderModalWindow(winnerCar.name));
}
