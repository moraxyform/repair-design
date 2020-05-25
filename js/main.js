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

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible')
  });
  $(modal).on('click', function (e) {
    if (e.target === this) {
      modal.toggleClass('modal--visible')
    }
  })
  $(document).on('keyup', function (e) {
    if (e.keyCode === 27) {
      modal.removeClass('modal--visible')
    }
  })



  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init();

  //Валидация формы
  $('.modal__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    errorPlacement: function(even,types) {
      if ("checkbox" == types.attr("type")) {
        return types.next("label").append(even);
      } else {
        even.insertAfter($(types))
      }
    },
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      policyCheckbox: "required",
      userEmail: {
        required: true,
        email: true
      }
    },//Сообщения
    messages: {
      userName: {
        required: "Поле ввода имени - обязательное",
        minlength: "Имя должно иметь не меньше двух символов"
      },
      userPhone: "Поле ввода номера телефона - обязательное",
      policyCheckbox: "Подтвердите соглашение",
      userEmail: {
        required: "Поле ввода email - обязательное",
        email: "Название почты должно выглядеть примерно так: name@domain.com"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера:' + response);
          alert('Форма отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        },
        error: function (response) {
          console.error('ошибка запроса' + responce);
        }
      });
    }
  });
  $('.control__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    errorPlacement: function(even,types) {
      if ("checkbox" == types.attr("type")) {
        return types.next("label").append(even);
      } else {
        even.insertAfter($(types))
      }
    },
    rules: {
      controlUserName: {
        required: true,
        minlength: 2
      },
      controlUserPhone: "required",
      controlCheckbox: "required",
      controlUserEmail: {
        required: true,
        email: true
      }
    },//Сообщения
    messages: {
      controlUserName: {
        required: "Поле ввода имени - обязательное",
        minlength: "Имя должно иметь не меньше двух символов"
      },
      controlUserPhone: "Поле ввода номера телефона - обязательное",
      controlCheckbox: "Подтвердите соглашение",
      controlUserEmail: {
        required: "Поле ввода email - обязательное",
        email: "Название почты должно выглядеть примерно так: name@domain.com"
      }
    }
  });
  $('.footer__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    errorPlacement: function(even,types) {
      if ("checkbox" == types.attr("type")) {
        return types.next("label").append(even);
      } else {
        even.insertAfter($(types))
      }
    },
    rules: {
      footerName: {
        required: true,
        minlength: 2
      },
      footerPhone: "required",
      footerCheckbox: "required",
      footerQuestion: "required",
      footerEmail: {
        required: true,
        email: true
      }
    },//Сообщения
    messages: {
      footerName: {
        required: "Поле ввода имени - обязательное",
        minlength: "Имя должно иметь не меньше двух символов"
      },
      footerPhone: "Поле ввода номера телефона - обязательное",
      footerQuestion: "Задайте свой вопрос",
      footerCheckbox: "Подтвердите соглашение",
      footerEmail: {
        required: "Поле ввода email - обязательное",
        email: "Название почты должно выглядеть примерно так: name@domain.com"
      }
    }
  });
  //маска для номера телефона

  $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "Ваш номер телефона:"})

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [47.244729, 39.723187],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис',
            balloonContent: 'Вход со двора'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/marker.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });



    myMap.geoObjects
        .add(myPlacemark);
});
});