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