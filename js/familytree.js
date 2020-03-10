/* Open when someone clicks on the span element */
function openNav(id) {
    console.log(id);
    if (id == "poddar-monica" || id == "poddar-monica-time") {
        document.getElementById("overlay-img").src = "resources/assignments/monica.png"
    } else if (id == "poddar-kamal" || id == "poddar-kamal-time") {
        document.getElementById("overlay-img").src = "resources/assignments/poddar-kamal.png"
    } else if (id == "poddar-anjana" || id == "poddar-anjana-time") {
        document.getElementById("overlay-img").src = "resources/assignments/poddar-anjana.png"
    } else if (id == "das-ranjan" || id == "das-ranjan-time") {
        document.getElementById("overlay-img").src = "resources/assignments/das-ranjan.png"
    } else if (id == "das-swapna" || id == "das-swapna-time") {
        document.getElementById("overlay-img").src = "resources/assignments/das-swapna.png"
    } else if (id == "kaku" || id == "kaku-time") {
        document.getElementById("overlay-img").src = "resources/assignments/kaku.png"
    } else {
        document.getElementById("overlay-img").src = "resources/assignments/monica.png"
    }
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}