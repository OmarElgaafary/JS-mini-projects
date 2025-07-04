const searchInput = document.querySelector('.to-do-search');
const dueDateInput = document.querySelector('.js-due-date');
const toDoItems = document.querySelector('.to-do-items');
const toDoDelete = document.querySelector('.to-do-delete');


let array = JSON.parse(localStorage.getItem('array'));

if (array == null)
    array = [];

let string;

function displaySearch() {
    const name = searchInput.value;
    const dueDate = dueDateInput.value;

    if (!name || !dueDate)
        return;

    array.push({
        name: name,
        dueDate: dueDate
    });
    updateToDos(array);
    searchInput.value = '';

}

const updateToDos = (array) => {
    toDoItems.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i])
            toDoItems.innerHTML += `<div class"inner-to-do-items">
                                        <p class="js-paragraph">
                                            ${array[i].name} ${array[i].dueDate}
                                        </p>
                                        <button class="js-button" onclick="array.splice(${i}, 1); updateToDos(array);">
                                            Delete
                                        </button>
                                    </div>`;
    }

    localStorage.setItem('array', JSON.stringify(array));
}

const enterDown = (event) => {
    if (event.key == 'Enter')
        displaySearch();
}

updateToDos(array);