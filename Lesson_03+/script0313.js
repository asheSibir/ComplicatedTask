'use strict';
const week = [
    {language: 'ru', days: 'понедельник, вторник, среда, четверг, пятница, суббота, воскресенье', ind: 1},
    {language: 'eng', days: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday', ind: 2}
];
let lang = prompt('Выберите язык: ru или eng', '');
lang === week[0].language ? console.log(week[0].days) : console.log(week[1].days);
    // let x = 
    // return (week[x].days);


// console.log(week[0].days);


