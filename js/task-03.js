const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const addImg = document.querySelector(".gallery");
const createGallery = images
  .map((image) => {
    return `<li class="img-box">
  <img
    src="${image.url}" 
    alt="${image.alt}" 
    width="150"
    height="120"
    class="box-picture">
  </li>`;
  })
  .join("");
addImg.style.backgroundColor = "teal";
addImg.style.display = "flex";
addImg.insertAdjacentHTML("beforeend", createGallery);
