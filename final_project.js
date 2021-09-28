
let form = document.querySelector("#form");
let itemList = document.querySelector("#items");//其他地方宣告過
let newItem = document.querySelector(".textbox");
let delBtn = document.querySelectorAll(".btnInList");
let search = document.querySelector("#search");


form.addEventListener('submit', e=>{
    e.preventDefault();
    //get input value

    let newList = document.createElement("li");
    let newText = document.createTextNode(newItem.value);
    let newBtn = document.createElement("button");
    newBtn.className = "btnInList";
    newBtn.appendChild(document.createTextNode("x"));
    newList.appendChild(newText);
    newList.appendChild(newBtn);

    itemList.insertBefore(newList, itemList.lastChild.nextSibling);

    newItem.value = null;
});

delBtn.forEach( x =>{
    x.addEventListener("click", e=>{
        x.parentNode.remove();
    })
});

itemList.addEventListener('click', removeItem);

function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  };


  search.addEventListener("keyup", e => {
      let text = e.target.value.toLowerCase();
      let items = itemList.querySelectorAll("li");
      items.forEach( x => {
        let itemName = x.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
 
            x.style.display = "block";
            
        } else{

            x.style.display = "none";
            
        }
      });
  })