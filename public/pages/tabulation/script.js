let n = 10; // Default number of Fibonacci numbers to calculate
let table = [];
let step = 0;
let stepInfo = [];
const maxStepsToShow = 10;

function initialize() {
    n = parseInt(document.getElementById('fibCount').value);
    table = Array(n + 1).fill(0);
    table[1] = 1;
    step = 0;
    stepInfo = [];
    updateTable();
    updateMessage();
    updateStepInfo();
}

function updateTable() {
    const indexRow = document.getElementById('indexRow');
    const valueRow = document.getElementById('valueRow');
    indexRow.innerHTML = '';
    valueRow.innerHTML = '';

    // Add legend cells
    let indexLegend = document.createElement('div');
    indexLegend.className = 'cell index';
    indexLegend.textContent = 'Index';
    indexRow.appendChild(indexLegend);

    let valueLegend = document.createElement('div');
    valueLegend.className = 'cell index';
    valueLegend.textContent = 'Element';
    valueRow.appendChild(valueLegend);

    // Add index and value cells
    for (let i = 0; i <= n; i++) {
        let indexCell = document.createElement('div');
        indexCell.className = 'cell index';
        indexCell.id = `index-cell-${i}`;
        indexCell.textContent = i;
        indexRow.appendChild(indexCell);

        let valueCell = document.createElement('div');
        valueCell.className = 'cell';
        valueCell.id = `cell-${i}`;
        valueCell.textContent = table[i];
        valueRow.appendChild(valueCell);
    }
    highlightProgress();
}

function updateMessage() {
    const messageDiv = document.getElementById('message');
    let message;
    if (step === 0) {
        message = `Step ${step}: Initialize table[0] = 0`;
    } else if (step === 1) {
        message = `Step ${step}: Initialize table[1] = 1`;
    } else {
        message = `Step ${step}: Calculate table[${step}] = table[${step - 1}] + table[${step - 2}] = ${table[step - 1]} + ${table[step - 2]} = ${table[step]}`;
    }
    messageDiv.textContent = `Current Step: ${step}`;
    stepInfo.unshift(`Line ${step}: ${message}`);
    if (stepInfo.length > maxStepsToShow) {
        stepInfo.pop();
    }
    updateStepInfo();
}

function updateStepInfo() {
    const stepInfoDiv = document.getElementById('stepInfo');
    stepInfoDiv.innerHTML = stepInfo.join('<br>');
}

function nextStep() {
    if (step < n) {
        step++;
        if (step > 1) {
            table[step] = table[step - 1] + table[step - 2];
        }
        updateTable();
        updateMessage();
    }
}

function previousStep() {
    if (step > 0) {
        if (step == 1) {
            table[1] = 1;
        } else if (step == 2) {
            table[2] = 1;
        } else if (step > 2) {
            table[step] = 0;
        }
        stepInfo.shift(); // Remove the latest message when stepping back
        stepInfo.shift(); // Remove the latest message when stepping back
        step--;
        updateTable();
        updateMessage();
    }
}


function highlightProgress() {
    for (let i = 0; i <= n; i++) {
        const valueCell = document.getElementById(`cell-${i}`);
        valueCell.classList.remove('completed', 'initial', 'current');

        const indexCell = document.getElementById(`index-cell-${i}`);
        indexCell.classList.remove('current-index');

        if (i === 0) {
            valueCell.classList.add('initial');
        } else if (i <= step) {
            valueCell.classList.add('completed');
        }
        if (i === step) {
            valueCell.classList.add('current');
            indexCell.classList.add('current-index');
        }
    }
}

// Initialize the table with default values on load
initialize();
