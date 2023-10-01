// Задание 1

let a = 152;
let b = 2;
let sum = a + b;
document.writeln("152 + 2 = " + sum);

// Задание 2

let names = prompt("Как тебя зовут?");
document.write("<br>");
document.writeln("Привет, " + names + "!");

// Задание 3

function printName(name) {
    document.writeln("Ты случайно не " + name + "?");
}
document.write("<br>");
printName("программист");

// Задание 4

let msg = confirm("Это так на самом деле?");
if (msg) {
    document.write("<br>");
    document.writeln("Никто не сомневался!");
    document.write("<br>");
} else {
    document.write("<br>");
    document.writeln("Войди в IT!");
    document.write("<br>");
}

// Задание 5

let age = 18;
document.write("<br>");

switch (age) {
    case 18:
        document.writeln("Вы совершеннолетний - все можно!");
        break
    case 16:
        document.writeln("Вы  не совершеннолетний - ничего нельзя!");
        break
    default:
        document.writeln("Мы не знаем, что вам сказать на этот счет!");
        break
}