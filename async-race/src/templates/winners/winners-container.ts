import { Winner } from '../../components/winner/render-winner';
import { renderWinnersOptions } from '../../components/winners-options/render-winners-options';
import { getCar } from '../../services/read/read-car';
import { getWinners } from '../../services/read/read-winners';
import { page } from '../../utils/page';
import { winnersOptions } from '../../utils/winners-options';

export async function renderWinners(pageWinners: number, sort: string, order: string) {
  const winnersContainer = document.createElement('div');
  const winners = await getWinners(pageWinners, sort, order);

  winnersContainer.classList.add('winners');

  winners.forEach(async (winner, index) => {
    const { id, wins, time } = winner;
    const { name, color } = await getCar(id);
    const winnerObj = new Winner(name, color, id);
    const numberInList = index + 1 + (pageWinners - 1) * 10;

    winnersContainer.appendChild(winnerObj.renderWinner(numberInList, wins, time));
  });

  return winnersContainer;
}

export async function renderWinnersPage() {
  const winnersPage = document.createElement('div');
  const { winnersPageNumber } = page;
  const { sort, order } = winnersOptions;

  winnersPage.classList.add('winners-page');
  winnersPage.appendChild(await renderWinnersOptions());
  winnersPage.appendChild(await renderWinners(winnersPageNumber, sort, order));

  return winnersPage;
}
