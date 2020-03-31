'use strict';
// 1) Создайте функцию, которая принимает 1 аргумент (название произвольное)
// — Если в качестве аргумента передана не строка 
//- функция оповещает об этом пользователя
// — В полученной (как аргумент) строке 
//функция должна убрать все пробелы в начале и в конце
// — Если строка более 30 знаков - то после 30го символа часть текста скрывается 
//и вместо них появляются три точки (...)
let i = 'hkhjh;n ';
const modifInput = function (a, callback) {
    if ((typeof a) === 'string'){ //чтоб была строкой
        if (a.substring(0,1) !== ' '){ //первый знак не пробел
            if (a.substring(a.length-1) !== ' '){ //последний знак не пробел
                if (a.length <=30){ //длина не превышает 30 знаков
                    callback(a);
                } else { //длина превышает 30 знаков
                    a = a.substring(0,29) + '...';
                }
            } else {
                a = a.substring(0, a.length-2); //убрали последний символ, раз он пробел
            }
        } else {
            a = a.substring(1, a.length); //убрали первый символ, если пробел
        }     
    } else {
        prompt('Введите другое значение!');
    }
};

modifInput (i, function(a){
    alert(a);
});




// function Name (a) {
//     let optimalType = typeof a;
//     let firSign = a.substring(0,1);
//     let lastSign = a.substring(a.length-1);
//     let long = a.length;

//     if (optimalType === 'string'){
//         a = a;
//     } else {
//         prompt('Введите другое значение!');
//     };

//     if(firSign !== ' '){
//         a = a;
//     } else {

//     }

//     console.log(a);
// };
// modifInput(i);






// const request = prompt('Значение'); //ввести значение!

// const checkType = function(){
//     if (typeof request !== 'string'){
//         alert('Поменяйте значение!');
//     } else {
//         return (typeof request);
//     }
// };
// const checkBeg = function(){
//     if (request.substring(0,1) === ' '){
//     request = request.substring(1, request.length);
//     }
//     return a;
// };
// console.log(checkBeg(request));

// //     const checkEnd = function(a){
// //         if (a.substring(a.length-1) === ' '){
// //         a = a.substring(0, a.length-2);
// //         }
// //         return a;
// //     };
    
// //     const long = function(a){
// //         if (a.length > 30){
// //         a = a.substring(0, 29) + '...';
// //         }
// //         return a;
// //     };
// // console.log(a);
// // };


   



















// const modeInput = function(a){
//     a = arg;
//     if (typeof a !== 'string'){
//         alert('Введите корректное значение!'); //проверка строчности
//     } else {
//         if(a.substring(0,1) === ''){
//             a = a.substring(1, a.length); //отрезаем пустоту вначале
//         } else {
//             if(a.substring(a.length-1) === ''){
//                 a = a.substring(a.length-2);
//         }
//     }
//     return a;
//     }
// };
// console.log(modeInput());
// console.log(modeInput.length);
