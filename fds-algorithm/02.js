//  1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기 (Google)
// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성하라. 단, 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다. 예를 들어 8808은 3, 8888은 4로 카운팅 해야 한다.

function getCount8 () {
  // let arr = [];
  // let count = 0;
  // for(let i = 0; i < 10000; i++) {
    // arr[i] = `${i + 1}`;
    // if (arr[i].includes('8')) count += arr[i].match(/8/g).length;
  // }

  // const arr = Array.from({ length: 9999 }, (_, i) => i + 1);
  // const count = arr.join('').match(/8/g).length;
  // return count;

  let count = 0;
  
  for (let i = 0; i < 10000; i++) {
    let num = i;
    
    while (num !== 0) {
      num % 10 === 8 ? count++ : count;
      num = Math.floor(num / 10);
    }
  }

  return count;
}

console.log(getCount8()); // 4000