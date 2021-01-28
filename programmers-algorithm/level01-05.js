// 2016년
function solution(a, b) {
  const getDate = new Date(2016, a - 1, b);
  const day = getDate.getDay();
  const arr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return arr[day];
}

console.log(solution(2, 14));