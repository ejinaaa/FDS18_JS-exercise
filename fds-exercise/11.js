var line = 5;
let result = '';
for (let i = 0; i < line; i++) {
  for (let j = 0; j <= i; j++) {
    result += '*';
  }
  result += '\n';
}
console.log(result);