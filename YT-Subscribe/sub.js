const subButton = document.querySelector('.js-sub');

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