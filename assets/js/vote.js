function vote(id){
let now=Date.now();
let last=localStorage.getItem("vote_time");

if(last && now-last<86400000){
alert("Bạn chỉ được vote 1 lần trong 24h!");
return;
}

let votes=JSON.parse(localStorage.getItem("votes")||"{}");
votes[id]=(votes[id]||0)+1;

localStorage.setItem("votes",JSON.stringify(votes));
localStorage.setItem("vote_time",now);

alert("Vote thành công!");
location.reload();
}