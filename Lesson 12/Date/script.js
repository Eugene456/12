const div = document.createElement('div'),
    p = document.createElement('p');
    
    document.body.appendChild(div);
    div.appendChild(p);
    for (let i = 0; i < 3; i++){
        div.appendChild(p.cloneNode());
    }
const arrP = document.querySelectorAll('p');

let timeNow = new Date();
let hour = timeNow.getHours();

let greeting  = '';

if (hour >= 4 && hour < 12){
    greeting = 'Доброе утро!';
} else if (hour >= 12 && hour < 16) {
    greeting = 'Добрый день!';
} else if (hour >= 16 && hour < 20) {
    greeting = 'Добрый вечер!';
}else if ( hour >= 20 && hour < 4) {
    greeting = 'Доброй ночи!';
}


function dateFormat (time){
    if (time < 10){
        return time = '0' + time;
    } else {
        return time = time;
    }
}




let daysWeek = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let day = daysWeek[timeNow.getDay()];

let newYear = new Date ('1 january 2020').getTime(),
dayRemaining = Math.floor((newYear - timeNow.getTime())/1000/3600/24);
console.log (dayRemaining);
arrP[0].textContent = greeting; 
arrP[1].textContent = 'Сегодня: ' + day;
arrP[2].textContent = 'Текущее время: ' + dateFormat(timeNow.getHours()) + ':' + dateFormat(timeNow.getMinutes()) + ':' + dateFormat(timeNow.getSeconds());
arrP[3].textContent = 'До Нового года осталось: ' + dayRemaining + ' дней';

