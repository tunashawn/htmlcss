const card = document.querySelector('.card')
const container = document.querySelector('.container')
const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')



// Move animation event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  })

// Animate IN
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none'
    // Popout text
    title.style.transform = "translateZ(150px)"
    sneaker.style.transform = "translateZ(150px)"
})

// Animate OUT
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    // Popout text
    title.style.transform = "translateZ(0px)"
})