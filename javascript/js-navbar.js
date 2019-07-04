function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className.add("responsive");
    } else {
        x.className.remove("responsive");
    }
}

