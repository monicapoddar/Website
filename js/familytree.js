/* Open when someone clicks on the span element */
function openNav(id) {
    console.log(id);
    document.getElementById("myNav").style.width = "40%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}