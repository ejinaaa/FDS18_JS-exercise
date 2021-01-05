let sum3 = 0;
let p = 1;
while (p < 20) {
  if (!(p % 2 && p % 3)) sum3 += p;
  p++;
}
console.log(sum3);