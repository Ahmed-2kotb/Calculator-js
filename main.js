const display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

const updateDisplay = () => {
    display.textContent = currentInput || '0';
};

const handleDigit = (number) => {
    currentInput += number;
    updateDisplay();
};

const handleOperator = (op) => {
    if (currentInput === '') return;

    if (previousInput !== '') {
        calculate();
    } else {
        previousInput = currentInput;
    }
    operator = op;
    currentInput = '';
};

const calculate = () => {
    let result;

    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
};

const clearAll = () => {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateDisplay();
};

document.querySelectorAll('.digit').forEach(button => {
    button.addEventListener('click', () => handleDigit(button.getAttribute('data-number')));
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => handleOperator(button.getAttribute('data-operator')));
});

document.querySelector('.equals').addEventListener('click', calculate);
document.querySelector('.clear').addEventListener('click', clearAll);

