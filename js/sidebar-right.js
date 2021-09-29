const sidebarRight = document.querySelector('.sidebar-right'),
   sidebarBtn = sidebarRight.querySelector('#sidebarBtn');
sidebarBtn.addEventListener('click', () => {
   sidebarRight.classList.toggle('show-menu');
   // if (!sidebarRight.classList.contains('show-menu')){
   //    sidebarBtn.classList.remove('icon-arr-prev');
   //    sidebarBtn.classList.add('icon-arr-next');
   // } else {
   //    sidebarBtn.classList.remove('icon-arr-next');
   //    sidebarBtn.classList.add('icon-arr-prev');
   // }
   
});