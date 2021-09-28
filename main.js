let a = document.querySelector( 'input[type="submit"]' );
console.log(a);

let li = document.querySelectorAll('li');
console.log(li);

for (let i=0;i<li.length;i++){
    if(i%2 == 0){
        li[i].style.color = 'green';
    } else {
        li[i].style.color = "coral";
    }
};


console.log(itemList.nextElementSibling);

let bn = document.querySelector("#button");
bn.addEventListener("click", e => {
    console.log(e);
})











let button = document.querySelector("#btn");
button.addEventListener('click', btnclk);

function btnclk(){
    //alert("clicked!");
    if (document.querySelector("h1").innerText == "Changed"){
        document.querySelector("h1").innerText = "Item List"
    } else{
        document.querySelector("h1").innerText = "Changed";
    }
    
}






//從這裡回憶如何createElement 到 insertBefore

// let newDiv = document.createElement('div');
// newDiv.id = "div1";
// newDiv.className = 'div1';
// let newText = document.createTextNode("cool"); //newDiv.innerText = "cool"; 比較不建議
// newDiv.appendChild(newText);
// console.log(newDiv);

// document.querySelector(".container").insertBefore(newDiv, itemList);