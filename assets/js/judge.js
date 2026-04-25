function submitScore(){
    let id=document.getElementById("contestantId").value;
    let talent=parseFloat(document.getElementById("talent").value);
    let style=parseFloat(document.getElementById("style").value);
    let behavior=parseFloat(document.getElementById("behavior").value);

    let total=(talent+style+behavior)/3;

    let scores=JSON.parse(localStorage.getItem("scores")||"{}");
    scores[id]=total;

    localStorage.setItem("scores",JSON.stringify(scores));

    alert("Đã chấm điểm!");
}