'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden'); // remove the hidden property applied to the CSS to hide the modal
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden'); // adss the hidden property to hide the modal
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key); // shows the keyboard key that is pressed.

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
