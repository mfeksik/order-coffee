const addButton = document.querySelector('.add-button');
const form = document.querySelector('form');
const firstBeverage = document.querySelector('.beverage');

addButton.addEventListener('click', () => {
    const newBeverage = firstBeverage.cloneNode(true);

    const beverages = document.querySelectorAll('.beverage');
    const newIndex = beverages.length + 1;

    const title = newBeverage.querySelector('.beverage-count');
    title.textContent = `Напиток №${newIndex}`;

    newBeverage.querySelectorAll('input').forEach(input => {
        if (input.type === 'radio' || input.type === 'checkbox') {
            input.checked = input.defaultChecked;
        }
    });

    newBeverage.querySelector('select').selectedIndex = 1; // капучино как по умолчанию

    newBeverage.querySelectorAll('input[type="radio"]').forEach(input => {
        input.name = `milk_${newIndex}`;
    });

    form.insertBefore(newBeverage, addButton.parentElement);
});