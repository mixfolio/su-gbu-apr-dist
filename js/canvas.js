const ctx = document.querySelector('#myChart').getContext('2d');
const myChart = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['ФОТ',
         'Налог на ФОТ',
         'Аренда офисов',
         'Аренда офисов',
         'Экспл. затрат',
         'Командировки  РФ',
         'Командировки Ин.'],
      datasets: [{
         label: 'of vote',
         data: [12, 15, 10, 6, 2, 9],
         backgroundColor: [
            '#4C51CC',
            '#5D62EF',
            '#4044B1',
            '#6C72FF',
            '#4249EE',
            '#4C77CC',
            '#326AD9'
         ],
         borderColor: [
            '#4C51CC',
            '#5D62EF',
            '#4044B1',
            '#6C72FF',
            '#4249EE',
            '#4C77CC',
            '#326AD9'
         ]
      }]
   }
});



var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
         label: '# of Votes',
         data: [12, 19, 3, 5, 2, 3],
         backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
         ],
         borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
         ],
         borderWidth: 1
      }]
   },
   options: {
      scales: {
         yAxes: [{
            ticks: {
               beginAtZero: true
            }
         }]
      }
   }
});