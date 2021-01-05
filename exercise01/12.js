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