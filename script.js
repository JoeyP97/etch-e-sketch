const box = document.querySelector(".box")
const brush = document.querySelector("#num")
const rest_btn = document.querySelector("#reset")
const body = document.querySelector("body")
const colorMode = document.querySelector(".color")
let num = 16
function get_num() {
    let temp = prompt("Brush size?")
    if (temp > 100) {
        get_num()
    } else {
        num = temp
    }
}

function reset() {
    box.innerHTML = ''
    start()
}

rest_btn.addEventListener("click", () => {
    reset()
})

brush.addEventListener("click", () => {
   get_num()
   reset()
})


function start() {
    for (let i = 0; i < num*num; i++)  {
        let square = document.createElement("div")
        square.style.cssText = `width:${500/num}px;height:${500/num}px;`
        square.addEventListener("mouseover", (event) => {
            event.target.classList.add("black")
        })
        box.appendChild(square)
    }
}

function randomColor() {
    let R = Math.floor(Math.random() * 256)
    let G = Math.floor(Math.random() * 256)
    let B = Math.floor(Math.random() * 256)
    let randomColor = `rgb(${R},${G},${B})`
    return randomColor
}

body.style.cssText = `Background-color:${randomColor()};`

function startColor() {
    for (let i = 0; i < num*num; i++)  {
        let square = document.createElement("div")
        square.style.cssText = `width:${500/num}px;height:${500/num}px;`
        square.addEventListener("mouseover", (event) => {
            event.target.style.cssText = `width:${500/num}px;height:${500/num}px;Background-color:${randomColor()};`
        })
        box.appendChild(square)
    }
}

colorMode.addEventListener("click", () => {
    box.innerHTML = ''
    startColor()
})

start()