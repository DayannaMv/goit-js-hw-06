const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulIngredients = document.querySelector('#ingredients');

for (const item of ingredients) {
  const elementNew = document.createElement('li');
  elementNew.textContent = item;
  elementNew.classList.add('item');
  ulIngredients.appendChild(elementNew);
}

