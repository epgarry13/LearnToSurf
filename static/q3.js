getScore();

rightAnswer = document.querySelector('.kook');

reset = document.querySelector('.modal-home');

reset.addEventListener("click", function() {
    localStorage.setItem("q1", 'unanswered');
    localStorage.setItem("q2", 'unanswered');
    localStorage.setItem("q3", 'unanswered');
    localStorage.setItem("q4", 'unanswered');
});

rightAnswer.addEventListener("click", function() {

    if (localStorage.getItem("q3") != 'answered'){
        let score = parseInt(localStorage.getItem("score"));
        score += 1;
        localStorage.setItem("score", score.toString());
        localStorage.setItem("q3", 'answered');
    }
});


function getScore(){
    document.querySelector(".score").textContent = localStorage.getItem("score") + "/5";
    if (localStorage.getItem("q3") != 'answered'){
        localStorage.setItem("q3", 'unanswered');
    }
}