var current = 1

document.addEventListener('DOMContentLoaded', function() {
    for (let index = 1; index <= 4; index++) {
        console.log(index)
        var name = "c" + index
        comp = document.getElementById(name)
        comp.style.setProperty('--active', '#c8c8c8')
    }
}, false);


function previousButton() {
    if (current > 1) {
        
        console.log("current: ", current)
        var name = "c" + current
        comp = document.getElementById(name)
        comp.style.color = "#c8c8c8"
        comp.style.border = "3px solid #c8c8c8"
        x = document.querySelector('c2')
        comp.style.setProperty('--active', '#c8c8c8')
        current--
    }
}

function nextButton(this_button) {
    if (current < 4) {
        current++
        console.log("current: ", current)
        var name = "c" + current
        comp = document.getElementById(name)
        comp.style.color = "#3498DB"
        comp.style.border = "3px solid #3498DB"
        comp.style.setProperty('--active', '#3498DB')
    }
}

