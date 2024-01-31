let display = document.getElementById('display');
let currInput = '';

function append(value) {
    currInput += value;
    display.value = currInput;
}

function clean_Display() { 
    currInput = '';
    display.value = '';
}

function calculate() {
    try {
        currInput = eval(currInput).toString();
        display.value = currInput;
    } catch (error) {
        display.value = 'Error';
    }
}