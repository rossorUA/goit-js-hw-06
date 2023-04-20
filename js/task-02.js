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
