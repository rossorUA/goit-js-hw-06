const counter = document.querySelector('#value');
let counterValue = 0;

counter.previousElementSibling.addEventListener('click', minusOne);
counter.nextElementSibling.addEventListener('click', plusOne);

function minusOne() {
  counterValue -= 1;
  counter.textContent = counterValue;
}

function plusOne() {
  counterValue += 1;
  counter.textContent = counterValue;
}
