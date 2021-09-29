
let date = new Date();
let options = {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
	};
let optionsWeek = {weekday: 'long'};

let dateCurrent = document.getElementsByClassName('sidebar__date-current')[0].innerText = date.toLocaleString("ru", options);
let weekCurrent = document.getElementsByClassName('sidebar__weekday')[0].innerText = date.toLocaleString("ru", optionsWeek);
