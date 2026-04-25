// SCROLL
const obs=new IntersectionObserver(e=>{
e.forEach(x=>{if(x.isIntersecting)x.target.classList.add("show")})
});
document.querySelectorAll("section").forEach(el=>obs.observe(el));

// CURSOR EFFECT
const cursor=document.createElement("div");
cursor.className="cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove",e=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});