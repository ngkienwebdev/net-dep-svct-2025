// SCROLL ANIMATION
const elements=document.querySelectorAll(".fade");

function show(){
elements.forEach(el=>{
const top=el.getBoundingClientRect().top;
if(top<window.innerHeight-100){
el.classList.add("show");
}
});
}
window.addEventListener("scroll",show);
show();

// NAV SCROLL
window.addEventListener("scroll",()=>{
const nav=document.querySelector(".navbar");
if(window.scrollY>50){
nav.style.background="rgba(0,0,50,0.8)";
}else{
nav.style.background="rgba(0,0,30,0.4)";
}
});