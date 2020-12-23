// 1번
// const todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function render() {
//   let html = '';

//   todos.forEach(todo => {
//     html += `<li id=${todo.id}>
//       <label><input type="checkbox" ${todo.completed ? 'checked' : ''}>${todo.content}</label>
//     </li>` + '\n';
//   });
//   // html = todos.map(v => `<li id=${v.id}>
//   //   <label><input type="checkbox" ${v.completed ? 'checked' : ''}>${v.content}</label>
//   // </li>`).join('\n');

//   return html;
// }

// console.log(render());

// 2번
// const todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function getValues(key) {
//   return todos.map(v => v[key]);
// }

// console.log(getValues('id')); // [3, 2, 1]
// console.log(getValues('content')); // ['HTML', 'CSS', 'Javascript']
// console.log(getValues('completed')); // [false, true, false]

// 3번
// const todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function sortBy(key) {
//   return todos.slice().sort((a, b) => a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
// }

// console.log(sortBy('id'));

// /*
// [
//   { id: 1, content: 'Javascript', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 3, content: 'HTML', completed: false }
// ]
// */
// console.log(sortBy('content'));
// /*
// [
//   { id: 2, content: 'CSS', completed: true },
//   { id: 3, content: 'HTML', completed: false },
//   { id: 1, content: 'Javascript', completed: false }
// ]
// */
// console.log(sortBy('completed'));
// /*
// [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 1, content: 'Javascript', completed: false },
//   { id: 2, content: 'CSS', completed: true }
// ]
// */

// 4번
// let todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function addTodo(newTodo) {
//   return todos.splice(0, 0, newTodo);
// }

// addTodo({ id: 4, content: 'Test', completed: false });

// console.log(todos);
// /*
// [
//   { id: 4, content: 'Test', completed: false },
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ]
// */

// 5번
// let todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function removeTodo(id) {
//   let index = 0;
//   todos.forEach((v, i) => {
//     if (todos[i]['id'] === id) index = i;
//   });
//   return todos.splice(index, 1);
// }

// removeTodo(2);

// console.log(todos);
// /*
// [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 1, content: 'Javascript', completed: false }
// ]
// */

// 9번
// let todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function getMaxId() {
//   return Math.max(...todos.map((v, i) => v['id']))
// }
// console.log(getMaxId()); // 3

// 선택 정렬 보류
function selectionSort(array) {
  // let orderedArray = array.sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
  let orderedArray = [];
  let value;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i ; j++) {
      if (array[i] < array[j]) value = array[i]
    }
    console.log(value)
  }
  return orderedArray;
}

console.log(selectionSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
console.log(selectionSort([2, 4, 5, 1, 3]));     // [1, 2, 3, 4, 5]
console.log(selectionSort([5, 2, 1, 3, 4, 6]));  // [1, 2, 3, 4, 5, 6]