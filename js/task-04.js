const divCounter = document.querySelector('#counter');
const valueSpan = document.querySelector('#counter #value');
const incrementButton = document.querySelector('#counter [data-action="increment"]');
const decrementButton = document.querySelector('#counter [data-action="decrement"]');
let counterValue = 0;

incrementButton.addEventListener('click', function() {
    counterValue++;
    valueSpan.textContent = counterValue;
  });
  
  decrementButton.addEventListener('click', function() {
    counterValue--;
    valueSpan.textContent = counterValue;
  });
  
