const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// create new ingridients li
function ulIngidients(arr) {
  arr.forEach((elment) => document.createElement("li".textContent(elment)));
}
ulIngidients(ingredients);
