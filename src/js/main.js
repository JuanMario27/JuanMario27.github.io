class App {
  constructor() {
    this.openButton = document.getElementById('menu-button');
    this.closeButton = document.getElementById('close-button');
    this.menuMobile = document.getElementById('menu-mobile');
    this.header = document.querySelector('.header');
    this.counting = document.getElementById('counting');
    this.preload = document.getElementById('preloader');
  }
  init() {
    this.bindUIActions();
    this.hidePreload();
    this.bindInterceptor();
  }

  bindUIActions() {
    window?.addEventListener('scroll', _ => {
      this.header?.classList.toggle('h-sticky', window.scrollY > 150);
    });
    this.openButton.addEventListener('click', () => {
      this.toggleMenu();
    });
    this.closeButton.addEventListener('click', () => {
      this.toggleMenu();
    });
  }

  hidePreload() {
    setTimeout(() => {
      this.preload?.classList.remove('show');
    }, 1500);
  }

  bindInterceptor() {
    this.observer = new IntersectionObserver(this.countingAnimation, {
      threshold: 1,
    });
    if (this.counting != undefined) {
      this.observer.observe(this.counting);
    }
  }

  toggleMenu() {
    this.menuMobile?.classList.toggle('menu-active');
  }

  countingAnimation(entries, __) {
    if (entries[0].isIntersecting) {
      const counters = document.querySelectorAll('.num');
      counters.forEach(counter => {
        const updateCounter = () => {
          const target = parseInt(counter.getAttribute('data-val'));
          const increment = target / 500;
          const c = +counter.textContent;
          if (c < target) {
            counter.textContent = `+${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 2);
          } else {
            counter.textContent = `+${target}`;
          }
        };
        updateCounter();
      });
    }
  }
}

const app = new App();

document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
