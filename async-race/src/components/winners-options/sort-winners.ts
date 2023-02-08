import { Order, Sort } from '../../interfaces';
import { renderWinners } from '../../templates/winners/winners-container';
import { page } from '../../utils/page';
import { winnersOptions } from '../../utils/winners-options';

async function sortByOption(
  btnSpanContainer: HTMLSpanElement,
  btnSpanText: string,
  sortOption: Sort,
  orderOption: Order,
) {
  const winnersPage = document.querySelector('.winners-page') as HTMLDivElement;
  const winnersContainer = document.querySelector('.winners') as HTMLDivElement;
  const btnSpan = btnSpanContainer;

  btnSpan.innerText = btnSpanText;
  winnersOptions.sort = sortOption;
  winnersOptions.order = orderOption;
  winnersPage.removeChild(winnersContainer);
  winnersPage.appendChild(await renderWinners(page.winnersPageNumber, sortOption, orderOption));
}

async function sortHandler(btnSpan: HTMLSpanElement, sortOption: Sort) {
  switch (btnSpan.innerText) {
    case '↑':
      await sortByOption(btnSpan, '↓', sortOption, 'DESC');
      break;
    case '↓':
      await sortByOption(btnSpan, '↑', sortOption, 'ASC');
      break;
    default:
      await sortByOption(btnSpan, '↓', sortOption, 'DESC');
  }
}

export async function sortByWinsListener(winnersOptionsContainer: HTMLDivElement) {
  const winsBtn = winnersOptionsContainer.querySelector(
    '.winners-options__wins',
  ) as HTMLButtonElement;

  winsBtn.addEventListener('click', async () => {
    const winsBtnSpan = winsBtn.querySelector('.winners-options__wins_arrow') as HTMLSpanElement;
    const timeBtnSpan = winnersOptionsContainer.querySelector(
      '.winners-options__time_arrow',
    ) as HTMLSpanElement;

    timeBtnSpan.innerText = ' ';

    sortHandler(winsBtnSpan, 'wins');
  });
}

export async function sortByTimeListener(winnersOptionsContainer: HTMLDivElement) {
  const timeBtn = winnersOptionsContainer.querySelector(
    '.winners-options__time',
  ) as HTMLButtonElement;

  timeBtn.addEventListener('click', async () => {
    const timeBtnSpan = timeBtn.querySelector('.winners-options__time_arrow') as HTMLSpanElement;
    const winBtnSpan = winnersOptionsContainer.querySelector(
      '.winners-options__wins_arrow',
    ) as HTMLSpanElement;

    winBtnSpan.innerText = ' ';

    sortHandler(timeBtnSpan, 'time');
  });
}
