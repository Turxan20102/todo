
document.getElementById('addTaskBtn').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput');
    let task = taskInput.value.trim();
    if (task) {
        addTask(task);
        taskInput.value = '';
    }
});

function addTask(task) {
    let taskList = document.getElementById('taskList');

    let li = document.createElement('li');
    li.textContent = task;

    let removeBtn = document.createElement('button');
    removeBtn.textContent = 'delete';
    removeBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);
}
