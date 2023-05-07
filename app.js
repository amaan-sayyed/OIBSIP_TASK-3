// Get elements from the DOM
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const pendingTasksList = document.getElementById('pending-tasks');
const completedTasksList = document.getElementById('completed-tasks');

// Add event listener to the "Add" button
addBtn.addEventListener('click', addTask);

// Add event listener to the task input field to allow user to add tasks by pressing enter key
taskInput.addEventListener('keydown', function(event) {
	if (event.key === 'Enter') {
		addTask();
	}
});

// Add task to the pending task list
