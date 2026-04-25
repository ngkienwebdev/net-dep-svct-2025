/* STAR BACKGROUND */
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.style.position="fixed";
canvas.style.top=0;
canvas.style.zIndex=-1;

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let stars=[];
for(let i=0;i<300;i++){
    stars.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        size:Math.random()*2,
        speed:Math.random()*0.5
    });
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="white";
    stars.forEach(s=>{
        s.y+=s.speed;
        if(s.y>canvas.height) s.y=0;
        ctx.beginPath();
        ctx.arc(s.x,s.y,s.size,0,Math.PI*2);
        ctx.fill();
    });
    requestAnimationFrame(animate);
}
animate();

/* CURSOR */
const cursor=document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove",e=>{
    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";
});

/* RIPPLE CLICK */
document.addEventListener("click",e=>{
    const ripple=document.createElement("span");
    ripple.classList.add("ripple");
    ripple.style.left=e.clientX+"px";
    ripple.style.top=e.clientY+"px";
    document.body.appendChild(ripple);
    setTimeout(()=>ripple.remove(),600);
});

/* SMOOTH SCROLL */
document.documentElement.style.scrollBehavior="smooth";

/* CURSOR GLOW */
const cursor=document.createElement("div");
cursor.style.width="15px";
cursor.style.height="15px";
cursor.style.background="gold";
cursor.style.position="fixed";
cursor.style.borderRadius="50%";
cursor.style.pointerEvents="none";
cursor.style.boxShadow="0 0 20px gold";
document.body.appendChild(cursor);

document.addEventListener("mousemove",e=>{
    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";
});
/* SCROLL PROGRESS BAR */
let bar=document.createElement("div");
bar.style.position="fixed";
bar.style.top=0;
bar.style.height="4px";
bar.style.background="gold";
bar.style.zIndex=9999;
document.body.appendChild(bar);

window.onscroll=()=>{
    let h=document.documentElement.scrollHeight-window.innerHeight;
    let sc=(window.scrollY/h)*100;
    bar.style.width=sc+"%";
};