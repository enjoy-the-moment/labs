// задана перша множина
const fr = [1, 2, 3, 4, 5];
// задана друга множина
const sc = [1, 9, 4, 25, 16];
// задане відображення
let j = 0;

console.log('Функція для даного відображення: y = x²');
for(let coeff1 = 0; coeff1 < fr.length; coeff1++) {
    for(let coeff2 = 0; coeff2 < sc.length; coeff2++) {
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