const imageElem = document.getElementById("js-product");
const buttonElem = document.querySelectorAll(".btn");

// Remove the active class
const addRemoveActive = () => {
  buttonElem.forEach((btn) => {
    btn.classList.remove("active");
  });
};

// Change image when the control buttons are clicked
buttonElem.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    imageElem.src = `images/image${i + 1}.png`;
    addRemoveActive();
    btn.classList.add("active");
  });
});


// alternative
// buttonElem.forEach((btn, i) => {
//   btn.addEventListener("click", () => {
//     i === 0
//       ? (imageElem.src = `images/image1.png`)
//       : i === 1
//       ? (imageElem.src = "images/image2.png")
//       : (imageElem.src = "images/image3.png");
//   });
// });