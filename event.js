let ebtn = document.querySelector("#event");

ebtn.addEventListener("click", clicked);

function clicked(e){
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
}

ebtn.addEventListener("click", e =>{
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.offsetX);
    console.log(e.offsetY);

    console.log(e.altKey);
    console.log(e.shiftKey);
    console.log(e.ctrlKey);

});

let btnInList = document.querySelectorAll(".btnInList");

btnInList.forEach(x => {
    x.addEventListener("mousemove", e =>{
        x.style.backgroundColor = `rgb(0, ${e.offsetY * 6}, ${5*(e.offsetX + e.offsetY)})`;
        x.style.transition = "all 0s ease";
    })
    x.addEventListener("mouseout", e=>{
        x.style.backgroundColor = "red";
    })
});
