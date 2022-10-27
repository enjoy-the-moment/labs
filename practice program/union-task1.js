const data_fr = +prompt('Скільки елементів буде мати перша множина?');
let fr = [];

for(let d1 = 0; d1 < data_fr; d1++) {
    fr.push(+prompt('Введіть елемент множини'));
}
console.log('Перша множина складається з таких елементів: ' + fr);

const data_sc = +prompt('Скільки елементів буде мати друга множина?');
let sc = [];

for(let d2 = 0; d2 < data_sc; d2++) {
    sc.push(+prompt('Введіть елемент множини'));
}
console.log('Друга множина складається з таких елементів: ' + sc);

function task1(fr, sc) {
    let j = 0;
    console.log('Функція для даного відображення: y = x²');
    for (let coeff1 = 0; coeff1 < fr.length; coeff1++) {
        for (let coeff2 = 0; coeff2 < sc.length; coeff2++) {
            if (fr[coeff1] ** 2 === sc[coeff2]) {
                // тут задається умова для відображення, в даному випадку це квадрат
                console.log('Елемент 1ї множини: ', fr[coeff1], 'має відображення в 2й множини: ', sc[coeff2]);
                j++;
            }
        }
    }

    if (j === fr.length) {
        console.log('Кожен елемент з першої множини має відображення в другій.');
    } else {
        console.log('Деякі елементи з першої множини не мають відображення в другій, це не є відображення.');
    }
}
task1(fr, sc);