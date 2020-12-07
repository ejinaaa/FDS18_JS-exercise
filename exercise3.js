// 정렬
function isSorted(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i+1]) return false;
  }
  return true;
}

console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([2, 3, 4, 1, 5])); // false

// 버블 정렬
function bubbleSort(array) {
  let num = 0;
  for (let i = array.length; i > 0; i--) {
      for (let j = 0; j < array.length; j++) {
          if (array[j] > array[j+1]) {
              num = array[j];
              array[j] = array[j+1];
              array[j+1] = num;
          }
      }
  }
  return array;
}
console.log(bubbleSort([2, 4, 5, 1, 3]));     // [1, 2, 3, 4, 5]
console.log(bubbleSort([5, 2, 1, 3, 4, 6]));  // [1, 2, 3, 4, 5, 6]
console.log(bubbleSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
