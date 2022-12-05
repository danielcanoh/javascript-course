'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const btnsLink = document.querySelectorAll('.nav__link');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const section1 = document.querySelector('#section--1');
const header = document.querySelector('.header');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Smooth scrolling
btnScrollTo.addEventListener('click', () => {
  document.querySelector('#section--1').scrollIntoView({
    behavior: 'smooth',
  });
});

// Page navigation
// Event delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

// Tabbed component
tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Active tab
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Activate content area
  tabsContent.forEach(el => el.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.getAttribute('data-tab')}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation
// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function() {
//   if(this.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// })

// Sticky navigation: Intersection Observer API
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${nav.getBoundingClientRect().height}px`,
});
headerObserver.observe(header);

// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  // Replace src with dara-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0.2,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// Slider
const slider = function() {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');
  
  const maxSlide = slides.length;
  let currentSlide = 0;
  
  // Functions
  const createDots = function () {
    slides.forEach((_, i) => {
      const dot = `<button class="dots__dot" data-slide="${i}"></button>`;
      dotContainer.insertAdjacentHTML('beforeend', dot);
    });
  };
  
  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
  
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };
  
  const goToSlide = function (slide) {
    slides.forEach(
      (sl, i) => (sl.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  
  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) currentSlide = 0;
    else currentSlide++;
  
    // -100, 0, 100, 200
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };
  
  const prevSlide = function () {
    if (currentSlide === 0) currentSlide = maxSlide - 1;
    else currentSlide--;
  
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };
  
  const init = function () {
    createDots();
    activateDot(0);
    // 0%, 100%, 200%, 300%
    goToSlide(0);
  };
  init();
  
  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const slide = e.target.dataset.slide;
      goToSlide(slide);
      activateDot(slide);
    }
  });
}
slider();

//////////////////////////////////////////////////////
///////////////////// LECTURES ///////////////////////
//////////////////////////////////////////////////////
/*
// Seleccionar elementos
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

console.log(document.getElementById('section--1'));

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Crear e insertar elementos
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

const message2 = `<div class="cookie-message">
  We use cookies for improved functionality and analytics. 
  <button class="btn btn--close-cookie">Got it!</button>
</div>`;
header.insertAdjacentHTML('beforeend', message2);
const msgCookies = document.querySelector('.cookie-message');
// header.prepend(message)
// header.append(message);
// header.append(message.cloneNode(true))

// Eliminar elementos
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  msgCookies.remove();
});

// Estilos
msgCookies.style.backgroundColor = "#37383d";
msgCookies.style.width = '120%';

console.log(parseFloat(getComputedStyle(msgCookies).height));

msgCookies.style.height = parseFloat(getComputedStyle(msgCookies).height) + 30 + 'px';

// Custom Properties (Variables) CSS
document.documentElement.style.setProperty('--color-primary', 'orangered')

// Atributos
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
console.log(logo.id);
logo.alt = 'Beautiful minimalist logo';

// Atributos personalizados
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist')

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add("c")
logo.classList.remove("c")
logo.classList.toggle("c")
logo.classList.contains('c')


// Eventos
const h1 = document.querySelector('h1');
const alertH1 = (e) => {
  alert('AddEventListener: Great! You are reading the heading :D');

  // Eliminar escuchador de eventos
  h1.removeEventListener('mouseenter', alertH1);
}
h1.addEventListener('mouseenter', alertH1)

// Event Propagation: Bubbling and Capturing
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// Cuando un elemento hijo y los elementos padres tienen el mismo 
// evento, este se propaga desde el hijo a todos los elementos padres.
document.querySelector('.nav__link').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target);

  // Stop Propagation
  // e.stopPropagation();
})

document.querySelector('.nav__links').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target);
})

document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target);
})


// DOM Traversing
const h1 = document.querySelector('h1');

// Hijos del h1
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white'

// Padres del h1
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest('.header').style.background = 'var(--gradient-secondary)'

// Hermanos del h1
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach((el) => {
  if (el !== h1) el.style.transform = 'scale(0.5)'
})


// Intersection Observer API
const obsCallback = function(entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
}

const obsOptions = {
  root: null,
  threshold: 0.1,
}

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
*/
