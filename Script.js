let addButton = document.getElementById("addButton");

let taskInput = document.getElementById("taskInput");

let taskList = document.getElementById("taskList");

addButton.onclick = function () {

    let taskText = taskInput.value;

    if(taskText === ""){
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    let deleteBtn = document.createElement("button");

    deleteBtn.innerText = "Delete";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.innerText = taskText + " ";

    li.appendChild(deleteBtn);
    
    li.onclick = function () {
    li.classList.toggle("completed");
  };

    taskList.appendChild(li);

    taskInput.value = "";

};