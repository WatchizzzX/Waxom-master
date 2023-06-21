//Анимация
AOS.init();

const modal = document.getElementById("myModal");
const modal2 = document.getElementById("myModal2");
const btn = document.getElementById("openModalBtn");
const btn2 = document.getElementById("openModalBtn2");
const closeBtn = document.getElementsByClassName("close")[0];
const closeBtn2 = document.getElementsByClassName("close")[1];
var isOpen = false; // Флаг для отслеживания состояния первого модального окна
var isOpen2 = false; // Флаг для отслеживания состояния второго модального окна

btn.onclick = function() {
  // Проверка состояния первого модального окна
  if (!isOpen) {
    isOpen = true;
    modal.classList.add('animatedIn');
    modal.style.display = "block";
    // document.body.style.overflow = "hidden"; // Блокировка прокрутки заднего фона

    // Задержка перед закрытием первого модального окна (в миллисекундах)
    const delayInMilliseconds = 500;
    setTimeout(function() {
      isOpen = false;
      modal.classList.remove('animatedIn')
    }, delayInMilliseconds);
  }
};

btn2.onclick = function() {
  // Проверка состояния второго модального окна
  if (!isOpen2) {
    isOpen2 = true;
    modal2.classList.add('animatedIn');

    
    modal2.style.display = "block";
    // document.body.style.overflow = "hidden"; // Блокировка прокрутки заднего фона

    // Задержка перед закрытием второго модального окна (в миллисекундах)
    const delayInMilliseconds = 500;
    setTimeout(function() {
      isOpen2 = false;
      modal2.classList.remove('animatedIn')

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
  document.body.style.overflow = "auto"; 
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
  const searchInput = document.getElementById("searchInput2");
  const searchResults = document.getElementById("searchResults2");

  // Выполняем поиск и отображаем результаты
  const searchText = searchInput.value;
  searchResults.innerHTML = "Результаты поиска для \"" + searchText + "\"";
}


// Инициализация Cleave.js для форматирования полей
const phoneInput = document.getElementById('phone');
const birthdateInput = document.getElementById('birthdate');
const creditcardInput = document.getElementById('creditcard');

const phoneCleave = new Cleave(phoneInput, {
    phone: true,
    phoneRegionCode: 'BY' 
});

// Инициализация Cleave.js для форматирования полей
const birthdateCleave = new Cleave(birthdateInput, {
    date: true,
    datePattern: ['d', 'm', 'Y']
});

const creditcardCleave = new Cleave(creditcardInput, {
    creditCard: true
});


// Инициализация Parsley.js для проверки полей формы
const form = document.getElementById('myForm');
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
const clearButton = document.getElementById('clearButton');
clearButton.onclick = function() {
    form.reset();
}

// Получение элементов
const tabs = document.querySelectorAll('.project-tabs button');
const projects = document.querySelectorAll('.project');

// Добавление обработчика события для каждой вкладки
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    // Проверка, является ли выбранная вкладка уже активной
    if (tab.classList.contains('active')) {
      return; // Ничего не делаем, если вкладка уже активна
    }

    // Удаление активного класса у всех вкладок
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });

    // Добавление активного класса для выбранной вкладки
    tab.classList.add('active');

    // Получение типа выбранной вкладки
    const type = tab.textContent.toLowerCase();

    // Отображение или скрытие проектов в зависимости от выбранной вкладки
    projects.forEach((project) => {
      const projectType = project.querySelector('.themes').textContent.toLowerCase();
      const isVisible = type === 'all' || projectType.includes(type);
      project.style.display = isVisible ? 'block' : 'none';
    });
  });
});


