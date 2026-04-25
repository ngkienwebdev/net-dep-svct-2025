function vote(id){
let now=Date.now();
let last=localStorage.getItem("vote");

if(last && now-last<86400000){
alert("Bạn chỉ vote 1 lần/24h");
return;
}

let data=JSON.parse(localStorage.getItem("votes")||"{}");
data[id]=(data[id]||0)+1;

localStorage.setItem("votes",JSON.stringify(data));
localStorage.setItem("vote",now);

alert("Vote thành công!");
location.reload();
}