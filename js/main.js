// document.addEventListener("DOMContentLoaded", function(event) {
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const closeBtn = document.querySelector('.modal__close');
//   const switchModal = () => {
//     modal.classList.toggle('modal--visible')
//   }

//   modalBtn.forEach(element =>{
//     element.addEventListener('click', switchModal);
//   });

//   closeBtn.addEventListener('click', switchModal)

//   window.onclick = (event) => {
//     if (event.target == modal) {
//       modal.classList.toggle('modal--visible')
//     }
//   }
//   document.addEventListener('keyup', function(e) {
//     if(e.keyCode === 27) {
//       modal.classList.remove('modal--visible')
//     }
//   })
// });

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible')
  });
  $(modal).on('click', function(e) {
    if(e.target === this) {
    modal.toggleClass('modal--visible')
    }
  })
  $(document).on('keyup', function(e) {
    if(e.keyCode === 27) {
      modal.removeClass('modal--visible')
    }
  })
});