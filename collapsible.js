//get all elements with a class of collapsible
const collapsibles = document.querySelectorAll(".collapsible")
console.log(collapsibles);

// loop through each element we selected
collapsibles.forEach((item)=>{ //we'll call each element "item"
    item.addEventListener("click", function(){
        this.classList.toggle("collapsible_expanded")
    })
})