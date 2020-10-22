'use strict';
window.addEventListener('DOMContentLoaded', () => {

   const btnBurger = document.querySelector('.btn-burger'),
      sideBarLeft = document.querySelector('.sidebar-left');
btnBurger.addEventListener('click', () => {
   sideBarLeft.classList.toggle('sidebar-left--show');
});
   const sidebarRight = document.querySelector('.sidebar-right'),
   sidebarBtn = sidebarRight.querySelector('#sidebarBtn');
sidebarBtn.addEventListener('click', () => {
   sidebarRight.classList.toggle('show-menu');
});
   // Tabs tabs.js
const tabs = document.querySelectorAll('.tab'),
   tabsContent = document.querySelectorAll('.tab-content'),
   tabsParent = document.querySelector('.tabs-list');
function hideTabContent() {
   tabsContent.forEach(item => {
      item.style.display = 'none';
   });
   tabs.forEach(tab => {
      tab.classList.remove('tab--active');
   });
}
function showTabContent(i = 0) {
   tabsContent[i].style.display = '';
   tabs[i].classList.add('tab--active');
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


   //Classes  spend.js
class SpendItem {
   constructor(name, code, plan, execRub, execPers, frcRub, frcPers, parentSelector) {
      this.name = name;
      this.code = code;
      this.plan = plan;
      this.execRub = execRub;
      this.execPers = execPers;
      this.frcRub = frcRub;
      this.frcPers = frcPers;
      this.parent = document.querySelector(parentSelector);
   }
   render() {
      const element = document.createElement('tr');
      element.innerHTML = `
         <tr>
            <td>${this.name}</td>
            <td>${this.code}</td>
            <td>${this.plan}</td>
            <td>${this.execRub}</td>
            <td>${this.execPers}</td>
            <td class="text-center">${this.frcRub}</td>
            <td class="text-center">${this.frcPers}</td>
         </tr>
      `;
      this.parent.append(element);
   }
}

new SpendItem(
   'ФОТ',
   322,
   23423423,
   23423444,
   'fish',
   'dfdf',
   23423466,
   '#spend tbody'
).render();

new SpendItem(
   'Налог на ФОТ',
   213,
   '84 442 719,20',
   '35 055 340,64',
   '41,51 %',
   '72 891 206,79',
   '86,32 %',
   '#spend tbody'
).render();

new SpendItem(
   'Пособия',
   266,
   23423423,
   23423444,
   'fish',
   'dfdf',
   23423466,
   '#spend tbody'
).render();

   

   // Header-avatar
   // const headerAvatar = document.querySelector('.header-avatar'),
   //    headerAvatarText = headerAvatar.querySelector('.header-avatar__text');
   // headerAvatar.addEventListener('click', () => {
   //    headerAvatarText.classList.toggle('hide');
   // });

});