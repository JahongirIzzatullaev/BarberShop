var modalActive = document.getElementById("modal");
var modalActive2 = document.getElementById("modal-active");

function clickButton() {
    modalActive.classList.add("active");
    modalActive2.classList.add("active");
}

function closeModal() {
    modalActive.classList.remove("active");
    modalActive2.classList.remove("active");
}