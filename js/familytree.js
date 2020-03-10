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

function showLines(id) {
    console.log(id);
    if (id == "poddar-dulali-time") {
        document.getElementById("poddar-dulali-line-1").setAttribute("stroke-width", 3);
        document.getElementById("poddar-dulali-line-2").setAttribute("stroke-width", 3);
        document.getElementById("1937").setAttribute("font-size", 18);
        document.getElementById("1965").setAttribute("font-size", 18);
    } else if (id == "poddar-indrani-time") {
        document.getElementById("poddar-indrani-line-1").setAttribute("stroke-width", 3);
        document.getElementById("1945").setAttribute("font-size", 18);
    }
}

function hideLines(id) {
    console.log(id);
    if (id == "poddar-dulali-time") {
        document.getElementById("poddar-dulali-line-1").setAttribute("stroke-width", 0);
        document.getElementById("poddar-dulali-line-2").setAttribute("stroke-width", 0);
        document.getElementById("1937").setAttribute("font-size", 0);
        document.getElementById("1965").setAttribute("font-size", 0);
    } else if (id == "poddar-indrani-time") {
        document.getElementById("poddar-indrani-line-1").setAttribute("stroke-width", 0);
        document.getElementById("1945").setAttribute("font-size", 0);
    }
}