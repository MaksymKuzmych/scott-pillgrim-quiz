export function closeModalListener(modalContainer: HTMLDivElement) {
  const body = document.querySelector('.body') as HTMLBodyElement;

  modalContainer.addEventListener('click', () => {
    body.removeChild(modalContainer);
  });
}
