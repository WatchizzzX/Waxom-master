//Анимация
AOS.init();

var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var closeBtn = document.getElementsByClassName("close")[0];
var isOpen = false; // Флаг для отслеживания состояния модального окна

btn.onclick = function() {
  // Проверка состояния модального окна
  if (!isOpen) {
    isOpen = true;

    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Блокировка прокрутки заднего фона
  }
};

// Закрытие модального окна при нажатии на крестик
closeBtn.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Включение прокрутки заднего фона
  isOpen = false; // Сброс флага состояния модального окна

  // Задержка после закрытия модального окна (в миллисекундах)
  var delayInMilliseconds = 1000;
  setTimeout(function() {
    // Ваш код после закрытия модального окна
  }, delayInMilliseconds);
};

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Включение прокрутки заднего фона
    isOpen = false; // Сброс флага состояния модального окна

    // Задержка после закрытия модального окна (в миллисекундах)
    var delayInMilliseconds = 1000;
    setTimeout(function() {
      // Ваш код после закрытия модального окна
    }, delayInMilliseconds);
  }
};

// Инициализация Cleave.js для форматирования полей
var phoneInput = document.getElementById('phone');
var birthdateInput = document.getElementById('birthdate');
var creditcardInput = document.getElementById('creditcard');

var phoneCleave = new Cleave(phoneInput, {
    phone: true,
    phoneRegionCode: 'BY' // Код страны для форматирования номера телефона (в данном случае, Россия)
});

// Инициализация Cleave.js для форматирования полей
var birthdateCleave = new Cleave(birthdateInput, {
    date: true,
    datePattern: ['d', 'm', 'Y']
});

var creditcardCleave = new Cleave(creditcardInput, {
    creditCard: true
});


// Инициализация Parsley.js для проверки полей формы
var form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (form.checkValidity()) {
        alert('Форма заполнена корректно.');
        // Здесь можно добавить код для отправки данных формы на сервер
    }
});
$(document).ready(function () {
    $("#myForm").parsley();
});  

// Очистка полей формы
var clearButton = document.getElementById('clearButton');
clearButton.onclick = function() {
    form.reset();
}