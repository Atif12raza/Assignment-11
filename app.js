function add() {
    var input = document.getElementById('todoInput');
    var itemText = input.value.trim();
    if (itemText === '') {
        alert('Please enter a task!');
        return;
    }
    var li = document.createElement('li');
    li.textContent = itemText;
    
    var editBtn = document.createElement('button');
    editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    editBtn.className = 'edit-btn';
    editBtn.onclick = function() {
        var newText = prompt('Edit your task:', itemText);
        if (newText) {
            li.firstChild.textContent = newText;
        }
    };

    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    document.getElementById('todoList').appendChild(li);
    input.value = '';
}

function deleteAll() {
    var todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
}