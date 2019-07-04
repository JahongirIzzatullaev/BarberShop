var modalActive = document.getElementById("modal");
var modalActive2 = document.getElementById("modal-active");

var modalActive3 = document.getElementById("modal-login");
var modalActive4 = document.getElementById("modal-active-login");

var modalActive5 = document.getElementById("modal-sign-up");
var modalActive6 = document.getElementById("modal-active-sign-up");
var myTopnav = document.getElementById("myTopnav");
function clickButton() {
    modalActive.classList.add("active");
    modalActive2.classList.add("active");
    myTopnav.classList.remove("responsive");
    closeModalLogin();
    closeModalSignUp()
}

function closeModal() {
    modalActive.classList.remove("active");
    modalActive2.classList.remove("active");
}

function clickButtonLogin() {
    modalActive3.classList.add("active");
    modalActive4.classList.add("active");
    myTopnav.classList.remove("responsive");
    closeModal();
    closeModalSignUp();
}

function closeModalLogin() {
    modalActive3.classList.remove("active");
    modalActive4.classList.remove("active");
}


function clickButtonSignUp() {
    modalActive5.classList.add("active");
    modalActive6.classList.add("active");
    myTopnav.classList.remove("responsive");
    closeModal();
    closeModalLogin();
}

function closeModalSignUp() {
    modalActive5.classList.remove("active");
    modalActive6.classList.remove("active");
}