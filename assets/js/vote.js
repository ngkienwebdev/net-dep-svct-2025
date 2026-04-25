function vote(id){
    let votes = JSON.parse(localStorage.getItem("votes")||"{}");
    votes[id]=(votes[id]||0)+1;
    localStorage.setItem("votes",JSON.stringify(votes));
    location.reload();
}