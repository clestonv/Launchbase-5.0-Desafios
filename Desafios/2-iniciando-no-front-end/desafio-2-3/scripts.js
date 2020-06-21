const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');
let modalMaximized = false;

for (let card of cards) {
  card.addEventListener('click', (event) => {
    const cardId = event.target.dataset.id;
    modalOverlay.classList.add('active');
    modalOverlay.querySelector('iframe')
      .src = `https://rocketseat.com.br/${cardId}`;
  });
}

document.querySelector('.close-modal').addEventListener('click', () => {
  modalOverlay.classList.remove('active');
  modalOverlay.querySelector('iframe').src = '';
  modal.style.height = '80%';
  modal.style.width = '80%';
  modalMaximized = false;
});

document.querySelector('.maximize-modal').addEventListener('click', () => {
  if (modalMaximized === false) {
    modal.style.height = '100%';
    modal.style.width = '100%';
    modalMaximized = true;
  } else {
    modal.style.height = '80%';
    modal.style.width = '80%';
    modalMaximized = false;
  }
});