import { Winner } from '../../components/winner/render-winner';
import { renderWinnersOptions } from '../../components/winners-options/render-winners-options';
import { getCar } from '../../services/read/read-car';
import { getWinners } from '../../services/read/read-winners';

export async function renderWinners(page: number, sort: string, order: string) {
  const winnersContainer = document.createElement('div');
  const winners = await getWinners(page, sort, order);

  winnersContainer.classList.add('winners');

  winners.forEach(async (winner, index) => {
    const { id, wins, time } = winner;
    const { name, color } = await getCar(id);
    const winnerObj = new Winner(name, color, id);
    const numberInList = index + 1 + (page - 1) * 10;

    winnersContainer.appendChild(winnerObj.renderWinner(numberInList, wins, time));
  });

  return winnersContainer;
}

export async function renderWinnersPage() {
  const winnersPage = document.createElement('div');

  winnersPage.classList.add('winners-page');
  winnersPage.appendChild(await renderWinnersOptions());
  winnersPage.appendChild(await renderWinners(1, 'id', 'ASC'));

  return winnersPage;
}
