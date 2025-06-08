const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let editToDo = null;

inputBox.focus();

const addToDo = () => {
    const inputText = inputBox.value.trim();
    
    if (inputText.length == 0) {
        alert("You must write something inside your To Do to save it.");
        return false;
    }

    if (addBtn.value === "Edit") {
        editToDo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value = "Add";
        inputBox.value = "";
        editLocalTodos(inputText);
    } else {
            
        // Creating p tag
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = inputText;
        li.appendChild(p);

        // Creating Edit Button
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.classList.add("Btn", "editBtn");
        li.appendChild(editBtn);

        // Creating Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Remove";
        deleteBtn.classList.add("Btn", "deleteBtn");
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
        inputBox.focus();
        inputBox.value = "";
        
        saveLocalTodos(inputText);
    }
}

const updateToDo = (e) => {
    const target = e.target.innerHTML;
    
    if (target === "Remove") {
        todoList.removeChild(e.target.parentElement);
        deleteLocalTodos(e.target.parentElement);
    } 
    
    if (target === "Edit") {
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = "Edit";
        editToDo = e;
    }
}

const saveLocalTodos = (todo) => {
    let todos;
    
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

const getLocalToods = () => {
    let todos;
    
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
        todos.forEach(todo => {
            // Creating p tag
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.innerHTML = todo;
            li.appendChild(p);
    
            // Creating Edit Button
            const editBtn = document.createElement("button");
            editBtn.innerText = "Edit";
            editBtn.classList.add("Btn", "editBtn");
            li.appendChild(editBtn);
    
            // Creating Delete Button
            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Remove";
            deleteBtn.classList.add("Btn", "deleteBtn");
            li.appendChild(deleteBtn);
    
            todoList.appendChild(li);
            inputBox.focus();
        });
    }    
}

const deleteLocalTodos = (todo) => {
    let todos;
    
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    let todoText = todo.children[0].innerText;
    let todoIndex = todos.indexOf(todoText);
    todos.splice(todoIndex, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todoIndex);
}

const editLocalTodos = (todo) => {
    let todos = JSON.parse(localStorage.getItem('todos'));
    let todoIndex = todos.indexOf(todo);
    todos[todoIndex] = inputBox.value;
    localStorage.setItem("todos", JSON.stringify(todos));
}

document.addEventListener('DOMContentLoaded', getLocalToods);
todoList.addEventListener('click', updateToDo);
addBtn.addEventListener('click', addToDo);