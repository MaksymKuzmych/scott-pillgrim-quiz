import { getWinnersLength } from '../../services/read/read-winners-length';
import { renderWinners } from '../../templates/winners/winners-container';
import { page } from '../../utils/page';
import { winnersOptions } from '../../utils/winners-options';

export function prevBtnListener(winnersOptionsContainer: HTMLDivElement) {
  const prevBtn = winnersOptionsContainer.querySelector(
    '.winners-options__prev-btn',
  ) as HTMLButtonElement;

  const pageNumber = winnersOptionsContainer.querySelector(
    '.winners-options__page_number',
  ) as HTMLSpanElement;

  prevBtn.addEventListener('click', async () => {
    const winnersPage = document.querySelector('.winners-page') as HTMLDivElement;
    const winnersContainer = document.querySelector('.winners') as HTMLDivElement;
    const { sort, order } = winnersOptions;

    if (page.winnersPageNumber > 1) {
      page.winnersPageNumber -= 1;
      pageNumber.innerText = String(page.winnersPageNumber);

      const newWinnersContainer = await renderWinners(page.winnersPageNumber, sort, order);

      winnersPage.removeChild(winnersContainer);
      winnersPage.appendChild(newWinnersContainer);
    }
  });
}

export function nextBtnListener(winnersOptionsContainer: HTMLDivElement) {
  const nextBtn = winnersOptionsContainer.querySelector(
    '.winners-options__next-btn',
  ) as HTMLButtonElement;

  const pageNumber = winnersOptionsContainer.querySelector(
    '.winners-options__page_number',
  ) as HTMLSpanElement;

  nextBtn.addEventListener('click', async () => {
    const winnersPage = document.querySelector('.winners-page') as HTMLDivElement;
    const winnersContainer = document.querySelector('.winners') as HTMLDivElement;
    const winnersQuantity = await getWinnersLength();
    const { sort, order } = winnersOptions;

    if (winnersQuantity) {
      const lastPage = Math.ceil(+winnersQuantity / 10);

      if (page.winnersPageNumber < lastPage) {
        page.winnersPageNumber += 1;
        pageNumber.innerText = String(page.winnersPageNumber);

        const newWinnersContainer = await renderWinners(page.winnersPageNumber, sort, order);

        winnersPage.removeChild(winnersContainer);
        winnersPage.appendChild(newWinnersContainer);
      }
    }
  });
}
