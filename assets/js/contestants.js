const list=document.getElementById("list");
const modal=document.getElementById("modal");

let data=[];

for(let i=1;i<=50;i++){
data.push({
id:i,
name:"Thí sinh "+i,
desc:"Sinh viên HUIT năng động, tự tin, đại diện cho thế hệ trẻ hiện đại.",
img:"https://via.placeholder.com/250x300"
});
}

function render(){
let votes=JSON.parse(localStorage.getItem("votes")||"{}");

list.innerHTML="";

data.forEach(c=>{
let div=document.createElement("div");
div.className="card";

div.innerHTML=`
<img src="${c.img}" style="width:100%">
<h3>${c.name}</h3>
<p>❤️ ${votes[c.id]||0}</p>
<button class="btn" onclick="vote(${c.id});event.stopPropagation()">Vote</button>
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
<p>${c.desc}</p>
<button class="btn" onclick="vote(${c.id})">Vote</button>
</div>
`;

modal.onclick=()=>modal.style.display="none";
}

render();