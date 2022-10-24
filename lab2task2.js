const fr = [1, 2, 3, 4, 5];
const sc = ['a', 'b', 'c', 'd', 'f'];
let j = 0;
// ін’єкція:
console.log('Ін\'єктивне відображення: ')
for(let i = 0; i < fr.length; i++) {
    if (fr.indexOf(fr[i]) !== -1 && sc.indexOf(sc[i]) !== -1) {
        console.log(fr[i], "відноситься до", sc[i]);
    }
}

// cюр'єкція:
console.log('Сюр\'єктивне відображення: ')
for(let s = 0; s < fr.length; s++) {
    if (fr[s] === fr[fr.length - 1]) {
        console.log(fr[s], "відноситься до", sc[0]);
    } else if (fr.indexOf(fr[s]) !== -1 && sc.indexOf(sc[s]) !== -1) {
        console.log(fr[s], "відноситься до", sc[s]);
    }
}
console.log(j);