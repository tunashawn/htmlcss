function showShareMenu() {
    var x = document.getElementById("hidden")
    if (x.style.display === "none") {
        x.style.display = "block"
    } else {
        x.style.display = "none"
    }
}

function hideShareMenu() {
    var x = document.getElementById("hidden")
    if (x.style.display === "block") {
        x.style.display = "none"
    }
}