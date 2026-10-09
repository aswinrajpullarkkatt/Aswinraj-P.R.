const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const emptyState = document.getElementById('emptyState');
const addTaskBtn = document.getElementById('addTaskBtn');

// Add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a valid task.");
        taskInput.focus();
        return;
    }

    // Create list element
    const li = document.createElement('li');

    // Left section (Checkbox + Text)
    const taskLeft = document.createElement('div');
    taskLeft.className = 'task-left';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('aria-label', 'Mark task as completed');

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    });

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;

    taskLeft.appendChild(checkbox);
    taskLeft.appendChild(span);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.setAttribute('aria-label', 'Delete task');

    deleteBtn.addEventListener('click', function () {
        li.remove();
        toggleEmptyState();
    });

    // Assemble task
    li.appendChild(taskLeft);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input and update empty state
    taskInput.value = "";
    toggleEmptyState();
    taskInput.focus();
}

// Show or hide the empty-state message
function toggleEmptyState() {
    if (taskList.children.length === 0) {
        emptyState.style.display = 'block';
    } else {
        emptyState.style.display = 'none';
    }
}

// Add task when button is clicked
addTaskBtn.addEventListener('click', addTask);

// Allow pressing Enter to add a task
taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Set the initial empty state
toggleEmptyState();