//Анимация
AOS.init();

var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var btn = document.getElementById("openModalBtn");
var btn2 = document.getElementById("openModalBtn2");
var closeBtn = document.getElementsByClassName("close")[0];
var closeBtn2 = document.getElementsByClassName("close")[1];
var isOpen = false; // Флаг для отслеживания состояния первого модального окна
var isOpen2 = false; // Флаг для отслеживания состояния второго модального окна

btn.onclick = function() {
  // Проверка состояния первого модального окна
  if (!isOpen) {
    isOpen = true;

    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Блокировка прокрутки заднего фона

    // Задержка перед закрытием первого модального окна (в миллисекундах)
    var delayInMilliseconds = 500;
    setTimeout(function() {
      isOpen = false;
    }, delayInMilliseconds);
  }
};

btn2.onclick = function() {
  // Проверка состояния второго модального окна
  if (!isOpen2) {
    isOpen2 = true;

    modal2.style.display = "block";
    document.body.style.overflow = "hidden"; // Блокировка прокрутки заднего фона

    // Задержка перед закрытием второго модального окна (в миллисекундах)
    var delayInMilliseconds = 500;
    setTimeout(function() {
      isOpen2 = false;
    }, delayInMilliseconds);
  }
};

// Закрытие модальных окон при нажатии на крестик
closeBtn.onclick = function() {
  if (isOpen) {
    return; // Если первое модальное окно находится в процессе закрытия, прерываем обработчик
  }

  modal.style.display = "none";
  document.body.style.overflow = "auto"; 
};

// Закрытие второго модального окна при нажатии на крестик
closeBtn2.onclick = function() {
  if (isOpen2) {
    return; // Если второе модальное окно находится в процессе закрытия, прерываем обработчик
  }

  modal2.style.display = "none";
  document.body.style.overflow = "auto"; /
};

// Закрытие модальных окон при клике вне них
window.onclick = function(event) {
  if (event.target == modal && !isOpen) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; 
  }

  if (event.target == modal2 && !isOpen2) {
    modal2.style.display = "none";
    document.body.style.overflow = "auto"; 
  }
};


document.getElementById("searchButton2").onclick = function() {
  var searchInput = document.getElementById("searchInput2");
  var searchResults = document.getElementById("searchResults2");

  // Выполняем поиск и отображаем результаты
  var searchText = searchInput.value;
  searchResults.innerHTML = "Результаты поиска для \"" + searchText + "\"";
}


// Инициализация Cleave.js для форматирования полей
var phoneInput = document.getElementById('phone');
var birthdateInput = document.getElementById('birthdate');
var creditcardInput = document.getElementById('creditcard');

var phoneCleave = new Cleave(phoneInput, {
    phone: true,
    phoneRegionCode: 'BY' 
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
