let mouse = document.querySelector("#mousegoes");
let text = document.querySelector("#box1");

mouse.addEventListener("mousemove", e=> {
    let x = e.offsetX;
    let y = e.offsetY;
    text.innerHTML = "offsetX: " + e.offsetX + "<br>" + "offsetY: " + e.offsetY;
    mouse.style.backgroundColor = `rgb(${x}, ${y}, ${255-x})`;
})

