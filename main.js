// Función para crear una nueva tarea
function createTask() {
  const input = document.getElementById('new-task');
  const taskText = input.value.trim();
  
  if (taskText !== '') {
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.className = 'todo-item';
    taskItem.textContent = taskText;
    taskItem.draggable = true;
    taskItem.addEventListener('dragstart', dragStart);
    taskItem.addEventListener('dragover', dragOver);
    taskItem.addEventListener('drop', drop);
    
    taskList.appendChild(taskItem);
    input.value = '';
  }
}

// Funciones para manejar los eventos de arrastrar y soltar
function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const taskId = event.dataTransfer.getData('text/plain');
  const taskElement = document.getElementById(taskId);
  const dropTarget = event.target;
  
  if (dropTarget.className === 'todo-item') {
    dropTarget.parentNode.insertBefore(taskElement, dropTarget.nextSibling);
  }
}

// Agregar evento al botón para crear una nueva tarea
const addButton = document.getElementById('add-task');
addButton.addEventListener('click', createTask);
