"use strict";
// Задача 1
// Запрограммируйте поведение кнопки по нажатию на нее (она меняет текст в
// span)
// function buttonClick(){
//     let elem = document.getElementById('elem');
//     elem.innerHTML = '1';
// }
// Задача 2
// Запрограммируйте  поведение кнопки по нажатию на нее (она меняет span на тег b,
// не изменяя при этом текст внутри тега)
// function buttonClick(){
//     let elem = document.getElementById('elem');
//     elem.outerHTML = '<b>'+elem.innerHTML+'</b>';
// }
// Задча 3
// Дан HTML код. Поменяйте содержимое абзацев на их порядковый номер в
// коде.
// function func(){
//     let elems = document.getElementsByTagName('p');
//     for(let i = 0; i<elems.length; i++){
//         elems[i].innerHTML = i+1;
//     }
// }
// Задача 4
// Дан HTML код. Поменяйте содержимое элементов с классом "а" на их
// порядковый номер в коде.
// function func(){
//     let elems = document.getElementsByClassName('a');
//     for(let i = 0;i<elems.length;i++){
//         elems[i].innerHTML = i+1;
//     }
// }
// Задача 5
// Дан HTML код. Поменяйте содержимое абзацев с классом "а" на их
// порядковый номер в коде
// function func(){
//         let elems = document.querySelectorAll('.a');
//         for(let i = 0;i<elems.length;i++){
//             elems[i].innerHTML = i+1;
//         }
// }

//  Домашнее задание:
//     1.
function click1() {
  let elem = document.getElementById("btn1");
  elem.outerHTML = "<strong>" + "Ку-Ку! я жирный!" + "</strong>";
}
// 2.
function click2() {
  let elem2 = document.getElementById("btn2");
  elem2.outerHTML = "<h3>" + "Абзац превратился в h3!" + "</h3>";
}
// 3.
function click3() {
  let elem3 = document.getElementById("btn3");
  elem3.outerHTML = "<h3>" + elem3.innerHTML + "</h3>";
}
// 4.
function summa() {
  let input1 = +document.getElementById("input1").value;
  let input2 = +document.getElementById("input2").value;
  let result = document.getElementById("result");
  result.innerHTML = input1 + input2;
}
// в итоге решение подсотрел , но так и не понял почему '+' перед document
// (без него складывает как строки)

// 5.
function func() {
  let elems = document.querySelectorAll("p");
  for (let i = 0; i < elems.length; i++) {
    elems[i].innerHTML = i;
  }
}
