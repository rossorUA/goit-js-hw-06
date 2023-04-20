function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('[type="number"]'),
  buttonCreate: document.querySelector('[data-create]'),
  buttonDestroy: document.querySelector('[data-destroy]'),
};
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  function handlerInput() {
    amount = refs.input.value;
  }
  refs.input.addEventListener('input', handlerInput);
  function handlerCreate() {
    for (let i = 1; i <= amount; i += 1) {
      let newDiv = document.createElement('div');
      let sizeOfDiv = (i - 1) * 10 + 30;
      newDiv.style.width = `${sizeOfDiv}px`;
      newDiv.style.height = `${sizeOfDiv}px`;
      newDiv.style.backgroundColor = getRandomHexColor();
      boxes.append(newDiv);
    }
  }
  refs.buttonCreate.addEventListener('click', handlerCreate);
}

function destroyBoxes() {
  function handlerDestroy() {
    boxes.innerHTML = '';
  }
  refs.buttonDestroy.addEventListener('click', handlerDestroy);
}

createBoxes();
destroyBoxes();
