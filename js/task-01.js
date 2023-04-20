function categoriesAndElements(selector) {
  const items = document.querySelectorAll(selector);
  console.log(`Number of categories: ${items.length}`);

  items.forEach(item => {
    const category = item.firstElementChild.textContent;
    const elements = item.lastElementChild.childElementCount;
    console.log(`Category: ${category}\nElements: ${elements}`);
  });
}

categoriesAndElements('.item');
