AOS.init();

const purchase_modal = document.getElementById("purchase-modal");
const search_modal = document.getElementById("search_modal");

const purchase_form = document.getElementById('purchase-form');
const clearButton = document.getElementById('clearButton');

const openSearchBtn = document.getElementById("openSearchBtn");
const openPurchaseBtn = document.getElementById("openPurchaseBtn");
const closePurchaseBtn = document.getElementsByClassName("close")[0];
const closeSearchBtn = document.getElementsByClassName("close")[1];

var isPurchaseModalOpen = false;
var isSearchModalOpen = false;

const searchBtn = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const tabs = document.querySelectorAll('.project-tabs button');
const projects = document.querySelectorAll('.project');

const phoneInput = document.getElementById('phone');
const birthdateInput = document.getElementById('bi  rthdate');
const creditcardInput = document.getElementById('creditCard');



document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    if (!isSearchModalOpen) {
      search_modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
    if (!isPurchaseModalOpen) {
      purchase_modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
});

window.onclick = function (event) {
  if (event.target == purchase_modal && !isPurchaseModalOpen) {
    purchase_modal.style.display = "none";
    document.body.style.overflow = "auto";
  }

  if (event.target == search_modal && !isSearchModalOpen) {
    search_modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
};

openSearchBtn.addEventListener("click", openSearchModal);
openPurchaseBtn.addEventListener("click", openPurchaseModal);
closeSearchBtn.addEventListener("click", closeSearchModal);
closePurchaseBtn.addEventListener("click", closePurchaseModal);
searchBtn.addEventListener("click", searchInfo);

function openSearchModal() {
  if (!isSearchModalOpen) {
    isSearchModalOpen = true;
    search_modal.classList.add('animatedIn');
    search_modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Блокировка прокрутки заднего фона

    // Задержка перед закрытием первого модального окна (в миллисекундах)
    const delayInMilliseconds = 500;
    setTimeout(function () {
      isSearchModalOpen = false;
      search_modal.classList.remove('animatedIn')
    }, delayInMilliseconds);
  }
}

function openPurchaseModal() {
  if (!isPurchaseModalOpen) {
    isPurchaseModalOpen = true;
    purchase_modal.classList.add('animatedIn');
    purchase_modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Блокировка прокрутки заднего фона

    // Задержка перед закрытием второго модального окна (в миллисекундах)
    const delayInMilliseconds = 500;
    setTimeout(function () {
      isPurchaseModalOpen = false;
      purchase_modal.classList.remove('animatedIn')
    }, delayInMilliseconds);
  }
}

function closeSearchModal() {
  if (isSearchModalOpen) {
    return;
  }

  search_modal.style.display = "none";
  document.body.style.overflow = "auto";
}

function closePurchaseModal() {
  if (isPurchaseModalOpen) {
    return;
  }

  purchase_modal.style.display = "none";
  document.body.style.overflow = "auto";
}

function searchInfo() {
  const searchText = searchInput.value;
  searchResults.innerHTML = "Результаты поиска для \"" + searchText + "\"";
}

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


purchase_form.addEventListener('submit', function () {
  if (purchase_form.checkValidity()) {
    alert('Форма заполнена корректно.');
  }
});

$(document).ready(function () {
  $("#myForm").parsley();
});

clearButton.addEventListener("click", function () {
  purchase_form.reset();
});


tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    if (tab.classList.contains('active')) {
      return;
    }

    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });

    tab.classList.add('active');

    const type = tab.textContent.toLowerCase();

    projects.forEach((project) => {
      const projectType = project.querySelector('.themes').textContent.toLowerCase();
      const isVisible = type === 'all' || projectType.includes(type);
      project.style.display = isVisible ? 'block' : 'none';
    });
  });
});


