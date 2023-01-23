import { getCarsLength } from '../../services/read/read-cars-length';
import { nextBtnListener, prevBtnListener } from './change-garage-page';
import { createCarListener } from './create-car';
import { driveAllCarsListener, resetAllCarsListener } from './drive-all-cars';
import { generateHundredCarsListener } from './generate-hundred-cars';
import { updatePreventDefault } from './update-car';

export async function renderOptions(page: number): Promise<HTMLDivElement> {
  const garageOptionsContainer = document.createElement('div');
  const carsQuantity: string | null = await getCarsLength();

  garageOptionsContainer.classList.add('options');
  garageOptionsContainer.innerHTML = `
<div class="options__create-car create-car">
  <form class="options__form create-car__form">
    <input type="text" class="options__text create-car__text" />
    <input type="color" class="options__color create-car__color" value="#0057b8"/>
    <input type="submit" value="CREATE" class="options__submit create-car__submit options__btn btn" />
  </form>
</div>
<div class="options__update-car update-car">
  <form class="options__form update-car__form">
    <input type="text" class="options__text update-car__text" />
    <input type="color" class="options__color update-car__color" value="#ffd700"/>
    <input type="submit" value="UPDATE" class="options__submit update-car__submit options__btn btn"/>
  </form>
</div>
<div class="options__tools">
  <button class="btn options__btn" id="race">RACE</button>
  <button class="btn options__btn" id="reset" disabled>RESET</button>
  <button class="btn options__btn" id="generate">GENERATE CARS</button>
</div>
<div class="options__info">
  <p class="options__counter">Garage ( <span class="options__counter_span">${carsQuantity}</span> )</p>
  <p class="options__page">Page # <span class="options__page_span">${page}</span></p>
</div>
<div class="options__page-btns">
  <button class="btn options__btn options__prev-btn" id="prev">PREV</button>
  <button class="btn options__btn options__next-btn" id="next">NEXT</button>
</div>
`;

  createCarListener(garageOptionsContainer);
  updatePreventDefault(garageOptionsContainer);
  generateHundredCarsListener(garageOptionsContainer);
  prevBtnListener(garageOptionsContainer);
  nextBtnListener(garageOptionsContainer);
  driveAllCarsListener(garageOptionsContainer);
  resetAllCarsListener(garageOptionsContainer);

  return garageOptionsContainer;
}
