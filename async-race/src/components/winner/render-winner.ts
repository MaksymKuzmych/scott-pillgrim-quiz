import { renderCar } from '../../utils/render-car';

export class Winner {
  name: string;

  color: string;

  id: number;

  constructor(name: string, color: string, id: number) {
    this.name = name;
    this.color = color;
    this.id = id;
  }

  renderWinner(winnerNumber: number, wins: number, time: number): HTMLDivElement {
    const winnerContainer = document.createElement('div');

    winnerContainer.id = String(this.id);
    winnerContainer.classList.add('winner');
    winnerContainer.innerHTML = `
      <p class="winner__number">${winnerNumber}</p>
      ${renderCar(this.color, 'winner__car-svg')}
      <p class="winner__name">${this.name}</p>
      <p class="winner__wins">${wins}</p>
      <p class="winner__time">${time}</p>
    `;

    return winnerContainer;
  }
}
