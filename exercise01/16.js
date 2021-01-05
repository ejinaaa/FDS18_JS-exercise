// 역정삼각형 출력하기 (보류)
let result6 = '';
for (let i = 0; i < line + 1; i++) {
  for (let j = 0; j < i; j++) {  // 공백 감소
    result6 += ' ';
  }
  for (let j = line * 2; j > i * 2; j--) { // 별 증가
    result6 += '*';
  }
  result6 += '\n';
}
console.log(result6);