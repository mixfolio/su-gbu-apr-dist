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

   // Tabs
   const tabs = document.querySelectorAll('.tab'),
         tabsContent = document.querySelectorAll('.tab-content'),
         tabsParent = document.querySelector('.tabs-list');
   function hideTabContent() {
      tabsContent.forEach(item =>  {
         item.style.display ='none';
      });
      tabs.forEach(tab => {
         tab.classList.remove('tab-active');
      });
   }
   function showTabContent(i = 0) {
      tabsContent[i].style.display = '';
      tabs[i].classList.add('tab-active');
   }
   hideTabContent();
   showTabContent();

   tabsParent.addEventListener('click', (event) => {
      const target = event.target;
      if (target && target.classList.contains('tab')) {
         tabs.forEach((item, i) => {
            if (target == item) {
               hideTabContent();
               showTabContent(i);
            }  
         });
      }
   });

   
});