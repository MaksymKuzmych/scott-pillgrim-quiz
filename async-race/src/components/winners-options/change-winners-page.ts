import { getWinnersLength } from '../../services/read/read-winners-length';
import { renderWinners } from '../../templates/winners/winners-container';
import { page } from '../../utils/page';
import { winnersOptions } from '../../utils/winners-options';

export function prevBtnListener(winnersOptionsContainer: HTMLDivElement) {
  const nextBtn = winnersOptionsContainer.querySelector(
    '.winners-options__next-btn',
  ) as HTMLButtonElement;
  const prevBtn = winnersOptionsContainer.querySelector(
    '.winners-options__prev-btn',
  ) as HTMLButtonElement;
  const pageNumber = winnersOptionsContainer.querySelector(
    '.winners-options__page_number',
  ) as HTMLSpanElement;

  if (page.winnersPageNumber === 1) {
    prevBtn.disabled = true;
  }

  prevBtn.addEventListener('click', async () => {
    const winnersPage = document.querySelector('.winners-page') as HTMLDivElement;
    const winnersContainer = document.querySelector('.winners') as HTMLDivElement;
    const { sort, order } = winnersOptions;

    if (page.winnersPageNumber > 1) {
      page.winnersPageNumber -= 1;
      nextBtn.disabled = false;

      if (page.winnersPageNumber === 1) {
        prevBtn.disabled = true;
      }
      pageNumber.innerText = String(page.winnersPageNumber);

      const newWinnersContainer = await renderWinners(page.winnersPageNumber, sort, order);

      winnersPage.removeChild(winnersContainer);
      winnersPage.appendChild(newWinnersContainer);
    }
  });
}

async function checkWinnersLastPage(nextBtn: HTMLButtonElement) {
  const winnersQuantity = await getWinnersLength();
  const nextBtnClone = nextBtn;
  const carsPerPage = 7;

  if (winnersQuantity) {
    const lastPage = Math.ceil(+winnersQuantity / carsPerPage);

    if (page.winnersPageNumber === lastPage) {
      nextBtnClone.disabled = true;
    }
  }
}

export function nextBtnListener(winnersOptionsContainer: HTMLDivElement) {
  const nextBtn = winnersOptionsContainer.querySelector(
    '.winners-options__next-btn',
  ) as HTMLButtonElement;
  const prevBtn = winnersOptionsContainer.querySelector(
    '.winners-options__prev-btn',
  ) as HTMLButtonElement;
  const pageNumber = winnersOptionsContainer.querySelector(
    '.winners-options__page_number',
  ) as HTMLSpanElement;

  checkWinnersLastPage(nextBtn);

  nextBtn.addEventListener('click', async () => {
    const winnersPage = document.querySelector('.winners-page') as HTMLDivElement;
    const winnersContainer = document.querySelector('.winners') as HTMLDivElement;
    const winnersQuantity = await getWinnersLength();
    const { sort, order } = winnersOptions;
    const winnersPerPage = 10;

    if (winnersQuantity) {
      const lastPage = Math.ceil(+winnersQuantity / winnersPerPage);

      if (page.winnersPageNumber < lastPage) {
        page.winnersPageNumber += 1;
        prevBtn.disabled = false;

        if (page.winnersPageNumber === lastPage) {
          nextBtn.disabled = true;
        }

        pageNumber.innerText = String(page.winnersPageNumber);

        const newWinnersContainer = await renderWinners(page.winnersPageNumber, sort, order);

        winnersPage.removeChild(winnersContainer);
        winnersPage.appendChild(newWinnersContainer);
      }
    }
  });
}
