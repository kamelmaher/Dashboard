let menuIcon = document.querySelector("header .menu")
let menu = document.querySelectorAll("aside li h3")
let logo = document.querySelector("aside .logo h1")
let aside = document.querySelector("aside")
let main = document.querySelector("main");
menuIcon.addEventListener("click" , () => {
    logo.classList.toggle("deleted")
    menu.forEach(e => {
        e.classList.toggle("deleted")
    })
    aside.classList.toggle("change")
    main.classList.toggle("side")
})
