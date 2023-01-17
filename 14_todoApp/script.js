const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll= document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");


form.addEventListener("submit",newItemAdd);

taskList.addEventListener("click",function(e){
    if(e.target.className==="fas fa-times"){
        if (confirm("Are u sure?") == true) {
            e.target.parentElement.parentElement.remove();
          } 
    }
    e.preventDefault();
});

btnDeleteAll.addEventListener("click", deleteAllItems);

function deleteAllItems(e){
    if(confirm("Are u sure?")==true){
        taskList.innerHTML="";
        // taskList.childNodes.forEach(function(item){
        //     if(item.nodeType === 1){
        //         item.remove();
        //     }
        // });
    }
    
}


function newItemAdd(e){
    if(input.value===''){
        alert("Add New Task, Please")
    }

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
input.value="";
e.preventDefault();
}