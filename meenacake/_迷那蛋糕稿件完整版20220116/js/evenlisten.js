let shoppingCar = document.querySelector(".shopping-Cart")
let faIimes = document.querySelector(".fa-times")
let aSearch = document.querySelector(".aSearch")

shoppingCar.addEventListener("click",()=>{
    shoppingCar.nextElementSibling.classList.toggle("active");
})

faIimes.addEventListener("click",()=>{
    shoppingCar.nextElementSibling.classList.toggle("active");
})


aSearch.addEventListener("click",()=>{
    aSearch.nextElementSibling.classList.toggle("active");
})



