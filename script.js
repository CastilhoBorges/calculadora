function appendToDisplay(value) {
    document.querySelector('#display').value += value ;
}

function clearDisplay() {
    document.querySelector('#display').value = '';
}

function calculateResult() {
    try {
        const result = eval(document.querySelector('#display').value);
        document.querySelector('#display').value = result
    } catch (error) {
        document.querySelector('#display').value = 'Erro'
    }
}