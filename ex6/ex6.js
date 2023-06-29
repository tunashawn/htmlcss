function toggleDropdown() {
    document.getElementById("dropdown-menu").classList.toggle("showList")
    
    var icon1 = document.getElementById("icon1").style.display
    var icon2 = document.getElementById("icon2").style.display

    if (icon1 == "none") {
        document.getElementById("icon1").style.display = "block"
        document.getElementById("icon2").style.display = "none"
    } else {
        document.getElementById("icon1").style.display = "none"
        document.getElementById("icon2").style.display = "block"
    }
}
