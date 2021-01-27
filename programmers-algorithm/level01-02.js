// 문자열 내림차순으로 배치하기
function solution(s) {
  const arr = s.split('');
  const sortedArr = arr.sort((v1, v2) => v1 < v2 ? 1 : v1 > v2 ? -1 : 0);
  const answer = sortedArr.join('');

  return answer;
}

// function solution(s) {
  // return s.split('').sort((v1, v2) => v1 < v2 ? 1 : v1 > v2 ? -1 : 0).join('');
// }