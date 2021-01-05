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