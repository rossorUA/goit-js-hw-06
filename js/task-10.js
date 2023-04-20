// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

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
