import { driveCarListener, resetCarListener } from './drive-car';
import { removeCarListener } from './remove-car';
import { renderCar } from '../../utils/render-car';
import { renderFlag } from './render-flag';
import { selectCarListener } from './select-car';

export class Race {
  name: string;

  color: string;

  id: number;

  constructor(name: string, color: string, id: number) {
    this.name = name;
    this.color = color;
    this.id = id;
  }

  renderRace(): HTMLDivElement {
    const raceContainer = document.createElement('div');

    raceContainer.id = String(this.id);
    raceContainer.classList.add('race');
    raceContainer.innerHTML = `
  <div class="race__tools">
    <button class="race__btn race__btn_select btn" data-id="${this.id}">SELECT</button>
    <button class="race__btn race__btn_remove btn" data-id="${this.id}">REMOVE</button>
    <p class="race__car-name">${this.name}</p>
  </div>
  <div class="race__track track">
    <div class="track__btns">
      <button class="race__btn race__btn_start btn" data-id="${this.id}">A</button>
      <button class="race__btn race__btn_stop btn" data-id="${this.id}" disabled>B</button>
    </div>
    <div class="track__view">
      ${renderCar(this.color, 'race__car-svg')}
      ${renderFlag()}
    </div>
  </div>
  `;

    removeCarListener(raceContainer);
    selectCarListener(raceContainer);
    driveCarListener(raceContainer);
    resetCarListener(raceContainer);

    return raceContainer;
  }
}
