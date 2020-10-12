////alert ("Hello Gulp!"); 
window.addEventListener('DOMContentLoaded', () => {
   //alert('Hello!');
   
   const sidebarRight = document.querySelector('.sidebar-right'),
         sidebarBtn = sidebarRight.querySelector('#sidebarBtn');
   sidebarBtn.addEventListener('click',(e) => {
      e.preventDefault();
      sidebarRight.classList.toggle('show-menu');


      // alert('Hello!');
   });

   const navLink = document.querySelectorAll('.nav-link');
   
});