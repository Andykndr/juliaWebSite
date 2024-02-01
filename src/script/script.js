document.addEventListener('DOMContentLoaded', function () {
  const scroll = document.querySelectorAll('.scroll-animation'),
    scrollHeader = document.querySelectorAll('.scroll-animation-header'),
    scrollAnimationDelay = document.querySelectorAll('.scroll-animation-delay');

  function fadeInOnScroll(contents) {
    contents.forEach((content) => {
      const contentPosition = content.getBoundingClientRect().top;
      if (contentPosition < window.innerHeight / 1.01) {
        content.classList.add('visible-animation');
      }
    });
  }
  document.addEventListener('scroll', function () {
    fadeInOnScroll(scroll);
    fadeInOnScroll(scrollHeader);
    fadeInOnScroll(scrollAnimationDelay);
  });
  fadeInOnScroll(scroll);
  fadeInOnScroll(scrollHeader);
  fadeInOnScroll(scrollAnimationDelay);

  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const indicatorContainer = document.querySelector('.slider-indicator');

  let currentIndex = 0;
  const slideWidth = slides[0].clientWidth;

  function showSlide(index) {
    if (index < 0) {
      currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    const offset = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${offset}px)`;
    updateIndicator();
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function updateIndicator() {
    const dots = document.querySelectorAll('.indicator-dot');
    dots.forEach((dot, index) => {
      index === currentIndex
        ? (dot.style.backgroundColor = '#fff')
        : (dot.style.backgroundColor = '#ffffff57');
    });
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  showSlide(currentIndex);

  slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('indicator-dot');
    dot.addEventListener('click', () => showSlide(index));
    indicatorContainer.appendChild(dot);
  });
  updateIndicator();

  // setInterval(nextSlide, 3000);

  ///PORTFILIO TABS///
  function tabsPortfolio(
    tabsSelector,
    contentsSelector,
    tabActive,
    contentActive
  ) {
    const tabs = document.querySelectorAll(tabsSelector),
      content = document.querySelectorAll(contentsSelector);

    tabs.forEach((item, i) => {
      item.addEventListener('click', () => {
        content.forEach((item) => {
          item.classList.remove(contentActive);
        });
        tabs.forEach((item) => {
          item.classList.remove(tabActive);
        });
        content[i].classList.add(contentActive);
        tabs[i].classList.add(tabActive);
      });
    });
  }
  tabsPortfolio(
    '.portfolio_tabs > .portfolio_tab',
    '.portfolio',
    'portfolio_tab_active',
    'portfolio_active'
  );

  ///PORTFILIO CONTENT///
  const portfolioLash = document.querySelector('.portfolio_lash');
  const portfolioBrow = document.querySelector('.portfolio_brow');
  const portfolioPermanent = document.querySelector('.portfolio_permanent');
  const portfolioExtensions = document.querySelector('.portfolio_extensions');

  const imgPathsLash = [
    './img/portfolio/lash/lash1.jpg',
    './img/portfolio/lash/lashVertical.jpg',
    './img/portfolio/lash/lash2.jpg',
    './img/portfolio/lash/lashHorizontal.jpg',
  ];
  const imgPathsBrow = [
    './img/portfolio/lash/lashHorizontal.jpg',
    './img/portfolio/lash/lashVertical.jpg',
    './img/portfolio/lash/lash2.jpg',
    './img/portfolio/lash/lash1.jpg',
  ];
  const imgPathsPermanent = [
    './img/portfolio/lash/lashVertical.jpg',
    './img/portfolio/lash/lash2.jpg',
    './img/portfolio/lash/lashHorizontal.jpg',
    './img/portfolio/lash/lash1.jpg',
  ];
  const imgPathsExtensions = [
    './img/portfolio/lash/lash2.jpg',
    './img/portfolio/lash/lashHorizontal.jpg',
    './img/portfolio/lash/lash1.jpg',
    './img/portfolio/lash/lashVertical.jpg',
  ];

  const renderArray = (imgArray, alt, parent) =>
    imgArray.forEach((path) => {
      const img = document.createElement('img');
      img.className = 'portfolio_img';
      img.src = path;
      img.alt = alt;
      parent.appendChild(img);
    });

  renderArray(imgPathsLash, 'portfolio lash  pic', portfolioLash);
  renderArray(imgPathsBrow, 'portfolio brow pic', portfolioBrow);
  renderArray(imgPathsPermanent, 'portfolio permanent pic', portfolioPermanent);
  renderArray(
    imgPathsExtensions,
    'portfolio lash extensions pic',
    portfolioExtensions
  );
  //////
});

const hamburger = document.querySelector('.hamburger'),
  promo = document.querySelector('.mobile_nav'),
  promoItem = document.querySelectorAll('.mobile_nav a');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger_active');
  promo.classList.toggle('mobile_nav_active');
});
promoItem.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    promo.classList.toggle('mobile_nav_active');
  });
});
