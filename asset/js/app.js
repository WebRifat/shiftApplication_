let navBar = document.querySelector("nav");
let user = document.querySelector(".profileName p");
let body = document.querySelector("body");
let profilePics = document.querySelector(".profilePic img");


user.addEventListener("click", ()=>{

    navBar.classList.toggle("active");

});


profilePics.addEventListener("click", ()=>{

    body.classList.toggle("activated");

});

let menuBar = document.querySelector(".menu");
let aside = document.querySelector("aside");





menuBar.addEventListener("click", ()=>{

    aside.classList.add("isactive");

});

let cancelBtn = document.querySelector(".cancelBtn");



cancelBtn.addEventListener("click", ()=>{

    aside.classList.remove("isactive");

});

