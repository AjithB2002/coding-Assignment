
function clearDisplay() {
    document.getElementById('display').value = '';
}


function appendToDisplay(value) {
    document.getElementById('display').value += value;
}


function calculateResult() {
    let display = document.getElementById('display');
    try {
    } catch (error) {
        display.value = "Error";  
    }
}
