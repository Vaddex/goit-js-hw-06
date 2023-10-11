const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// create new ingridients li
const createLi = ingredients.map((item) => {
  const element = document.createElement("li");
  element.textContent = item;
  element.classList.add("item");
  let adder = document.querySelector("#ingredients");
  adder.append(element);
  return element;
});

