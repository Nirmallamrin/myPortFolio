

// Get the elements
const countElement = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// Initial count
let count = 0;

// Function to update count display
function updateCount() {
  countElement.textContent = count;
}

// Increment count
function increment() {
  count++;
  updateCount();
}

// Decrement count
function decrement() {
  if (count > 0) {
    count--;
    updateCount();
  }
}

// Reset count
function reset() {
  count = 0;
  updateCount();
}

// Event listeners for buttons
incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);
resetButton.addEventListener('click', reset);

// Initialize count display
updateCount();
