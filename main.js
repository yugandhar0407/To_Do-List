// Function to add a new task to the list
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskInput.value}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
            
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }else{
        alert("Please Add Your Task");
    }
}

// Function to delete a task from the list
function deleteTask(btn) {
    const li = btn.parentNode;
    const taskList = document.getElementById('taskList');
    taskList.removeChild(li);
}
