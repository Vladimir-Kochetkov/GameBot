"use strict";
function global() {
    let number = random();
    alert('Угадай число от 1 до 100');
    let guess = prompt('Какое число я загадал?');
    console.log(guess);
    let isNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };

    function random() {
        return Math.ceil(Math.random() * 100);
    }

    function random1() {
        if (guess === null) {
            guess = alert('Игра окончена');
        } else if (guess < number) {
            guess = +prompt('Загадайте число больше');
            random1();
        } else if (!isNumber(guess)) {
            guess = +prompt('Введите число');
            random1();
        } else if (guess > number) {
            guess = +prompt('Загадайте число меньше');
            random1();

        } else if (guess === number) {
            alert('Поздравляю, Вы угадали');
            global();
        }
    }
    random1();
}
global();