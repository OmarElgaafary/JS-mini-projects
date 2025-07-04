const searchInput = document.querySelector('.to-do-search');
const dueDateInput = document.querySelector('.js-due-date');
const toDoItems = document.querySelector('.to-do-items');
const toDoDelete = document.querySelector('.to-do-delete');


let array = [];
let string;

function displaySearch() {
    const name = searchInput.value;
    const dueDate = dueDateInput.value;

    array.push({
        name,
        dueDate
    });
    updateToDos(array);
    searchInput.value = '';

}

const enterDown = (event) => {
    if (event.key == 'Enter')
        displaySearch();
}

const updateToDos = (array) => {
    toDoItems.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i])
            toDoItems.innerHTML += `<p>${array[i]}</p><button onclick="array.splice(${i}, 1); displaySearch();">Delete</button>`;
    }
}

const deleteToDo = (id) => {
    const idElement1 = document.getElementById(`${id1}`);
    if (idElement1)
        idElement1.remove();
}
