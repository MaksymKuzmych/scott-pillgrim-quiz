import { renderFooter } from './components/footer/render-footer';
import { renderHeader } from './components/header/render-header';
import { renderGarage } from './templates/garage/garage-container';
import { page } from './utils/page';

import './global.scss';

const body = document.querySelector('.body') as HTMLBodyElement;
const main = document.createElement('main');

main.classList.add('main');

body.appendChild(renderHeader());
body.appendChild(main);
body.appendChild(renderFooter());

renderGarage(page.garagePageNumber);
