const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll= document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
const deleteBtn=document.querySelector("ul");


btnAddNewTask.addEventListener("click",newItemAdd);

deleteBtn.addEventListener("click",function(e){
    if(e.target.className==="fas fa-times"){
    e.target.parentElement.parentElement.remove();
    }
});




function newItemAdd(){
const li = document.createElement("li");
li.className="list-group-item list-group-item-secondary";
li.setAttribute("title","new item");
li.setAttribute("data-id","5");

const text = document.createTextNode(`${input.value}`);
li.appendChild(text);

const a = document.createElement("a");
a.setAttribute("href","#");
a.className="delete-item float-right";
a.innerHTML="<i class='fas fa-times'></i>";

li.appendChild(a);

document.querySelector("#task-list").append(li);
}