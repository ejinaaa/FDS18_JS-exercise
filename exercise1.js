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

// 11번 삼각형 출력하기 - pattern 1
var line = 5;
let result = '';
for (let i = 0; i < line; i++) {
  for (let j = 0; j <= i; j++) {
    result += '*';
  }
  result += '\n';
}
console.log(result);

// 12번 삼각형 출력하기 - pattern 2
let result2 = '';
for (let i = line; i > 0; i--) {
  for (let j = line; j > i; j--) {  // 공백 증가
    result2 += ' ';
  }
  for (let j = 0; j < i; j++ ) {  // 별 감소
    result2 += '*';
  }
  result2 += '\n';
}
console.log(result2);

// 13번 삼각형 출력하기 - pattern 3
let result3 = '';
for (let i = line; i > 0; i--) {
  for (let j = 0; j < i; j++) { // 별 감소
    result3 += '*';
  }
  result3 += '\n';
}
console.log(result3);

// 14번 삼각형 출력하기 - pattern 4
let result4 = '';
for (let i = 0; i < line; i++) {
  for (let j = line - 1; j > i; j--) {  // 공백 감소
    result4 += ' ';
  }
  for (let j = 0; j <= i; j++) {  // 별 증가
    result4 += '*';
  }
  result4 += '\n';
}
console.log(result4);

// 15번 정삼각형 출력하기
let result5 = '';
for (let i = 0; i < line; i++) {
  for (let j = line - 1; j > i; j--) {  // 공백 감소
    result5 += ' ';
  }
  for (let j = 0; j <= i * 2; j++) { // 별 증가
    result5 += '*';
  }
  for (let j = line - 1; j > i; j--) {  // 공백 감소
    result5 += ' ';
  }
  result5 += '\n';
}
console.log(result5);

// 16번 역정삼각형 출력하기 (보류)
let result6 = '';
console.log('18번');
for (let i = 0; i < line + 1; i++) {
  for (let j = 0; j < i; j++) {  // 공백 감소
    result6 += ' ';
  }
  for (let j = line; j > i; j--) { // 별 증가
    result6 += '*';
  }
  result6 += '\n';
}
console.log(result6);