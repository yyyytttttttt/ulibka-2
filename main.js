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
  


let currentIndex = 0;

document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    currentIndex += direction;
    
    // Циклическое возвращение к первому/последнему слайду
    if (currentIndex >= totalSlides) { currentIndex = 0; }
    if (currentIndex < 0) { currentIndex = totalSlides - 1; }
    
    const offset = currentIndex * -100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

// Инициализация слайдера с первым слайдом
changeSlide(0);
ymaps.ready(initMaps);

function initMaps() {
    createMap('map1',[55.76, 37.64], [[55.819204, 37.964244],[55.827399, 37.955604]]);
    createMap('map2', [55.76, 37.64], [[55.819204, 37.964244],[55.827399, 37.955604]]);
}

function createMap(mapId, centerCoords, placemarks) {
    var map = new ymaps.Map(mapId, {
        center: [55.819204, 37.964244],
        zoom: 13
    });

    placemarks.forEach(function(coords) {
        var placemark = new ymaps.Placemark(coords, {
            hintContent: 'Улыбка Стоматологическая клиника',
            balloonContent: 'Описание метки'
        });
        map.geoObjects.add(placemark);
    });
}

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







  document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide-1');
    const navigationContainer = document.querySelector('.slider-navigation');
  
    function changeSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
          slide.classList.add('active');
        }
      });
      const offset = index * -100;
      document.querySelector('.slider-1').style.transform = `translateX(${offset}%)`;
      updateNavigationDots(index);
    }
  
    function updateNavigationDots(index) {
      document.querySelectorAll('.nav-dot').forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
          dot.classList.add('active');
        }
      });
    }
  
    function createNavigationDots() {
      slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('nav-dot');
        dot.addEventListener('click', () => changeSlide(index));
        navigationContainer.appendChild(dot);
      });
    }
  
    createNavigationDots();
  
    // Swipe support
    let startX;
    const slider = document.querySelector('.slider-1');
    slider.addEventListener('touchstart', e => startX = e.touches[0].clientX);
    slider.addEventListener('touchmove', e => {
      if (!startX) return;
      const moveX = e.touches[0].clientX;
      const diffX = startX - moveX;
      const activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
      if (diffX > 50) { // Swipe left
        changeSlide(Math.min(activeIndex + 1, slides.length - 1));
        startX = null;
      } else if (diffX < -50) { // Swipe right
        changeSlide(Math.max(activeIndex - 1, 0));
        startX = null;
      }
    });
  
    // Initialize navigation dots
    document.querySelectorAll('.nav-dot')[0].classList.add('active');
    // Set the first slide as active if none is active
    if (!document.querySelector('.slide-1.active')) {
      slides[0].classList.add('active');
    }
    // Update navigation dots to match the active slide
    const initialActiveIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    updateNavigationDots(initialActiveIndex);
  });
  