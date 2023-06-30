window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d")

    canvas.height = window.innerHeight
    canvas.width = window.innerWidth

    let painting = false

    function startPosition(e) {
        painting = true
        draw(e)
    }

    function endPosition(e) {
        painting = false
        ctx.beginPath()
    }

    function draw(e) {
        if (!painting) {
            return
        }
        ctx.linewidth = 30
        ctx.lineCap = "round"
        ctx.strokeStyle = 'white'

        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(e.clientX, e.clientY)
    }

    // Event Listeners
    canvas.addEventListener("mousedown", startPosition)
    canvas.addEventListener("mouseup", endPosition)
    canvas.addEventListener("mousemove", draw)
})
