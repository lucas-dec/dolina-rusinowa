const btnHamburger = document.querySelector(".hamburger");
const navigation = document.querySelector("ul");
btnHamburger.addEventListener("click", () => {
  navigation.classList.toggle("active");
});
