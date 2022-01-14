let state=false;
let navbar = document.querySelector('.navbar');
let mid_nav = document.querySelector('.mid-nav');
let right_nav = document.querySelector('.right-nav');
let burger= document.querySelector('.burger');
burger.addEventListener('click',()=>{
    console.log('clicked');
    mid_nav.classList.toggle('hidden');
    right_nav.classList.toggle('hidden');
    navbar.classList.toggle('h-nav');


})
if(mid_nav.style.visibility="visibile"){
    console.log("sada");
}