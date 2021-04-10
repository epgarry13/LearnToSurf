
getScore();

rightAnswer = document.querySelector('.kook');

rightAnswer.addEventListener("click", function() {
    let score = parseInt(localStorage.getItem("score"));
    score += 1;
    // alert('Correct! This surfer did not protect his head.')
    localStorage.setItem("score", score.toString());
});


function getScore(){
    document.querySelector(".score").textContent = "0/5";
    localStorage.setItem("score", "0");
}
