/*
const fr = [1, 2, 3, 4, 5];
const sc = ['a', 'b', 'c', 'd', 'f'];
const u = [1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'f'];
let j = 0, p = 0;

// це пряме відношення, рівна кількість ел. x та y, все один до одного, воно працює оаоаоаоаоаоао))
for (let i = 0; i < fr.length; i++) {
  if (u[p] === fr[i] && u[p + 1] === sc[i]) {
    console.log(u[p], "відноситься до", u[p + 1]);
    p += 2;
  }
}
*/

const fr = [1, 2, 3, 4, 5];
const sc = ['a', 'b', 'c', 'd', 'f'];
const u = [1, 'b', 2, 'c', 3, 'd', 4, 'f', 5, 'a'];
let j = 0, p = 0;

for (let i = 0; i < fr.length; i++) {
  
  if (u[p] === fr[fr.length - 1] && u[p + 1] === sc[0]) {
    console.log(u[p], "відноситься до", sc[0]);
  }
  if (u[p] === fr[i] && (u[p + 1] === sc[i] || u[p + 1] === sc[i + 1])) {
    console.log(u[p], "відноситься до", u[p + 1]);
    p += 2;
  } /*else if (u[p] === fr[fr.length - 1] && u[p + 1] === sc[0]) {
    console.log(u[p], "відноситься до", sc[0]);
    p += 2;
  }/* else if (u[p] !== fr[i]) {
    console.log('Відображення задано не вірно, елемент з першої множини не має відображення в другій');
  } */
}