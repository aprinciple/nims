document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  if (header) {
    
    window.addEventListener('scroll', () => animatedHeader());
    const animatedHeader = () => {
      let headerBar = header.querySelector('.header__bar');

      if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
        headerBar.classList.add('header__bar--scrolled');
      } else {
        headerBar.classList.remove('header__bar--scrolled');
      }
    }
    
    let headerToggle = header.querySelector('.header__toggle');
    let headerMenu = header.querySelector('.header__menu');
    headerToggle.addEventListener('click', function(e) {
      this.classList.toggle('header__toggle--active');
      headerMenu.classList.toggle('header__menu--open');
    });
  }
});