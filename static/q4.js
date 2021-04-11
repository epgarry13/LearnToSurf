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

    if (localStorage.getItem("q4") != 'answered'){
        let score = parseInt(localStorage.getItem("score"));
        score += 1;
        localStorage.setItem("score", score.toString());
        localStorage.setItem("q4", 'answered');
    }
});


function getScore(){

    document.querySelector(".score").textContent = localStorage.getItem("score") + "/5";
    if (localStorage.getItem("q4") != 'answered'){
        localStorage.setItem("q4", 'unanswered');
    }
    
}
