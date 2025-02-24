const menuIcon = document.getElementById("menu");
const navigation = document.querySelector("nav");
const closeIcon = document.getElementById("close-menu");
const overlay = document.querySelector(".overlay");

console.log(closeIcon.nextElementSibling);

menuIcon.addEventListener("click", () => {
    navigation.style.right = "0";
    overlay.classList.remove("hide");
});

closeIcon.addEventListener("click", () => {
    navigation.style.right = "-256px";
    overlay.classList.add("hide");
});
