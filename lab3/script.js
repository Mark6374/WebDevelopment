const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const showCompletedBtn = document.getElementById('show-completed');

let tasks = []; 
let showOnlyCompleted = false; 

function renderTasks() {
    list.innerHTML = ''; 
    
    let tasksToShow = tasks;
    
    if (showOnlyCompleted) {
        tasksToShow = tasks.filter(task => task.completed);
        showCompletedBtn.classList.add('active');
    } else {
        showCompletedBtn.classList.remove('active');
    }
    
  
    tasksToShow.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        if (task.completed) {
            li.classList.add('completed');
        }
        
        const leftDiv = document.createElement('div');
        leftDiv.className = 'left';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        
        const span = document.createElement('span');
        span.textContent = task.text;
        
     
        checkbox.addEventListener('change', () => {
            task.completed = checkbox.checked;
            li.classList.toggle('completed', task.completed);
            
          
            if (showOnlyCompleted) {
                renderTasks();
            }
        });
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        
      
        deleteBtn.addEventListener('click', () => {
         
            const taskIndex = tasks.findIndex(t => t.text === task.text && t.completed === task.completed);
            if (taskIndex !== -1) {
                tasks.splice(taskIndex, 1);
            }
            renderTasks();
        });
        
        leftDiv.appendChild(checkbox);
        leftDiv.appendChild(span);
        
        li.appendChild(leftDiv);
        li.appendChild(deleteBtn);
        
        list.appendChild(li);
    });
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const taskText = input.value.trim();
    if (!taskText) return;
    
    
    tasks.push({
        text: taskText,
        completed: false
    });
    
    renderTasks();
    input.value = '';
});


showCompletedBtn.addEventListener('click', () => {
    showOnlyCompleted = !showOnlyCompleted; 
    renderTasks();
});