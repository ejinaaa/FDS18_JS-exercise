// 1번 문제
let x = 15;

// 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라.
if (x > 10 && x < 20) {
  console.log(x);
}

// 2번 문제
for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

// 3번 문제
let e = '';
for (let i = 0; i < 10; i += 2) {
  e += i;
}
console.log(e);

// 4번 문제
for (let i = 9; i > 0; i -= 2) {
  console.log(i);
}

// 5번 문제
let l = 0;
while ( l < 10) {
  console.log(l);
  l += 2;
}

// 6번 문제
let m = 9;
while (m > 0) {
  console.log(m);
  m -= 2;
}

// 7번 문제
let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i;
}
console.log(sum);

// 8번 문제 다시 풀기 - 2의 배수도 아니고 3의 배수도 아닌 수 -> &&
let sum2 = 0;
let o = 1;
while (o < 20) {
  if (o % 2 && o % 3) sum2 += o;
  o++;
}
console.log(sum2);

// 9번 문제
let sum3 = 0;
let p = 1;
while (p < 20) {
  if (!(p % 2 && p % 3)) sum3 += p;
  p++;
}
console.log(sum3);

// 10번 문제
let dice = [];
for (let i = 1; i < 7; i++) {
  for (let j = 1; j < 7; j++) {
    if (i + j === 6) {
      dice = [i, j];
      console.log(dice);
    }
  }
}

// 11번 문제
var line = 5;
let result = '';
for (let i = 0; i < line; i++) {
  for (let j = 0; j <= i; j++) {
    result += '*';
  }
  result += '\n';
}
console.log(result);

// 12번 문제
