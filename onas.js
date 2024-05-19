document.addEventListener('DOMContentLoaded', () => {
    // Установите начальное состояние элемента явно
    document.getElementById('menu').style.display = 'none';
  });
  
  document.getElementById('menu-btn').addEventListener('click', function() {
    var content = document.getElementById('menu');
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
      // Установите начальное состояние элемента явно
      document.getElementById('skidka').style.display = 'none';
    });
    
    document.getElementById('ava').addEventListener('click', function() {
      var content = document.getElementById('skidka');
      if (content.style.display === 'none') {
        content.style.display = 'flex';
      } else {
        content.style.display = 'none';
      }
    });
  
  
    ymaps.ready(init);
  
    function init() {
        var map1 = new ymaps.Map("map1", {
            center: [55.827402, 37.955596],
            zoom: 10
        });
        var map2 = new ymaps.Map("map2", {
            center: [55.827402, 37.955596],
            zoom: 10
        });
    
        // Функция для создания меток
        function createPlacemark(map, coords, iconPath) {
            var placemark = new ymaps.Placemark(coords, {}, {
                iconLayout: 'default#image',
                iconImageHref: iconPath,
                iconImageSize: [45, 42],
                iconImageOffset: [-15, -21]
            });
            map.geoObjects.add(placemark);
            return placemark;
        }
    
        // Добавление кнопок для перемещения к меткам с кастомным расположением
    }
  
  document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.icon');
  
    icons.forEach(icon => {
        icon.addEventListener('click', function() {
            // Change color to red when individual SVG is clicked
            this.style.color = '#4CAF50';
        });
    });
  
    const links = document.querySelectorAll('.download-link');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращаем стандартное поведение ссылки
            this.children[0].style.color = '#4CAF50'; // Change color of SVG
            const url = this.getAttribute('href');
            const name = this.getAttribute('download');
            window.open(this.href, '_blank'); // Открыть файл в новом окне
  
            
        });
    });
  });
  
  function downloadFile(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  
  function changeColorsAndOpenFile() {
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        icon.style.color = '#4CAF50'; // Change color to red
    });
    window.open('../doci/Federalnyj_zakon_ot_21_noyabrya_2011_g._N_323-FZ.pdf', '_blank'); // Open a file in a new window
  }
  document.addEventListener('DOMContentLoaded', function () {
    var scrollButton = document.querySelector('.sab-menu-link-8');
    var targetElement = document.querySelector('.footer');
  
    scrollButton.addEventListener('click', function () {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
  const modal = document.getElementById('modalWindow');
  const overlay = document.getElementById('modalOverlay');
  const openSvg = document.getElementById('openModalSvg');
  const closeBtn = document.getElementById('closeModal');
  
  // Функция для открытия модального окна
  function openModal() {
      modal.style.display = 'block';
      overlay.style.display = 'block';
  }
  
  // Функция для закрытия модального окна
  function closeModal() {
      modal.style.display = 'none';
      overlay.style.display = 'none';
  }
  
  // Открываем модальное окно при клике на SVG
  openSvg.onclick = openModal;
  
  // Закрываем модальное окно при клике на кнопку закрытия или затемняющий фон
  closeBtn.onclick = closeModal;
  overlay.onclick = closeModal;
  
  var modali = document.getElementById("myModal");
  
  // Получаем кнопку, открывающую модальное окно
  var btn = document.getElementById("onas-1-button");
  var btn1 = document.getElementById("onas-1-button");
  
  
  
  
  
  // Получаем элемент <span>, который закрывает модальное окно
  var span = document.getElementsByClassName("close")[0];
  
  // Когда пользователь нажимает на кнопку, открываем модальное окно
  btn.onclick = function() {
      modal.style.display = "block";
  }
  btn1.onclick = function() {
    modal.style.display = "block";
  }
  
  
  
  // Когда пользователь нажимает на <span> (x), закрываем модальное окно
  span.onclick = function() {
      modal.style.display = "none";
  }
  
  // Когда пользователь нажимает в любом месте за пределами модального окна, закрываем его
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  
  
  
  
  
  
  
  