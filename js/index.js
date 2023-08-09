const menu = document.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__list");

menuItems.forEach(function (item) {
  item.addEventListener("click", (e) => {
    const currentItem = document.querySelector(".active");

    currentItem.classList.remove("active");
    e.target.classList.add("active");
  });
});
