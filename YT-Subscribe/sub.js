const subButton = document.querySelector('.js-sub');

document.querySelector('.js-button').addEventListener('click', () => {
    subscribeAction();
});

const subscribeAction = () => {

    if (subButton.innerHTML === 'Subscribed') {
        subButton.innerHTML = 'Subscribe';
        subButton.classList.replace('js-subed', 'js-sub');

    }
    else {
        subButton.innerHTML = 'Subscribed';
        subButton.classList.replace('js-sub', 'js-subed');
    }
}