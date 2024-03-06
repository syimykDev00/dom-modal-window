let btn = document.querySelector(".open");
let modal = document.querySelector(".modal");
let close = document.querySelector(".close");

btn.addEventListener("click", () => {
    modal.style.display = "block"
})

close.addEventListener("click", () => {
    modal.style.display = "none"
})