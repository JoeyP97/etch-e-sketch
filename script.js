const box = document.querySelector(".box")
let num = prompt("How big?")
box.style.cssText = `width:${(num) * 12}px;height:${(num) * 12}px;`
for (let i = 0; i < num*num; i++)  {
    let square = document.createElement("div")
    square.classList.add("square")
    square.addEventListener("mouseover", (event) => {
        event.target.classList.add("black")
    })
    box.appendChild(square)
}

