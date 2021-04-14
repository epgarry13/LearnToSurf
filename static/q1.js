
getScore();

rightAnswer.addEventListener("click", function() {
    if (localStorage.getItem("q1") != 'answered'){
        let score = parseInt(localStorage.getItem("score"));
        score += 1;
        localStorage.setItem("score", score.toString());
        localStorage.setItem("q1", 'answered');
    }

});

function getScore(){
    rightAnswer = document.querySelector('.kook');
    reset = document.querySelector('.modal-ID');

    document.querySelector(".score").textContent = "0/5";
    localStorage.setItem("score", "0");
    if (localStorage.getItem("q1") != 'answered'){
        localStorage.setItem("q1", 'unanswered');
    }


}


reset.addEventListener("click", function() {
    localStorage.setItem("q1", 'unanswered');
    localStorage.setItem("q2", 'unanswered');
    localStorage.setItem("q3", 'unanswered');
    localStorage.setItem("q4", 'unanswered');
});