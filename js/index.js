// var shoppinglist = []; // creates an empty array

const itemInput = document.getElementById("items1");
const addBtn = document.getElementById("addlist");
const shoppinglist = document.getElementById("shopping-list");
const feedback = document.querySelector(".feedback");


function addItem(){
    const itemList = document.createElement("li");
    const inputValue = itemInput.value.trim();


    if (inputValue !== ""){
        itemList.textContent = inputValue;
        shoppinglist.appendChild(itemList);
        feedback.textContent = "";
        itemInput.value = "",
        itemInput.focus();
    }else{
        feedback.textContent="Please enter an item..."
    }
}
addBtn.addEventListener("click", addItem);
