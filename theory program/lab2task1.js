const fr = [1, 2, 3, 4, 5];
const sc = ['a', 'b', 'c', 'd', 'f'];
const u = [1, 'b', 2, 'c', 3, 'd', 4, 'f', 5, 'a'];
let p = 0;

for (let i = 0; i < fr.length; i++) {
  if (u[p] === fr[i] && (u[p + 1] === sc[i] || u[p + 1] === sc[i + 1])) {
    console.log(u[p], "відноситься до", u[p + 1]);
    p += 2;
  } else if (u[p] === fr[fr.length - 1] && u[p + 1] === sc[0]) {
    console.log(u[p], "відноситься до", sc[0]);
  } else if (u[p] === fr[i] && (u[p + 1] !== sc[i] || u[p + 1] !== sc[i + 1])) {
    console.log('Відображення задано не вірно, елемент з першої множини не має відображення в другій або має невірне відображення');
  } else {
    console.log('Помилка! Один елемент з першої множини, а саме: ' + u[p] + ', може мати тільки одне відображення в другій')
    break;
  }
}