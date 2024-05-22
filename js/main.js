// mobile nav

let menu_icon = document.querySelector("#menu_icon");
let liens = document.querySelector("#nav_liens");

menu_icon.addEventListener('click', ()=>{
    liens.classList.toggle('tog')
})

// menu_icon.addEventListener("click", () => {
//     if (getComputedStyle(liens).display == "none") {
//         liens.style.display = "block";
//     } else {
//         liens.style.display = "none";
//     }
// })

// barre de recherche


let sr_icon = document.getElementById("sr_icon");
let search = document.getElementById("search");
let sr2 = document.getElementById("sr2")
sr_icon.addEventListener("click", () => {
    if (getComputedStyle(search).display == "none") {
        search.style.display = "block";
    } else {
        search.style.display = "none";
    }
})

sr2.addEventListener("click", () => {
    if (getComputedStyle(search).display == "none") {
        search.style.display = "block";
    } else {
        search.style.display = "none";
    }
})