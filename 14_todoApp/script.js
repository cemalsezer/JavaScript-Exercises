const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
let todos;

loadItems();

form.addEventListener("submit", newItemAdd);

taskList.addEventListener("click", function (e) {
  if (e.target.className === "fas fa-times") {
    if (confirm("Are u sure?") == true) {
      e.target.parentElement.parentElement.remove();
      deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
    }
  }
  e.preventDefault();
});

btnDeleteAll.addEventListener("click", deleteAllItems);

function loadItems() {
  todos = getItemFromLS();
  todos.forEach(function (item) {
    createItem(item);
  });
}

function getItemFromLS() {
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
  }

function deleteTodoFromStorage(deletetodo){
    let todos = getItemFromLS();

    todos.forEach(function(todo,index){
        if(todo===deletetodo){
            todos.splice(index,1);
        }
    });

    localStorage.setItem("todos",JSON.stringify(todos));
}

function deleteAllItems(e) {
  if (confirm("Are u sure?") == true) {
    // taskList.innerHTML = "";
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();
    // taskList.childNodes.forEach(function(item){
    //     if(item.nodeType === 1){
    //         item.remove();
    //     }
    // });
  }
}



function setItemToLS(newTodo) {
  todos = getItemFromLS();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function createItem(newTodo) {
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(newTodo));

  const a = document.createElement("a");
  a.setAttribute("href", "#");
  a.className = "delete-item float-right";
  a.innerHTML = "<i class='fas fa-times'></i>";

  li.appendChild(a);

  document.querySelector("#task-list").append(li);
}

function newItemAdd(e) {
  if (input.value === "" || input.value === " ") {
    alert("Add New Task, Please");
  }

  createItem(input.value);
  setItemToLS(input.value);
  input.value = "";
  e.preventDefault();
}
