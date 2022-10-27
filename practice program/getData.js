const data_fc = +prompt('Скільки елементів буде мати перша множина?');
let fc = [];

for(let d1 = 0; d1 < data_fc; d1++) {
    fc.push(+prompt('Введіть елемент множини'));
}
console.log('Перша множина складається з таких елементів: ' + fc);

const data_sc = +prompt('Скільки елементів буде мати друга множина?');
let sc = [];

for(let d2 = 0; d2 < data_sc; d2++) {
    sc.push(+prompt('Введіть елемент множини'));
}
console.log('Друга множина складається з таких елементів: ' + sc);