'use strict';
// Переменная lang может принимать 2 значения: 'ru' 'en'.
// Написать условия при котором в зависимости от значения lang 
// будут выводится дни недели на русском или английском языке. 
// Решите задачу
// через if, 
// через switch-case 
// через многомерный массив без ифов и switch.

// Вариант IF
let lang = prompt('Выберите язык: ru или eng', '');

if (lang === 'ru') {
    console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
} else if (lang === 'eng'){
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
} else {
    console.log('неизвестный язык');
}

//Вариант switch-case 
lang = prompt('Выберите язык: ru или eng', '');

switch(lang) {
    case 'ru':
        console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
        break;
    case 'eng':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break;
    default: 
        console.log('неизвестный язык');
}

//через многомерный массив без ифов и switch.
'use strict';
const week = [
    {language: 'ru', days: 'понедельник, вторник, среда, четверг, пятница, суббота, воскресенье', ind: 1},
    {language: 'eng', days: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday', ind: 2}
];
let lingua = prompt('Выберите язык: ru или eng', '');
lingua === week[0].language ? console.log(week[0].days) : console.log(week[1].days);



// У нас есть переменная namePerson. 
// Если значение этой переменной “Артем” то вывести в консоль “директор”, 
// если значение “Максим” то вывести в консоль “преподаватель”, 
// с любым другим значением вывести в консоль “студент”
// Решить задачу с помощью нескольких тернарных операторов, без использования if или switch

let namePerson = prompt('Имя!','');
let stat  = (namePerson === 'Артем') ? console.log('директор') : (namePerson === 'Максим') ? console.log('преподаватель') : console.log('студент');

