const list=document.getElementById("contestantList");

let data=[];
for(let i=1;i<=50;i++){
    data.push({
        id:i,
        name:"Thí sinh "+i,
        desc:"Sinh viên tự tin, bản lĩnh và giàu khát vọng."
    });
}

function getVotes(){
    return JSON.parse(localStorage.getItem("votes")||"{}");
}

function render(arr){
    const votes=getVotes();
    list.innerHTML="";

    arr.forEach(c=>{
        let div=document.createElement("div");
        div.className="card";

        div.innerHTML=`
        <img src="https://via.placeholder.com/250x300">
        <h3>${c.name}</h3>
        <p>❤️ ${votes[c.id]||0} votes</p>
        <button onclick="vote(${c.id})">Vote</button>
        `;

        div.onclick=()=>show(c);
        list.appendChild(div);
    });
}

function show(c){
    const votes=getVotes();
    let modal=document.getElementById("modal");

    modal.style.display="flex";
    modal.innerHTML=`
    <div class="modal-content">
        <h2>${c.name}</h2>
        <p>${c.desc}</p>
        <p>❤️ ${votes[c.id]||0} votes</p>
        <button onclick="vote(${c.id})">Vote</button>
    </div>`;
}

document.getElementById("search").oninput=e=>{
    render(data.filter(c=>c.name.toLowerCase().includes(e.target.value.toLowerCase())));
}

render(data);