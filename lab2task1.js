const fr = [1, 2, 3, 4, 5];
const sc = ['a', 'b', 'c', 'd', 'f'];
const u = [1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'f'];
let j = 0, p = 0;


for (let i = 0; i < fr.length; i++) {
  if (u[p] === fr[i] && u[p + 1] === sc[i]) {
    console.log(u[p], u[p + 1]);
    p += 2;
  }
}