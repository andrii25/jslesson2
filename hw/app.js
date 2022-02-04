//Завдання 1
let time = prompt("Введіть хвилину від 0 до 59")
    if (time >= 0 && time <= 14) {
        console.log('Перша чверть')
    } else if (time >= 15 && time <= 29) {
        console.log('Друга чверть')
    } else if (time >= 30 && time <= 44) {
        console.log('Третя чверть')
    }else if (time >= 45 && time <= 59) {
        console.log('Четверта чверть')
    } else {
        console.log("Помилка у введені")
    }

//Завдання 2

let day = +prompt("Введіть число місяця");
if (day >= 1 && day <= 10) {
        console.log('Перша декада')
    } else if (day >= 11 && day <= 20) {
        console.log('Друга декада')
    } else if (day >= 21 && day <= 31) {
        console.log('Третя декада')
    } else {
        console.log("Некоректно введені дані")
    }

//Завдання 3
let test = true;
if (test === true) {
        console.log('Вірно')
    } else {
        console.log('Невірно')
    }

//Завдання 4
let number = +prompt('Введіть число 1, 0 , -3')
if (number !== 0){
        console.log('ВІРНО')
    } else {
        console.log('НЕВІРНО')
    }

//Завдання 5
let dayOfWeeks = +prompt('Введіть день тижня від 1 до 7')
switch (dayOfWeeks) {
     case 1:
         console.log('ПОНЕДІЛОК: Навчання')
         break;
     case 2:
         console.log('ВІВТОРОК: Робота')
         break;
     case 3:
         console.log('СЕРЕДА: Зал')
         break;
     case 4:
         console.log('ЧЕТВЕР: Прогулянка')
         break;
     case 5:
         console.log('ПЯТНИЦЯ: Шопінг')
         break;
     case 6:console.log('СУБОТА: Прибирання')
         break;
     case 7:
         console.log('НЕДІЛЯ: Вихідній')
         break;
     default:
         console.log("Некоректно введені дані")
 }

//Завдання 6
let year = +prompt('Кількість днів в цьому році')
if(year % 4 === 0){
        console.log('Високосний рік')
    }else {
        console.log('Невисокосний рік')
    }

// Завдання 7
let oficialName = prompt('Яка «офіційна» назва JavaScript?')
if(oficialName === 'ECMAScript'){
        alert('Правильно!')
    } else{
        alert('Не знаєте? ECMAScript!')
    }