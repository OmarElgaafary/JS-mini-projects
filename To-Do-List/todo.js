const searchInput = document.querySelector('.to-do-search');
const dueDateInput = document.querySelector('.js-due-date');
const toDoItems = document.querySelector('.to-do-items');
const toDoDelete = document.querySelector('.to-do-delete');
const errElement = document.querySelector('.err-msg')


let array = JSON.parse(localStorage.getItem('array'));

if (array == null)
    array = [];

let string;

function displaySearch() {
    const name = searchInput.value;
    const dueDate = dueDateInput.value;

    if (!name && !dueDate)
    {
        errElement.innerHTML = 'Please enter to do name & due date.';
        return;
    }
    else if (!dueDate)
    {
        errElement.innerHTML = 'Please enter to due date.';
        return;
    }
    else if (!name)
    {
        errElement.innerHTML = 'Please enter to do name.';
        return;
    }
    else
        errElement.innerHTML = '';

    array.push({
        name,
        dueDate
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
                                            ${array[i].name} 
                                        </p>
                                        <p class="js-paragraph">
                                            ${array[i].dueDate}
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