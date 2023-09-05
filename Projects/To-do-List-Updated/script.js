const storedTodoLists = localStorage.getItem('todoList');
const todoLists = storedTodoLists ? JSON.parse(storedTodoLists) : [];

const todoListCss = document.querySelector('.js-task-list-child').classList;



function isChecked(checkBox) {
    const txtValue = checkBox.nextElementSibling;

    let count = todoLists.length;

    if (checkBox.checked) {

        txtValue.classList.add("checked");
        txtValue.style.opacity = "0.7";


    } else {
        txtValue.classList.remove("checked");
        txtValue.style.opacity = "1";


    }
    const checkedCount = Array.from(document.querySelectorAll('input[type="checkbox"]')).filter(checkBox => checkBox.checked).length;
    checkTask(todoLists.length - checkedCount);
    saveToLocalStorage();

}
function addBtn() {

    const inputField = document.getElementById("inputField");
    const inputFieldValue = inputField.value;

    if (inputFieldValue === "") {
        alert('You must enter a task!');
    } else {
        todoLists.push(inputFieldValue);
        updateToDoLists();
        saveToLocalStorage();
    }
    inputField.value = "";
    updateBackgroundClass();
    checkTask(todoLists.length);

}
function updateToDoLists() {
    let todoList = '';

    todoLists.forEach((value, index) => {

        const htmlTodo = `<div class='task'>
        
        <input type="checkbox" id="checkBox" onchange='isChecked(this)'>
        <p class="class-inputField">${value}</p>
        <div class='btn'>
            <button class='updateBtn' onclick='editTask(${index})'><i class="fa-solid fa-pen-to-square"></i></button>
            <button class='deleteBtn' onclick='deleteTask(${index})'><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>`;
        todoList += htmlTodo;
        todoListCss.add('task');
    });

    document.querySelector(".js-task-list").innerHTML = todoList;
    updateBackgroundClass();

}
function deleteTask(index) {
    todoLists.splice(index, 1);

    updateToDoLists();

    checkTask(todoLists.length);
    saveToLocalStorage();

}
function editTask(index) {

}
function updateBackgroundClass() {
    if (todoLists.length === 0) {
        todoListCss.remove('task');
    } else {
        todoListCss.add('task');
    }
}
function pressEnter(event) {
    if (event.key == "Enter") {
        addBtn();

    }
}
function checkTask(length) {
    const txtTask = document.querySelector(".task-list-txt");
    if (length > 0) {
        txtTask.innerHTML = `You have ${length} Task${length > 1 ? 's' : ''}`;

    } else {
        txtTask.innerHTML = `No Task`;
    }

}
//local storage
function saveToLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoLists));
}

checkTask(todoLists.length);
updateToDoLists();
updateBackgroundClass();
