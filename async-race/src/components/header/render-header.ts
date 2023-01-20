export function renderHeader(): HTMLElement {
  const headerContainer = document.createElement('div');

  headerContainer.classList.add('header');
  headerContainer.innerHTML = `
  <button class="header__btn header__btn_garage btn">Garage</button>
  <button class="header__btn header__btn_winners btn">Winners</button>
  `;

  return headerContainer;
}
