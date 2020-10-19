////alert ("Hello Gulp!"); 
window.addEventListener('DOMContentLoaded', () => {
   //alert('Hello!');

   // const sidebarRight = document.querySelector('.sidebar-right'),
   //       sidebarBtn = sidebarRight.querySelector('#sidebarBtn');
   // sidebarBtn.addEventListener('click',(e) => {
   //    e.preventDefault();
   //    sidebarRight.classList.toggle('show-menu');


   //    // alert('Hello!');
   // });

   // Header-avatar
   const headerAvatar = document.querySelector('.header-avatar'),
      headerAvatarText = headerAvatar.querySelector('.header-avatar__text');
   headerAvatar.addEventListener('click', () => {
      headerAvatarText.classList.toggle('hide');
   });

   
   // Tabs
   const tabs = document.querySelectorAll('.tab'),
      tabsContent = document.querySelectorAll('.tab-content'),
      tabsParent = document.querySelector('.tabs-list');
   function hideTabContent() {
      tabsContent.forEach(item => {
         item.style.display = 'none';
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

   //
   //    const ctx = document.querySelector('#myChart').getContext('2d');
   //    const myChart = new Chart(ctx, {
   //       type: 'bar',
   //       data: {
   //          labels: ['ФОТ', 
   //                   'Налог на ФОТ',
   //                   'Аренда офисов',
   //                   'Аренда офисов',
   //                   'Экспл. затрат',
   //                   'Командировки  РФ',
   //                   'Командировки Ин.'],
   //          datasets: [{
   //             label: 'of vote',
   //             data: [12, 15, 10, 6, 2, 9],
   //             backgroundColor: [
   //                '#4C51CC',
   //                '#5D62EF',
   //                '#4044B1',
   //                '#6C72FF',
   //                '#4249EE',
   //                '#4C77CC',
   //                '#326AD9'
   //             ],
   //             borderColor: [
   //                '#4C51CC',
   //                '#5D62EF',
   //                '#4044B1',
   //                '#6C72FF',
   //                '#4249EE',
   //                '#4C77CC',
   //                '#326AD9'
   //             ]
   //          }]
   //       }
   //    });



   // var ctx = document.getElementById('myChart').getContext('2d');
   // var myChart = new Chart(ctx, {
   //    type: 'bar',
   //    data: {
   //       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
   //       datasets: [{
   //          label: '# of Votes',
   //          data: [12, 19, 3, 5, 2, 3],
   //          backgroundColor: [
   //             'rgba(255, 99, 132, 0.2)',
   //             'rgba(54, 162, 235, 0.2)',
   //             'rgba(255, 206, 86, 0.2)',
   //             'rgba(75, 192, 192, 0.2)',
   //             'rgba(153, 102, 255, 0.2)',
   //             'rgba(255, 159, 64, 0.2)'
   //          ],
   //          borderColor: [
   //             'rgba(255, 99, 132, 1)',
   //             'rgba(54, 162, 235, 1)',
   //             'rgba(255, 206, 86, 1)',
   //             'rgba(75, 192, 192, 1)',
   //             'rgba(153, 102, 255, 1)',
   //             'rgba(255, 159, 64, 1)'
   //          ],
   //          borderWidth: 1
   //       }]
   //    },
   //    options: {
   //       scales: {
   //          yAxes: [{
   //             ticks: {
   //                beginAtZero: true
   //             }
   //          }]
   //       }
   //    }
   // });


   //Classes 
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

   // class HeadTitle {
   //    constructor(title, parentSelector) {
   //       this.title = title;
   //       this.parent = document.querySelector(parentSelector);
   //    }
   //    render() {
   //       const element = document.createElement('div');
   //       element.innerHTML = `
   //       <h1 class="title">${this.title}</h1>
   //       `;
   //       this.parent.append(element);
   //    }
   // }

   // new HeadTitle(
   //    "Это тестовый заголовок!",
   //    '#test'
   // ).render();


});