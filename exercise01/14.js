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