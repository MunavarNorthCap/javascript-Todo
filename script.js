var todos = [];

// let form = document.getElementById("form");
// form.addEventListener('submit', function(e){
//     e.preventDefault();
// })

var count = 0;
function increment() {
  count += 1;
  document.getElementById("incrementVal").innerText = count;
}
function decrement() {
  count = count -1;
  document.getElementById("incrementVal").innerText = count;
}

function update(values) {
    document.getElementById("todoList").innerHTML = ""
  for (let todo of values) {
    document.getElementById("todoList").innerHTML += `<div class="todo"
    style="text-decoration: ${todo.done ? "line-through" : "auto"};"> 
    <input type="radio" class="custom-radio" onclick="done(${todo.id})" /> 
    ${todo.id}  - ${todo.text} - ${todo.timestamp}
    <button class='trash-btn' onclick="delJSON(${todo.id})">
    <i class="fa-solid fa-x"></i></button>
    </div>`
  }
  // console.log(todos);
}
let id = 0;
function add() {
	id++;
	todos.push({
  	id: id,
    text: document.getElementById("todoInput").value,
    timestamp: new Date().toUTCString(),
    // color: id % 2 === 0 ?  "green" : "red",
    done: false,
  })
  document.getElementById("todoInput").value = ""
  update(todos);
  increment();
}
function done(id) {
	// todos = todos.map((td) => {
  // 	if (td.id === id) {
  //   	return {...td, done: !td.done}
  //   }
  //   return td;
  // })
  // console.log(todos);
  
  for (var i = 0; i < todos.length; i++) {
    var td = todos[i];  // console td = {id: 1, text: '', timestamp: 'Sat, 05 Mar 2022 09:55:03 GMT', done: false}
    // todos = new Array(td);
    
    if (td.id === id) {
      td.done = !td.done;
    }
    console.log(td);
  }
  update(todos);
}
function delJSON(id){
  todos = todos.filter((td) => {
    return td.id !== id;
  })
  if(count> 0){
    decrement();
  }
  update(todos);

  // for(let i=0; i<jsonList.length; i++) {
  //   if(jsonList[i].id === id) {
  //     jsonList.splice(i,1)
  //   }
  // }
  // addTodo(jsonList);
  // decrement();
}
function showAll() {
	update(todos);
}
function active() {
  update(todos.filter((t) => !t.done));

  // let activeArr = [];
  // for(let todo of jsonList){
  //   if(!todo.done) {
  //     activeArr.push(todo);
  //   }
  // }
  // addTodo(activeArr);
}
function completed() {
	update(todos.filter((t) => t.done));

  // let completedArr = [];
  // for(let todo of jsonList) {
  //   if(todo.done){
  //     completedArr.push(todo);
  //   }
  // }
  // addTodo(completedArr);
}
function clearCompleted() {
  if(todos.length>0 && todos.some(elm => elm.done === true)) {
    todos = todos.filter((t) => !t.done)
    update(todos);
    decrement();
  }

  // let clearArr = [];
  // for(let todo of jsonList) {
  //   if(!todo.done) {
  //     clearArr.push(todo)      // delete clearArr.push(todo)
  //   }
  // }
  // jsonList = clearArr;
  // addTodo(jsonList);
  
  // if(count > 0) decrement();
}