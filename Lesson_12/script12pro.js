'use strict';
let color = document.getElementById('color');
let button = document.getElementById('change');

//ЗАМЕНА ЦВЕТА ФОНА
function changeBack (){
    let nameOfColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    document.body.style.backgroundColor = nameOfColor; //цвет фона
    button.style.color = nameOfColor;//цвет кнопки
    color.innerText = nameOfColor.toString();
}
button.addEventListener('click', changeBack);


