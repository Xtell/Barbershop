var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var overlay = document.querySelector(".modal-overlay");

link.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("modal-show")
});
close.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});
overlay.addEventListener("click", function(evt) {
    popup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
});
