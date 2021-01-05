// 짝수와 홀수
// if문
function evenOrOdd(num) {
  if (num % 2 === 0) return 'Even';
  return 'Odd';
}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even

// 삼항 조건 연산자
function evenOrOdd(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even