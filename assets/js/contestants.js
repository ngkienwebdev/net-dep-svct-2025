const list=document.getElementById("list");
const modal=document.getElementById("modal");

let data=[];

// TẠO 50 THÍ SINH
for(let i=1;i<=50;i++){
data.push({
id:i,
name:"Thí sinh "+i,
sbd:"SBD "+(100+i),
img:"https://via.placeholder.com/250x320",
desc:"Sinh viên năng động, tự tin, đại diện cho thế hệ trẻ HUIT."
});
}

function render(){
let votes=JSON.parse(localStorage.getItem("votes")||"{}");

list.innerHTML="";

data.forEach(c=>{
let div=document.createElement("div");
div.className="card";

div.innerHTML=`
<img src="${c.img}">
<h3>${c.name}</h3>
<p>${c.sbd}</p>
<p>❤️ ${votes[c.id]||0}</p>
<button onclick="vote(${c.id});event.stopPropagation()">Bình chọn</button>
`;

div.onclick=()=>showDetail(c);

list.appendChild(div);
});
}

function showDetail(c){
modal.style.display="flex";

modal.innerHTML=`
<div class="modal-content">
<img src="${c.img}" style="width:100%">
<h2>${c.name}</h2>
<p>${c.sbd}</p>
<p>${c.desc}</p>
<button onclick="vote(${c.id})">Bình chọn</button>
</div>
`;

modal.onclick=()=>modal.style.display="none";
}

render();