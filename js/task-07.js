const range = document.querySelector('#font-size-control');

const text = document.querySelector('#text');

range.addEventListener('input', changeFontSize);

function changeFontSize() {
  text.style.fontSize = `${range.value}px`;
}
