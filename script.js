let view = {
    container : document.querySelector(".container"),
    gridSize : 16,
    maxSize : 80,
}

const resizeBtn = document.getElementById('resize-btn')
const sizeInput = document.getElementById('size-input')
const clearBtn = document.getElementById('clear-btn')

function clearGrid() {
    while (view.container.firstChild) {
        view.container.removeChild(view.container.firstChild)
    }
}

function createGrid(size) {
    view.gridSize = size
    for (let i = 0; i < view.gridSize; i++) {
        const lineDiv = document.createElement("div")
        lineDiv.classList.add("line")
        for (let j = 0; j < view.gridSize; j++) {
            const innerDiv = document.createElement("div")
            innerDiv.classList.add("etch-div")
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
    return `rgb(${r},${g},${b})`
}

function handleCreate() {
    const val = sizeInput.value
    const n = parseInt(val, 10)
    if (Number.isNaN(n) || n <= 0) {
        alert('Please enter a valid positive number')
        return
    }
    if (n > view.maxSize) {
        alert(`Maximum allowed is ${view.maxSize}`)
        return
    }
    clearGrid()
    createGrid(n)
}

resizeBtn.addEventListener('click', handleCreate)
sizeInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleCreate()
})

function clearColors() {
    const cells = view.container.querySelectorAll('.etch-div')
    cells.forEach(cell => cell.style.backgroundColor = '')
}

clearBtn.addEventListener('click', clearColors)

// initialize
createGrid(view.gridSize)
