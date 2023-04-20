// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі < li > за одну операцію у список ul#ingredients.

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

function createIngredientsList(elements) {
  const listIngredients = document.querySelector('#ingredients');
  const arrOfItems = [];
  elements.map(element => {
    const items = document.createElement('li');
    items.classList.add('item');
    items.textContent = element;
    arrOfItems.push(items);
  });
  listIngredients.append(...arrOfItems);
}

createIngredientsList(ingredients);
