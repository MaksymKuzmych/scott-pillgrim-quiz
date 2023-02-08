import { renderOptions } from '../../components/garage-options/render-garage-options';
import { Race } from '../../components/race/render-race';
import { getCarsByPage } from '../../services/read/read-cars-by-page';

export async function renderGarage(page: number) {
  const garage = document.createElement('div');
  const main = document.querySelector('.main') as HTMLElement;

  garage.classList.add('garage');
  garage.appendChild(await renderOptions(page));

  const cars = await getCarsByPage(page);

  cars.forEach(({ name, color, id }) => {
    const race = new Race(name, color, id);

    garage.appendChild(race.renderRace());
  });

  main.innerHTML = '';
  main.appendChild(garage);
}
