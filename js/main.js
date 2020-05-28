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
    errorPlacement: function (even, types) {
      if ("checkbox" == types.attr("type")) {
        return types.next("label").append(even);
      } else {
        even.insertAfter($(types))
      }
    },
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 10
      },
      userPhone: {
        minlength: 10,
        required: !0
      },
      policyCheckbox: "required",
      userEmail: {
        required: true,
        email: true
      }
    }, //Сообщения
    messages: {
      userName: {
        required: "Поле ввода имени - обязательное",
        minlength: "Имя должно иметь не меньше двух символов",
        maxlength: "Имя должно иметь не больше 15 символов"
      },
      userPhone: {
        required: "Поле ввода номера телефона - обязательное",
        minlength: "Введите полностью номер телефона"
      },
      policyCheckbox: "Подтвердите соглашение",
      userEmail: {
        required: "Поле ввода email - обязательное",
        email: "Название почты должно выглядеть примерно так: name@domain.com"
      }
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера:' + response);
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          $('.js-overlay-thank-you').fadeIn();
          $(this).find('input').val('');
        },
        error: function (response) {
          console.error('ошибка запроса' + responce);
        }
      });
    }
  });






  // Закрыть попап «спасибо»
  $('.js-close-thank-you').click(function() { // по клику на крестик
    $('.js-overlay-thank-you').fadeOut();
  });
  
  $(document).mouseup(function (e) { // по клику вне попапа
      var popup = $('.popup');
      if (e.target!=popup[0]&&popup.has(e.target).length === 0){
          $('.js-overlay-thank-you').fadeOut();
      }
  });
  

  $('.control__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    errorPlacement: function (even, types) {
      if ("checkbox" == types.attr("type")) {
        return types.next("label").append(even);
      } else {
        even.insertAfter($(types))
      }
    },
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: !0,
        minlength: 10
      },
      policyCheckbox: "required",
    }, //Сообщения
    messages: {
      userName: {
        required: "Поле ввода имени - обязательное",
        minlength: "Имя должно иметь не меньше двух символов",
        maxlength: "Имя должно иметь не больше 15 символов"
      },
      userPhone: {
        required: "Поле ввода номера телефона - обязательное",
        minlength: "Введите полностью номер телефона"
      },
      policyCheckbox: "Подтвердите соглашение",
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера:' + response);
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          $('.js-overlay-thank-you').fadeIn();
          $(this).find('input').val('');
        },
        error: function (response) {
          console.error('ошибка запроса' + responce);
        }
      });
    }
  });






  // Закрыть попап «спасибо»
  $('.js-close-thank-you').click(function() { // по клику на крестик
    $('.js-overlay-thank-you').fadeOut();
  });
  
  $(document).mouseup(function (e) { // по клику вне попапа
      var popup = $('.popup');
      if (e.target!=popup[0]&&popup.has(e.target).length === 0){
          $('.js-overlay-thank-you').fadeOut();
      }
  });
  

  $('.footer__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    errorPlacement: function (even, types) {
      if ("checkbox" == types.attr("type")) {
        return types.next("label").append(even);
      } else {
        even.insertAfter($(types))
      }
    },
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: !0,
        minlength: 10
      },
      policyCheckbox: "required",
      userQuestion: "required",
      userEmail: {
        required: true,
        email: true
      }
    }, //Сообщения
    messages: {
      userName: {
        required: "Поле ввода имени - обязательное",
        minlength: "Имя должно иметь не меньше двух символов",
        maxlength: "Имя должно иметь не больше 15 символов"
      },
      userPhone: {
        required: "Поле ввода номера телефона - обязательное",
        minlength: "Введите полностью номер телефона"
      },
      policyCheckbox: "Подтвердите соглашение",
      userQuestion: "Задайте свой вопрос",
      userEmail: {
        required: "Поле ввода email - обязательное",
        email: "Название почты должно выглядеть примерно так: name@domain.com"
      }
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера:' + response);
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          $('.js-overlay-thank-you').fadeIn();
          $(this).find('input').val('');
        },
        error: function (response) {
          console.error('ошибка запроса' + responce);
        }
      });
    }
  });






  // Закрыть попап «спасибо»
  $('.js-close-thank-you').click(function() { // по клику на крестик
    $('.js-overlay-thank-you').fadeOut();
  });
  
  $(document).mouseup(function (e) { // по клику вне попапа
      var popup = $('.popup');
      if (e.target!=popup[0]&&popup.has(e.target).length === 0){
          $('.js-overlay-thank-you').fadeOut();
      }
  });
  



  
  //маска для номера телефона

  $('[type=tel]').mask('+7(000) 00-00-000', {
    placeholder: "Ваш номер телефона:"
  })

  




  
  //Переменная для включения/отключения индикатора загрузки
var spinner = $('.ymap-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;
 
//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
function init () {
  var myMapTemp = new ymaps.Map("map", {
    center: [47.244729, 39.723187], // координаты центра на карте
    zoom: 7, // коэффициент приближения карты
    controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
  });
  var myPlacemarkTemp = new ymaps.Placemark([47.244729, 39.723187], {
      balloonContent: "Наш офис",
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'img/marker.svg',
      // Размеры метки.
      iconImageSize: [50, 50],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-25, -50],
  });
  myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
 
  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMapTemp.layers.get(0).get(0);
 
  // Решение по callback-у для определения полной загрузки карты
  waitForTilesLoad(layer).then(function() {
    // Скрываем индикатор загрузки после полной загрузки карты
    spinner.removeClass('is-active');
  });
}
 
// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
 
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}
 
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
 
// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
  $('.ymap-container').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
 
	  	// Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true; 
 
		// Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');
 
		// Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
           ymaps.load(init);
        });                
      }
    }
  );  
}
 
$(function() {
 
  //Запускаем основную функцию
  ymap();
 
});

});