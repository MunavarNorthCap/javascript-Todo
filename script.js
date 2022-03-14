let jsonList = [];

var count = 0;
function increment() {
  count += 1;
  document.getElementById("incrementVal").innerText = count;
}
function decrement() {
  count = count - 1;
  document.getElementById("incrementVal").innerText = count;
}

function addTodo(values) {
  // console.log(values);
  document.getElementById("todoList").innerHTML = "";
  var template = document.getElementById("template").innerHTML;
  
  var render = Mustache.render(template, { todoList: values });
  document.getElementById("todoList").innerHTML = render;
}

let id = 0;
function add() {
  id++;
  jsonList.push({
    id: id,
    text: document.getElementById("todoInput").value,
    timestamp: new Date().toUTCString(),
    done: false,
  });
  document.getElementById("todoInput").value = "";
  addTodo(jsonList);
  increment();
}
function done(id) {
  for (let i = 0; i < jsonList.length; i++) {
    var td = jsonList[i];
    if (td.id === id) {
      td.done = !td.done;
    }
    // console.log(td);
  }
  addTodo(jsonList);
}
function delJSON(id) {
  for (let i = 0; i < jsonList.length; i++) {
    if (jsonList[i].id === id) {
      jsonList.splice(i, 1);
    }
  }
  addTodo(jsonList);
  if (count > 0) decrement();
}
function showAll() {
  addTodo(jsonList);
}
function active() {
  let activeArr = [];
  for (let todo of jsonList) {
    if (!todo.done) {
      activeArr.push(todo);
    }
  }
  addTodo(activeArr);
}
function completed() {
  let completedArr = [];
  for (let todo of jsonList) {
    if (todo.done) {
      completedArr.push(todo);
    }
  }
  addTodo(completedArr);
}
function clearCompleted() {
  let clearArr = [];
  for (let todo of jsonList) {
    if (!todo.done) {
      clearArr.push(todo);
    }
  }
  jsonList = clearArr;
  addTodo(jsonList);

  if (count > 0) decrement();
}