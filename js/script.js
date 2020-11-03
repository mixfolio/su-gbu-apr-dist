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
   
let date = new Date();
let options = {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
	};
let optionsWeek = {weekday: 'long'};

let dateCurrent = document.getElementsByClassName('sidebar__date-current')[0].innerText = date.toLocaleString("ru", options);
let weekCurrent = document.getElementsByClassName('sidebar__weekday')[0].innerText = date.toLocaleString("ru", optionsWeek);

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

   let max_items = 3;
let count = 2;
let id = max_items + 1 - count;

function AddTr() {
   if (count) {
      id = max_items + 1 - count;
      let new_tr = document.getElementById('pull-request');
      new_tr.insertAdjacentHTML('beforeEnd', '<tr><td>Тип документа</td><td><input id="request_type1" name="request_type' + id + '1" list="aboutlist" class="f-control w-100" type="text" placeholder="Начните вводить тип документа" required></td><td><button type="button" id="button' + id + '" onclick="RemTr(' + id + ')" class="btn btn-primary">Удалить</button></td></tr>' +
         '<tr><td>Описание</td><td><textarea name="description' + id + '" placeholder="Описание документа" required></textarea></td></tr>');
      count--;
      let pull_request = document.getElementById("pull_request");
      pull_request.setAttribute('value', id);
   } else {
      alert('Вы можете добавить в одну заявку только ' + max_items + ' документа!');
   }
};


function RemTr(btn_id) {
   count++;
   let rem_tr = document.getElementById("button" + btn_id);
   rem_tr = rem_tr.parentElement.parentElement;
   rem_tr.nextElementSibling.remove();
   rem_tr.remove();
   //now need to change ID's of recreated tags
   let table = document.getElementById("pull-request");
   let a = 2;
   for (i = 7; i < table.rows.length; i = i + 2) {
      table.rows[i].cells[1].firstChild.setAttribute('name', 'request_type' + a);
      table.rows[i].cells[2].firstChild.setAttribute('id', 'button' + a);
      table.rows[i].cells[2].firstChild.setAttribute('onclick', 'RemTr(' + a + ')');
      table.rows[i + 1].cells[1].firstChild.setAttribute('name', 'description' + a);
      a++
   };
   let pull_request = document.getElementById("pull_request");
   pull_request.setAttribute('value', a - 1);
};

   //const btnInfo = document.querySelector('.btn-info');
const tableInfo = document.querySelector('.table-info');

btnInfo.addEventListener('click', () => {
   tableInfo.classList.toggle('table-info--show');
});

   ////Classes  spend.js
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