const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  const expectedLength = input.dataset.length;
  const actualLength = input.value.length;

  if (actualLength === parseInt(expectedLength)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});




