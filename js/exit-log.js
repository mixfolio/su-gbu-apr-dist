const btnInfo = document.querySelector('.btn-info');
const tableInfo = document.querySelector('.table-info');

btnInfo.addEventListener('click', () => {
   tableInfo.classList.toggle('table-info--show');
});