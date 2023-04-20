const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', numberOfSymbols);

function numberOfSymbols() {
  if (textInput.classList.contains('invalid')) {
    textInput.classList.remove('invalid');
  } else if (textInput.classList.contains('valid')) {
    textInput.classList.remove('valid');
  }
  if (textInput.value.trim().length === Number(textInput.dataset.length)) {
    textInput.classList.add('valid');
  } else {
    textInput.classList.add('invalid');
  }
}
