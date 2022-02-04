// Завдання 1
let first = +prompt('Введіть перше число');
let second = +prompt('Введіть друге число');
if (first > second){
    console.log(first)
} else if (first === second){
    console.log('Введені числа рівні')
} else {
    console.log(second);
}

//Задання 2
let numberEntrance = +prompt('Введіть номер квартири');
if (numberEntrance > 0 && numberEntrance <= 20) {
    console.log('Квартира знаходиться у 1 підїзді')
} else if (numberEntrance >= 21 && numberEntrance <= 48) {
    console.log('Квартира знаходиться у 2 підїзді')
} else if (numberEntrance >= 49 && numberEntrance <= 90) {
    console.log('Квартира знаходиться у 3 підїзді')
}

//Завдання 3
let number = 25;
if(number === 10){
    console.log('ВІРНО')
}else{
    console.log('НЕ ВІРНО')
}

//Завдання 4
let writeData = 5;
if (typeof writeData === 'number') {
     document.write('це число')
} else if (typeof writeData === "string") {
     document.write('це текст')
} else if (typeof writeData === "object") {
     document.write('це обєкт')
} else if (typeof writeData === "boolean") {
     document.write('це булеве значення')
} else {
     document.write('Некоректно введені дані')
}

//Завдання 5
let weatherTemp = +prompt('Яка сьогодні температура на вулиці? Введіть число')
if (weatherTemp >= 10 && weatherTemp <= 22) {
     console.log('Я іду в ОКТЕН на навчання')
     alert('Я іду в ОКТЕН на навчання')
     document.write('Я іду в ОКТЕН на навчання')
} else {
     console.log('Сидимо вдома і вчимося ОНЛАЙН')
     alert('Сидимо вдома і вчимося ОНЛАЙН')
     document.write('Сидимо вдома і вчимося ОНЛАЙН')
}

//Завдання 6
let poleChudes = +prompt("Введите число от 1 до 5");
switch(poleChudes)
{
     case 1:
         alert("Вітаємо! Ви виграли автомобіль!");
         break;
     case 2:
         alert("Вітаємо! Ви виграли мотобайк!");
         break;

     case 3:
         alert("Вітаємо! Ви виграли телефон!");
         break;

     case 4:
         alert("Вітаємо! Ви виграли путвівку на море!");
         break;

     case 5:
         alert("Вітаємо! Ви виграли велосипед!");
         break;

     default:
         alert("Некоректно введені дані");
}
