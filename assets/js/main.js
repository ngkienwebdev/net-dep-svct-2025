// SCROLL ANIMATION
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting){e.target.classList.add("show")}
});
});
document.querySelectorAll(".fade").forEach(el=>observer.observe(el));

// CURSOR EFFECT
const cursor=document.createElement("div");
cursor.className="cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove",e=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

// trail
let t=document.createElement("div");
t.className="trail";
t.style.left=e.clientX+"px";
t.style.top=e.clientY+"px";
document.body.appendChild(t);

setTimeout(()=>t.remove(),500);
});