import { getWinnersLength } from '../../services/read/read-winners-length';
import { nextBtnListener, prevBtnListener } from './change-winners-page';
import { page } from '../../utils/page';
import { sortByTimeListener, sortByWinsListener } from './sort-winners';

export async function renderWinnersOptions() {
  const winnersOptionsContainer = document.createElement('div');
  const winnersCount: string | null = await getWinnersLength();
  const { winnersPageNumber } = page;

  winnersOptionsContainer.classList.add('winners-options');
  winnersOptionsContainer.innerHTML = `
  <h2 class="winners-options__title">Winners ( ${winnersCount} )</h2>
  <h3 class="winners-options__page">Page #
    <span class="winners-options__page_number">${winnersPageNumber}</span>
  </h3>
  <div class="winners-options__page-btns">
    <button class="btn winners-options__btn winners-options__prev-btn">PREV</button>
    <button class="btn winners-options__btn winners-options__next-btn">NEXT</button>
  </div>
  <div class="winners-options__info">
    <p class="winners-options__number">№</p>
    <p class="winners-options__car">Car</p>
    <p class="winners-options__name">Name</p>
    <button class="winners-options__wins">Wins <span class="winners-options__wins_arrow"> </span></button>
    <button class="winners-options__time">Best time (seconds) <span class="winners-options__time_arrow"> </span></button>
  </div>
`;

  prevBtnListener(winnersOptionsContainer);
  nextBtnListener(winnersOptionsContainer);
  sortByWinsListener(winnersOptionsContainer);
  sortByTimeListener(winnersOptionsContainer);

  return winnersOptionsContainer;
}
