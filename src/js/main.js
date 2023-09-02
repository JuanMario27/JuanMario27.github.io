class App {
  constructor() {
    this.openButton = document.getElementById('menu-button');
    this.closeButton = document.getElementById('close-button');
    this.menuMobile = document.getElementById('menu-mobile');
    this.header = document.querySelector('.header');
  }
  init() {
    this.bindUIActions();
    this.countingAnimation();
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

  toggleMenu() {
    this.menuMobile?.classList.toggle('menu-active');
  }

  countingAnimation() {
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

const app = new App();

document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
