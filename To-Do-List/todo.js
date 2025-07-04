const searchInput = document.querySelector('.to-do-search');

let array = [];
let string;

function displaySearch() {
    let current = searchInput.value;
    array.push(current);
    console.log(array);
}

