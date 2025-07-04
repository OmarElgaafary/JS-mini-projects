const inputElement = document.querySelector('.js-input');
const shippingElement = document.querySelector('.js-shipping');

const calculateShipping = () => {
    let preTotal = Number(inputElement.value);
    preTotal >= 40 ? preTotal : preTotal += 10;
    shippingElement.innerHTML = `Your total including shipping: $${preTotal}`;
}

const handleCostEnter = (event) => {
    if (event.key === 'Enter')
        calculateShipping();
}

const dollarSign = (event) => {
    event.value = '$' + event.value;
}