//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')


// Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);
filterOption.addEventListener('click', filterTodo)

// Functions
function addTodo(event) {
    event.preventDefault();

    if (todoInput.value !== "") {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const todoItem = document.createElement('li')
        todoItem.innerText = todoInput.value;
        todoItem.classList.add('todo-item')

        todoDiv.appendChild(todoItem)

        const completeBtn = document.createElement('button');
        completeBtn.innerHTML = `<i class="fas fa-check"></i>`;
        completeBtn.classList.add('complete-btn')

        const trashBtn = document.createElement('button');
        trashBtn.innerHTML = `<i class="fas fa-trash"></i>`;
        trashBtn.classList.add('trash-btn')

        todoDiv.appendChild(completeBtn)
        todoDiv.appendChild(trashBtn)

        todoList.appendChild(todoDiv);

        todoInput.value = ''
    }

}

function deleteTodo(e) {
    const item = e.target;

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;

        todo.classList.toggle('completed')
    }
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;

        todo.classList.add('fall');
        todo.addEventListener('transitionend', () => {
            todo.remove()
        })

    }

}

function filterTodo(e) {
    const todos = todoList.childNodes;

    todos.forEach(todo => {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = "flex"
                } else { todo.style.display = "none" }
                break;
            case "uncompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = "flex"
                } else { todo.style.display = "none" }
                break;
        }
    })

}
