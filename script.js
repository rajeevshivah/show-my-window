'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const hide = () => {
  modal.classList.remove('show-modal');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  console.log(btnOpenModal[i].textContent);
  btnOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    modal.classList.add('show-modal');
    console.log('btn-clicked');
  });
}

btnCloseModal.addEventListener('click', function () {
  hide();
});

overlay.addEventListener('click', function () {
  hide();
});

document.addEventListener('keydown', function (e) {
  !modal.classList.contains('hidden') ? (e.key === 'Escape' ? hide() : '') : '';
});
