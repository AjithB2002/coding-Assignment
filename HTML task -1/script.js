// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Append clicked value to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Calculate the result of the expression
function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);  // Perform calculation
    } catch (error) {
        display.value = "Error";  // Handle any errors in the expression
    }
}
