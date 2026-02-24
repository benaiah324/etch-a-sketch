let view = {
    container : document.querySelector(".container"),
    gridSize : 16,
}

createColoredSquare()

function createColoredSquare() {
    for (let i = 0; i < view.gridSize; i++) {
        const lineDiv = document.createElement("div")
        lineDiv.classList.add("line")
        for (let j = 0; j < view.gridSize; j++) {
            const innerDiv = document.createElement("div")
            innerDiv.classList.add("etch-div")
            // generate a new random color each time the cursor enters
            innerDiv.addEventListener("mouseenter", () => {
                innerDiv.style.backgroundColor = getRandomColor()
            })
            lineDiv.appendChild(innerDiv)
        }
        view.container.appendChild(lineDiv)

    }
}

function getRandomColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let rgbRandomColor = `rgb(${r},${g},${b})`

    return rgbRandomColor
}
