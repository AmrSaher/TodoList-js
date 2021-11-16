var todo = document.getElementById("new-todo"),
    addTaskBtn = document.getElementById("add-task"),
    items = document.getElementById("tasks"),
    clearTasksBtn = document.getElementById("clear-tasks"),
    todos = [],
    validate = document.getElementById("error"),
    todoTitles = items.getElementsByTagName("p");

function showTasks() {
    items.innerHTML = "";
    for (let i = 0; i < todos.length; ++i) {
        let text = todos[i],
            status = todos[i];

        if (text != "") {
            let taskDiv = document.createElement("div");
            taskDiv.className = "item";
            let taskName = document.createElement("p");
            taskName.textContent = text;
            let taskDelete = document.createElement("button");
            taskDelete.className = "close";
            taskDelete.textContent = "x";
            taskDiv.appendChild(taskName);
            taskDiv.appendChild(taskDelete);

            items.appendChild(taskDiv);

            function delTask() {
                todos[i] = "";
                showTasks();
            }

            taskDelete.addEventListener("click", delTask);
        }
    }
}

function addTask() {
    error.style.display = "none";
    let text = todo.value;
    if (text == "") {
        error.style.display = "block";
        error.textContent = "The text is empty, please try again";
        return;
    }
    if (todos.indexOf(text)) {
        todos.push(text);
    }else {
        todo.value = "";
        // Error
        error.style.display = "block";
        error.textContent = "This task exists, please try again";
        return;
    }
    todo.value = "";
    showTasks();
    console.log(items);
}   

addTaskBtn.addEventListener("click", addTask);

function clearTasks() {
    todos = [];
    showTasks();
}

clearTasksBtn.addEventListener("click", clearTasks);