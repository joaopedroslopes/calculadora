var display = document.getElementById('result-display');
var operation = '';
let lastResult;

function clearDisplay() {
    display.textContent = '';
}

function liveUpdate(enteredValue) {
    if(display.textContent == 'Resultado'){
        display.textContent = '';
    } else if (display.textContent == lastResult){
        clearDisplay();
    }
    display.textContent += enteredValue;
    operation += enteredValue;
}

function specialLiveUpdate(enteredValue) {
    if(enteredValue == '÷'){
        display.textContent += '÷';
        operation += '/';
    } else if(enteredValue == 'x'){
        display.textContent += 'x';
        operation += '*';
    }
}

function calculate() {
    if(operation != ''){
        display.textContent = eval(operation);
        lastResult = eval(operation);
        console.log("Operação -> " + operation);
        console.log("Resultado -> " + lastResult);
        operation = '';
    }
}