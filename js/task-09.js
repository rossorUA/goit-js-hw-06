function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector('body'),
  color: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
};

refs.button.addEventListener('click', handlerClick);

function handlerClick() {
  const newColor = getRandomHexColor();
  refs.body.style.backgroundColor = newColor;
  refs.color.textContent = newColor;
}
