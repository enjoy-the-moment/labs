// задана перша множина
let fr = [1, 2, 3, 4, 5];
// задана друга множина
let sc = [1, 9, 4, 25, 16, 3];

// сюр\'єкція (всі ел. з 1-ї відповідають якомусь ел. в 2-й, в 2-й можуть залишитись ще вільні елементи):
let j = fr.length;

console.log('Функція для даного сюр\'єктивного відображення: y = x²');
for(let coeff1 = 0; coeff1 < fr.length; coeff1++) {
    for(let coeff2 = 0; coeff2 < sc.length; coeff2++) {
        if (fr[coeff1] ** 2 === sc[coeff2]) {
            // тут задається умова для відображення, в даному випадку це квадрат
            console.log('Елемент 1ї множини: ', fr[coeff1], 'має відображення в 2й множини: ', sc[coeff2]);
            j--;
        }
    }
}

if (j === 0) {
    console.log('Властивість сюр\'єкції виконана. Кожен елемент з першої множини має відображення в другій.');
} else {
    console.log('Властивість сюр\'єкції не виконана.');
}