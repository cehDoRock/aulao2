



const body = document.querySelector("body");
const btnAdd = document.querySelector('#button-add');
const inputItem = document.querySelector('#input-item');
const ulItems = document.querySelector('#item-list');


btnAdd.addEventListener("click", ()=>{
    ulItems.innerHTML += `
    <li>${inputItem.value}</li>
    `;
});

ulItems.addEventListener("click", (event)=>{
    console.log(event.target)
    if(event.target.tagName === "LI"){
                event.target.remove();
      }
       event.stopPropagation();
})