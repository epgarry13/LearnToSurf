getScore();

rightAnswer = document.querySelector('.not-kook');

rightAnswer.addEventListener("click", function() {
    let score = parseInt(localStorage.getItem("score"));
    score += 1;
    localStorage.setItem("score", score.toString());
});


function getScore(){
    document.querySelector(".score").textContent = localStorage.getItem("score") + "/5";
}