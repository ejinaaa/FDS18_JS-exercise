todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function removeTodo(id) {
  let index = 0;
  todos.forEach((v, i) => {
    if (todos[i]['id'] === id) index = i;
  });
  return todos.splice(index, 1);
}

removeTodo(2);

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/