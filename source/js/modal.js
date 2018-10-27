var modalForm = document.querySelector('.modal-basket');
var modalOverlay = document.querySelector('.modal-overlay');
var modalOpen = document.querySelector('.modal-open');
var modalClose = document.querySelector('.modal-close');

modalOpen.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalForm.classList.add('modal-basket--open');
  modalOverlay.classList.add('modal-overlay--open');
});

modalClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalForm.classList.remove('modal-basket--open');
  modalOverlay.classList.remove('modal-overlay--open');
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalForm.classList.contains("modal-basket--open")) {
      modalForm.classList.remove("modal-basket--open");
      modalOverlay.classList.remove("modal-overlay--open");
    }
  }
});
