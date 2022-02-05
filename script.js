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
    let attempt = 10;
    function random1() {
        attempt--;
        if (attempt < 1) {
            let b = confirm('Попытки закончились, хотите сыграть еще?');
            if (b === true) {
                global();
            } else {
                return;
            }
        }
        if (guess === null) {
            guess = alert('Игра окончена');
        } else if (guess < number) {
            guess = +prompt(`Загаданное число больше, осталось попыток ${attempt}`);
            random1();
        } else if (!isNumber(guess)) {
            guess = +prompt('Введите число');
            attempt++;
            random1();
        } else if (guess > number) {
            guess = +prompt(`Загаданное число меньше, осталось попыток ${attempt}`);
            random1();
        } else if (guess === number) {
            let a = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
            if (a === true) {
                global();
            } else if (a === false) {
                return;
            }
        }
    }
    random1();
}
global();