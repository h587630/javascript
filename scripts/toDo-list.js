

const toDoList = [{name:'Wash', dueDate: '2022-07-21'}];
renderToDoList();

function addToDo() {
    const inputElement = document.querySelector('.js-add-input');
    const task = inputElement.value;
    const inputElementDate = document.querySelector('.js-dueDate');
    const date = inputElementDate.value;
    console.log(task);
    toDoList.push({name: task, dueDate: date});
    console.log(toDoList);
    inputElement.value = '';
    renderToDoList();
}

function renderToDoList() {
    let todoListHTML = '';
    for (let i = 0; i < toDoList.length; i++) {
        const todo = toDoList[i];
        const name=todo.name;
        const dueDate=todo.dueDate;
        const htmlElement = `<p> 
        - ${name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${dueDate}        
        <button onclick="toDoList.splice(${i}, 1);
        renderToDoList();" class="delete"> Delete</button>
        </p> `;
        todoListHTML += htmlElement;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    document.querySelector('.js-dueDate').innerHTML = todoListHTML;
    console.log(todoListHTML);
}

