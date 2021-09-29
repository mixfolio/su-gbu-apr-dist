const btnBurger = document.querySelector('.btn-burger'),
      sideBarLeft = document.querySelector('.sidebar-left');
btnBurger.addEventListener('click', () => {
   sideBarLeft.classList.toggle('sidebar-left--show');
});