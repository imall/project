let shoppingCar = document.querySelector(".shopping-Cart")
let faIimes = document.querySelector(".fa-times")
let aSearch = document.querySelector(".aSearch")
let menuControl = document.querySelector(".menu-control")
let mainHeader = document.querySelector(".main-header")
let bgDrop = document.querySelector(".bgdrop")


shoppingCar.addEventListener("click", () => {
    // 控制購物車show出來後 bgdrop 要顯示 (所以remove display:none )
    bgDrop.classList.remove("d-none")
    shoppingCar.nextElementSibling.classList.add("active");
})

faIimes.addEventListener("click", () => {
    // 購物車選單右上角的X  被點擊後， bgdrop 也要隱藏起來
    // 同時購物車本身也要被隱藏
    bgDrop.classList.add("d-none");
    shoppingCar.nextElementSibling.classList.remove("active");
})


aSearch.addEventListener("click", () => {
    // 控制搜尋欄show出來後 bgdrop 要顯示 (所以remove display:none )
    bgDrop.classList.remove("d-none")
    aSearch.nextElementSibling.classList.add("active");
})

menuControl.addEventListener("click", () => {
    bgDrop.classList.remove("d-none")
    mainHeader.classList.add("menu-switch")
})

bgDrop.addEventListener("click", () => {
    // bg的點擊事件，要讓自己消失(增加d-none class) 
    //同時可操控手機選單、購物車列表、搜尋列的消失
    bgDrop.classList.add("d-none");
    mainHeader.classList.remove("menu-switch");
    shoppingCar.nextElementSibling.classList.remove("active");
    aSearch.nextElementSibling.classList.remove("active");
})



