let result3 = '';
for (let i = line; i > 0; i--) {
  for (let j = 0; j < i; j++) { // 별 감소
    result3 += '*';
  }
  result3 += '\n';
}
console.log(result3);