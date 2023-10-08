const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// create new ingridients li
const ulIngidients = document.querySelector(".ingredients");
const liIngredients = document.createElement("li");
liIngredients.className = "item";
liIngredients.textContent = `${ingredients}`;
console.log(liIngredients);

