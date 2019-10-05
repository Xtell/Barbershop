var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var overlay = document.querySelector(".modal-overlay");
var login = popup.querySelector("#user-login");
var password = popup.querySelector("#user-password");
var form = popup.querySelector("form");
var menu_items = document.querySelectorAll('a[href^="#"]');
var mapLink = document.querySelector(".button-map");
var mapPopup = document.querySelector(".modal-map");
var modalMapClose = mapPopup.querySelector(".modal-close");
console.log(modalMapClose);
var isStorageSupport = true;

function closeModal(popup, overlay) {
    popup.classList.remove("modal-show");
    overlay.classList.remove("modal-overlay-show");
    if (popup.classList.contains("modal-error")) {
        popup.classList.remove("modal-error");
    }
}
try {
    var storage = localStorage.getItem("name");
}
catch(err) {
    isStorageSupport = false;
}
mapLink.addEventListener('click', function(evt){
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
    overlay.classList.add("modal-overlay-show");
});
modalMapClose.addEventListener('click', function(evt) {

    evt.preventDefault();
    closeModal(mapPopup, overlay);

});
link.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("modal-overlay-show");
    if (storage) {
        login.value = storage;
        password.focus();
    }
    else {
        login.focus();
    }
    
});
close.addEventListener('click', function(evt) {
    closeModal(popup, overlay);
});
overlay.addEventListener("click", function(evt) {
    closeModal(popup, overlay);
});
form.addEventListener("submit", function(evt) {

    if (login.value === "" || password.value === ""){
        evt.preventDefault();
        if (popup.classList.contains("modal-error")) {
            popup.classList.remove("modal-error");
            void popup.offsetWidth;
           
        }
        popup.classList.add("modal-error");
        
    }
    else {
        if (popup.classList.contains("modal-error")) {
            popup.classList.remove("modal-error");
        }
        if (isStorageSupport) {
            localStorage.setItem("name", login.value);
        }
        
    }
});
// smooth scrolling to element 
for (var i = 0; i < menu_items.length; i++) {
    menu_items[i].addEventListener('click', function(evt) {
        evt.preventDefault();
        console.log(menu_items[i]);
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: 'smooth'
        });
    });
}
