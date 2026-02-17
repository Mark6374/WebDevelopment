const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskText = input.value.trim();
    if (!taskText) return;

    const li = document.createElement('li');
    li.className = 'todo-item';

    const leftDiv = document.createElement('div');
    leftDiv.className = 'left';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = taskText;

    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

    deleteBtn.addEventListener('click', () => {
        list.removeChild(li);
    });

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(span);

    li.appendChild(leftDiv);
    li.appendChild(deleteBtn);

    list.appendChild(li);

    input.value = '';
});