const searchInput = document.querySelector('.to-do-search');
const dueDateInput = document.querySelector('.js-due-date');
const toDoItems = document.querySelector('.to-do-items');
const toDoDelete = document.querySelector('.to-do-delete');
const errElement = document.querySelector('.err-msg')

let array = JSON.parse(localStorage.getItem('array'));
if (array == null)
    array = [];
document.querySelector('.to-do-search').addEventListener('keydown', (event) => {
    enterDown(event);
});

document.querySelector('.add-button').addEventListener('click', () => {
    displaySearch();
});


function displaySearch() {
    const name = searchInput.value;
    const dueDate = dueDateInput.value;

    if (!name && !dueDate) {
        errElement.innerHTML = 'Please enter to do name & due date.';
        return;
    }
    else if (!dueDate) {
        errElement.innerHTML = 'Please enter to due date.';
        return;
    }
    else if (!name) {
        errElement.innerHTML = 'Please enter to do name.';
        return;
    }
    else
        errElement.innerHTML = '';

    array.push({
        name,
        dueDate
    });
    updateToDo(array);
    searchInput.value = '';

}

function updateToDo() {
    toDoItems.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i])
            toDoItems.innerHTML += `<div style="display: grid; grid-template-columns: 500px 150px 100px; row-gap:10px;" class="inner-to-do-items">
                                        <div class="js-paragraph">
                                            ${array[i].name} 
                                        </div>
                                        <div class="js-paragraph">
                                            ${array[i].dueDate}
                                        </div>
                                        <button class="js-button">
                                            Delete
                                        </button>
                                    </div>`;
    }

    document.querySelectorAll('.js-button').forEach((value, index) => {
        value.addEventListener('click', () => {
            array.splice(index, 1);
            updateToDo();
        })
    });


    localStorage.setItem('array', JSON.stringify(array));
}

function enterDown(event) {
    if (event.key == 'Enter')
        displaySearch();
}


updateToDo(array);
