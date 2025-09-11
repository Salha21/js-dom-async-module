let toDoList = document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-list');
    const newTaskInput = document.getElementById('new-task');
    const addButton = document.getElementById('add-btn');
    
    // Add new task
    addButton.addEventListener('click', function() {
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            const newItem = document.createElement('li');
            newItem.innerHTML = `
                <span class="task-text">${taskText}</span>
                <i class="fas fa-check check-icon"></i>
            `;
            todoList.appendChild(newItem);
            newTaskInput.value = '';
            
            // Add click event to the new item
            newItem.addEventListener('click', toggleCompleted);
        }
    });
    
    // Add task on pressing Enter
    newTaskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
    
    // Toggle completed state
    function toggleCompleted() {
        this.classList.toggle('completed');
    }
    
    // Add event listeners to existing items
    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
        item.addEventListener('click', toggleCompleted);
    });
});
