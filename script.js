"use strict";

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnOpenModal = document.querySelectorAll('.btn--show-modal');
const footerBtn = document.querySelectorAll('.footer_btn');



const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };
  const btnFoot = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
  
  const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };
  const closeFoot = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  
  btnOpenModal.forEach((btn) => btn.addEventListener('click', openModal));
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeFoot);
  footerBtn.forEach((btn) => btn.addEventListener('click', btnFoot));
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

