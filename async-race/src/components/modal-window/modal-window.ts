import { closeModalListener } from './close-modal';

export function renderModalWindow(name: string): HTMLElement {
  const modalContainer = document.createElement('div');

  modalContainer.classList.add('modal');
  modalContainer.innerHTML = `
    <p class="modal__text">${name} won the race!</p>
    `;

  closeModalListener(modalContainer);

  return modalContainer;
}
