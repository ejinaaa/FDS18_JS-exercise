let sum2 = 0;
let o = 1;
while (o < 20) {
  if (o % 2 && o % 3) sum2 += o;
  o++;
}
console.log(sum2);